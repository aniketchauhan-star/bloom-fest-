/* Royal Bloom — AudioManager. Three channels (BGM / narration / one-shot SFX),
 * gesture unlock, single-narration guarantee, metadata preload for VO/text sync,
 * and safe handling of load/playback failures. No absolute paths ever reach here
 * (data is normalized), but a null/missing clip is tolerated silently.
 */
var AudioManager = (function () {
  "use strict";

  var DEV = false;
  var unlocked = false;
  var muted = false;
  var cache = {};            // src -> HTMLAudioElement (metadata/one primary instance)
  var bgm = null, bgmSrc = null;
  var narration = null, narrationSrc = null;
  var pendingBgm = null;     // start requested before unlock
  var lastSfx = {};          // src -> timestamp (debounce rapid identical SFX)
  var errored = {};          // src -> true (already reported failure)

  function warn(m) { if (DEV) console.warn("[RB audio] " + m); }
  function ok(src) { return typeof src === "string" && src.length > 0; }

  function elementFor(src) {
    if (!ok(src)) return null;
    var a = cache[src];
    if (!a) {
      a = new Audio();
      a.preload = "metadata";
      a.src = src;
      a.addEventListener("error", function () {
        if (!errored[src]) { errored[src] = true; warn("failed to load " + src); }
      });
      cache[src] = a;
    }
    return a;
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
    try { bgm.currentTime = bgm.currentTime; } catch (e) {}
    safePlay(bgm);
  }
  function stopBGM() { if (bgm) { try { bgm.pause(); bgm.currentTime = 0; } catch (e) {} } }

  // -------- narration (only one at a time) --------
  function startNarration(src) {
    stopNarration();
    if (muted || !ok(src)) return null;
    narration = elementFor(src); narrationSrc = src;
    narration.loop = false;
    try { narration.currentTime = 0; } catch (e) {}
    safePlay(narration);
    return narration;
  }
  function stopNarration() {
    if (narration) { try { narration.pause(); narration.currentTime = 0; } catch (e) {} narration = null; narrationSrc = null; }
  }
  function narrationActive() { return !!(narration && !narration.paused); }

  // -------- one-shot SFX --------
  function playSFX(src) {
    if (muted || !ok(src)) return;
    var t = performance.now();
    if (lastSfx[src] && t - lastSfx[src] < 120) return; // debounce rapid identical presses
    lastSfx[src] = t;
    var base = elementFor(src);
    var inst;
    try { inst = base.cloneNode(); } catch (e) { inst = base; }
    inst.loop = false;
    safePlay(inst);
  }

  // -------- lifecycle --------
  function stopAll() { stopNarration(); stopBGM(); }
  function setMuted(on) { muted = !!on; if (muted) stopAll(); }
  function stats() { return { unlocked: unlocked, bgm: bgmSrc, narration: narrationSrc, narrationActive: narrationActive() }; }

  function init(opts) {
    opts = opts || {};
    DEV = !!opts.dev;
    installUnlock();
    // pause everything when the tab is hidden; resume BGM when visible again
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { stopNarration(); if (bgm) try { bgm.pause(); } catch (e) {} }
      else if (bgm && bgmSrc && unlocked && !muted) safePlay(bgm);
    });
    window.addEventListener("blur", function () { stopNarration(); });
  }

  return {
    init: init, unlock: unlock,
    prepareNarration: prepareNarration,
    playBGM: playBGM, stopBGM: stopBGM,
    startNarration: startNarration, stopNarration: stopNarration, narrationActive: narrationActive,
    playSFX: playSFX,
    stopAll: stopAll, setMuted: setMuted, stats: stats
  };
})();
if (typeof module !== "undefined") module.exports = AudioManager;
