/**
 * GoogleRatingRow — the review score of the PROPERTY behind a villa card,
 * presented as GOOGLE'S verdict and linked to the source (2026-07-26).
 *
 * Four rules this component exists to enforce:
 *
 * 1. ATTRIBUTION. The number is labelled "Google" in the visible text. It is
 *    not this site's verdict and must never be worded as one.
 * 2. 🔴 SCOPE. This site's cards name ROOM TYPES — "Nellim Aurora Bubble",
 *    "Apukka Aurora Wagon", "Kakslauttanen Kelo-Glass Suite" — while Google
 *    rates the property that contains the room. Printing "4.1 · 1 415 reviews"
 *    under a suite name would tell the reader that 1 415 people reviewed that
 *    suite. They reviewed the resort. So the scope line is NOT optional
 *    decoration: it is what keeps the number from being a lie, and it renders
 *    with every rating. Do not remove it to tidy a layout.
 * 3. CHECKABILITY. The pill is a link to Google's public review list for that
 *    exact Place ID, so a reader can verify in one click. This is what makes
 *    the editorial pick mark auditable rather than asserted: the mark says
 *    "highest rated on this page", and the reader can only test that if every
 *    other card prints its number too. Render this on EVERY card of a surface,
 *    not only on the winner.
 * 4. NO FAKE LIVENESS. The data is a gitted snapshot from
 *    `scripts/sync-villas.mjs`, so the verification date travels with it.
 *
 * Renders NOTHING when the sync produced no certain data, and nothing at all
 * for a villa with no property row in src/data/properties.ts, i.e. one naming no real
 * business. That is the fail-closed path and it must stay that way.
 *
 * Not an affiliate link: `rel="nofollow noopener"`, no `sponsored`. The card's
 * own booking CTA keeps its affiliate attributes; this one is a citation.
 */
import { Star } from 'lucide-react'
import {
  googleReviewsUrl,
  formatRating,
  formatReviewCount,
  formatVerifiedDate,
  type Property,
  type GoogleReview,
} from '../data/properties'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Fewest Google reviews that may render as a visible rating. Well below the
 * editorial pick's threshold (PICK_MIN_REVIEWS = 100) on purpose: showing a
 * number and crowning it are different claims, and this one only has to be
 * more than a handful of people.
 */
export const RATING_MIN_REVIEWS = 10

export default function GoogleRatingRow({
  property,
  className,
}: {
  property: (Property & GoogleReview) | null | undefined
  className?: string
}) {
  const lang = useLang()

  if (!property) return null
  const { rating, reviewCount, googlePlaceId, lastVerified, name } = property
  if (typeof rating !== 'number' || typeof reviewCount !== 'number' || !googlePlaceId) {
    return null
  }
  // 🔴 A RATING ROW IS A CLAIM ABOUT CONSENSUS, AND ONE REVIEW IS NOT ONE
  // (2026-08-02). A newly listed Ylläs villa came back from the Places API as
  // "5.0 · 1 review". True, and useless: printed beside Kakslauttanen's
  // "4.1 · 1 415 reviews" it reads as the best property on the page. The
  // editorial pick was already safe (PICK_MIN_REVIEWS = 100); the row itself
  // was not. Below the floor the card simply shows no rating, which is the
  // same honest state as a property Google has never rated.
  if (reviewCount < RATING_MIN_REVIEWS) return null

  const e = COPY[lang].editorial
  const ratingText = formatRating(rating, lang)
  const countText = formatReviewCount(reviewCount, lang)
  const line = e.ratingLine.replace('{r}', ratingText).replace('{n}', countText)
  const scope = e.ratingScope.replace('{p}', name)
  const verified = lastVerified
    ? e.verifiedOn.replace('{d}', formatVerifiedDate(lastVerified, lang))
    : null

  return (
    <div className={['flex flex-col items-start gap-1', className].filter(Boolean).join(' ')}>
      <a
        href={googleReviewsUrl(googlePlaceId)}
        target="_blank"
        rel="nofollow noopener"
        title={verified ? `${line} · ${verified}` : line}
        data-google-rating={ratingText}
        className={[
          // `relative` anchors the sr-only absolute to this pill instead of a
          // higher positioned ancestor (Lomarengas lesson, 2026-07-25).
          'relative inline-flex items-center gap-1.5 self-start rounded-full no-underline',
          'border border-[color:var(--color-brass)]/30 bg-[color:var(--color-brass)]/10',
          'px-2.5 py-1 text-[11px] font-body text-[color:var(--color-bone)]/85',
          'hover:text-[color:var(--color-snow)] hover:border-[color:var(--color-brass)]/60 transition-colors',
        ].join(' ')}
      >
        <Star className="w-3 h-3 text-[color:var(--color-brass)] shrink-0" aria-hidden="true" />
        <span className="font-semibold">{line}</span>
        <span className="sr-only">{` (${e.ratingAria}${verified ? `, ${verified}` : ''})`}</span>
      </a>
      <span
        data-google-rating-scope=""
        className="text-[10.5px] leading-snug font-body text-[color:var(--color-bone)]/75"
      >
        {scope}
      </span>
    </div>
  )
}
