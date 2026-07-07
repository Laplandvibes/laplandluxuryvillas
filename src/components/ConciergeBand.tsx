import { Link } from 'react-router-dom'
import { Mail, Lock, Phone } from 'lucide-react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

interface ConciergeBandProps {
  /** Override the headline. Default speaks to private trip-planning. */
  title?: string
  /** Override the lede. */
  body?: string
  /** Hide the full-page CTA, keep only the email line. */
  emailOnly?: boolean
}

export default function ConciergeBand({ title, body, emailOnly = false }: ConciergeBandProps) {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang].concierge
  const t = title ?? c.defaultTitle
  const b = body ?? c.defaultBody

  return (
    <section className="relative bg-[color:var(--color-onyx)] border-y border-[color:var(--color-mist)]/60 py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, var(--color-brass) 0%, transparent 50%), radial-gradient(circle at 75% 50%, var(--color-brass) 0%, transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-7 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-[color:var(--color-brass)]/70" />
          <span className="eyebrow">{c.eyebrow}</span>
          <span className="h-px w-12 bg-[color:var(--color-brass)]/70" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1] mb-6">
          {t}
        </h2>

        <p className="text-[color:var(--color-bone)]/80 text-base sm:text-lg leading-relaxed font-body max-w-2xl mx-auto mb-10">
          {b}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {!emailOnly && (
            <Link
              to={to('/concierge')}
              className="inline-flex items-center gap-3 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
            >
              {c.inquireBtn}
            </Link>
          )}
          <a
            href="mailto:private@laplandvibes.com?subject=Lapland%20villa%20inquiry"
            className="inline-flex items-center gap-3 border border-[color:var(--color-bone)]/40 text-[color:var(--color-bone)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)] transition-all"
          >
            <Mail size={14} />
            {c.emailLabel}
          </a>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-body text-[color:var(--color-bone)]/55">
          <li className="inline-flex items-center gap-2">
            <Lock size={12} className="text-[color:var(--color-brass)]" />
            {c.badges.anonymous}
          </li>
          <li className="inline-flex items-center gap-2">
            <Mail size={12} className="text-[color:var(--color-brass)]" />
            {c.badges.reply}
          </li>
          <li className="inline-flex items-center gap-2">
            <Phone size={12} className="text-[color:var(--color-brass)]" />
            {c.badges.rates}
          </li>
        </ul>
      </div>
    </section>
  )
}
