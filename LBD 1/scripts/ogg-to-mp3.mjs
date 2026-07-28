/* Local build step: transcode every assets/audio/*.ogg to a sibling *.mp3.
 * MP3 is the one format every browser decodes — Safari and all iOS browsers
 * (which are WebKit under the hood) cannot play OGG Vorbis, so the deployed
 * game was silent on Apple devices. Run once after adding/replacing audio:
 *
 *   npm install ffmpeg-static --no-save
 *   node scripts/ogg-to-mp3.mjs
 *
 * ffmpeg-static is a dev-only dependency (not needed at runtime, gitignored
 * with node_modules) — same pattern as sharp for the WebP image build.
 */
import { readdirSync, statSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO = join(ROOT, "assets", "audio");

const oggs = readdirSync(AUDIO).filter((f) => f.toLowerCase().endsWith(".ogg"));
if (!oggs.length) {
  console.log("No .ogg files found in", AUDIO);
  process.exit(0);
}

console.log(`Transcoding ${oggs.length} file(s) with`, ffmpegPath);
let done = 0;
for (const f of oggs) {
  const src = join(AUDIO, f);
  const out = join(AUDIO, basename(f, ".ogg") + ".mp3");
  // -q:a 4 ≈ 165 kbps VBR: transparent for VO/SFX and fine for the loop BGM.
  execFileSync(ffmpegPath, ["-y", "-i", src, "-codec:a", "libmp3lame", "-q:a", "4", out], {
    stdio: ["ignore", "ignore", "ignore"],
  });
  const kb = (statSync(out).size / 1024).toFixed(0);
  console.log(`  ✓ ${f} → ${basename(out)} (${kb} KB)`);
  done++;
}
console.log(`Done: ${done}/${oggs.length} converted.`);
