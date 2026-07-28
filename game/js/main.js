/* Royal Bloom — bootstrap / wiring: boot, config validation, one-active-level
 * mounting with disposal, next-level preloading, and dev-only diagnostics.
 */
(function () {
  "use strict";
  var E = Engine, C = Controllers, Audio = AudioManager;
  var CFG = window.CONFIG, LAY = window.LAYOUT;

  var DEV = /[?&]dev=1/.test(location.search) ||
    ["localhost", "127.0.0.1", "0.0.0.0", ""].indexOf(location.hostname) >= 0;

  // ---- development error logging ----
  if (DEV) {
    window.addEventListener("error", function (e) { console.error("[RB error]", e.message, e.filename + ":" + e.lineno); });
    window.addEventListener("unhandledrejection", function (e) { console.error("[RB unhandledrejection]", e.reason); });
  }

  // ---- boot engine + audio ----
  E.boot(LAY, CFG, { dev: DEV });
  Audio.init({ dev: DEV });

  var nidOf = function (x) { return x && x.node ? x.node : null; };

  // ---- boot-time config validation ----
  function validateConfig() {
    var problems = [];
    (CFG.gameManagers || []).forEach(function (g) {
      var f = g.fields || {}, label = g.host;
      var book = nidOf(f.bookDraggable), ball = nidOf(f.ballDraggable);
      var p4a = nidOf(f.bookDraggablePart4), p4b = nidOf(f.ballDraggablePart4);
      [["bookDraggable", book], ["ballDraggable", ball], ["part4 A", p4a], ["part4 B", p4b]].forEach(function (pair) {
        if (!pair[1]) problems.push(label + ": missing " + pair[0]);
      });
      var mode = f.answerMode;
      if (mode !== 0 && mode !== 1) problems.push(label + ": invalid answerMode " + mode);
      function w(id) { var d = (CFG.draggables || {})[id]; return d && d.itemData ? d.itemData.weight : NaN; }
      [book, ball, p4a, p4b].forEach(function (id) { if (id && !isFinite(w(id))) problems.push(label + ": non-finite weight for " + id); });
      if (book && ball && w(book) === w(ball)) problems.push(label + ": Part 3 items have equal weight (no valid lighter/heavier)");
      if (p4a && p4b && w(p4a) === w(p4b)) problems.push(label + ": Part 4 items have equal weight (cannot sort)");
      // scale + destination targets exist
      ["leftDropPoint", "rightDropPoint", "basket", "trolley", "basketDropPoint", "trolleyDropPoint"].forEach(function (key) {
        var id = nidOf(f[key]); if (id && !E.get(id)) problems.push(label + ": " + key + " -> missing node " + id);
      });
      // Part 4 zones: exactly one basket + one wagon for this level
      var zones = Object.keys(CFG.baskets || {}).filter(function (zid) { var b = CFG.baskets[zid]; return nidOf(b.gameManager) === label && b.isPart4; });
      var baskets = zones.filter(function (zid) { return CFG.baskets[zid].isBasket; });
      if (zones.length !== 2 || baskets.length !== 1) problems.push(label + ": Part 4 must have exactly 1 basket + 1 wagon (got " + zones.length + " zones, " + baskets.length + " baskets)");
    });
    // exactly one of each level-flow root, in order
    var rootIds = (LAY.children || []).map(function (c) { return c.id; });
    ["n2_Intro_1", "n5_Tutorial", "n105_Level_1", "n206_Level_2", "n307_Level_3", "n410_Level_4"].forEach(function (id) {
      if (rootIds.indexOf(id) < 0) problems.push("missing flow root " + id);
    });
    if (problems.length) {
      var msg = "Config validation failed:\n  - " + problems.join("\n  - ");
      if (DEV) throw new Error(msg); else console.error("[RB] " + msg);
    }
  }
  validateConfig();

  // ---- balance-scale animators (beam rotates + pans translate; root/support fixed) ----
  var scaleByNode = {};
  var scaleProblems = [];
  Object.keys(CFG.scaleControllers || {}).forEach(function (nodeId) {
    var anim = C.BalanceScaleAnimator({ rootId: nodeId });
    scaleByNode[nodeId] = anim;
    if (!anim.resolved) scaleProblems.push(nodeId + " could not resolve beam/support/left/right");
    else { var n = anim.nodes(); if (!n.beam || !n.support || !n.leftPan || !n.rightPan) scaleProblems.push(nodeId + " incomplete hierarchy"); }
  });
  if (scaleProblems.length) { var sm = "Scale hierarchy validation failed:\n  - " + scaleProblems.join("\n  - "); if (DEV) throw new Error(sm); else console.error("[RB] " + sm); }

  // ---- single dedicated top drag layer for every draggable (Part 3 + Part 4) ----
  var DRAG_LAYER = "rb_drag_layer";
  E.ensureLayer(DRAG_LAYER);

  // ---- draggables (register once; drop behavior supplied per phase by the GM) ----
  Object.keys(CFG.draggables || {}).forEach(function (id) { C.setupDraggable(id, CFG.draggables[id], DRAG_LAYER); });

  // ---- GameManagers, one per level root ----
  var gmByHost = {};
  (CFG.gameManagers || []).forEach(function (g) {
    var scId = g.fields.scaleController && g.fields.scaleController.node;
    var sc = scId ? scaleByNode[scId] : null;
    var gm = C.GameManager(g.fields, sc, { host: g.host, baskets: CFG.baskets, draggables: CFG.draggables });
    gmByHost[g.host] = gm;
  });

  // ---- one-active-level mounting ----
  var LEVEL_ORDER = ["n5_Tutorial", "n105_Level_1", "n206_Level_2", "n307_Level_3", "n410_Level_4"];
  var gmStarted = {};

  function collectAssets(hostId) {
    var out = [], nodes = E.nodes();
    var root = E.get(hostId); if (!root) return out;
    (function walk(rec) {
      if (rec._img && rec._img.sprite && rec._img.sprite.path) out.push(rec._img.sprite.path);
      rec.children.forEach(walk);
    })(root);
    return out;
  }
  var preloaded = {};
  function preloadLevel(hostId) {
    if (!hostId || preloaded[hostId]) return; preloaded[hostId] = true;
    var run = function () { collectAssets(hostId).forEach(function (src) { var im = new Image(); im.src = src; }); };
    if (window.requestIdleCallback) requestIdleCallback(run, { timeout: 3000 }); else setTimeout(run, 500);
  }

  function startLevel(hostId) {
    if (gmStarted[hostId]) return;
    var gm = gmByHost[hostId];
    if (gm && E.isActive(hostId)) {
      gmStarted[hostId] = true;
      gm.start();
      // preload the next level's assets during idle time
      var idx = LEVEL_ORDER.indexOf(hostId);
      if (idx >= 0 && idx + 1 < LEVEL_ORDER.length) preloadLevel(LEVEL_ORDER[idx + 1]);
    }
  }
  function disposeLevel(hostId) {
    var gm = gmByHost[hostId];
    if (gm && gmStarted[hostId]) { gm.dispose(); gmStarted[hostId] = false; }
  }
  E.onActivated(function (id) { if (gmByHost[id]) startLevel(id); });

  // ---- level-flow buttons (baked SetActive) with a per-button transition lock ----
  var flowLock = false;
  (CFG.buttons || []).forEach(function (b) {
    var setCalls = b.calls.filter(function (c) { return c.method === "SetActive" && c.targetNode; });
    if (!setCalls.length) return;
    E.onClick(b.node, function () {
      if (flowLock) return; flowLock = true;                 // rapid Next cannot activate two levels
      setCalls.forEach(function (c) {
        if (!c.arg && gmByHost[c.targetNode]) disposeLevel(c.targetNode);   // unmount the level we leave
        E.setActive(c.targetNode, !!c.arg);
      });
      setTimeout(function () { flowLock = false; }, 400);
    }, { key: "flow" });
  });

  // ---- intro "Let's Go" -> Tutorial + BGM ----
  var introId = null;
  (LAY.children || []).forEach(function (c) { if (/^Intro/.test(c.name)) introId = c.id; });
  var bgmSrc = (LAY.components && LAY.components.audioSource && LAY.components.audioSource.clip) || null;
  Object.keys(CFG.btnAnim || {}).forEach(function (id) {
    C.ButtonAnimator(CFG.btnAnim[id], introId, function () {
      if (bgmSrc) Audio.playBGM(bgmSrc);        // single looped BGM instance, starts after Let's Go
    });
  });

  // ---- loading: reveal the game only once the FIRST screen's art is decoded (no pop-in), then warm
  // the first level's assets during idle so "Let's Go" is instant. WebP keeps all of this tiny. ----
  function preloadDecode(hostId) {
    return Promise.all(collectAssets(hostId).map(function (src) {
      return new Promise(function (res) {
        var im = new Image();
        im.onload = function () { if (im.decode) im.decode().then(res, res); else res(); };
        im.onerror = res;
        im.src = src;
      });
    }));
  }
  var bootHidden = false;
  function hideBoot() {
    if (bootHidden) return; bootHidden = true;
    var b = document.getElementById("boot");
    if (b) { b.classList.add("hide"); setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 500); }
  }
  window.__rbHideBoot = hideBoot;   // let the HTML fallback share the same guard
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.all([fontsReady, preloadDecode(introId || "n2_Intro_1")]).then(hideBoot);
  setTimeout(hideBoot, 5000);       // safety net if an asset stalls
  var firstLevel = LEVEL_ORDER[0];  // warm the tutorial while the child reads the intro
  if (window.requestIdleCallback) requestIdleCallback(function () { preloadLevel(firstLevel); }, { timeout: 4000 });
  else setTimeout(function () { preloadLevel(firstLevel); }, 1200);

  // ---- dev diagnostics (never shown in production) ----
  function diagnostics() {
    var activeLevel = LEVEL_ORDER.filter(function (h) { return E.isActive(h); })[0] || (E.isActive("n2_Intro_1") ? "Intro" : null);
    var gm = activeLevel && gmByHost[activeLevel] ? gmByHost[activeLevel].diagnostics() : null;
    return Object.assign({ activeLevel: activeLevel, dragging: Interaction.draggingId() }, E.stats(), { audio: Audio.stats(), gm: gm });
  }
  window.__RB = { E: E, C: C, I: Interaction, Audio: Audio, CFG: CFG, gmByHost: gmByHost, scaleByNode: scaleByNode, diag: diagnostics, dev: DEV };

  if (DEV) {
    var overlay = document.createElement("div");
    overlay.id = "rb-diag";
    overlay.style.cssText = "position:fixed;left:6px;bottom:6px;z-index:99999;font:11px/1.4 monospace;color:#0f0;background:rgba(0,0,0,.6);padding:6px 8px;border-radius:4px;pointer-events:none;white-space:pre;display:none;max-width:46ch;";
    document.body.appendChild(overlay);
    var visible = false;
    window.addEventListener("keydown", function (e) { if (e.key === "`" || (e.ctrlKey && e.key.toLowerCase() === "d")) { visible = !visible; overlay.style.display = visible ? "block" : "none"; } });
    setInterval(function () {
      if (!visible) return;
      var d = diagnostics();
      overlay.textContent =
        "level: " + d.activeLevel + "   dragging: " + (d.dragging || "-") + "\n" +
        "tweens: " + d.tweens + "  timers: " + (d.gm ? d.gm.timers : 0) + "  confetti: " + d.confetti + "\n" +
        "domNodes: " + d.domNodes + "  narration: " + (d.audio.narrationActive ? d.audio.narration : "-") + "\n" +
        (d.gm ? ("phase4: " + d.gm.ready4 + "  placed3: " + d.gm.placed3 + "  placed4: " + d.gm.placed4 + "\nzones: " + (d.gm.activeZones.join(",") || "-")) : "");
    }, 250);
    console.log("[RB] dev mode — press ` (backtick) or Ctrl+D for the diagnostics overlay. Call __RB.diag() for a snapshot.");
  }
})();
