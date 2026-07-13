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
//      is built at RUNTIME from per-locale data (lib/villas.ts + lib/destinations.ts
//      base, overlaid by lib/content.<lang>.ts). We replicate the runtime contract:
//        villa:  title = `${name} — ${destination} | LaplandLuxuryVillas`   (proper nouns)
//                desc  = villa.tagline                              (localized, EN fallback)
//        dest:   title = `${name} — <localized suffix>`            (suffix from seo-meta.json)
//                desc  = `${position} ${auroraNote}`               (localized, EN fallback)
//
// Contact + legal pages are handled in routes.json (copyKey / fallbackTitle), so
// they are intentionally NOT emitted here.
//
// Idempotent. Run from the site root after/with vite build:
//   node scripts/generate-prerender-meta.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const LIB = join(ROOT, 'src', 'lib');
const LOCALES = join(ROOT, 'src', 'locales');
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

// ---- base data: scope each object by its leading `slug:` ----
function parseBase(file, fields) {
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
    // Require the discriminating field to consider it a real entity (skip nested objs).
    if (rec[fields[0]] && !out[slug]) out[slug] = rec;
  }
  return out;
}

// ---- overlay: content.<lang>.ts → { villas:{slug:{tagline}}, destinations:{slug:{position,auroraNote}} } ----
function parseOverlay(file, section, fields) {
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
    if (!out[slug]) out[slug] = rec;
  }
  return out;
}

function trimDesc(s, max = 160) {
  const t = String(s).replace(/\s+/g, ' ').trim();
  if ([...t].length <= max) return t;
  const chars = [...t];
  let cut = chars.slice(0, max - 2).join('');
  const sp = cut.lastIndexOf(' ');
  if (sp > max * 0.6) cut = cut.slice(0, sp);
  return cut.replace(/[\s,;:–—-]+$/, '') + '…';
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
  concierge: '/concierge',
  about: '/about',
};
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
const villaBase = parseBase('villas.ts', ['name', 'destination', 'tagline']); // slug → {name,destination,tagline(EN)}
const villaOverlays = {};
for (const [lang, file] of Object.entries(CONTENT_FILE)) {
  villaOverlays[lang] = parseOverlay(file, 'villas', ['tagline']);
}
for (const [slug, b] of Object.entries(villaBase)) {
  const path = `/villas/${slug}`;
  meta[path] = {};
  const title = `${b.name} — ${b.destination} | ${SITE_NAME}`; // proper nouns; brand already present
  for (const lang of LANGS) {
    const ovTag = lang === 'en' ? null : villaOverlays[lang]?.[slug]?.tagline;
    const description = trimDesc(ovTag || b.tagline);
    meta[path][lang] = { title, description };
  }
}

// ---- dynamic: destinations ----
const destBase = parseBase('destinations.ts', ['name', 'position', 'auroraNote']);
const destOverlays = {};
for (const [lang, file] of Object.entries(CONTENT_FILE)) {
  destOverlays[lang] = parseOverlay(file, 'destinations', ['position', 'auroraNote']);
}
for (const [slug, b] of Object.entries(destBase)) {
  const path = `/destinations/${slug}`;
  meta[path] = {};
  for (const lang of LANGS) {
    const ov = lang === 'en' ? null : destOverlays[lang]?.[slug];
    const position = (ov && ov.position) || b.position;
    const auroraNote = (ov && ov.auroraNote) || b.auroraNote;
    const suffix = destSuffix[lang] || destSuffix.en || 'Lapland — Private Villas, Suites & Aurora';
    const title = `${b.name} — ${suffix}`;
    const description = trimDesc(`${position} ${auroraNote}`);
    meta[path][lang] = { title, description };
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
if (villaCount !== 9) console.warn(`[gen-meta] WARN: expected 9 villas, parsed ${villaCount}`);
if (destCount !== 5) console.warn(`[gen-meta] WARN: expected 5 destinations, parsed ${destCount}`);
