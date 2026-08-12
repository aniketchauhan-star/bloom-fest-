/* Royal Bloom — AudioManager. Three channels (BGM / narration / one-shot SFX) at
 * distinct levels with the music DUCKED under narration, gesture unlock, single-
 * narration guarantee, metadata preload for VO/text sync, and safe handling of
 * load/playback failures. No absolute paths ever reach here (data is normalized),
 * but a null/missing clip is tolerated silently.
 */
var AudioManager = (function () {
  "use strict";

  // Channel levels. Every element used to play at 1.0, so the looping music sat ON TOP of the
  // voice and drowned it. The music is a bed: quiet by default, and ducked further while a
  // narration clip is playing so the child always hears the instruction.
  // Narration runs almost continuously in this game, so the ducked level is what the music sits at for
  // most of the session — set it too low (it was 0.07) and the BGM reads as "not playing" on laptop or
  // phone speakers. These levels keep the voice clearly on top while the music stays audible throughout.
  // Balanced between the two failure modes QA hit: at 0.18/0.07 the music read as "not playing", and
  // anything much above this starts competing with the voice. The voice is ~7x the ducked music level,
  // so narration always wins, while the music stays clearly present between and under lines.
  // ui sits between the ducked music (0.14) and the voice (1.0): clearly present over the bed and
  // over a noisy room, still obviously behind narration. 0.32 was too polite — on a tablet speaker
  // the blips were easy to miss entirely, which defeats the point of having them.
  var VOL = { bgm: 0.30, bgmDucked: 0.14, narration: 1, sfx: 0.75, ui: 0.55 };
  var DUCK_MS = 250;         // ramp length: fast enough to be under the first word, slow enough not to click

  var DEV = false;
  var unlocked = false;
  var muted = false;
  var cache = {};            // src -> HTMLAudioElement (metadata/one primary instance)
  var bgm = null, bgmSrc = null;
  var narration = null, narrationSrc = null;
  var pendingBgm = null;     // start requested before unlock
  var lastSfx = {};          // src -> timestamp (debounce rapid identical SFX)
  var lastSfxSrc = null;     // diagnostics: the most recent one-shot played
  var sfxPlays = 0;          // diagnostics: how many one-shots have actually fired
  var errored = {};          // src -> true (already reported failure)
  var bgmBase = VOL.bgm;     // current (un-ducked) music level
  var ducked = false;        // music currently lowered for narration
  var rampTimer = null;      // in-flight volume ramp (one at a time)

  function warn(m) { if (DEV) console.warn("[RB audio] " + m); }
  function ok(src) { return typeof src === "string" && src.length > 0; }

  function elementFor(src) {
    if (!ok(src)) return null;
    var a = cache[src];
    if (!a) {
      a = new Audio();
      // "auto", not "metadata": the clips are small and every one is warmed after boot, so playback
      // starts on the first frame instead of buffering — which is what put the voice behind the text.
      a.preload = "auto";
      a.src = src;
      a.addEventListener("error", function () {
        if (!errored[src]) { errored[src] = true; warn("failed to load " + src); }
      });
      cache[src] = a;
    }
    return a;
  }

  // -------- volume / ducking --------
  function setVol(a, v) { if (!a) return; try { a.volume = Math.max(0, Math.min(1, v)); } catch (e) {} }
  function volOf(a) { return a && typeof a.volume === "number" ? a.volume : 1; }
  function bgmTarget() { return ducked ? Math.min(VOL.bgmDucked, bgmBase) : bgmBase; }
  // Ramp the music to a level instead of jumping (a hard volume change clicks). One ramp at a
  // time — a new one cancels the old, so overlapping duck/unduck calls can never fight or leave
  // the music stuck quiet.
  function rampBGM(to) {
    if (rampTimer != null) { clearInterval(rampTimer); rampTimer = null; }
    if (!bgm) return;
    var from = volOf(bgm), steps = Math.max(1, Math.round(DUCK_MS / 40)), i = 0;
    if (Math.abs(to - from) < 0.005) { setVol(bgm, to); return; }
    rampTimer = setInterval(function () {
      i++;
      var t = i / steps;
      setVol(bgm, from + (to - from) * t);
      if (i >= steps) { clearInterval(rampTimer); rampTimer = null; setVol(bgm, to); }
    }, 40);
  }
  function duckBGM(on) {
    if (ducked === !!on) return;
    ducked = !!on;
    rampBGM(bgmTarget());
  }
  function setBGMVolume(v) {
    bgmBase = Math.max(0, Math.min(1, typeof v === "number" ? v : VOL.bgm));
    rampBGM(bgmTarget());
  }

  function safePlay(a) {
    if (!a) return Promise.resolve();
    try {
      var p = a.play();
      if (p && p.catch) return p.catch(function (e) { warn("play() rejected: " + (e && e.message)); });
      return Promise.resolve();
    } catch (e) { warn("play() threw: " + (e && e.message)); return Promise.resolve(); }
  }

  // -------- unlock on first user gesture --------
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    // The Web Audio context used by the UI sounds is created suspended until a gesture; resume it
    // on the same gesture that unlocks playback, so the very first tap is already audible.
    var c = uiCtx();
    if (c && c.state === "suspended") { try { c.resume(); } catch (e) {} }
    // prime the audio context by touching a cached element
    if (pendingBgm) { var s = pendingBgm; pendingBgm = null; playBGM(s); }
  }
  function installUnlock() {
    var handler = function () { unlock(); };
    ["pointerdown", "touchstart", "keydown", "click"].forEach(function (ev) {
      window.addEventListener(ev, handler, { once: true, capture: true });
    });
  }

  // -------- metadata preload (for VO / typing sync) --------
  function prepareNarration(src) {
    return new Promise(function (res) {
      if (!ok(src)) return res(0);
      var a = elementFor(src);
      if (a.readyState >= 1 && isFinite(a.duration) && a.duration > 0) return res(a.duration);
      var done = false;
      var finish = function () { if (done) return; done = true; res(isFinite(a.duration) ? a.duration : 0); };
      a.addEventListener("loadedmetadata", finish, { once: true });
      a.addEventListener("error", function () { if (!done) { done = true; res(0); } }, { once: true });
      try { a.load(); } catch (e) {}
      setTimeout(finish, 1500); // fallback: never block typing more than 1.5s
    });
  }

  // -------- BGM --------
  function playBGM(src) {
    if (muted || !ok(src)) return;
    if (!unlocked) { pendingBgm = src; return; }
    if (bgm && bgmSrc === src && !bgm.paused) return; // single instance, already playing
    if (bgm && bgmSrc !== src) { try { bgm.pause(); } catch (e) {} }
    bgm = elementFor(src); bgmSrc = src;
    bgm.loop = true;
    setVol(bgm, bgmTarget());          // music is a quiet bed, ducked further if a VO is already running
    try { bgm.currentTime = bgm.currentTime; } catch (e) {}
    safePlay(bgm);
  }
  function stopBGM() { if (bgm) { try { bgm.pause(); bgm.currentTime = 0; } catch (e) {} } }

  // -------- narration (only one at a time) --------
  // onPlaying (optional) fires when the clip is REALLY producing sound, so the caller can start the
  // typing exactly then and the words track the voice. It is capped: if the browser never reports
  // playback (or audio is blocked), it fires anyway after PLAY_GATE_MS so the text can never be stuck.
  var PLAY_GATE_MS = 250;
  function startNarration(src, onPlaying) {
    stopNarration();
    if (muted || !ok(src)) { if (onPlaying) onPlaying(); return null; }
    narration = elementFor(src); narrationSrc = src;
    narration.loop = false;
    setVol(narration, VOL.narration);
    // Un-duck when the clip finishes on its own (stopNarration covers the interrupted case). One
    // listener per cached element, guarded — elementFor returns the SAME element for a repeated clip.
    if (!narration._rbEnded) {
      narration._rbEnded = true;
      narration.addEventListener("ended", function () { if (!narrationActive()) duckBGM(false); });
    }
    try { narration.currentTime = 0; } catch (e) {}
    if (onPlaying) {
      var fired = false, gate = function () { if (fired) return; fired = true; try { onPlaying(); } catch (e) {} };
      narration.addEventListener("playing", gate, { once: true });
      setTimeout(gate, PLAY_GATE_MS);
    }
    safePlay(narration);
    duckBGM(true);                     // drop the music under the voice
    return narration;
  }
  function stopNarration() {
    if (narration) { try { narration.pause(); narration.currentTime = 0; } catch (e) {} narration = null; narrationSrc = null; }
    duckBGM(false);                    // voice gone -> music back to its normal bed level
  }
  function narrationActive() { return !!(narration && !narration.paused); }

  // -------- one-shot SFX --------
  function playSFX(src) {
    if (muted || !ok(src)) return;
    var t = performance.now();
    if (lastSfx[src] && t - lastSfx[src] < 120) return; // debounce rapid identical presses
    lastSfx[src] = t;
    lastSfxSrc = src; sfxPlays++;
    var base = elementFor(src);
    var inst;
    try { inst = base.cloneNode(); } catch (e) { inst = base; }
    inst.loop = false;
    setVol(inst, VOL.sfx);             // audible, but never over the voice
    safePlay(inst);
  }

  // -------- procedural UI sounds (tap / pick up / place / reject) --------
  // Nothing in assets/audio can serve as an interaction sound: every clip is 1.3-2.8s of voice or a
  // 2.8s chime. Firing one of those on a tap would talk straight over the narration and stack into
  // mush on a quick drag. These are synthesised instead — no new files, and being generated means
  // each one can be kept to ~100ms and pitched to sit in the gaps of the music rather than fight it.
  //
  // Each sound is a stack of voices (see UI_SOUNDS below), optionally delayed so several form a
  // little phrase. Every interaction gets its own TEXTURE, not just its own note — see the design
  // notes on UI_SOUNDS for why that distinction is the whole point.
  var actx = null, uiBus = null;
  function uiCtx() {
    if (actx) return actx;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      actx = new AC();
      uiBus = actx.createGain();
      uiBus.gain.value = VOL.ui;                 // one bus, so every UI sound sits under the voice
      uiBus.connect(actx.destination);
    } catch (e) { actx = null; }
    return actx;
  }
  // WHAT MAKES THESE READ AS DIFFERENT SOUNDS — and the mistake in the first pass.
  //
  // The first version was seven pitch sweeps on sine/triangle oscillators. Different notes, but the
  // same TIMBRE every time, so they all landed as "a beep" and blurred into each other. The ear
  // identifies an everyday sound by its texture and its attack far more than by its pitch: a click
  // is noise with an instant attack; a swoosh is filtered noise with a slow attack; a knock is a
  // fast downward pitch drop; a rejected thud is a muffled buzz with the top rolled off.
  //
  // So a voice can now be NOISE as well as a tone, can run through a sweeping filter, and carries
  // its own attack. Each action is built to a distinct physical character:
  //
  //   tap    a crisp plastic CLICK        noise burst + tiny tonal body
  //   pick   a soft rising SWOOSH         noise through a filter sweeping upward, slow attack
  //   place  a wooden KNOCK               fast downward pitch drop + impact transient
  //   nope   a dull muffled THUD          buzzy tone with the highs filtered off
  //   correct  a bright CHIME + shimmer   two clean notes + a high noise sparkle
  //   wrongTap a comic falling SLIDE      one tone bending down, no noise at all
  //   complete a fanfare + shimmer        three rising notes + sparkle
  //
  // Fundamentals stay in the 300-1800Hz band a tablet speaker can actually reproduce, and the noise
  // components carry the rest — noise survives a small speaker far better than a low sine does.
  var UI_SOUNDS = {
    // a button was pressed: a click, not a beep. Noise gives it the "plastic" snap.
    tap: [
      { src: "noise", filter: { type: "bandpass", f0: 2400, q: 1.1 }, a: 0.001, d: 0.035, gain: 0.85 },
      { src: "triangle", f0: 900, f1: 620, a: 0.002, d: 0.07, gain: 0.45 }
    ],
    // an item was lifted: air moving. The SLOW attack is what makes it a swoosh and not a blip.
    pick: [
      { src: "noise", filter: { type: "bandpass", f0: 600, f1: 3200, q: 3.5 }, a: 0.035, d: 0.16, gain: 0.75 },
      { src: "sine", f0: 520, f1: 940, a: 0.025, d: 0.14, gain: 0.30 }
    ],
    // it settled on a pan: a wooden knock — the fast pitch drop IS the "hit".
    place: [
      { src: "triangle", f0: 660, f1: 190, a: 0.001, d: 0.13, gain: 0.90 },
      { src: "noise", filter: { type: "lowpass", f0: 1400, q: 0.8 }, a: 0.001, d: 0.03, gain: 0.40 }
    ],
    // released over nothing: a dull thud. Square through a low lowpass = muffled, clearly "no".
    nope: [
      { src: "square", f0: 320, f1: 200, filter: { type: "lowpass", f0: 900, q: 1 }, a: 0.004, d: 0.20, gain: 0.55 },
      { src: "noise", filter: { type: "lowpass", f0: 600, q: 0.7 }, a: 0.002, d: 0.05, gain: 0.35 }
    ],
    // right item tapped: clean bell notes plus a high sparkle, the brightest thing in the game.
    correct: [
      { src: "sine", f0: 880, a: 0.005, d: 0.20, gain: 0.60 },
      { src: "sine", f0: 1320, a: 0.005, d: 0.30, gain: 0.60, delay: 0.09 },
      { src: "noise", filter: { type: "bandpass", f0: 3200, f1: 6500, q: 6 }, a: 0.012, d: 0.28, gain: 0.22, delay: 0.09 }
    ],
    // wrong item tapped: a comic slide downward. Deliberately NO noise, so it cannot be mistaken
    // for the "nope" thud — that one is texture, this one is melody.
    wrongTap: [
      { src: "triangle", f0: 560, f1: 300, a: 0.006, d: 0.30, gain: 0.70 },
      { src: "triangle", f0: 420, f1: 225, a: 0.006, d: 0.32, gain: 0.55, delay: 0.11 }
    ],
    // TWO moments deliberately have no sound here, because both already carry the authored 2.81s
    // magical chime and anything added plays on top of it rather than after it:
    //   - a correct basket/wagon drop (dropSFX fires the chime)
    //   - clearing the stage, which happens in the SAME FRAME as the final drop
    // A three-note fanfare used to sit on the second of those and was heard as a doubled sound.
  };
  var lastUI = {};
  // One second of white noise, built once and looped. Generated from a fixed seed rather than
  // Math.random so every playback of a sound is bit-identical — a sound that is subtly different
  // each time reads as a glitch, and it keeps the audio reproducible for QA.
  var noiseBuf = null;
  function noiseBuffer(c) {
    if (noiseBuf) return noiseBuf;
    var n = Math.floor(c.sampleRate * 0.5);
    noiseBuf = c.createBuffer(1, n, c.sampleRate);
    var d = noiseBuf.getChannelData(0), seed = 20260812;
    for (var i = 0; i < n; i++) { seed = (seed * 1103515245 + 12345) & 0x7fffffff; d[i] = (seed / 0x40000000) - 1; }
    return noiseBuf;
  }
  // one voice: a noise or tone source -> optional sweeping filter -> its own attack/decay envelope.
  // The envelope is RAMPED, never stepped — an instant gain change is an audible click by itself.
  function voice(c, v, t) {
    var atk = v.a || 0.003, dur = atk + v.d, src;
    if (v.src === "noise") {
      src = c.createBufferSource(); src.buffer = noiseBuffer(c); src.loop = true;
    } else {
      src = c.createOscillator(); src.type = v.src;
      src.frequency.setValueAtTime(v.f0, t);
      if (v.f1 && v.f1 !== v.f0) src.frequency.exponentialRampToValueAtTime(Math.max(1, v.f1), t + dur);
    }
    var node = src;
    if (v.filter) {
      var flt = c.createBiquadFilter();
      flt.type = v.filter.type;
      flt.Q.value = v.filter.q || 1;
      flt.frequency.setValueAtTime(v.filter.f0, t);
      if (v.filter.f1) flt.frequency.exponentialRampToValueAtTime(Math.max(1, v.filter.f1), t + dur);
      node.connect(flt); node = flt;
    }
    var g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, v.gain), t + atk);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    node.connect(g); g.connect(uiBus);
    src.start(t); src.stop(t + dur + 0.02);
  }
  function playUI(name) {
    if (muted) return;
    var voices = UI_SOUNDS[name]; if (!voices) return;
    var t0 = performance.now();
    if (lastUI[name] && t0 - lastUI[name] < 60) return;      // a double-fire is a flam, not a sound
    lastUI[name] = t0;
    var c = uiCtx(); if (!c) return;
    if (c.state === "suspended") { try { c.resume(); } catch (e) {} }
    try {
      var now0 = c.currentTime;
      for (var i = 0; i < voices.length; i++) voice(c, voices[i], now0 + (voices[i].delay || 0));
      uiPlays++; lastUISound = name;
    } catch (e) {}
  }
  function setUIVolume(v) { VOL.ui = Math.max(0, Math.min(1, typeof v === "number" ? v : 0.55)); if (uiBus) uiBus.gain.value = VOL.ui; }
  var uiPlays = 0, lastUISound = null;

  // -------- lifecycle --------
  function stopAll() { stopNarration(); stopBGM(); }
  function setMuted(on) { muted = !!on; if (muted) stopAll(); }
  function stats() {
    return {
      unlocked: unlocked, bgm: bgmSrc, narration: narrationSrc, narrationActive: narrationActive(),
      bgmVolume: bgm ? volOf(bgm) : null, bgmBase: bgmBase, ducked: ducked, lastSFX: lastSfxSrc, sfxPlays: sfxPlays,
      ui: VOL.ui, uiPlays: uiPlays, lastUI: lastUISound, uiCtx: actx ? actx.state : null
    };
  }

  function init(opts) {
    opts = opts || {};
    DEV = !!opts.dev;
    installUnlock();
    // pause everything when the tab is hidden; resume BGM when visible again
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { stopNarration(); if (bgm) try { bgm.pause(); } catch (e) {} }
      else if (bgm && bgmSrc && unlocked && !muted) { setVol(bgm, bgmTarget()); safePlay(bgm); }   // resume at the right level, never full blast
    });
    window.addEventListener("blur", function () { stopNarration(); });
  }

  return {
    init: init, unlock: unlock,
    prepareNarration: prepareNarration,
    playBGM: playBGM, stopBGM: stopBGM, setBGMVolume: setBGMVolume, duckBGM: duckBGM, levels: function () { return Object.assign({}, VOL); },
    startNarration: startNarration, stopNarration: stopNarration, narrationActive: narrationActive,
    playSFX: playSFX, playUI: playUI, setUIVolume: setUIVolume,
    stopAll: stopAll, setMuted: setMuted, stats: stats
  };
})();
if (typeof module !== "undefined") module.exports = AudioManager;
