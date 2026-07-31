# Royal Bloom — Fix Prompt + QA Checklist (QA round: 2026-07-28)

Two parts:
- **Part A — the prompt** to hand to a dev/agent (paste-ready, with code pointers + acceptance criteria).
- **Part B — the QA checklist** to verify the build after the fixes land.

Source: QA pass on Tutorial + L1 (lantern/feather, bell/ribbon, crown/ribbon). 5 defects, 2 suggestions.

## Status — all seven implemented (gates green: static checks pass, smoke **1094 / 0**)

| # | What shipped |
|---|---|
| A1 | `AudioManager` now has per-channel levels (BGM 0.18 / VO 1.0 / SFX 0.7) and ramps the music down to 0.07 while narration plays, restoring it on end/stop/tab-return |
| A2 | `E.preloadSprites()` warms a subtree's lazily-painted art (and records natural sizes); Part 1/2/3/4 reveals await it, so a card never shows before its item |
| A3 | The dead second after "Oops!" is gone — the button pops in ~0.15 s later, at a resting scale captured once so repeated retries can't shrink it |
| A4 | Items are seated by the **bottom of their visible art** against the container, not centred on a drop point — see the corrected root cause below |
| A5 | The fit routine is the sole owner of the stage transform, fits to the viewport element's live box, and re-asserts on resize / orientation / pageshow / visibility / visualViewport / ResizeObserver |
| A6 | Sparkle burst removed from the name-scroll reveal only |
| A7 | Correct basket/wagon drops play a data-driven landing sound (`f.dropSFX`, falling back to the level's sparkle clip) |

**A4's root cause was not what this prompt first guessed.** It is not letterbox padding: the ribbon's sprite fills its box exactly. Every item was centred on the same drop point, so the *bottom* of a short item landed higher than a tall one. Measured against the dish centre line, the tall items (bell/crown/vase, box 197 px) sat at **+17…+28 px** — inside the bowl — while the ribbon (box 140 px) sat at **−1 px** (left pan) and **−11 px** (right pan), i.e. at or above the bowl. Hence the float, and hence why only the ribbon showed it. Seating is now keyed to the container (`SEAT_DEPTH = 16` px below the dish centre for every item), which moves the tall items ≤ 10 px and brings the ribbon 17–27 px down. The same bottom-alignment is applied inside the basket/wagon, where it drops the two worst-fitting items (L2 bell, L4 vase) ~23 px onto the bed instead of leaving them hovering.

**A5 is a hardening, not a confirmed fix.** Nothing in the code writes the stage transform except the fit routine, so the reported framing change could not be reproduced from source — the likely cause is a stale scale after a viewport change that fires no `resize` (mobile address bar, restored tab). All those signals now re-fit, and the smoke test asserts the framing is unchanged after a full playthrough. **If it recurs, capture the window size and the screen it happened on.**

Regression asserts were added to `qa/smoke-test.mjs` for all seven (audio levels + duck/restore, cards painted when shown, Try-Again gap measured in ms, art-bottom seating per pan per level, framing stability + refit on resize/visibility, zero confetti on the naming screen, SFX fired per drop). The suite went 921 → 1094 asserts; the "909" in `QA-CHECKLIST.md` was stale before this round.

---

# Part A — Fix prompt

> **Prompt (copy from here):**
>
> You are working on Royal Bloom, a balance-scale learning game (fixed 1920×1080 logical stage, uniformly scaled and letterbox-centered; vanilla JS; `js/engine.js` renderer, `js/controllers.js` flow, `js/audio-manager.js` audio, `js/data.js` authored layout).
>
> Fix the 5 defects and implement the 2 improvements below. For each: make the smallest change that fixes the **root cause** (not a per-level patch), keep it data-driven so it holds for Tutorial + Levels 1–4, and add a short comment saying why. Do not change the authored layout in `js/data.js` unless a fix genuinely belongs there. After the changes, run `node scripts/check-all.mjs`, `node qa/smoke-test.mjs` and `node --check js/*.js`, and update `QA-CHECKLIST.md` §7 (Regression watch) with one line per fix.

## A1 — BUG: BGM is overpowering (drowns the narration) — P0

**Symptom:** background music plays at full volume; VO and SFX are hard to hear underneath it.

**Root cause:** `js/audio-manager.js` never sets `volume` on any channel — BGM, narration and SFX all play at `1.0`. `playBGM()` ([js/audio-manager.js:76-85](js/audio-manager.js#L76-L85)) just calls `safePlay(bgm)`.

**Fix:**
- Give the three channels distinct levels — BGM ≈ `0.18`, narration ≈ `1.0`, SFX ≈ `0.7` — as named constants at the top of the module.
- **Duck** the BGM while narration is active: drop to ≈ `0.07` on `startNarration()`, ramp back to the base level on `stopNarration()` and on the narration element's `ended` event. Ramp over ~0.25 s (setInterval/rAF step is fine) so it doesn't click.
- Keep the duck state correct across overlapping calls (a new narration while ducked must not double-duck or leave BGM stuck low), across `visibilitychange` resume ([js/audio-manager.js:126-129](js/audio-manager.js#L126-L129)), and across `setMuted()`.
- Expose `setBGMVolume(v)` and report the current volume in `stats()` so QA can read it from the console.

**Acceptance:** with a phone speaker at normal volume, every VO line is clearly intelligible over the music; music is present but sits behind the voice; BGM returns to its base level within ~0.5 s of the VO ending; no clicks, no stuck-quiet music after several phases.

## A2 — BUG: items appear late inside the item cards — P0

**Symptom:** the blue item cards (and their name scrolls) show **empty** for a beat; the item art (lantern/feather/bell) pops in afterwards. Seen in Part 2 (both cards empty while both names were already readable) and in Part 4 (left card empty while the bell had appeared).

**Root cause:** the card container is activated and tweened in before its item sprite has loaded/decoded — level art is mounted lazily ([js/engine.js:207](js/engine.js#L207)), so on first visit the `background-image` is still fetching when `A(id, true)` + `doScale` run. See `startPart2()` ([js/controllers.js:364-374](js/controllers.js#L364-L374)) and `part4Flow()` ([js/controllers.js:637-641](js/controllers.js#L637-L641)) — both reveal `item3/item4` / `base3/base4` immediately.

**Fix:**
- Add a sprite-preload helper in the engine (e.g. `E.preloadSprites(ids)` → `Promise`) that resolves when the item images for the given nodes are decoded (`new Image()` / `img.decode()` with a hard timeout of ~1.5 s so a missing asset can never hang the flow).
- `await` it **before** the Part 2 and Part 4 card reveals, so card + item art appear as one unit. Same for the Part 3 item cards and the Part 1 box contents if they show the same lag.
- Best-effort: warm the next level's item sprites during the current level's idle time so the first visit is never the slow one.

**Acceptance:** on a hard-reload (cold cache) and on every level, a card is **never** visible while its item is missing; the item is fully drawn on the first frame the card is visible; the flow still advances if a sprite fails to load.

## A3 — BUG: "Try Again" button appears late after a wrong answer — P1

**Symptom:** "Oops! Try again." finishes typing and the child is left with no button for about a second.

**Root cause:** `wrongAnswerFlow()` adds a full second of dead time after the message: `await typeText(INSTR[6], AUD[6]); await S.wait(1); A(ID.tryAgain, true);` ([js/controllers.js:571-576](js/controllers.js#L571-L576)).

**Fix:** show the button as the message lands — cut the wait to ~0.15–0.2 s, or reveal the button when `typeText` resolves and give it the pop-in/hint treatment the Next button already gets (`showNextButtonHint`). Keep the existing `guard2` double-click lock behaviour intact.

**Acceptance:** the Try Again button is visible and tappable within ~0.25 s of the "Oops! Try again." line completing, on every level, on repeated wrong answers.

## A4 — BUG: the ribbon floats above the pan — P1

**Symptom:** on the balance scale the ribbon sits in mid-air above the dish (a visible gap under it), while the bell/crown/lantern seat correctly. Reproduced with bell+ribbon and crown+ribbon; the ribbon is wrong on both the left and the right pan.

**Root cause (as measured, superseding this prompt's first guess):** `placeOnPan()` centred every item on the drop point with one hard-coded lift — `E.setStageLocalPos(E.get(itemId), sc.x, sc.y - 14)`. Centring makes the *bottom* edge depend on the item's box height, so the short ribbon (box 140 px) ended up at −1 px / −11 px relative to the dish centre while the tall bell/crown/vase (197 px) sat at +17…+28 px. Only the ribbon floats because only the ribbon is short — it is not a padding problem (its sprite fills its box exactly).

**Fix:** seat items by **visible geometry, not a constant** — measure the item's visible art (`E.artRectLogical`, which accounts for "contain" letterboxing when the sprite's natural size is known) and align its **bottom edge** to a fixed depth below the dish's centre line, so the bowl front laps the same amount over every item whatever its height. Same treatment inside the basket/wagon (align the art bottom to the ghost marker's bottom). No level-specific special cases; one constant (`SEAT_DEPTH`) for all ten items.

**Acceptance:** every item on every level visually rests **in** the pan — bowl rim laps over its lower edge, no gap under it, no part poking below the pan — on both the left and right pan, before and after the beam tilts. Same for basket and wagon.

## A5 — BUG: screen resolution / framing changes mid-session — P1

**Symptom:** the stage framing changed between screens — later screens looked zoomed/cropped compared to the intro (art cut off at the edges, different apparent resolution).

**Where to look:** the stage is a fixed `1920×1080` box scaled by JS ([css/style.css:31-38](css/style.css#L31-L38), `LOGICAL_W/LOGICAL_H` at [js/engine.js:12](js/engine.js#L12), the transform write at [js/engine.js:148](js/engine.js#L148)). Suspects, in order:
1. Something other than the fit routine writing `#stage.style.transform` (search all writes to `stage.style.transform` and any `E.setScale` on the stage/root node).
2. The Part-4 hint card: `.rb-hint-card` scales/frames Part 3 and `.rb-hint-backdrop` applies `transform: scale(1.14)` ([css/style.css:102-126](css/style.css#L102-L126)) — verify neither leaves a residual transform on a real gameplay node after dismissal.
3. God Mode (`Shift+G`) move/scale edits leaking into the normal build.
4. The fit recompute not re-running on `resize` / `orientationchange` / mobile address-bar collapse (`dvh`), leaving a stale scale.

**Fix:** make the fit routine the **single owner** of the stage transform, re-assert it on `resize`/`orientationchange`/`visibilitychange`, and ensure every temporary visual (hint card, backdrop, celebration) restores the exact transform it borrowed. Add a smoke assertion that the stage transform after a full playthrough equals the transform computed from the viewport size.

**Acceptance:** the visible framing is identical on every screen from intro to final for a fixed window size; resizing rescales cleanly with no clipping and no horizontal scroll; nothing is cropped after the Part-4 hint card is dismissed.

## A6 — IMPROVEMENT: drop the sparkle burst on the item-name screen

Part 2 fires a golden confetti burst per name scroll — `E.confettiBurst(rootId, confettiToken)` at the end of `openScroll()` ([js/controllers.js:403](js/controllers.js#L403)). QA finds it noisy on the naming screen, where the name is what should be read.

**Fix:** remove the burst from the name-scroll reveal only. Keep the scroll unfurl + name pop/fade, and keep the bursts everywhere else (box opening, basket/wagon drop, final screen). Do not disable `confettiBurst` globally.

**Acceptance:** no stars appear while item names reveal; box-open, Part-4 drop and final-screen bursts are unchanged.

## A7 — IMPROVEMENT: add a SFX when an item lands in the basket / wagon

A correct Part 4 drop currently fires only a sparkle burst — no sound ([js/controllers.js:704](js/controllers.js#L704)).

**Fix:** play a short one-shot on a correct drop via `Audio.playSFX(...)`, reusing an existing clip from `assets/audio/` (`magical.mp3` is the closest fit) rather than adding a new asset unless one is provided; source it from data (like `boxOpenSFX` at [js/controllers.js:307](js/controllers.js#L307)) instead of hard-coding a path. Respect the SFX volume from A1, don't let it collide with the VO, and rely on the existing 120 ms debounce. Optionally differentiate basket vs wagon if two suitable clips exist.

**Acceptance:** each correct basket/wagon drop plays one clear, short sound; two quick drops don't stack into noise; a wrong drop still plays only the existing wrong-drop SFX.

---

# Part B — QA checklist for this round

Run **§0 gates first**, then §1 (this round's fixes), then the §2 regression sweep. Anything unchecked is a blocker.

## B0. Automated gates

| Command | Expected |
|---|---|
| `node scripts/check-all.mjs` | `ALL STATIC CHECKS PASSED` |
| `node qa/smoke-test.mjs` | `SMOKE PASSED`, 0 fail |
| `node --check js/*.js` | no syntax errors |

- [ ] All three gates pass
- [ ] `index.html` hard-reloaded (**Ctrl+Shift+R**), DevTools console → **no errors, no warnings**

## B1. This round's fixes

### Audio balance (A1)
- [ ] BGM is clearly **behind** the narration — every VO line intelligible at normal device volume
- [ ] BGM **ducks** while narration plays and returns to level within ~0.5 s of it ending
- [ ] Ducking is smooth (no click/pop), and BGM is **never left stuck quiet** after many phases
- [ ] Tab-out → tab-in: BGM resumes at the correct level, not full volume
- [ ] SFX (box open, wrong answer, drop) audible but not louder than the voice
- [ ] Verified on **laptop speakers** and a **phone speaker**, not just headphones

### Item reveal timing (A2)
- [ ] **Cold cache, hard reload**: Part 2 cards appear **with** their items — never an empty blue card
- [ ] Part 3 cards appear with their items
- [ ] Part 4 cards appear with their items (both cards, not one-then-the-other)
- [ ] Name scroll never unfurls before its item art is drawn
- [ ] Verified on **Tutorial and all of L1–L4**, first visit each (first visit is the slow path)
- [ ] Throttled network (DevTools → Fast 3G): reveal still waits, flow never hangs

### Try Again timing (A3)
- [ ] Wrong answer → "Oops! Try again." → button visible within ~0.25 s of the line finishing
- [ ] Button is immediately tappable (hand cursor), retry restores both items un-dimmed, un-glowed
- [ ] Wrong **twice in a row**: button appears promptly both times; a correct answer still works after

### Items seated in pans / containers (A4)
- [ ] **Ribbon** rests inside the pan — no air gap under it — on the **left** pan and on the **right** pan
- [ ] Same check for lantern, feather, bell, crown, flowers, vase, paper fan (every item, every level)
- [ ] Items stay seated **after the beam tilts** and while the tilt animates
- [ ] No item pokes **below** the pan rim
- [ ] Part 4: items nestle inside basket and wagon — not floating on the front art, not vanishing behind it

### Stable framing / resolution (A5)
- [ ] Framing is **identical** on intro → Part 1 → 2 → 3 → 4 → final, at a fixed window size (compare screenshots)
- [ ] Nothing is cropped at the edges on any screen
- [ ] Part-4 wrong-drop hint card: on dismiss, the scene returns to **exactly** its prior framing (run twice)
- [ ] Resize wide / tall / square → stage rescales, letterbox-centered, **no horizontal scroll**, nothing clipped
- [ ] Phone/tablet landscape down to ~844×390: framing correct; address-bar collapse doesn't clip the stage
- [ ] Full playthrough then resize: still correct (no stale scale)
- [ ] God Mode off → learner build framing untouched

### Sparkles removed from the naming screen (A6)
- [ ] **No** star/sparkle burst while item names reveal, on every level
- [ ] Scroll still unfurls wide with a bounce; name still fades/pops in
- [ ] Bursts **still present**: box opening, correct Part-4 drop, final screen

### Drop SFX added (A7)
- [ ] Correct drop into the **basket** plays a short sound
- [ ] Correct drop into the **wagon** plays a short sound
- [ ] Two quick drops don't stack/overlap into noise
- [ ] Drop SFX doesn't drown or collide with the current VO line
- [ ] Wrong drop still plays only its existing SFX (no new sound on the wrong container)

## B2. Regression sweep (must stay fixed)

- [ ] Instruction bar: left-aligned, full opacity, updates every phase, **no clipped descenders**
- [ ] VO ↔ text sync: typing finishes as the voice finishes; correct clip for the shown text
- [ ] Each name matches its picture (Tutorial: Lantern + Feather; L1: Ribbon + Bell; …)
- [ ] Box tap: front box + lid wobble as one unit; box stays **100 % opaque**; scene doesn't shake
- [ ] Correct tap → green solid glow + pop; wrong tap → red + "Oops!"; other item fades; retry restores
- [ ] Heavier↓ / Lighter↑ arrows match the child's actual placement — test heavy item **left** and **right**
- [ ] Part-4 hint card = live weighing matching the child's placement; both items plain; dismisses cleanly
- [ ] Drag-guide hand appears in **both** Part 3 and Part 4
- [ ] Dragging is forgiving (drops when released near the pan / basket / wagon)
- [ ] Cursors: pointer on taps, grab on draggables, grabbing while dragging, no stuck cursor
- [ ] Exactly one genie, one set of hands, on every screen
- [ ] Next buttons advance exactly one step; rapid clicks never skip or double
- [ ] Final screen: golden stars burst across the scene; final narration plays
- [ ] No duplicate listeners/timers after repeated play; no console errors at any point

## B3. Coverage matrix

| | Tutorial | L1 | L2 | L3 | L4 |
|---|---|---|---|---|---|
| Desktop 1920×1080 | ☐ | ☐ | ☐ | ☐ | ☐ |
| Laptop 1440×900 | ☐ | ☐ | ☐ | ☐ | ☐ |
| Tablet landscape | ☐ | ☐ | ☐ | ☐ | ☐ |
| Phone landscape ~844×390 | ☐ | ☐ | ☐ | ☐ | ☐ |
| Safari / iOS (audio) | ☐ | ☐ | ☐ | ☐ | ☐ |

### Sign-off

| | Name | Date | Build |
|---|---|---|---|
| QA | | | |
| Approver | | | |
