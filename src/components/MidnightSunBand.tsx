import { Link } from 'react-router-dom'
import { Sun } from 'lucide-react'

/**
 * Mandatory midnight-sun strip — every LV site must visibly market the
 * 32-day midnight-sun window (Jun 6 – Jul 7). Per `lv_summer_marketing_gap.md`.
 *
 * For LaplandLuxuryVillas the angle is "the villas you already came north for
 * become a different thing in summer" — same architecture, different season.
 */
export default function MidnightSunBand() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          'linear-gradient(135deg, #2A1F0E 0%, #3D2D14 35%, #1F1608 100%)',
      }}
    >
      {/* Midnight sun glow */}
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
            <Sun
              size={56}
              className="text-[#FFC95A]"
              strokeWidth={1.4}
            />
            <span className="eyebrow text-[#FFC95A]">Jun 6 – Jul 7</span>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1] mb-5">
              The villas, in 32 days of unbroken light.
            </h2>
            <p className="text-[color:var(--color-bone)]/85 text-base sm:text-lg leading-relaxed font-body max-w-2xl mb-8">
              Same architecture, different season. The glass roof becomes a
              skylight onto a sun that never sets, the lake unfreezes, the
              forest fills with cloudberry. Half the demand of winter — and the
              one window each year when private chefs, helicopter charters and
              the reserve villas open the rest of their calendar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/midnight-sun"
                className="inline-flex items-center gap-3 bg-[#FFC95A] text-[#1A1208] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[#FFD37A] transition-colors"
              >
                See the summer collection
              </Link>
              <Link
                to="/concierge"
                className="inline-flex items-center gap-3 border border-[#FFC95A]/60 text-[#FFC95A] px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:bg-[#FFC95A]/10 transition-colors"
              >
                Inquire about June dates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
