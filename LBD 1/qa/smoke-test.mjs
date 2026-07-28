#!/usr/bin/env node
/* Royal Bloom — headless end-to-end smoke test.
 * Boots the real engine/interaction/controllers/main in a DOM+fake-clock shim and
 * drives the full Intro -> Tutorial -> L1..L4 -> Final flow with simulated pointer
 * drags and clicks, across the QA viewport matrix. Asserts drop routing, data-driven
 * sorting, lifecycle cleanup, duplicate-ID freedom, stale-callback safety, letterbox
 * scaling, and leak stability. Non-zero exit on any failure. Run: node qa/smoke-test.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";
import { makeEnv } from "./dom-shim.mjs";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const SRC = ["js/data.js", "js/engine.js", "js/audio-manager.js", "js/interaction.js", "js/controllers.js", "js/main.js"]
  .map((f) => ({ f, code: fs.readFileSync(path.join(ROOT, f), "utf8") }));

let pass = 0, fail = 0;
const failures = [];
let rejections = 0;
process.on("unhandledRejection", (r) => { rejections++; console.log("  unhandledRejection:", String(r)); });
function ok(cond, msg) { if (cond) { pass++; } else { fail++; failures.push(msg); console.log("  FAIL: " + msg); } }

function boot(viewport) {
  const env = makeEnv(viewport);
  const consoleErrors = [];
  env.globals.console = Object.assign({}, console, { error: (...a) => { consoleErrors.push(a.map(String).join(" ")); } });
  const ctx = vm.createContext(env.globals);
  for (const { f, code } of SRC) vm.runInContext(code, ctx, { filename: f });
  return { env, ctx, consoleErrors, E: ctx.Engine, C: ctx.Controllers, I: ctx.Interaction, RB: env.window.__RB, CFG: env.window.CONFIG };
}

const VIEWPORTS = [
  { name: "1920x1080 mouse", width: 1920, height: 1080 },
  { name: "1600x900 mouse", width: 1600, height: 900 },
  { name: "1366x768 laptop", width: 1366, height: 768 },
  { name: "1280x720 mouse", width: 1280, height: 720 },
  { name: "1024x768 tablet touch", width: 1024, height: 768, touch: true },
  { name: "iPad 1180x820 touch", width: 1180, height: 820, touch: true },
  { name: "Android 1280x800 touch", width: 1280, height: 800, touch: true },
  { name: "phone 844x390 landscape touch", width: 844, height: 390, touch: true }   // smallest device, widest aspect
];

async function runViewport(vp, full) {
  const H = boot(vp);
  const { env, E, C, I, RB, CFG, consoleErrors } = H;
  const nid = (f) => (f && f.node) ? f.node : null;
  const elById = (id) => env.document.getElementById(id);
  const label = vp.name + " | ";

  async function until(pred, maxMs, step) { step = step || 250; let t = 0; while (t < maxMs) { if (pred()) return true; await env.advance(step); t += step; } return pred(); }
  function zoneCenter(zoneId) { const r = elById(zoneId).getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
  function dragToZone(itemId, zoneId) { const c = zoneCenter(zoneId); env.dragTo(elById(itemId), c.x, c.y); }
  function click(id) { const el = elById(id); if (el) el.dispatchEvent(env.makeEvent("click")); }
  function weightOf(id) { const d = CFG.draggables[id]; return d && d.itemData ? d.itemData.weight : NaN; }
  function fields(host) { return CFG.gameManagers.find((g) => g.host === host).fields; }
  function part3Pans(host) { const ids = Object.keys(CFG.baskets).filter((z) => nid(CFG.baskets[z].gameManager) === host && !CFG.baskets[z].isPart4); return { left: ids.find((z) => CFG.baskets[z].isLeftBasket), right: ids.find((z) => !CFG.baskets[z].isLeftBasket) }; }

  // ---- boot asserts ----
  await env.advance(50);
  ok(E.isActive("n2_Intro_1"), label + "Intro active at boot");
  ok(!E.isActive("n5_Tutorial"), label + "Tutorial inactive at boot");

  // letterbox scaling: uniform min ratio, centered
  const expectS = Math.min(vp.width / 1920, vp.height / 1080);
  const sr = env.stage.getBoundingClientRect();
  ok(Math.abs(sr.width / 1920 - expectS) < 1e-6, label + "stage scaled by min ratio");
  ok(Math.abs(sr.left - (vp.width - 1920 * expectS) / 2) < 1.5 && Math.abs(sr.top - (vp.height - 1080 * expectS) / 2) < 1.5, label + "stage letterbox-centered");
  // clientToLogical round-trips a point through the current scale
  const rt = E.clientToLogical(sr.left + 100 * expectS, sr.top + 50 * expectS);
  ok(Math.abs(rt.x - 100) < 0.5 && Math.abs(rt.y - 50) < 0.5, label + "clientToLogical round-trips under scale");

  // duplicate DOM ids + stray hand
  const idEls = env.document.querySelectorAll("[id]"); const seen = new Set(), dupes = [];
  idEls.forEach((e) => { if (seen.has(e.id)) dupes.push(e.id); else seen.add(e.id); });
  ok(dupes.length === 0, label + "no duplicate DOM ids");
  ok(!elById("n520_Image"), label + "stray n520_Image absent");

  // ---- Let's Go (rapid clicks -> one activation) ----
  env.window.dispatchEvent(env.makeEvent("pointerdown", { clientX: 10, clientY: 10 }));
  const goBtn = Object.keys(CFG.btnAnim)[0];
  click(goBtn); click(goBtn); click(goBtn);
  ok(await until(() => E.isActive("n5_Tutorial"), 6000), label + "Let's Go -> Tutorial (once)");

  async function playLevel(host, testWrong) {
    const f = fields(host);
    const boxBtn = nid(f.boxButton), ball = nid(f.ballDraggable), book = nid(f.bookDraggable);
    const bookAns = nid(f.bookAnswerButton), ballAns = nid(f.ballAnswerButton);
    const nextP2 = nid(f.nextButtonPart2), nextP3 = nid(f.nextButtonPart3), nextP4 = nid(f.nextButtonPart4);
    const p4a = nid(f.bookDraggablePart4), p4b = nid(f.ballDraggablePart4);
    const basketDrop = nid(f.basketDropPoint), trolleyDrop = nid(f.trolleyDropPoint);
    const pans = part3Pans(host); const answerMode = f.answerMode;

    ok(await until(() => (elById(boxBtn).listeners.click || []).length > 0, 9000), label + host + ": box interactive");
    // box tap rocks the front box AND its lid together, each a LEAF — never the shared container
    // (which would shake the back box / glow / hidden items). Both animated nodes must be leaves.
    { const bi = nid(f.boxInteractiveVisual) || nid(f.boxImage), bt = nid(f.boxTop);
      ok(E.get(bi).children.length === 0, label + host + ": box tap target is a leaf (front box, not the container)");
      if (bt) ok(E.get(bt).children.length === 0, label + host + ": box lid is a leaf (shakes rigidly with the box, not the container)"); }
    click(boxBtn);
    // tapping the box must NOT dim it (disable input without the grayscale/opacity fade)
    ok(!/opacity|grayscale/.test(E.get(boxBtn).el.style.filter || ""), label + host + ": box stays fully opaque on tap");
    ok(await until(() => E.isActive(nextP2), 12000), label + host + ": Part2 Next");
    // Part 2 name scrolls must OPEN (parchment + centered name), not sit closed with rollers only
    [nid(f.lanternTextObject), nid(f.featherTextObject)].forEach((root, k) => {
      const parch = root && E.childByName(root, "image 01");
      const txt = root && E.childByName(root, "Text (TMP)");
      const side = k === 0 ? "left" : "right";
      ok(parch && E.isActive(parch), label + host + ": " + side + " scroll parchment open");
      ok(txt && E.isActive(txt) && (E.get(txt)._tmpInner || {}).textContent.trim().length > 0, label + host + ": " + side + " scroll name shown");
      // the name shown must match the DISPLAYED item — the card IMAGE — not the internal
      // itemData.name. The tutorial's cards are a Lantern + Feather even though their itemData is
      // Bell/Paper fan (it was cloned from Level 2 with only sprites+names swapped). Snapshot the
      // real displayed names so accidental text drift (either direction) is caught.
      { const EXPECT = { n5_Tutorial: ["Lantern", "Feather"], n105_Level_1: ["Ribbon", "Bell"], n206_Level_2: ["Bell", "Paper fan"], n307_Level_3: ["Crown", "Ribbon"], n410_Level_4: ["Flowers", "Vase"] };
        const want = (EXPECT[host] || [])[k]; const got = ((E.get(txt)._tmpInner || {}).textContent || "").trim();
        if (want) ok(got === want, label + host + ": " + side + " scroll name is \"" + want + "\" (got \"" + got + "\")"); }
      ok(txt && E.get(txt).el.style.textAlign === "center", label + host + ": " + side + " scroll name centered");
      ok(root && E.get(root).el.style.backgroundImage === "none", label + host + ": " + side + " closed-scroll sprite hidden (no duplicate)");
    });
    click(nextP2);
    ok(await until(() => E.get(ball)._drag.enabled, 15000), label + host + ": ball enabled");
    // genie scale root must NOT paint its own (duplicate) full genie image — only its children draw
    const scId = f.scaleController && f.scaleController.node;
    if (scId) {
      ok(E.get(scId).el.style.backgroundImage === "none", label + host + ": scale root self-paint disabled (no doubled genie)");
      // and the beam ("plate") must NOT paint hands_bg over its trays — that is the duplicate hand
      const beam = E.childByName(scId, "plate");
      if (beam) ok(E.get(beam).el.style.backgroundImage === "none", label + host + ": beam self-paint disabled (no duplicate hands)");
      // the two Part-3 item cards must be fully ON-SCREEN, not overlapping, and MIRROR each other
      // (left card at the mirror of the right across centre, same height) so the stage reads balanced.
      const items = E.childByName(scId, "items");
      const cardL = items && E.childByName(items, "Item 2"), cardR = items && E.childByName(items, "Item 1");
      if (cardL && cardR) {
        const lw = E.worldRectLogical(cardL), rw = E.worldRectLogical(cardR);
        const onScreen = (w2) => w2 && w2.x >= -5 && w2.y >= -5 && w2.x + w2.w <= 1925 && w2.y + w2.h <= 1085;
        ok(onScreen(lw) && onScreen(rw), label + host + ": both item cards on-screen");
        const overlap = lw && rw && lw.x < rw.x + rw.w && rw.x < lw.x + lw.w && lw.y < rw.y + rw.h && rw.y < lw.y + lw.h;
        ok(!overlap, label + host + ": item cards do not overlap");
        const cl = E.centerLogical(cardL), cr = E.centerLogical(cardR);
        ok(Math.abs((960 - cl.x) - (cr.x - 960)) < 12 && Math.abs(cl.y - cr.y) < 12, label + host + ": item cards mirror each other (balanced)");
      }
    }
    // blur mid-drag must fully tear down (spec #6): drag clears and the item stays draggable after
    elById(ball).dispatchEvent(env.makeEvent("pointerdown", { clientX: 400, clientY: 400, pointerId: 7 }));
    env.window.dispatchEvent(env.makeEvent("blur"));
    ok(!I.isDragging(), label + host + ": drag cleared after window blur");
    // hidden-zone guard: a Part-4 zone must NOT accept a Part-3 drag (different phase)
    if (testWrong) { dragToZone(ball, basketDrop); ok(!I.isLocked(ball), label + host + ": Part4 zone rejects Part3 drop"); }
    dragToZone(ball, pans.right);
    ok(await until(() => I.isLocked(ball), 4000), label + host + ": ball placed");
    // dropped item must render letterbox-fit (contain) so sprite swaps never stretch/resize it
    ok((E.get(nid(f.ballImage) || ball)._img || {}).preserveAspect === true, label + host + ": dropped item uses contain (no distort)");
    // placed item must NESTLE behind the pan's dish (the bowl laps over its lower edge = seated inside)
    { const it = E.get(ball), zr = E.get(pans.right), dish = zr && zr.parent;
      if (dish && it.parent === dish.parent) { const ii = it.parent.children.indexOf(it), di = it.parent.children.indexOf(dish);
        ok(ii >= 0 && di >= 0 && ii < di, label + host + ": Part3 item nestled behind the dish (seated in the pan, not on top)"); } }
    // second item cannot occupy the same pan
    ok(await until(() => E.get(book)._drag.enabled, 12000), label + host + ": book enabled");
    if (testWrong) { dragToZone(book, pans.right); ok(!I.isLocked(book), label + host + ": second item rejected from occupied pan"); }
    dragToZone(book, pans.left);
    ok(await until(() => I.isLocked(book), 4000), label + host + ": book placed");
    ok(await until(() => (elById(bookAns).listeners.click || []).length > 0, 15000), label + host + ": answers enabled");
    // instruction must advance per phase (regression guard: setText took an id, not a rec, so every update was a silent no-op)
    const instrNode = nid(f.instructionText), instrRec = instrNode && E.get(instrNode);
    const instrText = instrRec && instrRec._tmpInner ? instrRec._tmpInner.textContent : "";
    ok(instrText === f.instruction5, label + host + ": instruction advanced to Part3 answer ('" + f.instruction5 + "', got '" + instrText + "')");
    // text must be vertically CENTERED so descenders (g/y/p/j) aren't clipped by the tight box + overflow:hidden
    ok(instrRec && instrRec.el.style.alignItems === "center", label + host + ": instruction text vertically centered (descenders not clipped)");
    const bookLighter = weightOf(book) < weightOf(ball);
    const correctIsBook = answerMode === 0 ? bookLighter : !bookLighter;
    // spec #14: selecting an answer must not fade or shrink either item — capture state pre-answer
    const ansImgs = [nid(f.bookImage) || book, nid(f.ballImage) || ball];
    const ansBefore = ansImgs.map((id) => E.get(id).rt.sx);
    if (testWrong) {
      // wrong answer -> Try Again x3, then correct; must not duplicate handlers
      click(correctIsBook ? ballAns : bookAns);
      const tryAgain = nid(f.tryAgainButton);
      for (let k = 0; k < 3; k++) {
        ok(await until(() => E.isActive(tryAgain), 12000), label + host + ": Try Again #" + (k + 1));
        click(tryAgain);
        ok(await until(() => (elById(bookAns).listeners.click || []).length > 0 && E.get(bookAns)._btn.interactable, 12000), label + host + ": answers re-enabled #" + (k + 1));
        if (k < 2) click(correctIsBook ? ballAns : bookAns);
      }
    }
    const selIdx = correctIsBook ? 0 : 1;
    const selImg = ansImgs[selIdx], otherImg = ansImgs[1 - selIdx];
    click(correctIsBook ? bookAns : ballAns);
    // tap feedback: the chosen item gets a SOLID glow (drop-shadow, NOT the old pulse class) and its
    // sprite is never swapped; the OTHER item dims a little (opacity < 1) but must not glow.
    ok(/drop-shadow/.test(E.get(selImg).el.style.filter || ""), label + host + ": tapped item shows a solid red/green glow");
    ok(!E.get(selImg).el.classList.contains("rb-answer-glow"), label + host + ": glow is solid (no pulse animation)");
    ok(parseFloat(E.get(otherImg).el.style.opacity || "1") < 1, label + host + ": non-tapped item dims a little while the other glows");
    ok(!/drop-shadow/.test(E.get(otherImg).el.style.filter || ""), label + host + ": non-tapped item does not glow");
    ok(await until(() => E.isActive(nextP3), 12000), label + host + ": correct -> Part3 Next");
    // the little "pop" must SETTLE back — the tapped item returns to its pre-answer resting size
    ok(Math.abs(E.get(selImg).rt.sx - ansBefore[selIdx]) < 0.01, label + host + ": tapped-item pop settled back to resting size (" + ansBefore[selIdx] + ")");
    // the Heavier(down) arrow must sit on the same side as the heavier ITEM's ACTUAL placed position
    // (derived from the live item, not an assumed side) — the hint follows the child's placement.
    { const a1 = nid(f.arrow1); if (a1 && E.isActive(a1)) {
        const heavierItem = weightOf(ball) >= weightOf(book) ? ball : book;
        const itemLeft = E.centerLogical(heavierItem).x < 960, arrowLeft = E.centerLogical(a1).x < 960;
        ok(itemLeft === arrowLeft, label + host + ": Heavier arrow on the heavier item's actual side (item " + (itemLeft ? "L" : "R") + ", arrow " + (arrowLeft ? "L" : "R") + ")"); } }
    click(nextP3);
    ok(await until(() => E.get(p4a)._drag.enabled && RB.gmByHost[host].diagnostics().ready4, 22000), label + host + ": Part4 ready");
    // the Part-4 drag-guide hand is authored under Part 3 (hidden here); it must be re-hosted on the
    // level root so it actually shows. When it appears, every ancestor must be visible.
    { const gh = nid(f.ghostHand);
      if (gh && await until(() => E.isActive(gh), 2500)) {
        const vis = (id) => { let r = E.get(id); while (r) { if ((r.node && r.node.active === false) || (r.el && r.el.style.display === "none")) return false; r = r.parent; } return true; };
        ok(vis(gh), label + host + ": Part-4 drag-guide hand visible (re-hosted off the hidden Part 3)"); } }
    // Part 4 drop targets must be invisible hit areas, not pre-placed item sprites (Bug D)
    Object.keys(CFG.baskets).filter((z) => nid(CFG.baskets[z].gameManager) === host && CFG.baskets[z].isPart4).forEach((z) => {
      const marker = nid(CFG.baskets[z].basketImage) || z, mel = E.get(marker).el;
      ok(mel.style.backgroundImage === "none", label + host + ": Part4 target " + marker + " sprite hidden");
      ok(mel.getBoundingClientRect().width > 10, label + host + ": Part4 target " + marker + " keeps hit area");
    });
    const lighter = weightOf(p4a) < weightOf(p4b) ? p4a : p4b;
    const heavier = lighter === p4a ? p4b : p4a;
    if (testWrong) {
      dragToZone(lighter, trolleyDrop);                        // lighter on wagon = wrong
      ok(RB.gmByHost[host].diagnostics().placed4 === 0, label + host + ": wrong Part4 drop rejected");
      await env.advance(700);                                   // live weighing reminder now up
      // the wrongly-dropped item must leave the top drag layer so it can't render above/outside the hint
      ok((E.get(lighter).parent || {}).id !== "rb_drag_layer", label + host + ": wrong-drop item off drag layer during hint");
      // the wrong-drop hint is the LIVE Part-3 weighing (part3 shown, part4 hidden) tilted to the
      // child's placement — NOT a fixed picture. Heavier arrow must sit on the heavier item's real side.
      { const p3 = nid(f.part3Object), p4 = nid(f.part4Object), a1 = nid(f.arrow1);
        ok(E.isActive(p3) && !E.isActive(p4), label + host + ": wrong-drop shows the live weighing (part3 on, part4 off)");
        // the weighing is a gamified CARD, not full-screen: part3 scaled down, framed, over a dimmed level
        const pr = E.get(p3);
        ok(pr.rt.sx < 0.9 && pr.el.classList.contains("rb-hint-card"), label + host + ": hint is a framed card (part3 scaled + carded)");
        const kids = (pr.parent && pr.parent.el.children) || [];
        const bd = (Array.isArray(kids) ? kids : Array.from(kids)).find((c) => (c.className || "").includes("rb-hint-backdrop"));
        ok(!!(bd && bd.style.display !== "none"), label + host + ": blurred scene backdrop behind the hint card");
        if (a1 && E.isActive(a1)) { const hv = weightOf(ball) >= weightOf(book) ? ball : book;
          ok((E.centerLogical(hv).x < 960) === (E.centerLogical(a1).x < 960), label + host + ": wrong-hint Heavier arrow matches the child's placement"); }
        // the hint is neutral: BOTH items plain (no leftover answer glow, no dim) so neither is favoured
        [nid(f.bookImage), nid(f.ballImage)].forEach((im) => { if (!im) return; const el = E.get(im).el;
          ok(!el.style.filter && String(el.style.opacity || "1") === "1", label + host + ": hint item " + im + " plain (no glow/dim)"); }); }
      await env.advance(3200);                                  // rest of reminder + restore
      ok(E.isActive(nid(f.part4Object)) && !E.isActive(nid(f.part3Object)), label + host + ": Part4 restored after wrong hint");
      ok(RB.gmByHost[host].diagnostics().placed4 === 0, label + host + ": item restored after wrong Part4");
    }
    dragToZone(lighter, basketDrop);
    ok(await until(() => RB.gmByHost[host].diagnostics().placed4 >= 1, 4000), label + host + ": lighter->basket");
    // placed item must NESTLE inside the basket: parented into the SAME (back) layer as its ghost
    // marker, last sibling there (above ghost + decorations), while the FRONT basket art is a later
    // sibling of that layer — so the front rim draws over the item's lower edge (tucked in, not
    // pasted on the front) yet it stays visible where the ghost peeked above the rim.
    { const lr = E.get(lighter), slot = E.get(basketDrop);
      ok(slot && lr.parent === slot.parent, label + host + ": placed item nestled in its ghost marker's (back) layer");
      const back = lr.parent, grand = back && back.parent, bi = grand ? grand.children.indexOf(back) : -1;
      ok(bi >= 0 && bi < grand.children.length - 1, label + host + ": front basket art draws over the nestled item (item behind front layer)");
      ok(back.children[back.children.length - 1] === lr, label + host + ": placed item above ghost/decorations within the back layer"); }
    dragToZone(heavier, trolleyDrop);
    ok(await until(() => RB.gmByHost[host].diagnostics().placed4 >= 2, 4000), label + host + ": heavier->wagon");
    // placed items must be SIZED to their ghost marker's box (so they sit INSIDE the basket/wagon,
    // never overflowing onto the rim). rendered = itemSizeDelta * scale must fit within the marker.
    [[lighter, basketDrop, "basket"], [heavier, trolleyDrop, "wagon"]].forEach(([it, slot, where]) => {
      const ir = E.getRect(it), sr = slot && E.getRect(slot), r = E.get(it);
      if (ir && sr) {
        const rw = ir.sdX * r.rt.sx, rh = ir.sdY * r.rt.sx;
        ok(rw <= sr.sdX + 1 && rh <= sr.sdY + 1, label + host + ": " + where + " item fits its marker (" + Math.round(rw) + "x" + Math.round(rh) + " <= " + Math.round(sr.sdX) + "x" + Math.round(sr.sdY) + ")");
        ok(E.get(slot).el.style.backgroundImage === "none", label + host + ": " + where + " ghost marker hidden after placement");
      }
    });
    if (f.isLastLevel) ok(await until(() => E.isActive(nid(f.finalScreen)), 8000), label + host + ": final screen");
    else ok(await until(() => E.isActive(nextP4), 8000), label + host + ": Part4 complete -> Next");
    await env.advance(2000);
    ok(E.confettiCount() === 0, label + host + ": confetti cleared (" + E.confettiCount() + ")");
    return { nextP4, isLast: !!f.isLastLevel };
  }

  const order = ["n5_Tutorial", "n105_Level_1", "n206_Level_2", "n307_Level_3", "n410_Level_4"];
  const levels = full ? order : ["n5_Tutorial"];
  for (let i = 0; i < levels.length; i++) {
    const host = levels[i];
    ok(await until(() => E.isActive(host), 8000), label + host + ": active");
    const res = await playLevel(host, i === 0 || i === 2);
    if (!res.isLast && full) { click(res.nextP4); ok(await until(() => !E.isActive(host), 6000), label + host + ": unmounted after Next"); }
  }
  if (full) ok(E.isActive("n515_Final_screen"), label + "Final screen reached");

  ok(consoleErrors.length === 0, label + "no console errors (" + consoleErrors.slice(0, 2).join(" / ") + ")");
  return H;
}

(async function run() {
  console.log("=== Royal Bloom smoke test (viewport matrix) ===");

  // full flow on the primary viewport, tutorial-only quick pass on the rest
  for (let i = 0; i < VIEWPORTS.length; i++) {
    const vp = VIEWPORTS[i];
    console.log("-- " + vp.name + (i === 0 ? " (full 5-level flow)" : " (tutorial pass)"));
    await runViewport(vp, i === 0);
  }

  // ---- lifecycle / leak stability: replay Tutorial 20x on a fresh boot ----
  console.log("-- leak stability: 20x Tutorial replay");
  const H = boot(VIEWPORTS[0]);
  const { env, E } = H;
  await env.advance(50);
  env.window.dispatchEvent(env.makeEvent("pointerdown", { clientX: 5, clientY: 5 }));
  const gm = H.RB.gmByHost["n5_Tutorial"];
  E.setActive("n5_Tutorial", true);
  await env.advance(300);
  const baseNodes = env.document.querySelectorAll(".node").length;
  for (let i = 0; i < 20; i++) { gm.dispose(); gm.start(); await env.advance(600); }
  gm.dispose();
  await env.advance(2500);
  const endNodes = env.document.querySelectorAll(".node").length;
  ok(endNodes === baseNodes, "DOM .node count stable across 20 replays (" + baseNodes + " -> " + endNodes + ")");
  ok(E.confettiCount() === 0, "confetti 0 after replays");
  ok(E.activeTweenCount() <= 4, "tweens at baseline after dispose (" + E.activeTweenCount() + ")");
  ok(env.pendingTimers() <= 6, "timers near-zero after dispose (" + env.pendingTimers() + ")");

  // ---- equal-weight distinct result ----
  ok(H.C.compareWeights(0.5, 0.5) === 0 && H.C.compareWeights(0.5, 1) === -1 && H.C.compareWeights(1, 0.5) === 1, "compareWeights: equal/less/greater distinct");

  // ---- balance-scale fidelity (Unity-authored poses; root/support never move) ----
  console.log("-- balance-scale animator");
  {
    const S = boot(VIEWPORTS[0]);
    await S.env.advance(50);
    const EE = S.E, anim = S.RB.scaleByNode["n36_controller"];
    const n = anim.nodes();
    const POS_T = 0.5, ROT_T = 0.05;
    const rectRot = (id) => EE.getRect(id).rot;
    const rootRest = JSON.stringify(EE.getRect(n.rootId)), supRest = JSON.stringify(EE.getRect(n.support));
    async function settle(st) { anim.playState(st); await S.env.advance(1200); }

    await settle("leftDown");
    ok(rectRot(n.rootId) === 0, "scale root rotation stays 0 in LeftDown");
    ok(JSON.stringify(EE.getRect(n.support)) === supRest, "support base unchanged in LeftDown");
    ok(Math.abs(rectRot(n.beam) - 8) <= ROT_T, "beam reaches +8 in LeftDown (" + rectRot(n.beam) + ")");
    ok(Math.abs(EE.getRect(n.leftPan).ay - (-27)) <= POS_T, "left pan Y = -27 in LeftDown");
    ok(Math.abs(EE.getRect(n.rightPan).ay - 65) <= POS_T, "right pan Y = 65 in LeftDown");

    await settle("rightDown");
    ok(rectRot(n.rootId) === 0, "scale root rotation stays 0 in RightDown");
    ok(JSON.stringify(EE.getRect(n.support)) === supRest, "support base unchanged in RightDown");
    ok(Math.abs(rectRot(n.beam) - (-8)) <= ROT_T, "beam reaches -8 in RightDown (" + rectRot(n.beam) + ")");
    ok(Math.abs(EE.getRect(n.leftPan).ay - 65) <= POS_T, "left pan Y = 65 in RightDown");
    ok(Math.abs(EE.getRect(n.rightPan).ay - (-27)) <= POS_T, "right pan Y = -27 in RightDown");

    await settle("balanced");
    ok(Math.abs(rectRot(n.beam) - 0) <= ROT_T, "beam rotation restored to 0 in Balanced");
    ok(Math.abs(EE.getRect(n.leftPan).ay - 18) <= POS_T && Math.abs(EE.getRect(n.rightPan).ay - 18) <= POS_T, "both pans Y restored to 18 in Balanced");
    ok(rectRot(n.rootId) === 0 && JSON.stringify(EE.getRect(n.rootId)) === rootRest, "controller root fully unchanged across states");
    ok(JSON.stringify(EE.getRect(n.support)) === supRest, "support base fully unchanged across states");

    // 50x balanced->leftDown->rightDown->balanced: no drift
    const balBeam = EE.getRect(n.beam), balLeft = EE.getRect(n.leftPan), balRight = EE.getRect(n.rightPan);
    for (let i = 0; i < 50; i++) { await settle("leftDown"); await settle("rightDown"); await settle("balanced"); }
    ok(Math.abs(EE.getRect(n.beam).ax - balBeam.ax) <= POS_T && Math.abs(EE.getRect(n.beam).ay - balBeam.ay) <= POS_T && Math.abs(EE.getRect(n.beam).rot) <= ROT_T, "no beam drift after 50 cycles");
    ok(Math.abs(EE.getRect(n.leftPan).ay - balLeft.ay) <= POS_T && Math.abs(EE.getRect(n.rightPan).ay - balRight.ay) <= POS_T, "no pan drift after 50 cycles");
    ok(rectRot(n.rootId) === 0 && JSON.stringify(EE.getRect(n.support)) === supRest, "root+support still fixed after 50 cycles");

    // mid-animation state change: no jump (pose stays within authored envelope)
    anim.playState("balanced", true); anim.playState("leftDown");
    await S.env.advance(200); anim.playState("rightDown");   // interrupt mid-way
    const mid = EE.getRect(n.beam).rot;
    ok(mid >= -8.05 && mid <= 8.05, "beam rotation stays within authored envelope across mid-animation switch");
    await S.env.advance(1000);
    ok(Math.abs(EE.getRect(n.beam).rot - (-8)) <= ROT_T, "beam settles at -8 after interrupted switch to RightDown");

    // dropped items in a pan stay upright (rotation 0) even while the beam is tilted
    anim.playState("leftDown", true);
    ok(EE.getRect("n43_Image").rot === 0 && EE.getRect("n49_Image_1").rot === 0, "pan drop zones (dropped-item parents) stay upright while beam tilts");
  }

  await env.advance(100);
  ok(rejections === 0, "no unhandled promise rejections (" + rejections + ")");

  console.log("\n--- smoke result ---");
  console.log("PASS " + pass + "   FAIL " + fail);
  if (fail) { console.log("\nFailures:\n  - " + failures.join("\n  - ")); process.exit(1); }
  console.log("SMOKE PASSED.");
})().catch((e) => { console.error("SMOKE CRASHED:", e); process.exit(1); });
