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
- [ ] **Cursor — backgrounds**: on the **intro/title screen** the hand appears **only over the "Let's Go" button**, never over the background art. Same on every level — no hand over the box lid, the pan dish markers, or any backdrop. The hand must mean "pressing this does something"
- [ ] **Cursor — children**: hovering the *text inside* a button (e.g. the final button's "Next" label) still shows the hand, not an arrow
- [ ] **No native touch highlight — test on a real Android tablet.** Tap any card, scale item, box, or button: there must be **no translucent blue/grey box** flashing over it, and **no blue outline** left behind after the tap. The game's own feedback (the button darkening and sinking) is the only thing that should appear
- [ ] Long-press an item → **no iOS/Android callout menu**, no text selection, no magnifier
- [ ] Keyboard **Tab** still shows the amber focus ring (that ring must survive — only the *tap* highlight is suppressed)
- [ ] **Buttons press like real game buttons.** Press and *hold* a Next button or Try Again: the face **drops down onto its base, squashes slightly, and shades darker**, then springs back up on release. Verify it reacts **the moment the finger goes down — not when it is lifted** (this is the key check; the press feedback used to fire on release, so it was invisible on touch)
- [ ] The press treatment is applied to **exactly these 20 buttons and nothing else**: Try Again ×5 and Next Part 2/3/4 ×5. The **box, the two answer items and Let's Go are all excluded** and behave exactly as they always did
- [ ] **No glow anywhere on a button** — buttons are never haloed or lit up, idle or pressed. The only glow in the game is the green/red one on the two answer items when tapped
- [ ] **A quick stab of a tap still shows the pressed state** — tap as fast as you can and the dark/pushed-in look is still clearly visible (it is held ~140 ms minimum), then springs back
- [ ] **The press does not flicker or drop while held** — press and hold a *hopping* button (Try Again / Next): it must stay dark and pushed in for the whole hold, even though the button is shrinking and hopping under your finger
- [ ] Press-and-**slide-off**, then release anywhere → the button settles back to its light tone (never stuck dark); same after a system gesture or tab-switch interrupts the touch
- [ ] Keyboard: holding **Enter/Space** on a focused button shows the same dark-pressed tone, releasing restores it
- [ ] **Buttons look tappable when idle**: every in-game button waiting for a press (all three Next buttons, Try Again) **hops straight up and back** with a repeating springy bump (~10 px lift + swell, once every ~1.5 s). The movement is the whole invitation — nothing is painted onto the button
- [ ] The hop is **vertical only — buttons never rotate or tilt**; they stay square to the message bar and the scene behind them at every point in the bump
- [ ] **Let's Go is completely untouched** — the intro button behaves exactly as it always did: its own 0.8 ↔ 1.0 breathe and the original brief shade on click. **No hop, no drop-and-squash press, no glow.** Compare against an older build if in doubt
- [ ] Buttons **settle exactly** when they stop inviting — no button left mid-hop (raised or scaled) or stuck dark after a press, a phase change, or a level transition; replay a level and confirm its buttons are at their original size and position
- [ ] The **answer items** (the two items on the pans) are deliberately **excluded** — no bump, no glow, and **no press squash or darkening** when tapped (they are the draggable item nodes and must hold their exact size)
- [ ] **No console errors/warnings** at any point
- [ ] **Smooth everywhere — no stutter**: tapping the box open, the sparkle bursts, dropping into the basket/wagon and the Part-4 finish (both containers burst at once) all run without a visible hitch; check on the slowest target device
- [ ] **Genie**: exactly one genie, one set of hands — no doubled/blurry duplicate (all screens)
- [ ] **Instruction bar**: left-aligned, full opacity, brown, updates every phase; **text fully shown — no clipped descenders** (the tails of g/y/p/j are not cut off), no clipped ascenders
- [ ] **Audio**: BGM loops after Let's Go; narration per phase; box/drop SFX; no overlap/stacking
- [ ] **Every tap makes a sound** — pressing any button (Let's Go, box, Next, Try Again, and the two answer items) plays a short bright blip, and it lands **with the press, not the release**
- [ ] **Every drag makes a sound** — picking an item up plays a rising blip; setting it on a pan plays a falling "placed" blip; releasing it over nothing plays a low, soft blip and the item returns home
- [ ] **Interaction sounds are clearly audible** — obvious and easy to hear over the music bed on a **tablet/phone speaker at normal volume in a normal room**, not just on headphones. This is the check that matters; test it on the real target device, not a laptop
- [ ] Interaction blips are still **quieter than the voice** and never mask it; rapid taps/drags don't stack into noise (60 ms debounce)
- [ ] **The authored sounds are unchanged**: the **magical star-burst chime still plays when an item lands in the basket / wagon**, the box still opens with it, and a wrong container drop still plays the error clip. Every new interaction sound was added where there was **silence** — none replaced a sound that already played
- [ ] **Each newly-added interaction has its own CHARACTER, not just its own pitch** — they must not all read as "a beep". Confirm each is recognisable with your eyes shut:
  - [ ] button press → a crisp **click**
  - [ ] item picked up → a soft rising **swoosh** (noticeably slower to start than the click)
  - [ ] item placed on a pan → a wooden **knock**
  - [ ] released over nothing → a dull muffled **thud** (clearly "nothing happened")
  - [ ] correct answer → a bright **chime with a sparkle**
  - [ ] wrong answer → a comic **falling slide** (melodic — must not be confused with the dull thud)
  - [ ] stage cleared → a three-note **fanfare with a sparkle**
- [ ] Direction reads correctly by ear: good things **rise**, failures **fall**, milestones are a **phrase** rather than a single blip
- [ ] Interaction sounds work after a tab-out → tab-in, and are silent when muted
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
- [ ] The box is **tappable as soon as the line lands**, but after the Tutorial its pointing hand only appears once the child has been idle **~3 s** — and it **fades in**
- [ ] Tap the box → the **front box AND its lid wobble together** as one rigid unit
- [ ] Box **stays fully opaque** on tap — it does **not** dim / grey out
- [ ] The wobble does **not** shake the back box, glow, hidden items, or the whole scene; box does not slide
- [ ] Box opens with golden sparkles rising **from inside**; lid lifts; items pop out

### Part 2 — item names
- [ ] **Each scroll opens on its own spoken word.** The narration names both items in one line ("A lantern **and** a feather"); the first scroll must be unfurling as the first name is said and the second as the second name is said — the name is readable **while the word is still being spoken**, never after the line has moved on or finished
- [ ] Check the **second** name especially (Feather / Bell / Paper fan / Ribbon / Vase) — it used to land ~0.6–1.0 s late, and in the Tutorial only as the clip ran out
- [ ] Sync holds on **all five levels** (the clip is a different length on each: 2.9 s → 3.6 s) and on a **cold reload** (a slow first play must not shift the scrolls off the voice)
- [ ] Next button appears just **after** the naming line finishes — not during it, not long after
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
- [ ] **Every hand obeys one rule — 3 s of no input.** Stopwatch each of the four: the box hand, the **Next-button hand**, the drag guide, and the answer hand. **No hand anywhere waits longer than 3 s**, on any level including the Tutorial (whose authored 12 s Next hint and 5 s answer hint are both capped to it)
- [ ] **Idle timing**: in the **Tutorial** the drag hand demonstrates almost straight away; in **Levels 1–4** it stays away until the child has done nothing for ~3 s, and any drag makes it disappear and restart the wait
- [ ] Instruction "Tap the heavier item" / "Tap the lighter item" matches the level
- [ ] **You can tap the item on the pan** to answer (not blocked by the dish); item shows the **hand** cursor
- [ ] **Correct** tap → vivid **green** solid glow + a little **pop** on that item (no pulsing)
- [ ] **Wrong** tap → vivid **red** solid glow + pop → "Oops! Try again" → retry works
- [ ] **Try Again appears as the "Oops!" text appears** (~0.15 s after the first letter) — **not** after the voice line has finished; it is immediately tappable and does not shrink across repeated retries
- [ ] **Try Again keeps inviting the tap**: after it pops in it **hops** every ~1.5 s — it never goes static while the child is stuck. Confirm the hop keeps its rhythm across **3 retries in a row** and the button is exactly its original size and position each time (no growth/shrink/drift)
- [ ] Pressing Try Again **settles it instantly** — no half-hop or stuck pressed-down state left behind, and the button returns to its authored size before it hides
- [ ] Choosing one item **fades the other** a little while the chosen one glows; retry restores both
- [ ] Correct answer → **Heavier↓ / Lighter↑ arrows** appear over the pans, matching placement — verify with the heavy item on the **left** AND on the **right**
- [ ] Next button shows

### Part 4 — sort into basket & wagon
- [ ] The two item cards are shown; a **drag-guide hand** demonstrates the drag if the child waits (works in Part 4, not only Part 3) — again **exactly one hand**, no sticky hand/arrow overlay, and **~3 s of idle** after the Tutorial
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
- [ ] **The completion sparkles run smoothly and taper away** — no stutter or dropped frames as the instruction banner and both item cards disappear, and the stars **fade out over a spread of time** rather than the whole cloud vanishing on one frame. The two containers burst ~0.1 s apart, not simultaneously. Check on the slowest target device
- [ ] Leaving the level mid-celebration (press Next quickly) removes **every** particle — none carry over onto the next screen
- [ ] Next button advances (or final screen on Level 4)

### Transitions
- [ ] Next buttons advance exactly one step; rapid clicks don't skip/double
- [ ] **Next-button hint hand is FULLY visible** — wait out the idle on the Part-2 and Part-4 Next buttons (the two that sit at the very bottom of the screen). The whole hand must show, **never cut off by the bottom edge**, with the fingertip on the button rather than the palm hanging off-screen. Check on all 5 levels and at a small window size

---

## 5. Final screen (Level 4 only)

- [ ] Final picture shows
- [ ] Golden stars burst **across the scene** (not stuck in the bottom-left corner)
- [ ] Final narration plays
- [ ] **The final screen is not a dead end** — a Next button appears on top of the final picture, it **hops** like every other button, and the **hand hint appears after ~3 s of idle**. This screen previously offered no button and no hand at all
- [ ] The final button is the **CSS gold button, not the blue sprite** — warm festival gold matching the scrolls and treasure box, sitting in the **bottom-right corner** (60 px clear of both edges)
- [ ] Its magic is a **light travelling around the border** — a fine gold outline with one bright arc circling it, one lap every ~2.9 s. The arc must run **smoothly around the whole pill** with no jump as it passes the start point, and no gap or overshoot at the rounded ends
- [ ] It **presses and hops like every other button** (it reuses the same node, so it scales with the stage at every window size — check at a small window that it stays in the corner and the text stays inside the pill)
- [ ] Reduced motion: the sheen stops, the button still reads clearly
- [ ] Pressing it settles the button and stops the hint; a host page can act on the `royalbloom:finished` event or `window.RB_ON_FINISH`

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
- [ ] **Hint hands are placed by their FINGERTIP and clamped inside the stage** — the hand sprite draws its hand in the lower-middle of a mostly-empty frame, so centring its box on a button dropped the palm off the bottom edge and left only the fingertip showing (Part-2 and Part-4 Next buttons, every level)
- [ ] **Taps and drags are audible** — synthesised interaction blips (tap / pick up / place / rejected); the game shipped no short SFX assets, so these are generated rather than reusing a 2.8 s chime
- [ ] **Buttons react on finger-DOWN, not on release** — the pressed tone was previously applied by the click handler (which fires on release), so on touch it appeared after the tap was over; it is now driven from `pointerdown`
- [ ] **Try Again is never a static button** — it hops for as long as it is the way forward (it used to pop in once and then sit motionless, giving no cue that it had to be pressed to unlock the items). Same treatment on all three Next buttons, on every level (the intro Let's Go button keeps its own authored pulse)
- [ ] **Part-2 name scrolls are cued to the voice, not to a stopwatch** — reveals are measured from the naming clip's real duration and each name's position in the spoken line, and start when the clip is actually audible (they used to run on fixed 0.6 s / +1.8 s waits from the `play()` call, so the second name landed 0.6–1.0 s after its word on every level)
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
