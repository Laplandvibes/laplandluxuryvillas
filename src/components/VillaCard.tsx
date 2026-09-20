import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bed, Users, MapPin, ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Villa } from '../lib/villas'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import GoogleRatingRow from './GoogleRatingRow'
import EditorsPickChip from './EditorsPickChip'
import { propertyForVilla, ctaPromisesProperty, type RankableProperty } from '../data/properties'
import { buildAffiliateUrl } from '../lib/affiliate'
import { formatRate } from '../lib/rate'
import PhotoCredit from './PhotoCredit'
import { creditFor } from '../data/photoCredits'
import { villaGallery } from '../data/villaImages'

interface VillaCardProps {
  villa: Villa
  /** When true, the booking button routes to the affiliate URL; otherwise to /private-inquiry. */
  showBooking?: boolean
  /**
   * The surface's earned editorial pick, from `bestGoogleRated()` over the
   * properties on THAT surface. The mark renders only on the card whose
   * property is it, so the same card can carry the mark on `/suites` and not
   * on `/villas` — which is correct: the claim is "highest on this page".
   *
   * EARNED, NOT FOR SALE. The sellable thing on these surfaces is the
   * `FeaturedPartnerSlot` at the head of the grid. Never wire this prop to
   * anything in `src/data/adSlots.ts`.
   */
  pickProperty?: RankableProperty | null
  /** Visible justification under the mark ("… · Checked 26 Jul 2026"). */
  pickNote?: string
  /**
   * Which of the property's photographs the card opens on. `/suites` passes 1
   * so it does not look like `/villas` twice — Vesa 2026-09-20: *"tämä on huono
   * kun sviiteissä on melkein samat kohteet kuin huviloissa. edes kuvat voisi
   * olla erit."* Clamped to the gallery, so a property with one frame is safe.
   */
  startImage?: number
}

/**
 * VillaCard — one property of the collection.
 *
 * Layout since 2026-09-19 evening (Vesa, on the front-page cards: *"eikö tässä
 * mainoksissa google arviot voisi olla kuvan alla oikealla, näiden tekstien
 * ja juttujen sijainti pitää oikeasti katsoa, ja millä fontilla tekstit"*).
 * Before, ten elements in ten styles stacked under the photo: eyebrow, serif
 * title, rating pill, scope line, body, a tracked-caps "read profile" link,
 * spec row, a serif price, the button and the escape link. Now the card has
 * five rows, each with one job, and two typefaces only:
 *
 *   1. under the photo: where it is (left) · Google's verdict (RIGHT), with
 *      its scope line and, on the winning card, the pick's justification,
 *      right-aligned under the pill so the number and its caveats stay together
 *   2. the name, Cormorant Garamond (the site's documented heading face) — the
 *      only serif on the card, and the link to the profile
 *   3. one sentence, DM Sans
 *   4. bedrooms · sleeps · "Read profile →", one line of DM Sans 13 px
 *   5. price (DM Sans, never serif) and the booking button; the Sembo escape
 *      link right-aligned beneath the button it belongs to
 *
 * Tracked capitals survive only where the network uses them everywhere: the
 * button and the place name. Everything else is sentence case.
 */
export default function VillaCard({
  villa,
  showBooking = true,
  pickProperty = null,
  pickNote,
  startImage = 0,
}: VillaCardProps) {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  // Null for any villa with no row in properties.ts, i.e. one naming no
  // real business — they show no rating and can never take the mark.
  const property = propertyForVilla(villa.slug)
  const isPick = pickProperty !== null && property === pickProperty
  const inquiryOnly = villa.inquiryOnly || villa.tier === 'reserve'
  // "View rates" is a promise that the click lands on THIS property's booking
  // page. It only holds where the partner serving this language has a page for
  // it — Nellim has none on either partner, Aurora Village none on Trip.com —
  // so those cards say "view options" and land on the town instead.
  const promisesProperty = ctaPromisesProperty(property, lang)
  const detailPath = to(`/villas/${villa.slug}`)
  // The property's whole set of partner photographs (Vesa 2026-09-20:
  // "saadaanko per kohde useampi kuva että niitä voisi selata?"). One frame,
  // or none, falls back to the single `villa.image` and renders no controls.
  const gallery = villaGallery(villa.imageKey)
  const frames = gallery.length > 0 ? gallery : villa.image ? [villa.image] : []
  const [frame, setFrame] = useState(frames.length ? startImage % frames.length : 0)
  const current = frames[frame]
  const credit = creditFor(current)
  // 🔴 Sembo dead end (Vesa 19.9.2026): the property deep link carries one fixed
  // date, and when that night is sold out Sembo shows "not available" with no
  // date picker on the property view. The AREA list has the calendar, so every
  // card offers it as a second link: fi → Sembo polygon list, others → Trip.com
  // city list, both through the Worker with their own placement tag.
  const nearbyHref = property
    ? buildAffiliateUrl({ partner: 'hotels', sid: `villa_${villa.slug.split('-')[0]}_area`, destination: property.city, lang })
    : null

  return (
    <article className="card-onyx flex flex-col h-full overflow-hidden">
      <div
        className="aspect-[16/10] sm:aspect-[3/2] w-full relative overflow-hidden"
        style={{ background: villa.imageGradient }}
      >
        {current && (
          <img
            key={current}
            src={current}
            alt={`${villa.name}, ${villa.destination}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        )}
        {/* Gallery controls. Buttons rather than a scroll rail: the card is a
            link target, and a horizontal scroll inside it fights the page on a
            phone. 44 px hit area, labelled for screen readers, and the dots
            say how many frames there are without counting clicks. */}
        {frames.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setFrame((i) => (i - 1 + frames.length) % frames.length)}
              aria-label={c.cta.prevPhoto}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-deep-night)]/55 text-[color:var(--color-snow)] backdrop-blur-sm transition-colors hover:bg-[color:var(--color-deep-night)]/80"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setFrame((i) => (i + 1) % frames.length)}
              aria-label={c.cta.nextPhoto}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-deep-night)]/55 text-[color:var(--color-snow)] backdrop-blur-sm transition-colors hover:bg-[color:var(--color-deep-night)]/80"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5">
              {frames.map((src, i) => (
                <span
                  key={src}
                  className={`block h-1.5 rounded-full transition-all ${i === frame ? 'w-4 bg-[color:var(--color-snow)]' : 'w-1.5 bg-[color:var(--color-snow)]/45'}`}
                />
              ))}
            </div>
          </>
        )}
        {/* 🔴 `pointer-events-none`: this wash sits above the photo and, before
            20.9.2026, above the gallery arrows too — it swallowed every click
            on them. Found by Playwright ("intercepts pointer events"), not by
            eye: the buttons looked and measured fine and simply did nothing. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-deep-night)]/70 via-transparent to-transparent" />
        <PhotoCredit credit={credit} />
        {/* Tier label only where it tells the reader something: "by inquiry only".
            "Signature" and "Private Collection" were internal tiers printed on
            every card; Vesa 19.9.2026: "mikä ihmeen signature lukee täällä?" */}
        {villa.tier === 'reserve' && (
          <div className="absolute top-4 left-4">
            <span className="eyebrow inline-flex items-center px-2.5 py-1 bg-[color:var(--color-deep-night)]/85 backdrop-blur-sm text-[color:var(--color-brass)] border border-[color:var(--color-brass)]/30">
              {c.tier[villa.tier]}
            </span>
          </div>
        )}
        {/* The earned mark rides on the IMAGE, top RIGHT, always (Vesa 19.9.2026:
            "pitäisi olla aina oikea yläkulma"). On the image it costs zero layout
            height, so the one card in a row that carries it does not push its
            text down (Vesa 2026-08-01: "toimituksen valinta menee ihan oudosti").
            Snow + brass ring, never the pink "Mainos" pill: editorial, not paid. */}
        {isPick && (
          <div className="absolute top-4 right-4">
            <EditorsPickChip label={c.editorial.pickLabel} reason={c.editorial.pickReason} />
          </div>
        )}
      </div>

      {/* The card names a business; when the photograph is of something else
          (Nellim: the village, because the hotel has no partner page and no
          own file), the card says so in the reader's language. */}
      {credit?.inPictureKey && (
        <p className="px-5 sm:px-7 pt-3 text-[11px] leading-snug font-body text-[color:var(--color-bone)]/70">
          {c.photo.inPicture.replace('{what}', c.photo[credit.inPictureKey])}
        </p>
      )}

      <div className="flex-1 flex flex-col p-5 sm:p-7">
        {/* Row 1 — place on the left, Google's verdict on the right, both
            directly under the photo. The rating is a citation about the WHOLE
            property (GoogleRatingRow keeps the scope line with the number), so
            it sits in the corner as a label, not in the story column. */}
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-4">
          <div className="flex items-center gap-2 text-[color:var(--color-bone)]/75 text-xs font-body pt-1">
            <MapPin size={13} className="text-[color:var(--color-brass)] shrink-0" aria-hidden="true" />
            <span className="tracking-[0.18em] uppercase">{villa.destination}</span>
            <span className="text-[color:var(--color-mist)]">·</span>
            <span>{c.category[villa.category]}</span>
          </div>
          {property && (
            <div className="ml-auto flex flex-col items-end text-right gap-1">
              <GoogleRatingRow property={property} align="end" />
              {/* The mark's VISIBLE justification: "highest Google rating on this
                  page, checked <date>" belongs beside the number it is a claim
                  about. Mandatory — the mark is only checkable if the reader can
                  see what it is derived from and how old the snapshot is. */}
              {isPick && pickNote && (
                <p className="max-w-[16rem] text-[10.5px] leading-snug font-body text-[color:var(--color-bone)]/70">
                  {pickNote}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Row 2 — the name is the way into /villas/:slug. Until 2026-08-01 no
            card linked there at all: 108 detail URLs sat in the sitemap with
            zero internal links. The only serif on the card. */}
        <h3 className="font-heading text-[1.75rem] leading-tight mb-2">
          <Link
            to={detailPath}
            className="text-[color:var(--color-snow)] no-underline hover:text-[color:var(--color-brass)] transition-colors"
          >
            {villa.name}
          </Link>
        </h3>

        {/* Row 3 — one sentence. */}
        <p className="text-[color:var(--color-bone)]/85 text-[15px] leading-relaxed font-body mb-5">
          {villa.tagline}
        </p>

        {/* Row 4 — specs and the profile link on one line, pinned above the
            price row so every card in a row ends its button on the same line
            (`mt-auto`; the grid stretches cards, the content was top-aligned). */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] font-body text-[color:var(--color-bone)]/80 pb-4 border-b border-[color:var(--color-mist)]/40">
          {/* Omitted where the property publishes no bedroom count. See the
              `bedrooms` note in lib/villas.ts — an empty chip is better than
              an invented number. */}
          {villa.bedrooms !== undefined && (
            <span className="inline-flex items-center gap-1.5">
              <Bed size={14} className="text-[color:var(--color-brass)]" aria-hidden="true" />
              {villa.bedrooms} {villa.bedrooms === 1 ? c.badges.bedroom : c.badges.bedrooms}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Users size={14} className="text-[color:var(--color-brass)]" aria-hidden="true" />
            {c.badges.sleeps} {villa.sleeps}
          </span>
          <Link
            to={detailPath}
            className="lv-tap ml-auto inline-flex items-center gap-1 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] no-underline group/profile"
          >
            {c.cta.readProfile}
            <ArrowRight size={13} className="transition-transform group-hover/profile:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Row 5 — price and the booking button. The price is DM Sans like
            every other number on the site; the serif is for names only. */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="font-body leading-tight">
            {villa.fromPerNight ? (
              <>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[color:var(--color-bone)]/60 mb-1">{c.badges.fromPerNight}</div>
                <div className="text-lg font-medium text-[color:var(--color-brass)]">{formatRate(villa.fromPerNight, lang)}</div>
              </>
            ) : (
              <>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[color:var(--color-bone)]/60 mb-1">{c.badges.rate}</div>
                <div className="text-[15px] text-[color:var(--color-snow)]">{c.badges.onRequest}</div>
              </>
            )}
          </div>

          {inquiryOnly || !showBooking ? (
            <Link
              to={to('/private-inquiry')}
              className="inline-flex min-h-11 items-center gap-2 border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
            >
              {c.cta.inquire}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          ) : (
            <a
              href={villa.bookingUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex min-h-11 items-center gap-2 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              {promisesProperty ? c.cta.viewRates : c.cta.viewOptions}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>
        {nearbyHref && !inquiryOnly && showBooking && (
          <a
            href={nearbyHref}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="lv-tap mt-2 inline-flex items-center gap-1 self-end text-[12px] font-body text-[color:var(--color-bone)]/65 hover:text-[color:var(--color-brass)] no-underline"
          >
            {c.cta.nearbyStays}
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
