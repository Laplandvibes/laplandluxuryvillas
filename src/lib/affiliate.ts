// All affiliate CTAs route through go.laplandvibes.com — never raw partner URLs.
// Worker resolves per-site CJ Website ID from the Referer header.
// Spec: "LaplandVibes Affiliate System — Developer Handoff" (2026-04-25).
//
// LaplandLuxuryVillas tilt: every Hotels.com search defaults to the city/region
// where the *premium* inventory concentrates. SIDs are snake_case with no
// domain prefix (Worker injects the domain from Referer for CJ attribution).

const REDIRECT_BASE = 'https://go.laplandvibes.com'

export type Partner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities'

export interface BuildAffiliateOptions {
  partner: Partner
  sid: string
  /** Hotels: property/city query (?ss=). Activities: GYG slug. */
  destination?: string
  /** Any additional query params (checkin, pickup_date, adults, etc). */
  query?: Record<string, string | number | undefined>
}

export function buildAffiliateUrl({
  partner,
  sid,
  destination,
  query,
}: BuildAffiliateOptions): string {
  const params = new URLSearchParams()
  params.set('sid', sid)

  if (destination && partner !== 'activities') {
    params.set('ss', destination)
  }

  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null && v !== '') {
        params.set(k, String(v))
      }
    }
  }

  let pathname = `/go/${partner}`
  if (partner === 'activities' && destination) {
    pathname = `/go/activities/${destination}`
  }

  return `${REDIRECT_BASE}${pathname}?${params.toString()}`
}

// ─── Hotels.com — luxury inventory concentrations ────────────────────────────
// "Lapland, Finland" alone is NOT a Hotels.com destination — falls back to
// Helsinki for FI users. Always pin to a real city. For Lapland-wide premium
// CTAs, Saariselkä (Kakslauttanen + Star Arctic + Aurora Village hub) is the
// luxury-inventory anchor.
export const HOTEL_SEARCH = {
  // Generic landings — pinned to Saariselkä for luxury concentration.
  collection: buildAffiliateUrl({
    partner: 'hotels',
    sid: 'hero_browse_collection',
    destination: 'Saariselkä, Finland',
  }),
  navInquire: buildAffiliateUrl({
    partner: 'hotels',
    sid: 'nav_view_collection',
    destination: 'Saariselkä, Finland',
  }),

  // Per-destination
  levi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_levi', destination: 'Levi, Finland' }),
  yllas: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_yllas', destination: 'Ylläs, Finland' }),
  saariselka: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_saariselka', destination: 'Saariselkä, Finland' }),
  inari: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_inari', destination: 'Inari, Finland' }),
  rovaniemi: buildAffiliateUrl({ partner: 'hotels', sid: 'destination_rovaniemi', destination: 'Rovaniemi, Finland' }),

  // Property categories — landing on the city where the category is concentrated
  glassRoofVilla: buildAffiliateUrl({ partner: 'hotels', sid: 'category_glass_roof_villa', destination: 'Saariselkä, Finland' }),
  privateLogEstate: buildAffiliateUrl({ partner: 'hotels', sid: 'category_private_log_estate', destination: 'Inari, Finland' }),
  designerSuite: buildAffiliateUrl({ partner: 'hotels', sid: 'category_designer_suite', destination: 'Rovaniemi, Finland' }),
  alpineChalet: buildAffiliateUrl({ partner: 'hotels', sid: 'category_alpine_chalet', destination: 'Levi, Finland' }),
  lakesideRetreat: buildAffiliateUrl({ partner: 'hotels', sid: 'category_lakeside_retreat', destination: 'Inari, Finland' }),
}

// ─── Specific anchor properties — deep-link via ?ss=PROPERTY_NAME ────────────
// Anchor only properties that actually exist on Hotels.com and meet the bar.
// "Bar": private bath, premium materials, ≥4★ guest rating, listed at ≥€350/n.
export const PROPERTY_SEARCH = {
  kakslauttanen: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Kakslauttanen Arctic Resort' }),
  starArctic: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Star Arctic Hotel' }),
  arcticTreeHouse: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic TreeHouse Hotel' }),
  auroraVillage: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Aurora Village Ivalo' }),
  levinIglut: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Levin Iglut' }),
  nellim: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Nellim' }),
  muotka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Wilderness Hotel Muotka' }),
  apukka: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Apukka Resort Rovaniemi' }),
  arcticSnowHotel: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Arctic Snow Hotel' }),
  octola: buildAffiliateUrl({ partner: 'hotels', sid: 'property_card', destination: 'Octola Private Wilderness' }),
}

// ─── EconomyBookings (cars) — premium pickup hubs ────────────────────────────
export const CARS = {
  fromHelsinki: buildAffiliateUrl({ partner: 'cars', sid: 'cars_helsinki', query: { pickup_location: 'HEL' } }),
  fromRovaniemi: buildAffiliateUrl({ partner: 'cars', sid: 'cars_rovaniemi', query: { pickup_location: 'RVN' } }),
  fromKittila: buildAffiliateUrl({ partner: 'cars', sid: 'cars_kittila', query: { pickup_location: 'KTT' } }),
  fromIvalo: buildAffiliateUrl({ partner: 'cars', sid: 'cars_ivalo', query: { pickup_location: 'IVL' } }),
}

// ─── GetYourGuide — DIRECT deep-link (bypass go.lv Worker) ──────────────────
// `bug_go_lv_worker_gyg_dropped.md` 2026-05-02: every `/go/activities/<slug>`
// 302s to GYG homepage. Until the Worker is fixed, link straight to GYG with
// our partner_id + cmp campaign tag preserved for attribution.
const GYG_PARTNER_ID = 'VRMKD7N'

export function gygSearchLink(slug: string, sid: string): string {
  const params = new URLSearchParams({
    partner_id: GYG_PARTNER_ID,
    cmp: `lv_laplandluxuryvillas_${sid}`,
  })
  return `https://www.getyourguide.com/${slug}?${params.toString()}`
}

export const GYG_LINKS = {
  laplandPremium: gygSearchLink('lapland-l662/private-tours-tc55', 'experiences_premium'),
  helicopter: gygSearchLink('lapland-l662/helicopter-tours-tc34', 'experience_helicopter'),
  privateAurora: gygSearchLink('lapland-l662/aurora-borealis-trips-tc101', 'experience_private_aurora'),
  snowmobileVip: gygSearchLink('lapland-l662/snowmobile-tours-tc223', 'experience_snowmobile_vip'),
  husky: gygSearchLink('lapland-l662/husky-sledding-tours-tc224', 'experience_husky'),
  reindeer: gygSearchLink('lapland-l662/reindeer-sledding-tc222', 'experience_reindeer'),
}
