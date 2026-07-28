/* Royal Bloom — God Mode controller (window.RoyalBloomGodMode).
 *
 * Loads LAST. Owns activation (Shift+G), the badge, the floating debug panel, the
 * element browser, the screen jumper, visual-debug overlays, global keyboard shortcuts,
 * and wiring for the Live Layout Editor.
 *
 * Fully removable: delete the god-mode <link>/<script> tags from index.html and the
 * learner build is completely unaffected. Toggling God Mode OFF at runtime tears down
 * every affordance (edits reset, deletes restored, overlays cleared).
 */
(function () {
  "use strict";

  var U = window.GodModeUtils;
  var E = window.Engine;

  // ---------------------------------------------------------------- inline panel fallback (file:// safe)
  var PANEL_HTML = [
    '<div id="gmPanel">',
    '  <div class="gm-header">',
    '    <div class="gm-title">⚡ GOD MODE<small>Royal Bloom · live editor</small></div>',
    '    <button class="gm-min" id="gmMin" title="Minimize">–</button>',
    '  </div>',
    '  <div class="gm-body">',
    '    <div class="gm-sec">',
    '      <h4>Tools</h4>',
    '      <div class="gm-row gm-grid2">',
    '        <button class="gm-btn" id="gmToolCursor" title="C — click a node to select, drag to move">✥ Cursor Edit</button>',
    '        <button class="gm-btn" id="gmToolMarquee" title="Drag a box to select">▭ Box Select</button>',
    '        <button class="gm-btn" id="gmToolSnap" title="Snap to 10px grid (or hold Shift)">⌗ Snap</button>',
    '        <button class="gm-btn" id="gmToolLock" title="Lock the selected element">🔒 Lock</button>',
    '      </div>',
    '    </div>',
    '    <div class="gm-sec" id="gmInspector">',
    '      <h4>Selection</h4>',
    '      <div id="gmNoSel" class="gm-empty">Turn on Cursor Edit and click any element — or pick one below.</div>',
    '      <div id="gmSelWrap" style="display:none">',
    '        <div class="gm-selname" id="gmSelName">—</div>',
    '        <div class="gm-selmeta" id="gmSelMeta"></div>',
    '        <div class="gm-row gm-grid2" style="margin-top:8px">',
    '          <div class="gm-field"><label>X</label><input class="gm-input" id="gmInX" type="number"></div>',
    '          <div class="gm-field"><label>Y</label><input class="gm-input" id="gmInY" type="number"></div>',
    '          <div class="gm-field"><label>W</label><input class="gm-input" id="gmInW" type="number"></div>',
    '          <div class="gm-field"><label>H</label><input class="gm-input" id="gmInH" type="number"></div>',
    '        </div>',
    '        <div class="gm-row gm-grid2">',
    '          <div class="gm-field"><label>Scale</label><input class="gm-input" id="gmInScale" type="number" step="0.05"></div>',
    '          <div class="gm-field"><label>Opacity</label><input class="gm-input" id="gmInOpacity" type="number" step="0.05" min="0" max="1"></div>',
    '          <div class="gm-field"><label>Rotate</label><input class="gm-input" id="gmInRot" type="number"></div>',
    '          <div class="gm-field" id="gmFontField"><label>Font</label><input class="gm-input" id="gmInFont" type="number"></div>',
    '        </div>',
    '        <div class="gm-note">Text align</div>',
    '        <div class="gm-row gm-grid3">',
    '          <button class="gm-btn" id="gmAlignL">⌫ Left</button>',
    '          <button class="gm-btn" id="gmAlignC">↔ Center</button>',
    '          <button class="gm-btn" id="gmAlignR">Right ⌦</button>',
    '        </div>',
    '        <div class="gm-note">Align in parent</div>',
    '        <div class="gm-row gm-grid3">',
    '          <button class="gm-btn" id="gmPosLeft">⇤ Left</button>',
    '          <button class="gm-btn" id="gmPosHC">⇔ H-Ctr</button>',
    '          <button class="gm-btn" id="gmPosRight">Right ⇥</button>',
    '          <button class="gm-btn" id="gmPosTop">⤒ Top</button>',
    '          <button class="gm-btn" id="gmPosMid">⇕ V-Mid</button>',
    '          <button class="gm-btn" id="gmPosBottom">Btm ⤓</button>',
    '        </div>',
    '        <div id="gmTextWrap">',
    '          <div class="gm-note">Text</div>',
    '          <textarea class="gm-area" id="gmText" placeholder="element text…"></textarea>',
    '          <div class="gm-row"><button class="gm-btn gm-accent" id="gmApplyText" style="flex:1">Apply Text</button></div>',
    '        </div>',
    '        <div class="gm-row gm-grid3">',
    '          <button class="gm-btn" id="gmFwd" title="Bring forward">▲ Fwd</button>',
    '          <button class="gm-btn" id="gmBack" title="Send backward">▼ Back</button>',
    '          <button class="gm-btn" id="gmDup" title="Duplicate ghost">⧉ Ghost</button>',
    '        </div>',
    '        <div class="gm-row gm-grid2">',
    '          <button class="gm-btn gm-danger" id="gmDelete" title="Delete (Del)">🗑 Delete</button>',
    '          <button class="gm-btn" id="gmResetSel">↺ Reset</button>',
    '        </div>',
    '        <div class="gm-row gm-grid2">',
    '          <button class="gm-btn" id="gmCopyVals">⧉ Copy Values</button>',
    '          <button class="gm-btn" id="gmCopyPatch">{ } Copy Patch</button>',
    '        </div>',
    '      </div>',
    '    </div>',
    '    <div class="gm-sec">',
    '      <h4>Elements</h4>',
    '      <input class="gm-input gm-search" id="gmSearch" placeholder="Search assets & text…">',
    '      <label class="gm-check"><input type="checkbox" id="gmVisibleOnly" checked> Visible on screen only</label>',
    '      <div class="gm-list" id="gmList"></div>',
    '    </div>',
    '    <div class="gm-sec">',
    '      <h4>Screens</h4>',
    '      <div class="gm-row" id="gmScreens"></div>',
    '    </div>',
    '    <div class="gm-sec">',
    '      <h4>Visual Debug</h4>',
    '      <label class="gm-check"><input type="checkbox" id="gmDbgBounds"> Show element bounds <span style="color:var(--godMuted)">(B)</span></label>',
    '      <label class="gm-check"><input type="checkbox" id="gmDbgText"> Show text boxes <span style="color:var(--godMuted)">(T)</span></label>',
    '      <div class="gm-row"><button class="gm-btn gm-danger" id="gmFindDup" style="flex:1" title="Outline duplicate sprites (doubled hand/dish/body) in red and list them">⧉ Find Duplicate Hands / Art</button></div>',
    '    </div>',
    '    <div class="gm-sec">',
    '      <h4>Session</h4>',
    '      <div class="gm-row gm-grid3">',
    '        <button class="gm-btn" id="gmUndo" title="Undo last delete (Ctrl+Z)">↶ Undo</button>',
    '        <button class="gm-btn" id="gmCopyAll">⧉ Copy All</button>',
    '        <button class="gm-btn gm-danger" id="gmResetAll">↺ Reset All</button>',
    '      </div>',
    '      <div class="gm-note">Everything resets when God Mode turns off — the learner build is never touched.</div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join("\n");

  function GodMode() {
    var self = {};
    var on = false;
    var dupMode = false;
    var editor = null;
    var root, badge, panel, els = {};
    function toast(m, e) { if (editor && editor.toast) editor.toast(m, e); }

    // ------------------------------------------------------------ boot
    function init() {
      if (!E) { console.warn("[GodMode] window.Engine missing — God Mode aborted."); return; }
      editor = window.GodModeLiveEditor ? window.GodModeLiveEditor() : null;
      if (editor) editor.init();

      root = document.createElement("div"); root.id = "godModeRoot"; document.body.appendChild(root);
      badge = document.createElement("div"); badge.id = "gmBadge"; badge.textContent = "⚡ GOD MODE"; document.body.appendChild(badge);

      loadPanel().then(function () {
        cacheEls();
        wire();
        wireEditor();
        bindShortcuts();
        renderScreens();
        console.log("[GodMode] ready — press Shift+G to toggle.");
      });
    }

    function loadPanel() {
      return fetch("god-mode/god-mode-panel.html")
        .then(function (r) { if (!r.ok) throw new Error("bad status"); return r.text(); })
        .then(function (html) { root.innerHTML = html; })
        .catch(function () { root.innerHTML = PANEL_HTML; });
    }

    function $(id) { return document.getElementById(id); }
    function cacheEls() {
      panel = $("gmPanel");
      ["gmMin", "gmToolCursor", "gmToolMarquee", "gmToolSnap", "gmToolLock",
        "gmInspector", "gmNoSel", "gmSelWrap", "gmSelName", "gmSelMeta",
        "gmInX", "gmInY", "gmInW", "gmInH", "gmInScale", "gmInOpacity", "gmInRot", "gmInFont", "gmFontField",
        "gmAlignL", "gmAlignC", "gmAlignR", "gmPosLeft", "gmPosHC", "gmPosRight", "gmPosTop", "gmPosMid", "gmPosBottom",
        "gmTextWrap", "gmText", "gmApplyText", "gmFwd", "gmBack", "gmDup", "gmDelete", "gmResetSel", "gmCopyVals", "gmCopyPatch",
        "gmSearch", "gmVisibleOnly", "gmList", "gmScreens", "gmDbgBounds", "gmDbgText", "gmFindDup", "gmUndo", "gmCopyAll", "gmResetAll"
      ].forEach(function (id) { els[id] = $(id); });
    }

    // ------------------------------------------------------------ toggling
    function toggle(force) {
      on = force == null ? !on : !!force;
      document.body.classList.toggle("godMode", on);
      if (editor) editor.setActive(on);
      if (window.__RB) window.__RB.godMode = on;
      if (on) { refreshList(); syncTools(); } else { clearDebug(); }
    }

    function clearDebug() {
      document.body.classList.remove("gmShowBounds", "gmShowText");
      if (els.gmDbgBounds) els.gmDbgBounds.checked = false;
      if (els.gmDbgText) els.gmDbgText.checked = false;
      if (dupMode) { dupMode = false; if (editor) editor.markDuplicates(false); if (els.gmFindDup) els.gmFindDup.classList.remove("gm-on"); }
    }

    function syncTools() {
      setToolState(els.gmToolCursor, editor.isCursorEdit());
      setToolState(els.gmToolMarquee, editor.isMarquee());
      setToolState(els.gmToolSnap, editor.isSnap());
      setToolState(els.gmToolLock, editor.isLock());
    }
    function setToolState(btn, active) { if (btn) btn.classList.toggle("gm-on", !!active); }

    // ------------------------------------------------------------ wiring: tools + inspector
    function wire() {
      makeDraggable();
      els.gmMin.addEventListener("click", function () { document.body.classList.toggle("gmMin"); });

      els.gmToolCursor.addEventListener("click", function () { editor.setCursorEdit(!editor.isCursorEdit()); syncTools(); });
      els.gmToolMarquee.addEventListener("click", function () {
        var next = !editor.isMarquee(); editor.setMarquee(next);
        if (next && !editor.isCursorEdit()) editor.setCursorEdit(true);
        syncTools();
      });
      els.gmToolSnap.addEventListener("click", function () { editor.setSnap(!editor.isSnap()); syncTools(); });
      els.gmToolLock.addEventListener("click", function () { editor.setLock(!editor.isLock()); syncTools(); });

      // geometry inputs
      bindNum(els.gmInX, "x"); bindNum(els.gmInY, "y"); bindNum(els.gmInW, "w"); bindNum(els.gmInH, "h");
      bindNum(els.gmInScale, "scale"); bindNum(els.gmInOpacity, "opacity"); bindNum(els.gmInRot, "rotation"); bindNum(els.gmInFont, "fontSize");

      // alignment
      els.gmAlignL.addEventListener("click", function () { editor.align("text-left"); });
      els.gmAlignC.addEventListener("click", function () { editor.align("text-center"); });
      els.gmAlignR.addEventListener("click", function () { editor.align("text-right"); });
      els.gmPosLeft.addEventListener("click", function () { editor.align("left"); });
      els.gmPosHC.addEventListener("click", function () { editor.align("hcenter"); });
      els.gmPosRight.addEventListener("click", function () { editor.align("right"); });
      els.gmPosTop.addEventListener("click", function () { editor.align("top"); });
      els.gmPosMid.addEventListener("click", function () { editor.align("vmiddle"); });
      els.gmPosBottom.addEventListener("click", function () { editor.align("bottom"); });

      els.gmApplyText.addEventListener("click", function () { editor.applyText(els.gmText.value); });
      els.gmFwd.addEventListener("click", function () { editor.bringForward(); });
      els.gmBack.addEventListener("click", function () { editor.sendBackward(); });
      els.gmDup.addEventListener("click", function () { editor.duplicateGhost(); });
      els.gmDelete.addEventListener("click", function () { editor.deleteSelected(); refreshList(); });
      els.gmResetSel.addEventListener("click", function () { editor.resetSelected(); });
      els.gmCopyVals.addEventListener("click", function () { editor.copyValues(); });
      els.gmCopyPatch.addEventListener("click", function () { editor.copyDataPatch(); });

      // element browser
      els.gmSearch.addEventListener("input", refreshList);
      els.gmVisibleOnly.addEventListener("change", refreshList);

      // visual debug
      els.gmDbgBounds.addEventListener("change", function () { document.body.classList.toggle("gmShowBounds", els.gmDbgBounds.checked); });
      els.gmDbgText.addEventListener("change", function () { document.body.classList.toggle("gmShowText", els.gmDbgText.checked); });
      els.gmFindDup.addEventListener("click", function () {
        dupMode = !dupMode;
        var dups = editor.markDuplicates(dupMode);        // outline them red on the stage
        els.gmFindDup.classList.toggle("gm-on", dupMode);
        refreshList();                                    // list switches to duplicates-only while on
        toast(dupMode ? (dups.length + " duplicate node(s) outlined — click one to see its id") : "duplicate highlight off");
      });

      // session
      els.gmUndo.addEventListener("click", function () { editor.restoreLast(); refreshList(); });
      els.gmCopyAll.addEventListener("click", function () { editor.copyAll(); });
      els.gmResetAll.addEventListener("click", function () { editor.resetAll(); editor.deselect(); showNoSel(); refreshList(); });
    }

    function bindNum(input, prop) {
      if (!input) return;
      input.addEventListener("change", function () { editor.applyGeom(prop, input.value); });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { editor.applyGeom(prop, input.value); input.blur(); } e.stopPropagation(); });
    }

    // ------------------------------------------------------------ inspector refresh
    function wireEditor() {
      editor.onSelect(fillInspector);
      editor.onChange(function (d) { if (d) fillInspector(d); });
    }
    function showNoSel() { if (els.gmNoSel) els.gmNoSel.style.display = ""; if (els.gmSelWrap) els.gmSelWrap.style.display = "none"; }
    function fillInspector(d) {
      if (!d) { showNoSel(); return; }
      els.gmNoSel.style.display = "none"; els.gmSelWrap.style.display = "";
      els.gmSelName.textContent = d.name;
      els.gmSelMeta.textContent = d.id + "  ·  " + d.type + (d.detail ? ("  ·  " + String(d.detail).slice(0, 40)) : "");
      var lr = editor.logRect(d.id);
      if (lr) { els.gmInX.value = Math.round(lr.left); els.gmInY.value = Math.round(lr.top); els.gmInW.value = Math.round(lr.w); els.gmInH.value = Math.round(lr.h); }
      els.gmInScale.value = round2(editor.getScale());
      els.gmInOpacity.value = round2(editor.getAlpha());
      els.gmInRot.value = round2(editor.getRotation());
      var isText = d.type === "text";
      els.gmFontField.style.display = isText ? "" : "none";
      els.gmTextWrap.style.display = isText ? "" : "none";
      if (isText) { els.gmInFont.value = editor.getFontSize(); els.gmText.value = editor.getText(); }
      // mark active list row
      U.qsa(".gm-item", els.gmList).forEach(function (it) { it.classList.toggle("gm-sel", it.dataset.id === d.id); });
    }
    function round2(n) { return Math.round(n * 100) / 100; }

    // ------------------------------------------------------------ element browser
    function refreshList() {
      if (!els.gmList) return;
      var q = (els.gmSearch.value || "").toLowerCase().trim();
      var visOnly = els.gmVisibleOnly.checked;
      // while "Find Duplicates" is on, the list shows ONLY the flagged duplicates (with a reason)
      var items = dupMode
        ? editor.findDuplicates().map(function (d) { d.group = "DUPLICATES · " + (d.reason || ""); return d; })
        : editor.registry().filter(function (d) {
          if (visOnly && !d.visible) return false;
          if (!q) return true;
          return (d.name + " " + d.id + " " + d.detail + " " + d.type).toLowerCase().indexOf(q) >= 0;
        });
      // group by flow root, preserving first-seen order
      var groups = [], byName = {};
      items.forEach(function (d) { if (!byName[d.group]) { byName[d.group] = []; groups.push(d.group); } byName[d.group].push(d); });
      var frag = document.createDocumentFragment();
      if (!items.length) { var e = document.createElement("div"); e.className = "gm-empty"; e.textContent = "No matching elements."; els.gmList.innerHTML = ""; els.gmList.appendChild(e); return; }
      groups.forEach(function (g) {
        var h = document.createElement("div"); h.className = "gm-group-h"; h.textContent = g + " (" + byName[g].length + ")"; frag.appendChild(h);
        byName[g].forEach(function (d) { frag.appendChild(makeRow(d)); });
      });
      els.gmList.innerHTML = ""; els.gmList.appendChild(frag);
      var cur = editor.describe && editor.describe();
      if (cur) U.qsa(".gm-item", els.gmList).forEach(function (it) { it.classList.toggle("gm-sel", it.dataset.id === cur.id); });
    }
    function makeRow(d) {
      var row = document.createElement("div");
      row.className = "gm-item" + (d.visible ? "" : " gm-off");
      row.dataset.id = d.id;
      var tag = d.type === "image" ? "img" : d.type === "text" ? "txt" : "box";
      var label = d.type === "text" ? (d.detail || "(empty text)") : d.name;
      row.innerHTML = '<span class="gm-tag ' + tag + '">' + tag + '</span>' +
        '<span class="gm-nm">' + escapeHtml(label) + '</span>' +
        (d.deleted ? '<span class="gm-hid">deleted</span>' : (d.visible ? '' : '<span class="gm-hid">hidden</span>'));
      row.addEventListener("click", function () {
        editor.selectById(d.id);   // still selects even when off-screen; the box just stays hidden
      });
      return row;
    }
    function escapeHtml(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

    // ------------------------------------------------------------ screen jumper
    function screenRoots() {
      var R = E.root(); if (!R) return [];
      return (R.children || []).filter(function (c) {
        var n = ((c.node && c.node.name) || c.id) + " " + c.id;
        return /intro|tutorial|level/i.test(n);
      });
    }
    function renderScreens() {
      var wrap = els.gmScreens; if (!wrap) return;
      var roots = screenRoots();
      wrap.innerHTML = "";
      roots.forEach(function (c) {
        var b = document.createElement("button");
        b.className = "gm-btn"; b.style.flex = "1 1 46%";
        b.textContent = shortName((c.node && c.node.name) || c.id);
        b.addEventListener("click", function () {
          roots.forEach(function (o) { E.setActive(o.id, o === c); });
          refreshList();
          syncScreenState();
        });
        b.dataset.id = c.id;
        wrap.appendChild(b);
      });
      syncScreenState();
    }
    function syncScreenState() {
      U.qsa("button", els.gmScreens).forEach(function (b) { b.classList.toggle("gm-on", E.isActive(b.dataset.id)); });
    }
    function shortName(n) { return String(n).replace(/^n\d+_/, "").replace(/_/g, " "); }

    // ------------------------------------------------------------ draggable panel
    function makeDraggable() {
      var header = panel.querySelector(".gm-header");
      var dragging = false, ox = 0, oy = 0;
      header.addEventListener("pointerdown", function (e) {
        if (e.target.closest(".gm-min")) return;
        dragging = true; var r = panel.getBoundingClientRect();
        ox = e.clientX - r.left; oy = e.clientY - r.top;
        panel.style.right = "auto"; panel.style.left = r.left + "px"; panel.style.top = r.top + "px";
        header.setPointerCapture(e.pointerId);
      });
      header.addEventListener("pointermove", function (e) {
        if (!dragging) return;
        var x = U.clamp(e.clientX - ox, 0, window.innerWidth - 60);
        var y = U.clamp(e.clientY - oy, 0, window.innerHeight - 40);
        panel.style.left = x + "px"; panel.style.top = y + "px";
      });
      header.addEventListener("pointerup", function () { dragging = false; });
    }

    // ------------------------------------------------------------ keyboard shortcuts
    function bindShortcuts() {
      window.addEventListener("keydown", function (e) {
        // global toggle
        if (e.shiftKey && (e.key === "G" || e.key === "g")) { e.preventDefault(); toggle(); return; }
        if (!on) return;
        if (U.isTypingInField(e)) return;

        var meta = e.ctrlKey || e.metaKey;
        if (meta && (e.key === "z" || e.key === "Z")) { e.preventDefault(); editor.restoreLast(); refreshList(); return; }

        switch (e.key) {
          case "ArrowLeft": e.preventDefault(); editor.nudge(e.shiftKey ? -10 : -1, 0); break;
          case "ArrowRight": e.preventDefault(); editor.nudge(e.shiftKey ? 10 : 1, 0); break;
          case "ArrowUp": e.preventDefault(); editor.nudge(0, e.shiftKey ? -10 : -1); break;
          case "ArrowDown": e.preventDefault(); editor.nudge(0, e.shiftKey ? 10 : 1); break;
          case "Delete": case "Backspace": e.preventDefault(); editor.deleteSelected(); refreshList(); break;
          case "Escape": editor.deselect(); showNoSel(); break;
          case "c": case "C": editor.setCursorEdit(!editor.isCursorEdit()); syncTools(); break;
          case "b": case "B": els.gmDbgBounds.checked = !els.gmDbgBounds.checked; document.body.classList.toggle("gmShowBounds", els.gmDbgBounds.checked); break;
          case "t": case "T": els.gmDbgText.checked = !els.gmDbgText.checked; document.body.classList.toggle("gmShowText", els.gmDbgText.checked); break;
        }
      }, true);
    }

    self.init = init;
    self.toggle = toggle;
    self.isOn = function () { return on; };
    self.editor = function () { return editor; };
    return self;
  }

  function boot() {
    if (!window.Engine) { console.warn("[GodMode] Royal Bloom engine not detected — God Mode will not load."); return; }
    var gm = GodMode();
    window.RoyalBloomGodMode = gm;
    gm.init();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
