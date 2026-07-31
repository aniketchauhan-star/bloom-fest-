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
  var VOL = { bgm: 0.30, bgmDucked: 0.14, narration: 1, sfx: 0.75 };
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

  // -------- lifecycle --------
  function stopAll() { stopNarration(); stopBGM(); }
  function setMuted(on) { muted = !!on; if (muted) stopAll(); }
  function stats() {
    return {
      unlocked: unlocked, bgm: bgmSrc, narration: narrationSrc, narrationActive: narrationActive(),
      bgmVolume: bgm ? volOf(bgm) : null, bgmBase: bgmBase, ducked: ducked, lastSFX: lastSfxSrc, sfxPlays: sfxPlays
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
    playSFX: playSFX,
    stopAll: stopAll, setMuted: setMuted, stats: stats
  };
})();
if (typeof module !== "undefined") module.exports = AudioManager;
