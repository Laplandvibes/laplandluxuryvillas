// All affiliate CTAs route through go.laplandvibes.com — never raw partner URLs.
// Worker resolves per-site CJ Website ID from the Referer header.
// Spec: "LaplandVibes Affiliate System — Developer Handoff" (2026-04-25).
//
// LaplandLuxuryVillas tilt: every Hotels.com search defaults to the city/region
// where the *premium* inventory concentrates. SIDs are snake_case with no
// domain prefix (Worker injects the domain from Referer for CJ attribution).

const REDIRECT_BASE = 'https://go.laplandvibes.com'
const SITE_ID = 'laplandluxuryvillas'
const GYG_PARTNER_ID_TOP = 'VRMKD7N'

export type Partner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities'


export type Lang = "en" | "fi" | "de" | "ja" | "es" | "pt-BR" | "zh-CN" | "ko" | "fr" | "it" | "nl" | "sv";

const HOTELS_LOCALE: Record<Lang, string> = {
  en: "en_US",
  fi: "fi_FI",
  de: "de_DE",
  ja: "ja_JP",
  es: "es_ES",
  "pt-BR": "pt_BR",
  "zh-CN": "zh_CN",
  ko: "ko_KR",
  fr: "fr_FR",
  it: "it_IT",
  nl: "nl_NL",
  sv: "sv_SE",
};

const CARS_LANG: Record<Lang, string> = {
  en: "en",
  fi: "fi",
  de: "de",
  ja: "ja",
  es: "es",
  "pt-BR": "pt",
  "zh-CN": "zh",
  ko: "ko",
  fr: "fr",
  it: "it",
  nl: "nl",
  sv: "sv",
};

const GYG_DOMAIN: Record<Lang, string> = {
  en: "https://www.getyourguide.com",
  fi: "https://www.getyourguide.com",
  de: "https://www.getyourguide.de",
  ja: "https://www.getyourguide.com",
  es: "https://www.getyourguide.es",
  "pt-BR": "https://www.getyourguide.com.br",
  "zh-CN": "https://www.getyourguide.com",
  ko: "https://www.getyourguide.com",
  fr: "https://www.getyourguide.fr",
  it: "https://www.getyourguide.it",
  nl: "https://www.getyourguide.nl",
  sv: "https://www.getyourguide.com",
};

const GYG_LANGUAGE: Partial<Record<Lang, string>> = {
  fi: "fi", ja: "ja", es: "es", "pt-BR": "pt-br", "zh-CN": "zh",
  ko: "ko", fr: "fr", it: "it", nl: "nl", sv: "sv",
};

export interface BuildAffiliateOptions {
  partner: Partner
  sid: string
  /** Hotels: property/city query (?ss=). Activities: GYG slug. */
  destination?: string
  /** Any additional query params (checkin, pickup_date, adults, etc). */
  query?: Record<string, string | number | undefined>
  /** Active site language; defaults to "en" for backwards compat. */
  lang?: Lang;
}

export function buildAffiliateUrl({
  partner,
  sid,
  destination,
  query,
  lang = "en",
}: BuildAffiliateOptions): string {
  // ─── GYG direct deep-link (Worker-bypass) ─────────────────────────────
  if (partner === "activities") {
    const base = GYG_DOMAIN[lang];
    const path = (destination ?? "").replace(/^\/+/, "").replace(/\/+$/, "");
    const url = new URL(path ? `${base}/${path}/` : `${base}/`);
    url.searchParams.set("partner_id", GYG_PARTNER_ID_TOP);
    url.searchParams.set("cmp", `lv_${SITE_ID}_${sid}`);
    const gygLang = GYG_LANGUAGE[lang];
    if (gygLang) url.searchParams.set("language", gygLang);
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null && v !== "") {
          url.searchParams.set(k, String(v));
        }
      }
    }
    return url.toString();
  }

  // ─── Hotels / Cars via Worker ─────────────────────────────────────────
  const params = new URLSearchParams();
  params.set("sid", sid);

  if (destination) {
    params.set('ss', anchorHotelsSs(partner, destination));
  }

  if (partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget") {
    params.set("locale", HOTELS_LOCALE[lang]);
  } else if (partner === "cars") {
    params.set("lang", CARS_LANG[lang]);
  }

  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null && v !== "") {
        params.set(k, String(v));
      }
    }
  }

  return `${REDIRECT_BASE}/go/${partner}?${params.toString()}`;
}
// ─── Hotels.com — luxury inventory concentrations ────────────────────────────
// "Lapland, Finland" alone is NOT a Hotels.com destination — falls back to
// Helsinki for FI users. Always pin to a real city. For Lapland-wide premium
// CTAs, Saariselkä (Kakslauttanen + Star Arctic + Aurora Village hub) is the
// luxury-inventory anchor.
export const HOTEL_SEARCH = (lang: Lang = "en") => ({
  // Generic landings — pinned to Saariselkä for luxury concentration.
  collection: buildAffiliateUrl({
    partner: 'hotels',
    sid: 'hero_browse_collection',
    destination: 'Saariselkä, Finland', lang }),
  navInquire: buildAffiliateUrl({
    partner: 'hotels',
    sid: 'nav_view_collection',
    destination: 'Saariselkä, Finland', lang }),

  // Per-destination
  levi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_levi', destination: 'Levi, Finland', lang }),
  yllas: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_yllas', destination: 'Ylläs, Finland', lang }),
  saariselka: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_saariselka', destination: 'Saariselkä, Finland', lang }),
  inari: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_inari', destination: 'Inari, Finland', lang }),
  rovaniemi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_rovaniemi', destination: 'Rovaniemi, Finland', lang }),

  // Property categories — landing on the city where the category is concentrated
  glassRoofVilla: buildAffiliateUrl({ partner: 'hotels', sid: 'category_glass_roof_villa', destination: 'Saariselkä, Finland', lang }),
  privateLogEstate: buildAffiliateUrl({ partner: 'hotels', sid: 'category_private_log_estate', destination: 'Inari, Finland', lang }),
  designerSuite: buildAffiliateUrl({ partner: 'hotels', sid: 'category_designer_suite', destination: 'Rovaniemi, Finland', lang }),
  alpineChalet: buildAffiliateUrl({ partner: 'hotels', sid: 'category_alpine_chalet', destination: 'Levi, Finland', lang }),
  lakesideRetreat: buildAffiliateUrl({ partner: 'hotels', sid: 'category_lakeside_retreat', destination: 'Inari, Finland', lang }),
})

// ─── Specific anchor properties — deep-link via ?ss=PROPERTY_NAME ────────────
// Anchor only properties that actually exist on Hotels.com and meet the bar.
// "Bar": private bath, premium materials, ≥4★ guest rating, listed at ≥€350/n.
export const PROPERTY_SEARCH = (lang: Lang = "en") => ({
  kakslauttanen: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Kakslauttanen Arctic Resort', lang }),
  starArctic: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Star Arctic Hotel', lang }),
  arcticTreeHouse: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic TreeHouse Hotel', lang }),
  auroraVillage: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Aurora Village Ivalo', lang }),
  levinIglut: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Levin Iglut', lang }),
  nellim: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Nellim', lang }),
  muotka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Muotka', lang }),
  apukka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Apukka Resort Rovaniemi', lang }),
  arcticSnowHotel: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic Snow Hotel', lang }),
})

// ─── EconomyBookings (cars) — premium pickup hubs ────────────────────────────
export const CARS = (lang: Lang = "en") => ({
  fromHelsinki: buildAffiliateUrl({ partner: 'cars', sid: 'cars_helsinki', query: { pickup_location: 'HEL' }, lang }),
  fromRovaniemi: buildAffiliateUrl({ partner: 'cars', sid: 'cars_rovaniemi', query: { pickup_location: 'RVN' }, lang }),
  fromKittila: buildAffiliateUrl({ partner: 'cars', sid: 'cars_kittila', query: { pickup_location: 'KTT' }, lang }),
  fromIvalo: buildAffiliateUrl({ partner: 'cars', sid: 'cars_ivalo', query: { pickup_location: 'IVL' }, lang }),
})

// ─── GetYourGuide — DIRECT deep-link (bypass go.lv Worker) ──────────────────
// `bug_go_lv_worker_gyg_dropped.md` 2026-05-02: every `/go/activities/<slug>`
// 302s to GYG homepage. Until the Worker is fixed, link straight to GYG with
// our partner_id + cmp campaign tag preserved for attribution.
const GYG_PARTNER_ID = 'VRMKD7N'

export function gygSearchLink(slug: string, sid: string, q?: string): string {
  const params = new URLSearchParams({
    partner_id: GYG_PARTNER_ID,
    cmp: `lv_laplandluxuryvillas_${sid}`,
  })
  if (q) params.set('q', q)
  return `https://www.getyourguide.com/${slug}?${params.toString()}`
}

export const GYG_LINKS = {
  laplandPremium: gygSearchLink('lapland-finland-l2652/', 'experiences_premium', 'private tour'),
  helicopter: gygSearchLink('lapland-finland-l2652/', 'experience_helicopter', 'helicopter'),
  privateAurora: gygSearchLink('lapland-finland-l2652/', 'experience_private_aurora', 'private northern lights tour'),
  snowmobileVip: gygSearchLink('lapland-finland-l2652/', 'experience_snowmobile_vip', 'snowmobile'),
  husky: gygSearchLink('lapland-finland-l2652/', 'experience_husky', 'husky safari'),
  reindeer: gygSearchLink('lapland-finland-l2652/', 'experience_reindeer', 'reindeer sleigh'),
}

/**
 * Anchor any hotels search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * makes Hotels.com geocode to *Lapland, Indiana, USA* — a real revenue/trust
 * bug (Vesa 2026-07-08). Force ", Finland" onto every hotels query that does
 * not already name the country; leave cars/activities queries untouched.
 * Callers cannot re-introduce the bug.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
