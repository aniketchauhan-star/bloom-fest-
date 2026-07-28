"""Media conversion for bloom-fest, with a hard "never bigger than the source" rule.

Usage:  python tools/convert-media.py            (ffmpeg + ffprobe on PATH)
        FFMPEG_BIN=/path/to/bin python tools/convert-media.py

Sources are NOT deleted: read the report, confirm every line says OK, then remove
the originals yourself. Afterwards regenerate the preloader size table:
        node tools/gen-asset-manifest.mjs

  video : mp4  -> webm  (VP9 constrained-quality + Opus, yuv420p)
  audio : mp3  -> ogg   (Opus 64-96k)
  image : png  -> webp  (q82)

Plain CRF overshoots on already-compressed sources, so every video encode is
CONSTRAINED: -crf plus a -b:v ceiling at 75% of the source's own video bitrate.
Anything that still lands >= the source is re-encoded two-pass targeting 70% of
the source's total bitrate. Writes a manifest with before/after bytes.
"""
import json, os, subprocess, sys, shutil

# ffmpeg/ffprobe: taken from PATH, or point FFMPEG_BIN at the folder holding them.
FF = os.environ.get("FFMPEG_BIN", "")
FFMPEG  = os.path.join(FF, "ffmpeg")  if FF else "ffmpeg"
FFPROBE = os.path.join(FF, "ffprobe") if FF else "ffprobe"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def run(args):
    r = subprocess.run(args, capture_output=True, text=True, errors="replace")
    if r.returncode != 0:
        print("   ffmpeg FAILED:", (r.stderr or "")[-700:], flush=True)
    return r.returncode == 0

def probe(path, stream, fields):
    out = subprocess.run(
        [FFPROBE, "-v", "error", "-select_streams", stream,
         "-show_entries", f"stream={','.join(fields)}", "-of", "default=nw=1", path],
        capture_output=True, text=True).stdout
    d = {}
    for line in out.strip().splitlines():
        if "=" in line:
            k, v = line.split("=", 1)
            d[k] = v
    return d

def fmt_probe(path):
    out = subprocess.run(
        [FFPROBE, "-v", "error", "-show_entries", "format=duration,bit_rate",
         "-of", "default=nw=1", path], capture_output=True, text=True).stdout
    d = {}
    for line in out.strip().splitlines():
        if "=" in line:
            k, v = line.split("=", 1)
            d[k] = v
    return d

def size(p):
    return os.path.getsize(p) if os.path.exists(p) else 0

results = []

# ─────────────────────────────────────────────────────────── VIDEO → WebM
VIDEOS = [os.path.join(ROOT, "assets", f"{i}.mp4") for i in range(1, 6)]

def encode_video(src, dst, crf, vcap_k, two_pass=False, abr_k=None):
    common = ["-c:v", "libvpx-vp9", "-pix_fmt", "yuv420p", "-row-mt", "1",
              "-threads", "8", "-cpu-used", "3", "-deadline", "good",
              "-g", "240", "-tile-columns", "2", "-frame-parallel", "0",
              "-auto-alt-ref", "1", "-lag-in-frames", "25"]
    if two_pass:
        passlog = dst + ".pass"
        p1 = [FFMPEG, "-y", "-v", "error", "-i", src, *common,
              "-b:v", f"{abr_k}k", "-pass", "1", "-passlogfile", passlog,
              "-an", "-f", "webm", os.devnull]
        p2 = [FFMPEG, "-y", "-v", "error", "-i", src, *common,
              "-b:v", f"{abr_k}k", "-pass", "2", "-passlogfile", passlog,
              "-c:a", "libopus", "-b:a", "96k", "-vbr", "on", dst]
        okk = run(p1) and run(p2)
        for ext in ("-0.log", "-0.log.mbtree", ".log"):
            try: os.remove(passlog + ext)
            except OSError: pass
        return okk
    return run([FFMPEG, "-y", "-v", "error", "-i", src, *common,
                "-crf", str(crf), "-b:v", f"{vcap_k}k",
                "-c:a", "libopus", "-b:a", "96k", "-vbr", "on", dst])

print("═══ VIDEO → WebM (VP9 + Opus, constrained quality) ═══", flush=True)
for src in VIDEOS:
    dst = os.path.splitext(src)[0] + ".webm"
    v = probe(src, "v:0", ["bit_rate"])
    f = fmt_probe(src)
    vbr = int(v.get("bit_rate") or 0)
    tbr = int(f.get("bit_rate") or 0)
    cap = max(200, int(vbr * 0.75) // 1000)          # 75% of source VIDEO bitrate
    s0 = size(src)
    name = os.path.basename(src)
    print(f"  {name}: src {s0/1e6:.2f}MB  vbitrate {vbr/1000:.0f}k → cap {cap}k, crf 32", flush=True)
    encode_video(src, dst, 32, cap)
    s1 = size(dst)
    note = "cq crf32"
    if s1 == 0 or s1 >= s0:
        abr = max(150, int(tbr * 0.70) // 1000 - 96)  # 70% of TOTAL, minus the audio budget
        print(f"    ↳ {s1/1e6:.2f}MB not smaller — two-pass at {abr}k", flush=True)
        encode_video(src, dst, None, None, two_pass=True, abr_k=abr)
        s1 = size(dst)
        note = f"two-pass {abr}k"
    status = "OK" if 0 < s1 < s0 else "STILL LARGER"
    print(f"    → {s1/1e6:.2f}MB  ({100*s1/s0:.0f}% of source)  {status}", flush=True)
    results.append({"kind": "video", "src": name, "dst": os.path.basename(dst),
                    "before": s0, "after": s1, "note": note})

# ── first-frame posters (the flipbook derives assets/posters/N.webp and 404s today)
print("\n═══ POSTERS (first frame → WebP) ═══", flush=True)
pdir = os.path.join(ROOT, "assets", "posters")
os.makedirs(pdir, exist_ok=True)
for i in range(1, 6):
    src = os.path.join(ROOT, "assets", f"{i}.webm")
    dst = os.path.join(pdir, f"{i}.webp")
    run([FFMPEG, "-y", "-v", "error", "-i", src, "-frames:v", "1",
         "-c:v", "libwebp", "-quality", "82", "-compression_level", "6", dst])
    print(f"  posters/{i}.webp  {size(dst)/1024:.0f}KB", flush=True)
    results.append({"kind": "poster", "src": f"{i}.webm frame0", "dst": f"posters/{i}.webp",
                    "before": 0, "after": size(dst), "note": "new (was a 404)"})

# ─────────────────────────────────────────────────────────── AUDIO → Ogg/Opus
def encode_audio(src, dst, kbps, channels=None):
    args = [FFMPEG, "-y", "-v", "error", "-i", src, "-c:a", "libopus",
            "-b:a", f"{kbps}k", "-vbr", "on", "-compression_level", "10",
            "-application", "audio"]
    if channels:
        args += ["-ac", str(channels)]
    args += ["-map_metadata", "-1", dst]
    return run(args)

def do_audio(src, label):
    dst = os.path.splitext(src)[0] + ".ogg"
    a = probe(src, "a:0", ["channels", "bit_rate"])
    ch = int(a.get("channels") or 2)
    base = os.path.basename(src).lower()
    music = ("bgm" in base) or ("magical" in base)
    kbps = 96 if music else 64
    s0 = size(src)
    encode_audio(src, dst, kbps, ch)
    s1 = size(dst)
    tries = 0
    while (s1 == 0 or s1 >= s0) and tries < 3:       # walk the bitrate down, never ship bigger
        kbps = max(32, int(kbps * 0.7))
        tries += 1
        print(f"    ↳ {os.path.basename(dst)} {s1}B >= {s0}B — retry at {kbps}k", flush=True)
        encode_audio(src, dst, kbps, ch)
        s1 = size(dst)
    ok = 0 < s1 < s0
    print(f"  {label}/{os.path.basename(dst)}  {s0/1024:.0f}KB → {s1/1024:.0f}KB "
          f"({100*s1/s0:.0f}%) @{kbps}k {'OK' if ok else 'STILL LARGER'}", flush=True)
    results.append({"kind": "audio", "src": label + "/" + os.path.basename(src),
                    "dst": label + "/" + os.path.basename(dst),
                    "before": s0, "after": s1, "note": f"opus {kbps}k"})

print("\n═══ AUDIO → Ogg (Opus) ═══", flush=True)
sfxdir = os.path.join(ROOT, "sfx")
for f in sorted(os.listdir(sfxdir)):
    if f.lower().endswith(".mp3"):
        do_audio(os.path.join(sfxdir, f), "sfx")

gaudio = os.path.join(ROOT, "game", "assets", "audio")
for f in sorted(os.listdir(gaudio)):
    if f.lower().endswith(".mp3"):
        do_audio(os.path.join(gaudio, f), "game/assets/audio")

# ─────────────────────────────────────────────────────────── IMAGE → WebP
print("\n═══ IMAGE → WebP ═══", flush=True)
from PIL import Image
def do_image(src, label, quality=82):
    dst = os.path.splitext(src)[0] + ".webp"
    s0 = size(src)
    im = Image.open(src)
    kw = {"quality": quality, "method": 6}
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
    im.save(dst, "WEBP", **kw)
    s1 = size(dst)
    q = quality
    while s1 >= s0 and q > 55:
        q -= 10
        im.save(dst, "WEBP", quality=q, method=6)
        s1 = size(dst)
        print(f"    ↳ retry q{q}", flush=True)
    ok = 0 < s1 < s0
    print(f"  {label}/{os.path.basename(dst)}  {s0/1024:.0f}KB → {s1/1024:.0f}KB "
          f"({100*s1/s0:.0f}%) q{q} {'OK' if ok else 'STILL LARGER'}", flush=True)
    results.append({"kind": "image", "src": label + "/" + os.path.basename(src),
                    "dst": label + "/" + os.path.basename(dst),
                    "before": s0, "after": s1, "note": f"webp q{q}"})

for f in sorted(os.listdir(os.path.join(ROOT, "assets"))):
    if f.lower().endswith((".png", ".jpg", ".jpeg")):
        do_image(os.path.join(ROOT, "assets", f), "assets")

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "convert-manifest.json")
json.dump(results, open(out, "w"), indent=1)
print(f"\nmanifest → {out}", flush=True)

tot_b = sum(r["before"] for r in results)
tot_a = sum(r["after"] for r in results)
bad = [r for r in results if r["before"] and r["after"] >= r["before"]]
print(f"\nTOTAL converted: {tot_b/1e6:.2f}MB → {tot_a/1e6:.2f}MB")
print(f"OUTPUTS LARGER THAN SOURCE: {len(bad)}  {[r['dst'] for r in bad]}")
