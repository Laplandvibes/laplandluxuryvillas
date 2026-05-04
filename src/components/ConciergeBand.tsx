import { Link } from 'react-router-dom'
import { Mail, Lock, Phone } from 'lucide-react'

interface ConciergeBandProps {
  /** Override the headline. Default speaks to private trip-planning. */
  title?: string
  /** Override the lede. */
  body?: string
  /** Hide the full-page CTA, keep only the email line. */
  emailOnly?: boolean
}

/**
 * Sitewide CTA strip — appears on every long page above the Newsletter band.
 * The mailto: routes anonymously to private@laplandvibes.com (the inbox
 * Vesa monitors for high-value inquiries).
 */
export default function ConciergeBand({
  title = 'A quieter way to plan a Lapland trip.',
  body = 'Send a single message — preferences, dates, headcount — and our concierge replies with a private shortlist within one working day. No public profile, no shared calendars.',
  emailOnly = false,
}: ConciergeBandProps) {
  return (
    <section className="relative bg-[color:var(--color-onyx)] border-y border-[color:var(--color-mist)]/60 py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, var(--color-brass) 0%, transparent 50%), radial-gradient(circle at 75% 50%, var(--color-brass) 0%, transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-7 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-[color:var(--color-brass)]/70" />
          <span className="eyebrow">The Private Concierge</span>
          <span className="h-px w-12 bg-[color:var(--color-brass)]/70" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1] mb-6">
          {title}
        </h2>

        <p className="text-[color:var(--color-bone)]/80 text-base sm:text-lg leading-relaxed font-body max-w-2xl mx-auto mb-10">
          {body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {!emailOnly && (
            <Link
              to="/concierge"
              className="inline-flex items-center gap-3 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              Begin a private inquiry
            </Link>
          )}
          <a
            href="mailto:private@laplandvibes.com?subject=Lapland%20villa%20inquiry"
            className="inline-flex items-center gap-3 border border-[color:var(--color-bone)]/40 text-[color:var(--color-bone)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)] transition-all"
          >
            <Mail size={14} />
            private@laplandvibes.com
          </a>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-body text-[color:var(--color-bone)]/55">
          <li className="inline-flex items-center gap-2">
            <Lock size={12} className="text-[color:var(--color-brass)]" />
            Anonymous trip-planning
          </li>
          <li className="inline-flex items-center gap-2">
            <Mail size={12} className="text-[color:var(--color-brass)]" />
            Reply within one working day
          </li>
          <li className="inline-flex items-center gap-2">
            <Phone size={12} className="text-[color:var(--color-brass)]" />
            Direct rates on request
          </li>
        </ul>
      </div>
    </section>
  )
}
