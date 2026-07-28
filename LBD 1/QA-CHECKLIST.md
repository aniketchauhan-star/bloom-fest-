# Royal Bloom — QA Checklist

Balance-scale learning game (Tutorial + Levels 1–4). Use this to verify a build before release.
Tick every box. Anything unchecked is a blocker.

---

## 0. Automated gates (run first)

| Command | Expected |
|---|---|
| `node scripts/check-all.mjs` | `ALL STATIC CHECKS PASSED` |
| `node qa/smoke-test.mjs` | `SMOKE PASSED` (**909 pass / 0 fail**) |
| `node --check js/*.js` | no syntax errors |

- [ ] Static checks pass
- [ ] Smoke (viewport matrix: desktop → laptop → tablet → phone-landscape) passes **909 / 0**
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
- [ ] **Genie**: exactly one genie, one set of hands — no doubled/blurry duplicate (all screens)
- [ ] **Instruction bar**: left-aligned, full opacity, brown, updates every phase; **text fully shown — no clipped descenders** (the tails of g/y/p/j are not cut off), no clipped ascenders
- [ ] **Audio**: BGM loops after Let's Go; narration per phase; box/drop SFX; no overlap/stacking
- [ ] **VO ↔ text sync**: on every instruction, the typing is paced to the voice clip — the text finishes **as the voice finishes** (not way before/after); the correct clip plays for the shown text
- [ ] No duplicate listeners/timers after repeated play (drag, blur, revisit)

---

## 2. Responsive / devices

- [ ] Resize the window (wide, tall, square) → stage **scales to fit**, letterbox-centered, **no horizontal scroll**, nothing clipped
- [ ] Themed letterbox bars (dark `#14101f`), not black
- [ ] Phone / tablet **landscape**: full flow is playable at small sizes (down to ~844×390)
- [ ] Phone / tablet **portrait** (touch): a **"turn your device sideways"** prompt covers the screen; rotating to landscape reveals the game
- [ ] Mobile: no pinch-zoom, no rubber-band scroll, no text selection; address-bar collapse doesn't clip the stage (uses `dvh`)
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
- [ ] Tap the box → the **front box AND its lid wobble together** as one rigid unit
- [ ] Box **stays fully opaque** on tap — it does **not** dim / grey out
- [ ] The wobble does **not** shake the back box, glow, hidden items, or the whole scene; box does not slide
- [ ] Box opens with golden sparkles rising **from inside**; lid lifts; items pop out

### Part 2 — item names
- [ ] Each name scroll **unrolls like a scroll** — starts as a thin strip and unfurls **wide** (not just a uniform pop), with a slight bounce
- [ ] **Each name matches its picture** (e.g. Tutorial: Lantern + Feather; L1: Ribbon + Bell)
- [ ] Rollers stay attached to the parchment; both scrolls have identical layout; centered name fades in; nothing detached or doubled

### Part 3 — weigh & answer
- [ ] Drag each item onto a pan — **drops when released near the pan** (not only on exact overlap)
- [ ] Placed item **nestles inside the pan** (bowl rim laps over its lower edge); **no part pokes under the pan**
- [ ] Scale tilts so the **heavier side goes down** — matching where you placed the items
- [ ] A **drag-guide hand** demonstrates the drag if the child waits (Part 3)
- [ ] Instruction "Tap the heavier item" / "Tap the lighter item" matches the level
- [ ] **You can tap the item on the pan** to answer (not blocked by the dish); item shows the **hand** cursor
- [ ] **Correct** tap → vivid **green** solid glow + a little **pop** on that item (no pulsing)
- [ ] **Wrong** tap → vivid **red** solid glow + pop → "Oops! Try again" → retry works
- [ ] Choosing one item **fades the other** a little while the chosen one glows; retry restores both
- [ ] Correct answer → **Heavier↓ / Lighter↑ arrows** appear over the pans, matching placement — verify with the heavy item on the **left** AND on the **right**
- [ ] Next button shows

### Part 4 — sort into basket & wagon
- [ ] The two item cards are shown; a **drag-guide hand** demonstrates the drag if the child waits (works in Part 4, not only Part 3)
- [ ] Drag lighter item → basket, heavier item → wagon (**drops when near**); items show the **hand** cursor
- [ ] Correct drop → item **nestles inside** the basket/wagon (behind the front art), sensible size, never floating on front or vanishing
- [ ] The "ghost" hint item hides once the real item covers it
- [ ] **Wrong container → gamified HINT CARD:**
  - [ ] A centered **framed card** pops in over a **blurred copy of the scene** (not full-screen, not a flat dim)
  - [ ] The card shows the **live weighing** — genie + the same items on the pans — **tilted to match how the child weighed them** (heavy side down)
  - [ ] **Both items are plain** in the hint — no leftover green glow, neither faded
  - [ ] Heavier↓ / Lighter↑ arrows sit on the correct sides (match the child's placement)
  - [ ] Card dismisses cleanly; Part 4 returns exactly as it was; the mis-dropped item is back home
  - [ ] Drop wrong **twice in a row** → card shows correctly both times; a correct drop still works after
- [ ] Both placed → golden sparkle bursts from the basket & wagon
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
- [ ] Drag-guide hand appears in **both** Part 3 and Part 4 (was hidden in Part 4)
- [ ] Final stars burst over the scene
- [ ] Hand cursor on every interactive element; grabbing while dragging; no stuck cursor

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
