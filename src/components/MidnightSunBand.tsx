import { Link } from 'react-router-dom'
import { Sun } from 'lucide-react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function MidnightSunBand() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang].midnightSunBand

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          'linear-gradient(135deg, #2A1F0E 0%, #3D2D14 35%, #1F1608 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 75% 30%, rgba(255, 200, 90, 0.22) 0%, transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-7">
        <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
          <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
            <Sun size={56} className="text-[#FFC95A]" strokeWidth={1.4} />
            <span className="eyebrow text-[#FFC95A]">{c.eyebrow}</span>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1] mb-5">
              {c.h2}
            </h2>
            <p className="text-[color:var(--color-bone)]/85 text-base sm:text-lg leading-relaxed font-body max-w-2xl mb-8">
              {c.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={to('/midnight-sun')}
                className="inline-flex items-center gap-3 bg-[#FFC95A] text-[#1A1208] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[#FFD37A] transition-colors"
              >
                {c.primary}
              </Link>
              <Link
                to={to('/concierge')}
                className="inline-flex items-center gap-3 border border-[#FFC95A]/60 text-[#FFC95A] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:bg-[#FFC95A]/10 transition-colors"
              >
                {c.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
