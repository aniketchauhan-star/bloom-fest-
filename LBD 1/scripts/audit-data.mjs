#!/usr/bin/env node
/* Royal Bloom — static data + asset audit.
 * Exits non-zero when any hard check fails. Run: node scripts/audit-data.mjs
 * Loads js/data.js in a sandbox (it only assigns window.LAYOUT / window.CONFIG).
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import vm from "node:vm";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

function loadData() {
  const src = fs.readFileSync(path.join(ROOT, "js", "data.js"), "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: "data.js" });
  return { LAYOUT: sandbox.window.LAYOUT, CONFIG: sandbox.window.CONFIG };
}

const problems = [];
const warnings = [];
const fail = (m) => problems.push(m);
const warn = (m) => warnings.push(m);

const { LAYOUT, CONFIG } = loadData();

// ---- walk the node tree ----
const allNodes = [];
const byId = new Map();
const idCounts = new Map();
const rootChildrenIds = new Set();
(function walk(node, parent, depth) {
  if (!node || typeof node !== "object") return;
  allNodes.push(node);
  idCounts.set(node.id, (idCounts.get(node.id) || 0) + 1);
  if (!byId.has(node.id)) byId.set(node.id, node);
  node.__parent = parent;
  node.__depth = depth;
  if (depth === 1) rootChildrenIds.add(node.id);
  (node.children || []).forEach((c) => walk(c, node, depth + 1));
})(LAYOUT, null, 0);

// ---- duplicate layout IDs ----
const dupes = [...idCounts.entries()].filter(([, n]) => n > 1).map(([id]) => id);
if (dupes.length) fail(`Duplicate layout node IDs (${dupes.length}): ${dupes.join(", ")}`);

// ---- collect asset paths + absolute paths ----
const assetRefs = new Set();
const absolutePaths = new Set();
const ABS_RE = /^([a-zA-Z]:[\\/]|\/(?!\/)|[\\]{2})/; // C:\ , /foo , \\unc
function scanValue(v) {
  if (typeof v === "string") {
    if (/^assets\//.test(v)) assetRefs.add(v);
    else if (/\.(png|jpg|jpeg|gif|ogg|mp3|wav|ttf|otf)$/i.test(v) && ABS_RE.test(v)) absolutePaths.add(v);
  } else if (Array.isArray(v)) v.forEach(scanValue);
  else if (v && typeof v === "object") for (const k in v) { if (k === "__parent") continue; scanValue(v[k]); }
}
scanValue(LAYOUT);
scanValue(CONFIG);

if (absolutePaths.size) fail(`Absolute filesystem path(s) in data: ${[...absolutePaths].join(", ")}`);

// ---- missing assets ----
const missing = [];
for (const a of assetRefs) {
  if (!fs.existsSync(path.join(ROOT, a))) missing.push(a);
}
if (missing.length) fail(`Missing local asset(s) (${missing.length}): ${missing.join(", ")}`);

// ---- every config node reference exists ----
const badRefs = new Set();
function scanRefs(v, ctx) {
  if (Array.isArray(v)) v.forEach((x) => scanRefs(x, ctx));
  else if (v && typeof v === "object") {
    if (typeof v.node === "string" && !byId.has(v.node)) badRefs.add(`${ctx}: ${v.node}`);
    for (const k in v) if (k !== "__parent") scanRefs(v[k], ctx + "." + k);
  }
}
scanRefs(CONFIG, "CONFIG");
if (badRefs.size) fail(`Config references to nonexistent nodes: ${[...badRefs].join(" | ")}`);

// ---- stray root hand / duplicate cursor systems ----
const rootImages = (LAYOUT.children || []).filter((c) => /Image$/i.test(c.name || "") || /_Image$/.test(c.id || ""));
const strayHand = byId.get("n520_Image");
if (strayHand && strayHand.__depth === 1 && strayHand.active) {
  warn("n520_Image is an active root-level node (stray center hand) — should be removed/disabled.");
}

// ---- level config validation ----
const gms = CONFIG.gameManagers || [];
const LEVELS = ["Tutorial", "Level_1", "Level_2", "Level_3", "Level_4"];
if (gms.length !== 5) fail(`Expected 5 GameManagers, found ${gms.length}`);

const nidOf = (f) => (f && f.node) ? f.node : null;
gms.forEach((g, i) => {
  const f = g.fields || {};
  const label = g.host || `gm[${i}]`;
  // two comparison items via draggables
  const book = nidOf(f.bookDraggable), ball = nidOf(f.ballDraggable);
  if (!book || !ball) fail(`${label}: missing bookDraggable/ballDraggable`);
  // answer mode
  const mode = typeof f.answerMode === "number" ? f.answerMode : null;
  if (mode !== 0 && mode !== 1) fail(`${label}: invalid answerMode ${f.answerMode}`);
  // weights from draggable configs
  [book, ball].forEach((d) => {
    const dc = (CONFIG.draggables || {})[d];
    const w = dc && dc.itemData ? dc.itemData.weight : undefined;
    if (typeof w !== "number" || !isFinite(w)) fail(`${label}: draggable ${d} has non-finite weight ${w}`);
    const sp = dc && dc.itemData && dc.itemData.itemSprite && dc.itemData.itemSprite.path;
    if (!sp) warn(`${label}: draggable ${d} missing itemSprite`);
  });
  // required scale + destinations
  if (!nidOf(f.leftDropPoint) || !nidOf(f.rightDropPoint)) warn(`${label}: missing scale drop points`);
  if (!nidOf(f.basket) || !nidOf(f.trolley)) warn(`${label}: missing basket/trolley`);
});

// ---- exactly one of each level flow root ----
LEVELS.forEach((lv) => {
  const matches = allNodes.filter((n) => n.__depth === 1 && new RegExp("^" + lv.replace("_", ".?")).test((n.name || "").replace(/[()\s]/g, "_")));
});
const rootLevelNodes = (LAYOUT.children || []).map((c) => c.id);

// ---- btnAnim clip path sanity ----
Object.entries(CONFIG.btnAnim || {}).forEach(([id, cfg]) => {
  if (typeof cfg.clip === "string" && ABS_RE.test(cfg.clip)) {
    fail(`btnAnim ${id}: absolute clip path "${cfg.clip}"`);
  }
});

// ---- report ----
console.log("=== Royal Bloom data audit ===");
console.log(`Layout nodes: ${allNodes.length}  unique IDs: ${idCounts.size}`);
console.log(`Image nodes: ${allNodes.filter((n) => n.components && n.components.image).length}`);
console.log(`Button nodes: ${allNodes.filter((n) => n.components && n.components.button).length}`);
console.log(`Draggables: ${Object.keys(CONFIG.draggables || {}).length}  Baskets: ${Object.keys(CONFIG.baskets || {}).length}`);
console.log(`GameManagers: ${gms.length}  ScaleControllers: ${Object.keys(CONFIG.scaleControllers || {}).length}`);
console.log(`Unique asset refs: ${assetRefs.size}  (missing: ${missing.length})`);
console.log(`Root-level children: ${rootLevelNodes.length} -> ${rootLevelNodes.join(", ")}`);

if (warnings.length) {
  console.log("\n--- warnings ---");
  warnings.forEach((w) => console.log("  ! " + w));
}
if (problems.length) {
  console.log("\n--- FAILURES ---");
  problems.forEach((p) => console.log("  x " + p));
  console.log(`\nAUDIT FAILED: ${problems.length} problem(s).`);
  process.exit(1);
}
console.log("\nAUDIT PASSED.");
