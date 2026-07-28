# God Mode — Bubble Days Developer & Testing Suite

God Mode is an isolated debug, QA, and design-review layer for the **Bubble Days** game (the days-of-the-week bubble game for young learners). It lets a developer or designer jump between screens, manipulate rewards and timers, live-edit the layout of any UI element, preview animation ideas, and run automated QA and kid-focused UX checks — all without touching the learner build.

**Core design principle:** everything is fully reversible and fully removable. Remove the god-mode `<link>` and `<script>` tags from `index.html` and the learner game is completely unaffected. Turning God Mode off at runtime tears down every debug affordance (styles, animations, overlays, edits) so learners never see anything.

---

## Table of Contents

1. [File Structure](#file-structure)
2. [Loading & Activation](#loading--activation)
3. [Keyboard Shortcuts](#keyboard-shortcuts)
4. [The Debug Panel](#the-debug-panel)
   - [Screen Flow](#screen-flow)
   - [Level Testing](#level-testing)
   - [Rewards](#rewards)
   - [Animation Speed](#animation-speed)
   - [Visual Debug](#visual-debug)
5. [Live Layout Editor](#live-layout-editor)
6. [Animation Ideas Bar](#animation-ideas-bar)
7. [QA Test Mode](#qa-test-mode)
8. [UI/UX Review](#uiux-review)
9. [Shared Utilities](#shared-utilities)
10. [Stage-Space Coordinates](#stage-space-coordinates)
11. [Game API Contract](#game-api-contract)
12. [Styling & Theming](#styling--theming)

---

## File Structure

| File | Role |
|---|---|
| `god-mode.js` | Main controller. Loads the panel template, wires the sub-modules, owns activation, global shortcuts, screen flow, rewards, animation speed, visual debug, and timer testing. Exposes `window.BubbleDaysGodMode`. |
| `god-mode-utils.js` | Shared helpers (`window.GodModeUtils`). Loaded **first**; every other module depends on it. |
| `god-mode-live-editor.js` | Live Layout Editor. Pick any UI element, edit its geometry/text, copy values or CSS. Exposes `window.GodModeLiveEditor`. |
| `god-mode-animation-bar.js` | Animation Ideas panel. Auto-suggests animations for the selected element by type + condition; previews live and exports ready-to-paste CSS/JS. Exposes `window.GodModeAnimationBar`. Optional — the controller checks for it before wiring. |
| `god-mode-qa.js` | QA Test Mode. Smoke, level-data, screen-flow, reward-logic, interaction and timer checks. Exposes `window.GodModeQA`. |
| `god-mode-ux-review.js` | UI/UX Review. Kid-focused heuristics with on-screen highlighting and a plain-language report. Exposes `window.GodModeUXReview`. |
| `god-mode-panel.html` | Panel template, fetched at runtime and injected into `#godModeRoot`. Kept out of `index.html` so the learner build stays clean. |
| `god-mode.css` | All God Mode styles (badge, panel, selection box, `gmAnim-*` keyframes, UX highlight classes). `position: fixed` panels sit outside the scaled stage so they stay crisp at any zoom. |

All modules are IIFEs in strict mode with no build step. Load order matters only in that `god-mode-utils.js` must come first and `god-mode.js` last (it instantiates the others on `DOMContentLoaded`).

---

## Loading & Activation

### Bootstrap sequence

1. On `DOMContentLoaded`, `god-mode.js` looks for the game instance at `window.bubbleDaysGame` (falling back to `window.game`). If neither exists it logs a warning and aborts — God Mode never runs without a game to drive.
2. It constructs `BubbleDaysGodMode(game)` and calls `init()`, which:
   - Injects `#godModeRoot` into `<body>` and fetches `god-mode/god-mode-panel.html` into it. **If the fetch fails** (e.g. running from `file://`), an identical inline HTML fallback is used, so functionality is preserved either way.
   - Instantiates and `init()`s the Live Editor, QA, and UX Review modules, plus the Animation Bar if `window.GodModeAnimationBar` is present.
   - Binds global keyboard shortcuts, panel buttons, and makes the panel draggable by its header.

### Toggling God Mode

Press **Shift + G** at any time. Toggling ON:

- Adds `godMode` to `<body>`, shows the panel and the pulsing **⚡ GOD MODE** badge.
- Sets `game.isGodMode = true` (the game loop slows the timer while this is true).
- Reveals the Noori dialogue with a preview message so its gif + speech bubble become selectable/editable (they're hidden in normal play).

Toggling OFF is a full teardown:

- Hides the preview dialogue (unless the real intro is mid-flight).
- Removes every debug body class (`godShowBounds`, `godShowSafeArea`, `godShowCorrect`, `godShowTextBoxes`, `godPauseAnimations`).
- Resets animation speed to 1×, resets all Live Editor edits, clears the UX review, strips all Animation Bar previews/applies, and unchecks every debug checkbox.

The panel itself is draggable: grab the header (anywhere except the minimize button) and move it like a floating tab. It's clamped so it can never be dragged fully off-screen.

---

## Keyboard Shortcuts

**Shift + G** toggles God Mode globally. All other shortcuts work only while God Mode is ON, and are suppressed while typing in an input/textarea/select/contenteditable (so the panel's fields are safe to type in).

### Level & flow

| Key | Action |
|---|---|
| `N` | Skip to next level |
| `P` | Go to previous level |
| `R` | Restart current level |
| `C` | Clear (auto-pop) all correct bubbles |
| `W` | Trigger wrong-tap feedback |
| `F` | Force final game-complete screen |
| `O` | Print the game's flow log to the console (`console.table`) |

### Rewards & timer

| Key | Action |
|---|---|
| `G` | Add a gem |
| `U` | Force-unlock and show the unlock screen |
| `T` | Set the timer to 5 seconds remaining |
| `Y` | Force time-up immediately |

### Visual debug & animation speed

| Key | Action |
|---|---|
| `B` | Toggle Show Bounds |
| `S` | Toggle Safe Area overlay |
| `1` / `2` / `3` / `4` | Animation speed: Pause / 0.5× / 1× / 1.5× |

### QA & UX review

| Key | Action |
|---|---|
| `Q` | Run QA Smoke Test |
| `L` | Run QA Level Data Test |
| `V` | Start full UX Review |
| `K` | Run Kid-Friendly Check only |
| `X` | Clear UX Review |

### Live Editor

| Key | Action |
|---|---|
| Arrow keys | Nudge selected element by 1px (stage space) |
| Shift + arrows | Nudge by 10px |
| Ctrl/Cmd + C | Copy selected element's values (when not typing in a field) |
| Ctrl/Cmd + E | Copy all edited values |
| Shift (held while dragging/resizing) | Temporary snap-to-grid |

---

## The Debug Panel

The floating **God Mode Debug** panel (`#godPanel`) groups every tool into sections. The `−` button in the header minimizes it to just the header bar.

### Screen Flow

One-click jumps to any screen state, implemented via the game's own public methods (never by hacking DOM directly). Before each jump, timers are cleared, the owl message is hidden, and all overlays (`#startveil`, `#unlockOverlay`, `#owlDialogue`) are hidden so screens never stack.

| Button | What it does |
|---|---|
| Start Screen | `game.debugShow('start')` |
| Intro Owl | Shows the intro owl message |
| Gameplay | Spawns a static (non-moving) round, shows the timer, sets phase to `playing` |
| Wrong Feedback | Runs the wrong-tap flow on the first incorrect bubble (spawning a static round first if needed) |
| Level Complete | Sets `found = need` and calls `game.win()` |
| Unlock Screen | Tops gems up to 10 and shows the unlock overlay |
| Final Complete | Jumps to the last level and calls `game.gameComplete()` |

### Level Testing

Previous / Next / Restart level, plus:

- **Clear Correct Bubbles** — uses `game.clearCurrentLevelForTest()` when available, otherwise programmatically clicks every `[data-ok="1"]` bubble.
- **Trigger Wrong Tap** — same as the `W` shortcut.

### Rewards

- **Add Gem / Remove Gem** — increment/decrement `gemsCollected` (floored at 0) and refresh the gem HUD.
- **Set 10 Gems** — jumps straight to the unlock threshold.
- **Force Unlock** — sets `isNextGameUnlocked = true` and shows the unlock screen.
- **Reset Rewards** — zeroes gems, clears unlock state, hides the unlock overlay.

### Animation Speed

Pause / Slow (0.5×) / 1× / 1.5× / 2×. Implementation is two-pronged:

1. Sets the CSS custom property `--god-animation-speed` on `<html>` (for CSS that reads it).
2. Sets `playbackRate` on every animation returned by `document.getAnimations()`.

Speed 0 additionally adds `body.godPauseAnimations` so CSS can hard-pause everything.

### Visual Debug

Four checkboxes toggle body classes that CSS uses to paint overlays:

- **Show Bounds** — outlines the key interactive elements (bubbles, cannon, HUDs, cards, title characters…) via a `.godBounds` class on each.
- **Show Safe Area** — overlays the safe-area guide on the stage.
- **Mark Correct Bubbles** — visually marks `[data-ok="1"]` bubbles so testers can see the answer.
- **Show Text Box Bounds** — outlines text containers to spot overflow.

---

## Live Layout Editor

The editor lets you select any registered UI element and read/edit its live layout — **x, y, width, height, scale, font size, z-index, opacity, border-radius, padding** — and its text, then copy the exact values (or an optional CSS rule) for a developer to paste into the real stylesheet. All numbers are in **stage space** (the 1920×1080 design grid), so what you copy maps 1:1 onto the game's coordinate system regardless of browser zoom or the fit-to-viewport scale.

### Registered elements

The dropdown exposes every meaningful piece of the real Bubble Days DOM, grouped roughly as:

- **Scene & layers** — stage, scene, background image, background FX layer, bubble layer, FX layer, dark veil, red flash.
- **Start / loading** — start veil, start/complete card, title background, logo, title-bubbles layer, the three mascots (**Elephant "Jhu"**, **Bird "Noori"**, **Monkey "Monty"**), start title, play button.
- **Owl dialogue** — wrapper, owl, panel; plus Noori's dynamic talking gif and speech bubble (present only while a dialogue is showing).
- **HUD** — gem HUD, gem count, timer bar, timer fill.
- **Cannon** — wrapper and cannon.
- **Bubbles** — all bubbles, correct bubbles (`[data-ok="1"]`), incorrect bubbles.
- **Guidance hint** — the tap hand (`hand.png`) and tap-hint halo (present only while the hint is showing).
- **Unlock celebration** — overlay, confetti, card, owl, title, gem row, text, "Play Next Game" button.

### Group mode vs. single-target mode

- Selecting from the **dropdown** puts you in **group mode**: edits apply to *every* element matching the selector (e.g. all bubbles), and the edit state is remembered per key.
- **Pick From Screen** (or clicking an element with Cursor Edit on) puts you in **single-target mode**: edits apply to *just that one element* — so editing one bubble no longer moves every bubble in its group. Each picked element's original inline style is captured so it can be reset individually.

When multiple registered selectors match a click, the **deepest matched element wins**, and on a tie the **more specific selector wins** — so clicking a correct bubble resolves to "Correct Bubbles", not the generic "All Bubbles".

### Cursor editing

Turn on **Cursor Edit** to get direct-manipulation editing:

- **Click** any registered element to select it (a selection box with a name + size label appears).
- **Drag** to move; **eight resize handles** (corners + edges) to resize, with a 40×40px minimum.
- Mouse deltas are divided by the stage scale, so dragging tracks the scaled stage exactly.
- **Snap** toggle (or hold Shift) snaps position/size to a 10px grid.
- **Lock Selected** prevents accidental drags of the selected element.
- A capture-phase click handler swallows the click that follows a pick/drag so it never actually pops a bubble.

### Extra tools

- **Bring Forward / Send Backward** — nudge z-index ±1.
- **Fit Content** — temporarily sets width/height to `auto`, measures, and applies the content size.
- **Duplicate Ghost** — creates a temporary offset clone (auto-removed after 8 seconds) for comparing layout variants.
- **Highlight Selected** — re-runs selection to flash the highlight.

### Text editing

The textarea shows the selected element's text; **Apply Text** writes it live to all current targets. Useful for testing copy length against text boxes.

### Copy / export

- **Copy Selected Values** — a plain-text block: label, key, selector, then every property (`x`, `y`, `width`, `height`, `scale`, `font-size`, `z-index`, `opacity`, `border-radius`, `padding`, `text-align`, and the text, truncated at 120 chars).
- **Copy All Values** — the same block for every registered element, separated by dividers.
- **Copy CSS (optional)** — a ready-made CSS rule for the element's first selector.

### Save / Load / Clear Temp

The group-mode edit state can be persisted to `localStorage` under the key `bubbleDaysGodLayout`. **Load Temp** re-applies it and copies all values; **Clear Temp** removes the saved state and resets every edited key.

### Reset behavior

- **Reset Selected** restores the current element (or group) to its captured original inline styles.
- Turning God Mode off calls `resetAll()`: every group is reset, every individually-picked element is restored, ghost clones are removed, cursor edit is disabled, and the selection box is hidden. The learner build is left byte-identical.

### Selection broadcasting

Every selection dispatches a `godEditorSelectionChanged` `CustomEvent` on `document` with `{ element, key, label, selector }`, so add-on tools (like the Animation Ideas bar) can react without being coupled to the editor.

---

## Animation Ideas Bar

A smart suggestion panel that appears whenever an element is selected in God Mode. Instead of saved presets, ideas are **generated** from an idea bank keyed by:

1. **Element type** — classified from classes/IDs/attributes/img src into: `bubble`, `correctBubble`, `wrongBubble`, `button`, `gem`, `cannon`, `owl`, `character` (title mascots + tap hand), `promptText`, `timer`, `backgroundProp`, `panel`, or `default`.
2. **Condition** — On Idle / Hover / Tap / Correct Answer / Wrong Answer / Time Low / Level Start / Level Complete / Gem Earned / Combo Streak / Game Over. Each type gets a sensible default condition (e.g. correct bubbles default to "On Correct Answer", gems to "On Gem Earned", the timer to "On Time Low").

Bubbles are special: correct/wrong bubbles get a **merged** bank of the generic bubble ideas plus their state-specific ideas.

### Example ideas from the bank

- Correct bubble, on correct: *Crystal Pop Burst, Musical Letter Jump, Rainbow Ring Expand, Star Confetti Pop, Happy Jelly Bounce, Word Fly To Score…*
- Wrong bubble, on wrong: *Soft Wrong Shake, Red Alert Ring, Bubble Squish Deny, Sad Wobble, Gentle Freeze Pulse…*
- Gem, on earned: *Emerald Fly To HUD, Crystal Rotate Pop, Gem Shard Burst, Premium Reward Bounce…*
- Timer, on low: *Heartbeat Pulse, Warm Warning Glow, Tick Shake, Red Edge Flash, Urgent Fill Flicker*
- Cannon, on tap: *Boing Shoot, Squash And Stretch, Smoke Puff, Recoil Bounce, Bubble Mouth Bulge…*

### Label → animation resolution

Each free-form idea label is resolved to a real CSS keyframe class by an **ordered keyword regex resolver** (first match wins) mapping words like *heartbeat, shake, ring/ripple, squish/boing, burst/confetti, rotate/spin, fly/collect, shine/glow, pop, drop, slide/rise, flip, fade, jump/cheer, wave, wiggle/wobble, drift/float, scale, bounce* to one of 27 base classes (`gmAnim-floatUp`, `gmAnim-softBounce`, `gmAnim-popBurst`, `gmAnim-heartbeat`, `gmAnim-sparkPop`, …). New creative names therefore work automatically. Ambient-style classes (drift, pulseGlow, floatUp, heartbeat, etc.) loop; action-style ones play once. Unmatched labels fall back to a soft bounce.

### Workflow

1. Select an element → the bar shows "Selected: *name* · *type*" and refreshes.
2. Pick a **condition** → the idea chips refresh.
3. **Click a chip** (or Preview) → the animation plays live on the element (class removed + reflow forced so it always replays).
4. **Apply** → saves the choice for that element + condition (stored on the element as `data-gm-anim="condition:label"` and in an internal list; the chip is marked "applied").
5. **Reset** → strips preview and applied animations from the element.

### Code export

**▸ Copy Animation Code** expands a code box with generated, **standalone** CSS + JS for the previewed idea — each keyframe is duplicated from an internal code bank so the export works in the real game *without* depending on `god-mode.css`. The generated code uses a kebab-cased class (`.anim-crystal-pop-burst`), a camelCased keyframe name, and a `playPascalCase(el)` replay helper that forces a reflow. Copy buttons: **CSS**, **JS**, **Full Code**, **Selector** (best-effort: id → first non-god class, plus `[data-ok="1"]` where relevant), and an **Apply Snippet** one-liner. A toast confirms each copy; clipboard falls back to the `textarea + execCommand` trick on `file://`/non-secure contexts.

When God Mode turns off, every touched element is stripped of animation classes and `data-gm-anim`, and the bar's state is fully cleared.

---

## QA Test Mode

Automated checks that read the game instance and the **real DOM**, printing PASS/FAIL/Warning lines to `#qaOutput` and the console.

| Test | What it verifies |
|---|---|
| **Smoke Test** (`Q`) | All critical element IDs exist (`gemHud`, `gemCount`, `owlDialogue`, `dialogueText`, `unlockOverlay`, `nextGameBtn`, `startveil`, `startBtn`, `timerHud`, `timerFill`); exactly **12 levels** in `ROUNDS`; all required game methods exist (`showUnlockScreen`, `gameComplete`, `showOwlMessage`, `awardLevelReward`, `startRound`, `staticRound`). |
| **Level Data Test** (`L`) | For each of the 12 levels: a valid numeric `time`; an `items` array with **2–6 bubbles**; at least one correct item; no digits and no month names in any bubble label; every correct item is a day of the week; no day of the week is mislabeled as a distractor. |
| **Screen Flow Test** | No more than one overlay (`startveil` / `owlDialogue` / `unlockOverlay`) visible at once; prints the last 8 entries of the game's `flowLog` (state, level, gems). |
| **Reward Logic Test** | Exercises `awardLevelReward()` with saved/restored state: a mistake-free level awards exactly 1 gem; a level with a mistake awards none; the 10th gem is reachable. |
| **Interaction Test** | A central `clickBubble` tap handler exists; a rapid/double-tap guard (`isResolvingTap`) is present; bubbles are visible with `data-ok="1"` markers; notes when taps are blocked by the wrong-feedback phase. |
| **Timer Test** | `#timerHud` and `#timerFill` exist; timer width ≥ 1600px and height 30–60px in stage space; **level times strictly decrease** from level to level (difficulty ramps by shortening the timer). |
| **Copy QA Report** | Copies a timestamped "Bubble Days QA Report" of the last run to the clipboard. |

---

## UI/UX Review

Kid-focused heuristic checks. Offending elements are highlighted **on screen** (`uxIssue` = problem, `uxWarning` = maybe, `uxGood` = passed) and a plain-language report is written into the floating **UI/UX Review** panel. All size checks run in **stage space**, so the preview's scale-to-fit can never fake a failure. **Start UX Review** (`V`) runs all five checks; each is also available individually. **Clear** removes all highlight classes and hides the panel.

| Check | Heuristics |
|---|---|
| **Tap Targets** | Every visible bubble / play button / unlock button must be at least **80×80px** — the minimum comfortable tap size for young children. |
| **Text Readability** | Visible text should be ≥ **24px** (gem count exempt); no overflow (`scrollWidth/Height` vs client box); flag any string over **120 characters** as long for young kids. |
| **Visual Hierarchy** | Bubbles should be the main focus (average area ≥ 40,000px²); the timer shouldn't dominate (height ≤ 70px); the gem HUD shouldn't be oversized (≤ 320×130); a full-stage owl dialogue is noted as expected for a modal cue. |
| **Clutter** | Never more than one overlay visible at once; at most **6 bubbles** on screen; legacy UI (`#pips`, `#hud`, `#levelflash`) must not be visible. |
| **Kid-Friendly** (`K`) | Learner-facing text must never contain gamey/meta words (*score, final score, level 1/2/3, round, combo*); no string over 140 chars; **no digits in bubbles**; **no month names in bubbles** (this game teaches days, not months). |

---

## Shared Utilities

`window.GodModeUtils` (from `god-mode-utils.js`) provides the primitives everything else uses:

- `isTypingInField(event)` — true when a keydown originated in an input/textarea/select/contenteditable, so shortcuts never hijack typing.
- `copyText(text)` — clipboard write with a hidden-textarea `execCommand` fallback.
- `isVisible(el)` — visibility test covering `hidden`, `display:none`, `visibility:hidden`, zero opacity, and near-zero bounding size.
- `getStage()` — the 1920×1080 play surface (`.scene`, falling back to `<body>`).
- `stageScale()` — the scale factor applied by the fit-to-viewport transform (stage width ÷ 1920).
- `stageRectOf(el)` — an element's rect converted into stage space (see below).
- `qa(sel)` / `qsa(sel)` — `querySelector` / array-returning `querySelectorAll`.

---

## Stage-Space Coordinates

The game is designed on a fixed **1920×1080** grid and scaled to fit the viewport. God Mode does all measurement and editing in that design space:

```
stageScale = stageBoundingWidth / 1920

stageRect(el) = {
  x: (el.left − stage.left) / stageScale,
  y: (el.top  − stage.top)  / stageScale,
  w: el.width  / stageScale,
  h: el.height / stageScale
}
```

Consequences:

- Values shown/copied in the Live Editor map directly onto the design grid — paste them into CSS and they're correct.
- UX size thresholds (80px tap targets, 1600px timer width…) are judged against the design, not the current browser zoom.
- Cursor-drag deltas are divided by the scale so dragging feels 1:1 on the scaled stage.

---

## Game API Contract

God Mode drives the game exclusively through the game instance's **public** surface. To integrate it with a game, expose the instance as `window.bubbleDaysGame` and provide:

**Methods:** `debugShow(screen)`, `showOwlMessage(msg, delay, cb, kind?)`, `hideOwlMessage()`, `staticRound(index)`, `startRound(index)`, `wrongFlow(bubble)`, `win()`, `timeUp()`, `showUnlockScreen()`, `gameComplete()`, `awardLevelReward()`, `updateGemHud(animate?)`, `updateTimerDom()`, `clearTimers()`, `skipToNextLevel()`, `goToPreviousLevel()`, `restartCurrentLevel()`, `addGemForTest()`, and optionally `clearCurrentLevelForTest()` and `clickBubble()`.

**Properties:** `rounds` (or a global `ROUNDS` array; 12 entries of `{ time, items: [{ l, ok }] }`), `round`, `phase`, `paused`, `bubbles`, `found`, `need`, `tf` (timer fraction 0–1), `dur`, `gemsCollected`, `madeMistakeThisLevel`, `isNextGameUnlocked`, `isUnlockShowing`, `isGodMode`, `isResolvingTap`, `messages` (with `intro` and `wrong`), and `flowLog` (array of `{ state, level, gems }`).

Optional globals: `window.showNooriDialogue(text)` / `window.hideNooriDialogue()` for previewing the dialogue layer.

**Expected DOM IDs:** `stage`, `scene`, `bubbleLayer`, `fxLayer`, `bgAlive`, `darkveil`, `redflash`, `startveil`, `startcard`, `startLogo`, `startTitle`, `startBtn`, `owlDialogue`, `dialogueOwl`, `dialogueText`, `gemHud`, `gemCount`, `timerHud`, `timerFill`, `cannonWrap`, `cannon`, `unlockOverlay`, `unlockConfetti`, `unlockGems`, `unlockText`, `nextGameBtn` — plus bubbles as `#bubbleLayer .bubble` with `data-ok="1"` marking correct answers.

---

## Styling & Theming

`god-mode.css` is fully self-contained. Design tokens:

```css
:root {
  --godAccent:  #3DF5C4;  /* mint glow */
  --godAccent2: #7C6BFF;  /* violet   */
  --godPink:    #FF6FD8;
  --godInk:     #EAF6FF;
  --godMuted:   rgba(190,215,230,.62);
  --godGlass:   rgba(18,24,34,.82);
  --godGlassHi: rgba(40,52,72,.6);
  --godLine:    rgba(120,170,200,.16);
}
```

The look is a dark glassmorphism panel (blur + saturate backdrop, gradient header with a shimmer sweep, custom scrollbar), a pulsing ⚡ badge, and a fixed-position selection box with 8 resize handles. All panels are `position: fixed` and sit at very high z-indexes (99,999+) **outside** the scaled stage, so they render crisp at native size regardless of the game's zoom. The stylesheet also contains all 27 `gmAnim-*` keyframe classes used by the Animation Ideas previews, the `godBounds` / safe-area / correct-marker overlays, and the `uxIssue` / `uxWarning` / `uxGood` highlight styles.

---

## Quick Start

1. Include, in order, at the end of `index.html` (after the game script):
   ```html
   <link rel="stylesheet" href="god-mode/god-mode.css">
   <script src="god-mode/god-mode-utils.js"></script>
   <script src="god-mode/god-mode-live-editor.js"></script>
   <script src="god-mode/god-mode-animation-bar.js"></script>
   <script src="god-mode/god-mode-qa.js"></script>
   <script src="god-mode/god-mode-ux-review.js"></script>
   <script src="god-mode/god-mode.js"></script>
   ```
2. Expose your game instance: `window.bubbleDaysGame = game;`
3. Open the game and press **Shift + G**.
4. To ship the learner build, delete those seven tags. Nothing else changes.
