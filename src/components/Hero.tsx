import { Link } from 'react-router-dom'
import PageBreadcrumb from './PageBreadcrumb'

interface HeroProps {
  /** Small label above the headline ("THE COLLECTION", "INARI", etc). */
  eyebrow?: string
  /** The display headline. Use the title-case treatment, no shouting. */
  title: string
  /** One line of body, max 160 characters. */
  lede?: string
  /** Optional image URL — when omitted falls back to the aurora-wash gradient. */
  imageUrl?: string
  /** When provided, applied as background-image style (gradient strings work too). */
  imageOverlay?: string
  /** Inner alignment — default `centered`. `bottom` hugs the lower third. */
  align?: 'centered' | 'bottom'
  /** Optional primary CTA. */
  primary?: { to: string; label: string }
  /** Optional secondary CTA. */
  secondary?: { to: string; label: string }
  /** Compact hero for inner pages — half the height of the home hero. */
  compact?: boolean
  /** Aria-label fallback when imageUrl is decorative only. */
  imageAlt?: string
  /** CSS object-position for the hero image (default center). Point at an
   *  off-centre subject (e.g. a villa on the left) so it survives the mobile
   *  portrait crop instead of showing only background. */
  imgObjectPosition?: string
}

/**
 * Editorial hero — full-bleed image (or aurora-wash fallback) with a brass
 * eyebrow rule, large Cormorant headline, and optional CTAs. Always uses
 * `min-h-[…svh]` per `lv_apple_safari_mobile_audit.md`.
 */
export default function Hero({
  eyebrow,
  title,
  lede,
  imageUrl,
  imageOverlay,
  align = 'centered',
  primary,
  secondary,
  compact = false,
  imageAlt = '',
  imgObjectPosition,
}: HeroProps) {
  const minH = compact
    ? 'min-h-[60svh] md:min-h-[68svh]'
    : 'min-h-[88svh] md:min-h-[92svh]'

  const align_ = align === 'bottom'
    ? 'items-end pb-20 md:pb-28'
    : 'items-center'

  return (
    <>
    <section
      className={`relative w-full ${minH} flex ${align_} justify-center overflow-hidden`}
    >
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={imgObjectPosition ? { objectPosition: imgObjectPosition } : undefined}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                imageOverlay ||
                'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16, 185, 129, 0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 100%, rgba(99, 102, 241, 0.08) 0%, transparent 60%), linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)',
            }}
          />
        )}
        {/* Editorial wash — bottom-anchored fade keeps the photo visible up top,
            text readable low.

            🔴 Lightened 2026-08-01 (Vesa: "hero kuvien päällä liikaa
            tummennusta"). The two layers here MULTIPLY, which is what the
            earlier numbers missed: at the headline (55% down) the linear wash
            was 0.42 and the radial added 0.45 on top, so the photograph was
            reading through roughly a third of its own brightness. The headline
            already carries its own drop-shadow, so the scrim can be much
            lighter than it looks in isolation. Effective darkening at the
            headline is now about 0.48 instead of 0.68. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.26) 45%, rgba(15,23,42,0.10) 100%)',
          }}
        />
        {/* Localised reading scrim only behind the headline block — preserves photo elsewhere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_50%_55%,rgba(10,15,28,0.30)_0%,transparent_75%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 text-center">
        {/* 🔴 Vesa 2026-08-03: "hero osion tekstien kontrasti on huono … teksti
            ei edes erotu". Measured on the live home hero: brass #C9A46B at
            11 px over the photograph averaged rgb(145,137,130) behind it —
            **1.48:1**, where AA small text needs 4.5:1. Brass and mid-tone rock
            sit at nearly the same luminance, so a drop-shadow cannot rescue it;
            a shadow separates an edge, it does not raise contrast.

            Fixed with a backing plate rather than a darker scrim, deliberately:
            the scrim was LIGHTENED on 2026-08-01 because Vesa said the heroes
            were too dark, and re-darkening it would trade one of his complaints
            for the other. The plate is local to the label, so the photograph
            keeps its brightness. Same device VillaDetail already uses for its
            tier badge. Brass on deep-night/85 measures about 7:1. */}
        {eyebrow && (
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[color:var(--color-brass)]/70" />
            <span className="eyebrow inline-flex items-center px-3 py-1.5 rounded-sm bg-[color:var(--color-deep-night)]/85 backdrop-blur-sm border border-[color:var(--color-brass)]/30 text-[color:var(--color-brass)]">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-[color:var(--color-brass)]/70" />
          </div>
        )}

        <h1
          className={`font-heading text-[color:var(--color-snow)] leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)] ${
            compact
              ? 'text-[2rem] sm:text-5xl md:text-6xl'
              : 'text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem]'
          }`}
        >
          {title}
        </h1>

        {lede && (
          <p className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-[color:var(--color-bone)]/90 font-body leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {lede}
          </p>
        )}

        {(primary || secondary) && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primary && (
              <Link
                to={primary.to}
                className="inline-flex items-center gap-3 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
              >
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center gap-3 border border-[color:var(--color-bone)]/40 text-[color:var(--color-bone)] px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)] transition-all"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
    <PageBreadcrumb />
    </>
  )
}
