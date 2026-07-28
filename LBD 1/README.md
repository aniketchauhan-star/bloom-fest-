# Royal Bloom — Web build (dependency-free)

A hand-reimplementation of the Unity *Royal Bloom* balance-scale learning game as
static `HTML + CSS + JS`. No Unity, no WebGL, no frameworks, no build step. Deploy the
folder as-is to Vercel / Netlify / any static host.

## Run

```bash
# from this folder
python3 -m http.server 8000
# open http://localhost:8000    (dev diagnostics auto-enable on localhost)
```

It also runs from `file://` (layout + config are embedded in `js/data.js`, no `fetch`),
subject to the browser's local-media policy for audio.

## Game flow (unchanged from the original)

`Intro → Tutorial → Level 1 → Level 2 → Level 3 → Level 4 → Final screen`

Each level runs the same four-part flow: tap the box → reveal + introduce the two
items → drag both onto the balance-scale pans (the scale tilts) → tap the requested
lighter/heavier item (wrong → *Try Again*, correct → *Next*) → sort the lighter item
into the basket and the heavier into the wagon → advance.

| Level | Lighter (0.5) | Heavier (1.0) | Ask | Answer mode |
|------|-------|-------|-----|-------------|
| Tutorial | Feather | Lantern | lighter | Lighter |
| Level 1 | Ribbon | Bell | heavier | Heavier |
| Level 2 | Paper fan | Bell | lighter | Lighter |
| Level 3 | Ribbon | Crown | heavier | Heavier |
| Level 4 | Flowers | Vase | heavier | Heavier (→ final screen) |

Item pairings, instruction wording, voice-over clips, order, and the 1920×1080
composition are preserved exactly. Part-4 sorting is **data-driven**: the lighter item
(by `weight`) goes to the basket, the heavier to the wagon — no hard-coded item identity.

## Architecture

```
index.html            shell + script order + font-ready loader
css/style.css         @font-face (Lilita One), fixed 16:9 stage, focus-visible, reduced-motion
js/data.js            window.LAYOUT (normalized node tree) + window.CONFIG (per-level configs)
js/engine.js          layout/rendering, lazy paint, coordinate conversion, tweens, node ops,
                      world-preserving reparent, sibling-index, dedicated drag layer, dup-ID assert
js/audio-manager.js   BGM / narration / SFX channels, gesture unlock, single-narration, VO preload
js/interaction.js     pointer-capture drag pipeline, safe-area clamping, phase-scoped DropManager
js/controllers.js     GameManager (Parts 1–4) with LevelSession lifecycle, transition locks,
                      data-driven sorting, equal-weight handling, stale-callback tokens
js/main.js            boot, config validation, one-active-level mounting, dev diagnostics
scripts/audit-data.mjs      static data/asset/config audit
scripts/normalize-data.mjs  one-time layout normalizer (dedup + stray-node/clip cleanup)
scripts/check-all.mjs       one-shot static gate (syntax + audit + source integrity)
qa/smoke-test.mjs           headless end-to-end flow test across the viewport matrix
qa/dom-shim.mjs             minimal DOM + fake-clock used by the smoke test
```

### Key behaviours

- **Fixed 16:9 stage.** Logical 1920×1080, scaled uniformly by
  `min(vw/1920, vh/1080)` and letterbox-centered. All gameplay coordinates stay in
  logical stage space, so drop math is resolution-independent.
- **One drop pipeline.** `DropManager` holds only the current phase's enabled zones
  (Part 3 = the two pans; Part 4 = this level's basket + wagon). A drop is accepted when
  the released pointer is inside an enabled zone rect, or ≥30% of the dragged item's
  rect overlaps it (greatest overlap wins, nearest-center tie-break). Hidden ancestors,
  other levels, and other phases can never receive a drop. No `acceptDistance`/`dropRadius`.
- **Balance scale (Unity-exact).** `BalanceScaleAnimator` reproduces the Unity
  `Scale_Balanced/LeftDown/RightDown` clips: only the beam group (`plate`) rotates
  (±8° Unity logical) and the pan groups (`left`/`Right`) translate to the authored
  anchored positions (LeftDown 0.75 s, RightDown 0.667 s) with smoothstep interpolation;
  the controller root and `Support base` never move. It animates from the current pose
  (no first-frame jump, no drift over repeated cycles) and restores every changed
  property on return to Balanced. Dropped items live inside the translating pan groups,
  so they ride their pan and stay upright. `setWeights(l, r)` picks the state exactly as
  Unity (`|l−r| < 0.1` = balanced), comparing the first dropped item against zero.
- **Drag safety.** Pointer Events + `setPointerCapture`, secondary pointers ignored,
  one drag at a time, full-rect clamp to the 1920×1080 safe area, world-preserving move
  to a single top drag layer (no jump), and recovery on `pointercancel` / lost capture /
  blur / `visibilitychange`. Mouse, trackpad, stylus and touch share one path; no
  mouse-only custom cursor.
- **Deterministic lifecycle.** Each level owns a `LevelSession` that tracks its timers,
  waits, tweens, ghost loops and narration; leaving a level disposes it and aborts every
  stale piece of work. Transition locks stop rapid double-clicks from starting duplicate
  flows; listener registration is keyed so a click always produces exactly one
  transition; wrong-drop flows use tokens so a late callback can never undo a
  subsequently-correct placement.
- **Audio.** `AudioManager` unlocks on the first gesture, starts the single looped BGM
  after *Let's Go*, plays one narration clip at a time (preloading metadata so voice-over
  and typed text begin together), and fails safe on missing/blocked clips.
- **Loading.** Only the Intro paints at boot; each level's art is painted when it mounts
  and the next level is warmed during idle time; the previous level's controller is
  disposed on transition. The ten 1920×1080 wrong-feedback PNGs load per active level.
- **Accessibility.** Interactive nodes get button semantics, Enter/Space activation,
  `:focus-visible` rings and ARIA labels; instruction changes announce via a live region;
  `prefers-reduced-motion` shortens fades and drops infinite bouncing.

## Data normalization

`js/data.js` was normalized once with `scripts/normalize-data.mjs`:

- 17 duplicate node identities removed (first canonical occurrence + sibling order kept):
  the repeated `*_hand`, `ConfettiBlast`/`SmallGlow`/`BrakeDown` subtrees. 537 → 519 nodes.
- The stray always-on root node `n520_Image` (an orphan center-hand GIF, referenced by
  nothing) removed. There is one canonical confetti system and one hand-hint node.
- The intro button clip pointed at a machine-local absolute path
  (`/home/claude/.../btn.mp3`). The exact 0.157 s source is not vendored in this repo, so
  the reference was set to `null` (silent) rather than shipping a 404. Re-run the
  normalizer after dropping `assets/audio/btn.mp3` in and pointing the config at it if the
  original is recovered.

## QA

```bash
node scripts/check-all.mjs     # syntax + data audit + source integrity (static gate)
node qa/smoke-test.mjs         # headless end-to-end flow across the viewport matrix
```

`qa/smoke-test.mjs` boots the real engine/controllers in a DOM + fake-clock shim and
drives the full Intro→Final flow at 7 viewports (1920×1080, 1600×900, 1366×768,
1280×720, plus 1024×768 / iPad / Android touch): box open, VO/text start, both drags,
hidden-zone and occupied-pan rejection, correct/wrong answers with 3× *Try Again*, wrong
Part-4 drops with restore, data-driven sorting, confetti cleanup, letterbox math, and a
20× replay that confirms DOM/tween/timer counts return to baseline, plus a balance-scale
block (root/support fixed, ±8° beam, authored pan Y targets, balanced restore, 50× no
drift, upright items, no mid-animation jump). Latest run:
**328 checks pass, 0 fail, 0 console errors, 0 unhandled rejections.**

## Known limitations

- The headless smoke test verifies **behaviour/state**, not pixels. It models the stage
  transform but not per-sprite CSS transforms, and cannot judge visual placement — that
  still needs a real browser (and, for exact fidelity, ground-truth Unity frames).
- The balance scale uses the exact Unity-authored clip end poses and durations with a
  smoothstep curve; the intermediate per-keyframe tangents are not reproduced key-for-key.
- The Part-2 pop, confetti (Unity ParticleSystem) and the ghost-hand path remain faithful
  approximations, not the exact clip curves.
- Intro button SFX is silent until the original `btn.mp3` is vendored (see above).
- Audio autoplay is gated by the browser until the first user gesture (by design).
