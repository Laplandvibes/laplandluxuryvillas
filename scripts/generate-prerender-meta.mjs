// scripts/generate-prerender-meta.mjs  (laplandluxuryvillas)
//
// Emits scripts/prerender-meta.json — a per-route × per-locale meta map consumed
// by ../_prerender_routes.mjs via --meta. Two kinds of routes are covered:
//
//   1. STATIC pages (home + villas/suites/destinations/experiences/midnight-sun/
//      concierge/about) — read verbatim from src/locales/seo-meta.json, the SAME
//      file the page components import at runtime (getPageSeo). So the prerendered
//      <title>/<meta> are identical to the client render, in every locale.
//
//   2. DYNAMIC detail pages — /villas/:slug and /destinations/:slug — whose meta
//      is built from per-locale data (lib/villas.ts + lib/destinations.ts base,
//      overlaid by lib/content.<lang>.ts) with the SAME composer the pages call in
//      the browser: src/lib/villaTitle.mjs (villa title) and src/lib/detailMeta.mjs
//      (destination title, both descriptions). Only the data reading lives here.
//
// Legal pages (/privacy /terms /cookie-policy) are STATIC pages too: their
// per-locale meta lives in seo-meta.json like every other static page (2026-08-03;
// before that they fell back to the EN routes.json fallbackTitle in all 11 non-EN
// locales — the "no-meta: <lang> /privacy" build lines). Only /contact stays in
// routes.json (copyKey), intentionally not emitted here.
//
// Idempotent. Run from the site root after/with vite build:
//   node scripts/generate-prerender-meta.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { villaTitle, villaBrandTitle } from '../src/lib/villaTitle.mjs';
import { destinationTitle, destinationDescription, villaDescription, ownParagraphs, inWindow } from '../src/lib/detailMeta.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const LIB = join(ROOT, 'src', 'lib');
const LOCALES = join(ROOT, 'src', 'locales');
const DATA = join(ROOT, 'src', 'data');
const OUT = join(ROOT, 'scripts', 'prerender-meta.json');

const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];
const CONTENT_FILE = {
  fi: 'content.fi.ts', de: 'content.de.ts', ja: 'content.ja.ts', es: 'content.es.ts',
  'pt-BR': 'content.pt-BR.ts', 'zh-CN': 'content.zh-CN.ts', ko: 'content.ko.ts',
  fr: 'content.fr.ts', it: 'content.it.ts', nl: 'content.nl.ts', sv: 'content.sv.ts',
};
const SITE_NAME = 'LaplandLuxuryVillas';

// ---- generic brace-matched readers (same approach as _prerender_routes.mjs) ----
function sliceBlock(src, openIdx) {
  let depth = 0, start = -1, end = -1;
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    if (c === '{') { if (depth === 0) start = i + 1; depth++; }
    else if (c === '}') { depth--; if (depth === 0) { end = i; break; } }
  }
  if (start < 0 || end < 0) return null;
  return src.slice(start, end);
}
function unescape(s) {
  return s
    .replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, '`')
    .replace(/\\n/g, ' ').replace(/\\t/g, ' ').replace(/\\\\/g, '\\')
    .replace(/\s+/g, ' ').trim();
}
function field(block, key) {
  const m = block.match(new RegExp(`(?:^|[\\s,{])${key}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`, 's'));
  return m ? unescape(m[2]) : null;
}
// String-literal array field (`copy: ['…', '…']`): the page's own paragraphs, which the
// description composer may extend a short description with.
function arrayField(block, key) {
  const m = new RegExp(`(?:^|[\\s,{])${key}\\s*:\\s*\\[`, 's').exec(block);
  if (!m) return null;
  const open = m.index + m[0].length - 1;
  let quote = null, end = -1;
  for (let i = open + 1; i < block.length; i++) {
    const c = block[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = null;
    } else if (c === "'" || c === '"' || c === '`') quote = c;
    else if (c === ']') { end = i; break; }
  }
  if (end < 0) return null;
  return [...block.slice(open + 1, end).matchAll(/(['"`])((?:\\.|(?!\1).)*)\1/gs)].map((x) => unescape(x[2]));
}

// ---- base data: scope each object by its leading `slug:` ----
function parseBase(file, fields, arrays = []) {
  const src = readFileSync(join(LIB, file), 'utf-8');
  const out = {};
  const re = /slug:\s*(['"`])([a-z0-9-]+)\1/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const slug = m[2];
    let i = m.index, depth = 0, open = -1;
    while (i >= 0) {
      const c = src[i];
      if (c === '}') depth++;
      else if (c === '{') { if (depth === 0) { open = i; break; } depth--; }
      i--;
    }
    if (open < 0) continue;
    const block = sliceBlock(src, open);
    if (!block) continue;
    const rec = {};
    for (const f of fields) rec[f] = field(block, f);
    for (const a of arrays) rec[a] = arrayField(block, a);
    // Require the discriminating field to consider it a real entity (skip nested objs).
    if (rec[fields[0]] && !out[slug]) out[slug] = rec;
  }
  return out;
}

// ---- overlay: content.<lang>.ts → { villas:{slug:{tagline,copy}}, destinations:{slug:{position,auroraNote,copy}} } ----
function parseOverlay(file, section, fields, arrays = []) {
  let src;
  try { src = readFileSync(join(LIB, file), 'utf-8'); } catch { return {}; }
  // Isolate the `<section>: { … }` block, then read each `'<slug>': { … }` inside.
  const secRe = new RegExp(`(?:^|[\\s,{])${section}\\s*:\\s*\\{`, 'g');
  const sm = secRe.exec(src);
  if (!sm) return {};
  const secBlock = sliceBlock(src, sm.index + sm[0].length - 1);
  if (!secBlock) return {};
  const out = {};
  const re = /(['"])([a-z0-9-]+)\1\s*:\s*\{/g;
  let m;
  while ((m = re.exec(secBlock)) !== null) {
    const slug = m[2];
    const block = sliceBlock(secBlock, m.index + m[0].length - 1);
    if (!block) continue;
    const rec = {};
    for (const f of fields) rec[f] = field(block, f);
    for (const a of arrays) rec[a] = arrayField(block, a);
    if (!out[slug]) out[slug] = rec;
  }
  return out;
}

// ---- static pages from seo-meta.json ----
const seoMeta = JSON.parse(readFileSync(join(LOCALES, 'seo-meta.json'), 'utf-8'));
const STATIC_ROUTE_OF_KEY = {
  home: '/',
  villas: '/villas',
  suites: '/suites',
  destinations: '/destinations',
  experiences: '/experiences',
  'midnight-sun': '/midnight-sun',
  'private-inquiry': '/private-inquiry',
  about: '/about',
  privacy: '/privacy',
  terms: '/terms',
  'cookie-policy': '/cookie-policy',
};
// 🔴 THIS MAP IS A META SOURCE IN ITS OWN RIGHT (2026-08-02). Renaming a page
// means editing FIVE places, not three: copy.<lang>.ts, seo-meta.json, this
// map, scripts/routes.json and index.html. Miss this one and the route still
// prerenders — it just silently falls back to the EN title in all 11 other
// locales. The build prints "no-meta: <lang> <route>" when that happens; that
// line is the gate, do not ignore it.
const destSuffix = seoMeta._destinationTitleSuffix || {};

const meta = {};

for (const [key, route] of Object.entries(STATIC_ROUTE_OF_KEY)) {
  const byLang = seoMeta[key];
  if (!byLang) continue;
  meta[route] = {};
  for (const lang of LANGS) {
    const e = byLang[lang] || byLang.en;
    meta[route][lang] = { title: e.title, description: e.description };
  }
}

// ---- dynamic: villas ----
const villaBase = parseBase('villas.ts', ['name', 'destination', 'tagline'], ['copy']); // slug → {name,destination,tagline,copy (EN)}

// 🔴 [LV-BRAND-TITLE 2026-09-20] The prerendered <title> is the one a crawler
// reads, so it has to agree with VillaDetail.tsx: the hotel's registered name
// first, because that is the search. Read straight out of properties.ts —
// slug → key → name — rather than duplicated here.
const propsSrc = readFileSync(join(DATA, 'properties.ts'), 'utf8');
const propNames = Object.fromEntries([...propsSrc.matchAll(/(\w+):\s*\{\s*name:\s*"([^"]+)"/g)].map((m) => [m[1], m[2]]));
const slugToProp = Object.fromEntries([...propsSrc.matchAll(/'([a-z0-9-]+)':\s*'(\w+)',/g)].map((m) => [m[1], m[2]]));
const hotelFor = (slug) => propNames[slugToProp[slug]] || null;
const villaOverlays = {};
for (const [lang, file] of Object.entries(CONTENT_FILE)) {
  villaOverlays[lang] = parseOverlay(file, 'villas', ['tagline'], ['copy']);
}
for (const [slug, b] of Object.entries(villaBase)) {
  const path = `/villas/${slug}`;
  meta[path] = {};
  for (const lang of LANGS) {
    // [LV-DUP 2026-09-06] localized descriptor after the two proper nouns;
    // [LV-BRAND-TITLE 2026-09-20] hotel name first where there is one.
    const hotel = hotelFor(slug);
    const title = hotel ? villaBrandTitle(b.name, hotel, b.destination, lang) : villaTitle(b.name, b.destination, lang);
    const ov = lang === 'en' ? null : villaOverlays[lang]?.[slug];
    const description = villaDescription({
      hotel,
      destination: b.destination,
      tagline: (ov && ov.tagline) || b.tagline,
      more: ownParagraphs(lang, b.copy, ov?.copy),
      lang,
    });
    meta[path][lang] = { title, description };
  }
}

// ---- dynamic: destinations ----
const destBase = parseBase('destinations.ts', ['name', 'position', 'auroraNote'], ['copy']);
const destOverlays = {};
for (const [lang, file] of Object.entries(CONTENT_FILE)) {
  destOverlays[lang] = parseOverlay(file, 'destinations', ['position', 'auroraNote'], ['copy']);
}
for (const [slug, b] of Object.entries(destBase)) {
  const path = `/destinations/${slug}`;
  meta[path] = {};
  for (const lang of LANGS) {
    const ov = lang === 'en' ? null : destOverlays[lang]?.[slug];
    // Same lookup as getDestinationTitleSuffix() in src/lib/pageSeo.ts.
    const suffix = destSuffix[lang] ?? destSuffix.en ?? 'Lapland · Private Villas, Suites & Aurora';
    meta[path][lang] = {
      title: destinationTitle(b.name, suffix),
      description: destinationDescription({
        position: (ov && ov.position) || b.position,
        auroraNote: (ov && ov.auroraNote) || b.auroraNote,
        more: ownParagraphs(lang, b.copy, ov?.copy),
        lang,
      }),
    };
  }
}

// The prerenderer extends a description under 70 characters / 100 width units and cuts
// one over 160 / 200, and the browser does neither: the text below would differ between
// the static HTML and the hydrated page (gate:meta-hydraatio in lv-ops).
for (const [route, byLang] of Object.entries(meta)) {
  for (const [lang, e] of Object.entries(byLang)) {
    if (!inWindow(e.description)) {
      console.warn(`[gen-meta] WARN: ${lang} ${route} description outside 70-160 characters / 100-200 width units, the prerender will rewrite it: ${e.description}`);
    }
  }
}

writeFileSync(OUT, JSON.stringify(meta, null, 2), 'utf-8');
const villaCount = Object.keys(villaBase).length;
const destCount = Object.keys(destBase).length;
console.log(
  `[gen-meta] wrote ${OUT.replace(ROOT + '\\', '').replace(ROOT + '/', '')}: ` +
    `${Object.keys(STATIC_ROUTE_OF_KEY).length} static + ${villaCount} villas + ${destCount} destinations ` +
    `= ${Object.keys(meta).length} routes × ${LANGS.length} locales`
);
// Drift check against routes.json, the authoritative list of prerendered detail
// routes — not a hardcoded count (the old `expected 9 villas` went stale the
// moment the collection changed). Both directions matter: a route whose slug we
// failed to parse ships EN-fallback meta; a parsed entity without a route never
// gets prerendered at all.
const routesJson = JSON.parse(readFileSync(join(ROOT, 'scripts', 'routes.json'), 'utf-8'));
const routeSlugs = (prefix) =>
  routesJson.map((r) => r.path).filter((p) => p.startsWith(`/${prefix}/`)).map((p) => p.slice(prefix.length + 2));
for (const [label, prefix, parsed] of [
  ['villa', 'villas', villaBase],
  ['destination', 'destinations', destBase],
]) {
  const expected = routeSlugs(prefix);
  for (const slug of expected) {
    if (!parsed[slug]) console.warn(`[gen-meta] WARN: routes.json lists /${prefix}/${slug} but no ${label} parsed from src/lib — route will prerender with EN fallback meta`);
  }
  for (const slug of Object.keys(parsed)) {
    if (!expected.includes(slug)) console.warn(`[gen-meta] WARN: ${label} '${slug}' parsed from src/lib has no /${prefix}/ route in routes.json — page will not be prerendered`);
  }
}
