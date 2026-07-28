#!/usr/bin/env node
/* Royal Bloom — one-time data normalizer (idempotent).
 * - Removes duplicate node subtrees (first canonical occurrence kept, sibling order preserved).
 * - Removes the stray root cursor node n520_Image (referenced by nothing; CONFIG.cursor is empty).
 * - Nulls any absolute/broken audio clip path (e.g. the machine-local btn.mp3) since the
 *   exact Unity source is not vendored in this project — shipping a 404 is worse than silence.
 * Rewrites js/data.js in place and reports what changed. Run: node scripts/normalize-data.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const DATA = path.join(ROOT, "js", "data.js");
const ABS_RE = /^([a-zA-Z]:[\\/]|\/(?!\/)|[\\]{2})/;
const STRAY_ROOT_NODES = new Set(["n520_Image"]);

function load() {
  const src = fs.readFileSync(DATA, "utf8");
  const s = { window: {} };
  vm.createContext(s);
  vm.runInContext(src, s, { filename: "data.js" });
  return { LAYOUT: s.window.LAYOUT, CONFIG: s.window.CONFIG };
}

const { LAYOUT, CONFIG } = load();

// ---- dedup subtrees (first-wins) + drop stray root nodes ----
const seen = new Set();
let removedDup = 0;
const removedIds = [];
let removedStray = 0;
function prune(node) {
  node.children = (node.children || []).filter((c) => {
    if (seen.has(c.id)) { removedDup++; removedIds.push(c.id); return false; }
    if (STRAY_ROOT_NODES.has(c.id)) { removedStray++; removedIds.push(c.id); return false; }
    seen.add(c.id);
    return true;
  });
  node.children.forEach(prune);
  if (!node.children.length) delete node.children;
}
seen.add(LAYOUT.id);
prune(LAYOUT);

// ---- null broken/absolute audio clip paths ----
let clipsFixed = 0;
function scrubClips(v) {
  if (Array.isArray(v)) v.forEach(scrubClips);
  else if (v && typeof v === "object") {
    for (const k of Object.keys(v)) {
      const val = v[k];
      if ((k === "clip" || k === "audio") && typeof val === "string" && ABS_RE.test(val)) {
        v[k] = null; clipsFixed++;
      } else scrubClips(val);
    }
  }
}
scrubClips(LAYOUT);
scrubClips(CONFIG);

// ---- verify no duplicates remain ----
const count = new Map();
(function w(n) { count.set(n.id, (count.get(n.id) || 0) + 1); (n.children || []).forEach(w); })(LAYOUT);
const remaining = [...count.entries()].filter(([, n]) => n > 1);
if (remaining.length) {
  console.error("Normalization failed — duplicates remain:", remaining.map(([id]) => id).join(", "));
  process.exit(1);
}

const out =
  "window.LAYOUT = " + JSON.stringify(LAYOUT, null, 1) + ";\n" +
  "window.CONFIG = " + JSON.stringify(CONFIG, null, 1) + ";\n";
fs.writeFileSync(DATA, out, "utf8");

console.log("=== normalize-data ===");
console.log(`Removed duplicate subtree roots: ${removedDup}`);
console.log(`Removed stray root nodes: ${removedStray}`);
console.log(`Nulled absolute/broken clip paths: ${clipsFixed}`);
console.log(`Removed IDs: ${removedIds.join(", ") || "(none)"}`);
console.log(`Total unique nodes now: ${count.size}`);
console.log("data.js rewritten.");
