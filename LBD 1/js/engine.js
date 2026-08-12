/* Royal Bloom — runtime engine (Unity uGUI reimplementation, dependency-free).
 * Responsibilities: fixed 16:9 logical stage, RectTransform layout, image/text
 * rendering (with lazy paint), coordinate conversion, tween primitives, and node
 * operations (activate, world-preserving reparent, sibling index). Drag, drop, and
 * audio live in interaction.js / audio-manager.js.
 */
var Engine = (function () {
  "use strict";

  var CFG = null, ROOT = null, stage = null, viewport = null;
  var scale = 1, offX = 0, offY = 0;
  var LOGICAL_W = 1920, LOGICAL_H = 1080;
  var N = {};                 // id -> record
  var activatedCbs = [];      // fns(nodeId) when a node becomes active
  var DEV = false;            // dev assertions / logging

  function setDev(on) { DEV = !!on; }

  // ---------------------------------------------------------------- easing
  function lerp(a, b, t) { return a + (b - a) * t; }
  var Ease = {
    Linear: t => t,
    InQuad: t => t * t,
    OutQuad: t => 1 - (1 - t) * (1 - t),
    InOutQuad: t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
    InCubic: t => t * t * t,
    OutCubic: t => 1 - Math.pow(1 - t, 3),
    InOutCubic: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    InSine: t => 1 - Math.cos((t * Math.PI) / 2),
    OutSine: t => Math.sin((t * Math.PI) / 2),
    InOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
    OutBack: t => { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
    InBack: t => { var c1 = 1.70158, c3 = c1 + 1; return c3 * t * t * t - c1 * t * t; },
    OutElastic: t => { var c4 = (2 * Math.PI) / 3; return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * c4) + 1; },
    OutBounce: t => { var n1 = 7.5625, d1 = 2.75; if (t < 1 / d1) return n1 * t * t; else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + .75; else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + .9375; else return n1 * (t -= 2.625 / d1) * t + .984375; },
    Smoothstep: t => t * t * (3 - 2 * t)   // Unity zero-tangent curve equivalent (balance scale)
  };
  function ease(name) { return Ease[name] || Ease.Linear; }

  // ---------------------------------------------------------------- reduced motion
  var reducedMotion = false;
  try { reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  // ---------------------------------------------------------------- tween core
  var tweens = [];
  function now() { return performance.now() / 1000; }
  var rafId = null;
  function tick() {
    var t = now();
    for (var i = tweens.length - 1; i >= 0; i--) {
      var tw = tweens[i];
      if (tw.dead) { tweens.splice(i, 1); continue; }
      if (tw.delay > 0) { tw.delay -= (t - tw.last); tw.last = t; if (tw.delay > 0) continue; }
      tw.last = t;
      tw.elapsed += Math.min(0.05, t - (tw._pt || t)); tw._pt = t;
      var p = tw.dur <= 0 ? 1 : Math.min(1, tw.elapsed / tw.dur);
      var e = tw.eFn(tw.yoyo && tw.rev ? 1 - p : p);
      try { tw.fn(e, p); } catch (err) { console.error(err); }
      if (p >= 1) {
        if (tw.loops === -1) {
          if (tw.yoyo) tw.rev = !tw.rev;
          tw.elapsed = 0; tw._pt = t;
        } else if (tw.loopsDone < tw.loops - 1) {
          tw.loopsDone++; if (tw.yoyo) tw.rev = !tw.rev; tw.elapsed = 0; tw._pt = t;
        } else {
          tw.dead = true; tweens.splice(i, 1);
          if (tw.onComplete) try { tw.onComplete(); } catch (e2) { console.error(e2); }
        }
      }
    }
    for (var k = 0; k < updateHooks.length; k++) { try { updateHooks[k](t); } catch (e3) {} }
    rafId = requestAnimationFrame(tick);
  }
  var updateHooks = [];
  function onUpdate(fn) { updateHooks.push(fn); }

  function tween(opts) {
    var dur = opts.dur || 0;
    // reduced motion: shorten transitions and kill infinite bouncing loops
    if (reducedMotion) {
      if (opts.loops === -1) { dur = Math.min(dur, 0.001); opts = Object.assign({}, opts, { loops: 0, yoyo: false }); }
      else dur = Math.min(dur, 0.2);
    }
    var tw = {
      dur: dur, eFn: ease(opts.ease), fn: opts.fn,
      delay: opts.delay || 0, loops: opts.loops || 0, loopsDone: 0,
      yoyo: opts.yoyo || false, rev: false, elapsed: 0, last: now(),
      onComplete: opts.onComplete, tag: opts.tag, dead: false
    };
    tweens.push(tw);
    return tw;
  }
  function killTweensOf(tag) {
    for (var i = tweens.length - 1; i >= 0; i--) if (tweens[i].tag === tag) tweens[i].dead = true;
  }
  function activeTweenCount() { return tweens.filter(function (t) { return !t.dead; }).length; }
  function tweenP(opts) { return new Promise(function (res) { var oc = opts.onComplete; opts.onComplete = function () { if (oc) oc(); res(); }; tween(opts); }); }

  // ---------------------------------------------------------------- color
  // uGUI/TMP colors are authored as sRGB (the inspector values), so map the raw channels
  // straight to CSS. Applying a linear->sRGB curve here double-converts and washes brown
  // UI text out (e.g. #95491E renders as a pale ~#C97A4E). Match Unity's on-screen color.
  function tintCss(col) {
    return "rgba(" + Math.round(col.r * 255) + "," + Math.round(col.g * 255) + "," + Math.round(col.b * 255) + "," + col.a + ")";
  }
  function isWhite(col) { return col.r >= .999 && col.g >= .999 && col.b >= .999; }

  // ---------------------------------------------------------------- layout math
  function axis(P, aMin, aMax, anchored, size, pivot) {
    var sz = (aMax - aMin) * P + size;
    var min = aMin * P + anchored - pivot * size;
    return { min: min, size: sz };
  }
  // Press geometry, consumed by applyRect below and driven by the press block further down.
  // _pressT is one value, 0 (released) -> 1 (fully held), and everything about the press is derived
  // from it: the button DROPS onto its base, SQUASHES (a touch wider, noticeably shorter) and is
  // shaded darker by CSS. That is how a real game button behaves — the authored art already carries
  // its own 3D base (the darker strip along the bottom edge of Button_Blue), so pushing the face
  // down into that base is the honest press for this artwork. No glow is involved anywhere.
  var PRESS_DROP = 8;       // logical px the face travels down onto its base
  var PRESS_SX = 0.015;     // widens slightly as it squashes
  var PRESS_SY = 0.07;      // and loses 7% of its height — the squash that sells the impact
  function applyRect(rec) {
    var rt = rec.rt, pw = rec.parentW, ph = rec.parentH;
    var X = axis(pw, rt.aMinX, rt.aMaxX, rt.ax, rt.sdX, rt.pvX);
    var Y = axis(ph, rt.aMinY, rt.aMaxY, rt.ay, rt.sdY, rt.pvY);
    var w = Math.max(0, X.size), h = Math.max(0, Y.size);
    var left = X.min, top = ph - (Y.min + Y.size);
    var el = rec.el;
    el.style.width = w + "px"; el.style.height = h + "px";
    el.style.left = left + "px"; el.style.top = top + "px";
    var tr = "";
    // The press is layered on here as a MULTIPLIER/offset rather than written into rt.*, so it
    // composes with whatever else is animating the node — an idle hop and a finger-down can never
    // fight over the transform, and rt.sx / rt.ay still report the node's real authored values to
    // everything else (drop maths, QA asserts, God Mode).
    var pt = rec._pressT || 0;
    var psx = rt.sx * (1 + PRESS_SX * pt), psy = rt.sy * (1 - PRESS_SY * pt);
    if (pt) tr += "translateY(" + (PRESS_DROP * pt) + "px) ";
    if (rt.rot) tr += "rotate(" + (-rt.rot) + "deg) ";
    if (psx !== 1 || psy !== 1) tr += "scale(" + psx + "," + psy + ")";
    el.style.transform = tr;
    el.style.transformOrigin = (rt.pvX * 100) + "% " + ((1 - rt.pvY) * 100) + "%";
    rec._w = w; rec._h = h;
  }
  function layoutChildren(rec) {
    for (var i = 0; i < rec.children.length; i++) {
      var c = rec.children[i];
      c.parentW = rec._w; c.parentH = rec._h;
      applyRect(c);
      layoutChildren(c);
    }
  }
  // The box the stage is fitted into. Prefer the VIEWPORT element's rendered size: it is styled
  // with 100dvh, so it tracks a collapsing mobile address bar, whereas window.innerHeight can lag
  // and leave the stage scaled for a viewport that no longer exists (framing looks "zoomed"/clipped).
  // window.* stays the fallback (headless QA, or before #viewport exists).
  function fitBox() {
    if (viewport && viewport.getBoundingClientRect) {
      var b = viewport.getBoundingClientRect();
      if (b && b.width > 0 && b.height > 0) return { w: b.width, h: b.height };
    }
    return { w: window.innerWidth, h: window.innerHeight };
  }
  function computeScale() {
    var b = fitBox();
    return Math.min(b.w / LOGICAL_W, b.h / LOGICAL_H);
  }
  // relayout() is the SINGLE writer of the stage transform — nothing else may set it, or the two
  // owners fight and the framing changes mid-session.
  function relayout() {
    var box = fitBox();
    scale = computeScale();
    offX = Math.round((box.w - LOGICAL_W * scale) / 2);
    offY = Math.round((box.h - LOGICAL_H * scale) / 2);
    stage.style.width = LOGICAL_W + "px";
    stage.style.height = LOGICAL_H + "px";
    stage.style.transform = "translate(" + offX + "px," + offY + "px) scale(" + scale + ")";
    ROOT._w = LOGICAL_W; ROOT._h = LOGICAL_H;
    ROOT.el.style.width = LOGICAL_W + "px"; ROOT.el.style.height = LOGICAL_H + "px";
    ROOT.el.style.left = "0px"; ROOT.el.style.top = "0px";
    layoutChildren(ROOT);
  }

  // ---------------------------------------------------------------- image / text painting (lazy)
  function computeCss(img) {
    var sp = img.sprite, cr = sp.cropRect;
    var cropped = Math.abs(cr.w - 1) > 1e-3 || Math.abs(cr.h - 1) > 1e-3 || cr.x > 1e-3 || cr.y > 1e-3;
    var sizeCss, posCss;
    if (cropped) {
      sizeCss = (100 / cr.w) + "% " + (100 / cr.h) + "%";
      posCss = (cr.x / (1 - cr.w) * 100 || 0) + "% " + (cr.y / (1 - cr.h) * 100 || 0) + "%";
    } else {
      sizeCss = img.preserveAspect === "cover" ? "cover" : (img.preserveAspect ? "contain" : "100% 100%");
      posCss = "center";
    }
    return { size: sizeCss, pos: posCss, white: isWhite(img.color) };
  }
  function doPaint(rec) {
    var img = rec._img; if (!img || !img.enabled || !img.sprite || !img.sprite.path) return;
    var el = rec.el, css = computeCss(img);
    el.style.backgroundRepeat = "no-repeat";
    if (css.white) {
      el.style.webkitMaskImage = el.style.maskImage = "";
      el.style.backgroundColor = "";
      el.style.backgroundImage = "url('" + img.sprite.path + "')";
      el.style.backgroundSize = css.size;
      el.style.backgroundPosition = css.pos;
      if (img.color.a < 1) el.style.opacity = img.color.a;
    } else {
      el.style.backgroundColor = tintCss(img.color);
      el.style.webkitMaskImage = el.style.maskImage = "url('" + img.sprite.path + "')";
      el.style.webkitMaskRepeat = el.style.maskRepeat = "no-repeat";
      el.style.webkitMaskSize = el.style.maskSize = css.size;
      el.style.webkitMaskPosition = el.style.maskPosition = css.pos;
    }
    rec._painted = true;
  }
  // Hide a node's OWN image paint (background/mask/tint) while leaving its child elements
  // fully visible. Used for Part 4 drop-zone markers: the target must be an invisible hit
  // area (not a sprite that looks already-dropped), yet the real item is reparented INTO it
  // and must still show. Opacity is untouched, so children are unaffected.
  function setSelfPaint(id, visible) {
    var r = N[id]; if (!r) return;
    var el = r.el;
    if (visible === false) {
      el.style.backgroundImage = "none";
      el.style.webkitMaskImage = el.style.maskImage = "none";
      el.style.backgroundColor = "transparent";
      if (r._img) r._img.enabled = false;   // stop any deferred/re-paint from re-showing it
      r._painted = true; r._deferPaint = false;
    } else if (r._img) {
      r._img.enabled = true; r._painted = false; maybePaint(r);
    }
  }
  // Defer painting hidden subtrees so the browser doesn't fetch/decode inactive-level
  // art (incl. the ten 1920x1080 wrong-feedback PNGs) until that level is mounted.
  function maybePaint(rec) {
    if (rec._painted || !rec._img) return;
    if (chainActive(rec)) doPaint(rec);
    else rec._deferPaint = true;
  }
  function chainActive(rec) {
    var cur = rec;
    while (cur && cur !== ROOT) { if (cur.node.active === false || cur.el.style.display === "none") return false; cur = cur.parent; }
    return true;
  }
  function paintDeferredIn(rec) {
    if (rec._deferPaint && !rec._painted) { rec._deferPaint = false; doPaint(rec); }
    for (var i = 0; i < rec.children.length; i++) paintDeferredIn(rec.children[i]);
  }
  function repaintSprite(rec, spritePath, opts) {
    if (!rec) return;
    opts = opts || {};
    var img = rec._img;
    if (!img) img = rec._img = { enabled: true, color: { r: 1, g: 1, b: 1, a: 1 }, preserveAspect: rec.comp.image ? rec.comp.image.preserveAspect : false, sprite: {} };
    img.sprite = { path: spritePath, cropRect: { x: 0, y: 0, w: 1, h: 1 }, border: { l: 0, b: 0, r: 0, t: 0 } };
    img.color = img.color && isWhite(img.color) ? img.color : { r: 1, g: 1, b: 1, a: 1 };
    // opts.preserveAspect controls fit on a sprite swap: true = "contain" (letterbox, never
    // distort), "cover" = fill the box by the larger side (never shrink; crop overflow),
    // false = stretch. Keeps a differently-shaped swap (item -> dropped / correct / wrong) sane.
    if (opts.preserveAspect != null) img.preserveAspect = opts.preserveAspect;
    img.enabled = true;
    rec._painted = false; rec._deferPaint = false;
    // Repaint keeps the element's own box untouched — only the fill changes (fixed sizing).
    maybePaint(rec);
  }
  // TextMeshPro HorizontalAlignmentOptions: Left=1, Center=2, Right=4 (0 = unset -> left)
  var TMP_ALIGN_H = { 0: "flex-start", 1: "flex-start", 2: "center", 4: "flex-end" };
  function paintText(rec, tmp) {
    if (!tmp) return;
    var el = rec.el;
    el.classList.add("tmp");
    var inner = document.createElement("div");
    inner.className = "tmp-inner";
    inner.textContent = tmp.text || "";
    el.appendChild(inner);
    rec._tmpInner = inner;
    var h = tmp.alignH & 0xFF;
    // display:flex comes from the .tmp class so setActive("") toggling still works
    el.style.justifyContent = TMP_ALIGN_H[h] || "flex-start";
    el.style.textAlign = h === 2 ? "center" : h === 4 ? "right" : "left";
    // Vertically CENTER single-line labels regardless of the authored vertical anchor. Bottom-anchoring
    // (alignV 512) in a box only a little taller than the font pushes the baseline to the floor, so the
    // font's descenders (g, y, p, j) spill past the bottom and overflow:hidden clips their tails. Centering
    // keeps the whole glyph — ascenders and descenders — inside the box.
    el.style.alignItems = "center";
    inner.style.fontFamily = "'GameFont', sans-serif";
    inner.style.fontSize = (tmp.fontSize) + "px";
    inner.style.lineHeight = (1 + (tmp.lineSpacing || 0) / 100);
    inner.style.letterSpacing = ((tmp.charSpacing || 0) / 100) + "em";
    inner.style.color = tintCss(tmp.color);
    inner.style.whiteSpace = "pre-wrap";
    if (tmp.style & 1) inner.style.fontWeight = "bold";
    if (tmp.style & 2) inner.style.fontStyle = "italic";
    rec._tmp = tmp;
    if (tmp.autoSize) autosizeText(rec);
  }
  function setText(idOrRec, str) {
    // accept a node id string or a record — callers (controllers) pass ids
    var rec = typeof idOrRec === "string" ? N[idOrRec] : idOrRec;
    if (rec && rec._tmpInner) { rec._tmpInner.textContent = str; if (rec._tmp && rec._tmp.autoSize) autosizeText(rec); }
  }
  function autosizeText(rec) {
    var tmp = rec._tmp, inner = rec._tmpInner, el = rec.el;
    var max = tmp.sizeMax || tmp.fontSize, min = tmp.sizeMin || 8;
    var s = max;
    inner.style.fontSize = s + "px";
    var guard = 0;
    while (s > min && (inner.scrollWidth > el.clientWidth + 1 || inner.scrollHeight > el.clientHeight + 1) && guard++ < 60) {
      s -= 1; inner.style.fontSize = s + "px";
    }
  }

  // ---------------------------------------------------------------- node build
  function makeRT(node) {
    return {
      ax: node.anchoredPos.x, ay: node.anchoredPos.y,
      sdX: node.sizeDelta.x, sdY: node.sizeDelta.y,
      aMinX: node.anchorMin.x, aMinY: node.anchorMin.y,
      aMaxX: node.anchorMax.x, aMaxY: node.anchorMax.y,
      pvX: node.pivot.x, pvY: node.pivot.y,
      sx: node.scale.x, sy: node.scale.y, rot: node.rotZ || 0
    };
  }
  function build(node, parentEl) {
    var el = document.createElement("div");
    el.className = "node";
    el.id = node.id;
    el.dataset.id = node.id;
    el.style.position = "absolute";
    var rec = { id: node.id, el: el, node: node, rt: makeRT(node), comp: node.components || {}, children: [], parent: null };
    N[node.id] = rec;
    parentEl.appendChild(el);
    if (!node.active) el.style.display = "none";

    var c = node.components || {};
    if (c.canvasGroup) {
      el.style.opacity = c.canvasGroup.alpha;
      if (!c.canvasGroup.blocksRaycasts) el.style.pointerEvents = "none";
      rec._cg = { alpha: c.canvasGroup.alpha, blocksRaycasts: c.canvasGroup.blocksRaycasts !== false };
    }
    if (c.image) {
      rec._img = { enabled: c.image.enabled !== false, color: c.image.color, preserveAspect: c.image.preserveAspect, sprite: c.image.sprite };
      maybePaint(rec);
    }
    if (c.image && c.image.raycast === false && !c.button) el.style.pointerEvents = "none";
    if (c.tmp) paintText(rec, c.tmp);
    // A Unity Button component makes a node CLICKABLE, but it does not mean anything actually
    // happens when it is clicked. Several exported Buttons have no reachable action at all: the
    // intro backdrop (n2_Intro_1) is a full-screen 1920x1080 node whose only authored call is an
    // animator "Play" — which the flow wiring ignores, since it only honours SetActive — and the
    // box lids and the pan drop markers are the same. Painting a hand cursor here therefore put a
    // hand over the ENTIRE intro background, and over dead art on the level screens.
    //
    // So the cursor is no longer derived from "has a Button component". It comes from role="button",
    // which onClick stamps only when a real handler is attached (see the cursor rules in style.css).
    // The hand now means exactly one thing: pressing this does something. pointer-events stays auto
    // so a handler attached later still receives its clicks.
    if (c.button) { el.style.pointerEvents = "auto"; rec._btn = c.button; }
    if (c.draggable || c.basket) el.style.pointerEvents = "auto";

    for (var i = 0; i < (node.children || []).length; i++) {
      var cr = build(node.children[i], el);
      cr.parent = rec; rec.children.push(cr);
    }
    return rec;
  }

  // ---------------------------------------------------------------- public node ops
  function get(id) { return N[id]; }
  function el(id) { var r = N[id]; return r ? r.el : null; }
  function setActive(id, on) {
    var r = N[id]; if (!r) return;
    var was = r.el.style.display !== "none";
    r.el.style.display = on ? "" : "none";
    r.node.active = on;
    if (on && !was) { paintDeferredIn(r); fireActivated(id); }
  }
  function isActive(id) { var r = N[id]; return !!(r && r.el.style.display !== "none" && r.node.active !== false); }
  // Walk ancestors: a node is only truly visible when itself and every ancestor is active.
  function isInteractableInTree(id) {
    var cur = N[id];
    if (!cur) return false;
    while (cur && cur !== ROOT) {
      if (cur.node.active === false || cur.el.style.display === "none") return false;
      if (cur._cg && cur._cg.blocksRaycasts === false) return false;
      cur = cur.parent;
    }
    return true;
  }
  function isActuallyVisible(id) { return isInteractableInTree(id); }
  function setAnchoredPos(id, x, y) { var r = N[id]; if (!r) return; if (x != null) r.rt.ax = x; if (y != null) r.rt.ay = y; applyRect(r); layoutChildren(r); }
  function getAnchoredPos(id) { var r = N[id]; return r ? { x: r.rt.ax, y: r.rt.ay } : { x: 0, y: 0 }; }
  function setScale(id, s) { var r = N[id]; if (!r) return; r.rt.sx = r.rt.sy = s; applyRect(r); }
  function setScaleXY(id, sx, sy) { var r = N[id]; if (!r) return; r.rt.sx = sx; r.rt.sy = sy; applyRect(r); }
  function getScale(id) { var r = N[id]; return r ? r.rt.sx : 1; }
  function setRotation(id, deg) { var r = N[id]; if (!r) return; r.rt.rot = deg; applyRect(r); }
  function setSizeDelta(id, x, y) { var r = N[id]; if (!r) return; if (x != null) r.rt.sdX = x; if (y != null) r.rt.sdY = y; applyRect(r); layoutChildren(r); }
  function getRect(id) { var r = N[id]; return r ? { ax: r.rt.ax, ay: r.rt.ay, sdX: r.rt.sdX, sdY: r.rt.sdY, rot: r.rt.rot } : null; }
  // set anchoredPos / sizeDelta / rotation together, then lay out once (balance-scale poses)
  function setPose(id, p) {
    var r = N[id]; if (!r) return;
    if (p.ax != null) r.rt.ax = p.ax; if (p.ay != null) r.rt.ay = p.ay;
    if (p.sdX != null) r.rt.sdX = p.sdX; if (p.sdY != null) r.rt.sdY = p.sdY;
    if (p.rot != null) r.rt.rot = p.rot;
    applyRect(r); layoutChildren(r);
  }
  function childByName(parentId, name) {
    var r = N[parentId]; if (!r) return null;
    for (var i = 0; i < r.children.length; i++) if ((r.children[i].node.name || "").trim() === name) return r.children[i].id;
    return null;
  }
  function setAlpha(id, a) { var r = N[id]; if (!r) return; r.el.style.opacity = a; if (r._cg) r._cg.alpha = a; }
  function getAlpha(id) { var r = N[id]; if (!r) return 1; return r._cg ? r._cg.alpha : parseFloat(r.el.style.opacity || "1"); }
  function setInteractable(id, on) { var r = N[id]; if (!r) return; r.el.style.pointerEvents = on ? "auto" : "none"; r.el.style.filter = on ? "" : "grayscale(0.1) opacity(0.8)"; if (r._btn) r._btn.interactable = on; }
  // Lock/unlock input WITHOUT any visual change (no fade/grayscale/transform). Use this for the
  // heavier/lighter answer items so selecting one never dims or appears to shrink the artwork.
  function setInputEnabled(id, on) { var r = N[id]; if (!r) return; r.el.style.pointerEvents = on ? "auto" : "none"; if (r._btn) r._btn.interactable = on; }
  function setRaycast(id, on) { var r = N[id]; if (r) r.el.style.pointerEvents = on ? "auto" : "none"; }

  // ---------------------------------------------------------------- press feedback (two-state)
  // A button has to react the INSTANT the finger goes down. The .pressed class used to be added by
  // the CLICK handler — and click fires on RELEASE — so on touch the child saw the "pressed" look
  // only after the tap was already over, which is why the buttons read as flat pictures. Press
  // state is now driven by pointerdown/pointerup, and it is a real game-button press: the face
  // DROPS onto its base and SQUASHES (geometry, via _pressT in applyRect) while a shading pass
  // darkens it (colour, via the .pressed class). No glow — depth is what sells a button.
  // Two things had to be got right for the press to actually READ:
  //
  //  1. It must not cancel itself. Pressing shrinks the button, and a waiting button is also
  //     hopping — so on a stationary finger the button moves out from under the pointer and fires
  //     pointerleave, which was releasing the press WHILE IT WAS STILL HELD. It flickered off
  //     instantly. There is no pointerleave handling any more: exactly one button can be held at a
  //     time and it is released from a WINDOW-level pointerup, so nothing about the button's own
  //     geometry can end its own press.
  //  2. A fast tap must still be visible. A child's tap is ~100ms; the dark tone needs ~70ms to
  //     arrive, so releasing immediately meant the state never fully landed. The press is now held
  //     for at least PRESS_MIN_MS before it springs back, however briefly the screen was touched.
  var PRESS_MIN_MS = 140;     // minimum time the pressed state stays up, even for a stab of a tap
  // AudioManager loads AFTER this file, so it is resolved at call time, never at load time.
  function uiSound(name) { try { if (window.AudioManager && AudioManager.playUI) AudioManager.playUI(name); } catch (e) {} }
  var pressedRec = null;      // the one button currently held
  var pressedAt = 0;
  var pressTimer = null;

  function setPressAmount(id, t) { var r = N[id]; if (!r) return; r._pressT = t; applyRect(r); }
  function pressTo(rec, target, dur, easeName) {
    killTweensOf(rec.id + "#press");
    var from = rec._pressT || 0;
    tween({
      dur: dur, ease: easeName, tag: rec.id + "#press",
      fn: function (e) { rec._pressT = lerp(from, target, e); applyRect(rec); },
      onComplete: function () { rec._pressT = target; applyRect(rec); }
    });
  }
  function pressDown(rec) {
    if (pressedRec === rec) return;
    if (pressedRec) pressSettle(pressedRec);          // never leave a previous button stuck down
    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    pressedRec = rec; pressedAt = performance.now();
    rec.el.classList.add("pressed");
    pressTo(rec, 1, 0.06, "OutQuad");                 // snap down fast — impact should feel instant
  }
  function pressSettle(rec) {
    rec.el.classList.remove("pressed");
    pressTo(rec, 0, 0.26, "OutBack");                 // springs back up past rest and settles: "pop"
  }
  // Released from the window, so it fires wherever the finger ends up.
  function pressRelease() {
    var rec = pressedRec; if (!rec) return;
    pressedRec = null;
    var wait = PRESS_MIN_MS - (performance.now() - pressedAt);
    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    if (wait <= 0) pressSettle(rec);
    else pressTimer = setTimeout(function () { pressTimer = null; pressSettle(rec); }, wait);
  }
  var pressWindowWired = false;
  function wirePressWindow() {
    if (pressWindowWired) return;
    pressWindowWired = true;
    // capture phase: a press is released even if something downstream stops propagation
    window.addEventListener("pointerup", pressRelease, true);
    window.addEventListener("pointercancel", pressRelease, true);
    window.addEventListener("blur", pressRelease);
  }

  // keyed onClick: registering with the same key replaces the previous handler (no leaks).
  function onClick(id, fn, opts) {
    var r = N[id]; if (!r) return function () {};
    opts = opts || {};
    // opts.press selects the tap response:
    //   (default)  full game-button press — drops onto its base, squashes and shades, from the
    //              instant of pointerdown. Every in-game button.
    //   false      nothing at all. The two answer items: they ARE the draggable item nodes, must
    //              hold their exact size, and their feedback is the green/red glow instead.
    //   "legacy"   the original 120ms shade on click, and nothing else. The intro Let's Go button,
    //              which is deliberately kept exactly as it was authored.
    //
    // The wiring runs ONCE per node: onClick is called repeatedly with different keys on the same
    // button (a Next button takes both "gm" and "nexthint") and must not stack pointer listeners.
    if (opts.press !== false && opts.press !== "legacy" && !r._pressWired) {
      r._pressWired = true;
      wirePressWindow();
      // Only the DOWN edge is per-button; the release is global (see pressRelease), so the press
      // survives the button shrinking, hopping, or the finger sliding off mid-hold.
      var pDown = function (ev) {
        if (r._btn && r._btn.interactable === false) return;
        if (ev && ev.isPrimary === false) return;
        uiSound("tap");                                  // sound lands with the press, not the release
        pressDown(r);
      };
      r.el.addEventListener("pointerdown", pDown);
      r.el.addEventListener("keydown", function (e2) { if (e2.key === "Enter" || e2.key === " " || e2.key === "Spacebar") pressDown(r); });
      r.el.addEventListener("keyup", pressRelease);      // keyboard gets the same two-state flash
    }
    var h = function (e) {
      e.stopPropagation();
      if (r._btn && r._btn.interactable === false) return;
      // Targets that opt out of the press response still get the tap SOUND — every tap in the game
      // is audible. (Full-press targets already played it on pointerdown, so they are skipped here.)
      if (opts.press === false) uiSound("tap");
      if (opts.press === "legacy") {          // untouched original: a brief shade on click, no motion
        uiSound("tap");
        r.el.classList.add("pressed");
        setTimeout(function () { r.el.classList.remove("pressed"); }, 120);
      }
      // clear focus after a pointer click so the keyboard :focus-visible ring never lingers
      // on a tapped game item (avoids a stray outline box on scale items / buttons)
      if (e && e.type === "click" && typeof r.el.blur === "function") { try { r.el.blur(); } catch (_) {} }
      fn(e);
    };
    r._clickHandlers = r._clickHandlers || {};
    var key = opts.key || "default";
    if (r._clickHandlers[key]) { r.el.removeEventListener("click", r._clickHandlers[key]); r.el.removeEventListener("keydown", r._clickHandlers[key + ":key"]); }
    r._clickHandlers[key] = h;
    r.el.addEventListener("click", h);
    // keyboard activation (Enter/Space) for accessibility
    var kh = function (e) { if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); h(e); } };
    r._clickHandlers[key + ":key"] = kh;
    r.el.addEventListener("keydown", kh);
    if (r.el.getAttribute("role") == null && !/^(button|a)$/i.test(r.el.tagName)) r.el.setAttribute("role", "button");
    if (r.el.getAttribute("tabindex") == null) r.el.setAttribute("tabindex", "0");
    return function dispose() {
      r.el.removeEventListener("click", h);
      r.el.removeEventListener("keydown", kh);
      if (r._clickHandlers[key] === h) { delete r._clickHandlers[key]; delete r._clickHandlers[key + ":key"]; }
    };
  }
  function ariaLabel(id, label) { var r = N[id]; if (r) r.el.setAttribute("aria-label", label); }

  function fireActivated(id) { for (var i = 0; i < activatedCbs.length; i++) try { activatedCbs[i](id); } catch (e) {} }
  function onActivated(fn) { activatedCbs.push(fn); }

  // ---------------------------------------------------------------- reparent / sibling order
  function detach(rec) {
    if (rec.parent) { var idx = rec.parent.children.indexOf(rec); if (idx >= 0) rec.parent.children.splice(idx, 1); }
  }
  function reparent(id, newParentId) {
    var r = N[id], np = N[newParentId]; if (!r || !np) return;
    np.el.appendChild(r.el);
    detach(r);
    r.parent = np; np.children.push(r);
    r.parentW = np._w; r.parentH = np._h;
    applyRect(r); layoutChildren(r);
  }
  // World-preserving reparent: element stays visually put (no jump) across the move.
  function reparentKeepWorld(id, newParentId) {
    var r = N[id]; if (!r) return;
    var center = worldCenterLogical(id);       // capture visible center in logical stage space
    reparent(id, newParentId);
    if (center) setStageLocalPos(r, center.x, center.y);
  }
  // create a runtime full-stage node (e.g. the single dedicated drag layer) under the Canvas root
  function ensureLayer(id) {
    if (N[id]) return N[id];
    var el = document.createElement("div");
    el.className = "node"; el.id = id; el.dataset.id = id;
    el.style.position = "absolute"; el.style.pointerEvents = "none";
    ROOT.el.appendChild(el);
    var rt = { ax: 0, ay: 0, sdX: 0, sdY: 0, aMinX: 0, aMinY: 0, aMaxX: 1, aMaxY: 1, pvX: 0, pvY: 0, sx: 1, sy: 1, rot: 0 };
    var rec = { id: id, el: el, node: { id: id, active: true, children: [] }, rt: rt, comp: {}, children: [], parent: ROOT };
    N[id] = rec; ROOT.children.push(rec);
    rec.parentW = LOGICAL_W; rec.parentH = LOGICAL_H; applyRect(rec);
    return rec;
  }
  function setSiblingIndex(id, index) {
    var r = N[id]; if (!r || !r.parent) return;
    var siblings = r.parent.children;
    var cur = siblings.indexOf(r);
    if (cur < 0) return;
    siblings.splice(cur, 1);
    index = Math.max(0, Math.min(index, siblings.length));
    siblings.splice(index, 0, r);
    // sync DOM order to match children array
    var parentEl = r.parent.el;
    var ref = index + 1 < siblings.length ? siblings[index + 1].el : null;
    parentEl.insertBefore(r.el, ref);
  }
  function getSiblingIndex(id) { var r = N[id]; return r && r.parent ? r.parent.children.indexOf(r) : -1; }
  function setAsLastSibling(id) { var r = N[id]; if (r && r.parent) setSiblingIndex(id, r.parent.children.length - 1); }
  function setAsFirstSibling(id) { setSiblingIndex(id, 0); }

  // ---------------------------------------------------------------- coordinate conversion
  function stageRect() { return stage.getBoundingClientRect(); }
  function currentScale() { var sr = stageRect(); return sr.width / LOGICAL_W || scale; }
  function clientToLogical(cx, cy) {
    var sr = stageRect(), s = sr.width / LOGICAL_W || scale;
    return { x: (cx - sr.left) / s, y: (cy - sr.top) / s };
  }
  // world (rendered) rectangle of a node, expressed in logical stage coordinates
  function worldRectLogical(id) {
    var r = N[id]; if (!r) return null;
    var b = r.el.getBoundingClientRect();
    var tl = clientToLogical(b.left, b.top), br = clientToLogical(b.right, b.bottom);
    return { x: tl.x, y: tl.y, w: br.x - tl.x, h: br.y - tl.y };
  }
  function worldCenterLogical(id) {
    var wr = worldRectLogical(id); if (!wr) return null;
    return { x: wr.x + wr.w / 2, y: wr.y + wr.h / 2 };
  }
  // absolute top-left in logical space by summing left/top up the chain
  function absTopLeft(rec) {
    var x = 0, y = 0, cur = rec;
    while (cur && cur !== ROOT) { x += parseFloat(cur.el.style.left || 0); y += parseFloat(cur.el.style.top || 0); cur = cur.parent; }
    return { x: x, y: y };
  }
  function centerLogical(id) {
    var r = N[id]; if (!r) return { x: 0, y: 0 };
    var a = absTopLeft(r);
    return { x: a.x + (r._w || 0) / 2, y: a.y + (r._h || 0) / 2 };
  }
  // Place a node so its (untransformed) center sits at logical stage point (lx,ly).
  function setStageLocalPos(rec, lx, ly) {
    var abs = absTopLeft(rec.parent);
    var localLeft = lx - abs.x, localTop = ly - abs.y;
    var rt = rec.rt, pw = rec.parentW, ph = rec.parentH;
    var sizeX = Math.max(0, (rt.aMaxX - rt.aMinX) * pw + rt.sdX);
    var sizeY = Math.max(0, (rt.aMaxY - rt.aMinY) * ph + rt.sdY);
    var leftEdge = localLeft - sizeX / 2, topEdge = localTop - sizeY / 2;
    var minX = leftEdge, minY = ph - (topEdge + sizeY);
    rt.ax = minX - rt.aMinX * pw + rt.pvX * sizeX;
    rt.ay = minY - rt.aMinY * ph + rt.pvY * sizeY;
    applyRect(rec); layoutChildren(rec);
  }

  // ---------------------------------------------------------------- sprite preload / visible art
  // Art is painted lazily (see maybePaint): the browser only starts FETCHING a sprite when its node
  // is activated, so on a first visit a card could appear a beat before the item inside it. Warm the
  // sprites (and record their natural size, used for seating) BEFORE a reveal so both land together.
  // Never blocks a reveal for more than PRELOAD_TIMEOUT, and no-ops where there is no real image
  // loader (the headless QA shim), so it can be awaited unconditionally.
  var spriteMeta = {};        // src -> { w, h } natural pixel size
  var spriteWarm = {};        // src -> Promise (one probe per src, ever)
  var PRELOAD_TIMEOUT = 1500;
  function warmPath(src) {
    if (!src) return Promise.resolve();
    if (spriteWarm[src]) return spriteWarm[src];
    return (spriteWarm[src] = new Promise(function (res) {
      var im;
      try { im = new Image(); } catch (e) { return res(); }
      if (!("complete" in im)) return res();      // no real image loading here — nothing to wait for
      var done = false;
      var finish = function () {
        if (done) return; done = true;
        if (im.naturalWidth > 0 && im.naturalHeight > 0) spriteMeta[src] = { w: im.naturalWidth, h: im.naturalHeight };
        res();
      };
      im.onload = function () { if (im.decode) im.decode().then(finish, finish); else finish(); };
      im.onerror = finish;
      im.src = src;
      if (im.complete) finish();                  // already cached
      setTimeout(finish, PRELOAD_TIMEOUT);        // a stalled asset must never hold up the flow
    }));
  }
  function preloadPaths(paths) { return Promise.all((paths || []).filter(Boolean).map(warmPath)); }
  function spritePathsIn(id, out) {
    var r = N[id]; if (!r) return out;
    if (r._img && r._img.enabled !== false && r._img.sprite && r._img.sprite.path) out.push(r._img.sprite.path);
    for (var i = 0; i < r.children.length; i++) spritePathsIn(r.children[i].id, out);
    return out;
  }
  function preloadSprites(ids) {
    var out = [];
    (ids || []).forEach(function (id) { if (id) spritePathsIn(id, out); });
    return preloadPaths(out);
  }
  // Rectangle of the VISIBLE ART inside an image node, in logical stage coordinates. With
  // preserveAspect ("contain") a sprite whose aspect differs from its box is letterboxed inside it,
  // so the DOM box is not where the picture is — seating an item by its box would leave the art
  // hovering. Falls back to the box when the natural size isn't known yet or the fill is stretched.
  function artRectLogical(id) {
    var r = N[id], wr = worldRectLogical(id);
    if (!r || !wr) return wr;
    var img = r._img;
    if (!img || img.preserveAspect !== true || !img.sprite || !img.sprite.path) return wr;
    var m = spriteMeta[img.sprite.path];
    if (!m || !(m.w > 0) || !(m.h > 0) || !(wr.w > 0) || !(wr.h > 0)) return wr;
    var s = Math.min(wr.w / m.w, wr.h / m.h), dw = m.w * s, dh = m.h * s;
    return { x: wr.x + (wr.w - dw) / 2, y: wr.y + (wr.h - dh) / 2, w: dw, h: dh };
  }

  // ---------------------------------------------------------------- DOTween-style helpers
  function doAnchorPos(id, tx, ty, dur, easeName, opts) {
    opts = opts || {}; var r = N[id]; if (!r) return Promise.resolve();
    var sx = r.rt.ax, sy = r.rt.ay;
    return tweenP({
      dur: dur, ease: easeName, delay: opts.delay || 0, loops: opts.loops || 0, yoyo: opts.yoyo || false, tag: opts.tag || id,
      fn: function (e) { r.rt.ax = lerp(sx, tx, e); r.rt.ay = lerp(sy, ty, e); applyRect(r); layoutChildren(r); },
      onComplete: opts.onComplete
    });
  }
  function doAnchorPosY(id, ty, dur, easeName, opts) { opts = opts || {}; var r = N[id]; if (!r) return Promise.resolve(); return doAnchorPos(id, r.rt.ax, ty, dur, easeName, opts); }
  function doScale(id, target, dur, easeName, opts) {
    opts = opts || {}; var r = N[id]; if (!r) return Promise.resolve();
    var s0 = r.rt.sx, from = opts.from;
    if (from != null) { r.rt.sx = r.rt.sy = from; s0 = from; applyRect(r); }
    return tweenP({
      dur: dur, ease: easeName, delay: opts.delay || 0, loops: opts.loops || 0, yoyo: opts.yoyo || false, tag: opts.tag || id,
      fn: function (e) { var s = lerp(s0, target, e); r.rt.sx = s; r.rt.sy = s; applyRect(r); },
      onComplete: opts.onComplete
    });
  }
  function doFade(id, target, dur, easeName, opts) {
    opts = opts || {}; var r = N[id]; if (!r) return Promise.resolve();
    var a0 = r._cg ? r._cg.alpha : parseFloat(r.el.style.opacity || "1");
    return tweenP({
      dur: dur, ease: easeName, delay: opts.delay || 0, loops: opts.loops || 0, yoyo: opts.yoyo || false, tag: (opts.tag || id) + "#fade",
      fn: function (e) { var a = lerp(a0, target, e); r.el.style.opacity = a; if (r._cg) r._cg.alpha = a; },
      onComplete: opts.onComplete
    });
  }
  // "#press" belongs here: without it, killing a node mid-press left the press tween running, and it
  // would finish by writing _pressT back — so a button torn down while held could be left visibly
  // pushed in and shaded on the next screen.
  function kill(id) { killTweensOf(id); killTweensOf(id + "#fade"); killTweensOf(id + "#path"); killTweensOf(id + "#tilt"); killTweensOf(id + "#press"); }

  // world-space path (ghost hand) — 3-point arc in logical stage coordinates
  function doPathScreen(id, pts, dur, easeName, loops, yoyo) {
    var r = N[id]; if (!r) return;
    function sampleArc(t) {
      if (t < .5) { var u = t / .5; return { x: lerp(pts[0].x, pts[1].x, u), y: lerp(pts[0].y, pts[1].y, u) }; }
      var u2 = (t - .5) / .5; return { x: lerp(pts[1].x, pts[2].x, u2), y: lerp(pts[1].y, pts[2].y, u2) };
    }
    tween({
      dur: dur, ease: easeName, loops: loops, yoyo: yoyo, tag: id + "#path",
      fn: function (e) { var p = sampleArc(e); setStageLocalPos(r, p.x, p.y); }
    });
  }

  // ---------------------------------------------------------------- effects
  // Sparkle bursts, rebuilt for frame rate. The old version was the game's worst hitch — it gave every
  // particle its OWN requestAnimationFrame recursion (128 of them when Part 4 finished and both
  // containers burst at once) and every particle carried two drop-shadow filters, i.e. two blur passes per
  // element per frame. That is what made the box open and the Part-4 finish stutter. Now: ONE rAF loop
  // for all particles, no filters (the warm centre is a baked gradient — see .confetti-p), fewer
  // particles, and a hard cap so simultaneous bursts can never stack into a frame-rate problem.
  var confettiNodes = [];          // active particles: { el, cx, cy, vx, vy, rise, spin, base, phase, t0, life, token }
  var confettiRaf = null;
  var CONFETTI_MAX = 80;
  var SPARK_COLORS = ["#FFD84D", "#FFC93C", "#FFE9A0", "#FFB300", "#FFF3C4", "#FFDF70"];
  // Client-pixel centre of a node, for callers that want to measure EVERY burst before creating any
  // particles. Measuring between bursts forces a synchronous layout with the previous burst's
  // elements already in the document — a guaranteed hitch, and it was happening on the one frame
  // that also hid the instruction banner and both item cards.
  function confettiCenter(id) {
    var r = N[id];
    var rect = (r ? r.el : stage).getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }
  function confettiBurst(id, token, opts) {
    opts = opts || {};
    var c = opts.at || confettiCenter(id);
    var cx = c.x, cy = c.y;
    var count = reducedMotion ? 12 : 30;
    var life = reducedMotion ? 0.8 : 1.6;
    count = Math.min(count, Math.max(0, CONFETTI_MAX - confettiNodes.length));
    var t0 = performance.now();
    // Build off-document and insert ONCE. Appending each particle separately meant `count` separate
    // insertions into <body>, each invalidating layout, right when the scene was also changing.
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var el = document.createElement("div");
      el.className = "confetti-p";
      el.style.left = cx + "px"; el.style.top = cy + "px";
      var col = SPARK_COLORS[i % SPARK_COLORS.length];
      // glow baked into the fill instead of a filter: paint-only, no per-frame blur pass
      el.style.background = "radial-gradient(circle at 50% 45%, #fffbe8 0%, #ffe89a 40%, " + col + " 100%)";
      frag.appendChild(el);
      // gentle magical sparkle: stars spread softly, drift UP, twinkle (pulse + fade), barely fall
      var ang = (i / Math.max(count, 1)) * Math.PI * 2 + (i % 3) * 0.5;
      var spd = 110 + (i % 7) * 38;
      confettiNodes.push({
        el: el, cx: cx, cy: cy,
        vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd - 120,
        rise: 70 + (i % 5) * 22, spin: (i % 2 ? 1 : -1) * (110 + (i % 4) * 55),
        base: 0.55 + (i % 5) * 0.16, phase: (i % 6) * 1.05,
        // Each star gets its OWN lifetime (0.7x - 1.3x). They all used to share one life from one
        // start time, so the entire cloud blinked out on a single frame — which is what read as the
        // animation being "cut off" rather than tapering away.
        t0: t0, life: life * (0.7 + 0.6 * ((i % 7) / 6)), token: token
      });
    }
    if (count) document.body.appendChild(frag);
    if (!confettiRaf && confettiNodes.length) confettiRaf = requestAnimationFrame(stepConfetti);
  }
  function dropParticle(i) {
    var p = confettiNodes[i];
    confettiNodes.splice(i, 1);
    if (p && p.el && p.el.parentNode) p.el.remove();
  }
  function stepConfetti() {
    var t = performance.now();
    for (var i = confettiNodes.length - 1; i >= 0; i--) {
      var p = confettiNodes[i];
      if (p.token && p.token.cancelled) { dropParticle(i); continue; }
      var dt = (t - p.t0) / 1000;
      if (dt >= p.life || !p.el.isConnected) { dropParticle(i); continue; }
      var x = p.vx * dt, y = p.vy * dt + 70 * dt * dt - p.rise * dt;      // float up, feather-light gravity
      var tw = 0.5 + 0.6 * Math.abs(Math.sin(dt * 7 + p.phase));          // twinkle (size pulse)
      p.el.style.transform = "translate(" + x + "px," + y + "px) rotate(" + (dt * p.spin) + "deg) scale(" + (p.base * tw) + ")";
      p.el.style.opacity = Math.max(0, (dt < 0.15 ? dt / 0.15 : 1) * (1 - dt / p.life));
    }
    confettiRaf = confettiNodes.length ? requestAnimationFrame(stepConfetti) : null;
  }
  function clearConfetti() { for (var i = confettiNodes.length - 1; i >= 0; i--) dropParticle(i); }
  function confettiCount() { return confettiNodes.length; }

  function popTrigger(id) {
    var r = N[id]; if (!r) return;
    var base = r.rt.sx || 1;
    r.rt.sx = r.rt.sy = base * 0.6; applyRect(r);
    doScale(id, base, 0.45, "OutBack");
  }

  // ---------------------------------------------------------------- diagnostics
  function stats() { return { tweens: activeTweenCount(), confetti: confettiCount(), nodes: Object.keys(N).length, domNodes: document.querySelectorAll(".node").length }; }

  // ---------------------------------------------------------------- boot
  function assertNoDuplicateDomIds() {
    var seen = Object.create(null), dupes = [];
    var els = document.querySelectorAll("[id]");
    for (var i = 0; i < els.length; i++) { var idv = els[i].id; if (seen[idv]) dupes.push(idv); else seen[idv] = 1; }
    if (dupes.length) throw new Error("Duplicate DOM IDs detected: " + dupes.join(", "));
  }
  function boot(layout, config, opts) {
    opts = opts || {};
    DEV = !!opts.dev;
    CFG = config;
    stage = document.getElementById("stage");
    viewport = document.getElementById("viewport");
    // dev boot assertion: duplicate layout IDs must never ship
    var counts = Object.create(null), layoutDupes = [];
    (function w(n) { if (counts[n.id]) layoutDupes.push(n.id); else counts[n.id] = 1; (n.children || []).forEach(w); })(layout);
    if (layoutDupes.length) { var msg = "Duplicate layout node IDs: " + layoutDupes.join(", "); if (DEV) throw new Error(msg); else console.error("[RB] " + msg); }
    ROOT = build(layout, stage);
    relayout();
    if (DEV) { try { assertNoDuplicateDomIds(); } catch (e) { console.error(e); throw e; } }
    window.addEventListener("resize", relayout);
    window.addEventListener("orientationchange", relayout);
    // Re-assert the fit on every signal a mobile browser might give us instead of "resize": an
    // address bar collapsing, a rotate, a restored tab, a pinch. Without these the stage can keep a
    // stale scale and the game looks like it changed resolution part-way through.
    window.addEventListener("pageshow", relayout);
    document.addEventListener("visibilitychange", function () { if (!document.hidden) relayout(); });
    try { if (window.visualViewport && window.visualViewport.addEventListener) window.visualViewport.addEventListener("resize", relayout); } catch (e) {}
    try { if (window.ResizeObserver && viewport) new window.ResizeObserver(function () { relayout(); }).observe(viewport); } catch (e) {}
    rafId = requestAnimationFrame(tick);
    return ROOT;
  }

  return {
    boot: boot, relayout: relayout, setDev: setDev, get: get, el: el, root: function () { return ROOT; },
    setActive: setActive, isActive: isActive, isInteractableInTree: isInteractableInTree, isActuallyVisible: isActuallyVisible,
    setAnchoredPos: setAnchoredPos, getAnchoredPos: getAnchoredPos, setScale: setScale, setScaleXY: setScaleXY, getScale: getScale, setRotation: setRotation,
    setSizeDelta: setSizeDelta, setPose: setPose, getRect: getRect, childByName: childByName,
    setAlpha: setAlpha, getAlpha: getAlpha, setInteractable: setInteractable, setInputEnabled: setInputEnabled, onClick: onClick, setRaycast: setRaycast, ariaLabel: ariaLabel,
    setPressAmount: setPressAmount,
    onActivated: onActivated,
    reparent: reparent, reparentKeepWorld: reparentKeepWorld, ensureLayer: ensureLayer,
    setSiblingIndex: setSiblingIndex, getSiblingIndex: getSiblingIndex, setAsLastSibling: setAsLastSibling, setAsFirstSibling: setAsFirstSibling,
    doAnchorPos: doAnchorPos, doAnchorPosY: doAnchorPosY, doScale: doScale, doFade: doFade, kill: kill,
    doPathScreen: doPathScreen, centerLogical: centerLogical, setStageLocalPos: setStageLocalPos,
    clientToLogical: clientToLogical, worldRectLogical: worldRectLogical, worldCenterLogical: worldCenterLogical, currentScale: currentScale, stageRect: stageRect,
    preloadSprites: preloadSprites, preloadPaths: preloadPaths, artRectLogical: artRectLogical, spriteSize: function (src) { return spriteMeta[src] || null; },
    tween: tween, tweenP: tweenP, killTweensOf: killTweensOf, onUpdate: onUpdate, activeTweenCount: activeTweenCount,
    setText: setText, repaintSprite: repaintSprite, setSelfPaint: setSelfPaint,
    confettiBurst: confettiBurst, confettiCenter: confettiCenter, clearConfetti: clearConfetti, confettiCount: confettiCount, popTrigger: popTrigger,
    reducedMotion: function () { return reducedMotion; },
    logicalSize: function () { return { w: LOGICAL_W, h: LOGICAL_H }; },
    stats: stats, nodes: function () { return N; }, cfg: function () { return CFG; }
  };
})();
if (typeof module !== "undefined") module.exports = Engine;
