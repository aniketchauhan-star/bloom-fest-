/* Royal Bloom — controller ports with deterministic lifecycle.
 * Each level runs inside a LevelSession that owns its timers, waits, tweens, ghost
 * loops, narration and async tokens; disposing it aborts every stale piece of work.
 * Part 4 sorting is data-driven (lighter->basket, heavier->wagon by weight).
 */
var Controllers = (function () {
  "use strict";
  var E = Engine, I = Interaction, Audio = AudioManager, DM = Interaction.DropManager;

  // ---- config field accessors ----
  function nid(f) { return f && f.node ? f.node : null; }
  function num(f, d) { return typeof f === "number" ? f : (d == null ? 0 : d); }
  function str(f, d) { return typeof f === "string" ? f : (d == null ? "" : d); }
  function bool(f) { return f === true || f === 1; }
  function spr(f) { return f && f.sprite && f.sprite.path ? f.sprite.path : null; }
  function aud(f) { return f && f.audio ? f.audio : null; }
  function vec(f) { return f && typeof f.x === "number" ? { x: f.x, y: f.y } : { x: 0, y: 0 }; }

  // aria live region (announce instruction changes once, not per keystroke)
  var liveRegion = null;
  function announce(msg) {
    if (!liveRegion) {
      liveRegion = document.createElement("div");
      liveRegion.setAttribute("aria-live", "polite");
      liveRegion.setAttribute("aria-atomic", "true");
      liveRegion.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;";
      document.body.appendChild(liveRegion);
    }
    liveRegion.textContent = msg;
  }

  // ---- LevelSession: single lifecycle owner for a level ----
  function LevelSession() {
    var timers = new Set(), animIds = new Set(), cancelled = false;
    var s = {
      cancelled: function () { return cancelled; },
      setTimeout: function (fn, ms) { if (cancelled) return null; var id = setTimeout(function () { timers.delete(id); if (!cancelled) { try { fn(); } catch (e) { console.error(e); } } }, ms); timers.add(id); return id; },
      clearTimeout: function (id) { if (id != null) { clearTimeout(id); timers.delete(id); } },
      wait: function (sec) { return new Promise(function (res) { s.setTimeout(res, sec * 1000); }); }, // never resolves after cancel
      waitUntil: function (pred, poll) { poll = poll || 30; return new Promise(function (res) { (function c() { if (cancelled) return; if (pred()) return res(); s.setTimeout(c, poll); })(); }); },
      track: function (id) { if (id) animIds.add(id); return id; },  // register an animated node for teardown
      timerCount: function () { return timers.size; },
      dispose: function () {
        cancelled = true;
        timers.forEach(function (id) { clearTimeout(id); });
        timers.clear();
        animIds.forEach(function (id) { E.kill(id); });
        animIds.clear();
      }
    };
    return s;
  }

  // ---- BalanceScaleAnimator (replaces the wrong whole-root rotation) ----
  // Unity-authored absolute poses (shared across levels; balanced = per-level rest, captured).
  // Only the beam group ("plate") rotates; pan groups ("left"/"Right") translate; the
  // controller root and "Support base" never move. Unity logical anchored/rotation values.
  var LEFT_DOWN = { beamRot: 8, beamX: -27, beamY: -8.3, leftX: -385, leftY: -27, rightX: 372, rightY: 65, p1X: -237, p1Y: 41 };
  var RIGHT_DOWN = { beamRot: -8, beamX: -29.49, beamY: -2.48, beamW: 792.335, beamH: 839, leftX: -374, leftY: 65, rightX: 377, rightY: -27, p1X: -240.17, p1Y: 20, p2X: 234, p2Y: 27 };
  var DUR = { balanced: 0.35, leftDown: 0.75, rightDown: 0.6666667 };

  function BalanceScaleAnimator(cfg) {
    var rootId = cfg.rootId || nid(cfg.animator);
    var beam = E.childByName(rootId, "plate");
    var support = E.childByName(rootId, "Support base");
    var leftPan = E.childByName(rootId, "left");
    var rightPan = E.childByName(rootId, "Right");
    var p1 = beam ? E.childByName(beam, "plate 1") : null;
    var p2 = beam ? E.childByName(beam, "plate 2") : null;
    var resolved = !!(beam && support && leftPan && rightPan);
    var tag = (beam || rootId) + "#scale";
    var state = "balanced";

    // capture the per-level rest (balanced) pose once
    var rest = null, cur = null;
    if (resolved) {
      var bR = E.getRect(beam), lR = E.getRect(leftPan), rR = E.getRect(rightPan), p1R = p1 && E.getRect(p1), p2R = p2 && E.getRect(p2);
      rest = {
        beamRot: bR.rot, beamX: bR.ax, beamY: bR.ay, beamW: bR.sdX, beamH: bR.sdY,
        leftX: lR.ax, leftY: lR.ay, rightX: rR.ax, rightY: rR.ay,
        p1X: p1R ? p1R.ax : 0, p1Y: p1R ? p1R.ay : 0, p2X: p2R ? p2R.ax : 0, p2Y: p2R ? p2R.ay : 0
      };
      cur = Object.assign({}, rest);
      // The controller ROOT paints the full genie image, and its "Support base" child paints the
      // exact same image — a doubled genie (the blurry "duplicate hands/beam"). Make the root a
      // logical container only: disable its OWN paint but keep every child (support/beam/arms/pans).
      E.setSelfPaint(rootId, false);
      // The beam ("plate") node ALSO paints a full hands_bg image ON TOP of its arm-tray children
      // (plate 1 / plate 2) — a SECOND set of hands over the ones already drawn into the genie body:
      // the "duplicate hand". Level 1 authored this off (plate image enabled:false); every OTHER
      // level left it on. Disable the beam's OWN paint everywhere (keeping its tray children and its
      // rotation) so all levels match Level 1 and never show doubled hands.
      if (beam) E.setSelfPaint(beam, false);
      // Each pan carries TWO identical dish sprites ("Basket" + "Basket ") stacked on top of each
      // other — a duplicate. Keep the first, hide the extras. Safe: the pan still shows one dish,
      // and (unlike plate1/plate2, which are the arms) this removes only redundant art.
      [leftPan, rightPan].forEach(function (panId) {
        var pan = E.get(panId); if (!pan) return;
        var seenDish = false;
        pan.children.slice().forEach(function (c) {
          if (((c.node.name || "").trim()) === "Basket") { if (seenDish) E.setActive(c.id, false); seenDish = true; }
        });
      });
    }
    function targetFor(st) {
      if (st === "leftDown") return Object.assign({}, rest, LEFT_DOWN);
      if (st === "rightDown") return Object.assign({}, rest, RIGHT_DOWN);
      return Object.assign({}, rest);
    }
    function applyFlat(f) {
      E.setPose(beam, { rot: f.beamRot, ax: f.beamX, ay: f.beamY, sdX: f.beamW, sdY: f.beamH });
      E.setPose(leftPan, { ax: f.leftX, ay: f.leftY });
      E.setPose(rightPan, { ax: f.rightX, ay: f.rightY });
      if (p1) E.setPose(p1, { ax: f.p1X, ay: f.p1Y });
      if (p2) E.setPose(p2, { ax: f.p2X, ay: f.p2Y });
    }
    function playState(st, instant) {
      if (!resolved) return;
      state = st;
      var target = targetFor(st), from = Object.assign({}, cur);
      E.killTweensOf(tag);
      if (instant) { cur = target; applyFlat(cur); return; }
      var keys = Object.keys(target);
      E.tween({
        dur: DUR[st] || 0.35, ease: "Smoothstep", tag: tag,
        fn: function (e) { for (var i = 0; i < keys.length; i++) { var k = keys[i]; cur[k] = from[k] + (target[k] - from[k]) * e; } applyFlat(cur); },
        onComplete: function () { cur = Object.assign({}, target); applyFlat(cur); }
      });
    }
    function setWeights(l, r) {
      var d = l - r, ns;
      if (Math.abs(d) < 0.1) ns = "balanced"; else if (d > 0) ns = "leftDown"; else ns = "rightDown";
      if (ns !== state) playState(ns);
    }
    function reset(instant) { playState("balanced", instant !== false); }  // snaps by default
    function destroy() { E.killTweensOf(tag); }
    function pose() { return resolved ? Object.assign({}, cur) : null; }
    function nodes() { return { rootId: rootId, beam: beam, support: support, leftPan: leftPan, rightPan: rightPan, p1: p1, p2: p2 }; }
    return { setWeights: setWeights, updateScale: setWeights, playState: playState, reset: reset, destroy: destroy, resolved: resolved, pose: pose, nodes: nodes, state: function () { return state; } };
  }

  // ---- weight comparison (equal handled as a distinct result) ----
  function compareWeights(a, b) { if (a < b) return -1; if (a > b) return 1; return 0; }

  // ---- GameManager (per-level, Parts 1..4) ----
  function GameManager(f, scaleCtrl, opts) {
    opts = opts || {};
    var self = {};
    var host = opts.host;
    var baskets = opts.baskets || {};
    var typingSpeed = num(f.typingSpeed, 0.05);
    var S = null;                 // active LevelSession
    var typingToken = 0;

    var ID = {
      messageBar: nid(f.messageBar), instructionText: nid(f.instructionText),
      boxButton: nid(f.boxButton), boxImage: nid(f.boxImage), boxTop: nid(f.boxTop),
      boxInteractiveVisual: nid(f.boxInteractiveVisual),   // optional front-box-only group; falls back to boxImage
      item1: nid(f.item1), item2: nid(f.item2), highlight: nid(f.highlightImage), hintHand: nid(f.hintHand),
      part1: nid(f.part1Object), part2: nid(f.part2Object), part3: nid(f.part3Object), part4: nid(f.part4Object),
      item3: nid(f.item3), item4: nid(f.item4), lanternText: nid(f.lanternTextObject), featherText: nid(f.featherTextObject),
      lanternAnim: nid(f.lanternAnimator), featherAnim: nid(f.featherAnimator),
      nextP2: nid(f.nextButtonPart2), nextP3: nid(f.nextButtonPart3), nextP4: nid(f.nextButtonPart4),
      book: nid(f.bookDraggable), ball: nid(f.ballDraggable),
      bookImg: nid(f.bookImage), ballImg: nid(f.ballImage),
      bookAns: nid(f.bookAnswerButton), ballAns: nid(f.ballAnswerButton), tryAgain: nid(f.tryAgainButton),
      item5: nid(f.item5), item6: nid(f.item6),
      arrow1: nid(f.arrow1), arrow2: nid(f.arrow2),
      hint1: nid(f.hintHand1), hint2: nid(f.hintHand2),
      answerHint: nid(f.part3AnswerHint), nextHint: nid(f.nextButtonHintHand),
      ghostHand: nid(f.ghostHand), ghostItem: nid(f.ghostItem), ghostImg: nid(f.ghostItemImage),
      bookStart: nid(f.bookStartPoint), ballStart: nid(f.ballStartPoint),
      leftDrop: nid(f.leftDropPoint), rightDrop: nid(f.rightDropPoint), hintLayer: nid(f.hintLayer),
      basket: nid(f.basket), trolley: nid(f.trolley), base3: nid(f.base3), base4: nid(f.base4),
      part4ItemA: nid(f.bookDraggablePart4), part4ItemB: nid(f.ballDraggablePart4),
      part4ImgA: nid(f.bookImagePart4) || nid(f.bookImage), part4ImgB: nid(f.ballImagePart4) || nid(f.ballImage),
      wrong1: nid(f.wrongImagePart4_1), wrong2: nid(f.wrongImagePart4_2),
      basketDrop: nid(f.basketDropPoint), trolleyDrop: nid(f.trolleyDropPoint),
      part4Effect: nid(f.part4CompleteEffect), finalScreen: nid(f.finalScreen), finalEffect: nid(f.finalParticleEffect),
      p4hint1: nid(f.part4HintHand1), p4hint2: nid(f.part4HintHand2)
    };
    var SPR = {
      boxOpen: spr(f.boxOpenSprite),
      bookCorrect: spr(f.bookCorrectSprite), bookWrong: spr(f.bookWrongSprite),
      ballCorrect: spr(f.ballCorrectSprite), ballWrong: spr(f.ballWrongSprite),
      bookGhost3: spr(f.bookGhostSpritePart3), ballGhost3: spr(f.ballGhostSpritePart3),
      bookGhost4: spr(f.bookGhostSpritePart4), ballGhost4: spr(f.ballGhostSpritePart4)
    };
    var AUD = {};
    for (var k = 1; k <= 8; k++) AUD[k] = aud(f["instruction" + k + "Audio"]);
    var featherLantern = aud(f.featherLanternAudio), wrongSFX = aud(f.wrongSFX), boxOpenSFX = aud(f.boxOpenSFX), finalAudio = aud(f.finalScreenAudio);
    var INSTR = {}; for (var j = 1; j <= 8; j++) INSTR[j] = str(f["instruction" + j], "");
    var answerMode = num(f.answerMode, 0);
    var isFirstLevel = bool(f.isFirstLevel), isLastLevel = bool(f.isLastLevel);
    var moveUpDistance = num(f.moveUpDistance, 500);
    // (former arrow1/2 Left/RightCorrectPos config removed — the hint arrows are now positioned purely
    //  from each item's actual placed position, never from static coordinates.)
    var part3HintScale = num(f.part3HintScale, 0.7), part3HintOffset = vec(f.part3HintOffset);
    var dragHintDelay = num(f.dragHintDelay, 5), answerHintDelay = num(f.part3AnswerHintDelay, 5);
    var ghostMoveDuration = num(f.ghostMoveDuration, 1.2), ghostDelayPart4 = num(f.ghostDelayPart4, 6);
    var nextHintDelay = num(f.nextButtonHintDelay, 12), part4HintDelay = num(f.part4HintDelay, 12);
    var ghostAlpha = num(f.ghostAlpha, 0.5);

    // per-level zones (scoped drop registry) resolved from baskets config
    function levelZones(part4) {
      return Object.keys(baskets).filter(function (zid) {
        var b = baskets[zid]; return nid(b.gameManager) === host && !!b.isPart4 === part4;
      }).map(function (zid) { return { id: zid, spec: baskets[zid] }; });
    }

    // runtime state
    var item1Orig, item2Orig, basketDef, trolleyDef, part3BallLeft = false;
    var placed3 = {};             // itemId -> { side:'left'|'right' }
    var placed4 = {};             // itemId -> true
    var wrongTokens = {};         // itemId -> int (invalidate stale wrong-drop restores)
    var itemLocked4 = {};         // itemId -> true while wrong feedback playing
    var isPart4Ready = false, part3AnswerSelected = false;
    var ghostToken = { alive: false };
    var confettiToken = { cancelled: false };
    var answerHintTimer = null, part4HintTimer = null, nextHintTimer = null;
    var disposers = [];           // click-listener disposers for this level
    var locks = {};               // transition locks
    var boxOpened = false;

    function A(id, on) { if (id) E.setActive(id, on); }
    function reg(disposer) { if (disposer) disposers.push(disposer); }
    function weight(id) { var d = E.get(id); return d && d._itemData ? d._itemData.weight : 0; }

    // -------- typing + narration (begin together, single narration) --------
    function typeText(msg, clip) {
      return new Promise(function (resolve) {
        if (!ID.instructionText) return resolve();
        var myTok = ++typingToken;
        E.setText(ID.instructionText, "");
        Audio.stopNarration();
        var start = function (letterDelay) {
          if (S.cancelled() || myTok !== typingToken) return resolve();
          announce(msg);
          if (clip) Audio.startNarration(clip);
          var i = 0;
          (function step() {
            if (S.cancelled() || myTok !== typingToken) return resolve();
            E.setText(ID.instructionText, msg.slice(0, i + 1));
            i++;
            if (i >= msg.length) { E.setText(ID.instructionText, msg); return resolve(); }
            S.setTimeout(step, letterDelay * 1000);
          })();
        };
        if (clip) Audio.prepareNarration(clip).then(function (d) { start(d > 0 ? d / Math.max(msg.length, 1) : typingSpeed); });
        else start(typingSpeed);
      });
    }

    // ---------- PART 1 ----------
    self.start = function () {
      if (S) S.dispose();
      S = LevelSession();
      resetRuntimeState();
      // Warm each VO clip's metadata up front so typeText always knows the real duration and can spread
      // the letters across it (text finishes exactly when the voice does). Without this, a cold clip can
      // miss the 1.5s prepare window and the text falls back to a fixed speed -> out of sync with the VO.
      Object.keys(AUD).forEach(function (k) { if (AUD[k]) Audio.prepareNarration(AUD[k]); });
      if (scaleCtrl && scaleCtrl.reset) scaleCtrl.reset(true);   // snap scale to balanced (no drift on re-entry)
      // reset this level's draggables to their original slots + sprites (clean re-entry)
      [ID.book, ID.ball, ID.part4ItemA, ID.part4ItemB].forEach(function (did) { if (did) { I.resetToInitial(did); repaintItem(did, "item"); } });
      item1Orig = ID.item1 ? E.getAnchoredPos(ID.item1) : { x: 0, y: 0 };
      item2Orig = ID.item2 ? E.getAnchoredPos(ID.item2) : { x: 0, y: 0 };
      A(ID.item1, false); A(ID.item2, false); A(ID.highlight, false); A(ID.hintHand, false);
      A(ID.part2, false); A(ID.part3, false); A(ID.part4, false);
      A(ID.item3, false); A(ID.item4, false); A(ID.lanternText, false); A(ID.featherText, false);
      A(ID.nextP2, false); A(ID.nextP3, false); A(ID.tryAgain, false);
      A(ID.arrow1, false); A(ID.arrow2, false);
      basketDef = ID.basket ? E.getAnchoredPos(ID.basket) : { x: 0, y: 0 };
      trolleyDef = ID.trolley ? E.getAnchoredPos(ID.trolley) : { x: 0, y: 0 };
      A(ID.basket, false); A(ID.trolley, false);
      if (ID.nextP2) reg(E.onClick(ID.nextP2, guard("nextP3", startPart3), { key: "gm" }));
      if (ID.nextP3) reg(E.onClick(ID.nextP3, guard("nextP4", startPart4), { key: "gm" }));
      part1Flow();
    };
    function resetRuntimeState() {
      placed3 = {}; placed4 = {}; wrongTokens = {}; itemLocked4 = {};
      isPart4Ready = false; part3AnswerSelected = false; boxOpened = false;
      ghostToken = { alive: false }; confettiToken = { cancelled: false }; locks = {};
    }
    // transition lock wrapper: rapid double-clicks cannot start duplicate flows
    function guard(name, fn) {
      return function () { if (locks[name]) return; locks[name] = true; fn(); };
    }

    async function part1Flow() {
      await typeText(INSTR[1], AUD[1]);
      await S.wait(1);
      showHint();
    }
    function showHint() {
      A(ID.hintHand, true);
      if (ID.hintHand) { E.setScale(ID.hintHand, 0.7); var p = E.getAnchoredPos(ID.hintHand); S.track(ID.hintHand); E.doAnchorPosY(ID.hintHand, p.y - 15, 0.5, "Linear", { loops: -1, yoyo: true }); }
      if (ID.boxButton) reg(E.onClick(ID.boxButton, guard("box", openBox), { key: "gm" }));
    }
    function openBox() {
      if (boxOpened) return; boxOpened = true;
      // disable further taps WITHOUT the grayscale/opacity dim (setInteractable fades it) — the box must
      // stay fully opaque as it wobbles + opens.
      if (ID.boxButton) E.setInputEnabled(ID.boxButton, false);
      A(ID.messageBar, false);
      if (ID.hintHand) { E.kill(ID.hintHand); A(ID.hintHand, false); }
      if (boxOpenSFX) Audio.playSFX(boxOpenSFX);
      // Tap wobble: rock the CLOSED box as a RIGID unit — the front box AND its lid (cap) together —
      // so the cap shakes WITH the box. Both leaves rotate about ONE shared pivot (the front-box
      // centre) and are counter-translated each frame; rotating each about its own centre would tear
      // the lid off the body. We touch ONLY the box + lid leaves, NEVER the shared container (which
      // also holds the back box, glow highlight and hidden items — animating it shook the whole scene).
      var bodyId = ID.boxInteractiveVisual || ID.boxImage;
      var shakeIds = [bodyId, ID.boxTop].filter(function (id) { return id && E.get(id); });
      if (shakeIds.length) {
        var pc = E.centerLogical(bodyId);                        // shared pivot = front-box centre
        var rest = shakeIds.map(function (id) {
          E.kill(id); S.track(id);                               // killed first so rapid taps can't stack
          var r = E.get(id), c = E.centerLogical(id);
          return { id: id, apx: r.rt.ax, apy: r.rt.ay, rot0: r.rt.rot || 0, cx: c.x, cy: c.y };
        });
        // 0.3s < the 340ms reveal delay, so the wobble settles before the lid lifts off.
        E.tween({ dur: 0.3, ease: "Linear", tag: bodyId,
          fn: function (e) {
            var deg = Math.sin(e * Math.PI * 8) * 6 * (1 - e), a = deg * Math.PI / 180, cs = Math.cos(a), sn = Math.sin(a);
            for (var i = 0; i < rest.length; i++) {
              var n = rest[i], dx = n.cx - pc.x, dy = n.cy - pc.y;
              var nx = pc.x + dx * cs - dy * sn, ny = pc.y + dx * sn + dy * cs;
              E.setAnchoredPos(n.id, n.apx + (nx - n.cx), n.apy - (ny - n.cy)); E.setRotation(n.id, n.rot0 + deg);
            }
          },
          onComplete: function () { for (var i = 0; i < rest.length; i++) { var n = rest[i]; E.setAnchoredPos(n.id, n.apx, n.apy); E.setRotation(n.id, n.rot0); } } });
      }
      S.setTimeout(openBoxReveal, 340);
    }
    function openBoxReveal() {
      if (S.cancelled()) return;
      // sparkles emerge from the box opening (the lid), flying upward — "from inside the box"
      var burstFrom = ID.boxTop || ID.boxImage;
      if (burstFrom) { confettiToken = { cancelled: false }; E.confettiBurst(burstFrom, confettiToken); }
      if (ID.boxImage && SPR.boxOpen) E.repaintSprite(E.get(ID.boxImage), SPR.boxOpen);
      if (ID.boxTop) { var p = E.getAnchoredPos(ID.boxTop); S.track(ID.boxTop); E.doAnchorPosY(ID.boxTop, p.y + moveUpDistance, 1, "OutCubic", { onComplete: function () { A(ID.boxTop, false); afterBoxOpen(); } }); }
      else afterBoxOpen();
    }
    async function afterBoxOpen() {
      await S.wait(0.5); popItems();
      await S.wait(0.5); popHighlight();
      await S.wait(2); startPart2();
    }
    function popItems() {
      A(ID.item1, true); A(ID.item2, true);
      if (ID.item1) { S.track(ID.item1); E.setAnchoredPos(ID.item1, item1Orig.x, item1Orig.y - 100); E.setScale(ID.item1, 0); E.doAnchorPos(ID.item1, item1Orig.x, item1Orig.y, 0.5, "OutBack"); E.doScale(ID.item1, 1, 0.5, "OutBack"); }
      if (ID.item2) { S.track(ID.item2); E.setAnchoredPos(ID.item2, item2Orig.x, item2Orig.y - 100); E.setScale(ID.item2, 0); E.doAnchorPos(ID.item2, item2Orig.x, item2Orig.y, 0.5, "OutBack"); E.doScale(ID.item2, 1, 0.5, "OutBack"); }
    }
    function popHighlight() {
      if (!ID.highlight) return;
      E.kill(ID.highlight); A(ID.highlight, true); S.track(ID.highlight);
      E.setScale(ID.highlight, 0.9); E.setAlpha(ID.highlight, 0);
      E.doFade(ID.highlight, 1, 0.5, "InOutSine");
      E.doScale(ID.highlight, 1, 0.5, "InOutSine", { onComplete: function () { E.doScale(ID.highlight, 1.03, 1.2, "InOutSine", { loops: -1, yoyo: true }); } });
    }

    // ---------- PART 2 ----------
    async function startPart2() {
      A(ID.part1, false); A(ID.part2, true);
      await S.wait(0.1);
      A(ID.item3, true); A(ID.item4, true);
      if (ID.item3) { S.track(ID.item3); E.setScale(ID.item3, 0); E.doScale(ID.item3, 1, 0.5, "OutBack"); }
      if (ID.item4) { S.track(ID.item4); E.setScale(ID.item4, 0); E.doScale(ID.item4, 1, 0.5, "OutBack"); }
      if (featherLantern) Audio.startNarration(featherLantern);
      await S.wait(0.6);
      openScroll(ID.lanternText);      // first name unfurls as the VO says it
      await S.wait(1.8);
      openScroll(ID.featherText);      // second name unfurls as the VO names it
      await S.wait(1.8);
      A(ID.nextP2, true); showNextButtonHint(ID.nextP2);
    }
    // Unfurl a name scroll smoothly. The parchment, rollers and item-name text are authored
    // inactive, so the old popTrigger (root scale only) left the scroll closed with no name.
    // We also hide the root's OWN closed-scroll sprite so it can't double behind the open
    // composition (fixes the duplicate-scroll artifact), then animate: parchment width 0->full,
    // rollers slide out from center to their authored ends, and the centered name fades in last.
    function openScroll(rootId, dur) {
      if (!rootId) return;
      dur = dur || 0.7;
      A(rootId, true);
      E.setSelfPaint(rootId, false);                 // hide the closed-scroll sprite (no duplicate)
      var txt = E.childByName(rootId, "Text (TMP)");
      ["image 01", "left", "right"].forEach(function (nm) { var c = E.childByName(rootId, nm); if (c) A(c, true); });
      if (txt) A(txt, false);
      // UNFURL like a real scroll: start as a thin, tall rolled-up strip and unroll WIDE (scaleX grows
      // from a sliver to full while the height barely settles). Scaling the whole root keeps every piece
      // (parchment, both rollers, name) locked together — never detached — and .node scales from its
      // centre so it opens outward symmetrically. Name pops + sparkles once it's open.
      S.track(rootId);
      E.setScaleXY(rootId, 0.06, 0.9);
      E.tween({ dur: dur, ease: "OutBack", tag: rootId,
        fn: function (e) { E.setScaleXY(rootId, 0.06 + 0.94 * e, 0.9 + 0.1 * e); },
        onComplete: function () {
          if (S.cancelled()) return;
          E.setScaleXY(rootId, 1, 1);
          if (txt) { A(txt, true); S.track(txt); E.setAlpha(txt, 0); E.setScale(txt, 0.55); E.doScale(txt, 1, 0.35, "OutBack"); E.doFade(txt, 1, 0.3, "OutQuad"); }
          confettiToken = { cancelled: false }; E.confettiBurst(rootId, confettiToken);   // golden sparkle
        } });
    }

    // ---------- PART 3 ----------
    function startPart3() {
      if (scaleCtrl) scaleCtrl.reset();
      A(ID.nextP2, false); stopNextButtonHint(); Audio.stopNarration();
      A(ID.part3, true);
      if (ID.part3) {
        var p3 = E.getAnchoredPos(ID.part3); S.track(ID.part3);
        E.setAnchoredPos(ID.part3, p3.x, p3.y - 500); E.setAlpha(ID.part3, 0); E.setScale(ID.part3, 0.95);
        E.doAnchorPos(ID.part3, p3.x, p3.y, 1, "OutCubic", { delay: 1.1 });
        E.doFade(ID.part3, 1, 1, "OutQuad", { delay: 1.1 });
        E.doScale(ID.part3, 1, 1, "OutBack", { delay: 1.1, onComplete: function () { if (!S.cancelled()) part3Flow(); } });
      } else part3Flow();
      if (ID.part2) { var p2 = E.getAnchoredPos(ID.part2); S.track(ID.part2); E.doAnchorPos(ID.part2, p2.x, p2.y - 350, 1, "InOutSine"); E.doFade(ID.part2, 0, 1, "OutQuad", { onComplete: function () { A(ID.part2, false); } }); }
    }

    function part3DropHandler(itemId) {
      return function (pointer) {
        if (placed3[itemId]) return;
        var zone = DM.findDrop(itemId, pointer.x, pointer.y, { exclude: function (zid) { return zoneOccupiedBy(zid, itemId); } });
        if (!zone) { returnItem3(itemId); return; }
        placeOnPan(itemId, zone);
      };
    }
    function zoneOccupiedBy(zoneId, exceptItem) {
      for (var it in placed3) { if (it !== exceptItem && placed3[it].zoneId === zoneId) return true; }
      return false;
    }
    function returnItem3(itemId) { I.restoreOrigin(itemId); repaintItem(itemId, "item"); }
    function placeOnPan(itemId, zone) {
      placed3[itemId] = { side: zone.spec.isLeftBasket ? "left" : "right", zoneId: zone.id };
      I.setLocked(itemId, true); I.setEnabled(itemId, false);
      // Nestle the item INTO the pan's dish. The drop zone is a CHILD of the dish, so an item placed
      // there sits ON TOP of the bowl. Instead parent the item to the PAN as its FIRST child — BEHIND
      // the dish sprite — and snap it to the zone's spot, so the bowl's front laps over the item's
      // lower edge and it reads as seated INSIDE the pan. Full size (scale 1) as before; it rides the
      // pan when the beam tilts because it is now a child of the pan.
      E.setScale(itemId, 1); E.setRotation(itemId, 0);
      var zoneRec = E.get(zone.id), dish = zoneRec && zoneRec.parent, pan = dish && dish.parent;
      if (pan) {
        var sc = E.centerLogical(zone.id);
        E.reparent(itemId, pan.id);
        // seat the item a touch HIGHER than the raw zone centre so its lower art tucks fully inside the
        // bowl instead of poking under the front rim (the drop spot sits low in the dish).
        E.setStageLocalPos(E.get(itemId), sc.x, sc.y - 14);
        E.setAsFirstSibling(itemId);   // render BEHIND the dish -> tucked inside the bowl
        // The dish (bowl) now sits IN FRONT of the nestled item. In the answer phase the item is the
        // tap target ("Tap the heavier item"), so make the dish + its drop-marker children NON-
        // interactive — taps pass THROUGH the bowl to the item behind it. Drop detection is geometric
        // (isInteractableInTree ignores pointer-events), so the other pan can still receive its item.
        (function off(id) { E.setRaycast(id, false); var r = E.get(id); if (r) (r.children || []).forEach(function (c) { off(c.id); }); })(dish.id);
      } else {
        E.reparent(itemId, zone.id); E.setAnchoredPos(itemId, 0, 0); E.setAsLastSibling(itemId);
      }
      repaintItem(itemId, "dropped");
    }
    function repaintItem(itemId, which) {
      var r = E.get(itemId); if (!r || !r._itemData) return;
      var d = r._itemData, imgId = r._imgId || itemId, sp = null;
      if (which === "dropped") sp = d.droppedSprite && d.droppedSprite.path;
      else sp = d.itemSprite && d.itemSprite.path;
      if (sp) E.repaintSprite(E.get(imgId), sp, { preserveAspect: true });   // never distort on swap
    }

    async function part3Flow() {
      DM.setActiveZones(levelZones(false));   // scope drops to this level's two pans
      I.setEnabled(ID.ball, false); I.setEnabled(ID.book, false);
      A(ID.messageBar, true);
      await typeText(INSTR[2], AUD[2]); await S.wait(0.3);
      await typeText(INSTR[3], AUD[3]);
      // enable ball (item on the right) only
      E.get(ID.ball)._dropHandler = part3DropHandler(ID.ball);
      E.get(ID.ball)._interruptHandler = function () { returnItem3(ID.ball); };
      I.setEnabled(ID.ball, true); I.setEnabled(ID.book, false);
      startGhost(ID.ballStart, ID.rightDrop, false);
      onDragStarted(ID.ball, stopGhost);
      var rightHint = scheduleHint(ID.hint1, function () { return !!placed3[ID.ball]; });
      await S.waitUntil(function () { return !!placed3[ID.ball]; });
      stopGhost(); updateScaleWeights(); clearHint(rightHint, ID.hint1);
      I.setEnabled(ID.ball, false);
      await typeText(INSTR[4], AUD[4]);
      // enable book (item on the left) only
      E.get(ID.book)._dropHandler = part3DropHandler(ID.book);
      E.get(ID.book)._interruptHandler = function () { returnItem3(ID.book); };
      I.setEnabled(ID.book, true); I.setEnabled(ID.ball, false);
      var targetDrop = isLeftOccupied() ? ID.rightDrop : ID.leftDrop;
      startGhost(ID.bookStart, targetDrop, true);
      onDragStarted(ID.book, stopGhost);
      var leftHint = scheduleHint(ID.hint2, function () { return !!placed3[ID.book]; });
      await S.waitUntil(function () { return !!placed3[ID.book]; });
      stopGhost(); updateScaleWeights(); clearHint(leftHint, ID.hint2);
      I.setEnabled(ID.book, false);
      await S.wait(1);
      A(ID.item5, false); A(ID.item6, false);
      A(ID.messageBar, false); await S.wait(1);
      A(ID.messageBar, true);
      await typeText(INSTR[5], AUD[5]);
      part3AnswerSelected = false;
      enableAnswerButtons();
      answerHintTimer = scheduleAnswerHint();
    }
    function isLeftOccupied() { for (var it in placed3) if (placed3[it].side === "left") return true; return false; }
    function updateScaleWeights() {
      var l = 0, r = 0;
      for (var it in placed3) { if (placed3[it].side === "left") l += weight(it); else r += weight(it); }
      if (scaleCtrl) scaleCtrl.updateScale(l, r);
    }
    // book is the correct answer when it satisfies the requested lighter/heavier mode
    function correctIsBook() {
      var cmp = compareWeights(weight(ID.book), weight(ID.ball)); // -1 book lighter, 1 book heavier, 0 equal
      if (cmp === 0) return null;                                  // equal: no valid answer
      var bookLighter = cmp < 0;
      return answerMode === 0 ? bookLighter : !bookLighter;        // mode 0 = lighter, 1 = heavier
    }
    function enableAnswerButtons() {
      if (ID.bookAns) { E.setInteractable(ID.bookAns, true); reg(E.onClick(ID.bookAns, guardOnce("ans", function () { onAnswer(true); }), { key: "ans" })); }
      if (ID.ballAns) { E.setInteractable(ID.ballAns, true); reg(E.onClick(ID.ballAns, guardOnce("ans", function () { onAnswer(false); }), { key: "ans" })); }
    }
    // guardOnce: exactly one answer transition per prompt, released only on retry
    function guardOnce(name, fn) { return function () { if (locks[name]) return; locks[name] = true; fn(); }; }
    function scheduleAnswerHint() {
      return S.setTimeout(function () {
        if (part3AnswerSelected) return;
        var cb = correctIsBook();
        showHintOnButton(cb == null ? ID.bookAns : (cb ? ID.bookAns : ID.ballAns));
      }, answerHintDelay * 1000);
    }
    function showHintOnButton(btnId) {
      if (!ID.answerHint || !btnId) return;
      A(ID.answerHint, true); E.setAsLastSibling(ID.answerHint); S.track(ID.answerHint);
      var bc = E.centerLogical(btnId);
      E.setStageLocalPos(E.get(ID.answerHint), bc.x + part3HintOffset.x, bc.y - part3HintOffset.y);
      E.setScale(ID.answerHint, part3HintScale);
      E.setAlpha(ID.answerHint, 0.9); E.doFade(ID.answerHint, 1, 0.8, "InOutSine", { loops: -1, yoyo: true });
    }
    function stopAnswerHint() { if (answerHintTimer) { S.clearTimeout(answerHintTimer); answerHintTimer = null; } if (ID.answerHint) { E.kill(ID.answerHint); A(ID.answerHint, false); } }
    function onAnswer(selectedBook) {
      part3AnswerSelected = true; stopAnswerHint();
      // lock input WITHOUT the visual fade/grayscale — selecting an answer must not dim or
      // appear to shrink either item (the item node is also the answer button + visible image)
      if (ID.bookAns) E.setInputEnabled(ID.bookAns, false); if (ID.ballAns) E.setInputEnabled(ID.ballAns, false);
      var cb = correctIsBook();
      if (cb != null && selectedBook === cb) correctAnswerFlow(selectedBook); else wrongAnswerFlow(selectedBook);
    }
    // Tap feedback on the chosen item: a small SOLID glow (tight bright rim, GREEN=correct /
    // RED=wrong — no pulse, no smoky blur) plus a little "pop" (a quick bounce that settles back to
    // the SAME resting size, so nothing is permanently resized). The item's sprite is never changed.
    function showGlow(imgId, correct) {
      var r = imgId && E.get(imgId); if (!r) return;
      var c = correct ? "50,200,80" : "230,45,45";   // green (correct) / red (wrong)
      r.el.style.filter = "drop-shadow(0 0 3px rgba(" + c + ",1)) drop-shadow(0 0 6px rgba(" + c + ",1)) drop-shadow(0 0 10px rgba(" + c + ",0.85))";
      if (r._preGlowScale == null) r._preGlowScale = r.rt.sx;
      var base = r._preGlowScale;
      E.kill(imgId); E.setScale(imgId, base);
      E.doScale(imgId, base * 1.1, 0.12, "OutQuad", { onComplete: function () { E.doScale(imgId, base, 0.16, "OutBack"); } });
    }
    function clearGlow(imgId) {
      var r = imgId && E.get(imgId); if (!r) return;
      r.el.style.filter = "";
      E.kill(imgId);
      if (r._preGlowScale != null) { E.setScale(imgId, r._preGlowScale); r._preGlowScale = null; }
    }
    // dim the OTHER (non-chosen) item a little while the chosen one glows; restore on retry/next
    function dimItem(imgId, dim) { var r = imgId && E.get(imgId); if (r) E.setAlpha(imgId, dim ? 0.5 : 1); }
    async function wrongAnswerFlow(selectedBook) {
      if (selectedBook) { showGlow(ID.bookImg, false); dimItem(ID.ballImg, true); }
      else { showGlow(ID.ballImg, false); dimItem(ID.bookImg, true); }
      await typeText(INSTR[6], AUD[6]);
      await S.wait(1);
      A(ID.tryAgain, true); if (ID.tryAgain) reg(E.onClick(ID.tryAgain, guard2("tryagain", onTryAgain), { key: "tryagain" }));
    }
    // guard2: lock resets when the guarded flow explicitly releases it
    function guard2(name, fn) { return function () { if (locks[name]) return; locks[name] = true; fn(function () { locks[name] = false; }); }; }
    function onTryAgain(release) {
      A(ID.tryAgain, false);
      clearGlow(ID.bookImg); clearGlow(ID.ballImg);                   // remove glow + settle the pop
      dimItem(ID.bookImg, false); dimItem(ID.ballImg, false);         // restore the dimmed item to full
      repaintItem(ID.book, "dropped"); repaintItem(ID.ball, "dropped");
      locks.ans = false;              // allow a fresh answer
      replayInstruction5(release);
    }
    async function replayInstruction5(release) {
      A(ID.messageBar, true);
      await typeText(INSTR[5], AUD[5]);
      part3AnswerSelected = false;
      enableAnswerButtons();
      answerHintTimer = scheduleAnswerHint();
      if (release) release();          // ready for the next Try Again cycle
    }
    // Show the Heavier(↓)/Lighter(↑) hint arrows over the EXACT arrangement the child built. The only
    // source of truth for WHERE each arrow goes is the item's real placed position (placed3 + the
    // item node's live centre) — never names, answerMode, or static coordinates, and never a second
    // mirrored layout. Weight only decides WHICH item is heavier (the label). Old arrows are cleared
    // first so only the current arrangement is ever shown. Purely per-item => works on every level.
    function placeHintArrow(arrowId, itemId) {
      if (!arrowId || !itemId || !E.get(arrowId) || !E.get(itemId)) return;
      var ic = E.centerLogical(itemId);                 // the item's ACTUAL placed position
      var outward = ic.x < 960 ? -1 : 1;                // push the label to the pan's outer side (stage centre = 960)
      E.setStageLocalPos(E.get(arrowId), ic.x + outward * 245, ic.y - 15);
      A(arrowId, true); S.track(arrowId); E.setScale(arrowId, 0); E.doScale(arrowId, 1, 0.5, "OutBack");
    }
    function showMeasureHint() {
      [ID.arrow1, ID.arrow2].forEach(function (id) { if (id) { E.kill(id); A(id, false); } });   // clear old hint nodes
      var heavier = weight(ID.ball) >= weight(ID.book) ? ID.ball : ID.book;   // weight -> label only
      var lighter = heavier === ID.ball ? ID.book : ID.ball;
      placeHintArrow(ID.arrow1, heavier);   // arrow1 = Heavier (↓) -> over the heavier item, wherever it sits
      placeHintArrow(ID.arrow2, lighter);   // arrow2 = Lighter (↑) -> over the lighter item, wherever it sits
    }
    async function correctAnswerFlow(selectedBook) {
      if (selectedBook) { showGlow(ID.bookImg, true); dimItem(ID.ballImg, true); }
      else { showGlow(ID.ballImg, true); dimItem(ID.bookImg, true); }
      await typeText(INSTR[7], AUD[7]);
      part3BallLeft = !!(placed3[ID.ball] && placed3[ID.ball].side === "left");
      showMeasureHint();          // Heavier↓ / Lighter↑ arrows over the pans the child actually built
      await S.wait(1);
      A(ID.nextP3, true); showNextButtonHint(ID.nextP3);
    }

    // ---------- PART 4 ----------
    function startPart4() { A(ID.nextP3, false); stopNextButtonHint(); DM.clear(); startPart4Delay(); }
    async function startPart4Delay() { await S.wait(1); if (scaleCtrl) scaleCtrl.reset(); part4Flow(); }
    async function part4Flow() {
      A(ID.part3, false); A(ID.part4, true);
      // Part 4 drop targets are item-named nodes (e.g. "Lantern", "Feather") whose sprite would
      // otherwise look like an item already dropped in the wagon/basket. Reproduce Unity's
      // BasketDropZone.Start() intent: make each target an INVISIBLE hit area. The real item is
      // reparented into the target on a correct drop and stays visible (self-paint only).
      levelZones(true).forEach(function (z) {
        var marker = z.spec.basketImage ? nid(z.spec.basketImage) : z.id;
        if (marker) E.setSelfPaint(marker, false);
      });
      await S.wait(0.3);
      A(ID.base3, true); A(ID.base4, true);
      if (ID.base3) { S.track(ID.base3); E.setScale(ID.base3, 0); E.doScale(ID.base3, 1, 0.5, "OutBack"); }
      if (ID.base4) { S.track(ID.base4); E.setScale(ID.base4, 0); E.doScale(ID.base4, 1, 0.5, "OutBack"); }
      await S.wait(0.5);
      A(ID.messageBar, true);
      var typing = typeText(INSTR[8], AUD[8]);
      await S.wait(0.5);
      if (ID.basket) { E.setAnchoredPos(ID.basket, basketDef.x, basketDef.y + 1500); A(ID.basket, true); }
      if (ID.trolley) { S.track(ID.trolley); E.setAnchoredPos(ID.trolley, trolleyDef.x + 1500, trolleyDef.y); A(ID.trolley, true); E.doAnchorPos(ID.trolley, trolleyDef.x, trolleyDef.y, 1, "OutCubic"); }
      await S.wait(2);
      if (ID.basket) await E.doAnchorPos(ID.basket, basketDef.x, basketDef.y, 1, "OutCubic");
      startBasketFloating();
      await typing; await S.wait(2);
      enablePart4Drag(); isPart4Ready = true;
      part4HintTimer = schedulePart4Hint();
    }
    function startBasketFloating() { if (!ID.basket) return; E.kill(ID.basket); S.track(ID.basket); var p = E.getAnchoredPos(ID.basket); E.doAnchorPosY(ID.basket, p.y + 12, 1.2, "InOutSine", { loops: -1, yoyo: true }); }
    function enablePart4Drag() {
      DM.setActiveZones(levelZones(true));   // scope drops to this level's basket + wagon
      placed4 = {}; itemLocked4 = {};
      [ID.part4ItemA, ID.part4ItemB].forEach(function (itemId) {
        var r = E.get(itemId); if (!r) return;
        r._dropHandler = part4DropHandler(itemId);
        r._interruptHandler = function () { I.restoreOrigin(itemId); repaintItem(itemId, "item"); };
        I.setEnabled(itemId, true); I.setLocked(itemId, false);
        // item stays full-size (card-size) while dragging; it only shrinks to fit on a correct drop
        onDragStarted(itemId, function () { stopPart4Hint(); stopGhost(); });
      });
      startSmartGhostP4();
    }
    function otherP4(itemId) { return itemId === ID.part4ItemA ? ID.part4ItemB : ID.part4ItemA; }
    // data-driven: lighter item belongs in the basket zone, heavier in the wagon zone
    function part4Correct(itemId, zone) {
      var cmp = compareWeights(weight(itemId), weight(otherP4(itemId)));
      if (cmp === 0) return false;             // equal weights: no valid sort
      var isLighter = cmp < 0;
      return zone.spec.isBasket ? isLighter : !isLighter;
    }
    function part4DropHandler(itemId) {
      return function (pointer) {
        if (!isPart4Ready || placed4[itemId] || itemLocked4[itemId]) { I.restoreOrigin(itemId); return; }
        var zone = DM.findDrop(itemId, pointer.x, pointer.y);
        if (!zone) { I.restoreOrigin(itemId); repaintItem(itemId, "item"); return; }
        if (part4Correct(itemId, zone)) {
          placed4[itemId] = true;
          I.setLocked(itemId, true); I.setEnabled(itemId, false);
          // Nestle the item INSIDE the basket/wagon: place it in the SAME layer as its ghost marker
          // (the BACK basket/wagon layer), so the FRONT art draws over its lower edge and it looks
          // tucked in — not pasted on the front. Size it to the ghost's box and snap to the ghost's
          // centre (which peeks above the rim), so it lands exactly where the marker shows — visible,
          // never hidden. It's the last child of the back layer (above the ghost + decorations) but
          // still behind the front art (a later sibling of the back layer). Then hide the ghost.
          var slot = zone.spec.isBasket ? ID.basketDrop : ID.trolleyDrop;
          var slotRec = slot && E.get(slot);
          var placeLayer = (slotRec && slotRec.parent) ? slotRec.parent.id : (zone.spec.isBasket ? ID.basket : ID.trolley);
          E.reparent(itemId, (E.get(placeLayer) ? placeLayer : zone.id));
          E.setRotation(itemId, 0); E.setAsLastSibling(itemId);
          if (slotRec) {
            var sr = E.getRect(slot), ir = E.getRect(itemId);
            var fit = (sr && ir && ir.sdX > 0 && ir.sdY > 0) ? Math.min(sr.sdX / ir.sdX, sr.sdY / ir.sdY) : 0.82;
            E.setScale(itemId, (isFinite(fit) && fit > 0) ? fit : 0.82);   // match the ghost marker's box
            var sc = E.centerLogical(slot); E.setStageLocalPos(E.get(itemId), sc.x, sc.y);
            E.setSelfPaint(slot, false);                                    // hide the ghost now the real item covers it
          } else { E.setScale(itemId, 0.82); E.setAnchoredPos(itemId, 0, 0); }
          repaintItem(itemId, "dropped");
          stopPart4Hint();
          confettiToken = { cancelled: false }; E.confettiBurst(zone.id, confettiToken);   // golden sparkle from inside the container
          checkPart4Completion();
          if (!allPlaced4()) { part4HintTimer = schedulePart4Hint(); startSmartGhostP4(); }
        } else {
          part4WrongFlow(itemId);
        }
      };
    }
    function allPlaced4() { return !!(placed4[ID.part4ItemA] && placed4[ID.part4ItemB]); }
    // LIVE weighing reminder for a wrong Part-4 drop. Instead of a pre-rendered picture (which was
    // fixed to one arrangement and could contradict what the child built), re-show the ACTUAL Part-3
    // weighing — genie + the same items on the same pans — tilted to the child's saved placement,
    // with the Heavier/Lighter arrows over the real items. So the hint ALWAYS matches "the previous
    // stage" for any placement, and only one arrangement is ever shown.
    function part3TiltState() {
      var l = 0, r = 0;
      for (var it in placed3) { if (placed3[it].side === "left") l += weight(it); else r += weight(it); }
      return Math.abs(l - r) < 0.1 ? "balanced" : (l > r ? "leftDown" : "rightDown");
    }
    // a BLURRED copy of the scene sits behind the hint card (inserted as the level root's first child,
    // so it paints behind Part 3). filter:blur can't live on the root itself — it would blur the card
    // too — hence a dedicated element. Kept (hidden) between hints and torn down with the level.
    var hintBackdrop = null;
    function showHintBackdrop(rootEl, on) {
      if (on) {
        if (!hintBackdrop) { hintBackdrop = document.createElement("div"); hintBackdrop.className = "rb-hint-backdrop"; }
        if (rootEl && hintBackdrop.parentElement !== rootEl) rootEl.insertBefore(hintBackdrop, rootEl.firstChild);
        hintBackdrop.style.display = "block";
      } else if (hintBackdrop) { hintBackdrop.style.display = "none"; }
    }
    function showWeighReminder(on) {
      var p3r = ID.part3 && E.get(ID.part3);
      var rootEl = p3r && p3r.parent && p3r.parent.el;   // the level root — holds the blurred backdrop
      if (on) {
        A(ID.part4, false); A(ID.messageBar, false);          // hide the sorting scene + its instruction
        if (ID.base3) A(ID.base3, false); if (ID.base4) A(ID.base4, false);
        A(ID.part3, true);                                     // bring back the live weighing
        // the hint is a neutral reminder: clear the leftover answer glow + un-dim so BOTH items read
        // equally (no green glow on one, no faded other) — the arrows alone tell heavier vs lighter.
        [ID.bookImg, ID.ballImg].forEach(function (id) { clearGlow(id); dimItem(id, false); });
        if (scaleCtrl && scaleCtrl.playState) scaleCtrl.playState(part3TiltState(), true);  // instant tilt = child's placement
        showMeasureHint();                                     // Heavier(↓)/Lighter(↑) over the real items
        // show it as a gamified CARD over a BLURRED copy of the scene (not full-screen, not a flat dim).
        if (rootEl) showHintBackdrop(rootEl, true);
        if (p3r) { p3r.el.classList.add("rb-hint-card"); E.kill(ID.part3); E.setScale(ID.part3, 0.02); E.doScale(ID.part3, 0.74, 0.42, "OutBack"); }
      } else {
        [ID.arrow1, ID.arrow2].forEach(function (id) { if (id) { E.kill(id); A(id, false); } });
        if (p3r) { E.kill(ID.part3); E.setScale(ID.part3, 1); p3r.el.classList.remove("rb-hint-card"); }
        showHintBackdrop(rootEl, false);
        if (scaleCtrl && scaleCtrl.reset) scaleCtrl.reset();
        A(ID.part3, false); A(ID.part4, true); A(ID.messageBar, true);
        if (ID.base3) A(ID.base3, true); if (ID.base4) A(ID.base4, true);
      }
    }
    async function part4WrongFlow(itemId) {
      // lock this item and use a token so a later correct placement is never undone
      itemLocked4[itemId] = true;
      var myTok = (wrongTokens[itemId] = (wrongTokens[itemId] || 0) + 1);
      // Return the item to its home slot first, then show the live weighing reminder.
      I.restoreOrigin(itemId); repaintItem(itemId, "item");
      await S.wait(0.3);
      if (S.cancelled() || myTok !== wrongTokens[itemId]) return;
      showWeighReminder(true);
      if (wrongSFX) Audio.playSFX(wrongSFX);
      await S.wait(3.2);
      showWeighReminder(false);
      if (S.cancelled() || myTok !== wrongTokens[itemId]) return;
      if (!placed4[itemId]) { I.restoreOrigin(itemId); repaintItem(itemId, "item"); }
      itemLocked4[itemId] = false;
      startSmartGhostP4();
    }
    function checkPart4Completion() {
      if (allPlaced4()) {
        stopPart4Hint(); A(ID.messageBar, false); A(ID.base3, false); A(ID.base4, false);
        // celebratory golden bursts from the basket + wagon themselves (not a corner effect)
        levelZones(true).forEach(function (z) { confettiToken = { cancelled: false }; E.confettiBurst(z.id, confettiToken); });
        part4CompleteFlow();
      }
    }
    async function part4CompleteFlow() {
      await S.wait(2);
      if (isLastLevel) showFinalScreen();
      else { A(ID.nextP4, true); showNextButtonHint(ID.nextP4); }
    }
    async function showFinalScreen() {
      await S.wait(1);
      if (ID.finalScreen) A(ID.finalScreen, true);
      if (ID.finalEffect) {
        A(ID.finalEffect, true);
        confettiToken = { cancelled: false };
        // Golden stars burst ACROSS the scene (over the path), not from the bottom-left corner where
        // the effect node is authored. Re-anchor the blast to a few spread points around centre so it
        // celebrates over the whole final picture. confettiBurst reads the node's position each call.
        [{ x: 620, y: 470 }, { x: 960, y: 380 }, { x: 1300, y: 470 }].forEach(function (pt) {
          E.setStageLocalPos(E.get(ID.finalEffect), pt.x, pt.y);
          E.confettiBurst(ID.finalEffect, confettiToken);
        });
      }
      if (finalAudio) Audio.startNarration(finalAudio);
    }
    function startSmartGhostP4() {
      stopGhost();
      if (allPlaced4()) return;
      if (!placed4[ID.part4ItemA]) startGhostP4(ID.part4ItemA);
      else if (!placed4[ID.part4ItemB]) startGhostP4(ID.part4ItemB);
    }
    function startGhostP4(itemId) {
      var cmp = compareWeights(weight(itemId), weight(otherP4(itemId)));
      var toBasket = cmp < 0;                       // lighter -> basket
      var isItemA = itemId === ID.part4ItemA;
      var startId = isItemA ? (nid(f.bookStartPointPart4)) : (nid(f.ballStartPointPart4));
      var endId = toBasket ? ID.basketDrop : ID.trolleyDrop;
      // ghost SPRITE must match the item being demoed (A vs B), while the DESTINATION follows weight
      // (lighter->basket). Previously the sprite was keyed on toBasket, which only lined up while item
      // A was always the lighter one — item-based keeps the demoed picture correct regardless.
      startGhost(startId || itemId, endId, isItemA, true);
    }
    function schedulePart4Hint() {
      return S.setTimeout(function () {
        part4HintTimer = null;
        if (allPlaced4()) return;
        hideHint(ID.p4hint1); hideHint(ID.p4hint2);
        if (!placed4[ID.part4ItemA]) showFadeHint(ID.p4hint1);
        else showFadeHint(ID.p4hint2);
      }, part4HintDelay * 1000);
    }
    function stopPart4Hint() { if (part4HintTimer) { S.clearTimeout(part4HintTimer); part4HintTimer = null; } hideHint(ID.p4hint1); hideHint(ID.p4hint2); }

    // ---------- ghost demo ----------
    function onDragStarted(id, fn) { var r = E.get(id); if (r) r._onDragStarted = fn; }
    function startGhost(startId, endId, isBook, isPart4) {
      stopGhost();
      if (!ID.ghostHand || !ID.ghostItem || !startId || !endId) return;
      var delay = isPart4 ? ghostDelayPart4 : (isFirstLevel ? 1 : 12);
      ghostToken = { alive: true };
      var tok = ghostToken;
      S.setTimeout(function () {
        if (!tok.alive || S.cancelled()) return;
        var sprite = isPart4 ? (isBook ? SPR.bookGhost4 : SPR.ballGhost4) : (isBook ? SPR.bookGhost3 : SPR.ballGhost3);
        if (ID.ghostImg && sprite) E.repaintSprite(E.get(ID.ghostImg), sprite);
        A(ID.ghostHand, true); A(ID.ghostItem, true);
        E.setAlpha(ID.ghostItem, ghostAlpha);
        // The ghost is authored inside Part 3, whose subtree is hidden during Part 4 — so the Part-4
        // demo hand would never render. Re-host both on the LEVEL ROOT (visible in every part). Position
        // is set in stage coords below, so the parent doesn't shift placement.
        var lroot = ID.part3 && E.get(ID.part3) && E.get(ID.part3).parent;
        if (lroot) {
          if (E.get(ID.ghostHand).parent !== lroot) E.reparent(ID.ghostHand, lroot.id);
          if (E.get(ID.ghostItem).parent !== lroot) E.reparent(ID.ghostItem, lroot.id);
        }
        E.setAsLastSibling(ID.ghostItem); E.setAsLastSibling(ID.ghostHand);
        var s = E.centerLogical(startId), e = E.centerLogical(endId);
        var mid = { x: (s.x + e.x) / 2, y: (s.y + e.y) / 2 - 15 };
        E.setStageLocalPos(E.get(ID.ghostHand), s.x, s.y); E.setStageLocalPos(E.get(ID.ghostItem), s.x, s.y);
        loopGhost(s, mid, e, tok);
      }, delay * 1000);
    }
    function loopGhost(s, mid, e, tok) {
      if (!tok.alive || S.cancelled()) return;
      E.doPathScreen(ID.ghostHand, [s, mid, e], ghostMoveDuration, "InOutSine", 0, false);
      E.doPathScreen(ID.ghostItem, [s, mid, e], ghostMoveDuration, "InOutSine", 0, false);
      S.setTimeout(function () {
        if (!tok.alive || S.cancelled()) return;
        E.doPathScreen(ID.ghostHand, [e, mid, s], ghostMoveDuration, "InOutSine", 0, false);
        E.doPathScreen(ID.ghostItem, [e, mid, s], ghostMoveDuration, "InOutSine", 0, false);
        S.setTimeout(function () { loopGhost(s, mid, e, tok); }, (ghostMoveDuration + 0.2) * 1000);
      }, (ghostMoveDuration + 0.2) * 1000);
    }
    function stopGhost() {
      ghostToken.alive = false;
      if (ID.ghostHand) { E.kill(ID.ghostHand); A(ID.ghostHand, false); }
      if (ID.ghostItem) { E.kill(ID.ghostItem); A(ID.ghostItem, false); }
    }

    // ---------- hints ----------
    function scheduleHint(hintId, doneFn) { return S.setTimeout(function () { if (!doneFn()) showFadeHint(hintId); }, dragHintDelay * 1000); }
    function clearHint(timer, hintId) { if (timer) S.clearTimeout(timer); if (hintId) { E.kill(hintId); A(hintId, false); } }
    function showFadeHint(hintId) { if (!hintId) return; E.kill(hintId); A(hintId, true); S.track(hintId); E.setAlpha(hintId, 0.3); E.doFade(hintId, 1, 0.8, "InOutSine", { loops: -1, yoyo: true }); }
    function hideHint(hintId) { if (!hintId) return; E.kill(hintId); A(hintId, false); }
    function showNextButtonHint(btnId) {
      nextHintTimer = S.setTimeout(function () {
        if (!btnId || !E.isActive(btnId) || !ID.nextHint) return;
        A(ID.nextHint, true); S.track(ID.nextHint);
        var bc = E.centerLogical(btnId); E.setStageLocalPos(E.get(ID.nextHint), bc.x, bc.y); E.setScale(ID.nextHint, 0.7);
        E.setAlpha(ID.nextHint, 0.5); E.doFade(ID.nextHint, 1, 0.8, "InOutSine", { loops: -1, yoyo: true });
      }, nextHintDelay * 1000);
      if (btnId) reg(E.onClick(btnId, stopNextButtonHint, { key: "nexthint" }));
    }
    function stopNextButtonHint() { if (nextHintTimer) { S.clearTimeout(nextHintTimer); nextHintTimer = null; } if (ID.nextHint) { E.kill(ID.nextHint); A(ID.nextHint, false); } }

    // ---------- teardown ----------
    self.dispose = function () {
      confettiToken.cancelled = true;
      stopGhost(); stopPart4Hint(); stopAnswerHint(); stopNextButtonHint();
      Audio.stopNarration();
      DM.clear();
      if (scaleCtrl && scaleCtrl.destroy) scaleCtrl.destroy();
      disposers.forEach(function (d) { try { d(); } catch (e) {} }); disposers = [];
      if (S) { S.dispose(); }
    };
    self.diagnostics = function () {
      return { host: host, ready4: isPart4Ready, placed3: Object.keys(placed3).length, placed4: Object.keys(placed4).length, timers: S ? S.timerCount() : 0, answerMode: answerMode, activeZones: DM.activeIds() };
    };

    return self;
  }

  // ---- DraggableItem setup (register once; drop behavior supplied per phase) ----
  function setupDraggable(id, spec, dragLayerId) {
    var r = E.get(id); if (!r) return;
    var itemData = spec.itemData || { weight: 0 };
    var itemImageId = nid(spec.itemImage) || id;
    r._itemData = itemData;
    r._imgId = itemImageId;
    if (itemData.itemSprite && itemData.itemSprite.path) E.repaintSprite(E.get(itemImageId), itemData.itemSprite.path);
    I.registerDraggable(id, { dragLayer: dragLayerId || nid(spec.dragLayer) }, {
      onBeginDrag: function () { if (r._onDragStarted) r._onDragStarted(); },
      onEndDrag: function (pointer) { if (r._dropHandler) r._dropHandler(pointer); else { I.restoreOrigin(id); } },
      onInterrupt: function () { if (r._interruptHandler) r._interruptHandler(); else I.restoreOrigin(id); }
    });
    I.setEnabled(id, false);
  }

  // ---- ButtonAnimator (intro "Let's Go") ----
  function ButtonAnimator(cfg, introId, onActivateLevel) {
    var btnId = nid(cfg.goButton), panelId = nid(cfg.gameplayPanel);
    var clip = cfg.clip && typeof cfg.clip === "string" ? cfg.clip : null;
    if (panelId) E.setActive(panelId, false);
    if (!btnId) return;
    E.setScale(btnId, 1);
    E.doScale(btnId, 1, 1, "InOutSine", { from: 0.8, loops: -1, yoyo: true });
    var done = false;
    E.ariaLabel(btnId, "Let's Go");
    E.onClick(btnId, function () {
      if (done) return; done = true;                 // transition lock: one activation only
      if (clip) Audio.playSFX(clip);
      E.kill(btnId);
      E.setInteractable(btnId, false);
      setTimeout(function () {
        E.setActive(btnId, false);
        if (introId) E.doFade(introId, 0, 0.4, "OutQuad", { onComplete: function () { E.setActive(introId, false); } });
        if (panelId) { E.setActive(panelId, true); if (onActivateLevel) onActivateLevel(panelId); }
      }, (cfg.delay || 0.3) * 1000);
    }, { key: "letsgo" });
  }

  return {
    GameManager: GameManager, BalanceScaleAnimator: BalanceScaleAnimator, ScaleController: BalanceScaleAnimator,
    setupDraggable: setupDraggable, ButtonAnimator: ButtonAnimator,
    compareWeights: compareWeights
  };
})();
if (typeof module !== "undefined") module.exports = Controllers;
