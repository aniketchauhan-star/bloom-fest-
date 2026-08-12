/* Royal Bloom — interaction layer. Single pointer-based drag pipeline (capture,
 * cancellation recovery, full-rect clamping to the 1920x1080 safe area, one dedicated
 * drag layer) and a phase-scoped, overlap-based DropManager. No acceptDistance/dropRadius.
 */
var Interaction = (function () {
  "use strict";
  var E = Engine;

  // -------------------------------------------------- DropManager (phase-scoped) --------
  var DropManager = (function () {
    var active = [];              // [{id, spec}] currently enabled zones for this phase
    function setActiveZones(zones) { active = (zones || []).slice(); }
    function clear() { active = []; }
    function zones() { return active.slice(); }
    function activeIds() { return active.map(function (z) { return z.id; }); }

    function rectOf(id) {
      var el = E.el(id); if (!el) return null;
      return el.getBoundingClientRect();
    }
    function overlapArea(a, b) {
      var x = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
      var y = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
      return x * y;
    }
    // Overlap is scale-invariant, so we compute directly in client px.
    function findDrop(itemId, pointerX, pointerY, opts) {
      opts = opts || {};
      var itemRect = rectOf(itemId); if (!itemRect) return null;
      var itemArea = Math.max(1, itemRect.width * itemRect.height);
      var s = (E.currentScale && E.currentScale()) || 1;
      var best = null, bestArea = -1, bestDist = Infinity;
      for (var i = 0; i < active.length; i++) {
        var z = active[i];
        if (!E.isInteractableInTree(z.id)) continue;          // hidden ancestor -> never a target
        if (opts.exclude && opts.exclude(z.id)) continue;      // e.g. occupied Part-3 pan
        var zr = rectOf(z.id); if (!zr) continue;
        var pointerInside = pointerX >= zr.left && pointerX <= zr.right && pointerY >= zr.top && pointerY <= zr.bottom;
        var area = overlapArea(itemRect, zr);
        var frac = area / itemArea;
        var zcx = zr.left + zr.width / 2, zcy = zr.top + zr.height / 2;
        var icx = itemRect.left + itemRect.width / 2, icy = itemRect.top + itemRect.height / 2;
        var centerInside = icx >= zr.left && icx <= zr.right && icy >= zr.top && icy <= zr.bottom;
        var dist = Math.hypot(icx - zcx, icy - zcy);
        // Unity-style acceptDistance (logical units in the level data) -> client px: dropping the
        // item anywhere NEAR a zone drops it into the nearest one. Makes dragging forgiving.
        var radius = (z.spec && z.spec.acceptDistance ? z.spec.acceptDistance : 0) * s;
        var withinRadius = radius > 0 && dist <= radius;
        // NEAR acceptance (gamified): if the item is released close to a zone — the gap between the
        // item box and the zone box is within ~0.6x the item's smaller side — drop it into the nearest
        // one. So letting go near a pan / basket / wagon snaps it in; you don't need an exact overlap.
        var gapX = Math.max(0, zr.left - itemRect.right, itemRect.left - zr.right);
        var gapY = Math.max(0, zr.top - itemRect.bottom, itemRect.top - zr.bottom);
        var edgeGap = Math.hypot(gapX, gapY);
        var near = edgeGap <= 0.6 * Math.min(itemRect.width, itemRect.height);
        // forgiving acceptance: pointer over zone, item centre over zone, modest overlap, near enough, or within acceptDistance
        if (!(pointerInside || centerInside || frac >= 0.12 || withinRadius || near)) continue;
        if (area > bestArea + 1 || (Math.abs(area - bestArea) <= 1 && dist < bestDist)) {
          best = z; bestArea = area; bestDist = dist;
        }
      }
      return best;
    }
    return { setActiveZones: setActiveZones, clear: clear, zones: zones, activeIds: activeIds, findDrop: findDrop };
  })();

  // -------------------------------------------------- drag pipeline --------
  var activeItemId = null;       // only one object drags at a time
  var activePointerId = null;
  var currentFinish = null;      // authoritative teardown for the in-flight drag (see finish/abortActiveDrag)

  function isDragging() { return activeItemId != null; }
  function draggingId() { return activeItemId; }

  function captureOrigin(r) {
    r._dragOrig = {
      parentId: r.parent ? r.parent.id : null,
      index: E.getSiblingIndex(r.id),
      ax: r.rt.ax, ay: r.rt.ay,
      sx: r.rt.sx, rot: r.rt.rot,
      alpha: E.getAlpha(r.id)
    };
  }
  function restoreOrigin(id) {
    var r = E.get(id); if (!r || !r._dragOrig) return;
    var o = r._dragOrig;
    if (o.parentId) E.reparent(id, o.parentId);
    E.setAnchoredPos(id, o.ax, o.ay);
    E.setScale(id, o.sx);
    E.setRotation(id, o.rot);
    E.setAlpha(id, o.alpha);
    E.setSiblingIndex(id, o.index);
  }
  function getOrigin(id) { var r = E.get(id); return r ? r._dragOrig : null; }
  function resetToInitial(id) {
    var r = E.get(id); if (!r || !r._initial) return;
    var o = r._initial;
    if (o.parentId) E.reparent(id, o.parentId);
    E.setAnchoredPos(id, o.ax, o.ay); E.setScale(id, o.sx); E.setRotation(id, o.rot); E.setAlpha(id, o.alpha);
    E.setSiblingIndex(id, o.index);
    if (r._drag) { r._drag.enabled = false; r._drag.locked = false; }
  }

  function clampCenterToSafeArea(id, cx, cy) {
    var wr = E.worldRectLogical(id); if (!wr) return { x: cx, y: cy };
    var size = E.logicalSize();
    var hw = wr.w / 2, hh = wr.h / 2;
    var x = Math.max(hw, Math.min(size.w - hw, cx));
    var y = Math.max(hh, Math.min(size.h - hh, cy));
    return { x: x, y: y };
  }

  function registerDraggable(id, spec, hooks) {
    var r = E.get(id); if (!r) return;
    spec = spec || {}; hooks = hooks || {};
    r._drag = { spec: spec, hooks: hooks, enabled: false, locked: false };
    // remember the item's original slot so a level can reset cleanly on re-entry
    r._initial = { parentId: r.parent ? r.parent.id : null, index: E.getSiblingIndex(id), ax: r.rt.ax, ay: r.rt.ay, sx: r.rt.sx, rot: r.rt.rot, alpha: E.getAlpha(id) };
    r.el.style.touchAction = "none";
    r.el.setAttribute("draggable", "false");
    r.el.addEventListener("dragstart", function (e) { e.preventDefault(); }); // no native image drag

    r.el.addEventListener("pointerdown", function (ev) {
      var d = r._drag;
      if (!d.enabled || d.locked) return;
      if (activeItemId) return;                        // another object is mid-drag
      if (ev.isPrimary === false) return;              // ignore secondary pointers
      if (ev.button != null && ev.button !== 0) return; // primary button only
      if (!E.isInteractableInTree(id)) return;
      ev.preventDefault();

      activeItemId = id; activePointerId = ev.pointerId;
      // the item is now lifted — a rising blip, so picking something up is as audible as putting it
      // down. Resolved at call time: AudioManager loads before this file, but stay defensive.
      try { if (window.AudioManager && AudioManager.playUI) AudioManager.playUI("pick"); } catch (e) {}
      if (document.body) document.body.classList.add("rb-grabbing");   // closed-hand cursor everywhere while dragging
      captureOrigin(r);
      try { r.el.setPointerCapture(ev.pointerId); } catch (e) {}

      // grab offset in logical space, computed from the true rendered center
      var grabPt = E.clientToLogical(ev.clientX, ev.clientY);
      var center = E.worldCenterLogical(id) || grabPt;
      var offX = center.x - grabPt.x, offY = center.y - grabPt.y;

      // move to the single dedicated drag layer without a visual jump
      if (spec.dragLayer && E.get(spec.dragLayer)) E.reparentKeepWorld(id, spec.dragLayer);
      E.setAsLastSibling(id);
      // recompute offset relative to the (possibly) new parent so there is no jump
      var c2 = E.worldCenterLogical(id);
      if (c2) { offX = c2.x - grabPt.x; offY = c2.y - grabPt.y; }

      if (hooks.onBeginDrag) try { hooks.onBeginDrag(); } catch (e) {}

      function move(e2) {
        if (e2.pointerId !== activePointerId) return;
        var p = E.clientToLogical(e2.clientX, e2.clientY);
        var target = clampCenterToSafeArea(id, p.x + offX, p.y + offY);
        E.setStageLocalPos(r, target.x, target.y);   // updates only this element's subtree
      }
      var finished = false;
      // ONE authoritative, idempotent teardown for every drag-end path (release, cancel, lost
      // capture, blur, tab-hide, disposal). Always removes every temporary listener + releases
      // capture, so no stale handler can survive and hijack a later drag (reused pointer ids).
      function finish(interrupted, e3) {
        if (finished) return; finished = true;
        currentFinish = null;
        if (document.body) document.body.classList.remove("rb-grabbing");
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", cancel);
        r.el.removeEventListener("lostpointercapture", cancel);
        try { r.el.releasePointerCapture(activePointerId); } catch (e) {}
        activeItemId = null; activePointerId = null;
        if (interrupted) { if (hooks.onInterrupt) try { hooks.onInterrupt(); } catch (e) {} }
        else if (hooks.onEndDrag) try { hooks.onEndDrag({ x: (e3 && e3.clientX), y: (e3 && e3.clientY) }); } catch (e) {}
      }
      function up(e3) { if (e3.pointerId !== activePointerId) return; finish(false, e3); }
      function cancel() { finish(true); }

      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", cancel);
      r.el.addEventListener("lostpointercapture", cancel);
      currentFinish = finish;   // let blur/visibility/disposal run the full teardown, not a partial one
    });
  }

  // enabled draggable -> "grab" hand; disabled -> clear the inline cursor so CSS decides (a placed item
  // that became a tap target shows the pointer hand via role="button"; anything else falls back to default).
  function setEnabled(id, on) { var r = E.get(id); if (r && r._drag) { r._drag.enabled = on; r.el.style.cursor = on ? "grab" : ""; } }
  function setLocked(id, on) { var r = E.get(id); if (r && r._drag) r._drag.locked = on; }
  function isLocked(id) { var r = E.get(id); return !!(r && r._drag && r._drag.locked); }

  // interruption recovery: if the page loses focus / becomes hidden mid-drag, run the SAME full
  // teardown as a real cancel (removes listeners + releases capture + restores) — never a partial one.
  function abortActiveDrag() {
    if (currentFinish) { currentFinish(true); return; }
    if (!activeItemId) return;                       // fallback (shouldn't happen)
    var wasId = activeItemId; activeItemId = null; activePointerId = null;
    restoreOrigin(wasId);
  }
  window.addEventListener("blur", abortActiveDrag);
  document.addEventListener("visibilitychange", function () { if (document.hidden) abortActiveDrag(); });

  return {
    DropManager: DropManager,
    registerDraggable: registerDraggable,
    setEnabled: setEnabled, setLocked: setLocked, isLocked: isLocked,
    restoreOrigin: restoreOrigin, getOrigin: getOrigin, resetToInitial: resetToInitial,
    isDragging: isDragging, draggingId: draggingId, abortActiveDrag: abortActiveDrag
  };
})();
if (typeof module !== "undefined") module.exports = Interaction;
