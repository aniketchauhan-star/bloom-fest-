# Royal Bloom — QA Checklist

Balance-scale learning game (Tutorial + Levels 1–4). Use this to verify a build before release.
Tick every box. Anything unchecked is a blocker.

---

## 0. Automated gates (run first)

| Command | Expected |
|---|---|
| `node scripts/check-all.mjs` | `ALL STATIC CHECKS PASSED` |
| `node qa/smoke-test.mjs` | `SMOKE PASSED` (**1251 pass / 0 fail**) |
| `node --check js/*.js` | no syntax errors |

- [ ] Static checks pass
- [ ] Smoke (viewport matrix: desktop → laptop → tablet → phone-landscape) passes **1251 / 0**
- [ ] Open `index.html`, **hard-reload (Ctrl+Shift+R)**, open DevTools console → **no errors, no warnings**
- [ ] `file://` note: always hard-reload after a code change (browser caches old JS)

---

## 1. Global / cross-cutting (check on every screen)

- [ ] **Input**: mouse click, touch tap, pen/pointer, and keyboard all work
- [ ] **Cursor — taps**: hovering any button or tappable item shows the **hand (pointer)** cursor
- [ ] **Cursor — drag**: hovering a draggable item shows the **open-hand (grab)** cursor
- [ ] **Cursor — dragging**: while dragging, the cursor is the **closed hand (grabbing)** everywhere, and returns to normal on release (no stuck grabbing cursor)
- [ ] **Cursor — disabled**: non-interactive/greyed elements do **not** show a hand
- [ ] **No console errors/warnings** at any point
- [ ] **Smooth everywhere — no stutter**: tapping the box open, the sparkle bursts, dropping into the basket/wagon and the Part-4 finish (both containers burst at once) all run without a visible hitch; check on the slowest target device
- [ ] **Genie**: exactly one genie, one set of hands — no doubled/blurry duplicate (all screens)
- [ ] **Instruction bar**: left-aligned, full opacity, brown, updates every phase; **text fully shown — no clipped descenders** (the tails of g/y/p/j are not cut off), no clipped ascenders
- [ ] **Audio**: BGM loops after Let's Go; narration per phase; box/drop SFX; no overlap/stacking
- [ ] **Audio mix**: BGM bed 0.30, ducked 0.14 under narration, voice 1.0 — the music sits **behind** the voice — every VO line is clearly intelligible on a phone speaker; BGM **ducks** while narration plays and comes back within ~0.5 s (no click, never stuck quiet, correct level after a tab-out)
- [ ] **No empty containers**: on a **cold cache / hard reload**, every card, scroll, basket and wagon appears **with** its art — never an empty blue box that fills in a beat later (worst case: first visit to each level; re-check on a throttled connection)
- [ ] **VO ↔ text sync**: on every instruction, the typing is paced to the voice clip — the text finishes **as the voice finishes** (not way before/after); the correct clip plays for the shown text
- [ ] No duplicate listeners/timers after repeated play (drag, blur, revisit)

---

## 2. Responsive / devices

- [ ] Resize the window (wide, tall, square) → stage **scales to fit**, letterbox-centered, **no horizontal scroll**, nothing clipped
- [ ] Themed letterbox bars (dark `#14101f`), not black
- [ ] Phone / tablet **landscape**: full flow is playable at small sizes (down to ~844×390)
- [ ] Phone / tablet **portrait** (touch): a **"turn your device sideways"** prompt covers the screen; rotating to landscape reveals the game
- [ ] Mobile: no pinch-zoom, no rubber-band scroll, no text selection; address-bar collapse doesn't clip the stage (uses `dvh`)
- [ ] **Framing never changes mid-session**: at a fixed window size the visible framing is identical on intro → Part 1 → 2 → 3 → 4 → final (compare screenshots); nothing is cropped at the edges
- [ ] Framing survives **rotate, address-bar collapse, tab-out → tab-in, and the Part-4 hint card** — no stale/zoomed scale afterwards
- [ ] Notch / safe-area respected (no art under a notch)
- [ ] **Reduced motion** (OS setting on): animations calm, confetti hidden, glow does not pulse

---

## 3. Intro

- [ ] "Let's Go" button animates and starts background music
- [ ] Rapid multi-click does **not** activate the Tutorial twice

---

## 4. Per-screen flow — repeat for **Tutorial, Level 1, Level 2, Level 3, Level 4**

### Part 1 — the box
- [ ] Instruction: "Tap the box."
- [ ] The box is **tappable as soon as the line lands**, but after the Tutorial its pointing hand only appears once the child has been idle **~8 s** — and it **fades in**
- [ ] Tap the box → the **front box AND its lid wobble together** as one rigid unit
- [ ] Box **stays fully opaque** on tap — it does **not** dim / grey out
- [ ] The wobble does **not** shake the back box, glow, hidden items, or the whole scene; box does not slide
- [ ] Box opens with golden sparkles rising **from inside**; lid lifts; items pop out

### Part 2 — item names
- [ ] Each name scroll **unrolls like a scroll** — starts as a thin strip and unfurls **wide** (not just a uniform pop), with a slight bounce
- [ ] **No sparkles on this screen** — the name reveal is calm; stars still burst on box-open, Part-4 drops and the finale
- [ ] **Each name matches its picture** (e.g. Tutorial: Lantern + Feather; L1: Ribbon + Bell)
- [ ] Rollers stay attached to the parchment; both scrolls have identical layout; centered name fades in; nothing detached or doubled

### Part 3 — weigh & answer
- [ ] Drag each item onto a pan — **drops when released near the pan** (not only on exact overlap)
- [ ] Placed item **nestles inside the pan** (bowl rim laps over its lower edge); **no part pokes under the pan**
- [ ] **Every item rests in the bowl — no air gap under it.** Check the **short** items especially (the ribbon), on the **left** pan and the **right** pan, before and after the beam tilts
- [ ] **Nothing pokes out below the pan**: no sliver of the item (the ribbon's tail, the bell's flare) shows under the bowl's rim at either end — the bowl is shallow at its ends, so a wide item cannot sit as deep as a narrow one
- [ ] **No stray hint hand**: the drag-guide/idle hint hand appears only after the child waits, never from the first frame of a part, and never a hand belonging to another level
- [ ] Scale tilts so the **heavier side goes down** — matching where you placed the items
- [ ] A **drag-guide hand** demonstrates the drag if the child waits (Part 3) — **exactly one hand**, animated along the drag path; no faded hand pinned on the card, no dotted arrow
- [ ] **The hand fades in** where the drag starts — it never blinks on at full opacity
- [ ] **Every hand obeys one rule**: after the Tutorial each of the four hands (box, Next button, drag guide, answer) appears only after **~8 s of no input**, and no hand anywhere waits longer than 8 s
- [ ] **Idle timing**: in the **Tutorial** the hand demonstrates almost straight away; in **Levels 1–4** it stays away until the child has done nothing for **~8 s**, and any drag makes it disappear and restart the wait
- [ ] Instruction "Tap the heavier item" / "Tap the lighter item" matches the level
- [ ] **You can tap the item on the pan** to answer (not blocked by the dish); item shows the **hand** cursor
- [ ] **Correct** tap → vivid **green** solid glow + a little **pop** on that item (no pulsing)
- [ ] **Wrong** tap → vivid **red** solid glow + pop → "Oops! Try again" → retry works
- [ ] **Try Again appears as the "Oops!" text appears** (~0.15 s after the first letter) — **not** after the voice line has finished; it is immediately tappable and does not shrink across repeated retries
- [ ] Choosing one item **fades the other** a little while the chosen one glows; retry restores both
- [ ] Correct answer → **Heavier↓ / Lighter↑ arrows** appear over the pans, matching placement — verify with the heavy item on the **left** AND on the **right**
- [ ] Next button shows

### Part 4 — sort into basket & wagon
- [ ] The two item cards are shown; a **drag-guide hand** demonstrates the drag if the child waits (works in Part 4, not only Part 3) — again **exactly one hand**, no sticky hand/arrow overlay, and **~8 s of idle** after the Tutorial
- [ ] Drag lighter item → basket, heavier item → wagon (**drops when near**); items show the **hand** cursor
- [ ] Correct drop → item **nestles inside** the basket/wagon (behind the front art), sensible size, never floating on front or vanishing
- [ ] **L2 wagon**: the dropped bell is the **same size as the bell decoration already in the wagon** (both 146×197)
- [ ] **Same item = same size in every level**: an item that appears in more than one level (the bell in L1 + L2, the ribbon in L1 + L3) lands at the **identical size** each time — compare the bell in the L1 wagon with the L2 wagon
- [ ] Correct drop **plays a short sound** as the item lands (basket and wagon); two drops in a row don't stack into noise; the sound doesn't fight the VO
- [ ] The "ghost" hint item hides once the real item covers it
- [ ] **Wrong container → gamified HINT CARD:**
  - [ ] A centered **framed card** pops in over a **blurred copy of the scene** (not full-screen, not a flat dim)
  - [ ] The card shows the **live weighing** — genie + the same items on the pans — **tilted to match how the child weighed them** (heavy side down)
  - [ ] **Both items are plain** in the hint — no leftover green glow, neither faded
  - [ ] Heavier↓ / Lighter↑ arrows sit on the correct sides (match the child's placement)
  - [ ] Card dismisses cleanly; Part 4 returns exactly as it was; the mis-dropped item is back home
  - [ ] Drop wrong **twice in a row** → card shows correctly both times; a correct drop still works after
- [ ] **No star burst on an individual drop** — a single item landing is marked by its sound only
- [ ] Both placed (**stage complete**) → golden sparkle bursts from the basket & wagon
- [ ] Next button advances (or final screen on Level 4)

### Transitions
- [ ] Next buttons advance exactly one step; rapid clicks don't skip/double

---

## 5. Final screen (Level 4 only)

- [ ] Final picture shows
- [ ] Golden stars burst **across the scene** (not stuck in the bottom-left corner)
- [ ] Final narration plays

---

## 6. Layout / placement

- [ ] Part 3 item cards are fully on-screen, do **not** overlap, and **mirror each other** (balanced left/right, same height)
- [ ] Each card's item image is **centered** in its card
- [ ] Balance-scale pan dishes render at the intended size on every level
- [ ] Name-scroll rollers use the same layout on all 10 scrolls

---

## 7. Regression watch (previously-fixed — confirm they stay fixed)

- [ ] Instruction text not frozen / updates per phase
- [ ] No duplicate genie body or hands (tutorial + all levels)
- [ ] Box tap shakes only the front box + lid; **box stays 100% opaque**
- [ ] Answer tap: no size change; solid (non-pulsing) glow; other item fades; **item is tappable**
- [ ] Dragging is forgiving — releasing near a pan / basket / wagon drops the item
- [ ] Part 3 & Part 4 items sit *inside* their pan / basket / wagon (no overhang)
- [ ] Part-3 answer arrows match the actual placement on both sides
- [ ] Part-4 wrong hint = live weighing that matches the child's placement (never a fixed/mirrored picture)
- [ ] Drag-guide hand appears in **both** Part 3 and Part 4 (was hidden in Part 4), and is the **only** hand on screen
- [ ] Final stars burst over the scene
- [ ] Hand cursor on every interactive element; grabbing while dragging; no stuck cursor
- [ ] BGM is a quiet bed and ducks under narration (it used to play at full volume and drown the voice)
- [ ] Cards/containers are never revealed before their art is drawn (lazy-painted sprites are warmed first)
- [ ] Try Again appears with the "Oops!" line, not a second after it
- [ ] **Short items (ribbon) rest in the pan / basket / wagon** — seating is keyed to the container, not to the item's box height, so no item can float
- [ ] Stage framing is owned solely by the fit routine and re-asserted on resize / rotate / tab-return
- [ ] Item-name screen has no sparkle burst; every other burst still fires
- [ ] Basket + wagon drops play a landing sound

---

## 8. God Mode (dev/QA overlay — must be absent from the learner build)

- [ ] Shift+G toggles the God Mode overlay
- [ ] God Mode edits (move/scale/delete) reset when it is turned off — the learner build is untouched
- [ ] The shipped/learner build shows **no** God Mode UI

---

### Sign-off

| | Name | Date | Build |
|---|---|---|---|
| QA | | | |
| Approver | | | |
