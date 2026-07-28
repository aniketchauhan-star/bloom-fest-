#!/usr/bin/env node
/* Royal Bloom — one-shot static gate. Runs every mandatory static check and exits
 * non-zero if any fails. (End-to-end runtime checks live in qa/smoke-test.mjs.)
 * Run: node scripts/check-all.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const JS = ["js/data.js", "js/engine.js", "js/audio-manager.js", "js/interaction.js", "js/controllers.js", "js/main.js"];
let failed = 0;
function step(name, fn) { try { fn(); console.log("  ok  " + name); } catch (e) { failed++; console.log("  X   " + name + "\n        " + String(e.message || e).split("\n")[0]); } }

console.log("=== static checks ===");

// 1) JS syntax for every file
JS.forEach((f) => step("syntax " + f, () => execFileSync(process.execPath, ["--check", path.join(ROOT, f)], { stdio: "pipe" })));

// 2) data audit (duplicate IDs, missing assets, absolute paths, refs, level configs)
step("data audit (scripts/audit-data.mjs)", () => execFileSync(process.execPath, [path.join(ROOT, "scripts", "audit-data.mjs")], { stdio: "pipe" }));

// 3) source integrity: no absolute paths, no removed-ID references in shipped source
const shipped = JS.concat(["css/style.css", "index.html"]);
step("no absolute filesystem paths in shipped source", () => {
  const bad = [];
  const re = /(^|["'(\s])(\/home\/|\/Users\/|[A-Za-z]:[\\/])/m;
  shipped.forEach((f) => { const t = fs.readFileSync(path.join(ROOT, f), "utf8"); t.split("\n").forEach((ln, i) => { if (re.test(ln) && !/assets\//.test(ln)) bad.push(f + ":" + (i + 1)); }); });
  if (bad.length) throw new Error("absolute paths at " + bad.join(", "));
});
step("no references to removed node id n520_Image", () => {
  const bad = shipped.filter((f) => /n520_Image/.test(fs.readFileSync(path.join(ROOT, f), "utf8")));
  if (bad.length) throw new Error("referenced in " + bad.join(", "));
});

// 4) single canonical confetti + hand systems in data (exactly one each, no dupes)
step("single canonical confetti + hand systems", () => {
  const src = fs.readFileSync(path.join(ROOT, "js", "data.js"), "utf8");
  const confetti = (src.match(/"id":\s*"n516_ConfettiBlast"/g) || []).length;
  const hand = (src.match(/"id":\s*"n519_hand"/g) || []).length;
  if (confetti !== 1 || hand !== 1) throw new Error("expected 1 ConfettiBlast (got " + confetti + ") + 1 root hand (got " + hand + ")");
});

console.log(failed ? "\nSTATIC CHECKS FAILED: " + failed : "\nALL STATIC CHECKS PASSED.");
process.exit(failed ? 1 : 0);
