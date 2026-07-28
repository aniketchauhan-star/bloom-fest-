/* Royal Bloom — God Mode Live Layout Editor (window.GodModeLiveEditor).
 *
 * Select any node on the stage (click, or from the element browser), then move it by
 * dragging, resize it with 8 handles, nudge with arrows, fix its alignment, edit its
 * text, change opacity/scale/rotation, delete it, or duplicate it — all live. Every
 * number is in STAGE SPACE (the 1920x1080 design grid) so "Copy" produces values a
 * developer can paste straight into js/data.js.
 *
 * Nothing here mutates the shipped data model permanently: each touched node's original
 * transform/text is captured, and resetAll() (called when God Mode turns off) restores
 * the learner build byte-identical.
 */
(function () {
  "use strict";

  var U = window.GodModeUtils;
  var E = window.Engine;
  var MIN = 24;               // minimum logical size when resizing
  var GRID = 10;              // snap grid (stage space)

  function LiveEditor() {
    var self = {};
    var active = false;
    var cursorEdit = false, snapOn = false, lockOn = false, marqueeOn = false;
    var selId = null;                    // currently selected node id
    var origMap = {};                    // id -> captured original state (for reset)
    var edited = {};                     // id -> true (touched this session)
    var deletedStack = [];               // ids hidden via delete, for undo
    var ghosts = [];                     // temporary duplicate clones
    var selectCbs = [];
    var drag = null;                     // active drag/resize state
    var swallowUntil = 0;                // timestamp: swallow game clicks until
    var box, marquee, rafOn = false;

    // ---------------------------------------------------------------- helpers
    function rec(id) { return E && E.get ? E.get(id) : null; }
    function basename(p) { return String(p || "").split("/").pop(); }
    // the Canvas root has no parent — its rect is the whole stage and repositioning it
    // is meaningless (and would divide by an undefined parent size). Block transforms on it.
    function transformable(r) { return !!(r && r.parent); }

    // Place a node so its rendered (untransformed) center sits at logical stage point
    // (cx, cy). The rendered center is linear in anchoredPos for EVERY anchor/pivot
    // config — slope +1 in x, −1 in y (Unity anchoredPos is y-up, the DOM is y-down) —
    // so a delta on the current center is exact, unlike the engine's setStageLocalPos
    // (which mis-handles stretched anchors). Reads the true center via centerLogical.
    function placeCenter(r, cx, cy) {
      var c = E.centerLogical(r.id);
      E.setAnchoredPos(r.id, r.rt.ax + (cx - c.x), r.rt.ay - (cy - c.y));
    }

    function describe(r) {
      if (!r) return null;
      var name = (r.node && r.node.name) || r.id;
      var type = r._tmp ? "text" : (r._img && r._img.sprite && r._img.sprite.path ? "image" : "box");
      var detail = type === "text" ? (r._tmpInner ? r._tmpInner.textContent : "")
        : type === "image" ? basename(r._img.sprite.path) : (r.children.length + " children");
      return { id: r.id, name: name, type: type, detail: detail };
    }

    // top-level flow root (child of the Canvas ROOT) that contains this node
    function flowRootOf(r) { var cur = r; while (cur.parent && cur.parent.parent) cur = cur.parent; return cur; }

    // full node list for the element browser
    function registry() {
      var N = E && E.nodes ? E.nodes() : {};
      var out = [];
      Object.keys(N).forEach(function (id) {
        if (id === "rb_drag_layer") return;
        var r = N[id];
        var d = describe(r);
        if (!d) return;
        var root = flowRootOf(r);
        d.group = (root.node && root.node.name) || root.id;
        d.visible = U.isVisible(r.el);
        d.deleted = r.el.getAttribute("data-gm-deleted") != null;
        out.push(d);
      });
      return out;
    }

    // logical (untransformed) rect of a node: {left, top, w, h} in stage space
    function logRect(id) {
      var r = rec(id); if (!r) return null;
      var c = E.centerLogical(id);
      return { left: c.x - r._w / 2, top: c.y - r._h / 2, w: r._w, h: r._h };
    }

    // ---------------------------------------------------------------- duplicate finder
    // Surface likely duplicate visuals (e.g. a doubled genie hand / dish / body): visible image
    // nodes that share the same sprite AND overlap the same spot, plus sibling pairs whose trimmed
    // names collide ("Basket" / "Basket "). Returns descriptors so the UI can list + mark them.
    function findDuplicates() {
      var N = E.nodes(), groups = {}, flagged = {}, out = [];
      Object.keys(N).forEach(function (id) {
        var r = N[id];
        if (id === "rb_drag_layer" || !r._img || !r._img.sprite || !r._img.sprite.path) return;
        if (!U.isVisible(r.el)) return;
        var c; try { c = E.centerLogical(id); } catch (e) { return; }
        var key = r._img.sprite.path + "@" + Math.round(c.x / 24) + "," + Math.round(c.y / 24);
        (groups[key] = groups[key] || []).push(id);
      });
      Object.keys(groups).forEach(function (k) {
        var g = groups[k];
        if (g.length > 1) g.forEach(function (id) { if (!flagged[id]) { flagged[id] = 1; out.push(withReason(id, "same sprite + same spot")); } });
      });
      // sibling name collisions (trailing-space twins etc.)
      Object.keys(N).forEach(function (id) {
        var r = N[id]; if (id === "rb_drag_layer" || !r.parent || flagged[id]) return;
        var nm = ((r.node && r.node.name) || "").trim().toLowerCase(); if (!nm) return;
        var sibs = r.parent.children.filter(function (c) { return ((c.node && c.node.name) || "").trim().toLowerCase() === nm; });
        if (sibs.length > 1 && U.isVisible(r.el)) { flagged[id] = 1; out.push(withReason(id, "duplicate sibling name")); }
      });
      return out;
    }
    function withReason(id, reason) { var d = describe(rec(id)); if (d) d.reason = reason; return d; }
    // outline every duplicate on the stage (red) so it's easy to spot and click
    function markDuplicates(on) {
      (document.querySelectorAll ? document.querySelectorAll(".node[data-gm-dup]") : []).forEach(function (el) { el.removeAttribute("data-gm-dup"); });
      if (!on) return [];
      var dups = findDuplicates();
      dups.forEach(function (d) { var r = rec(d.id); if (r) r.el.setAttribute("data-gm-dup", "1"); });
      return dups;
    }

    function captureOriginal(id) {
      if (origMap[id]) return;
      var r = rec(id); if (!r) return;
      origMap[id] = {
        rt: { ax: r.rt.ax, ay: r.rt.ay, sdX: r.rt.sdX, sdY: r.rt.sdY, rot: r.rt.rot, sx: r.rt.sx, sy: r.rt.sy },
        alpha: E.getAlpha(id),
        display: r.el.style.display,
        tmp: r._tmp ? {
          text: r._tmpInner ? r._tmpInner.textContent : "",
          fontSize: r._tmp.fontSize,
          alignH: r._tmp.alignH,
          justify: r.el.style.justifyContent,
          textAlign: r.el.style.textAlign
        } : null
      };
    }
    function markEdited(id) { captureOriginal(id); edited[id] = true; }

    // ---------------------------------------------------------------- selection
    function selectById(id, opts) {
      var r = rec(id); if (!r) return;
      selId = id;
      captureOriginal(id);
      updateBox();
      startRaf();
      var d = describe(r);
      d.locked = lockOn;
      selectCbs.forEach(function (cb) { try { cb(d); } catch (e) {} });
      try { document.dispatchEvent(new CustomEvent("godSelect", { detail: d })); } catch (e) {}
    }
    function selectEl(el) {
      if (!el) return;
      var node = el.closest ? el.closest(".node[data-id]") : null;
      if (node && node.dataset.id) selectById(node.dataset.id);
    }
    function deselect() { selId = null; if (box) box.style.display = "none"; }
    function current() { var r = rec(selId); return r ? { id: selId, rec: r, el: r.el } : null; }
    function onSelect(cb) { if (typeof cb === "function") selectCbs.push(cb); }

    // ---------------------------------------------------------------- selection box (screen space)
    function ensureBox() {
      if (box) return;
      box = document.createElement("div"); box.id = "gmSelBox";
      var label = document.createElement("div"); label.className = "gm-label"; box.appendChild(label);
      ["nw", "n", "ne", "e", "se", "s", "sw", "w"].forEach(function (h) {
        var el = document.createElement("div"); el.className = "gm-h " + h; el.dataset.h = h;
        el.addEventListener("pointerdown", function (ev) { beginResize(ev, h); });
        box.appendChild(el);
      });
      document.body.appendChild(box);

      marquee = document.createElement("div"); marquee.id = "gmMarquee"; document.body.appendChild(marquee);
    }
    function updateBox() {
      if (!box) return;
      var r = rec(selId);
      if (!active || !r || !U.isVisible(r.el)) { box.style.display = "none"; return; }
      var b = r.el.getBoundingClientRect();
      box.style.display = "block";
      box.style.left = b.left + "px"; box.style.top = b.top + "px";
      box.style.width = b.width + "px"; box.style.height = b.height + "px";
      box.classList.toggle("gm-locked", lockOn);
      var lr = logRect(selId);
      var d = describe(r);
      box.querySelector(".gm-label").textContent =
        d.name + "  ·  " + Math.round(lr.w) + "×" + Math.round(lr.h);
    }
    function startRaf() {
      if (rafOn) return; rafOn = true;
      (function loop() {
        if (!active || !selId) { rafOn = false; return; }
        if (!drag) updateBox();     // during drag we update inline for responsiveness
        requestAnimationFrame(loop);
      })();
    }

    // ---------------------------------------------------------------- move / resize
    function beginMoveFromPointer(ev) {
      if (lockOn || !selId) return;
      var r = rec(selId); if (!r || !transformable(r)) return;
      var c = E.centerLogical(selId);
      var g = U.clientToLogical(ev.clientX, ev.clientY);
      drag = { mode: "move", offX: c.x - g.x, offY: c.y - g.y };
      swallowUntil = performance.now() + 400;
      ev.preventDefault();
    }
    function beginResize(ev, h) {
      if (lockOn || !selId) return;
      var r = rec(selId); if (!r || !transformable(r)) return;
      ev.preventDefault(); ev.stopPropagation();
      var lr = logRect(selId);
      var g = U.clientToLogical(ev.clientX, ev.clientY);
      drag = {
        mode: "resize", handle: h, grabX: g.x, grabY: g.y,
        left: lr.left, top: lr.top, w: lr.w, h: lr.h,
        sdX: r.rt.sdX, sdY: r.rt.sdY
      };
      markEdited(selId);
    }
    function onPointerMove(ev) {
      if (!drag) return;
      var r = rec(selId); if (!r) return;
      var snap = snapOn || ev.shiftKey;
      var p = U.clientToLogical(ev.clientX, ev.clientY);
      if (drag.mode === "move") {
        var cx = p.x + drag.offX, cy = p.y + drag.offY;
        if (snap) { cx = U.snap(cx, GRID); cy = U.snap(cy, GRID); }
        markEdited(selId);
        placeCenter(r, cx, cy);
      } else if (drag.mode === "resize") {
        var dx = p.x - drag.grabX, dy = p.y - drag.grabY;
        var west = drag.handle.indexOf("w") >= 0, east = drag.handle.indexOf("e") >= 0;
        var north = drag.handle.indexOf("n") >= 0, south = drag.handle.indexOf("s") >= 0;
        var nw = drag.w, nh = drag.h;
        if (east) nw = drag.w + dx;
        if (west) nw = drag.w - dx;
        if (south) nh = drag.h + dy;
        if (north) nh = drag.h - dy;
        if (snap) { nw = U.snap(nw, GRID); nh = U.snap(nh, GRID); }
        nw = Math.max(MIN, nw); nh = Math.max(MIN, nh);
        var nleft = west ? (drag.left + drag.w) - nw : drag.left;
        var ntop = north ? (drag.top + drag.h) - nh : drag.top;
        E.setSizeDelta(selId, drag.sdX + (nw - drag.w), drag.sdY + (nh - drag.h));
        placeCenter(r, nleft + nw / 2, ntop + nh / 2);
      }
      updateBox();
    }
    function onPointerUp() {
      if (drag) { drag = null; swallowUntil = performance.now() + 250; updateBox(); notifyChange(); }
    }

    // ---------------------------------------------------------------- nudge
    function nudge(dx, dy) {
      if (!selId || lockOn) return;
      var r = rec(selId); if (!r || !transformable(r)) return;
      var c = E.centerLogical(selId);
      markEdited(selId);
      placeCenter(r, c.x + dx, c.y + dy);
      updateBox(); notifyChange();
    }

    // ---------------------------------------------------------------- alignment
    function align(kind) {
      var r = rec(selId); if (!r || !transformable(r)) return;
      // text alignment (TMP nodes) — the common "left-align the instruction" fix
      if (kind.indexOf("text-") === 0) {
        if (!r._tmp) { toast("Not a text element", true); return; }
        var mode = kind.slice(5); // left|center|right
        markEdited(selId);
        r.el.style.justifyContent = mode === "center" ? "center" : mode === "right" ? "flex-end" : "flex-start";
        r.el.style.textAlign = mode;
        r._tmp.alignH = mode === "center" ? 2 : mode === "right" ? 4 : 1;  // TMP: Left=1 Center=2 Right=4
        notifyChange(); updateBox();
        return;
      }
      // positional alignment relative to the parent's logical box
      var parent = r.parent; if (!parent) return;
      var pw = r.parentW || U.logicalSize().w, ph = r.parentH || U.logicalSize().h;
      var lr = logRect(selId);
      var pc = E.centerLogical(parent.id || (parent.node && parent.node.id));
      // parent's logical top-left = parent center - parentSize/2 (untransformed)
      var pLeft = (pc && parent.parent) ? (pc.x - pw / 2) : 0;
      var pTop = (pc && parent.parent) ? (pc.y - ph / 2) : 0;
      var cx = lr.left + lr.w / 2, cy = lr.top + lr.h / 2;
      if (kind === "left") cx = pLeft + lr.w / 2;
      else if (kind === "hcenter") cx = pLeft + pw / 2;
      else if (kind === "right") cx = pLeft + pw - lr.w / 2;
      else if (kind === "top") cy = pTop + lr.h / 2;
      else if (kind === "vmiddle") cy = pTop + ph / 2;
      else if (kind === "bottom") cy = pTop + ph - lr.h / 2;
      markEdited(selId);
      placeCenter(r, cx, cy);
      updateBox(); notifyChange();
    }

    // ---------------------------------------------------------------- geometry inputs
    // prop in: x,y,w,h,scale,opacity,rotation,fontSize
    function applyGeom(prop, value) {
      var r = rec(selId); if (!r || !transformable(r)) return;
      value = parseFloat(value); if (!isFinite(value)) return;
      markEdited(selId);
      var lr = logRect(selId);
      if (prop === "x") { placeCenter(r, value + lr.w / 2, lr.top + lr.h / 2); }
      else if (prop === "y") { placeCenter(r, lr.left + lr.w / 2, value + lr.h / 2); }
      else if (prop === "w") {
        var nw = Math.max(MIN, value);
        E.setSizeDelta(selId, r.rt.sdX + (nw - r._w), null);
        placeCenter(r, lr.left + nw / 2, lr.top + lr.h / 2);
      } else if (prop === "h") {
        var nh = Math.max(MIN, value);
        E.setSizeDelta(selId, null, r.rt.sdY + (nh - r._h));
        placeCenter(r, lr.left + lr.w / 2, lr.top + nh / 2);
      } else if (prop === "scale") { E.setScale(selId, value); }
      else if (prop === "opacity") { E.setAlpha(selId, U.clamp(value, 0, 1)); }
      else if (prop === "rotation") { E.setRotation(selId, value); }
      else if (prop === "fontSize") {
        if (r._tmp && r._tmpInner) { r._tmp.fontSize = value; r._tmpInner.style.fontSize = value + "px"; }
      }
      updateBox(); notifyChange();
    }

    function applyText(str) {
      var r = rec(selId); if (!r || !r._tmp) { toast("Not a text element", true); return; }
      markEdited(selId);
      if (r._tmpInner) r._tmpInner.textContent = str;
      r._tmp.text = str;
      updateBox(); notifyChange();
    }

    // ---------------------------------------------------------------- z-order
    function bringForward() { if (selId) { E.setSiblingIndex(selId, E.getSiblingIndex(selId) + 1); updateBox(); notifyChange(); } }
    function sendBackward() { if (selId) { E.setSiblingIndex(selId, Math.max(0, E.getSiblingIndex(selId) - 1)); updateBox(); notifyChange(); } }

    // ---------------------------------------------------------------- delete / restore
    function deleteSelected() {
      var r = rec(selId); if (!r) return;
      captureOriginal(selId);
      r.el.setAttribute("data-gm-deleted", "1");
      r.el.style.display = "none";
      r.node.active = false;
      deletedStack.push(selId);
      edited[selId] = true;
      toast("Deleted “" + (describe(r).name) + "” (Ctrl+Z to undo)");
      box.style.display = "none";
      notifyChange();
    }
    function restoreOne(id) {
      var r = rec(id); if (!r) return;
      r.el.removeAttribute("data-gm-deleted");
      var o = origMap[id];
      r.el.style.display = o ? o.display : "";
      r.node.active = true;
    }
    function restoreLast() {
      var id = deletedStack.pop();
      if (!id) { toast("Nothing to undo", true); return; }
      restoreOne(id); selectById(id); notifyChange();
    }
    function restoreAllDeleted() { deletedStack.slice().forEach(restoreOne); deletedStack = []; }

    // ---------------------------------------------------------------- duplicate ghost (compare variants)
    function duplicateGhost() {
      var r = rec(selId); if (!r) return;
      var clone = r.el.cloneNode(true);
      clone.removeAttribute("id"); clone.removeAttribute("data-id");
      clone.style.left = (parseFloat(r.el.style.left) + 24) + "px";
      clone.style.top = (parseFloat(r.el.style.top) + 24) + "px";
      clone.style.outline = "2px dashed var(--godPink)";
      clone.style.pointerEvents = "none";
      r.el.parentNode.appendChild(clone);
      ghosts.push(clone);
      var handle = setTimeout(function () { removeGhost(clone); }, 8000);
      clone._gmTimer = handle;
      toast("Ghost clone (auto-removes in 8s)");
    }
    function removeGhost(c) { var i = ghosts.indexOf(c); if (i >= 0) ghosts.splice(i, 1); if (c._gmTimer) clearTimeout(c._gmTimer); if (c.parentNode) c.remove(); }
    function clearGhosts() { ghosts.slice().forEach(removeGhost); }

    // ---------------------------------------------------------------- copy / export
    function valuesFor(id) {
      var r = rec(id); if (!r) return "";
      var d = describe(r), lr = logRect(id);
      var lines = [
        "• " + d.name + "  [" + id + "]  (" + d.type + ")",
        "  x: " + Math.round(lr.left) + "   y: " + Math.round(lr.top) + "   w: " + Math.round(lr.w) + "   h: " + Math.round(lr.h),
        "  scale: " + round2(E.getScale(id)) + "   opacity: " + round2(E.getAlpha(id)) + "   rotation: " + round2(r.rt.rot)
      ];
      if (r._tmp) {
        lines.push("  fontSize: " + r._tmp.fontSize + "   align: " + (r._tmp.alignH === 2 ? "center" : r._tmp.alignH === 4 ? "right" : "left"));
        var t = (r._tmpInner ? r._tmpInner.textContent : "").slice(0, 120);
        lines.push("  text: " + JSON.stringify(t));
      }
      return lines.join("\n");
    }
    function copyValues() {
      if (!selId) { toast("Nothing selected", true); return; }
      U.copyText(valuesFor(selId)).then(function () { toast("Copied selected values"); });
    }
    function copyAll() {
      var ids = Object.keys(edited);
      if (!ids.length) { toast("No edits yet", true); return; }
      var txt = "Royal Bloom — God Mode edits (stage space)\n" +
        ids.map(valuesFor).join("\n──────────────\n");
      U.copyText(txt).then(function () { toast("Copied " + ids.length + " edited element(s)"); });
    }
    // A ready-to-paste anchoredPos / sizeDelta patch mirroring the js/data.js schema.
    function copyDataPatch() {
      if (!selId) { toast("Nothing selected", true); return; }
      var r = rec(selId);
      var patch = {
        id: selId,
        anchoredPos: { x: round2(r.rt.ax), y: round2(r.rt.ay) },
        sizeDelta: { x: round2(r.rt.sdX), y: round2(r.rt.sdY) },
        scale: { x: round2(r.rt.sx), y: round2(r.rt.sy) },
        rotZ: round2(r.rt.rot)
      };
      if (r._tmp) patch.tmp = { text: r._tmpInner ? r._tmpInner.textContent : "", fontSize: r._tmp.fontSize, alignH: r._tmp.alignH };
      U.copyText(JSON.stringify(patch, null, 2)).then(function () { toast("Copied data.js patch"); });
    }
    function round2(n) { return Math.round(n * 100) / 100; }

    // ---------------------------------------------------------------- reset
    function resetSelected() { if (selId) { resetOne(selId); selectById(selId); notifyChange(); } }
    function resetOne(id) {
      var o = origMap[id], r = rec(id); if (!o || !r) return;
      r.rt.sx = o.rt.sx; r.rt.sy = o.rt.sy;
      E.setPose(id, { ax: o.rt.ax, ay: o.rt.ay, sdX: o.rt.sdX, sdY: o.rt.sdY, rot: o.rt.rot });
      E.setScale(id, o.rt.sx);
      E.setAlpha(id, o.alpha);
      r.el.style.display = o.display;
      r.el.removeAttribute("data-gm-deleted");
      r.node.active = o.display !== "none";
      if (o.tmp && r._tmp) {
        if (r._tmpInner) { r._tmpInner.textContent = o.tmp.text; r._tmpInner.style.fontSize = o.tmp.fontSize + "px"; }
        r._tmp.text = o.tmp.text; r._tmp.fontSize = o.tmp.fontSize; r._tmp.alignH = o.tmp.alignH;
        r.el.style.justifyContent = o.tmp.justify; r.el.style.textAlign = o.tmp.textAlign;
      }
      delete edited[id];
    }
    function resetAll() {
      Object.keys(origMap).forEach(resetOne);
      origMap = {}; edited = {}; deletedStack = [];
      clearGhosts();
    }

    // ---------------------------------------------------------------- toggles
    function setCursorEdit(on) { cursorEdit = !!on; document.body.classList.toggle("gmCursorEdit", cursorEdit); }
    function setSnap(on) { snapOn = !!on; }
    function setLock(on) { lockOn = !!on; updateBox(); }
    function setMarquee(on) { marqueeOn = !!on; }

    // ---------------------------------------------------------------- global pointer wiring
    var marqueeState = null;
    function onStagePointerDown(ev) {
      if (!active || !cursorEdit) return;
      if (ev.target.closest && ev.target.closest("#gmPanel, #gmSelBox, #gmBadge, #gmToast")) return;
      var stage = document.getElementById("stage");
      if (!stage || !ev.target.closest || !ev.target.closest("#stage")) return;

      // Marquee (drag-select) mode, or Alt-drag: draw a box, select topmost intersecting node.
      if (marqueeOn || ev.altKey) {
        marqueeState = { x0: ev.clientX, y0: ev.clientY };
        marquee.style.display = "block";
        positionMarquee(ev.clientX, ev.clientY);
        ev.preventDefault(); ev.stopPropagation();
        return;
      }
      var node = ev.target.closest(".node[data-id]");
      if (!node) return;
      ev.preventDefault(); ev.stopPropagation();
      selectById(node.dataset.id);
      beginMoveFromPointer(ev);
    }
    function positionMarquee(cx, cy) {
      var s = marqueeState;
      var l = Math.min(s.x0, cx), t = Math.min(s.y0, cy), w = Math.abs(cx - s.x0), h = Math.abs(cy - s.y0);
      marquee.style.left = l + "px"; marquee.style.top = t + "px"; marquee.style.width = w + "px"; marquee.style.height = h + "px";
    }
    function onDocPointerMove(ev) {
      if (marqueeState) { positionMarquee(ev.clientX, ev.clientY); return; }
      onPointerMove(ev);
    }
    function onDocPointerUp(ev) {
      if (marqueeState) { finishMarquee(ev); marqueeState = null; marquee.style.display = "none"; swallowUntil = performance.now() + 250; return; }
      onPointerUp(ev);
    }
    function finishMarquee(ev) {
      var b = marquee.getBoundingClientRect();
      if (b.width < 4 && b.height < 4) return;
      // pick the smallest visible node whose center falls inside the marquee (topmost-ish)
      var best = null, bestArea = Infinity;
      var N = E.nodes();
      Object.keys(N).forEach(function (id) {
        if (id === "rb_drag_layer") return;
        var r = N[id]; if (!U.isVisible(r.el)) return;
        var nb = r.el.getBoundingClientRect();
        var ccx = nb.left + nb.width / 2, ccy = nb.top + nb.height / 2;
        if (ccx >= b.left && ccx <= b.right && ccy >= b.top && ccy <= b.bottom) {
          var area = nb.width * nb.height;
          if (area < bestArea) { bestArea = area; best = id; }
        }
      });
      if (best) selectById(best); else toast("No element centered in selection", true);
    }
    // Swallow the click that follows a pick/drag so it never pops a game button.
    function onCaptureClick(ev) {
      if (performance.now() < swallowUntil && ev.target.closest && ev.target.closest("#stage")) {
        ev.stopPropagation(); ev.preventDefault();
      }
    }

    // ---------------------------------------------------------------- toast
    var toastEl, toastTimer;
    function toast(msg, isErr) {
      if (!toastEl) { toastEl = document.createElement("div"); toastEl.id = "gmToast"; document.body.appendChild(toastEl); }
      toastEl.textContent = msg; toastEl.classList.toggle("gm-err", !!isErr); toastEl.classList.add("gm-show");
      clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("gm-show"); }, 1800);
    }

    // ---------------------------------------------------------------- change broadcast (controller refreshes inspector)
    var changeCbs = [];
    function onChange(cb) { if (typeof cb === "function") changeCbs.push(cb); }
    function notifyChange() {
      var r = rec(selId);
      var d = r ? describe(r) : null;
      changeCbs.forEach(function (cb) { try { cb(d); } catch (e) {} });
    }

    // ---------------------------------------------------------------- lifecycle
    function init() {
      if (!E) { console.warn("[GodMode] Engine not found — live editor disabled."); return; }
      ensureBox();
      document.addEventListener("pointerdown", onStagePointerDown, true);
      document.addEventListener("pointermove", onDocPointerMove, true);
      document.addEventListener("pointerup", onDocPointerUp, true);
      document.addEventListener("click", onCaptureClick, true);
      window.addEventListener("scroll", updateBox, true);
      window.addEventListener("resize", updateBox);
    }
    function setActive(on) {
      active = !!on;
      if (!active) {
        deselect();
        setCursorEdit(false);
        resetAll();
        restoreAllDeleted();
        if (box) box.style.display = "none";
      } else {
        startRaf();
      }
    }

    Object.assign(self, {
      init: init, setActive: setActive,
      selectById: selectById, selectEl: selectEl, deselect: deselect, current: current, onSelect: onSelect, onChange: onChange,
      registry: registry, describe: function () { return selId ? describe(rec(selId)) : null; }, logRect: logRect,
      findDuplicates: findDuplicates, markDuplicates: markDuplicates, toast: toast,
      getAlpha: function () { return E.getAlpha(selId); }, getScale: function () { return E.getScale(selId); },
      getRotation: function () { var r = rec(selId); return r ? r.rt.rot : 0; },
      getFontSize: function () { var r = rec(selId); return r && r._tmp ? r._tmp.fontSize : null; },
      getText: function () { var r = rec(selId); return r && r._tmpInner ? r._tmpInner.textContent : ""; },
      nudge: nudge, align: align, applyGeom: applyGeom, applyText: applyText,
      bringForward: bringForward, sendBackward: sendBackward,
      deleteSelected: deleteSelected, restoreLast: restoreLast,
      duplicateGhost: duplicateGhost,
      copyValues: copyValues, copyAll: copyAll, copyDataPatch: copyDataPatch,
      resetSelected: resetSelected, resetAll: resetAll,
      setCursorEdit: setCursorEdit, setSnap: setSnap, setLock: setLock, setMarquee: setMarquee,
      isCursorEdit: function () { return cursorEdit; }, isSnap: function () { return snapOn; }, isLock: function () { return lockOn; }, isMarquee: function () { return marqueeOn; },
      hasSelection: function () { return !!selId; }
    });
    return self;
  }

  window.GodModeLiveEditor = LiveEditor;
})();
