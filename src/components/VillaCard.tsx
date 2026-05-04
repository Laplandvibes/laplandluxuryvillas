import { Link } from 'react-router-dom'
import { Bed, Users, MapPin, ArrowUpRight } from 'lucide-react'
import type { Villa } from '../lib/villas'

interface VillaCardProps {
  villa: Villa
  /** When true, the booking button routes to the affiliate URL; otherwise to /concierge. */
  showBooking?: boolean
}

const TIER_LABEL: Record<Villa['tier'], string> = {
  signature: 'Signature',
  private: 'Private Collection',
  reserve: 'Reserve · Concierge Only',
}

const CATEGORY_LABEL: Record<Villa['category'], string> = {
  'glass-roof': 'Glass-roof Villa',
  'log-estate': 'Private Log Estate',
  'designer-suite': 'Designer Suite',
  'alpine-chalet': 'Alpine Chalet',
  'lakeside-retreat': 'Lakeside Retreat',
}

export default function VillaCard({ villa, showBooking = true }: VillaCardProps) {
  const conciergeOnly = villa.conciergeOnly || villa.tier === 'reserve'

  return (
    <article className="card-onyx flex flex-col h-full overflow-hidden">
      <div
        className="aspect-[4/3] w-full relative overflow-hidden"
        style={{ background: villa.imageGradient }}
      >
        {villa.image && (
          <img
            src={villa.image}
            alt={`${villa.name} — ${villa.destination}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-deep-night)]/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="eyebrow inline-flex items-center px-2.5 py-1 bg-[color:var(--color-deep-night)]/85 backdrop-blur-sm text-[color:var(--color-brass)] border border-[color:var(--color-brass)]/30">
            {TIER_LABEL[villa.tier]}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-7">
        <div className="flex items-center gap-2 text-[color:var(--color-bone)]/60 text-xs font-body mb-3">
          <MapPin size={13} className="text-[color:var(--color-brass)]" />
          <span className="tracking-[0.18em] uppercase">{villa.destination}</span>
          <span className="text-[color:var(--color-mist)]">·</span>
          <span>{CATEGORY_LABEL[villa.category]}</span>
        </div>

        <h3 className="font-heading text-2xl text-[color:var(--color-snow)] leading-tight mb-3">
          {villa.name}
        </h3>

        <p className="text-[color:var(--color-bone)]/75 text-sm leading-relaxed font-body mb-5">
          {villa.tagline}
        </p>

        <div className="flex items-center gap-5 text-xs font-body text-[color:var(--color-bone)]/60 pb-5 border-b border-[color:var(--color-mist)]/40">
          <span className="inline-flex items-center gap-1.5">
            <Bed size={13} className="text-[color:var(--color-brass)]" />
            {villa.bedrooms} bedroom{villa.bedrooms === 1 ? '' : 's'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users size={13} className="text-[color:var(--color-brass)]" />
            Sleeps {villa.sleeps}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            {villa.fromPerNight ? (
              <>
                <div className="eyebrow text-[color:var(--color-bone)]/55 mb-0.5">From / night</div>
                <div className="font-heading text-2xl text-[color:var(--color-brass)]">
                  €{villa.fromPerNight.toLocaleString('en-GB')}
                </div>
              </>
            ) : (
              <>
                <div className="eyebrow text-[color:var(--color-bone)]/55 mb-0.5">Rate</div>
                <div className="font-heading text-lg text-[color:var(--color-brass)]">On request</div>
              </>
            )}
          </div>

          {conciergeOnly || !showBooking ? (
            <Link
              to="/concierge"
              className="inline-flex items-center gap-2 border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
            >
              Inquire
              <ArrowUpRight size={13} />
            </Link>
          ) : (
            <a
              href={villa.bookingUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-2 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              View rates
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
