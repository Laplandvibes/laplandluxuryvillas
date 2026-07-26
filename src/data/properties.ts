import mapsData from './generated/villas-from-maps.json'
import type { Lang } from '../i18n/useLang'

/**
 * Canonical property registry — the join table between the villa/suite
 * collection in `src/lib/villas.ts` and REAL Google review data pulled by
 * `node scripts/sync-villas.mjs`.
 *
 * Why this file exists (2026-07-26)
 * --------------------------------
 * Nine named entries get large free editorial surfaces here — a full-bleed
 * hero and an H1 on `/villas/:slug`, the home signature grid, `/villas`,
 * `/suites`, the destination pages. That was free advertising, and the
 * editorial framing around it ("the collection", "signature") read as a
 * recommendation with nothing behind it. Two changes fixed that, and this
 * registry is what makes the second one possible:
 *
 *   A. The head of each of those surfaces is now a SELLABLE
 *      "Esittelykumppani" slot (`src/data/adSlots.ts`,
 *      `src/components/FeaturedPartnerSlot.tsx`).
 *   B. The editorial pick mark is DERIVED from real, public Google review data
 *      instead of editorial whim — see `bestGoogleRated` below.
 *
 * 🔴 THE SCOPE PROBLEM THIS SITE HAS AND ITS SIBLINGS DO NOT
 * ----------------------------------------------------------
 * The entries in `villas.ts` are ROOM TYPES, not businesses: "Kakslauttanen
 * Kelo-Glass Suite", "Nellim Aurora Bubble", "Apukka Aurora Wagon". Google
 * rates the PROPERTY that contains the room, so printing "Google 4.1 · 1 415
 * reviews" under a card headed "Kakslauttanen Kelo-Glass Suite" would tell the
 * reader that 1 415 people reviewed that suite. They did not.
 *
 * So every rating on this site is rendered WITH its scope stated in visible
 * copy ("The rating is for the whole property, Kakslauttanen Arctic Resort" —
 * `copy.editorial.ratingScope`). Do not drop that line to tidy up a layout,
 * and do not reuse `GoogleRatingRow` here without it.
 *
 * Two data layers
 * ---------------
 * EDITORIAL (this file + `villas.ts`, hand-maintained): the property's
 * real-world name, the affiliate search string, and which villa sits in which
 * property. Never machine-written.
 *
 * GENERATED (`src/data/generated/villas-from-maps.json`, gitted): rating,
 * review count, Place ID and verification date, produced by the sync from the
 * Places API (New). Re-running the sync can never clobber editorial work,
 * because the script writes only that one JSON file.
 *
 * The generated layer is a SNAPSHOT, not a live feed. Every surface that
 * prints a rating therefore also prints the verification date and links to
 * Google's own review list, so a reader can check both the number and its age.
 */

export type Property = {
  /**
   * The property's real-world name — the business Google has a record for, NOT
   * the suite name shown on the card. This is what the sync's name gate
   * compares Google's `displayName` against, and what the scope line prints.
   */
  name: string
  /** The affiliate search string this site already passes as `?ss=`. */
  destination: string
}

/**
 * Google review data attached to a property by the sync. Every field is
 * optional on purpose: `scripts/sync-villas.mjs` fails closed, so a property
 * whose Places match was not certain arrives here with nothing, and every
 * consumer must handle that by showing no rating rather than a guess.
 */
export type GoogleReview = {
  /** Google's star average, one decimal as Google publishes it. */
  rating?: number
  /** Number of Google reviews behind that average. */
  reviewCount?: number
  /** Places API place ID — the key to the public review list. */
  googlePlaceId?: string
  /** YYYY-MM-DD the sync last confirmed these numbers. */
  lastVerified?: string
}

/** Shape every rankable card meta satisfies. */
export type RankableProperty = { name: string } & GoogleReview

type SyncedProperty = {
  /** Google's own listing name — kept so a reviewer can audit WHAT was matched. */
  matchedName: string
  rating: number
  reviewCount: number
  googlePlaceId: string
  address: string
  location: { latitude: number; longitude: number }
  lastVerified: string
}

const SYNCED = (mapsData as { properties: Record<string, SyncedProperty> }).properties

/** Merge the generated Google layer onto the hand-written editorial layer. */
function withGoogleReviews<T extends Record<string, Property>>(
  base: T,
): { [K in keyof T]: T[K] & GoogleReview } {
  const out = {} as { [K in keyof T]: T[K] & GoogleReview }
  for (const key of Object.keys(base) as (keyof T & string)[]) {
    const g = SYNCED[key]
    out[key] = g
      ? {
          ...base[key],
          rating: g.rating,
          reviewCount: g.reviewCount,
          googlePlaceId: g.googlePlaceId,
          lastVerified: g.lastVerified,
        }
      : { ...base[key] }
  }
  return out
}

/**
 * The real, single, identifiable businesses behind this collection.
 *
 * Entries stay on ONE line each and keep the `name` / `destination` order:
 * `scripts/sync-villas.mjs` parses this block as text so the two files can
 * never drift, and it aborts rather than syncing if the parse yields nothing.
 */
export const PROPERTIES = withGoogleReviews({
  kakslauttanen: { name: "Kakslauttanen Arctic Resort", destination: "Kakslauttanen Arctic Resort" },
  arcticTreeHouse: { name: "Arctic TreeHouse Hotel", destination: "Arctic TreeHouse Hotel" },
  auroraVillage: { name: "Aurora Village Ivalo", destination: "Aurora Village Ivalo" },
  levinIglut: { name: "Levin Iglut", destination: "Levin Iglut" },
  nellim: { name: "Wilderness Hotel Nellim", destination: "Wilderness Hotel Nellim" },
  starArctic: { name: "Star Arctic Hotel", destination: "Star Arctic Hotel" },
  apukka: { name: "Apukka Resort", destination: "Apukka Resort Rovaniemi" },
})

export type PropertyKey = keyof typeof PROPERTIES

/**
 * Villa slug → the property that contains it.
 *
 * 🔴 TWO ENTRIES ARE DELIBERATELY ABSENT and must stay absent:
 *   `private-lakeside-log-estate`  ("The Lakeside Log Estate")
 *   `designer-mountain-chalet-levi` ("The Designer Mountain Chalet")
 * Neither names a real business — both are `conciergeOnly` house inventory
 * whose `bookingUrl` points at a CITY search ("Inari, Finland" / "Levi,
 * Finland"), not at a property. There is no Google record to attach, so they
 * render no rating and can never win the editorial pick. Attaching a nearby
 * property's score to them would be pure fabrication.
 *
 * A slug missing from this map simply gets no rating — fail closed by
 * construction, no gate required.
 */
const VILLA_PROPERTY: Record<string, PropertyKey> = {
  'kakslauttanen-glass-igloo-suite': 'kakslauttanen',
  'arctic-treehouse-suite': 'arcticTreeHouse',
  'aurora-village-glass-cabin': 'auroraVillage',
  'levin-iglut-golden-crown': 'levinIglut',
  'wilderness-hotel-nellim-aurora-bubble': 'nellim',
  'star-arctic-suite': 'starArctic',
  'apukka-resort-aurora-cabin': 'apukka',
}

/**
 * The property a villa card is really talking about, or `null` when the entry
 * is house inventory rather than a bookable named business.
 */
export function propertyForVilla(slug: string | undefined | null): (Property & GoogleReview) | null {
  if (!slug) return null
  const key = VILLA_PROPERTY[slug]
  return key ? PROPERTIES[key] : null
}

/**
 * Minimum review count for a property to be rankable.
 *
 * THIS SITE'S FIELD (sync 2026-07-26, n = 7): review counts run 173 … 1 415,
 * median 637. So be honest about what this constant is: **it currently
 * excludes nothing.** It is a forward guard, not a filter on today's data.
 *
 * The brief that commissioned this work expected the opposite — luxury villas
 * and wedding venues being small businesses with tens of reviews or none, so
 * that a floor of 100 would make the mark impossible. That is not what this
 * site's inventory turned out to be: every entry here is a SUITE inside an
 * established Lapland resort (Kakslauttanen, Arctic TreeHouse, Levin Iglut,
 * Apukka …), and the resorts carry hundreds to over a thousand reviews each.
 * The floor was therefore kept rather than lowered, on evidence.
 *
 * Why 100 and not 30: Google publishes its average to one decimal, so a
 * ranking is only honest when the noise in the average is smaller than what is
 * displayed. At n = 100 the standard error of a mean on Google's 1–5 scale is
 * ≈ 0.1 star, i.e. at or below Google's own display granularity; at n = 30 it
 * is ≈ 0.18. If a genuinely small private villa is ever added to the
 * collection, this floor is what stops its 5.0-from-6-reviews from outranking
 * a 4.6 from 532.
 */
export const PICK_MIN_REVIEWS = 100

/**
 * Minimum rating for a property to be rankable.
 *
 * THIS SITE'S FIELD (sync 2026-07-26, n = 7), sorted:
 *   4.1, 4.3, 4.4, 4.5, 4.5, 4.6, 4.7      (min 4.1 · median 4.5 · max 4.7)
 *
 * The field is both smaller and tighter than laplandstays' (19 properties,
 * 3.9–4.8), so the threshold was re-derived here rather than carried over.
 * 4.3 sits at the field's lower quartile once rounded to Google's own 0.1
 * display granularity, and it disqualifies exactly one entry — Kakslauttanen
 * Arctic Resort at 4.1 from 1 415 reviews, which is simultaneously the most
 * prominent property in the collection and the one with by far the most
 * review volume. That is precisely the case the floor exists for: without it,
 * a rating-blind "most reviewed wins" instinct would crown the weakest-rated
 * property on the site.
 *
 * Re-derive after any sync that materially changes the field. Do not lower it
 * to make a particular mark appear.
 */
export const PICK_MIN_RATING = 4.3

/**
 * The editorial pick on a surface, DERIVED from real Google review data —
 * never hand-picked and NEVER FOR SALE (2026-07-26).
 *
 * The sellable thing on these surfaces is the Esittelykumppani slot at the
 * head of the grid (`FeaturedPartnerSlot`). This mark is deliberately the part
 * money cannot buy: if it could be bought, the recommendation would be worth
 * nothing and so would the slot's price.
 *
 * The pick is the highest Google rating among the properties on that surface,
 * ties broken by the larger review count (more evidence wins). Returns `null`
 * — no mark at all — when fewer than two properties on the surface clear both
 * thresholds. A single villa detail page therefore never carries one: there is
 * no field to be top of.
 *
 * Callers MUST render, on every card of the surface that has review data, the
 * rating + review count + scope + link to Google's review list. "Highest rated
 * in this collection" is a checkable claim only if the reader can see the
 * other cards' numbers too.
 */
export function bestGoogleRated<T extends RankableProperty>(
  items: readonly (T | null | undefined)[],
): T | null {
  const present = items.filter((i): i is T => Boolean(i))
  const eligible = present.filter(
    (i): i is T & { rating: number; reviewCount: number; googlePlaceId: string } =>
      typeof i.rating === 'number' &&
      i.rating >= PICK_MIN_RATING &&
      typeof i.reviewCount === 'number' &&
      i.reviewCount >= PICK_MIN_REVIEWS &&
      typeof i.googlePlaceId === 'string',
  )
  if (eligible.length < 2) return null
  const winner = eligible.reduce((best, i) => {
    if (i.rating > best.rating) return i
    if (i.rating === best.rating && i.reviewCount > best.reviewCount) return i
    return best
  })

  // The mark PRINTS the claim "highest rating on this page". If any card on the
  // surface displays a strictly higher rating — a low-n outlier the review floor
  // correctly refused to crown — that claim is false on its face, right next to
  // the number that contradicts it. Rather than qualify the wording in twelve
  // locales, drop the mark: no claim beats a claim the reader can see is wrong.
  const highestShown = present.reduce(
    (max, i) => (typeof i.rating === 'number' && i.rating > max ? i.rating : max),
    0,
  )
  if (highestShown > winner.rating) return null

  return winner
}

/**
 * Google's public review list for a place. This is the attribution AND the
 * audit trail: the numbers printed on the site are Google's, and this link is
 * how a reader checks them.
 */
export function googleReviewsUrl(placeId: string): string {
  return `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`
}

/**
 * The visible justification printed under the pick mark: the derivation in
 * words plus the snapshot date. Built here so every surface phrases it
 * identically.
 */
export function editorialPickNote(
  e: { pickReason: string; verifiedOn: string },
  pick: RankableProperty | null,
  lang: Lang,
): string | undefined {
  if (!pick) return undefined
  if (!pick.lastVerified) return e.pickReason
  return `${e.pickReason} · ${e.verifiedOn.replace('{d}', formatVerifiedDate(pick.lastVerified, lang))}`
}

/** Site locale → BCP-47 tag, for Intl number/date formatting. */
const BCP47: Record<Lang, string> = {
  en: 'en-GB',
  fi: 'fi-FI',
  de: 'de-DE',
  ja: 'ja-JP',
  es: 'es-ES',
  'pt-BR': 'pt-BR',
  'zh-CN': 'zh-CN',
  ko: 'ko-KR',
  fr: 'fr-FR',
  it: 'it-IT',
  nl: 'nl-NL',
  sv: 'sv-SE',
}

/** "4.5" in en, "4,5" in fi/sv/de — always exactly one decimal, as Google shows it. */
export function formatRating(rating: number, lang: Lang): string {
  return new Intl.NumberFormat(BCP47[lang], {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(rating)
}

/** "1,415" in en, "1 415" in fi/sv — locale thousands grouping. */
export function formatReviewCount(count: number, lang: Lang): string {
  return new Intl.NumberFormat(BCP47[lang]).format(count)
}

/**
 * Format a YYYY-MM-DD verification date for display. Parsed as a LOCAL date so
 * a reader west of UTC is not shown yesterday's date for today's snapshot.
 */
export function formatVerifiedDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return new Intl.DateTimeFormat(BCP47[lang], { dateStyle: 'medium' }).format(new Date(y, m - 1, d))
}
