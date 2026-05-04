"""Batch 2 — subpage hero images + summer / midnight-sun set.

Run: python scripts/generate-images-batch2.py

Adds 11 new images on top of the original 17:
  - Hero per inner page (Villas, Suites, Destinations, Experiences, Concierge, About)
  - MidnightSun hero + 4 summer-character villa shots
"""
from __future__ import annotations
import sys, os, base64, json, urllib.request, time, concurrent.futures as cf
from io import BytesIO
from pathlib import Path
try:
    from PIL import Image
except ImportError:
    print("Pillow missing", file=sys.stderr); sys.exit(2)

API = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"

NEG = ("no people, no human faces, no figures, no text, no logos, no watermarks, "
       "no UI elements, no overlay graphics, no stock-photo plastic look, no neon, "
       "no oversaturation, no obvious AI artefacts")

WINTER = ("Editorial luxury hotel architecture photography, cold Arctic blue-hour or "
          "golden-hour daylight, low-saturation Nordic palette with warm timber and "
          "champagne accents, cinematic shallow depth of field, soft natural shadows. "
          "Composition leaves the upper third darker for a headline overlay. " + NEG + ".")

SUMMER = ("Editorial luxury hotel architecture photography, midnight-sun late-evening "
          "warm low Arctic light at 23:00, lush green Lapland boreal forest, fresh wild "
          "flowers, lake water surface unfrozen, no snow whatsoever, warm golden timber "
          "tones, cinematic shallow depth of field, soft natural shadows. Composition "
          "leaves the upper third darker for a headline overlay. " + NEG + ".")

IMGS: list[tuple[str, str, str]] = [
    # Subpage heroes (winter / cinematic dark)
    ("hero-villas.webp",
     "Wide cinematic interior shot of a luxury Lapland villa great room: a wood-burning "
     "fireplace lit, hand-built kelo-pine timber walls, full-height glass facade looking "
     "out into a snow-covered boreal forest at blue hour, soft warm interior light, dark "
     "velvet sofa in foreground silhouette. " + WINTER, "1536x1024"),

    ("hero-suites.webp",
     "Wide cinematic interior of a single glass-walled designer suite at twilight: a "
     "low king bed under a panoramic glass ceiling that frames a dark twilight sky, "
     "warm bedside lamp, hand-built timber walls, tasteful brass details, snowy forest "
     "visible through the side glass. " + WINTER, "1536x1024"),

    ("hero-destinations.webp",
     "Wide cinematic landscape of Finnish Lapland at golden-hour winter twilight: "
     "low fells in the distance, frozen lake in the mid-ground, dark spruce forest "
     "between, a single distant villa light glowing far away on the lake shore, no "
     "people, no roads. " + WINTER, "1536x1024"),

    ("hero-experiences.webp",
     "Cinematic still life: a wood-fired sauna interior glowing with low warm light, "
     "smooth hand-carved birch benches, a copper bucket and ladle on the floor, a "
     "small window showing dark snow-covered spruce outside at blue hour. " + WINTER,
     "1536x1024"),

    ("hero-concierge.webp",
     "Cinematic detail still life: an open hand-bound leather travel journal on a "
     "dark walnut desk, a vintage brass desk lamp casting warm light, a paper map of "
     "northern Finland half visible, a glass of amber whisky next to the journal, "
     "blurred snowy window in the background at blue-hour twilight. " + WINTER,
     "1536x1024"),

    ("hero-about.webp",
     "Cinematic wide architectural exterior detail of a hand-stacked kelo-pine log "
     "wall corner of a luxury Lapland villa, deep blue twilight, snow on the ground, "
     "warm interior light spilling from a small mullioned window onto the snow. " + WINTER,
     "1536x1024"),

    # MidnightSun hero — must be summer
    ("hero-midnight-sun.webp",
     "Wide cinematic exterior of a single glass-roof Lapland villa in late June at "
     "23:00 midnight sun: warm horizontal golden light, lush green forest, lake water "
     "unfrozen and reflecting the low sun, no snow at all, glass roof catching the "
     "warm sun, deck with two empty Adirondack chairs. " + SUMMER, "1536x1024"),

    # Summer villa images for the MidnightSun summer collection band
    ("summer-villa-glass.webp",
     "A glass-roof aurora cabin in late-June midnight-sun light: lush boreal forest "
     "around it instead of snow, glass dome catching warm low sun, wildflowers in the "
     "foreground, an unfrozen pond beside it. " + SUMMER, "1536x1024"),

    ("summer-villa-lakeside.webp",
     "A hand-built log villa on its own private bay of Lake Inari in late June at "
     "23:00 midnight sun: warm horizontal light, wooden dock, canoe pulled up on the "
     "shore, lake unfrozen and mirror-flat, lush forest behind. " + SUMMER, "1536x1024"),

    ("summer-villa-fell.webp",
     "Wide cinematic shot of a designer chalet on a fell slope in late June: lush "
     "low arctic tundra in the foreground covered in cotton-grass and wildflowers, "
     "warm midnight-sun glow on the chalet glass facade, no snow, distant fell summits "
     "in the background. " + SUMMER, "1536x1024"),

    ("summer-villa-forest.webp",
     "Architectural exterior of a modern timber villa nestled into a thick green Lapland "
     "boreal forest in late-June midnight-sun light: warm horizontal golden glow on the "
     "timber facade, lush ferns in the foreground, wooden boardwalk leading to the front "
     "door. " + SUMMER, "1536x1024"),
]

def call(prompt, size):
    key = os.environ.get("OPENAI_API_KEY")
    if not key: raise RuntimeError("OPENAI_API_KEY not set")
    body = json.dumps({"model": MODEL, "prompt": prompt, "size": size, "n": 1}).encode()
    req = urllib.request.Request(API, data=body, method="POST", headers={
        "Authorization": f"Bearer {key}", "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return base64.b64decode(json.loads(r.read().decode())["data"][0]["b64_json"])

def save(png, p: Path):
    img = Image.open(BytesIO(png)).convert("RGB")
    p.parent.mkdir(parents=True, exist_ok=True)
    img.save(p, "WEBP", quality=82, method=6)

def gen(name, prompt, size, out):
    p = out / name
    if p.exists(): return name, "SKIP"
    try:
        t0 = time.time(); png = call(prompt, size); save(png, p)
        return name, f"OK ({time.time()-t0:.1f}s, {p.stat().st_size//1024}KB)"
    except Exception as e:
        return name, f"FAIL: {e}"

def main():
    out = Path(__file__).resolve().parent.parent / "public" / "images"
    print(f"-> {len(IMGS)} images, output: {out}")
    with cf.ThreadPoolExecutor(max_workers=3) as ex:
        futs = [ex.submit(gen, n, p, s, out) for n,p,s in IMGS]
        for f in cf.as_completed(futs):
            n, s = f.result()
            print(f"  {n:32s} {s}")

if __name__ == "__main__": main()
