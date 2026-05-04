"""
Batch-generate the LaplandLuxuryVillas brand images via OpenAI gpt-image-1.

Saves PNG → WebP (Pillow recompress, q=82, method=6) into public/images/.
OG image is generated landscape and cropped to 1200×630 social spec.

Usage:  python scripts/generate-images.py [--dry-run] [--only NAME]

Env:    OPENAI_API_KEY required.
"""

from __future__ import annotations
import argparse, base64, concurrent.futures as cf, json, os, sys, time, urllib.request
from io import BytesIO
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. pip install Pillow", file=sys.stderr)
    sys.exit(2)

API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"

# Brand-correct visual rule:
#   - editorial documentary feel, NOT stock photo
#   - dark cinematic Lapland palette (deep-night + champagne + aurora green)
#   - architectural / interior subjects predominate (this is a villa site)
#   - cold Arctic light, high contrast, low saturation
#   - never feature a human face or a recognisable person
#   - hand-built materials (timber, stone, glass) front-and-centre
#   - composition leaves the upper third dark for headline overlay
NEGATIVES = (
    "no people, no human faces, no figures, no text, no logos, no watermarks, "
    "no UI elements, no overlay graphics, no stock-photo plastic look, no neon, "
    "no oversaturation, no obvious AI artefacts, no fish-eye distortion"
)
STYLE = (
    "Editorial luxury hotel architecture photography, cold Arctic blue-hour or "
    "golden-hour daylight, low-saturation Nordic palette with warm timber and "
    "champagne accents, cinematic shallow depth of field, soft natural shadows. "
    "Composition leaves the upper third darker for a headline overlay. "
    f"{NEGATIVES}."
)

# (output filename, prompt, size)  — sizes: 1024x1024, 1024x1536, 1536x1024
IMAGES: list[tuple[str, str, str]] = [
    # === HERO ===
    ("hero-villa.webp",
     "Wide cinematic exterior of a single hand-built kelo-pine luxury cabin "
     "with a heated glass-roof bedroom, set deep in a snow-covered boreal "
     "forest at Arctic blue-hour dusk. Soft golden interior light spilling "
     "from the glass walls onto fresh snow. Faint green aurora shimmer in the "
     "northern sky above dark spruce. The cabin sits low-right in the frame "
     "leaving the upper sky to breathe. Champagne brass tones in the lit "
     "windows. " + STYLE,
     "1536x1024"),

    # === OG (social) ===
    ("og-default.webp",
     "Cinematic wide composition: a single glass-walled luxury suite "
     "perched on the edge of a frozen Lapland fell at twilight, faint green "
     "aurora ribbon overhead, deep-night blue snow in the foreground, warm "
     "amber light from the suite. Composition centred for a 1200x630 social "
     "card with significant negative space top and bottom. " + STYLE,
     "1536x1024"),

    # === SIGNATURE VILLAS (10) ===
    ("villa-kakslauttanen.webp",
     "Exterior of a single thermal-glass-roof aurora cabin in Kakslauttanen "
     "style, hand-stacked kelo-pine logs, glass dome over the bedroom area, "
     "pristine snow surroundings, dark spruce forest behind, blue-hour "
     "twilight, warm interior light through the glass. " + STYLE,
     "1536x1024"),

    ("villa-octola.webp",
     "Wide exterior of a large architect-built timber wilderness lodge in a "
     "private 100 sq km Finnish reserve at golden-hour winter twilight, "
     "covered terrace, lake in front frozen, dark forest behind, warm light "
     "from windows, completely empty of any other building. " + STYLE,
     "1536x1024"),

    ("villa-arctic-treehouse.webp",
     "Modern Studio-Puisto-style cantilevered design suite on stilts among "
     "dark pine trees in winter, full glass facade, cinematic blue-hour "
     "exterior shot from below the building, warm interior glow, snow on "
     "ground and on horizontal surfaces of the building. " + STYLE,
     "1536x1024"),

    ("villa-aurora-village.webp",
     "Single small glass-roof aurora cabin alone in a clearing of snowy "
     "boreal forest at deep blue twilight, faint green aurora arc above, "
     "warm low light from inside, no other buildings visible, very low "
     "light pollution. " + STYLE,
     "1536x1024"),

    ("villa-levin-iglut.webp",
     "Glass igloo cabin perched on the south shoulder of a snowy fell with "
     "the lit Levi village skyline visible far below in the valley, faint "
     "green aurora overhead, blue-hour, warm interior light. South-facing "
     "panoramic composition. " + STYLE,
     "1536x1024"),

    ("villa-nellim.webp",
     "Transparent panoramic glass dome bubble suite in a clearing on the "
     "shore of frozen Lake Inari, snow on the ground, dark eastern forest "
     "behind, blue-hour twilight, warm yellow light glowing from inside the "
     "dome. " + STYLE,
     "1536x1024"),

    ("villa-star-arctic.webp",
     "Modern glass-walled suite at the highest summit of a fell, panoramic "
     "view of snow-covered tundra below stretching to the horizon, no trees "
     "in the immediate foreground, cinematic blue-hour, warm interior light "
     "from full-height glass walls. " + STYLE,
     "1536x1024"),

    ("villa-apukka.webp",
     "Restored heritage rail-wagon-style aurora cabin on the shore of a "
     "frozen lake in winter, glass-roof bedroom area, faint green aurora "
     "above dark forest, warm interior light, soft snowfall in the air. " + STYLE,
     "1536x1024"),

    ("villa-lakeside-log.webp",
     "Hand-built large four-bedroom log estate alone on its own private bay "
     "of Lake Inari, smoke rising from a wood-fired sauna chimney, snow on "
     "the ground, frozen lake in front, dark spruce forest behind, warm "
     "golden light from windows, deep blue twilight. " + STYLE,
     "1536x1024"),

    ("villa-mountain-chalet.webp",
     "Modern architect-built three-bedroom chalet on a south fell slope at "
     "Levi, full-height glass on the valley side, cantilevered terrace, "
     "snow-covered slope below, blue-hour twilight, warm interior light. " + STYLE,
     "1536x1024"),

    # === DESTINATION CARDS (5) — vertical 4:5 portrait ===
    ("dest-saariselka.webp",
     "Vertical composition: tall view of dark snow-covered fell summits in "
     "Urho Kekkonen National Park near Saariselkä at blue-hour, faint green "
     "aurora streak in the sky, snow-covered foreground, no buildings, "
     "dramatic cinematic Nordic landscape. " + STYLE,
     "1024x1536"),

    ("dest-inari.webp",
     "Vertical composition: silhouette of frozen Lake Inari with low islands "
     "visible at dusk, deep blue sky, faint green aurora ribbon overhead, "
     "snow on the lake ice in the foreground, very low light pollution, "
     "complete silence. " + STYLE,
     "1024x1536"),

    ("dest-rovaniemi.webp",
     "Vertical composition: snow-covered northern boreal pine forest at "
     "Rovaniemi at golden hour, dramatic light through the trees, deep snow "
     "on the ground, no buildings, no people, cinematic. " + STYLE,
     "1024x1536"),

    ("dest-levi.webp",
     "Vertical composition: ski-fell summit of Levi at blue-hour, distant "
     "lit valley village twinkle below, snow-covered piste in the "
     "foreground, no people, no skiers, cinematic. " + STYLE,
     "1024x1536"),

    ("dest-yllas.webp",
     "Vertical composition: tall cross-country ski trail through dark snowy "
     "spruce forest in Pallas-Yllästunturi National Park at golden hour, "
     "dramatic shadows, deep snow, no people. " + STYLE,
     "1024x1536"),
]

# OG should be cropped to 1200x630 after generation
OG_NAME = "og-default.webp"
OG_TARGET = (1200, 630)


def make_request(prompt: str, size: str) -> bytes:
    """Call gpt-image-1 and return PNG bytes."""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY not set")
    body = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "size": size,
        "n": 1,
        # gpt-image-1 returns base64 by default; explicit just in case.
    }).encode()
    req = urllib.request.Request(
        API_URL,
        data=body,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        payload = json.loads(r.read().decode())
    b64 = payload["data"][0]["b64_json"]
    return base64.b64decode(b64)


def save_webp(png_bytes: bytes, out_path: Path, *, og_crop: bool = False) -> None:
    img = Image.open(BytesIO(png_bytes)).convert("RGB")
    if og_crop:
        # Center-crop to 1200x630 then resize.
        target_ratio = OG_TARGET[0] / OG_TARGET[1]
        w, h = img.size
        cur_ratio = w / h
        if cur_ratio > target_ratio:
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            img = img.crop((left, 0, left + new_w, h))
        else:
            new_h = int(w / target_ratio)
            top = (h - new_h) // 2
            img = img.crop((0, top, w, top + new_h))
        img = img.resize(OG_TARGET, Image.LANCZOS)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=82, method=6)


def generate(name: str, prompt: str, size: str, out_dir: Path, dry: bool) -> tuple[str, str]:
    out_path = out_dir / name
    if out_path.exists():
        return (name, "SKIP (already present)")
    if dry:
        return (name, "DRY")
    try:
        t0 = time.time()
        png = make_request(prompt, size)
        save_webp(png, out_path, og_crop=(name == OG_NAME))
        return (name, f"OK ({time.time() - t0:.1f}s, {out_path.stat().st_size // 1024} KB)")
    except Exception as e:
        return (name, f"FAIL: {e}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", default=None, help="Substring filter on filename")
    ap.add_argument("--workers", type=int, default=3)
    args = ap.parse_args()

    out_dir = Path(__file__).resolve().parent.parent / "public" / "images"
    out_dir.mkdir(parents=True, exist_ok=True)

    items = [(n, p, s) for (n, p, s) in IMAGES if args.only is None or args.only in n]
    print(f"-> {len(items)} image(s) to generate, output: {out_dir}")

    # Modest parallelism — image API is rate-limited but slow per call.
    with cf.ThreadPoolExecutor(max_workers=args.workers) as ex:
        futures = [ex.submit(generate, n, p, s, out_dir, args.dry_run) for (n, p, s) in items]
        for fut in cf.as_completed(futures):
            name, status = fut.result()
            print(f"  {name:36s} {status}")


if __name__ == "__main__":
    main()
