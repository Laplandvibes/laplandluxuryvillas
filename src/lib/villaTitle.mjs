/**
 * Localized villa page <title>.
 *
 * [LV-DUP 2026-09-06] Every /villas/<slug> page carried the same title in all
 * 12 locales ("Apukka Resort Aurora Cabin: Rovaniemi | LaplandLuxuryVillas") —
 * two proper nouns and a brand, nothing that translates. OpenSEO counted 96
 * duplicate titles on this site from that alone. The descriptor after the
 * destination is the localizable part.
 *
 * 🔴🔴 [LV-BRAND-TITLE 2026-09-20] THE HOTEL'S OWN NAME LEADS THE TITLE.
 * Measured demand across all twelve markets that day (OpenSEO, ~200 keywords):
 * this site's own positioning is not a search at all — "luxury lapland villa"
 * returns no data, "luksusmajoitus lappi" 10/mo, "lyxhotell lappland" 0 — while
 * the PROPERTY NAMES carry hundreds to thousands of searches a month:
 *   apukka resort 2 400 (en, fi) · arctic treehouse hotel 2 900 (fi), 1 900 (en)
 *   kakslauttanen 2 400 (fi), 1 300 (en) · lapland hotels saaga 1 900 (fi)
 *   star arctic hotel 880 (fi) · levin iglut 590 · aurora village ivalo 480
 *   wilderness hotel nellim 390 (fi)
 * Seven of the eight pages did not carry the hotel's registered name at all:
 * the title said "Apukka Aurora Wagon" while the search is "Apukka Resort",
 * and "Saaga Holiday Apartment" while the search is "Lapland Hotels Saaga".
 * The tail that was there instead ("– luksusmajoitus") is a phrase with ten
 * searches a month.
 *
 * 🔴 Tone matters as much as the keyword (Vesa: *"optimoi kahdeksan
 * huvilasivua, mutta hyvällä maulla"*). So: no repetition, no stuffing, no
 * second brand. The title is simply the hotel, a colon, and the room type —
 * "Kakslauttanen Arctic Resort: Kelo-Glass Suite" — which is what the page is
 * about and how the property itself would write it. The words the room name
 * shares with the hotel name are dropped so nothing appears twice.
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

/**
 * The room type on its own: the villa name with every word it shares with the
 * hotel name removed. "Kakslauttanen Kelo-Glass Suite" + "Kakslauttanen Arctic
 * Resort" -> "Kelo-Glass Suite"; "Saaga Holiday Apartment" + "Lapland Hotels
 * Saaga" -> "Holiday Apartment". Falls back to the full villa name when the
 * two share nothing, and never returns an empty string.
 */
export function roomType(villaName, hotelName) {
  if (!hotelName) return villaName;
  const hotelWords = new Set(hotelName.toLowerCase().split(/\s+/));
  const kept = villaName.split(/\s+/).filter((w) => !hotelWords.has(w.toLowerCase()));
  return kept.length ? kept.join(' ') : villaName;
}

/**
 * "Kakslauttanen Arctic Resort: Kelo-Glass Suite" — the hotel's registered name
 * first, because that is the search (see LV-BRAND-TITLE above), then the room.
 * With no hotel row (a villa naming no real business) it is the villa name and
 * the localized descriptor, exactly as before.
 */
export function villaBrandTitle(villaName, hotelName, destination, lang) {
  if (!hotelName) return villaTitleBase(villaName, destination, lang);
  const room = roomType(villaName, hotelName);
  const full = `${hotelName}: ${room}`;
  if (full.length <= 60) return full;
  return hotelName.length <= 60 ? hotelName : villaName;
}
