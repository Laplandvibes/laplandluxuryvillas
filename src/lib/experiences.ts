// Curated private-experience collection.
//
// 🔴 PRICES — SAME RULE AS `villas.ts`. READ `src/lib/rate.ts` FIRST.
// -------------------------------------------------------------------
// `fromPerPerson` / `fromPerGroup` are `VerifiedRate`s: amount + currency +
// the official URL it was read from + the date it was read. A bare number does
// not compile.
//
// Until 2026-07-26 all seven entries below carried invented per-person and
// per-group figures written in the launch commit (880fbf1) with no source,
// under a header that already said "never invent a price". They are gone.
// Nothing here sets a rate today.
//
// These are GetYourGuide-linked or enquiry-only products whose price
// depends on group size, season and availability, so the affiliate landing
// page is the only place a live figure legitimately exists. Unset renders the
// "on request" branch, already translated into all 12 locales; let the partner
// page quote the price.
import { GYG_LINKS, type GygLinkKey } from './affiliate'
import type { Lang } from './affiliate'
import type { VerifiedRate } from './rate'
import { overlayExperience } from './villaI18n'

export interface Experience {
  slug: string
  name: string
  category: 'aurora' | 'wilderness' | 'culinary' | 'arrival'
  /** One sentence — the actual experience, not the marketing version. */
  hook: string
  /** Two short paragraphs for the experience page or modal. */
  copy: [string, string]
  /** Where this is normally available (geographic / property constraint). */
  available: string
  /**
   * Verified published per-person rate. Unset = the "on request" branch.
   * 🔴 Never a hand-written estimate. See `src/lib/rate.ts`.
   */
  fromPerPerson?: VerifiedRate
  /** Verified published per-group rate. Same rule as `fromPerPerson`. */
  fromPerGroup?: VerifiedRate
  /** Enquiry-only = no public booking widget; goes straight to private@laplandvibes.com. */
  inquiryOnly?: boolean
  /**
   * Which curated GetYourGuide search this experience books through. Stored as
   * a KEY, not a URL: the URL carries the reader's language and so cannot be
   * fixed at module load (Vesa 2026-08-02 — every locale was landing on the
   * English page). The accessors below resolve it per language.
   */
  bookingKey?: GygLinkKey
  /** Resolved from `bookingKey` by the accessors. Never set by hand. */
  bookingUrl?: string
  imageGradient: string
}

// 🔴🔴 NO HELICOPTER CARDS (Vesa 2026-09-20: *"ei meillä ole sopimusta
// helikopterilentäjien kanssa joten miksi mainostetaan tuota?"*). Two cards
// described a 45-minute night aurora flight and an airport-to-villa lift on a
// named aircraft type. We have no operator agreement for either, and
// GetYourGuide sells no helicopter flight in Lapland at all — its whole "air
// and helicopter tours" category for Lapland returns one result, a road tour
// (measured in a browser 20.9.2026). A service we can neither sell nor deliver
// is not a card, whatever the button says. Removed rather than reworded.
export const EXPERIENCES: Experience[] = [
  {
    slug: 'private-aurora-photography-night',
    name: 'Private Aurora Photography Night',
    category: 'aurora',
    hook: 'A single guide, your group, and a heated photography vehicle that follows the forecast wherever it points.',
    copy: [
      'A six-hour private aurora chase with a certified Finnish nature photography guide. The vehicle is heated and stocked; tripods, cable releases and arctic-rated cameras are loaned if you don\'t bring your own. The route is decided that afternoon based on the Kp index and the cloud-cover forecast.',
      'Hot food and reindeer-fur ground covers come standard. Coaching covers exposure for the aurora itself, foreground composition, and post-processing for the same evening.',
    ],
    available: 'Inari, Saariselkä, Levi, Rovaniemi, Sep–Apr',
    bookingKey: 'privateAurora',
    imageGradient: 'linear-gradient(135deg, #0A1A2E 0%, #14304A 50%, #061020 100%)',
  },
  {
    slug: 'private-chef-arctic-tasting',
    name: 'In-Villa Private Chef Tasting',
    category: 'culinary',
    hook: 'A nine-course Finnish-Sámi tasting menu cooked in your villa kitchen by a working Lapland chef.',
    copy: [
      'A working chef from one of Lapland\'s serious kitchens comes to your villa for an evening. The menu is built around what\'s actually in season that week: cold-water arctic char, cloudberry, smoked reindeer, fresh forest mushrooms, sea-buckthorn, juniper.',
      'Includes a wine pairing curated to the menu, ingredients, prep, service and clean-up. Ten guests maximum. Vegetarian, gluten-free and shellfish-free menus on request, with at least 72 hours\' notice.',
    ],
    available: 'Any villa in the collection, year-round',
    inquiryOnly: true,
    imageGradient: 'linear-gradient(135deg, #1F1813 0%, #2E2218 50%, #14100B 100%)',
  },
  {
    slug: 'private-husky-safari',
    name: 'Private Husky Safari',
    category: 'wilderness',
    hook: 'Your own sled team, your own kennel guide, into the boreal forest at first light.',
    copy: [
      'A private team of sixteen sled dogs and one kennel guide. The route runs into the working trail network of a serious sled-dog kennel, typically 35 km, with a fire-side break for hot lingonberry juice and grilled sausage at the halfway point.',
      'You drive your own sled (a 20-minute briefing first). Wool overalls, mittens, and arctic boots are provided. Group of two to six, no shared groups, never combined with strangers.',
    ],
    available: 'Rovaniemi, Levi, Saariselkä, Dec–Apr',
    // 🔴 Measured 2026-09-20: GetYourGuide's Lapland husky products are SHARED
    // departures — "Levi: 7 km self-drive" (199 €), "Saariselkä: 10 km safari
    // and kennel visit" (249 €). This card promises a private team of sixteen
    // dogs, one kennel guide, 35 km, "never combined with strangers". Nothing
    // on the platform matches that, so the button is an inquiry, not a search.
    inquiryOnly: true,
    imageGradient: 'linear-gradient(135deg, #1A2515 0%, #243321 50%, #0F1810 100%)',
  },
  {
    slug: 'private-snowmobile-wilderness',
    name: 'Private Snowmobile Wilderness Crossing',
    category: 'wilderness',
    hook: 'A guided 80-km snowmobile route through frozen lakes and untouched forest, with a wood-fired lunch.',
    copy: [
      'A full-day guided snowmobile route on the upper-fell trails, the network the local guides use, not the tourist loop. Lunch is cooked over a fire on the trail by the guide: reindeer stew, fire-baked bread, hot juice.',
      'BRP machines, helmets, balaclavas and wool overalls included. Two-person sleds available. A driving licence is required for the driver; the passenger seat needs none. Maximum four sleds per group.',
    ],
    available: 'Saariselkä, Inari, Levi, Dec–Apr',
    bookingKey: 'snowmobileVip',
    imageGradient: 'linear-gradient(135deg, #1A1F2A 0%, #232A3A 50%, #0F121A 100%)',
  },
  {
    slug: 'private-reindeer-sami-evening',
    name: 'Private Reindeer & Sámi Evening',
    category: 'wilderness',
    hook: 'Reindeer sleighing on a working farm, then an evening in a private kota with a Sámi host.',
    copy: [
      'Two hours of reindeer sledding on a working herding farm followed by a private evening in a heated kota (open-fire teepee). The host is a Sámi reindeer herder who runs the farm, and the conversation, not a script, is the experience.',
      'Dinner is sautéed reindeer with mashed potatoes and lingonberry, prepared on the open fire. Stories about the herd, the migration year, the joik singing tradition. Maximum twelve guests.',
    ],
    available: 'Inari, Saariselkä, year-round (sledding Dec–Mar)',
    // 🔴 Measured 2026-09-20: the platform's reindeer products are farm visits
    // and combination packages ("Levi: three-in-one", "Rovaniemi: reindeer
    // experience and sleigh ride"). This card promises two hours on a working
    // herding farm and a private kota evening with the Sámi herder who runs it.
    // Not the same product, so it may not be sold as one.
    inquiryOnly: true,
    imageGradient: 'linear-gradient(135deg, #2A1B12 0%, #3A2818 50%, #1A100A 100%)',
  },
  {
    slug: 'private-jet-arrival',
    name: 'Private Jet Arrival',
    category: 'arrival',
    hook: 'Direct private-jet transfer to Ivalo, Kittilä or Rovaniemi, no commercial check-in, no transit hub.',
    copy: [
      'Coordinated through our jet partners in Helsinki, Geneva and Doha. Direct flights into Ivalo (closest to Saariselkä / Inari villas), Kittilä (closest to Levi / Ylläs), or Rovaniemi (best for Arctic TreeHouse).',
      'Full handling: ground transfer to your villa with a heated arctic-spec vehicle, luggage forwarded, customs cleared without queue. The operator files the slot and pairs the arrival with the villa check-in time.',
    ],
    available: 'All destinations, year-round',
    inquiryOnly: true,
    imageGradient: 'linear-gradient(135deg, #1A1F2A 0%, #283246 50%, #0F141C 100%)',
  },
]

/**
 * Resolve `bookingKey` into a booking URL in the reader's language. Both
 * accessors go through here so no page can accidentally serve an English
 * GetYourGuide link to a Japanese reader.
 */
const withBooking = (e: Experience, lang: Lang): Experience =>
  e.bookingKey ? { ...e, bookingUrl: GYG_LINKS(lang)[e.bookingKey] } : e

export const experiencesByCategory = (cat: Experience['category'], lang: Lang = 'en') =>
  EXPERIENCES.filter((e) => e.category === cat).map((e) => withBooking(overlayExperience(e, lang), lang))

export const experienceBySlug = (slug: string, lang: Lang = 'en') => {
  const e = EXPERIENCES.find((x) => x.slug === slug)
  return e ? withBooking(overlayExperience(e, lang), lang) : undefined
}
