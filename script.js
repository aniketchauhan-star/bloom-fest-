  /* ============================================================================
   THE STORY NIGHT — flipbook behaviour.
   Diagnostic first: surface any REAL JavaScript error on screen (a silent error
   would stop the click handlers from ever attaching). Image / video / network
   load failures are ignored — they have no .message and are handled per-element.
   ============================================================================ */
window.addEventListener("error", function (ev) {
  if (!ev || !ev.message) return;                 // ignore resource-load errors
  var b = document.getElementById("__jsErr");
  if (!b) {
    b = document.createElement("div");
    b.id = "__jsErr";
    b.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:100000;" +
      "background:#b00020;color:#fff;font:13px/1.5 monospace;padding:10px;white-space:pre-wrap";
    (document.body || document.documentElement).appendChild(b);
  }
  b.textContent = "⚠ JavaScript error (this is likely why the book won't open):\n" +
    ev.message + "\n" + (ev.filename || "") + " : line " + ev.lineno;
});

// If you can read this line in the console, the script parsed with NO syntax
// error and you are running the CURRENT file (not a cached copy).
console.log("%c✅ [The Story Night] loaded — 3D flipbook · full-bleed pages · speech bubbles.",
            "font-weight:bold;color:#7d5fd0;font-size:13px");

/* ============================================================================
   ██  EDIT YOUR CONTENT HERE  ██
   ----------------------------------------------------------------------------
   Every entry below is ONE page of the book, shown in order after the cover.

     • type   : "video"  → a full-page video (e.g. assets/1.webm)
                "image"  → a full-page picture (e.g. assets/3.webp)
     • src    : the media file for that page.
     • delay  : (video only, optional) milliseconds to wait after landing on the
                page before the video starts (e.g. delay: 3000 → starts after 3s).
                Omit / 0 → the video starts instantly.
   Add / remove / reorder pages freely — the flip engine and the "Page X / N"
   counter update automatically.
   ============================================================================ */
// TWO-PAGE sample template (the game has been removed). Each video page has a
// matching first-frame poster in assets/posters/ so the scene shows instantly.
// Add / remove / reorder pages freely — the flip engine and the "Page X / N"
// counter update automatically.
const pages = [
  { type: "video", src: "assets/1.webm" },   // 1 — opening video
  { type: "video", src: "assets/2.webm" },   // 2
  { type: "video", src: "assets/3.webm" },   // 3
  { type: "video", src: "assets/4.webm" },   // 4
  // 5 — THE GAME (game/ — "Royal Bloom"). It is already booted and silent in a
  //     hidden body-level iframe long before you get here, so landing on this
  //     page is an instant reveal, never a download. The game's intro screen
  //     shows AT PAGE SIZE, printed inside the book; tapping its "Let's Go"
  //     expands it to true fullscreen. Finishing it folds the game away and
  //     turns to page 6 on its own.
  { type: "lbd",
    src:    "game/index.html",
    poster: "game/assets/img/TITLE.webp" },
  { type: "video", src: "assets/5.webm" },   // 6
  { type: "end" },                          // 7 — THE END page (cream) + Replay
];

/* ============================================================================
   ██  END OF EDITABLE CONTENT — engine below (no need to change) ██
   ============================================================================ */

/* ---- Build one page face's media (image OR video OR lbd poster) ----------
   `pageIndex` is the leaf this media belongs to — the VIDEO GATE below needs it
   so a clip can open its OWN page's gate, whatever page is on screen. */
function makeMedia(page, pageIndex) {
  // "lbd" pages show a STILL poster on the leaf itself (seen while the page turns);
  // the live, interactive game is a separate full-screen-capable overlay iframe
  // (see the LBD OVERLAY section below) — it can't live inside the 3D-transformed
  // leaf because CSS transforms trap position:fixed, so true fullscreen would fail.
  if (page.type === "lbd") {
    const img = document.createElement("img");
    img.className = "page-media";
    img.draggable = false;
    img.addEventListener("dragstart", function (e) { e.preventDefault(); });
    img.decoding = "async";
    // NO src yet — deliberately. This file lives in game/, and script.js runs during
    // parse, so setting src here would put a game asset on the flipbook's critical
    // path. warmLbdInBackground() fills it in after `load`, along with everything
    // else the game needs. (It is only ever seen for the instant the page turns.)
    img.dataset.poster = page.poster || "";
    img.alt = "Royal Bloom — the balancing game";
    return img;
  }
  const media = page.type === "video"
    ? document.createElement("video")
    : document.createElement("img");
  media.className = "page-media";
  media.draggable = false;                           // never let the image "ghost-drag" out
  media.addEventListener("dragstart", function (e) { e.preventDefault(); });
  media.src = page.src;
  if (page.type === "video") {
    media.loop = false;
    media.playsInline = true;
    media.setAttribute("playsinline", "");            // iOS Safari inline playback
    media.setAttribute("webkit-playsinline", "");
    // FIRST-FRAME POSTER: a video that hasn't painted a frame yet (still buffering,
    // or autoplay was blocked) would show as a blank cream page. The poster is that
    // clip's own frame 0, so the scene shows INSTANTLY and — because it equals where
    // playback starts — there's no jump when the video then plays.
    // ⚠ DERIVED PATH. This is built from the video's own filename, so it moves with
    // the media format: the extension swap below MUST match the `src` extension in
    // the pages list, or every poster silently 404s while the code still looks fine.
    const posterUrl = page.src.replace(/^assets\//, "assets/posters/").replace(/\.webm$/i, ".webp");
    media.setAttribute("poster", posterUrl);
    // Remember the on-disk URLs. The preloader swaps both to blob: URLs once the
    // bytes are local, and the blob error-fallback needs the originals to revert to.
    media.dataset.origSrc    = page.src;
    media.dataset.origPoster = posterUrl;
    // LAZY: do NOT eager-buffer. With 25 videos, preload="auto" made the browser
    // open + decode every clip on load (huge memory/CPU spike + open lag). We only
    // buffer the page you're on + the next one, on demand (see warmVideo()).
    media.preload = "none";
    // Tap the video to (re)start it WITH sound — a guaranteed user gesture, so
    // browsers that blocked the auto-start's audio will now allow it.
    media.addEventListener("click", function () {
      media.muted = false;
      try { if (media.ended) media.currentTime = 0; } catch (_) {}
      const p = media.play(); if (p && p.catch) p.catch(function () {});
    });
    // When THIS page's video FULLY finishes: (0) OPEN THIS PAGE'S GATE — the whole
    // clip has been watched, so the forward arrow may now appear (see VIDEO GATE);
    // (1) start the 5s countdown to the page-flip tutorial nudge (so the nudge never
    // fights the video for attention).
    // The "look at me" GLOW PULSE on the forward arrow is NOT fired from here — it
    // hangs off the arrow actually becoming visible, in setNav(), which now happens
    // on every visit (each one re-gates the page, so each one gets the cue).
    // ⚠ ONLY THE PAGE ON SCREEN MAY OPEN ITS OWN GATE. A clip left running as the
    // reader flips away can fire "ended" long after the fact, and because every
    // visit is re-gated (see refreshMedia) that stale event would otherwise unlock a
    // page whose scene has not been watched THIS time round — the exact "NEXT is
    // already enabled when I come back" bug. The gate is not lost by refusing here:
    // arriving on the page re-arms both watchdogs, so it can never become a dead end.
    media.addEventListener("ended", function () {
      if (flipped !== pageIndex) return;                 // stale "ended" from a page we left
      markVideoWatched(pageIndex);
      if (!opened || !ready || lbdFullscreen || flipped >= totalPages - 1) return;
      if (!leaves[flipped] || !leaves[flipped].contains(media)) return;   // only the current page
      // Page-flip tutorial: appear 5s AFTER the video has finished playing.
      if (typeof scheduleHintAfterVideo === "function") scheduleHintAfterVideo();
    });
    // A clip that can NEVER play (missing file, bad codec, decode failure) must not
    // trap the reader on a page whose NEXT is waiting for an "ended" that will never
    // fire — so a load/decode error opens the gate immediately.
    // It ALSO gets one shot at recovery first: if the element is currently on a
    // blob: URL, that blob may have been revoked or arrived truncated, and the real
    // file is still sitting on the server. Revert to it and carry on.
    media.addEventListener("error", function () {
      if (revertBlob(media)) return;                  // recovered — let it try again
      // Genuinely broken → don't strand. Recorded as PERMANENTLY broken rather than
      // as "watched", because a re-visit wipes the watched flag (every visit is a
      // fresh visit) and the error will not fire a second time — so the flag has to
      // be the kind that survives. isNextLocked() never gates a broken clip.
      videoBroken[pageIndex] = true;
      updateProgress();
    });
  } else {
    media.decoding = "async";
    media.alt = page.alt || "story page";
    media.addEventListener("error", function () { revertBlob(media); });
  }
  return media;
}

/* ---- Blob fallback -------------------------------------------------------
   Every media element the preloader touches ends up pointing at a blob: URL. That
   is normally strictly better — the bytes are in the page — but a blob can be
   revoked, or built from a truncated response, and then the element is broken
   while the perfectly good file is still on the server. So each element gets ONE
   revert: back to the original URL, and (for video) pick playback back up so the
   reader doesn't just see a frozen frame.
   Returns true if it actually reverted something, so callers can tell "recovered"
   from "really broken". */
function revertBlob(el) {
  if (!el || el.dataset.blobReverted) return false;
  const wasBlobSrc    = el.dataset.blobSrc    && el.src === el.dataset.blobSrc;
  const wasBlobPoster = el.dataset.blobPoster && el.getAttribute("poster") === el.dataset.blobPoster;
  if (!wasBlobSrc && !wasBlobPoster) return false;
  el.dataset.blobReverted = "1";                      // one attempt only, never a loop
  try {
    if (wasBlobPoster && el.dataset.origPoster) el.setAttribute("poster", el.dataset.origPoster);
    if (wasBlobSrc && el.dataset.origSrc) {
      const at = el.currentTime || 0;
      el.src = el.dataset.origSrc;
      try { el.load(); } catch (_) {}
      if (el.tagName === "VIDEO") {
        el.addEventListener("loadedmetadata", function () {
          try { if (at > 0 && at < (el.duration || Infinity)) el.currentTime = at; } catch (_) {}
          const p = el.play(); if (p && p.catch) p.catch(function () {});
        }, { once: true });
      }
    }
  } catch (_) { return false; }
  return true;
}

/* ---- Build the pages (one CSS 3D "leaf" per entry) ---------------------- */
const flipbookEl  = document.getElementById("flipbook");
const pageStackEl = flipbookEl ? flipbookEl.querySelector(".page-stack") : null;   // right-side page stack
const flipScaleEl = document.getElementById("flipScale");
const coverScene  = document.getElementById("coverScene");
// ONE full 16:9 page per view (single display). page 1 = entry 1. The themed
// book frame forms the left spine/cover edge (always visible when open); pages
// flip normally. No two-page spread.
const totalPages = pages.length;
// Which leaf is the embedded LBD game (-1 if none). Used to show/hide the overlay.
const LBD_INDEX = pages.findIndex(function (p) { return p.type === "lbd"; });

// Each leaf is a full 16:9 page hinged on the LEFT spine:
//   • FRONT = the page's full-bleed image / video (+ its speech bubble, if any).
//   • BACK  = a BLANK parchment sheet (seen edge-on while the page turns).
const leaves = [];
pages.forEach(function (page, i) {
  const leaf = document.createElement("div");
  leaf.className = "leaf";

  const front = document.createElement("div");
  front.className = "face front";
  if (page.type === "end") {
    // THE END — a real final page (cream "paper") with a gold-plum title + Replay.
    front.classList.add("end-page");
    front.innerHTML =
      '<div class="end-page-inner">' +
        '<div class="end-title">THE&nbsp;END</div>' +
        '<button class="replay-btn" id="replayBtn" type="button" aria-label="Replay from the beginning">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>' +
          '</svg>' +
          '<span>Replay</span>' +
        '</button>' +
      '</div>';
  } else {
    front.appendChild(makeMedia(page, i));                    // full-bleed image / video
  }
  const curl = document.createElement("div");               // moving page-curl shading
  curl.className = "curl";
  front.appendChild(curl);

  const back = document.createElement("div");
  back.className = "face back";                             // blank reverse side (no content)

  leaf.appendChild(front);
  leaf.appendChild(back);
  flipbookEl.appendChild(leaf);
  leaves.push(leaf);
});

/* ---- State + element references ----------------------------------------- */
const bookStage  = document.getElementById("bookStage");
const book       = document.getElementById("book");
const bookPop    = document.getElementById("bookPop");
const bookFloat  = document.getElementById("bookFloat");
const cover      = document.getElementById("cover");
const hint       = document.getElementById("hint");
const cornerPrev  = document.getElementById("cornerPrev");
const cornerNext  = document.getElementById("cornerNext");
const replayBtn   = document.getElementById("replayBtn");   // lives on the THE END page (built above)

/* ==========================================================================
   PRELOADER  —  everything downloads behind a bar; PLAY appears only at 100%.
   --------------------------------------------------------------------------
   WHY. The story is ~24MB of WebM, Ogg and WebP, and the embedded game paints
   its sprites as CSS background-image on nodes that start display:none — and a
   hidden node's background-image is NEVER fetched. So without this, the reader
   opened the book instantly and then hit a stall on page 1, and the game hit
   the network again mid-play. Now the wait is honest, visible, and once.

   HOW.
     • Weights come from asset-manifest.js — REAL on-disk byte sizes generated
       from the files themselves (tools/gen-asset-manifest.mjs), so the bar is
       accurate from frame one instead of guessing and lurching. Each transfer
       then refines its own weight from Content-Length.
     • Progress is read from a STREAMING reader, so it moves with actual bytes
       rather than jumping per-file, and it is clamped monotonic — it can never
       go backwards when a Content-Length correction lands.
     • SMALLEST FIRST. The manifest is emitted in ascending size order, so the
       cover art, sprites and posters all land in the first second or two rather
       than being starved behind a 4MB video.
     • Media elements are swapped to blob: URLs, so "loaded" means the bytes are
       in this page, not merely somewhere in a cache that may have evicted them.
     • NOTHING BLOCKS. A 404, a stall, an abort, a CSP refusal, or file:// (where
       fetch of a plain path is forbidden) all count as done and leave the element
       on its original URL. The bar always reaches 100% and PLAY always appears.
   ========================================================================== */
/* The two flip sounds, named here so the preloader can hand their bytes to the
   fallback <audio> elements further down. Ogg/Opus: Chrome, Edge, Firefox, Safari 17+. */
const SFX_FLIP_URL  = "sfx/Page%20flip.ogg";
const SFX_COVER_URL = "sfx/cover%20page%20flip.ogg";

const PRELOAD_CONCURRENCY = 5;      // enough to fill the pipe, few enough to stay ordered
const PRELOAD_STALL_MS    = 15000;  // no bytes for this long → abort that ONE transfer

const loaderEl   = document.getElementById("loader");
const loaderFill = document.getElementById("loaderFill");
const loaderPct  = document.getElementById("loaderPct");

let assetsReady   = false;   // has the preloader finished (however it finished)?
let startPending  = false;   // someone tried to start the book before it was ready

/* Files whose bytes belong on a specific element once local. Everything else in
   the manifest is warmed for the HTTP cache only — which is the ONLY mechanism
   available for the game's own assets, since it fetches those itself from inside
   the iframe and cannot be handed a blob from out here. */
function blobTargetsFor(url) {
  const out = [];
  leaves.forEach(function (leaf) {
    const v = leaf.querySelector("video.page-media");
    if (v && v.dataset.origSrc    === url) out.push({ el: v, prop: "src" });
    if (v && v.dataset.origPoster === url) out.push({ el: v, prop: "poster" });
    const im = leaf.querySelector("img.page-media");
    if (im && im.dataset.poster === url) out.push({ el: im, prop: "src" });
  });
  if (url === SFX_FLIP_URL)  out.push({ el: flipSound,      prop: "src" });
  if (url === SFX_COVER_URL) out.push({ el: coverFlipSound, prop: "src" });
  return out;
}

/* Put a local blob on an element, remembering the original so the error path can
   put it back (see the blob fallback in the MEDIA HARDENING section). */
function applyBlob(target, blobUrl, origUrl) {
  const el = target.el;
  try {
    if (target.prop === "poster") {
      el.dataset.blobPoster = blobUrl;
      el.setAttribute("poster", blobUrl);
    } else {
      el.dataset.blobSrc = blobUrl;
      el.dataset.origSrc = el.dataset.origSrc || origUrl;
      el.src = blobUrl;
    }
  } catch (_) {}
}

const preloadState = { total: 0, entries: [], shown: 0, done: 0 };

function preloadPaint() {
  // HEARTBEAT for the safety net in index.html. It releases the PLAY button only if
  // this stops being stamped — never on a wall-clock deadline, so a slow connection
  // is left to finish in its own time instead of being cut off mid-download.
  window.__preloadHeartbeat = Date.now();
  const t = preloadState.total || 1;
  let got = 0;
  for (let i = 0; i < preloadState.entries.length; i++) got += preloadState.entries[i].got;
  const pct = Math.max(0, Math.min(100, (got / t) * 100));
  // MONOTONIC: a Content-Length correction can shrink the denominator mid-flight,
  // which would otherwise make the bar twitch backwards.
  if (pct > preloadState.shown) preloadState.shown = pct;
  const p = preloadState.shown;
  if (loaderFill) loaderFill.style.width = p.toFixed(1) + "%";
  if (loaderPct)  loaderPct.textContent  = Math.floor(p) + "%";
  if (loaderEl)   loaderEl.setAttribute("aria-valuenow", String(Math.floor(p)));
}

/* Fetch ONE file with byte-accurate progress. Resolves to a Blob, or null if the
   transfer failed in any way — the caller treats null as "done, keep the original
   URL", so a failure costs the reader nothing but a cache miss later. */
function preloadFetch(entry) {
  return new Promise(function (resolve) {
    let ctrl = null;
    try { ctrl = new AbortController(); } catch (_) {}
    let lastByteAt = Date.now();
    // A per-transfer STALL timeout, not a total one: a 4MB video on a slow phone
    // is allowed to take a minute, but a connection that has gone silent is not
    // allowed to hold the bar hostage.
    const stall = setInterval(function () {
      if (Date.now() - lastByteAt > PRELOAD_STALL_MS && ctrl) { try { ctrl.abort(); } catch (_) {} }
    }, 2000);
    const finish = function (blob) { clearInterval(stall); resolve(blob || null); };

    let req;
    try {
      req = fetch(entry.url, ctrl ? { signal: ctrl.signal } : undefined);
    } catch (_) { finish(null); return; }             // file:// throws synchronously

    req.then(function (res) {
      if (!res.ok) { finish(null); return; }
      // Refine this file's weight from the real transfer size.
      const cl = Number(res.headers.get("content-length") || 0);
      if (cl > 0 && cl !== entry.size) {
        preloadState.total += cl - entry.size;
        entry.size = cl;
      }
      if (!res.body || typeof res.body.getReader !== "function") {
        // No streaming support → one lump, credited on arrival.
        return res.blob().then(function (b) { entry.got = entry.size; preloadPaint(); finish(b); });
      }
      const reader = res.body.getReader();
      const chunks = [];
      const type = res.headers.get("content-type") || "";
      const pump = function () {
        return reader.read().then(function (r) {
          if (r.done) { finish(new Blob(chunks, { type: type })); return; }
          chunks.push(r.value);
          lastByteAt = Date.now();
          entry.got = Math.min(entry.size, entry.got + r.value.length);
          preloadPaint();
          return pump();
        });
      };
      return pump();
    }).catch(function () { finish(null); });
  });
}

/* Reveal PLAY. Called exactly once, from whichever path finishes first. */
function preloadFinish() {
  if (assetsReady) return;
  assetsReady = true;
  preloadState.shown = 100;
  preloadPaint();
  // A short beat so the bar is SEEN to reach 100 rather than vanishing at 98 — but no longer
  // than that. This was 260ms, which on top of the entrance animation put more than half a
  // second between "loaded" and "ready to tap"; the bar still reads as complete at 120.
  setTimeout(function () {
    document.body.classList.remove("is-loading");
    if (hint) {
      hint.classList.remove("pop-in");
      void hint.offsetWidth;
      hint.classList.add("pop-in");
    }
    // Now that the pipe is free, let the game boot silently in its hidden iframe.
    // Its assets are already in cache, so this costs nothing.
    warmLbdInBackground();
    // Someone hit PLAY / Enter while we were still loading — honour it now.
    if (startPending) { startPending = false; openBook(); }
  }, 120);
}

(function runPreloader() {
  const table = window.ASSET_MANIFEST || {};
  const urls = Object.keys(table);
  if (!urls.length) { preloadFinish(); return; }      // no manifest → never block

  // Ascending size. The generator already emits this order; re-sorting here means
  // a hand-edited manifest still gets small-files-first behaviour.
  urls.sort(function (a, b) { return table[a] - table[b]; });
  preloadState.entries = urls.map(function (u) { return { url: u, size: table[u] || 1, got: 0 }; });
  preloadState.total = preloadState.entries.reduce(function (s, e) { return s + e.size; }, 0);
  preloadPaint();

  let next = 0, live = 0;
  function pump() {
    while (live < PRELOAD_CONCURRENCY && next < preloadState.entries.length) {
      const entry = preloadState.entries[next++];
      live++;
      preloadFetch(entry).then(function (blob) {
        if (blob) {
          const targets = blobTargetsFor(entry.url);
          if (targets.length) {
            const bu = URL.createObjectURL(blob);
            targets.forEach(function (t) { applyBlob(t, bu, entry.url); });
          }
        }
        entry.got = entry.size;                        // full credit either way
        preloadState.done++;
        preloadPaint();
        live--;
        if (preloadState.done >= preloadState.entries.length) preloadFinish();
        else pump();
      });
    }
  }
  pump();
})();

/* ==========================================================================
   LBD OVERLAY  —  the "Royal Bloom" game (game/) embedded as one page.
   --------------------------------------------------------------------------
   WHY AN IFRAME, AT BODY LEVEL. Two whole apps, each owning its own globals,
   element ids and full-viewport scaling — merged into one DOM they collide, so
   the game stays behind an iframe boundary. And that iframe is a CHILD OF <body>,
   never of the book: .flip-scale carries a CSS transform, and a transform makes
   every position:fixed descendant resolve against IT instead of the viewport, so
   an iframe mounted inside the book could never reach true fullscreen.

   WHY IT IS ALREADY RUNNING BEFORE YOU GET THERE. The game is ~10MB of art and
   audio. Fetched on arrival that is a visible stall, and a miserable one on
   mobile data. Instead:
     • the flipbook stays the ONLY blocking resource — nothing below runs until
       the shell has fired `load` and gone idle;
     • then the iframe src is set and the game boots SILENTLY, hidden, while the
       reader is still on the cover or an early page (verified safe: the game
       plays no audio until a tap — see warmLbdInBackground);
     • the game's own embed-bridge then trickles every level's art and audio into
       cache during idle slices, which is the part that kills mid-play lag.
   Landing on the page is therefore a reveal, not a download.

   THE FLOW.
     • land     : the overlay is parked exactly over the page rectangle, so the
                  game's intro screen reads as PRINTED INTO THE BOOK.
     • "Let's Go": the game posts {source:"lbd", type:"lbd-start"} → the overlay
                  smoothly expands to true fullscreen and the book chrome hides.
     • finished : the game posts {source:"lbd", type:"lbd-complete"} (after its
                  closing voice-over) → the overlay shrinks back into the page and
                  the book turns to the next story page on its own.
     • leaving  : the iframe is torn down to about:blank — which is what kills the
                  game's audio instantly — and then immediately re-pointed at the
                  game so it re-boots silently from cache. A revisit is both
                  INSTANT and freshly at the intro.
   ========================================================================== */
const lbdStage = document.getElementById("lbdStage");
const lbdFrame = document.getElementById("lbdFrame");
const lbdNext  = document.getElementById("lbdNext");   // "Next" — shown once the game ends
let lbdFullscreen = false;   // is the overlay expanded to full screen right now?
let lbdStarted    = false;   // has the reader tapped "Let's Go" this visit?
let lbdWasOn      = false;   // was the overlay showing on the previous refresh?
let lbdExiting    = false;   // guard so the exit only runs once
let lbdReady      = false;   // has the hidden game reported its engine is up?
let lbdRecovered  = false;   // have we already spent this visit's one boot retry?
let lbdRecoveryTimer = null;
let lbdExitTimer  = null;
let lbdNextTimer  = null;   // fallback: arm the shell's own Next if the game never offers one

/* ---- The game's intro artwork, used in two places ----------------------
   …behind the iframe, so the overlay's first paint is already the picture the
   reader is about to see rather than a dark flash, and on the page leaf itself,
   which is what you glimpse while the page is mid-turn.
   Both are set POST-LOAD, never at parse time: the file lives in game/, and one
   game asset fetched during the flipbook's own load is still a game asset on the
   critical path. */
function warmLbdPoster() {
  if (LBD_INDEX < 0) return;
  const poster = pages[LBD_INDEX].poster;
  if (!poster) return;
  if (lbdFrame) lbdFrame.style.background = "#0a0f2d url('" + poster + "') center/cover no-repeat";
  const leafImg = leaves[LBD_INDEX] && leaves[LBD_INDEX].querySelector("img.page-media");
  if (leafImg && !leafImg.getAttribute("src")) leafImg.src = poster;
}

/* ---- Idle scheduling ----------------------------------------------------
   requestIdleCallback where it exists; Safari (and older iOS) have none, so a
   plain timeout stands in. Either way the work lands AFTER the shell is up. */
function onIdle(fn, timeout) {
  if (window.requestIdleCallback) window.requestIdleCallback(fn, { timeout: timeout || 2000 });
  else setTimeout(fn, 200);
}

/* ---- Point the iframe at the game (idempotent) ------------------------- */
function ensureLbdLoaded() {
  if (LBD_INDEX < 0 || !lbdFrame || lbdFrame.dataset.loaded) return;
  lbdFrame.dataset.loaded = "1";
  lbdFrame.src = pages[LBD_INDEX].src;
}

/* ---- BACKGROUND WARM-UP -------------------------------------------------
   ⚠ This is only safe because the game does not make a sound until it is
   touched. Checked before wiring it up, and worth re-checking if the game is
   ever re-authored:
     • AudioManager.playBGM() parks the request in `pendingBgm` and refuses to
       play until unlock(), which is bound to the first pointerdown/touch/key/click;
     • the only playBGM() call is the "Let's Go" click callback in main.js;
     • ButtonAnimator does nothing at boot but pulse the button — no clip;
     • every startNarration()/playSFX() call sits inside GameManager.start(),
       and a GameManager only starts when its level node is activated, which is
       also downstream of that same tap.
   If a future build DOES autoplay on load, do not warm the live iframe — prefetch
   the asset list with fetch() instead and set src only on page-land. */
function warmLbdInBackground() {
  if (LBD_INDEX < 0 || !lbdFrame || lbdFrame.dataset.loaded) return;
  onIdle(function () {
    warmLbdPoster();     // the page thumbnail + the frame's backdrop
    ensureLbdLoaded();   // …then boot the game itself, silently
  }, 4000);
}
// Kicked off by preloadFinish() — i.e. once the loading bar is done and the pipe is
// free — rather than on window.load, so the silent game boot never competes with the
// bar for bandwidth. By then every game asset is already in the HTTP cache, so the
// boot is essentially free. A late fallback covers the (guarded) case where the
// preloader is absent entirely.
window.addEventListener("load", function () {
  setTimeout(function () { if (assetsReady) warmLbdInBackground(); }, 1500);
}, { once: true });

/* ---- Tear down + immediately re-warm ------------------------------------
   about:blank is the only reliable way to stop ALL of a frame's audio at once
   (pausing from outside would need same-origin poking at its internals, and a
   half-torn-down game can still fire a queued clip). We then re-point it straight
   away: everything is in HTTP cache, so the silent re-boot costs nothing and the
   next visit is instant AND freshly at the intro. */
function resetLbd(rewarm) {
  if (!lbdFrame) return;
  lbdStarted = false;
  lbdReady   = false;
  hideLbdNext();                           // the frame is going back to the intro

  clearTimeout(lbdRecoveryTimer); lbdRecoveryTimer = null;
  lbdRecovered = false;                    // a fresh visit gets its own retry budget
  lbdFrame.src = "about:blank";
  lbdFrame.dataset.loaded = "";
  if (rewarm !== false) onIdle(function () { ensureLbdLoaded(); }, 3000);
}

/* ---- Park the overlay exactly over the on-screen page rectangle --------- */
function positionLbdStage() {
  if (!lbdStage) return;
  const r = flipScaleEl.getBoundingClientRect();   // the scaled 1280×720 page area
  lbdStage.style.left   = r.left   + "px";
  lbdStage.style.top    = r.top    + "px";
  lbdStage.style.width  = r.width  + "px";
  lbdStage.style.height = r.height + "px";
}
let lbdAnimTimer = null;
const LBD_MORPH_MS = 400;   // keep in sync with .lbd-stage.lbd-anim in styles.css

/* ---- Expand to / shrink from full screen ---------------------------------
   THE BOX IS NEVER ANIMATED — only a transform is.

   This used to transition left/top/width/height from the page rectangle to the viewport. Those
   are LAYOUT properties and this box holds an IFRAME, so each frame of the morph handed the game
   a brand-new viewport: it re-fitted its 1920x1080 stage ~24 times in 400ms, on the main thread,
   always a frame behind the border the compositor had already moved. The picture chased its own
   frame rather than travelling with it — the reported downward slide and edge flicker, worst on a
   tablet because that is where the page-rect (16:9) and the viewport differ most in shape.

   So the geometry now JUMPS to its final value in one step (one resize, one re-fit) and the
   overlay is carried from where it was to where it is going on a transform, which the compositor
   animates without laying anything out and without the iframe noticing at all. Same FIRST / INVERT
   / PLAY shape as smoothRescale() above, for the same reason. */
function setLbdFullscreen(on) {
  if (!lbdStage) return;
  const from = lbdStage.getBoundingClientRect();   // FIRST: where the overlay is right now
  lbdFullscreen = on;

  // ---- final geometry, in ONE step (no transition on the box, ever) ----
  clearTimeout(lbdAnimTimer);
  lbdStage.classList.remove("lbd-anim");
  lbdStage.style.transform = "";                   // measure the target undistorted
  positionLbdStage();                              // the inline page rect .fullscreen overrides
  lbdStage.classList.toggle("fullscreen", on);
  document.body.classList.toggle("lbd-fullscreen", on);
  const to = lbdStage.getBoundingClientRect();

  // ---- INVERT: park it back over its old footprint ----
  // The scale is UNIFORM, never scaleX/scaleY. The game letterboxes its own 16:9 stage inside
  // whatever box it is given, so matching the WIDTH lands the picture exactly where it already
  // was; a non-uniform scale would match the box but visibly stretch the game while it moved.
  if (from.width > 0 && from.height > 0 && to.width > 0 && to.height > 0) {
    const k  = from.width / to.width;
    const tx = (from.left + from.width  / 2) - (to.left + to.width  / 2);
    const ty = (from.top  + from.height / 2) - (to.top  + to.height / 2);
    lbdStage.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + k + ")";
    void lbdStage.getBoundingClientRect();         // flush as the transition's starting style
    requestAnimationFrame(function () {            // PLAY: glide the correction away
      lbdStage.classList.add("lbd-anim");
      lbdStage.style.transform = "";
    });
  }
  // Leave nothing behind: a lingering transform would keep this a containing block for any
  // fixed-position descendant and hold the compositing layer open.
  lbdAnimTimer = setTimeout(function () {
    lbdStage.classList.remove("lbd-anim");
    lbdStage.style.transform = "";
  }, LBD_MORPH_MS + 120);

  if (on) hideFlipHint();                    // the book's nudges have no business over a game
  updateProgress();                          // book chrome follows the overlay
}

/* ---- Recovery: the silent boot is the ONE thing that can fail unseen -----
   Booting behind the reader's back means a failure is also behind their back: a
   dropped connection on mobile data, or a frame the browser threw away to save
   memory, and the reader lands on a blank page with no way to ask for a retry.
   The frame reports "lbd-ready" when its engine is up, so if we land WITHOUT that
   report, re-point the src once. Guarded twice over: never more than one retry,
   and never once the child has actually started playing. */
function armLbdRecovery() {
  if (lbdReady || lbdRecovered || lbdRecoveryTimer) return;
  lbdRecoveryTimer = setTimeout(function () {
    lbdRecoveryTimer = null;
    if (lbdReady || lbdRecovered || lbdStarted) return;
    if (flipped !== LBD_INDEX) return;
    lbdRecovered = true;
    lbdFrame.dataset.loaded = "";          // force ensureLbdLoaded to act
    ensureLbdLoaded();
  }, 2500);
}

/* ---- Show / hide the overlay as pages turn ------------------------------
   Landing is a pure reveal: the game is already booted behind the scenes, so
   there is nothing to wait for. Leaving tears the frame down (audio stops) and
   re-warms it. We never hide while fullscreen — that would rip a game out from
   under a child mid-play. */
function updateLbdOverlay() {
  if (LBD_INDEX < 0 || !lbdStage) return;
  const onLbd = opened && ready && !animating && flipped === LBD_INDEX;
  if (onLbd) {
    /* ---- THE GAME PAGE IS GATED UNTIL IT HAS BEEN PLAYED ----------------
       On a first visit NEXT must never be on screen here: the only way forward is
       to finish the game. Once it HAS been finished, coming back leaves the gate
       open — the reader is free to move on again without being asked for the whole
       activity a second time. (The iframe is still torn down and re-booted on
       every visit, so the game itself is a fresh one to play if they want it;
       what carries over is only their having done it, in `pageCompleted`.)
       Re-armed on a FRESH ARRIVAL only (lbdWasOn is still false here). Doing it
       on every refresh would slam the gate shut again in the moment between
       exitLbd()'s clearGate() and its goNext(), and trap the reader on the page
       they had just finished. */
    if (!lbdWasOn) {
      gatesCleared[LBD_INDEX] = !!pageCompleted[LBD_INDEX];
      updateProgress();
    }
    ensureLbdLoaded();                    // no-op in practice: already warm
    armLbdRecovery();                     // …unless the silent boot never landed
    if (!lbdFullscreen) positionLbdStage();
    lbdStage.classList.add("visible");
    lbdStage.setAttribute("aria-hidden", "false");
    lbdWasOn = true;
  } else if (!lbdFullscreen) {           // never hide mid-game
    lbdStage.classList.remove("visible");
    lbdStage.setAttribute("aria-hidden", "true");
    if (lbdWasOn) {
      lbdWasOn = false;
      resetLbd();                         // audio stops at once, then silently re-boots
    }
  }
}

/* ---- Hard reset: used by every path that leaves the book entirely --------
   (Home / Replay / close can all fire while the game is still up — including
   mid-fullscreen — and they bypass the page-change route above, so they call
   THIS instead of relying on updateLbdOverlay.) */
function teardownLbd(rewarm) {
  if (!lbdStage) return;
  clearTimeout(lbdExitTimer);
  lbdExiting = false;
  setLbdFullscreen(false);
  lbdStage.classList.remove("visible");
  lbdStage.setAttribute("aria-hidden", "true");
  lbdWasOn = false;
  resetLbd(rewarm);
}

/* ---- The game has ENDED → offer the way out -----------------------------
   The game's OWN final screen now carries a gold Next (bottom-right, stage
   1710,972) and tapping it posts "lbd-exit". That button is the exit: it is
   authored inside the 1920×1080 stage, so it scales, hops and hints like every
   other button the child has tapped for the last ten minutes, and this one below
   would otherwise land in the very same corner — two gold Nexts stacked.

   So this is now only a SAFETY NET. It arms on "lbd-complete" (the bridge has
   waited out the closing voice-over by then) and fires well after any real tap
   would have: if the game's button never appeared — an older build in a stale
   cache, a torn-down frame, a script that failed after the final screen — the
   shell's own Next appears and the reader is still not stranded.

   We do NOT turn the page on either path: the reader leaves on their own tap, so
   a child who wants to sit and look at the confetti can. Until one of them is
   tapped the page stays gated and the book's own NEXT stays hidden. */
const LBD_NEXT_FALLBACK_MS = 20000;   // comfortably past a real tap, short enough to rescue

function armLbdNextFallback() {
  clearTimeout(lbdNextTimer);
  lbdNextTimer = setTimeout(function () {
    lbdNextTimer = null;
    showLbdNext();
  }, LBD_NEXT_FALLBACK_MS);
}
function showLbdNext() {
  if (!lbdNext) { exitLbd(); return; }    // no button in the DOM → don't strand anyone
  lbdNext.hidden = false;
}
// Also disarms the fallback: every caller (exitLbd, resetLbd) is a path where the
// ending is over, and a timer left running would pop the button onto the intro of
// the next visit.
function hideLbdNext() {
  clearTimeout(lbdNextTimer); lbdNextTimer = null;
  if (lbdNext) lbdNext.hidden = true;
}
if (lbdNext) lbdNext.addEventListener("click", function () { exitLbd(); });

/* ---- Leaving the finished game -----------------------------------------
   Fold the game back into the page, then turn to the next story page. */
function exitLbd() {
  if (lbdExiting) return;
  lbdExiting = true;
  hideLbdNext();                          // it must not linger through the shrink
  clearGate(LBD_INDEX);                   // the game is done → this page's gate opens
  setLbdFullscreen(false);                // shrink the game back into the page rectangle
  lbdExitTimer = setTimeout(function () {
    lbdStage.classList.remove("visible"); // …then fade the overlay out
    lbdStage.setAttribute("aria-hidden", "true");
    lbdWasOn = false;
    resetLbd();                           // audio stops; re-boots silently for a revisit
    lbdExiting = false;
    if (flipped === LBD_INDEX) goNext();  // …and read on
  }, 430);                                // just after the shrink transition (.4s)
}

/* ---- The game's side of the handshake ---------------------------------- */
window.addEventListener("message", function (e) {
  const d = e && e.data;
  if (!d || d.source !== "lbd") return;
  if (d.type === "lbd-ready") {
    lbdReady = true;                      // hidden boot succeeded
  } else if (d.type === "lbd-start") {
    // "Let's Go" was tapped: grow the game out of the page to the whole screen.
    lbdStarted = true;
    if (!lbdFullscreen) setLbdFullscreen(true);
  } else if (d.type === "lbd-complete") {
    armLbdNextFallback();                 // the game offers its own Next; this only rescues
  } else if (d.type === "lbd-exit") {
    exitLbd();                            // …and that Next was tapped: fold up and read on
  }
});

let opened = false;      // has the cover been opened?
let ready  = false;      // has the cover FINISHED opening? (flips allowed only then)
let flipped = 0;         // how many leaves are currently turned to the left
let animating = false;   // guard so a new turn can't start mid-flip
let closing = false;     // is the cover currently swinging SHUT (Home / Replay)?
const FLIP_MS = 1150;    // keep in sync with --flip-ms in styles.css
const COVER_OPEN_MS = 6000;  // keep in sync with the coverOpen animation in styles.css
const CLOSE_SETTLE_MS = 560;  // keep in sync with the bookSettle animation in styles.css
const COVER_CLOSE_MS  = 2000; // Home/Replay: cover swings shut (reverse open); sync with coverClose in styles.css
let _openTimer = null;   // pending "cover finished opening" timer
let _closeTimer = null;   // pending "cover finished closing → back to the cover" timer
let _flipTimer = null;   // pending "this page-turn has settled" timer
let _flipLeaf  = null;   // the leaf that pending timer belongs to
let _dragLeaf  = null;   // set while a finger-drag hands its leaf to goNext/goPrev

/* ---- Responsive: scale the FIXED 1280x720 book to fit the viewport --------
   The book gets 88% of the width / 80% of the height, with two safeguards that
   keep the controls clear of the artwork:
     • HEIGHT — never let the book grow so tall that it covers the bottom controls.
     • WIDTH  — reserve the bottom-corner buttons' own footprint, so the artwork can
                never end up sitting underneath BACK or NEXT.
   On a normal 16:9 screen the height factor is the smaller of the two, so the book
   looks exactly as before; the width reserve only bites on tall/narrow viewports.
   Only this CSS transform scale changes, so the paper curl is never distorted. */
/* CSS clamp(min, preferred, max) in JS — used to mirror the nav-button clamps. */
function clampPx(min, preferred, max) {
  return Math.max(min, Math.min(preferred, max));
}
function fitScale() {
  const CTRL = 64;                                   // min top/bottom room kept for the controls
  const vw = window.innerWidth, vh = window.innerHeight;
  // MIRROR of --nav-box / --nav-arrow-x in styles.css (NAV CONTROL SET block).
  // If those CSS clamps change, change these in the SAME commit.
  const btnW = clampPx(84, vw * 0.10,  124);         // --nav-box:     clamp(84px, 10vw, 124px)
  const btnX = clampPx(12, vw * 0.025,  34);         // --nav-arrow-x: clamp(12px, 2.5vw, 34px)
  // Reserve BOTH bottom-corner buttons' horizontal footprint (+6px of air), so
  // the artwork can never end up sitting underneath BACK or NEXT.
  const availW = Math.min(vw * 0.88, vw - 2 * (btnW + btnX + 6));
  const availH = Math.min(vh * 0.80, vh - CTRL * 2);
  const s = Math.max(0.1, Math.min(availW / 1280, availH / 720));   // never collapse to 0
  flipScaleEl.style.setProperty("--book-scale", s.toFixed(4));
  // keep the page-turn hint glued to the forward arrow when the viewport changes
  if (flipHint && flipHint.classList.contains("show")) positionFlipHint();
}

/* ---- Render / stacking for the CSS leaf flip ---------------------------- */
// A TURNED leaf sits to the left (rotateY -180deg, showing its blank back over
// the cover); an UN-turned leaf lies flat on top of the cover. z-index keeps the
// current (top un-turned) page in front, and stacks more-recently turned leaves
// above earlier ones on the left pile.
function updateZ() {
  leaves.forEach(function (leaf, i) {
    leaf.style.zIndex = (i < flipped) ? (200 + i) : (100 - i);
  });
}
/* ---- LEAF WINDOWING  (GPU texture budget) --------------------------------
   Every leaf is a 3D-transformed element with `will-change: transform` holding a
   1080p <video> — i.e. several compositing layers each, all alive at once. Past
   the GPU's texture budget the browser starts EVICTING textures, and evicted
   content paints BLANK. It is intermittent, it depends on the machine's VRAM and
   whatever else is on screen, and devtools looks perfectly clean while it happens,
   which is what makes it so easy to misdiagnose.

   So only the leaves that can actually be seen stay rendered. Given the stacking
   in updateZ(), everything outside a 3-leaf window is GUARANTEED occluded:
     • index  <  flipped - 1  → buried under the turned pile, whose top sheet is
                                leaf (flipped - 1), an opaque full-page sheet.
     • index  >  flipped + 1  → buried under the current page, likewise opaque.
   The window keeps flipped-1 (the top of the turned pile, visible while a page
   swings back) and flipped+1 (revealed underneath as the current page lifts).

   The occluded ones get visibility:hidden — which actually RELEASES the layer,
   where opacity:0 or backface-visibility would keep it resident — plus
   will-change:auto, since a promotion hint on something that isn't being animated
   is pure texture cost. Re-run on every navigation, from renderLeaves(). */
const LEAF_WINDOW = 1;          // leaves kept live either side of the current page
function windowLeaves() {
  const lo = flipped - LEAF_WINDOW, hi = flipped + LEAF_WINDOW;
  leaves.forEach(function (leaf, i) {
    const live = i >= lo && i <= hi;
    if (live) {
      if (leaf.style.visibility) leaf.style.visibility = "";
      leaf.style.willChange = "transform";
    } else {
      leaf.style.visibility = "hidden";
      leaf.style.willChange = "auto";
    }
  });
}

function renderLeaves() {
  leaves.forEach(function (leaf, i) {
    if (i < flipped) leaf.classList.add("flipped");
    else             leaf.classList.remove("flipped");
  });
  updateZ();
  windowLeaves();
}

/* ---- Per-page media -----------------------------------------------------
   Play the CURRENT page's video (pause every other), and pop the current page's
   speech bubble in ONCE, only after the page has fully settled. Called after
   each flip completes and once the cover has finished opening. */
let mediaDelayTimer = null;   // pending "start this video after N ms" timer
let mediaDelayIdx = -1;       // which page that pending timer belongs to
let lastMediaIdx = -1;        // last page refreshMedia handled (to arm the blink once)

/* VISIT TOKEN — bumped on every fresh arrival (see refreshMedia). Anything async
   that belongs to one visit captures it and bails out if it has moved on: a pending
   start-delay, a queued rewind, a watchdog re-arm. Without it a callback from the
   PREVIOUS visit to a page can still fire after the reader has come back to it, and
   a stale callback is exactly what un-gates a page that has not been watched yet. */
let visitToken = 0;

/* Put a clip back on its FIRST FRAME, for real.
   `v.currentTime = 0` is normally enough and takes effect synchronously — including
   on a clip that has played to the end, which is the case that matters most (it
   clears `ended` as well as the timestamp, so the element is a fresh scene again and
   not a last frame waiting to be re-shown).
   It can still be dropped, though, on an element with no metadata yet — every clip
   starts on preload="none", and one that has just been re-loaded (see revertBlob)
   goes back there — and a dropped rewind is a scene that carries on from the middle
   of the previous visit. So the seek is re-applied once the element knows enough to
   perform it, using LOAD events only: `canplay` also fires when a mid-scene buffer
   stall refills, and that would snap a scene the reader is watching back to 00:00.
   Guarded by the visit token, and it replaces its own pending retry, so flipping
   back and forth can neither restart the wrong visit nor pile listeners onto the
   element. */
function rewindToStart(v, token) {
  if (v._pendingRewind) {                             // drop an earlier visit's retry
    v.removeEventListener("loadedmetadata", v._pendingRewind);
    v.removeEventListener("loadeddata", v._pendingRewind);
    v._pendingRewind = null;
  }
  try { v.currentTime = 0; } catch (_) {}
  if (v.readyState >= 1 /* HAVE_METADATA */ && v.currentTime < 0.05) return;   // it took
  const fix = function () {
    v.removeEventListener("loadedmetadata", fix);      // one shot, however it got here
    v.removeEventListener("loadeddata", fix);
    v._pendingRewind = null;
    if (token !== visitToken) return;                  // an older visit — not ours to touch
    try { if (v.currentTime > 0.05) v.currentTime = 0; } catch (_) {}
  };
  v._pendingRewind = fix;
  v.addEventListener("loadedmetadata", fix);
  v.addEventListener("loadeddata", fix);
}

/* `restart` = the reader has just ARRIVED on this page, so the scene must begin at
   00:00 — animation and voiceover together, however the page was left last time.
   Without it a clip that was interrupted mid-scene resumed from wherever it was
   paused, so coming back to a page dropped the reader into the middle of a
   sentence with the animation already half-played.
   ⚠ It is NOT unconditional. refreshMedia() runs TWICE per turn (once as the flip
   starts, once when it settles ~FLIP_MS later); rewinding on both would restart
   every scene a beat after it began. Only the arrival call passes true — see the
   `arrived` flag in refreshMedia(). */
function playVideoNow(v, restart, token) {
  try {
    v.preload = "auto";                       // make sure it's buffering before we play
    if (restart || v.ended) rewindToStart(v, token === undefined ? visitToken : token);
    v.muted = false;                          // try WITH sound (primed in the Play gesture)
    const p = v.play();
    if (p && p.catch) p.catch(function () { v.muted = true; v.play().catch(function () {}); });
  } catch (_) {}
}

/* Every playable element on one page — video today, plus any <audio> a future page
   holds. The "stop everything else" sweeps go through this so they cover a whole page
   rather than only the kind of media the pages list happens to use right now. */
function pageMedia(leaf) {
  return leaf ? Array.prototype.slice.call(leaf.querySelectorAll("video.page-media, audio.page-media")) : [];
}

/* Buffer ONE page's video on demand (only the current + next page are ever
   warmed, so we never spin up all 25 decoders at once). */
function warmVideo(i) {
  const leaf = leaves[i];
  if (!leaf) return;
  const v = leaf.querySelector("video.page-media");
  if (v && v.preload !== "auto") { v.preload = "auto"; try { v.load(); } catch (_) {} }
}

/* Unlock ONE page's video for instant, sound-enabled playback: a muted
   play()→pause() done INSIDE a user gesture. We prime only the page being shown
   and the next one — priming all 25 at once was the opening lag. */
function primeVideo(i) {
  const leaf = leaves[i];
  if (!leaf) return;
  const v = leaf.querySelector("video.page-media");
  if (!v || v.dataset.primed) return;
  v.dataset.primed = "1";
  try {
    v.muted = true; v.preload = "auto";
    const p = v.play();                       // start within the gesture → element is "activated"
    if (p && p.catch) p.catch(function () {});
    v.pause();                                // pause synchronously
    v.currentTime = 0;
  } catch (_) {}
}

function refreshMedia() {
  const idx = flipped;                         // the front-most page right now
  // ARRIVAL vs RE-ASSERT. True only on the FIRST refreshMedia for this page, which
  // is the flip-start call — so it means "the reader just navigated here", by NEXT,
  // BACK, keyboard, swipe or any programmatic turn (they all route through
  // goNext/goPrev → turnLeaf). The settle call ~FLIP_MS later sees the same idx and
  // gets false, so it stays the idempotent safety net it was built to be.
  const arrived = (idx !== lastMediaIdx);
  if (arrived) {
    lastMediaIdx = idx;
    /* ---- EVERY VISIT REPLAYS THE SCENE; ONLY UNSEEN PAGES GATE -----------
       Landing on a page always starts its media over from 00:00 — no page ever
       resumes mid-sentence or sits on the last frame of a previous visit — and
       resetGatesOnArrival() then decides whether the story is held here:
         • never completed  → gated. NEXT is gone until the scene has run.
         • completed before → open. NEXT is waiting once the turn lands, so
           turning back to look at something never costs the reader the whole
           scene again to get forward.
       It is deliberately type-agnostic, so no page drifts into being the
       exception, and it cannot open a route past anything new: forward motion
       has always required finishing the page you are on.
       Bumping the visit token first is what makes it safe: every timer,
       "ended" handler and queued rewind still owned by the PREVIOUS visit is
       stale from this line onwards and cannot open a gate behind our back. */
    visitToken++;
    resetGatesOnArrival(idx);
  }
  // Left the page a delayed video was counting down on — or arrived on one afresh?
  // Cancel that countdown. (Arrival re-arms it below; without clearing it here the
  // old timer would survive alongside the new one and fire the scene twice.)
  if (mediaDelayTimer && (arrived || mediaDelayIdx !== idx)) {
    clearTimeout(mediaDelayTimer); mediaDelayTimer = null; mediaDelayIdx = -1;
  }
  // Buffer + gesture-unlock ONLY this page and the next (so the upcoming flip is
  // instant and keeps sound) — never all 25 videos at once.
  warmVideo(idx); warmVideo(idx + 1); primeVideo(idx + 1);
  // SILENCE every OTHER page's media, so only the page on screen can make a sound.
  // Muting as well as pausing is belt-and-braces against a clip a browser resumes on
  // its own (tab restore, a stray play()) talking over the page the reader is actually
  // on; playVideoNow un-mutes the one page it starts.
  // ⚠ THE PICTURE IS LEFT ALONE — deliberately. This used to rewind them too, and that
  // was wrong for one simple reason: the page being turned is ON SCREEN for the whole
  // ~1.15s of the flip. Rewinding it here meant the scene the reader had just finished
  // snapped back to its opening frame and played that while it rotated away — measured
  // at 48 visible frames of it. A page turning away should hold the last thing it
  // showed. Nothing is lost by not rewinding: restarting a scene belongs to ARRIVING on
  // it (playVideoNow → rewindToStart, in the arrival branch below), which runs before
  // the incoming page is ever painted, so a revisit still opens at 00:00 and no page
  // ever shows a stale frame.
  // pageMedia() rather than a video-only query, so an <audio> page — should the pages
  // list ever grow one — is silenced by the same sweep instead of being the one kind
  // of media that can play over the top of another page.
  leaves.forEach(function (leaf, i) {
    if (i === idx) return;
    pageMedia(leaf).forEach(function (m) {
      try { m.pause(); m.muted = true; } catch (_) {}
    });
  });
  // Start (or schedule) the current page's video.
  const cur = leaves[idx];
  const v = cur && cur.querySelector("video.page-media");
  if (v) {
    const delayMs = (pages[idx] && pages[idx].delay) ? pages[idx].delay : 0;
    if (delayMs > 0) {
      // Already playing this page, or already counting down for it → leave it alone
      // (so the flip-start + flip-end calls don't restart the 3s countdown).
      // A fresh ARRIVAL always falls through to the reset below, though: mediaDelayIdx
      // can still be pointing at this page from an earlier visit whose countdown has
      // already fired, and honouring that stale match would skip the rewind.
      if (!arrived && mediaDelayIdx === idx && (mediaDelayTimer || !v.paused)) { /* keep going */ }
      else {
        const token = visitToken;
        try { v.pause(); } catch (_) {}
        rewindToStart(v, token);                              // hold on the FIRST frame
        mediaDelayIdx = idx;
        mediaDelayTimer = setTimeout(function () {
          mediaDelayTimer = null;
          // Still on this page, and still the same visit — a countdown started by an
          // earlier visit must never start a scene for the current one.
          if (flipped === idx && token === visitToken) playVideoNow(v, true, token);
        }, delayMs);
      }
    } else {
      playVideoNow(v, arrived, visitToken);     // no delay → instant, from 00:00 on arrival
    }
    armVideoWatchdog(idx, v);                   // NEXT waits on "ended" — don't let a dead clip strand us
  } else {
    stopVideoWatchdog();                        // not a video page → nothing to watch
  }
  updateLbdOverlay();                           // show/hide the embedded LBD game
  // Right-side page stack shrinks toward the end: 3 sheets → … → 0 on the last page.
  if (pageStackEl) pageStackEl.dataset.count = String(Math.max(0, Math.min(3, totalPages - 1 - flipped)));
  // Restart the idle → page-turn-hint countdown for the page we've just landed on
  // (uses the NEW `flipped`, so the delay is right: 5s on page 1, 10s afterwards).
  if (typeof resetIdleHint === "function") resetIdleHint();
}

/* ---- Content gate -------------------------------------------------------
   Some pages hold the story until their content is finished (an embedded game,
   for instance): mark such a page `gate: true` in the pages list above (an "lbd"
   game page is gated automatically) and the forward flip stays LOCKED — NEXT is
   hidden, and every route into goNext() refuses — until clearGate() is called for
   it. Ungated pages are never locked.
   Like the video gate, this is PER VISIT: arriving on a gated page re-arms it (see
   resetGatesOnArrival), so a second visit asks for the activity again instead of
   waving the reader through on the strength of having finished it once. */
const gatesCleared = Object.create(null);
function pageIsGated(i) {
  const p = pages[i];
  return !!p && (p.gate === true || p.type === "lbd");
}
function clearGate(i) { gatesCleared[i] = true; pageCompleted[i] = true; updateProgress(); }

/* ---- VIDEO GATE ---------------------------------------------------------
   A video page holds the story until its clip has FULLY played: NEXT is HIDDEN
   while the video runs and appears — with the gold glow cue — the moment it ends,
   so the reader watches the whole scene, then taps to turn the page.
   GATED UNTIL WATCHED ONCE, then open on the way back. The flag is re-evaluated
   every time the reader lands on the page (resetGatesOnArrival, from refreshMedia):
   a scene they have never sat through gates the page, and one they HAVE leaves NEXT
   waiting for them as soon as the turn lands. Either way the clip itself restarts at
   00:00 — coming back to a page always replays its scene from the first frame, it
   just doesn't hold the story hostage to it a second time.
   Image pages and THE END are never video-gated.
   ESCAPE HATCHES (a page with no way forward is worse than an unwatched clip):
   the gate also opens on a media error, and on the stall watchdog below. */
const videoWatched = Object.create(null);
// Clips that can never play at all (missing file, bad codec, dead decoder). Unlike
// `videoWatched` this is NOT cleared on re-visit: the "error" event fires once, so a
// flag that a re-visit wiped would leave the page gated on an event that will never
// come again. Such a page is simply never gated.
const videoBroken = Object.create(null);
/* ---- HOW FAR THE READER HAS GOT --------------------------------------------
   Pages whose gate has been SATISFIED at least once this read — a clip watched to
   the end, an activity finished. This is what lets the reader move BACK and FORWARD
   again freely: arriving on a page that is already in here leaves its gate open, so
   NEXT is waiting once the turn lands instead of asking for the scene a second time.
   It is not a way past anything new. Moving forward has always required finishing the
   page you are on, so a page can only get in here by actually being completed, and a
   page the reader has never completed is still gated on arrival exactly as before —
   the skip the gate exists to prevent is still impossible.
   Cleared by Replay (resetToStart), so a fresh read earns every page again. */
const pageCompleted = Object.create(null);
function pageHasVideoGate(i) {
  const p = pages[i];
  return !!p && p.type === "video";
}
function markVideoWatched(i) {
  if (videoWatched[i]) return;
  videoWatched[i] = true;
  pageCompleted[i] = true;                              // …and remembered for the read
  updateProgress();                                     // → NEXT appears on this page
}
/* ---- RE-LOCK A PAGE ON ARRIVAL -------------------------------------------
   Called for EVERY page the reader lands on, whatever its type, so a revisit has to
   earn NEXT exactly like a first visit. It covers BOTH kinds of gate, because a gate
   that is remembered for the life of the read is a gate that can be walked past by
   flipping away and back:
     • VIDEO pages   — the clip must play through again.
     • GATED pages   — `gate: true`, and the game — the activity must be done again.
   A page with neither (an image, THE END) has nothing to re-lock and simply falls
   through to the updateProgress() below, so arrival leaves the controls in the one
   state isNextLocked() says they should be in — no page type is a special case.
   updateProgress() runs here rather than being left to the caller so the arrow is
   gone in the same frame the page is revealed, never live for a moment on a scene
   that has just gone back to 00:00. */
function resetGatesOnArrival(i) {
  // Already finished this page once? Then it stays open, and NEXT is there as soon as
  // the turn lands — flipping back to look at something must not cost the reader the
  // scene all over again to get forward. Never finished it? Gate it, first visit or
  // fifth. `done` is the whole difference between "coming back" and "arriving".
  const done = !!pageCompleted[i];
  if (pageHasVideoGate(i)) {
    if (done) videoWatched[i] = true; else delete videoWatched[i];
  }
  // The game page ALSO re-arms itself in updateLbdOverlay(), where the timing around
  // exitLbd() is delicate (see the note there) — it reads `pageCompleted` too, so the
  // two agree. Uniform across every gated page rather than special-cased for the one
  // page that happens to hold a game.
  if (pageIsGated(i)) gatesCleared[i] = done;
  updateProgress();
}
function isNextLocked() {
  if (lbdFullscreen) return true;                       // a fullscreen game owns the screen
  if (pageIsGated(flipped) && !gatesCleared[flipped]) return true;
  if (videoBroken[flipped]) return false;               // clip can never play → never trap them
  return pageHasVideoGate(flipped) && !videoWatched[flipped];   // clip must finish first
}

/* STALL WATCHDOG — the gate waits on "ended", so a clip that silently never
   progresses (autoplay blocked and never started, a network stall, a frozen
   decoder) would strand the reader. Poll the current page's playhead: if it has
   not advanced for WATCHDOG_STRIKES consecutive checks, open the gate. Ticks are
   skipped while the video is legitimately not running — during its own start
   `delay`, and while the tab is hidden (we pause videos there on purpose). */
const WATCHDOG_MS      = 4000;
const WATCHDOG_STRIKES = 4;      // → ~16s of zero progress before we let the reader through
const WATCHDOG_GRACE_MS = 6000;  // slack on top of the clip's own duration
const WATCHDOG_MAX_MS   = 90000; // ceiling for a clip whose duration never resolves
let _watchdogTimer = null;
let _durationTimer = null;
function stopVideoWatchdog() {
  if (_watchdogTimer) { clearInterval(_watchdogTimer); _watchdogTimer = null; }
  if (_durationTimer) { clearTimeout(_durationTimer);  _durationTimer = null; }
}

/* THREE independent ways this page's NEXT can appear, because a control that only
   ever unlocks on one media event is a control that can strand a reader:
     1. the "ended" event                    — the normal path (see makeMedia)
     2. the "error" event                    — a clip that cannot play at all (ditto)
     3. these two watchdogs                  — a clip that neither ends nor errors
   Both watchdogs are re-armed per page arrival, from refreshMedia(). */
function armVideoWatchdog(idx, v) {
  stopVideoWatchdog();
  if (!v || !pageHasVideoGate(idx) || videoWatched[idx]) return;
  // Which visit these watchdogs belong to. Both of them can only ever open the gate
  // for the visit that armed them: they are the one part of the gate that unlocks on
  // a TIMER rather than on the clip finishing, so a leftover tick from the previous
  // visit is the easiest way for NEXT to light up on a scene nobody has watched.
  const token = visitToken;

  // (3a) DURATION watchdog — the clip's own length plus grace. Catches the case the
  // stall poller cannot see: playback that runs to the end but never fires "ended".
  // The clip is local (blob) by now, so duration is usually known immediately; if
  // metadata has not arrived yet we wait for it, and fall back to a hard ceiling.
  const armByDuration = function () {
    if (token !== visitToken) return;                   // metadata for a visit we've left
    if (_durationTimer) clearTimeout(_durationTimer);
    const d = (isFinite(v.duration) && v.duration > 0) ? v.duration * 1000 : 0;
    const delay = d ? Math.min(d + WATCHDOG_GRACE_MS, WATCHDOG_MAX_MS)
                    : WATCHDOG_MAX_MS;
    const startDelay = (pages[idx] && pages[idx].delay) ? pages[idx].delay : 0;
    _durationTimer = setTimeout(function () {
      if (flipped === idx && token === visitToken && !videoWatched[idx]) markVideoWatched(idx);
    }, delay + startDelay);
  };
  armByDuration();
  if (!(isFinite(v.duration) && v.duration > 0)) {
    v.addEventListener("loadedmetadata", armByDuration, { once: true });
  }

  // (3b) STALL watchdog — poll the playhead; if it has not advanced for
  // WATCHDOG_STRIKES consecutive checks, let the reader through. Ticks are skipped
  // while the video is legitimately not running: during its own start `delay`, and
  // while the tab is hidden (we pause videos there on purpose).
  let lastTime = -1, strikes = 0;
  _watchdogTimer = setInterval(function () {
    if (flipped !== idx || token !== visitToken || videoWatched[idx]) { stopVideoWatchdog(); return; }
    if (document.hidden) return;                                  // paused by us, not stuck
    if (mediaDelayTimer && mediaDelayIdx === idx) return;         // still in its start delay
    if (v.currentTime > lastTime + 0.05) { lastTime = v.currentTime; strikes = 0; return; }
    if (++strikes >= WATCHDOG_STRIKES) { stopVideoWatchdog(); markVideoWatched(idx); }
  }, WATCHDOG_MS);
}

/* ---- Navigation (drives the CSS leaf flip) ------------------------------
   goNext / goPrev are the ONLY page-turn entry points: the buttons, the keyboard,
   the swipe/drag and every programmatic call route through them, so they all
   inherit the same guards. No duplicate flip logic anywhere. */
function turnLeaf(leaf) {                 // shared flip visuals + timing
  leaf.style.zIndex = 300;               // lift the turning sheet above everything
  leaf.classList.add("flipping");        // enables the moving curl shading
  renderLeaves();
  refreshMedia();                        // START now → the target video plays INSTANTLY
                                          // (as the page is revealed, not after the flip)
  playFlip();
  updateProgress();
  if (_dragLeaf === leaf) {
    // This turn began as a finger-drag, so the leaf is already part-way round under
    // an inline transform: animate THAT from the live dragged angle to the leaf's
    // resting angle — the same angle the .flipped class holds underneath, so
    // dropping it once settled can't make the page swing back.
    leaf.style.transition = "";          // restore the CSS flip transition
    void leaf.offsetWidth;               // reflow → it animates FROM the dragged angle
    leaf.style.transform = leaf.classList.contains("flipped") ? "rotateY(-180deg)" : "rotateY(0deg)";
  }
  scheduleSettle(leaf);
}
/* Arm the "this page-turn has finished" timer for `leaf`. */
function scheduleSettle(leaf) {
  _flipLeaf = leaf;
  clearTimeout(_flipTimer);
  _flipTimer = setTimeout(function () {
    settleFlip();
    updateProgress();
    refreshMedia();                      // re-assert once settled (idempotent safety net)
  }, FLIP_MS + 40);
}
/* Land the page-turn in flight: drop the curl shading and any inline drag transform
   WITHOUT re-animating (the .flipped class already holds the same final angle, so
   the leaf can't briefly swing back — the old "page reappears on the left" glitch),
   then clear the animating guard. Called by the settle timer and — synchronously —
   by the book-close path, which can fire mid-turn: without this the stale timer
   would run refreshMedia() after we are back on the cover, restarting a video
   there. */
function settleFlip() {
  clearTimeout(_flipTimer);
  const L = _flipLeaf;
  _flipTimer = null; _flipLeaf = null;
  if (L) {
    L.classList.remove("flipping");
    L.style.transition = "none";
    L.style.transform = "";
    void L.offsetWidth;                  // commit with NO transition
    L.style.transition = "";             // restore it for the next turn
    const c = L.querySelector(".curl"); if (c) c.style.opacity = "";
  }
  animating = false;
  renderLeaves();                        // resting .flipped state + z-index
}
/* The one source of truth for "may the story turn this way right now?" — the
   buttons, the keyboard and the swipe/drag all ask THESE, so a guard is never
   duplicated or forgotten in one of the paths. */
function canTurn() {
  return opened &&        // the cover has been opened…
         ready &&         // …and has FINISHED opening
         !animating &&    // no page-turn already in flight
         !closing &&      // not on the way back to the cover
         !lbdFullscreen;  // no fullscreen overlay up
}
function canTurnNext() {
  return canTurn() &&
         !isNextLocked() &&              // this page's content gate must be open
         flipped < totalPages - 1;       // and we must not be on the LAST page (THE END)
}
function canTurnPrev() {
  return canTurn() && flipped > 0;       // and we must not be on the first page / the cover
}
function goNext() {
  if (!canTurnNext()) return;
  animating = true;
  const leaf = leaves[flipped];                  // the page to turn
  flipped++;
  turnLeaf(leaf);
}
function goPrev() {
  if (!canTurnPrev()) return;
  animating = true;
  flipped--;
  turnLeaf(leaves[flipped]);
}

/* ---- Nav state — the ONE owner of BACK / NEXT -----------------------------
   A dead control is HIDDEN, never greyed: we set BOTH .is-hidden (display:none,
   see the NAV CONTROL SET block in styles.css) and `disabled`, so it can't be
   seen, clicked, tabbed to or read out. */
/* ---- GLOW PULSE ---------------------------------------------------------
   The forward arrow spends most of a video page hidden, then simply materialises
   the instant the clip finishes — easy to miss when the reader's eyes are on the
   middle of the page, not its bottom corner. So it announces itself: a few soft
   gold swells that grow out of the arrow and fade, leaving it in its ordinary
   resting state. The animation carries no fill mode on purpose, so the final
   frame IS the normal look rather than a held keyframe.
   (The previous cue blinked the arrow down to 20% opacity, which read as a
   rendering glitch rather than an invitation — hence a glow, not a blink.) */
const NAV_PULSE_MS = 2250;              // 3 swells; keep in sync with navPulse in styles.css
let _navPulseTimer = null;
function pulseNav(btn) {
  if (!btn) return;
  clearTimeout(_navPulseTimer);
  btn.classList.remove("pulse");
  void btn.offsetWidth;                 // reflow → the animation restarts cleanly
  btn.classList.add("pulse");
  // Drop the class again so a later re-appearance can replay it.
  _navPulseTimer = setTimeout(function () { btn.classList.remove("pulse"); }, NAV_PULSE_MS + 60);
}

function setNav(btn, hidden) {
  if (!btn) return;
  const wasHidden = btn.classList.contains("is-hidden");
  /* ---- A CONTROL ONLY APPEARS ON A SETTLED PAGE ------------------------------
     Hiding happens the instant it is called — a dead control must never linger.
     APPEARING waits for the page-turn to finish, so no control is ever offered over
     a page that is still swinging round. The turn lands, THEN it is offered.
     Nothing is lost by waiting: canTurn() refuses every flip while one is in flight,
     so a control shown mid-turn does nothing when tapped. The settle timer
     (scheduleSettle) calls updateProgress() the moment `animating` clears, which is
     where the deferred appearance actually happens — and the glow cue below then
     fires on a still page instead of a moving one.
     NEXT additionally goes away FOR the whole turn (see updateProgress), which this
     alone could not do: deferring an appearance does nothing about an arrow that was
     already on screen before the turn started. BACK is left as it is, continuously
     visible mid-book, so an ordinary page turn does not blink it off and on. */
  if (!hidden && wasHidden && animating) return;
  btn.classList.toggle("is-hidden", hidden);
  btn.disabled = hidden;
  // Fire the cue on the HIDDEN → VISIBLE transition only. updateProgress() runs on
  // every flip, gate change and overlay toggle, so without this the arrow would
  // pulse continuously the whole time it was on screen.
  if (btn === cornerNext && wasHidden && !hidden) pulseNav(btn);
}
function updateProgress() {
  const onLast = flipped >= totalPages - 1;      // THE END page (it has its own Replay)
  // BACK  — gone until the book is ready, on the first page / the cover, and for
  // the whole time the game is up (there is no book behind it to go back to).
  setNav(cornerPrev, !ready || flipped <= 0 || lbdFullscreen);
  // NEXT  — gone until ready, on the last page, WHILE A PAGE IS TURNING, and while
  // this page's gate is shut (on a video page that means: hidden until the clip has
  // played all the way through — see VIDEO GATE — so it appears exactly when there is
  // more to read).
  // `animating` is in there so the arrow is never on screen over a page that is still
  // swinging round. Deferring only its APPEARANCE was not enough: turning between two
  // pages that are both open (flipping back to a scene already watched, most often)
  // left an arrow that was already up simply sitting there through the whole turn.
  // canTurn() refuses every flip while one is in flight, so that arrow could not be
  // used anyway — it just looked like it belonged to a page that had not arrived yet.
  // It comes back, with its glow cue, from the updateProgress() the settle timer runs.
  setNav(cornerNext, !ready || onLast || animating || isNextLocked());
}

/* ---- Fullscreen: go FULLSCREEN when the book opens (the Play tap is the user
   gesture the Fullscreen API requires) and LEAVE fullscreen when back at the
   cover (Replay). Applies on every screen; silently no-ops where the
   browser blocks it (e.g. iPhone Safari can't fullscreen arbitrary elements). */
function enterFullscreen() {
  try {
    if (document.fullscreenElement || document.webkitFullscreenElement) return;
    var el = document.documentElement;
    var req = el.requestFullscreen || el.webkitRequestFullscreen || el.webkitRequestFullScreen || el.msRequestFullscreen;
    if (req) { markSmoothRescale(true); var p = req.call(el); if (p && p.catch) p.catch(function () {}); }
  } catch (_) {}
}
function exitFullscreen() {
  try {
    if (!(document.fullscreenElement || document.webkitFullscreenElement)) return;
    var ex = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.msExitFullscreen;
    if (ex) { markSmoothRescale(true); var p = ex.call(document); if (p && p.catch) p.catch(function () {}); }
  } catch (_) {}
}

/* ---- Stop the idle bob WITHOUT jolting the book --------------------------
   .book-float carries a 4.8s translateY(0 → -8px → 0) float, and it is an ancestor of
   the entire book. Simply adding .rest (animation: none) reverts that transform in one
   frame, so tapping PLAY at any point other than the exact bottom of the bob shoved
   the whole book up by as much as 8px — measured at 5.5px — right as the cover began
   to open. Nothing else in the transition moved; that jolt WAS the "sudden shift".
   So: freeze the live value inline, drop the animation (the inline value now holds the
   book perfectly still), then glide it home over .settling's transition. Same
   first/last/invert/play shape as smoothRescale() below, for the same reason — the
   browser must see the pre-change value flushed before the new one, or it animates
   from the wrong place (or not at all). */
const BOB_SETTLE_MS = 320;              // keep in sync with .book-float.settling
let _bobSettleTimer = null;
function settleIdleBob() {
  if (!bookFloat) return;
  const live = getComputedStyle(bookFloat).transform;
  bookFloat.classList.remove("settling");
  if (live && live !== "none") bookFloat.style.transform = live;   // FIRST: hold it here
  bookFloat.classList.add("rest");                                 // animation off
  void bookFloat.getBoundingClientRect();                          // flush as the start style
  requestAnimationFrame(function () {
    bookFloat.classList.add("settling");
    bookFloat.style.transform = "translateY(0)";                   // LAST: glide home
  });
  clearTimeout(_bobSettleTimer);
  _bobSettleTimer = setTimeout(clearIdleBobSettle, BOB_SETTLE_MS + 60);
}
/* Leave no transition or inline transform behind: the bob has to be free to run again
   on the next Replay, and a stale transition here would slow it down. */
function clearIdleBobSettle() {
  clearTimeout(_bobSettleTimer); _bobSettleTimer = null;
  if (!bookFloat) return;
  bookFloat.classList.remove("settling");
  bookFloat.style.transform = "";
}

/* ---- Open the 3D cover, then hand off to the page-turning book ----------
   Shared by the first open (openBook) AND Replay (replayBook), so the dramatic
   hinge-open + post-open setup are identical both times. */
function runOpenSequence() {
  ready = false;
  document.body.classList.remove("is-closing");
  document.body.classList.add("is-open");
  // The whole open motion IS the cover's own hinge — NO zoom / camera move.
  book.classList.remove("closing");
  book.classList.add("open");          // cover hinges open on the LEFT spine
  settleIdleBob();                     // stop the idle bob — GLIDING, never snapping
  coverScene.classList.remove("parked");
  flipbookEl.style.zIndex = "";        // cover ABOVE the pages while it swings open
  // Reveal the REAL page right away (it sits beneath the cover, masked by it).
  flipbookEl.classList.add("show");
  // A user gesture drives every open, so start audio here.
  soundOn();
  resumeAudio();
  playTap();                            // the PRESS — lands immediately, before the cover moves
  playCoverFlip();
  playBgMusic();                        // start the looping background music
  primeVideo(0); primeVideo(1);         // unlock page 1 + 2 inside the gesture
  refreshMedia();                       // start the page-1 video right away
  // Once the cover has FULLY opened, park it, lift the pages above it, hand over
  // pointer events, and mark the book READY.
  clearTimeout(_openTimer);
  _openTimer = setTimeout(function () {
    coverScene.classList.add("parked");
    flipbookEl.style.zIndex = "5";        // pages now sit ABOVE the parked cover (z3)
    tapCatcher.style.pointerEvents = "none";
    flipbookEl.style.pointerEvents = "auto";
    ready = true;
    updateProgress();
    refreshMedia();
    resetIdleHint();
  }, COVER_OPEN_MS + 50);
  updateProgress();
}
function openBook() {
  if (opened) return;
  // THE GATE. Hiding the PLAY button stops the obvious route in, but not Enter or
  // Space on a focused button, a keyboard shortcut, or anything calling openBook()
  // directly — and opening before the media is local is exactly the stall the
  // preloader exists to remove. So the guard lives HERE, on the function itself,
  // and the request is remembered: preloadFinish() replays it the moment we're ready.
  if (!assetsReady) { startPending = true; return; }
  opened = true;
  enterFullscreen();          // Play tap is a user gesture → allowed to go fullscreen
  runOpenSequence();
}

/* ---- Reset the whole book to the START SCREEN: the CLOSED FRONT COVER + Play
   button, exactly like a fresh load (so tapping Play reads from the top). Called
   by Replay, once the closing swing has finished. -------------------------- */
function resetToStart() {
  exitFullscreen();           // back at the cover → leave fullscreen
  ready = false; opened = false; closing = false; flipped = 0;
  settleFlip();                                // drop any page-turn still in flight
  renderLeaves();
  leaves.forEach(function (leaf) {
    pageMedia(leaf).forEach(function (m) {
      try { m.pause(); m.muted = true; m.currentTime = 0; } catch (_) {}
    });
  });
  lastMediaIdx = -1;
  visitToken++;                                // orphan every timer the last read left running
  document.body.classList.remove("is-open", "is-closing");
  book.classList.remove("open", "closing");
  coverScene.classList.remove("parked");
  cover.style.transform = "";                 // cover CLOSED → front cover + Play button showing
  flipbookEl.classList.remove("show");         // pages hidden behind the closed cover
  flipbookEl.style.zIndex = "";
  flipbookEl.style.pointerEvents = "none";
  clearIdleBobSettle();                        // drop the frozen transform + transition…
  bookFloat.classList.remove("rest");          // …so the idle bob runs clean again
  tapCatcher.style.pointerEvents = "auto";     // Play is tappable again
  hideFlipHint(); clearTimeout(idleHintTimer); clearTimeout(nudgeHideTimer);
  // re-arm every content gate, so a fresh read gates its pages again
  Object.keys(gatesCleared).forEach(function (k) { delete gatesCleared[k]; });
  // …and every VIDEO gate too, so a fresh read plays each clip through again before
  // its NEXT appears. (Arriving on a page re-locks it anyway now — see
  // resetVideoGate — so this is belt-and-braces rather than the only thing holding
  // the second read's gates shut. `videoBroken` is deliberately NOT cleared: a clip
  // that cannot decode cannot decode on the second read either, and its "error" has
  // already been and gone.)
  stopVideoWatchdog();
  Object.keys(videoWatched).forEach(function (k) { delete videoWatched[k]; });
  // …and forget how far the last read got, or the whole second read would open
  // ungated: resetGatesOnArrival() leaves any page in `pageCompleted` unlocked.
  Object.keys(pageCompleted).forEach(function (k) { delete pageCompleted[k]; });
  try { bgMusic.pause(); bgMusic.currentTime = 0; } catch (_) {}   // restarts on Play
  updateProgress();                            // back on the cover → both controls gone
}

/* ---- CLOSE THE BOOK: the cover swings SHUT — the exact REVERSE of the opening
   hinge (cover −180 → 0) — and the book lands on the front cover. Used by REPLAY
   (from THE END page). `afterReset` runs once we're back on the cover. ------ */
function closeBookToCover(afterReset) {
  ready = false;                               // block flips during the close
  closing = true;
  settleFlip();                                // land any page-turn in flight, now
  clearTimeout(_openTimer);
  clearTimeout(_closeTimer);
  hideFlipHint(); clearTimeout(idleHintTimer); clearTimeout(nudgeHideTimer);
  if (cornerNext) cornerNext.classList.remove("blink", "pulse");
  updateProgress();                            // BACK / NEXT both leave the screen
  var v = currentVideo(); if (v) { try { v.pause(); } catch (_) {} }
  // Home / Replay / close can fire from the game page — even mid-fullscreen — and
  // this route never reaches updateLbdOverlay(), so tear the game down HERE. It
  // re-warms straight afterwards, so a second read reaches the game page instantly.
  teardownLbd();
  // pages back UNDER the cover, so the closing cover sweeps over them
  flipbookEl.style.zIndex = "";
  flipbookEl.style.pointerEvents = "none";
  tapCatcher.style.pointerEvents = "none";
  coverScene.classList.remove("parked");
  // CLOSE — reverse of the opening hinge (cover swings from -180 back to 0).
  // is-closing keeps the current page bright (hides the dark thickness block) and
  // hides the turned-page pile, so the cover folds cleanly with no stray left page.
  document.body.classList.add("is-closing");
  book.classList.remove("open");
  book.classList.add("closing");
  playCoverFlip();
  _closeTimer = setTimeout(function () {
    resetToStart();
    if (typeof afterReset === "function") afterReset();
  }, COVER_CLOSE_MS + 60);
}

/* ---- REPLAY (button on THE END page): close the book with the reverse-of-open
   swing, land on the front cover, and re-arm the title VO for another read. */
function replayBook() {
  if (!opened || closing) return;
  closeBookToCover(function () { _titleVoPlayed = false; playTitleVo(); });
}

/* ==========================================================================
   INPUT  —  tap PLAY to OPEN the cover; once open, drag + corner arrows +
   keyboard drive the page flip.
   ========================================================================== */
const tapCatcher = document.getElementById("tapCatcher");

// The book opens ONLY from the play button. The tap-catcher still sits on top to
// block page gestures before opening, but it opens the book only when the tap
// lands inside the play button's (breathing) hit-circle — taps elsewhere on the
// cover do nothing.
function tapHitsPlay(e) {
  const r = hint.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  /* ---- THE RESTING RADIUS, NEVER THE ANIMATED ONE -------------------------
     getBoundingClientRect() reports the TRANSFORMED box, and this button is transformed twice:
     it enters with a pop that starts at a fraction of its size, and it shrinks under :active. So
     a tap during the entrance was measured against a button drawn far smaller than it really is,
     landed outside this radius, and did nothing at all — the reader taps PLAY, nothing happens,
     and they tap again. offsetWidth/offsetHeight are LAYOUT values and ignore transforms
     entirely, so the hit area is the button's true size from the first frame it exists.
     The centre is still taken from the live rect: the pop scales about the centre, so that point
     is stable throughout, and it stays correct if the cover is ever re-laid-out. */
  const rad = Math.max(hint.offsetWidth, hint.offsetHeight, r.width, r.height) / 2;
  return Math.hypot(e.clientX - cx, e.clientY - cy) <= rad;
}
if (tapCatcher) tapCatcher.addEventListener("click", function (e) { if (!opened && tapHitsPlay(e)) openBook(); });
// Show the hand (pointer) cursor ONLY when hovering the play button — the sole CTA
// on the cover. Everywhere else on the tap surface stays a normal cursor.
if (tapCatcher) tapCatcher.addEventListener("mousemove", function (e) {
  tapCatcher.style.cursor = (!opened && tapHitsPlay(e)) ? "pointer" : "default";
});

// The play button itself (also covers keyboard: Enter/Space on the focused button).
hint.addEventListener("click", function (e) { e.stopPropagation(); if (!opened) openBook(); });


// Bottom-corner flip arrows (outside the book): back = left, forward = right.
cornerPrev.addEventListener("click", function (e) { e.stopPropagation(); goPrev(); this.blur(); });
cornerNext.addEventListener("click", function (e) { e.stopPropagation(); goNext(); this.blur(); });
if (replayBtn) replayBtn.addEventListener("click", function (e) { e.stopPropagation(); replayBook(); this.blur(); });

// Page interaction — DRAG TO TURN: grab the page and it follows your cursor,
// rotating about the spine, then SNAPS to the nearest state when you let go.
//   • drag LEFT  → turn the current page forward (it comes to rest on the cover)
//   • drag RIGHT → turn the previous page back
// A plain tap does nothing; the corner arrows + keyboard still work.
(function () {
  let startX = 0, startY = 0, pw = 1;
  let leaf = null, dir = 0, decided = false, dragging = false, curlEl = null;
  let lastX = 0, lastT = 0, vx = 0;                   // for flick (velocity) detection
  const DECIDE = 6;                                   // px before we commit to a drag
  const FLICK = 0.45;                                 // px/ms — a quick flick completes the turn
  const FINISH_DEG = 45;                              // turned this far (deg) → completes on release

  // how many degrees the drag has turned the page (0..180)
  function degFromDx(dx) { return Math.max(0, Math.min(180, Math.abs(dx) / pw * 180)); }
  // the live angle for the active leaf, given the raw horizontal travel
  function liveAngle(dx) {
    return (dir === 1) ? degFromDx(Math.min(0, dx))          // forward: leftward turns 0→180
                       : 180 - degFromDx(Math.max(0, dx));   // back: starts at 180, rightward → 0
  }

  flipbookEl.addEventListener("pointerdown", function (e) {
    if (!opened || !ready || animating) return;
    startX = e.clientX; startY = e.clientY;
    lastX = e.clientX; lastT = e.timeStamp || performance.now(); vx = 0;
    decided = false; dragging = true; leaf = null; dir = 0; curlEl = null;
    pw = flipbookEl.getBoundingClientRect().width || 1;
  });

  flipbookEl.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    const now = e.timeStamp || performance.now();
    const dt = now - lastT;
    if (dt > 0) vx = (e.clientX - lastX) / dt;         // running horizontal velocity
    lastX = e.clientX; lastT = now;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!decided) {
      if (Math.abs(dx) < DECIDE || Math.abs(dx) <= Math.abs(dy)) return;   // wait for a clear horizontal drag
      // Same guards as the buttons (bounds, content gate, overlay) — so a page the
      // story isn't ready to leave can't even be picked up by a finger.
      if (dx < 0 && canTurnNext())      { dir = 1;  leaf = leaves[flipped]; }     // turn forward (stop at THE END page)
      else if (dx > 0 && canTurnPrev()) { dir = -1; leaf = leaves[flipped - 1]; } // turn back
      else { dragging = false; return; }                  // nothing to turn that way
      decided = true;
      leaf.style.transition = "none";                     // follow the finger exactly
      leaf.style.zIndex = 300;
      curlEl = leaf.querySelector(".curl");
      try { flipbookEl.setPointerCapture(e.pointerId); } catch (_) {}
    }
    const ang = Math.max(0, Math.min(180, liveAngle(dx)));
    leaf.style.transform = "rotateY(" + (-ang) + "deg)";
    if (curlEl) curlEl.style.opacity = (ang <= 90 ? ang / 90 : (180 - ang) / 90) * 0.9;
  });

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    const L = leaf, D = dir, C = curlEl;
    leaf = null; curlEl = null;
    if (!decided || !L) return;                           // a plain tap → nothing

    const ang = Math.max(0, Math.min(180, liveAngle(e.clientX - startX)));
    // Complete the turn if it's been dragged far enough OR flicked quickly in
    // the turn's direction — no need to drag all the way past halfway.
    const flick = (D === 1) ? (vx < -FLICK) : (vx > FLICK);
    const complete   = (D === 1) ? (ang > FINISH_DEG || flick)
                                 : (ang < 180 - FINISH_DEG || flick);

    if (C) C.style.opacity = "";
    if (complete) {
      // A completed drag IS a page turn, so it goes through the SAME goNext /
      // goPrev the buttons and the keyboard use — one flip engine, every guard
      // inherited. _dragLeaf tells turnLeaf this page is already part-way round
      // under an inline transform, so it animates on from the live angle.
      _dragLeaf = L;
      if (D === 1) goNext(); else goPrev();
      _dragLeaf = null;
      if (animating) return;                              // the turn is on its way
    }
    // Not dragged far enough (or a guard refused the turn) → snap the page back to
    // where it was, using the same settle bookkeeping as a real turn.
    animating = true;
    L.style.transition = "";                              // restore the CSS flip transition
    void L.offsetWidth;                                   // reflow so it animates FROM the dragged angle
    L.classList.add("flipping");                          // curl shading during the snap
    L.style.transform = (D === -1) ? "rotateY(-180deg)" : "rotateY(0deg)";
    scheduleSettle(L);
  }
  flipbookEl.addEventListener("pointerup", endDrag);
  flipbookEl.addEventListener("pointercancel", endDrag);
})();

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") { e.preventDefault(); opened ? goNext() : openBook(); }
  else if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
  else if ((e.key === " " || e.key === "Enter") && !opened) { e.preventDefault(); openBook(); }
});

// Keep the canvas scaled to fit on resize / rotate.
let _resizeSettle = null;

/* ---- ONE-OFF RESCALES vs CONTINUOUS ONES ---------------------------------
   Two very different things arrive as the same `resize` event:
     • a DRAG-resize — a burst of events as the reader hauls the window edge. The
       scale must follow instantly; a transition here trails the pointer and reads
       as rubbery. That is what .is-resizing is for.
     • FULLSCREEN engaging — one discrete jump, and the one that mattered here: the
       viewport grows a beat AFTER the tap that asked for it, so the new
       --book-scale used to land mid-hinge and snap the book to a new size and
       position while the reader watched the cover open.
   We cannot tell them apart from the event itself, and a fullscreen change fires
   BOTH `resize` and `fullscreenchange` in an order that differs between browsers.
   So instead we open a short window the moment fullscreen is REQUESTED, and treat
   any viewport change inside it as the one-off — whichever event gets there first.
   The window is generous because some browsers animate into fullscreen. */
const SMOOTH_RESCALE_MS     = 300;   // keep in sync with body.is-rescaling in styles.css
const SMOOTH_RESCALE_WINDOW = 900;   // how long after the request a change still counts
let _smoothRescaleUntil = 0;
let _rescaleSettle = null;
let _glideUntil = 0;                 // a one-off glide is in flight until this moment
/* `captureBefore` — snapshot the pre-change geometry too. Only true where we are
   genuinely AHEAD of the change: the tap that REQUESTS fullscreen still sees the old
   viewport. By the time fullscreenchange fires the box may already have moved, and
   re-reading it there would cache the displaced position as the glide's origin —
   which reintroduces the jump. Nor can it be seeded at startup: `.scene` runs a 900ms
   sceneIn entry animation (a 0.96 scale on an ANCESTOR), so a rect read during it is
   short by that factor and the book would visibly pop on the first rescale. */
function markSmoothRescale(captureBefore) {
  _smoothRescaleUntil = Date.now() + SMOOTH_RESCALE_WINDOW;
  if (captureBefore) rememberBookRect();
}

/* The book's rect while nothing is changing.
   ⚠ WHY THIS IS CACHED. A `resize` fires only AFTER layout has already re-centred
   the book, so the pre-change geometry cannot be measured from inside the handler —
   by then it is gone, and measuring there yields the already-displaced box (which
   makes a FLIP invert back to the wrong place and leaves the very jump it is meant
   to remove). So we keep the resting rect from the last time the viewport was
   settled, and that is the "first" the glide starts from. */
let _bookRestRect = null;
function rememberBookRect() {
  if (!flipScaleEl) return;
  const r = flipScaleEl.getBoundingClientRect();
  if (r.width > 0) _bookRestRect = r;
}

/* Write the FLIP "invert" values (identity = 0px, 0px, 1). */
function setRescaleFix(dx, dy, k) {
  flipScaleEl.style.setProperty("--fix-x", dx + "px");
  flipScaleEl.style.setProperty("--fix-y", dy + "px");
  flipScaleEl.style.setProperty("--fix-s", String(k));
}

/* ---- The ONE-OFF rescale, done as a FLIP ---------------------------------
   Apply the new scale instantly (so layout, hit-testing and every rect-based
   consumer are immediately correct), then park the book back exactly where it was
   and animate that correction away. The reader sees one continuous glide from the
   old size+position to the new one; the DOM only ever holds the new truth.
   The invert is MEASURED, not derived. Deriving it means modelling how
   transform-origin composes with percentage positioning and the translate(-50%,-50%)
   already in the chain — get any of that subtly wrong and the book lurches to the
   wrong place before gliding back, which is worse than the snap. Instead: apply the
   scale part, ask the browser where that actually put things, and let the leftover
   difference BE the translate. Exact by construction, and it stays exact if the
   centring above is ever reworked. The translate is outermost and .stage carries no
   transform of its own, so it shifts the result by exactly that many screen px. */
function smoothRescale() {
  const first = _bookRestRect;                      // captured BEFORE the change (see above)
  document.body.classList.remove("is-rescaling");   // the invert must NOT animate
  setRescaleFix(0, 0, 1);
  fitScale();                                       // the real change, instantly
  const last = flipScaleEl.getBoundingClientRect();
  // No usable "before" (first paint), or a degenerate box (the portrait rotate-prompt
  // hides the scene) — nothing to glide from.
  if (!first || !(first.width > 0 && last.width > 0)) { afterRescaleSettled(); return; }
  const k = first.width / last.width;
  setRescaleFix(0, 0, k);                           // old SIZE back; position still off
  let probe = flipScaleEl.getBoundingClientRect();
  let dx = first.left - probe.left, dy = first.top - probe.top;
  setRescaleFix(dx, dy, k);                         // …and now the old POSITION too
  /* Re-reading the rect does double duty. It VERIFIES the invert landed, and it
     FLUSHES it as the transition's starting style — which offsetWidth cannot be
     trusted to do, because changing a transform does not invalidate layout, so the
     browser is free to skip the recalc and then animate from the previous transform
     instead (the book lurches, then glides from the wrong place).
     If anything is still out, the residual is a pure translation, so one more pass
     closes it exactly. */
  probe = flipScaleEl.getBoundingClientRect();
  if (Math.abs(probe.left - first.left) > 0.5 || Math.abs(probe.top - first.top) > 0.5) {
    dx += first.left - probe.left; dy += first.top - probe.top;
    setRescaleFix(dx, dy, k);
    void flipScaleEl.getBoundingClientRect();
  }
  _glideUntil = Date.now() + SMOOTH_RESCALE_MS + 80;   // a glide owns the book until then
  requestAnimationFrame(function () {               // PLAY: glide to identity
    document.body.classList.add("is-rescaling");
    setRescaleFix(0, 0, 1);
    clearTimeout(_rescaleSettle);
    _rescaleSettle = setTimeout(afterRescaleSettled, SMOOTH_RESCALE_MS + 80);
  });
}

/* ---- A SECOND EVENT FOR THE SAME CHANGE ----------------------------------
   Entering fullscreen fires BOTH `resize` and `fullscreenchange`, a frame or two
   apart, and both routed here. The second one used to re-enter smoothRescale() while
   the first glide was still running — and its first two acts are to drop .is-rescaling
   and write the identity transform, which lands the book on its NEW size with no
   transition at all. Measured: the size covered 435px of its 380px journey in a single
   frame (88% of the whole motion) and then only the POSITION glided, so the canvas
   popped bigger and slid downward. That was the flicker.
   So a glide, once running, is not restarted. Almost always the second event carries
   no new information — the fit it computes is identical — and the right answer is to
   leave the running glide alone. If the viewport really did change again (a resize
   arriving during the fullscreen glide), we re-aim, starting from where the book is
   RIGHT NOW so the motion stays continuous instead of teleporting. */
function retargetGlide() {
  const now = flipScaleEl.getBoundingClientRect();     // where it LOOKS right now, mid-glide
  const before = flipScaleEl.style.getPropertyValue("--book-scale");
  fitScale();
  if (flipScaleEl.style.getPropertyValue("--book-scale") === before) return;   // duplicate → no-op
  if (now.width > 0) _bookRestRect = now;              // continue from the current position
  smoothRescale();
}
function afterRescaleSettled() {
  document.body.classList.remove("is-rescaling");
  _glideUntil = 0;                        // the book is nobody's to hold onto now
  setRescaleFix(0, 0, 1);                 // leave the chain at identity, not mid-glide
  rememberBookRect();                     // this is the new resting geometry
  // Anything parked against the book's rect was measured MID-glide, so it is
  // slightly off until the transform has landed. Re-read it now.
  if (flipHint && flipHint.classList.contains("show")) positionFlipHint();
  if (lbdStage && lbdStage.classList.contains("visible") && !lbdFullscreen) positionLbdStage();
}

function onViewportChange() {
  /* ONE-OFF (glide) or CONTINUOUS (follow instantly)?
     Two things say one-off:
       • we are inside the window opened when fullscreen was REQUESTED, or
       • the cover is mid-open — `opened && !ready` is true only during the hinge.
     The second is not belt-and-braces. The fullscreen viewport change can arrive far
     later than the request: measured at tap+2556ms here, because the same tap also
     starts a 1080p video and the main thread is busy through the whole request. That
     is nowhere near the 900ms window, so it used to fall through to the drag path and
     snap the book 30px sideways and 69px smaller in ONE frame, halfway through the
     6s hinge. A viewport change while the book is opening is never a drag-resize
     worth following frame-for-frame, so glide it. */
  if (Date.now() < _smoothRescaleUntil || (opened && !ready)) {
    // Already gliding? Then this is fullscreen's second event for the same change (or a
    // duplicate). Never restart a glide mid-flight — see retargetGlide.
    if (Date.now() < _glideUntil) { retargetGlide(); return; }
    smoothRescale();
    return;
  }
  // Suppress the page-turn transitions while the viewport is actively changing, so
  // a rapid resize / resolution change can't make the book LOOK like it's auto-
  // flipping (the leaves re-render during the scale change). Restored once settled.
  document.body.classList.add("is-resizing");
  clearTimeout(_resizeSettle);
  _resizeSettle = setTimeout(function () { document.body.classList.remove("is-resizing"); }, 220);
  fitScale();
  rememberBookRect();     // each drag step's result is the next one's "before"
  // Re-park the LBD overlay over the (re-scaled) page — unless it's fullscreen,
  // where it already fills the viewport via CSS.
  if (lbdStage && lbdStage.classList.contains("visible") && !lbdFullscreen) positionLbdStage();
}
window.addEventListener("resize", onViewportChange);
window.addEventListener("orientationchange", onViewportChange);
/* The fullscreen state actually flipping re-arms the window: on a browser that
   animates into fullscreen the viewport can still be a frame or two behind, which
   would otherwise fall outside the window opened at request time and snap. */
["fullscreenchange", "webkitfullscreenchange"].forEach(function (t) {
  document.addEventListener(t, function () { markSmoothRescale(false); onViewportChange(); });
});

/* ---- Block ALL zoom (pinch, double-tap, ctrl+wheel, ctrl +/-) ------------
   The book is fixed-layout, so zoom would only break it. */
(function () {
  // Never let anything (esp. page images) start a native HTML5 drag — that was
  // showing a "ghost" of the image following the cursor during a page-flip drag.
  document.addEventListener("dragstart", function (e) { e.preventDefault(); });
  ["gesturestart", "gesturechange", "gestureend"].forEach(function (t) {   // iOS pinch
    document.addEventListener(t, function (e) { e.preventDefault(); }, { passive: false });
  });
  window.addEventListener("wheel", function (e) {                          // desktop ctrl+wheel
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });
  window.addEventListener("keydown", function (e) {                        // ctrl/⌘ +/-/0
    if ((e.ctrlKey || e.metaKey) && ["+", "-", "=", "0"].indexOf(e.key) !== -1) e.preventDefault();
    // Block "Save page" (Ctrl/⌘+S) — a casual way to grab the media.
    if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) e.preventDefault();
  });
  document.addEventListener("touchmove", function (e) {                    // 2-finger pinch
    if (e.touches && e.touches.length > 1) e.preventDefault();
  }, { passive: false });

  // NOTE: the right-click / context menu is intentionally LEFT ENABLED (so "Inspect"
  // and dev tools work). Casual image protection still stands via CSS — no drag,
  // no text-selection, no iOS long-press "Save Image" callout — plus Ctrl+S is blocked.
})();

/* ==========================================================================
   SOUND  —  the two one-shot flip effects live in sfx/ as Ogg/Opus
   (Page flip.ogg, cover page flip.ogg) and are ALSO inlined as base64 in
   sfx-data.js so they decode on file://. Muted until the book is opened.

   TWO OPTIONAL TRACKS live here as well — a title voice-over and looping
   background music. Neither audio file has ever existed in this project, so both
   were requesting a missing file and 404ing on every single load. They are now
   OPT-IN: drop the file in sfx/ and put its path in the matching constant below,
   and the feature switches itself back on. Empty string = no element, no request.
   ========================================================================== */
let muted = true;

/* ---- OPTIONAL audio. Set a path to enable; "" keeps it off entirely. ------
   Codec note: Ogg/Opus plays in Chrome, Edge, Firefox and Safari 17+. For older
   Safari, ship an .m4a/.mp3 alongside and point these at that instead. */
const TITLE_VO_SRC  = "";      // e.g. "sfx/title.ogg"  — plays once on load
const BG_MUSIC_SRC  = "";      // e.g. "sfx/bgm.ogg"    — loops quietly while reading

/* A DISABLED optional track is a SILENT STUB, never null.
   These two are read from several places — the open sequence, the tab-blur pause,
   the tab-focus resume, Replay — and when "off" meant `null`, every one of those
   had to remember a guard. One did not (`if (!bgMusic.paused)` in the blur handler),
   and since that runs on `blur` / `visibilitychange` it threw the moment the reader
   clicked away, taking the rest of the handler with it: the page's video never got
   paused and the audio context never got suspended.
   So instead of asking every caller to be careful, a disabled track hands back an
   object with the same shape that quietly does nothing. Callers need no guard, and
   a future one cannot forget it. */
function silentTrack() {
  return {
    disabled: true,
    paused: true, ended: false, currentTime: 0, volume: 1, loop: false, muted: true,
    play: function () { return Promise.resolve(); },
    pause: function () {}, load: function () {},
    addEventListener: function () {}, removeEventListener: function () {}
  };
}
function optionalTrack(src, setup) {
  if (!src) return silentTrack();
  const a = new Audio(src);
  if (setup) setup(a);
  return a;
}

/* ---- Title voice-over ----------------------------------------------------
   Browsers BLOCK audible autoplay before any interaction, so if the load-time
   attempt is refused we play it on the very first gesture instead. Once per load. */
const titleVo = optionalTrack(TITLE_VO_SRC, function (a) {
  a.preload = "auto";
  try { a.load(); } catch (_) {}
});
const TITLE_VO_SKIP = 0;                      // seconds to skip if the clip has leading silence
let _titleVoPlayed = false;
function _titleGesture() {
  window.removeEventListener("pointerdown", _titleGesture, true);
  window.removeEventListener("keydown",     _titleGesture, true);
  window.removeEventListener("touchstart",  _titleGesture, true);
  playTitleVo();
}
function playTitleVo() {
  if (_titleVoPlayed) return;
  try { titleVo.currentTime = TITLE_VO_SKIP; } catch (_) {}
  const p = titleVo.play();
  if (p && p.then) p.then(function () { _titleVoPlayed = true; }).catch(function () {});
  else _titleVoPlayed = true;
}
// Only wire the global gesture listeners when the feature is actually ON — the stub
// would no-op, but three capture-phase window listeners for nothing is still waste.
if (!titleVo.disabled) {
  // Arm the first-gesture fallback IMMEDIATELY (so the very first tap fires the VO
  // with ZERO delay) AND attempt autoplay right now — whichever the browser allows
  // first wins; the other is a no-op (guarded by _titleVoPlayed).
  window.addEventListener("pointerdown", _titleGesture, true);
  window.addEventListener("keydown",     _titleGesture, true);
  window.addEventListener("touchstart",  _titleGesture, true);
  playTitleVo();
}

/* ---- Looping background music (quiet). Started on open — a user gesture. -- */
const bgMusic = optionalTrack(BG_MUSIC_SRC, function (a) {
  a.loop = true;
  a.volume = 0.20;
  a.preload = "none";            // only fetched when it is actually started
});
function playBgMusic() {
  try {
    const p = bgMusic.play();
    if (p && p.catch) p.catch(function () {});   // ignore autoplay rejections
  } catch (_) {}
}

/* ---- Pause ALL audio when the tab / window goes to the background -----------
   Background music AND the current page's video (its voice-over) must stop the
   moment the reader switches tab or app, and resume when they come back — they
   were continuing to play in the background. Covers visibilitychange (tab switch),
   blur (other window), and pagehide (mobile app switch / bfcache). */
let _bgWasPlaying = false;
function currentVideo() {
  const leaf = leaves[flipped];
  return leaf ? leaf.querySelector("video.page-media") : null;
}
function pauseAllAudioFB() {
  if (!bgMusic.paused) { _bgWasPlaying = true; try { bgMusic.pause(); } catch (_) {} }   // a disabled track reports paused
  const v = currentVideo();
  if (v && !v.paused) { v.dataset.wasPlaying = "1"; try { v.pause(); } catch (_) {} }
  if (audioCtx && audioCtx.state === "running") { try { audioCtx.suspend(); } catch (_) {} }
}
function resumeAllAudioFB() {
  if (document.hidden || !document.hasFocus()) return;   // only when truly back in front
  if (!opened) return;                                   // nothing plays before the book opens
  if (audioCtx && audioCtx.state === "suspended") { try { audioCtx.resume(); } catch (_) {} }
  if (_bgWasPlaying) { _bgWasPlaying = false; playBgMusic(); }
  const v = currentVideo();
  if (v && v.dataset.wasPlaying && !v.ended) { delete v.dataset.wasPlaying; const p = v.play(); if (p && p.catch) p.catch(function () {}); }
}
document.addEventListener("visibilitychange", function () {
  if (document.hidden) pauseAllAudioFB(); else resumeAllAudioFB();
});
window.addEventListener("blur", pauseAllAudioFB);
window.addEventListener("focus", resumeAllAudioFB);
window.addEventListener("pagehide", pauseAllAudioFB);

/* ---- One-shot SFX via Web Audio (glitch-free, zero-latency) --------------
   An <audio> element pays a real first-play init cost and can stutter on short
   one-shots — that was the cover-flip "lag/glitch". Instead we decode each SFX
   ONCE into an AudioBuffer and play it through a BufferSource: sample-accurate,
   no start latency. Any leading silence baked into the mp3 is auto-skipped (we
   start on the first audible sample). Buffers come from base64 data URIs
   (window.SFX_DATA in sfx-data.js) so they decode even on file://, where fetch()
   of a plain path is blocked. If Web Audio is unavailable we fall back to plain
   <audio> elements (the old behaviour). */
let audioCtx = null;
const sfxBuf = {};                          // name -> { buffer, offset (seconds) }

// Fallback <audio> elements — used ONLY if Web Audio fails to init or decode.
// preload="none" on BOTH: these are only the fallback path (Web Audio + the inlined
// base64 in sfx-data.js is the normal one), and the preloader hands them their bytes
// as a blob. Letting them self-download would fetch each clip twice.
const flipSound = new Audio(SFX_FLIP_URL);
flipSound.preload = "none";
const coverFlipSound = new Audio(SFX_COVER_URL);
coverFlipSound.preload = "none";
coverFlipSound.volume = 0.35;

(function initSfx() {
  const AC = window.AudioContext || window.webkitAudioContext;
  const DATA = window.SFX_DATA || {};
  if (!AC || !DATA.cover) return;           // no Web Audio / no inlined data → fallback
  try { audioCtx = new AC(); } catch (_) { audioCtx = null; return; }
  function decode(name, uri) {
    fetch(uri).then(function (r) { return r.arrayBuffer(); })
      .then(function (a) { return audioCtx.decodeAudioData(a); })
      .then(function (buf) {
        // Skip any leading silence so playback starts right on the transient.
        const ch = buf.getChannelData(0), sr = buf.sampleRate, thr = 0.008;
        let first = 0;
        for (let i = 0; i < ch.length; i++) { if (Math.abs(ch[i]) > thr) { first = i; break; } }
        sfxBuf[name] = { buffer: buf, offset: Math.max(0, first / sr - 0.004) };
      })
      .catch(function () {});               // leave name unset → falls back to <audio>
  }
  decode("cover", DATA.cover);
  decode("flip", DATA.flip);
})();

// The audio context starts suspended until a user gesture. Resume it on the first
// pointer press (fires just BEFORE the open click) so the cover-flip sound, played
// a moment later, is instant. Capture phase, not once (cheap + always safe).
function resumeAudio() {
  if (audioCtx && audioCtx.state === "suspended") { try { audioCtx.resume(); } catch (_) {} }
}
document.addEventListener("pointerdown", resumeAudio, { capture: true });

// Play a decoded SFX buffer; returns false if Web Audio isn't ready (→ caller
// falls back to the <audio> element).
function playSfx(name, vol, rate) {
  const entry = sfxBuf[name];
  if (!audioCtx || !entry) return false;
  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const src = audioCtx.createBufferSource();
    src.buffer = entry.buffer;
    if (rate) src.playbackRate.value = rate;
    const g = audioCtx.createGain();
    g.gain.value = (vol == null ? 1 : vol);
    src.connect(g).connect(audioCtx.destination);
    src.start(0, entry.offset || 0);        // start on the first audible sample
    return true;
  } catch (_) { return false; }
}

// Page-flip sound — snappy 1.5× on every ordinary flip.
function playFlip() {
  if (muted) return;                        // sound turns on when the book opens
  if (playSfx("flip", 1.0, 1.5)) return;    // Web Audio path
  try {                                     // fallback
    flipSound.currentTime = 0; flipSound.playbackRate = 1.5;
    const p = flipSound.play(); if (p && p.catch) p.catch(function () {});
  } catch (_) {}
}
/* ---- PLAY's own press sound ----------------------------------------------
   The cover had NO press sound at all: tapping PLAY went straight into the cover-flip whoosh,
   which does not begin until the cover actually starts moving — so the tap itself was silent and
   the button read as unresponsive for that beat.
   This is deliberately the SAME click the game plays on every one of its buttons (see
   UI_SOUNDS.tap in game/js/audio-manager.js): a short band-passed noise burst for the "plastic"
   snap, plus a falling triangle underneath to give it weight. Synthesised rather than shipped as
   a file — no bytes, no request, no decode, nothing to preload — and it keeps the book and the
   game sounding like one product rather than two.
   Noise is generated from a FIXED seed so every tap is bit-identical; a press that sounds subtly
   different each time reads as a glitch. */
let _tapNoiseBuf = null;
function tapNoise(c) {
  if (_tapNoiseBuf) return _tapNoiseBuf;
  const n = Math.floor(c.sampleRate * 0.12);
  _tapNoiseBuf = c.createBuffer(1, n, c.sampleRate);
  const d = _tapNoiseBuf.getChannelData(0);
  let seed = 20260814;
  for (let i = 0; i < n; i++) { seed = (seed * 1103515245 + 12345) & 0x7fffffff; d[i] = (seed / 0x40000000) - 1; }
  return _tapNoiseBuf;
}
function playTap() {
  if (muted || !audioCtx) return;
  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const t = audioCtx.currentTime;
    // the CLICK — noise through a narrow band, instant attack
    const ns = audioCtx.createBufferSource(); ns.buffer = tapNoise(audioCtx);
    const bp = audioCtx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 2400; bp.Q.value = 1.1;
    const ng = audioCtx.createGain();
    ng.gain.setValueAtTime(0.0001, t);
    ng.gain.exponentialRampToValueAtTime(0.5, t + 0.001);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.036);
    ns.connect(bp).connect(ng).connect(audioCtx.destination);
    ns.start(t); ns.stop(t + 0.06);
    // the BODY — a short falling triangle, so the click has weight instead of being a tick
    const o = audioCtx.createOscillator(); o.type = "triangle";
    o.frequency.setValueAtTime(900, t);
    o.frequency.exponentialRampToValueAtTime(620, t + 0.072);
    const og = audioCtx.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(0.28, t + 0.002);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.072);
    o.connect(og).connect(audioCtx.destination);
    o.start(t); o.stop(t + 0.09);
  } catch (_) {}
}
// COVER-page flip sound — played ONLY when the cover opens (never on page flips).
function playCoverFlip() {
  if (muted) return;
  if (playSfx("cover", 0.35)) return;       // Web Audio path
  try {                                     // fallback
    coverFlipSound.currentTime = 0;
    const p = coverFlipSound.play(); if (p && p.catch) p.catch(function () {});
  } catch (_) {}
}
// Turn sound ON when the book is opened (a clear user gesture). Safe to call
// repeatedly.
function soundOn() {
  muted = false;                     // opening the book turns sound on
}


/* ==========================================================================
   PAGE-TURN HINT  —  guidance for readers who don't know how to turn the page.
   When idle, two cues fire together: a hand taps the forward arrow AND the page
   itself does a "ghost" half-flip (lifts toward the next page, then falls back).
   Timing: PAGE 1 after 5s, every later page after 10s of no interaction; repeats
   while idle and is cancelled by any tap / key / flip. Never on the last page or
   while the LBD game is open.
   ========================================================================== */
/* The nudge is a HAND on the RIGHT side of the book.
   The nudge art has never existed in this project, so the <img> that pointed at it
   404'd on EVERY load and then swapped itself for the emoji — a guaranteed failed
   request to reach a fallback we could have used directly. So the emoji IS the
   default now, and the artwork is opt-in: drop a file in assets/ and name it here.
   Empty string = no <img>, no request. */
const FLIP_HINT_ART = "";        // e.g. "assets/hand-nudge.png"

let flipHint;
if (FLIP_HINT_ART) {
  flipHint = document.createElement("img");
  flipHint.className = "flip-hint";
  flipHint.alt = "";
  flipHint.decoding = "async";
  flipHint.src = FLIP_HINT_ART;
  // Belt and braces: if the named file is missing too, fall back rather than
  // showing a broken image.
  flipHint.addEventListener("error", function () {
    const el = makeEmojiHint();
    if (flipHint.parentNode) flipHint.parentNode.replaceChild(el, flipHint);
    flipHint = el;               // later show/position calls use the swapped-in element
  }, { once: true });
} else {
  flipHint = makeEmojiHint();
}
flipHint.setAttribute("aria-hidden", "true");
document.body.appendChild(flipHint);

function makeEmojiHint() {
  const el = document.createElement("div");
  el.className = "flip-hint flip-hint--emoji";
  el.setAttribute("aria-hidden", "true");
  el.textContent = "👆";
  return el;
}

// Guidance timing: the FIRST nudge appears 5s AFTER the current page's video
// finishes playing (so it never competes with the video). It then plays ONCE,
// disappears, and comes back every 9s. Any interaction resets the whole cycle.
const HINT_AFTER_VIDEO_MS = 5000;   // wait after the video ends before the first nudge
const NUDGE_SHOW_MS = 2000;    // how long one nudge stays on screen
const NUDGE_GAP_MS  = 9000;    // gap after it disappears before it plays again
let idleHintTimer = null;
let nudgeHideTimer = null;
let peeking = false;
let peekTimers = [];

function canShowHint() {
  return opened && ready && !animating && !lbdFullscreen &&
         flipped < totalPages - 1 && flipped !== LBD_INDEX && !document.hidden;
}
function positionFlipHint() {
  if (!flipScaleEl) return;
  const r = flipScaleEl.getBoundingClientRect();            // the book's on-screen rect
  const w = flipHint.offsetWidth || 80, h = flipHint.offsetHeight || 80;
  // Park the hand against the book's RIGHT edge, vertically centred — the side the
  // ghost flip lifts. The swipe animation moves it right→left from here.
  flipHint.style.left = Math.round(r.right - w - r.width * 0.05) + "px";
  flipHint.style.top  = Math.round(r.top + r.height * 0.5 - h / 2) + "px";
}
function showFlipHint() {
  if (!canShowHint()) return;
  positionFlipHint();
  flipHint.classList.add("show");
}
function hideFlipHint() {
  flipHint.classList.remove("show");
}

/* ---- GHOST PAGE-FLIP -------------------------------------------------------
   Lift the current page about halfway toward the next one, then let it fall back
   — a live demo that the page turns. Purely visual; cancelled the instant the
   reader interacts, so a real drag/flip takes over cleanly. */
function cancelPeek() {
  peekTimers.forEach(clearTimeout);
  peekTimers = [];
  if (!peeking) return;
  peeking = false;
  const leaf = leaves[flipped];
  if (leaf) {
    leaf.style.transition = ""; leaf.style.transform = ""; leaf.style.zIndex = "";
    const c = leaf.querySelector(".curl"); if (c) c.style.opacity = "";
  }
  updateZ();
}
function peekFlip() {
  if (peeking || !canShowHint()) return;
  const leaf = leaves[flipped];
  if (!leaf) return;
  peeking = true;
  const curl = leaf.querySelector(".curl");
  leaf.style.zIndex = 300;                               // lift above the rest while peeking
  leaf.style.transition = "transform 720ms cubic-bezier(0.33, 0, 0.2, 1)";
  void leaf.offsetWidth;                                 // commit so the lift animates from flat
  leaf.style.transform = "rotateY(-52deg)";              // turn toward the next page (~halfway)
  if (curl) curl.style.opacity = "0.85";                 // page-curl shading during the lift
  peekTimers.push(setTimeout(function () {               // ...then ease it back down
    leaf.style.transform = "rotateY(0deg)";
    if (curl) curl.style.opacity = "";
  }, 760));
  peekTimers.push(setTimeout(function () {               // clean up once settled
    leaf.style.transition = ""; leaf.style.transform = ""; leaf.style.zIndex = "";
    peeking = false; updateZ();
  }, 760 + 760));
}

// Play the nudge ONCE — hand swipe on the book's right + ghost page-flip + the
// right arrow blinks — hold ~2s, then hide and come back 9s later. Repeats while idle.
function triggerHint() {
  if (!canShowHint()) { idleHintTimer = setTimeout(triggerHint, NUDGE_GAP_MS); return; }
  showFlipHint();
  peekFlip();
  if (cornerNext) cornerNext.classList.add("blink");
  clearTimeout(nudgeHideTimer);
  nudgeHideTimer = setTimeout(function () {
    hideFlipHint();
    if (cornerNext) cornerNext.classList.remove("blink");
    idleHintTimer = setTimeout(triggerHint, NUDGE_GAP_MS);   // ...then again after 9s
  }, NUDGE_SHOW_MS);
}
// Start (or restart) the 5s countdown to the first nudge.
function scheduleHintAfterVideo() {
  clearTimeout(idleHintTimer);
  idleHintTimer = setTimeout(triggerHint, HINT_AFTER_VIDEO_MS);
}
function resetIdleHint() {
  hideFlipHint();
  cancelPeek();
  if (cornerNext) cornerNext.classList.remove("blink");
  clearTimeout(idleHintTimer);
  clearTimeout(nudgeHideTimer);
  // If the current page's video is still playing, hold off — its "ended" event
  // will start the 5s countdown. Otherwise (no video, or it already finished),
  // start the countdown now.
  const v = (typeof currentVideo === "function") ? currentVideo() : null;
  if (v && !v.ended) return;
  scheduleHintAfterVideo();
}
// Any interaction cancels the nudge + restarts the idle countdown.
["pointerdown", "keydown", "wheel", "touchstart"].forEach(function (evt) {
  document.addEventListener(evt, resetIdleHint, { passive: true, capture: true });
});

/* ---- Boot ---------------------------------------------------------------- */
fitScale();                              // scale the fixed 1280x720 book to fit first
renderLeaves();                          // lay out the leaves (all on page 1 to start)
updateProgress();
