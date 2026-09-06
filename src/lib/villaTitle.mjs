/**
 * Localized villa page <title>.
 *
 * [LV-DUP 2026-09-06] Every /villas/<slug> page carried the same title in all
 * 12 locales ("Apukka Resort Aurora Cabin: Rovaniemi | LaplandLuxuryVillas") —
 * two proper nouns and a brand, nothing that translates. OpenSEO counted 96
 * duplicate titles on this site from that alone. The descriptor after the
 * destination is the localizable part.
 *
 * Plain ESM (.mjs) on purpose: scripts/generate-prerender-meta.mjs runs under
 * Node 20 in CI, which cannot import .ts, and pages/VillaDetail.tsx imports the
 * same file through Vite — one source, both surfaces agree.
 */
const TAIL = {
  en: 'luxury stay',
  fi: 'luksusmajoitus',
  sv: 'lyxboende',
  de: 'Luxusunterkunft',
  fr: 'séjour de luxe',
  es: 'alojamiento de lujo',
  it: 'soggiorno di lusso',
  nl: 'luxe verblijf',
  'pt-BR': 'hospedagem de luxo',
  ja: '高級宿泊施設',
  ko: '럭셔리 숙소',
  'zh-CN': '豪华住宿',
};

/** "Apukka Resort Aurora Cabin: Rovaniemi – luksusmajoitus" (no brand suffix). */
export function villaTitleBase(name, destination, lang) {
  const tail = TAIL[lang] ?? TAIL.en;
  const full = lang === 'ja' ? `${name}：${destination}の${tail}` : lang === 'zh-CN' ? `${name}：${destination}${tail}` : `${name}: ${destination} – ${tail}`;
  if (full.length <= 60) return full;
  // "Kakslauttanen Kelo-Glass Suite: Saariselkä – hospedagem de luxo" is 63: drop the
  // destination (it is in the description and the breadcrumb), keep the localized tail.
  return lang === 'ja' || lang === 'zh-CN' ? `${name}｜${tail}` : `${name} – ${tail}`;
}

/** Full title with the brand, which is dropped when the whole line would exceed 60 chars. */
export function villaTitle(name, destination, lang, brand = 'LaplandLuxuryVillas') {
  const base = villaTitleBase(name, destination, lang);
  const full = `${base} | ${brand}`;
  return full.length <= 60 ? full : base;
}
