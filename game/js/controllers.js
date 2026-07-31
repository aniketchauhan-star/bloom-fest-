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
  // How deep an item sits in a pan: its visible art bottom is seated this far BELOW the dish's centre
  // line (the bowl box is 64 logical px tall, centre ±32, and the item draws BEHIND the dish, so the
  // depth is exactly how much of the item the bowl front laps over).
  //
  // Two failure modes, both seen in QA, bound the value:
  //  - too shallow: the item's bottom ends up ABOVE the bowl and it floats. Items used to be centred
  //    on the drop point, so the bottom depended on the item's box height — the tall bell/crown/vase
  //    (box 197) landed at +17..+28 and read as seated, the short ribbon (box 140) at -1..-11 and
  //    floated. That is the float QA reported.
  //  - too deep: a fixed depth swallows a short item. At +26 the bowl hid ~40% of the ribbon and cut
  //    across its flat base, while hiding only ~13% of the bell.
  // So the lap scales with the item — SEAT_FRACTION of its visible art height, capped at SEAT_DEPTH.
  // The ribbon gets ~17px and the bell ~24px: both clearly resting in the bowl, neither swallowed.
  // (The rim's exact line inside the bowl sprite isn't in the data, so these are tuned to what QA
  //  sees on screen; they are the only two numbers to touch if the tuck needs adjusting.)
  // SEAT_DEPTH is measured, not taste: the bowl is deep only in its middle (opaque down to y=63 around
  // its centre, but only y=31..47 toward its ends), so a WIDE item cannot sit as deep as a narrow one —
  // its outer columns drop past the bowl's silhouette and show under the pan. Comparing each item's
  // per-column opaque profile against the bowl's, the deepest lap that keeps EVERY item inside the bowl
  // (with 4px to spare) is 11px; the tightest item is the Tutorial's bell (120px of art). Going deeper
  // is what made the ribbon's tail, the Tutorial bell and the paper fan poke out below the rim.
  var SEAT_DEPTH = 11;
  // How long a child may sit doing nothing before a hand comes out to show them what to do — for every
  // level AFTER the Tutorial (the Tutorial teaches, so it demonstrates straight away). Covers the
  // drag-guide hand in Part 3 and Part 4 and the tap hand in the Part-3 answer step.
  var IDLE_HINT_DELAY = 8;
  var GHOST_FADE = 0.45;   // how long the drag-guide hand takes to fade up (it must never just blink on)
  // An item must be the SAME size wherever it lands. Each level authors its own ghost marker and the
  // item used to be fitted to it, so the identical bell rendered 170x177 in Level 1 but 146x152 in
  // Level 2 (its marker is 146 wide) — the same object visibly shrinking between levels. The FIRST
  // level to drop a given piece of art records the size it landed at; every later level matches it.
  // Keyed by the dropped SPRITE, so the rule follows the art rather than the level.
  var DROP_SIZE = {};   // dropped-sprite path -> rendered box height in logical px
  // ...with one exception per container that already displays the same art. Level 2's wagon carries an
  // authored bell decoration (n281_Bell_1, 146x197) right next to where the child drops the bell, so the
  // dropped one must match THAT rather than the size Level 1 recorded — otherwise the same wagon shows
  // two bells at different sizes. Keyed "host|sprite" -> rendered box height; 197 makes the art land at
  // its native 146x197, pixel-for-pixel identical to the decoration beside it.
  var DROP_SIZE_FIXED = {
    "n206_Level_2|assets/img/Untitled_design__34__2.webp": 197
  };
  // How deep each individual art can tuck, measured the same way: a narrow-based item can sit much
  // deeper than a wide-based one before its outer columns fall past the bowl. Values are the measured
  // maximum minus a safety margin. Anything not listed uses SEAT_DEPTH, which is safe for every item.
  // Every item's own maximum, measured per sprite AFTER its art is centred by ART_NUDGE below (centring
  // matters: several arts are drawn off-centre in their file, which pushed their edge onto the bowl's
  // shallow end and forced a shallow seat). Each value is at or under the deepest clean depth found.
  var ART_SEAT = {
    "assets/img/Untitled_design__34__2.webp": 24,   // bell (Levels 1 + 2) — clean to 34
    "assets/img/Untitled_design__21__7.webp": 18,   // bell (Tutorial)     — clean to 19
    "assets/img/paper_fan.webp": 22,                // paper fan (Level 2) — clean to 24
    "assets/img/vase.webp": 22,                     // vase (Level 4)      — clean to 24
    "assets/img/Untitled_design__33__6.webp": 16,   // paper fan (Tutorial)— clean to 17
    "assets/img/crown.webp": 16,                    // crown (Level 3)     — clean to 16
    "assets/img/flowers.webp": 16,                  // flowers (Level 4)   — clean to 16
    "assets/img/The_Royal_Bloom_Fest__26__2.webp": 15 // ribbon (L1 + L3)  — clean to 15 (its tail is the limit)
  };
  function seatDepthFor(imgId) {
    var r = imgId && Engine.get(imgId);
    var p = r && r._img && r._img.sprite && r._img.sprite.path;
    return (p && ART_SEAT[p]) || SEAT_DEPTH;
  }
  // Per-SPRITE seating nudge in logical px, applied on top of the geometric seating. The engine knows
  // a sprite's box and its aspect, but NOT where the opaque pixels sit inside the file — art that is
  // drawn off-centre in its own image therefore lands off-centre in the pan, however exactly we place
  // the box. Keyed by sprite path, so one entry fixes every level that uses that art (the ribbon is
  // shared by Level 1 and Level 3) and Part 3 + Part 4 alike. dx: -left/+right, dy: +deeper.
  // Measured from the art itself (per-column opaque profile of the sprite vs the pan's bowl sprite):
  //  - the ribbon's opaque pixels sit 12px RIGHT of its own box centre, so centring the box leaves the
  //    ribbon off-centre on the pan;
  //  - its lowest pixels are its TAIL, which spans the whole right half of the frame. The bowl is only
  //    deep in the middle (opaque to y=63 at x 64..139, but just y=39 by x=172), so a tail sitting at
  //    the bowl's right end drops below the bowl's silhouette and shows under the pan — 10px of it at
  //    the previous setting, which is exactly what QA photographed.
  //  dx -20 both centres the visible ribbon (+12 of it) and slides its tail back over the bowl's deep
  //  middle (-8). Verified against the silhouettes: no column of the ribbon falls outside the bowl.
  // dx is each art's measured off-centre error inside its own image file (plus, for the ribbon and the
  // Tutorial bell, a couple of px more to bring a low outer edge over the bowl's deeper middle).
  var ART_NUDGE = {
    "assets/img/The_Royal_Bloom_Fest__26__2.webp": { dx: -14, dy: 0 },  // ribbon (L1 + L3): art 12px right in file
    "assets/img/flowers.webp": { dx: -19, dy: 0 },                      // flowers (L4): art 19px right in file
    "assets/img/paper_fan.webp": { dx: -15, dy: 0 },                    // paper fan (L2): art 15px right in file
    "assets/img/vase.webp": { dx: -7, dy: 0 },                          // vase (L4)
    "assets/img/crown.webp": { dx: -3, dy: 0 },                         // crown (L3)
    "assets/img/Untitled_design__21__7.webp": { dx: -2, dy: 0 },        // bell (Tutorial)
    "assets/img/Untitled_design__34__2.webp": { dx: 1, dy: 0 },         // bell (L1 + L2)
    "assets/img/Untitled_design__33__6.webp": { dx: 5, dy: 0 }          // paper fan (Tutorial): art 5px left in file
  };
  function artNudge(imgId) {
    var r = imgId && Engine.get(imgId);
    var p = r && r._img && r._img.sprite && r._img.sprite.path;
    return (p && ART_NUDGE[p]) || { dx: 0, dy: 0 };
  }

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
    // Sound for an item landing in the basket / wagon (Part 4). Data-driven, falling back to the
    // level's sparkle clip so every level has one without hard-coding a path here.
    var dropSFX = aud(f.dropSFX) || boxOpenSFX;
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
    var answerHintTimer = null, part4HintTimer = null, nextHintTimer = null, boxHintTimer = null;
    var disposers = [];           // click-listener disposers for this level
    var locks = {};               // transition locks
    var boxOpened = false;
    var tryAgainScale = null;     // authored resting scale of the Try Again button (captured once)

    function A(id, on) { if (id) E.setActive(id, on); }
    // Force every hint hand / ghost of THIS level off, killing any tween on it. Used at level start
    // (the layout authors some of them active) and on teardown, so no hand can be left on screen.
    function hideAllHints() {
      [ID.hintHand, ID.hint1, ID.hint2, ID.answerHint, ID.nextHint, ID.ghostHand, ID.ghostItem, ID.p4hint1, ID.p4hint2]
        .forEach(function (id) { if (id) { E.kill(id); E.setActive(id, false); } });
    }
    function reg(disposer) { if (disposer) disposers.push(disposer); }
    function weight(id) { var d = E.get(id); return d && d._itemData ? d._itemData.weight : 0; }

    // ---- art warming (never reveal a container before the thing inside it) ----
    // Level art paints lazily, so activating a card starts the sprite fetch — the card would show
    // empty for a beat on a first visit. Warm the subtree's sprites first; resolves immediately once
    // they are cached, and is capped inside the engine so a missing asset cannot stall the flow.
    function warmArt(ids) { try { return E.preloadSprites(ids); } catch (e) { return Promise.resolve(); } }
    // every sprite this level's draggables can show (item + dropped), so Part 3 / Part 4 reveals and
    // the seating maths (which needs each sprite's natural size) are never waiting on a fetch
    function itemSpritePaths() {
      var out = [];
      [ID.book, ID.ball, ID.part4ItemA, ID.part4ItemB].forEach(function (id) {
        var r = id && E.get(id), d = r && r._itemData; if (!d) return;
        if (d.itemSprite && d.itemSprite.path) out.push(d.itemSprite.path);
        if (d.droppedSprite && d.droppedSprite.path) out.push(d.droppedSprite.path);
      });
      return out;
    }

    // ---- seating: rest an item INSIDE a pan / basket / wagon ----
    // Items differ a lot in box height (e.g. the ribbon's box is 140 tall, the bell's 197), so
    // centring every item on the same drop point left the SHORT ones hanging in mid-air above the
    // bowl while tall ones reached in. Seat by the BOTTOM of the visible art instead: every item's
    // art bottom lands on the same line inside the container, whatever its size or aspect.
    // Placement is measure-and-correct (nudge in anchored space), so it is exact regardless of
    // pivots or parent scaling.
    function seatArtBottom(itemId, targetX, bottomY) {
      var rec = E.get(itemId); if (!rec) return;
      var imgId = rec._imgId && E.get(rec._imgId) ? rec._imgId : itemId;
      var nudge = artNudge(imgId);          // correction for art that isn't centred in its own file
      targetX += nudge.dx; bottomY += nudge.dy;
      for (var pass = 0; pass < 2; pass++) {
        var art = E.artRectLogical(imgId) || E.worldRectLogical(imgId);
        if (!art) return;
        var dx = targetX - (art.x + art.w / 2), dy = bottomY - (art.y + art.h);
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
        var p = E.getAnchoredPos(itemId);
        E.setAnchoredPos(itemId, p.x + dx, p.y - dy);      // anchored Y is up-positive
      }
    }

    // -------- typing + narration (begin together, single narration) --------
    // opts.onStart fires on the frame the FIRST letter is painted (which is not when typeText is called:
    // the typing waits for the clip's metadata so it can be paced to the voice). Anything that should
    // appear "with the text" must hang off this, not off the returned promise — that resolves only when
    // the whole line, and therefore the voice, has finished.
    function typeText(msg, clip, opts) {
      return new Promise(function (resolve) {
        if (!ID.instructionText) return resolve();
        var myTok = ++typingToken;
        E.setText(ID.instructionText, "");
        Audio.stopNarration();
        var start = function (letterDelay) {
          if (S.cancelled() || myTok !== typingToken) return resolve();
          announce(msg);
          // Type from the moment the voice is REALLY audible, not from the moment play() was called:
          // if the clip needed a beat to start, the letters used to run ahead of the words. The gate
          // inside AudioManager is capped, so a blocked/silent clip can never hold the text back.
          if (clip) { Audio.startNarration(clip, function () { typeFrom(letterDelay); }); return; }
          typeFrom(letterDelay);
        };
        var typeFrom = function (letterDelay) {
          if (S.cancelled() || myTok !== typingToken) return resolve();
          if (opts && opts.onStart) { try { opts.onStart(); } catch (e) { console.error(e); } }
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
      // Warm every sprite this level's items can show (item + dropped, Part 3 + Part 4) as soon as the
      // level mounts. Each reveal awaits its own warm too; doing it here means those awaits are usually
      // already satisfied, and the natural sizes the seating maths needs are known before the first drop.
      warmArt([ID.item1, ID.item2, ID.item3, ID.item4]);
      try { E.preloadPaths(itemSpritePaths()); } catch (e) {}
      if (scaleCtrl && scaleCtrl.reset) scaleCtrl.reset(true);   // snap scale to balanced (no drift on re-entry)
      // reset this level's draggables to their original slots + sprites (clean re-entry)
      [ID.book, ID.ball, ID.part4ItemA, ID.part4ItemB].forEach(function (did) { if (did) { I.resetToInitial(did); repaintItem(did, "item"); } });
      item1Orig = ID.item1 ? E.getAnchoredPos(ID.item1) : { x: 0, y: 0 };
      item2Orig = ID.item2 ? E.getAnchoredPos(ID.item2) : { x: 0, y: 0 };
      A(ID.item1, false); A(ID.item2, false); A(ID.highlight, false);
      // Every hint hand / ghost starts HIDDEN, whatever the layout authored. The Unity export is
      // inconsistent here — Level 1 authors its two Part-3 hint hands ACTIVE (n157/n163) and Level 3
      // authors the children of its Part-4 hint hands ACTIVE — so a stray hand would sit on screen
      // from the moment that part appears instead of only after the child has idled. Hiding them per
      // level (not per node id) keeps this true for any future level.
      hideAllHints();
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
      // The box becomes tappable as soon as the instruction lands — only the HINT waits. (These two used
      // to be one step, which is why the box hand still appeared right away after the Tutorial: the 8s
      // idle rule had only been applied to the drag hand and the answer hand, not to this one.)
      if (ID.boxButton) reg(E.onClick(ID.boxButton, guard("box", openBox), { key: "gm" }));
      boxHintTimer = S.setTimeout(showHint, (isFirstLevel ? 0 : IDLE_HINT_DELAY) * 1000);
    }
    function showHint() {
      boxHintTimer = null;
      if (boxOpened || !ID.hintHand) return;      // the child got there first — no hand needed
      A(ID.hintHand, true);
      S.track(ID.hintHand);
      E.setAlpha(ID.hintHand, 0); E.doFade(ID.hintHand, 1, GHOST_FADE, "OutQuad");   // fade up, never blink on
      E.setScale(ID.hintHand, 0.7);
      var p = E.getAnchoredPos(ID.hintHand);
      E.doAnchorPosY(ID.hintHand, p.y - 15, 0.5, "Linear", { loops: -1, yoyo: true });
    }
    function openBox() {
      if (boxOpened) return; boxOpened = true;
      // disable further taps WITHOUT the grayscale/opacity dim (setInteractable fades it) — the box must
      // stay fully opaque as it wobbles + opens.
      if (ID.boxButton) E.setInputEnabled(ID.boxButton, false);
      A(ID.messageBar, false);
      if (boxHintTimer) { S.clearTimeout(boxHintTimer); boxHintTimer = null; }   // tapped in time: no hand
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
      await S.wait(0.5); await popItems();
      await S.wait(0.5); popHighlight();
      await S.wait(2); startPart2();
    }
    async function popItems() {
      await warmArt([ID.item1, ID.item2]);            // items pop out already drawn, never as empty shapes
      if (S.cancelled()) return;
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
      // the card and the item inside it must appear together — warm the art before revealing either
      await warmArt([ID.item3, ID.item4, ID.lanternText, ID.featherText]);
      if (S.cancelled()) return;
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
      // centre so it opens outward symmetrically. The name pops in once it is open — deliberately with
      // NO sparkle burst: on the naming screen the word is what the child should be reading, and the
      // stars pulled the eye off it. Bursts stay on the box opening, the Part-4 drops and the finale.
      S.track(rootId);
      E.setScaleXY(rootId, 0.06, 0.9);
      E.tween({ dur: dur, ease: "OutBack", tag: rootId,
        fn: function (e) { E.setScaleXY(rootId, 0.06 + 0.94 * e, 0.9 + 0.1 * e); },
        onComplete: function () {
          if (S.cancelled()) return;
          E.setScaleXY(rootId, 1, 1);
          if (txt) { A(txt, true); S.track(txt); E.setAlpha(txt, 0); E.setScale(txt, 0.55); E.doScale(txt, 1, 0.35, "OutBack"); E.doFade(txt, 1, 0.3, "OutQuad"); }
        } });
    }

    // ---------- PART 3 ----------
    function startPart3() { revealPart3(); }
    async function revealPart3() {
      if (scaleCtrl) scaleCtrl.reset();
      A(ID.nextP2, false); stopNextButtonHint(); Audio.stopNarration();
      await warmArt([ID.part3]);            // genie, pans and both item cards drawn before they slide in
      if (S.cancelled()) return;
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
      repaintItem(itemId, "dropped");     // swap to the sprite it will SHOW before measuring it (aspects differ)
      var zoneRec = E.get(zone.id), dish = zoneRec && zoneRec.parent, pan = dish && dish.parent;
      if (pan) {
        var sc = E.centerLogical(zone.id);
        E.reparent(itemId, pan.id);
        E.setStageLocalPos(E.get(itemId), sc.x, sc.y);
        // Rest the item ON the bowl: its visible art bottom sits just below the dish's centre line, so
        // the dish front laps over the item's lower edge. The depth is keyed to the DISH (not the item's
        // box height, which is what let short items float) and to the ART (each sprite tucks as deep as
        // its own silhouette allows against the bowl) — see seatDepthFor / ART_SEAT.
        var dc = E.centerLogical(dish.id);
        var itemRec = E.get(itemId);
        var seatImg = (itemRec._imgId && E.get(itemRec._imgId)) ? itemRec._imgId : itemId;
        seatArtBottom(itemId, dc.x, dc.y + seatDepthFor(seatImg));
        E.setAsFirstSibling(itemId);   // render BEHIND the dish -> tucked inside the bowl
        // The dish (bowl) now sits IN FRONT of the nestled item. In the answer phase the item is the
        // tap target ("Tap the heavier item"), so make the dish + its drop-marker children NON-
        // interactive — taps pass THROUGH the bowl to the item behind it. Drop detection is geometric
        // (isInteractableInTree ignores pointer-events), so the other pan can still receive its item.
        (function off(id) { E.setRaycast(id, false); var r = E.get(id); if (r) (r.children || []).forEach(function (c) { off(c.id); }); })(dish.id);
      } else {
        E.reparent(itemId, zone.id); E.setAnchoredPos(itemId, 0, 0); E.setAsLastSibling(itemId);
      }
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
      hideHint(ID.hint1);                 // no sticky hand overlay — the animated ghost hand is the only hint
      await S.waitUntil(function () { return !!placed3[ID.ball]; });
      stopGhost(); updateScaleWeights(); hideHint(ID.hint1);
      I.setEnabled(ID.ball, false);
      await typeText(INSTR[4], AUD[4]);
      // enable book (item on the left) only
      E.get(ID.book)._dropHandler = part3DropHandler(ID.book);
      E.get(ID.book)._interruptHandler = function () { returnItem3(ID.book); };
      I.setEnabled(ID.book, true); I.setEnabled(ID.ball, false);
      var targetDrop = isLeftOccupied() ? ID.rightDrop : ID.leftDrop;
      startGhost(ID.bookStart, targetDrop, true);
      onDragStarted(ID.book, stopGhost);
      hideHint(ID.hint2);
      await S.waitUntil(function () { return !!placed3[ID.book]; });
      stopGhost(); updateScaleWeights(); hideHint(ID.hint2);
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
        // same idle rule as the drag hand: the Tutorial helps quickly, later levels wait 8s of no input
      }, (isFirstLevel ? answerHintDelay : IDLE_HINT_DELAY) * 1000);
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
      // The retry appears WITH the "Oops!" text, not when the line (and the voice it is paced to) has
      // finished — awaiting typeText used to hold it back for the whole clip. onStart fires on the frame
      // the first letter is painted, so the button lands with the words while the voice is still talking.
      var retryShown = false;
      var showRetry = function () {
        if (retryShown || S.cancelled()) return; retryShown = true;
        A(ID.tryAgain, true);
        if (!ID.tryAgain) return;
        reg(E.onClick(ID.tryAgain, guard2("tryagain", onTryAgain), { key: "tryagain" }));
        // resting scale is captured ONCE (from the authored value) — reading it back each time would
        // compound if the child pressed mid-pop, shrinking the button a little on every retry
        if (tryAgainScale == null) tryAgainScale = E.getScale(ID.tryAgain) || 1;
        E.kill(ID.tryAgain); S.track(ID.tryAgain);
        E.setScale(ID.tryAgain, 0); E.doScale(ID.tryAgain, tryAgainScale, 0.3, "OutBack");   // pop in: "press me"
      };
      typeText(INSTR[6], AUD[6], { onStart: function () { S.setTimeout(showRetry, 150); } });
    }
    // guard2: lock resets when the guarded flow explicitly releases it
    function guard2(name, fn) { return function () { if (locks[name]) return; locks[name] = true; fn(function () { locks[name] = false; }); }; }
    function onTryAgain(release) {
      A(ID.tryAgain, false);
      if (ID.tryAgain) { E.kill(ID.tryAgain); if (tryAgainScale != null) E.setScale(ID.tryAgain, tryAgainScale); }   // settle the pop
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
      // basket, wagon and both sorting cards drawn before any of them is revealed
      await warmArt([ID.base3, ID.base4, ID.part4ItemA, ID.part4ItemB, ID.basket, ID.trolley]);
      if (S.cancelled()) return;
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
      stopPart4Hint();                    // keep the static hand-on-card overlays off (ghost hand is the hint)
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
          repaintItem(itemId, "dropped");   // swap sprites BEFORE measuring — the dropped art has its own aspect
          if (slotRec) {
            var sr = E.getRect(slot), ir = E.getRect(itemId);
            var fit = (sr && ir && ir.sdX > 0 && ir.sdY > 0) ? Math.min(sr.sdX / ir.sdX, sr.sdY / ir.sdY) : 0.82;
            E.setScale(itemId, (isFinite(fit) && fit > 0) ? fit : 0.82);   // start from the ghost marker's box
            // ...then make it the size this art was the FIRST time it landed, so an item never changes
            // size between levels just because that level's marker is authored differently (DROP_SIZE).
            var recI = E.get(itemId);
            var dsp = recI._itemData && recI._itemData.droppedSprite && recI._itemData.droppedSprite.path;
            var fixedH = dsp ? DROP_SIZE_FIXED[host + "|" + dsp] : null;
            if (fixedH > 0 && recI.rt.sdY > 0) {
              E.setScale(itemId, fixedH / recI.rt.sdY);      // match the art already in this container
            } else if (dsp) {
              var renderedH = recI.rt.sdY * recI.rt.sx;
              if (DROP_SIZE[dsp] == null) { if (renderedH > 0) DROP_SIZE[dsp] = renderedH; }
              else if (renderedH > 0) {
                // clamped: matching the first level must never blow an item far past its slot
                var k = Math.max(0.6, Math.min(1.4, DROP_SIZE[dsp] / renderedH));
                E.setScale(itemId, recI.rt.sx * k);
              }
            }
            var sc = E.centerLogical(slot); E.setStageLocalPos(E.get(itemId), sc.x, sc.y);
            // then settle it DOWN onto the container: the visible art's bottom lines up with the
            // marker's bottom, so a short/wide item rests in the basket instead of hovering in it
            var mr = E.worldRectLogical(slot);
            if (mr) seatArtBottom(itemId, sc.x, mr.y + mr.h);
            E.setSelfPaint(slot, false);                                    // hide the ghost now the real item covers it
          } else { E.setScale(itemId, 0.82); E.setAnchoredPos(itemId, 0, 0); }
          stopPart4Hint();
          // No sparkle for an individual drop — the celebration is saved for FINISHING the stage
          // (checkPart4Completion bursts from both containers). A landing sound still marks each drop.
          if (dropSFX) Audio.playSFX(dropSFX);
          checkPart4Completion();
          if (!allPlaced4()) startSmartGhostP4();
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
    // Part 4's idle hint is the animated ghost hand (startSmartGhostP4) alone — the static hand-on-the-
    // card overlay and its dotted arrow are not shown at all, so the child never sees two hands at once.
    function stopPart4Hint() { if (part4HintTimer) { S.clearTimeout(part4HintTimer); part4HintTimer = null; } hideHint(ID.p4hint1); hideHint(ID.p4hint2); }

    // ---------- ghost demo ----------
    function onDragStarted(id, fn) { var r = E.get(id); if (r) r._onDragStarted = fn; }
    function startGhost(startId, endId, isBook, isPart4) {
      stopGhost();
      if (!ID.ghostHand || !ID.ghostItem || !startId || !endId) return;
      // The Tutorial is the teaching level: it demonstrates the drag almost immediately (and Part 4 on
      // its authored delay). After the Tutorial the child is expected to try it themselves, so the hand
      // only comes out once they have been IDLE for IDLE_HINT_DELAY. Any drag stops it (onDragStarted ->
      // stopGhost) and the next unfinished step re-arms it, so the wait restarts after each interaction.
      var delay = isFirstLevel ? (isPart4 ? ghostDelayPart4 : 1) : IDLE_HINT_DELAY;
      ghostToken = { alive: true };
      var tok = ghostToken;
      S.setTimeout(function () {
        if (!tok.alive || S.cancelled()) return;
        var sprite = isPart4 ? (isBook ? SPR.bookGhost4 : SPR.ballGhost4) : (isBook ? SPR.bookGhost3 : SPR.ballGhost3);
        if (ID.ghostImg && sprite) E.repaintSprite(E.get(ID.ghostImg), sprite);
        A(ID.ghostHand, true); A(ID.ghostItem, true);
        // Start invisible: the hand used to blink in at full opacity, which after the Tutorial (where
        // it now waits 8s of silence) reads as something appearing out of nowhere. It fades up on the
        // spot instead — see the fade below, once it has been positioned at the start of the drag.
        E.setAlpha(ID.ghostHand, 0); E.setAlpha(ID.ghostItem, 0);
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
        // ease it in where the drag begins, then start the demo — no pop
        S.track(ID.ghostHand); S.track(ID.ghostItem);
        E.doFade(ID.ghostHand, 1, GHOST_FADE, "OutQuad");
        E.doFade(ID.ghostItem, ghostAlpha, GHOST_FADE, "OutQuad");
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
    // The STATIC hint overlays (a faded hand pinned on the item card, plus the big dotted arrow art
    // behind it) are gone: they appeared alongside the animated drag-guide hand, so the child saw TWO
    // hands and a dotted arrow at once. The single animated ghost hand (startGhost) is the only drag
    // hint now. hideHint stays — the flow uses it to guarantee those nodes are never on screen.
    function hideHint(hintId) { if (!hintId) return; E.kill(hintId); A(hintId, false); }
    function showNextButtonHint(btnId) {
      nextHintTimer = S.setTimeout(function () {
        // isInteractableInTree, NOT isActive: the hint hand (n519_hand) is a CANVAS-ROOT node shared
        // by every level, so it shows regardless of which level is on screen. isActive only checks the
        // button itself — a button whose level root was deactivated without disposing the GM (e.g. a
        // God Mode screen jump) still reads active, and this timer would park a hand over another level.
        if (!btnId || !E.isInteractableInTree(btnId) || !ID.nextHint) return;
        A(ID.nextHint, true); S.track(ID.nextHint);
        var bc = E.centerLogical(btnId); E.setStageLocalPos(E.get(ID.nextHint), bc.x, bc.y); E.setScale(ID.nextHint, 0.7);
        E.setAlpha(ID.nextHint, 0); E.doFade(ID.nextHint, 1, GHOST_FADE, "OutQuad", { onComplete: function () {
          E.doFade(ID.nextHint, 0.55, 0.8, "InOutSine", { loops: -1, yoyo: true });   // then breathe, gently
        } });
        // the fourth and last hint family on the same idle rule as the others. The Tutorial keeps its
        // authored delay but capped at IDLE_HINT_DELAY: it was 12s, i.e. the teaching level made the
        // child wait LONGER for a hand than Level 1 does. No hand anywhere now takes more than 8s.
      }, (isFirstLevel ? Math.min(nextHintDelay, IDLE_HINT_DELAY) : IDLE_HINT_DELAY) * 1000);
      if (btnId) reg(E.onClick(btnId, stopNextButtonHint, { key: "nexthint" }));
    }
    function stopNextButtonHint() { if (nextHintTimer) { S.clearTimeout(nextHintTimer); nextHintTimer = null; } if (ID.nextHint) { E.kill(ID.nextHint); A(ID.nextHint, false); } }

    // ---------- teardown ----------
    self.dispose = function () {
      confettiToken.cancelled = true;
      stopGhost(); stopPart4Hint(); stopAnswerHint(); stopNextButtonHint();
      hideAllHints();                 // nothing of this level may be left on screen (the Next hint hand is shared)
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
    compareWeights: compareWeights,
    // QA reads this so the cross-level size assert knows which (level, art) pairs are deliberate
    // exceptions — a container that already shows the same art wins over the first-level size.
    dropSizeFixed: function () { return Object.assign({}, DROP_SIZE_FIXED); }
  };
})();
if (typeof module !== "undefined") module.exports = Controllers;
