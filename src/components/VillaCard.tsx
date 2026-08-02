import { Link } from 'react-router-dom'
import { Bed, Users, MapPin, ArrowUpRight } from 'lucide-react'
import type { Villa } from '../lib/villas'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import GoogleRatingRow from './GoogleRatingRow'
import EditorsPickChip from './EditorsPickChip'
import { propertyForVilla, ctaPromisesProperty, type RankableProperty } from '../data/properties'
import { formatRate } from '../lib/rate'

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
}

export default function VillaCard({
  villa,
  showBooking = true,
  pickProperty = null,
  pickNote,
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

  return (
    <article className="card-onyx flex flex-col h-full overflow-hidden">
      <div
        className="aspect-[16/10] sm:aspect-[4/3] w-full relative overflow-hidden"
        style={{ background: villa.imageGradient }}
      >
        {villa.image && (
          <img
            src={villa.image}
            alt={`${villa.name}, ${villa.destination}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-deep-night)]/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="eyebrow inline-flex items-center px-2.5 py-1 bg-[color:var(--color-deep-night)]/85 backdrop-blur-sm text-[color:var(--color-brass)] border border-[color:var(--color-brass)]/30">
            {c.tier[villa.tier]}
          </span>
        </div>
        {/* The earned mark rides on the IMAGE, opposite the tier badge.
            🔴 It used to be a block above the h3 (Vesa 2026-08-01: "toimituksen
            valinta menee ihan oudosti"). Only one card in a row ever carries
            it, so it pushed that card's title, rating, body and button down by
            its own height and nothing lined up across the row. On the image it
            costs zero layout height, and it still reads as editorial rather
            than paid: snow + brass ring, never the pink "Mainos" pill. */}
        {/* 🔴 Alhaalla vasemmalla, EI ylhäällä oikealla. Ylänurkassa se törmäsi
            tier-badgeen heti kun kortti kapenee (etusivun neljän kortin
            ruudukko) — Vesa 2.8. Tämä nurkka on aina vapaa. */}
        {isPick && (
          <div className="absolute bottom-4 left-4">
            <EditorsPickChip label={c.editorial.pickLabel} reason={c.editorial.pickReason} />
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col p-5 sm:p-7">
        <div className="flex items-center gap-2 text-[color:var(--color-bone)]/75 text-xs font-body mb-3">
          <MapPin size={13} className="text-[color:var(--color-brass)]" />
          <span className="tracking-[0.18em] uppercase">{villa.destination}</span>
          <span className="text-[color:var(--color-mist)]">·</span>
          <span>{c.category[villa.category]}</span>
        </div>

        {/* The card title is the way into /villas/:slug. Until 2026-08-01 no
            card linked there at all: 108 detail URLs sat in the sitemap with
            zero internal links, so the richest pages on the site were orphans
            for a crawler and a dead end for a reader. */}
        <h3 className="font-heading text-2xl leading-tight mb-3">
          <Link
            to={detailPath}
            className="text-[color:var(--color-snow)] no-underline hover:text-[color:var(--color-brass)] transition-colors"
          >
            {villa.name}
          </Link>
        </h3>

        {/* Google's verdict on the PROPERTY that contains this room type, with
            its scope stated in the row itself. Rendered on every rated card,
            not only the winner: "highest rated on this page" is checkable only
            against the numbers it beat. */}
        <GoogleRatingRow property={property} className={isPick && pickNote ? 'mb-1.5' : 'mb-4'} />

        {/* The mark's VISIBLE justification. It moved down here with the chip:
            "highest Google rating on this page, checked <date>" belongs beside
            the number it is a claim about, not above the villa's name. Still
            mandatory — the mark is only checkable if the reader can see what it
            is derived from and how old the snapshot is. */}
        {isPick && pickNote && (
          <p className="text-[10.5px] leading-snug font-body text-[color:var(--color-bone)]/70 mb-4">
            {pickNote}
          </p>
        )}

        <p className="text-[color:var(--color-bone)]/85 text-sm leading-relaxed font-body mb-4">
          {villa.tagline}
        </p>

        <Link
          to={detailPath}
          className="inline-flex items-center gap-1.5 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[11px] tracking-[0.2em] uppercase font-body no-underline mb-5 group/profile"
        >
          {c.cta.readProfile}
          <ArrowUpRight size={12} className="transition-transform group-hover/profile:translate-x-0.5 group-hover/profile:-translate-y-0.5" />
        </Link>

        {/* `mt-auto` pins the spec row and the price/CTA block to the bottom of
            the card. The grid already stretches every card to the row's height,
            but the CONTENT was top-aligned, so a card with no Google rating
            ended its button a hundred pixels above its neighbour's. Now every
            row's buttons sit on one line. (Every villa has a rating again
            since the two unnamed entries went in 2026-08-02, but keep this —
            a new villa can land before its rating is synced.) */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-body text-[color:var(--color-bone)]/75 pb-5 border-b border-[color:var(--color-mist)]/40">
          {/* Omitted where the property publishes no bedroom count. See the
              `bedrooms` note in lib/villas.ts — an empty chip is better than
              an invented number. */}
          {villa.bedrooms !== undefined && (
            <span className="inline-flex items-center gap-1.5">
              <Bed size={13} className="text-[color:var(--color-brass)]" />
              {villa.bedrooms} {villa.bedrooms === 1 ? c.badges.bedroom : c.badges.bedrooms}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Users size={13} className="text-[color:var(--color-brass)]" />
            {c.badges.sleeps} {villa.sleeps}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            {villa.fromPerNight ? (
              <>
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-0.5">{c.badges.fromPerNight}</div>
                <div className="font-heading text-2xl text-[color:var(--color-brass)]">
                  {formatRate(villa.fromPerNight, lang)}
                </div>
              </>
            ) : (
              <>
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-0.5">{c.badges.rate}</div>
                <div className="font-heading text-lg text-[color:var(--color-brass)]">{c.badges.onRequest}</div>
              </>
            )}
          </div>

          {inquiryOnly || !showBooking ? (
            <Link
              to={to('/private-inquiry')}
              className="inline-flex items-center gap-2 border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
            >
              {c.cta.inquire}
              <ArrowUpRight size={13} />
            </Link>
          ) : (
            <a
              href={villa.bookingUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-2 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              {promisesProperty ? c.cta.viewRates : c.cta.viewOptions}
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
