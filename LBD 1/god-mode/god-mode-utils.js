/* Royal Bloom — God Mode shared utilities (window.GodModeUtils).
 * Loaded FIRST; every other god-mode module depends on it.
 *
 * All measurement/editing is done in STAGE SPACE — the fixed 1920x1080 design grid
 * the game is authored on. The engine scales that grid to fit the viewport; God Mode
 * divides screen deltas by the scale so drags track the scaled stage 1:1 and every
 * value shown/copied maps directly back onto data.js.
 */
(function () {
  "use strict";

  var E = window.Engine;

  function stageEl() { return document.getElementById("stage") || document.body; }

  // scale factor applied by the engine's fit-to-viewport transform (stageWidth / 1920)
  function stageScale() {
    if (E && E.currentScale) { try { return E.currentScale() || 1; } catch (e) {} }
    var r = stageEl().getBoundingClientRect();
    return (r.width / 1920) || 1;
  }

  // logical (design-space) size of the stage
  function logicalSize() {
    if (E && E.logicalSize) { try { return E.logicalSize(); } catch (e) {} }
    return { w: 1920, h: 1080 };
  }

  // client (screen) point -> logical stage point
  function clientToLogical(cx, cy) {
    if (E && E.clientToLogical) return E.clientToLogical(cx, cy);
    var r = stageEl().getBoundingClientRect(), s = stageScale();
    return { x: (cx - r.left) / s, y: (cy - r.top) / s };
  }

  // an element's rendered rect, expressed in logical stage coordinates
  function stageRectOf(el) {
    var b = el.getBoundingClientRect();
    var tl = clientToLogical(b.left, b.top), br = clientToLogical(b.right, b.bottom);
    return { x: tl.x, y: tl.y, w: br.x - tl.x, h: br.y - tl.y };
  }

  // visibility test: covers display:none, visibility, zero opacity, near-zero size,
  // and any inactive ancestor in the engine tree.
  function isVisible(el) {
    if (!el || !el.isConnected) return false;
    if (el.getAttribute && el.getAttribute("data-gm-deleted") != null) return false;
    var cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.02) return false;
    var b = el.getBoundingClientRect();
    if (b.width < 1 || b.height < 1) return false;
    // walk ancestors for display:none
    var p = el.parentElement;
    while (p && p.id !== "stage") {
      var pc = getComputedStyle(p);
      if (pc.display === "none") return false;
      p = p.parentElement;
    }
    return true;
  }

  // clipboard write with a hidden-textarea execCommand fallback (works on file://)
  function copyText(text) {
    text = String(text == null ? "" : text);
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }
  function legacyCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0"; ta.style.left = "-9999px";
      document.body.appendChild(ta); ta.focus(); ta.select();
      var ok = document.execCommand("copy"); ta.remove(); return ok;
    } catch (e) { return false; }
  }

  // true when a keydown originated in a form field, so shortcuts never hijack typing
  function isTypingInField(ev) {
    var t = ev && ev.target;
    if (!t) return false;
    var tag = (t.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || t.isContentEditable === true;
  }

  function qa(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // round to a grid step
  function snap(v, step) { step = step || 10; return Math.round(v / step) * step; }

  // clamp
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  window.GodModeUtils = {
    engine: function () { return E; },
    stageEl: stageEl,
    stageScale: stageScale,
    logicalSize: logicalSize,
    clientToLogical: clientToLogical,
    stageRectOf: stageRectOf,
    isVisible: isVisible,
    copyText: copyText,
    isTypingInField: isTypingInField,
    qa: qa, qsa: qsa,
    snap: snap, clamp: clamp
  };
})();
