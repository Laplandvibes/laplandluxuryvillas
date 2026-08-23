// All affiliate CTAs route through go.laplandvibes.com — never raw partner URLs.
// Worker resolves per-site CJ Website ID from the Referer header.
// Spec: "LaplandVibes Affiliate System — Developer Handoff" (2026-04-25).
//
// LaplandLuxuryVillas tilt: every lodging search defaults to the city/region
// where the *premium* inventory concentrates. SIDs are snake_case with no
// domain prefix (Worker injects the domain from Referer for CJ attribution).

import { PROPERTIES, type Property, type PropertyKey } from '../data/properties'

// The Worker injects partner_id and the `lv_<domain>_<sid>` campaign tag from
// the Referer, so neither belongs in this file any more.
const REDIRECT_BASE = 'https://go.laplandvibes.com'

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

export interface BuildAffiliateOptions {
  partner: Partner
  sid: string
  /** Hotels: TOWN query (?ss=). Activities: GYG slug. Never a hotel name. */
  destination?: string
  /**
   * Partner property ids ([LV-PROPERTY 2026-07-27] Worker contract). With
   * these the Worker deep-links to the property's own booking page instead of
   * the town list. Omit either side when that partner has no page for it — the
   * CTA then degrades via `ctaPromisesProperty()` rather than lying.
   */
  property?: { sembo?: readonly [string, string]; trip?: readonly [string, string] }
  /** Any additional query params (checkin, pickup_date, adults, etc). */
  query?: Record<string, string | number | undefined>
  /** Active site language; defaults to "en" for backwards compat. */
  lang?: Lang;
}

export function buildAffiliateUrl({
  partner,
  sid,
  destination,
  property,
  query,
  lang = "en",
}: BuildAffiliateOptions): string {
  // ─── Activities: Worker-routed, product path in the URL path ──────────
  // (The old branch built a raw getyourguide.com URL here, which took the
  // click out of D1 entirely — see the GYG_LINKS note below.)
  if (partner === "activities") {
    return gygProduct(destination ?? "", sid);
  }

  // ─── Hotels / Cars via Worker ─────────────────────────────────────────
  const params = new URLSearchParams();
  params.set("sid", sid);

  if (destination) {
    // 🔴 cars käyttää pickup_location=IATA, EI ss:ää — ss=IATA valuu EB:n
    // ?location=-tekstihakuun, jonka EB pudottaa tyhjäksi etusivuksi (3.8.2026).
    if (partner === "cars") params.set('pickup_location', destination);
    else params.set('ss', anchorHotelsSs(partner, destination));
  }

  if (partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget") {
    params.set("locale", HOTELS_LOCALE[lang]);
    // Property-level targeting. Purely additive: no ids -> the old ?ss= town
    // behaviour, which is now an honest fallback rather than a broken promise.
    if (property?.sembo) {
      params.set("sembo_hotel", property.sembo[0]);
      params.set("sembo_poly", property.sembo[1]);
    }
    if (property?.trip) {
      params.set("trip_city", property.trip[0]);
      params.set("trip_hotel", property.trip[1]);
    }
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
// ─── Lodging (Sembo for fi, Trip.com otherwise) — inventory concentrations ───
// A bare "Lapland, Finland" is not a destination on either partner and drops
// the visitor on a front page, so always pin to a real town. For Lapland-wide
// premium CTAs, Saariselkä (Kakslauttanen + Star Arctic) is the luxury anchor.
// These are TOWN searches by design: no property is named, so nothing here is
// promising a property page. Named-property CTAs live in PROPERTY_SEARCH.
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

// ─── Specific anchor properties — deep-link to the property's OWN page ───────
//
// Built from the canonical registry in `src/data/properties.ts` so a card, its
// Google rating and its booking link can never disagree about which business
// they mean. Each URL carries the partner property ids when they exist and the
// property's TOWN as `?ss=` either way.
//
// 🔴 The `sid` used to name the placement, not the property, so every card on
// the site reported as `property_card` and the click log could not tell
// Kakslauttanen from Apukka. It now carries the registry key.
//
// The prefix is `villa_` and not `property_card_` for a measured reason: the
// partners' sub-id field is 50 characters and the Worker prepends
// `laplandluxuryvillas_com_` (24 of them). `property_card_kakslauttanen`
// arrived at Trip.com as `…_property_card_kakslauttane`, silently clipped.
// `villa_` leaves room for the longest key on this site with margin.
export const PROPERTY_SEARCH = (lang: Lang = "en") => {
  const out = {} as Record<PropertyKey, string>
  for (const key of Object.keys(PROPERTIES) as PropertyKey[]) {
    // Widen off the `as const` literal union: entries that omit a partner's ids
    // otherwise have no such key at all, rather than an optional one.
    const p: Property = PROPERTIES[key]
    out[key] = buildAffiliateUrl({
      partner: 'hotels',
      sid: `villa_${toSnake(key)}`,
      destination: p.city,
      property: { sembo: p.sembo, trip: p.trip },
      lang,
    })
  }
  return out
}

/** `arcticTreeHouse` -> `arctic_tree_house`, so SIDs stay snake_case per spec. */
function toSnake(key: string): string {
  return key.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase()
}

// ─── EconomyBookings (cars) — premium pickup hubs ────────────────────────────
export const CARS = (lang: Lang = "en") => ({
  fromHelsinki: buildAffiliateUrl({ partner: 'cars', sid: 'cars_helsinki', query: { pickup_location: 'HEL' }, lang }),
  fromRovaniemi: buildAffiliateUrl({ partner: 'cars', sid: 'cars_rovaniemi', query: { pickup_location: 'RVN' }, lang }),
  fromKittila: buildAffiliateUrl({ partner: 'cars', sid: 'cars_kittila', query: { pickup_location: 'KTT' }, lang }),
  fromIvalo: buildAffiliateUrl({ partner: 'cars', sid: 'cars_ivalo', query: { pickup_location: 'IVL' }, lang }),
})

// ─── GetYourGuide — through the Worker, as a real SEARCH ─────────────────────
//
// Two things were wrong here until 2026-08-01, and they compounded.
//
// 1. THE LINKS DID NOT SEARCH. Every CTA was
//    `getyourguide.com/lapland-finland-l2652/?q=helicopter`, and GetYourGuide's
//    LOCATION pages ignore `?q=` — proven in a real browser 2026-07-31 across
//    the network. All five experience buttons therefore landed on the same bare
//    Lapland listing, whatever the card promised. `/s?q=…` is the endpoint that
//    actually searches, so that is what the Worker is asked for here.
//
// 2. THEY BYPASSED THE WORKER. The bypass was a correct workaround for
//    `bug_go_lv_worker_gyg_dropped.md` (2026-05-02, `/go/activities/<slug>`
//    302'd to the GYG homepage). That bug is fixed: probed 2026-08-01,
//    `/go/activities/rovaniemi-l385/…-t864972` now 302s to the product page
//    with partner_id and cmp intact. The bypass outlived it and cost every
//    activity click its D1 row, so this site's activity revenue was invisible
//    in the Command Center. Routing back through the Worker restores that.
//
// 🔴 A search page is the FLOOR, not the goal. Vesa 2026-07-31: when we name an
// experience, the button belongs on that operator's own product page. The named
// products for this site are curated in `shared/activities/heroes.ts` under
// "Luksus & yksityiset" and must each be opened in a real browser before they
// ship — a wrong GetYourGuide id serves a plausible page for another product in
// another country rather than a 404. Until each is verified, these cards say
// "view options" and search, which is a promise we can keep.
//
// ─── Language ────────────────────────────────────────────────────────────────
// 🔴 Vesa 2026-08-02: "jos helicopter klikkiä painaa japaniksi niin siellä on
// japanin kielellä kaikki jos vain mahdollista?" It was not — all twelve
// locales landed on the English page. This site's own per-locale GYG hosts and
// `?language=` were deleted on 2026-08-01 when these links were routed through
// the Worker, and nothing replaced them.
//
// We send the site language and the WORKER does the work, because the fix
// belongs to the whole network rather than to this file: GetYourGuide
// localises by a `<lang>-<country>/` path prefix and resolves the product from
// its `-tNNNNN` id, so the Worker can prefix any path it is given. Measured
// 2026-08-02 in a real browser — and note that `?language=xx`, which is what
// this file used to send, does nothing at all at GetYourGuide.
//
// `toLowerCase()` is the whole mapping: the Worker knows `fi`/`de`/`ja`/… and
// passes `pt-br`/`zh-cn` through by shape.
function gygLang(lang: Lang): string {
  return lang.toLowerCase()
}

function gygSearch(sid: string, q: string, lang: Lang): string {
  return `${REDIRECT_BASE}/go/activities?sid=${encodeURIComponent(sid)}&q=${encodeURIComponent(q)}&language=${gygLang(lang)}`
}

/** Product-path deep link through the Worker. Path = `<place-lNNN>/<slug-tNNN>`. */
export function gygProduct(path: string, sid: string, lang: Lang = 'en'): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '')
  return `${REDIRECT_BASE}/go/activities/${clean}?sid=${encodeURIComponent(sid)}&language=${gygLang(lang)}`
}

// ─── Lomarengas cabin showcase ───────────────────────────────────────────────
// The Worker's KV-cached parse of the Adtraction product feed (pfid 375),
// grouped by resort and refreshed daily, so a delisted cabin drops off by
// itself. Same contract laplandstays uses. Every cabin CTA routes back through
// /go/lomarengas so the click lands in D1 with its epi placement tag — the
// feed's own <link> is tracked but carries no placement.
export const CABINS_API = `${REDIRECT_BASE}/_cabins`

export function lomarengasCabinUrl(slug: string, sid: string, lang: Lang = 'en'): string {
  const dest =
    lang === 'fi'
      ? `https://www.lomarengas.fi/mokit/${slug}`
      : `https://www.lomarengas.fi/en/cottages/${slug}`
  return `${REDIRECT_BASE}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`
}

// A function of the language, like HOTEL_SEARCH and CARS: as a module-level
// const these six URLs were fixed at import time and could not carry the
// reader's language.
//
// The search TERMS stay English on purpose. They are stable identifiers into
// GetYourGuide's index, the results page renders in the requested locale
// regardless (verified: `/ja-jp/s?q=helicopter tour Lapland Finland` returns a
// Japanese UI with 500+ results), and a translated term would quietly change
// which products come back.
export const GYG_LINKS = (lang: Lang = 'en') => ({
  laplandPremium: gygSearch('experiences_premium', 'private tour Lapland Finland', lang),
  helicopter: gygSearch('experience_helicopter', 'helicopter tour Lapland Finland', lang),
  privateAurora: gygSearch('experience_private_aurora', 'private northern lights tour Lapland', lang),
  snowmobileVip: gygSearch('experience_snowmobile_vip', 'private snowmobile tour Lapland', lang),
  husky: gygSearch('experience_husky', 'private husky safari Lapland', lang),
  reindeer: gygSearch('experience_reindeer', 'private reindeer sleigh Lapland', lang),
})

export type GygLinkKey = keyof ReturnType<typeof GYG_LINKS>

/**
 * Anchor any lodging search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * geocodes to *Lapland, Indiana, USA* — a real revenue/trust bug (Vesa
 * 2026-07-08). Force ", Finland" onto every lodging query that does not
 * already name the country; leave cars/activities queries untouched.
 *
 * 🔴 This guard is for PLACES and only works on places. Appending ", Finland"
 * to a hotel NAME is actively harmful: Sembo's autosuggest answers [] for the
 * multi-part term, so the Worker gets no destination and falls back to the
 * front page. Measured 2026-08-01 — "Arctic TreeHouse Hotel" resolved, and
 * "Arctic TreeHouse Hotel, Finland" did not. Every `?ss=` this file emits is
 * therefore a town; properties are targeted by id instead.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
