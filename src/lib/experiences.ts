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
// 🔴🔴 TYHJA 21.9.2026, ja se on tarkoitus.
//
// Tassa oli kuusi kasin kirjoitettua "elamysta", joissa oli tarkkoja
// tuotetietoja: kuudentoista vetokoiran valjakko, 35 km:n reitti, yhdeksan
// ruokalajin menu, 80 km:n kelkkareitti, konetyyppi nimelta. Yksikaan ei
// ollut varattava tuote: nelja oli inquiryOnly eli nappi vei sahkopostiin,
// kaksi vei GetYourGuiden HAKUUN. Tiedot olivat siis keksittyja, ja
// viidella kuudesta oli tekoalykuva. Vesa 21.9.2026: "onhan namakin tekstit
// ihan puuta heinaa, eika aitoa kirjoittamista?"
//
// Elamyssivu rendataan nyt shared/gyg/luxury.ts:n viidestatoista OIKEASTA
// tuotteesta, joilla on varmistettu tuotesivu, hinta ja jarjestajan oma
// valokuva. Tyyppi ja hakijat jaavat talle, jos joskus tulee oikeita
// omia tuotteita: silloin jokaisella on oltava varattava sivu.
export const EXPERIENCES: Experience[] = [
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
