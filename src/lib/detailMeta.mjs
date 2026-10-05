// Title and meta description of the /destinations/<slug> and /villas/<slug> pages: one composer for both
// sides. scripts/generate-prerender-meta.mjs writes the prerendered HTML with it, and DestinationPage.tsx and
// VillaDetail.tsx call the same functions in the browser, so the two cannot differ. Plain .mjs because the
// node script cannot import a .ts module; the types are in detailMeta.d.mts.
//
// A description leaves here inside the window that scripts/_prerender_routes.mjs does not touch
// (ensureDescriptionLength + clampDescription): 70-160 characters, or 100-200 width units where a CJK
// character counts as two. A longer text keeps the leading sentences that fit; a shorter one is extended
// with the page's own sentences in the same language. Never cut mid-sentence, never with an ellipsis.

/** ja and zh-CN write sentences back to back, with no space after 。！？. Korean spaces them. */
const NO_SPACE = new Set(['ja', 'zh-CN']);

// The same measures as ensureDescriptionLength() in scripts/_prerender_routes.mjs.
const WIDE = /[\u1100-\u11FF\u2E80-\uA4CF\uA960-\uA97F\uAC00-\uD7FF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;
const width = (s) => [...s].reduce((n, c) => n + (WIDE.test(c) ? 2 : 1), 0);
const fits = (s) => s.length <= 160 && width(s) <= 200;
const longEnough = (s) => s.length >= 70 || width(s) >= 100;
const tidy = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();

/**
 * The page's own paragraphs in `lang`, for extending a short description: the base copy for English, the
 * overlay's two paragraphs for any other language, and none when the overlay has none (an English sentence
 * must not extend a description in another language). Mirrors overlayVilla/overlayDestination.
 * @param {string} lang
 * @param {readonly string[] | null | undefined} base
 * @param {readonly string[] | null | undefined} overlay
 */
export function ownParagraphs(lang, base, overlay) {
  if (lang === 'en') return base || [];
  return overlay && overlay.length === 2 ? overlay : [];
}

/** True when the prerenderer leaves `text` exactly as it is. */
export function inWindow(text) {
  const t = tidy(text);
  return fits(t) && longEnough(t);
}

/** Sentences: ja/zh-CN end at 。！？ or at a Latin . ! ? before a space; every other language at . ! ? before a space. */
function sentences(text, lang) {
  const t = tidy(text);
  if (!t) return [];
  const parts = NO_SPACE.has(lang) ? t.split(/(?<=[。！？])|(?<=[.!?])\s+/u) : t.split(/(?<=[.!?。！？])\s+/u);
  return parts.map((s) => s.trim()).filter(Boolean);
}

/** No space after a ja/zh-CN 。！？, one space everywhere else. */
function join(a, b, lang) {
  if (!a) return b;
  if (!b) return a;
  return NO_SPACE.has(lang) && /[。！？]$/u.test(a) ? a + b : `${a} ${b}`;
}

/**
 * `text` inside the prerenderer's window. Too long: the leading sentences that fit. Too short: extended with
 * sentences from `more` that fit, until long enough. `more` is the page's own text in THIS language, never the
 * English fallback. A first sentence that alone is too long comes back unchanged (the only shorter form would
 * end mid-sentence); the generator warns about anything outside the window.
 * @param {string} text
 * @param {readonly string[]} [more]
 * @param {string} [lang]
 */
export function fitDescription(text, more = [], lang = 'en') {
  let out = tidy(text);
  if (!fits(out)) {
    let kept = '';
    for (const s of sentences(out, lang)) {
      const next = join(kept, s, lang);
      if (!fits(next)) break;
      kept = next;
    }
    if (!kept) return out;
    out = kept;
  }
  if (longEnough(out)) return out;
  for (const s of sentences((more || []).join(' '), lang)) {
    if (out.includes(s)) continue;
    const next = join(out, s, lang);
    if (!fits(next)) continue;
    out = next;
    if (longEnough(out)) break;
  }
  return out;
}

/** "{name}: {suffix}", e.g. "Inari: Lappi · yksityishuvilat, sviitit ja revontulet". */
export function destinationTitle(name, suffix) {
  return `${name}: ${suffix}`;
}

/**
 * The destination's position line followed by its aurora note, through fitDescription().
 * @param {{ position: string, auroraNote: string, more?: readonly string[], lang: string }} o
 */
export function destinationDescription({ position, auroraNote, more = [], lang }) {
  return fitDescription(join(tidy(position), tidy(auroraNote), lang), more, lang);
}

/**
 * "{hotel}, {destination}. {tagline}", or the tagline alone for a villa with no hotel, through fitDescription().
 * @param {{ hotel?: string | null, destination: string, tagline: string, more?: readonly string[], lang: string }} o
 */
export function villaDescription({ hotel, destination, tagline, more = [], lang }) {
  const base = hotel ? `${hotel}, ${destination}. ${tidy(tagline)}` : tidy(tagline);
  return fitDescription(base, more, lang);
}
