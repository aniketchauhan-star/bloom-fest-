/* ============================================================================
   Royal Bloom — EMBED BRIDGE
   ----------------------------------------------------------------------------
   Loaded LAST in the learner build, after every game global is up. It does two
   jobs and touches no game logic:

     1. IDLE CHUNKED ASSET PRELOADER (always, embedded or not)
        The engine paints sprites as CSS background-image on nodes that start at
        display:none. A hidden node's background-image is NEVER fetched — so the
        first frame of every level used to hit the network mid-play. This walks
        CONFIG + LAYOUT for every "assets/…" path and warms them in small slices
        during idle time, starting a beat after boot so the intro paints first.

     2. FLIPBOOK HANDSHAKE (only when embedded in the storybook)
        • the start button is tapped   → post {source:"lbd", type:"lbd-start"}
        • the game reaches its ending  → post {source:"lbd", type:"lbd-complete"}
        Standalone (window.parent === window) every post is a no-op and the game
        behaves exactly as it always has.

   Nothing here is on the game's critical path: the walk and every fetch happen
   inside requestIdleCallback slices.
   ============================================================================ */
(function () {
  "use strict";

  var embedded = window.parent && window.parent !== window;

  /* ---- idle scheduling (Safari has no requestIdleCallback) ---------------- */
  var idle = window.requestIdleCallback
    ? function (fn, timeout) { window.requestIdleCallback(fn, { timeout: timeout || 2000 }); }
    : function (fn) { setTimeout(fn, 16); };

  function post(type, extra) {
    if (!embedded) return;
    var msg = { source: "lbd", type: type };
    if (extra) for (var k in extra) msg[k] = extra[k];
    try { window.parent.postMessage(msg, "*"); } catch (_) {}
  }

  /* ========================================================================
     1 — ASSET DISCOVERY
     Every sprite / clip the game will ever need is reachable from the two data
     globals, as a plain string starting "assets/". Walk both once and sort the
     hits by kind.
     ======================================================================== */
  var IMG_RE = /\.(webp|png|jpe?g|gif|svg|avif)$/i;
  var AUD_RE = /\.(mp3|ogg|wav|m4a|aac)$/i;
  var FONT_RE = /\.(ttf|woff2?|otf)$/i;

  // Referenced ONLY from css/style.css url(...) — invisible to a data walk, and
  // the hint backdrop in particular is not needed until a hint fires mid-level.
  //   • LilitaOne-Regular.ttf → @font-face 'GameFont' (every label in the game)
  //   • Slide_16_9_-_184.webp → .rb-hint-backdrop background-image
  // (A grep of the runtime JS turns up no bare "assets/…" string literals, so
  // these two are the whole of the non-data set. Re-check if css/style.css or
  // the js/ folder gains a new url()/literal.)
  var CSS_ONLY = [
    "assets/fonts/LilitaOne-Regular.ttf",
    "assets/img/Slide_16_9_-_184.webp"
  ];

  function collect() {
    var seen = Object.create(null);
    var out = { img: [], aud: [], font: [] };

    function add(path) {
      if (typeof path !== "string" || path.lastIndexOf("assets/", 0) !== 0) return;
      if (seen[path]) return;
      seen[path] = true;
      if (IMG_RE.test(path)) out.img.push(path);
      else if (AUD_RE.test(path)) out.aud.push(path);
      else if (FONT_RE.test(path)) out.font.push(path);
    }

    // Iterative walk — the data tree is deep and a recursive one risks the stack.
    function walk(root) {
      if (!root) return;
      var stack = [root], guard = 0;
      while (stack.length && guard++ < 400000) {
        var v = stack.pop();
        if (typeof v === "string") { add(v); continue; }
        if (!v || typeof v !== "object") continue;
        if (Array.isArray(v)) {
          for (var i = 0; i < v.length; i++) stack.push(v[i]);
        } else {
          for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k)) stack.push(v[k]);
        }
      }
    }

    walk(window.CONFIG);
    walk(window.LAYOUT);
    CSS_ONLY.forEach(add);
    return out;
  }

  /* ========================================================================
     2 — CHUNKED WARM-UP
     Small slices so a mid-level idle window is never blown: 3 images or 2 audio
     clips at a time. Audio goes through the game's OWN AudioManager cache first
     (prepareNarration → elementFor caches the element), so the very element that
     later plays is the one we warmed; the fetch() that follows pulls the whole
     file into the HTTP cache so that element can start instantly instead of
     streaming. Images get an Image() (HTTP + decode) which is what a later
     background-image on a hidden node will reuse.
     ======================================================================== */
  var IMG_PER_SLICE = 3;
  var AUD_PER_SLICE = 2;
  var stats = { total: 0, done: 0, img: 0, aud: 0, font: 0, failed: [], finished: false };

  function warmImage(src) {
    return new Promise(function (res) {
      var im = new Image();
      im.onload = function () {
        stats.img++;
        if (im.decode) im.decode().then(res, res); else res();
      };
      im.onerror = function () { stats.failed.push(src); res(); };
      im.src = src;
    });
  }

  function warmAudio(src) {
    // 1) the game's own cache — this is the element that will actually play
    var viaManager = (window.AudioManager && window.AudioManager.prepareNarration)
      ? window.AudioManager.prepareNarration(src)
      : Promise.resolve(0);
    // 2) the whole file into the HTTP cache
    var viaFetch = fetch(src, { cache: "force-cache" })
      .then(function (r) { return r.ok ? r.arrayBuffer() : Promise.reject(r.status); })
      .then(function () { stats.aud++; })
      .catch(function () { stats.failed.push(src); });
    return Promise.all([viaManager, viaFetch]);
  }

  function warmFont(src) {
    return fetch(src, { cache: "force-cache" })
      .then(function (r) { return r.ok ? r.arrayBuffer() : Promise.reject(r.status); })
      .then(function () { stats.font++; })
      .catch(function () { stats.failed.push(src); });
  }

  function runPreloader() {
    var a = collect();
    // Images first: a level that pops in un-decoded art is the visible failure;
    // a clip that streams a beat late is not.
    var queue = []
      .concat(a.font.map(function (s) { return { kind: "font", src: s }; }))
      .concat(a.img.map(function (s) { return { kind: "img", src: s }; }))
      .concat(a.aud.map(function (s) { return { kind: "aud", src: s }; }));
    stats.total = queue.length;

    var i = 0;
    function slice() {
      if (i >= queue.length) {
        stats.finished = true;
        post("lbd-preloaded", { total: stats.total, failed: stats.failed.length });
        return;
      }
      var batch = [], kind = queue[i].kind;
      var per = kind === "aud" ? AUD_PER_SLICE : IMG_PER_SLICE;
      while (i < queue.length && batch.length < per && queue[i].kind === kind) batch.push(queue[i++]);
      Promise.all(batch.map(function (item) {
        stats.done++;
        return item.kind === "img" ? warmImage(item.src)
             : item.kind === "aud" ? warmAudio(item.src)
             : warmFont(item.src);
      })).then(function () { idle(slice); });
    }
    idle(slice);
  }

  // ~1s after boot, so the intro screen has painted and decoded first.
  setTimeout(function () { idle(runPreloader, 4000); }, 1000);

  /* ========================================================================
     3 — HANDSHAKE (embedded only)
     ======================================================================== */
  if (embedded) {
    var CFG = window.CONFIG || {};

    /* -- START ------------------------------------------------------------
       ⚠ CAPTURE PHASE. The engine's own click handler for this button flips a
       `done` latch and calls setInteractable(false) synchronously; a listener
       added afterwards on the bubble phase can see a disabled button and never
       run. Capture puts us ahead of it, and we only observe — never preventDefault
       — so the game's own start behaviour is untouched.
       The button id comes from CONFIG.btnAnim (the intro "Let's Go"), not a
       hard-coded string, so re-authoring the intro can't silently break this. */
    var startIds = Object.keys(CFG.btnAnim || {}).map(function (k) {
      var g = CFG.btnAnim[k] && CFG.btnAnim[k].goButton;
      return g && g.node ? g.node : k;
    });
    startIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var fired = false;
      ["pointerdown", "click"].forEach(function (ev) {
        el.addEventListener(ev, function () {
          if (fired) return; fired = true;
          post("lbd-start");
        }, true);
      });
    });

    /* -- COMPLETE ---------------------------------------------------------
       The real ending is GameManager.showFinalScreen() on the LAST level: it
       waits a second, reveals the final-screen node, bursts confetti, then plays
       a closing voice-over ("yey, path cleared!"). There is no event for any of
       that, so we watch the node the engine toggles — setActive() writes
       el.style.display — and then wait for the closing VO to actually finish, so
       the story never cuts the celebration off mid-sentence.
       Both the node id and the clip come from the level config. */
    var finalNodeIds = [], finalClips = [];
    (CFG.gameManagers || []).forEach(function (g) {
      var f = g.fields || {};
      if (f.finalScreen && f.finalScreen.node) finalNodeIds.push(f.finalScreen.node);
      if (f.finalScreenAudio && f.finalScreenAudio.audio) finalClips.push(f.finalScreenAudio.audio);
    });

    // The AudioManager hands back the element it is about to play; keep the last
    // one so we can wait on the closing VO by identity rather than by guessing.
    var lastNarration = null;
    if (window.AudioManager && window.AudioManager.startNarration) {
      var origStart = window.AudioManager.startNarration;
      window.AudioManager.startNarration = function (src) {
        var el = origStart.apply(this, arguments);
        if (el) lastNarration = { el: el, src: src };
        return el;
      };
    }

    var completed = false;
    function complete() {
      if (completed) return; completed = true;
      post("lbd-complete");
    }

    // SAFETY: a missing / un-decodable clip must never strand the learner on a
    // screen with no way out, so the wait is always bounded.
    var VO_GRACE_MS = 4000;     // let the last word land before the page turns
    var VO_MAX_MS   = 30000;    // hard ceiling, whatever the clip claims
    var NO_VO_MS    = 3000;     // no closing VO → just a beat on the celebration

    function waitForEndingThenComplete() {
      // showFinalScreen() reveals the node and starts the VO in the same tick;
      // give it a moment so `lastNarration` is the CLOSING clip, not the previous one.
      setTimeout(function () {
        var n = lastNarration;
        var isFinalClip = n && (!finalClips.length || finalClips.indexOf(n.src) >= 0);
        if (!n || !isFinalClip || n.el.ended || n.el.paused) { setTimeout(complete, NO_VO_MS); return; }
        n.el.addEventListener("ended", function () { setTimeout(complete, VO_GRACE_MS); }, { once: true });
        var dur = isFinite(n.el.duration) && n.el.duration > 0 ? n.el.duration * 1000 : 15000;
        setTimeout(complete, Math.min(dur + VO_GRACE_MS + 2000, VO_MAX_MS));
      }, 700);
    }

    function watchFinalScreen(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var wasShown = el.style.display !== "none";
      new MutationObserver(function () {
        var shown = el.style.display !== "none";
        if (shown && !wasShown) waitForEndingThenComplete();
        wasShown = shown;
      }).observe(el, { attributes: true, attributeFilter: ["style"] });
      if (wasShown) waitForEndingThenComplete();   // already up (shouldn't happen, but harmless)
    }
    finalNodeIds.forEach(watchFinalScreen);

    // Tell the shell the engine is up and the intro has painted, so it knows the
    // silent background boot actually succeeded.
    post("lbd-ready");
  }

  // Handle for the shell's verification pass and for debugging.
  window.__embedBridge = {
    embedded: embedded,
    stats: function () { return stats; },
    assets: collect
  };
})();
