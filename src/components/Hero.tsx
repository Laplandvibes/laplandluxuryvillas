import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'
import { withCounts } from '../lib/copyCounts'
import type { ReactNode } from 'react'
import PageBreadcrumb from './PageBreadcrumb'

/**
 * Responsive files for a hero photograph: a 16:9 desktop crop in two widths and a
 * separate phone crop cut from the original around the subject. Each value is a
 * plain path or a srcset string, so scripts/version-images.mjs stamps every path.
 */
export interface HeroSources {
  desktopAvif: string
  desktopWebp: string
  mobileAvif: string
  mobileWebp: string
}

interface HeroProps {
  /** Small label above the headline ("THE COLLECTION", "INARI", etc). */
  eyebrow?: string
  /** The display headline. Use the title-case treatment, no shouting. */
  title: string
  /** One line of body, max 160 characters. */
  lede?: string
  /** Optional image URL — when omitted falls back to the aurora-wash gradient. */
  imageUrl?: string
  /** Desktop + phone files for `imageUrl` (picture element). */
  sources?: HeroSources
  /** When provided, applied as background-image style (gradient strings work too). */
  imageOverlay?: string
  /** Kept for the call sites; the text block always sits under the photograph now. */
  align?: 'centered' | 'bottom'
  /** Optional primary CTA. */
  primary?: { to: string; label: string }
  /** Optional secondary CTA. */
  secondary?: { to: string; label: string }
  /** Inner pages: a smaller headline. The photograph band is the same height. */
  compact?: boolean
  /** Aria-label fallback when imageUrl is decorative only. */
  imageAlt?: string
  /** CSS object-position for the hero image (default center). */
  imgObjectPosition?: string
  /**
   * Tailwind classes for the crop point when it differs between a phone and a wide
   * screen. Given as classes, not an inline style, because one value cannot be two.
   */
  imgPositionClass?: string
  /** Source line for an open-licence or partner photograph (PhotoCredit). */
  credit?: ReactNode
  /**
   * Autoplaying, muted, looping background clip (Vesa 19.9.2026: real Pexels
   * aurora footage instead of an AI still). `imageUrl` is the poster and the
   * whole story for readers who prefer reduced motion or whose browser blocks
   * autoplay; the clip never carries text and never blocks the LCP image.
   */
  videoUrl?: string
  /**
   * No longer used: there is no wash over the photograph since model C
   * (2026-10-01). Accepted so the call sites stay unchanged.
   */
  scrim?: 'default' | 'light' | 'strong'
}

/**
 * Editorial hero, model C (Vesa 2026-10-01 for every page of this site, the same
 * choice he made for laplandtransport on 25.9. and the wedding venues on 28.9.):
 * the photograph is shown whole and clean, with no wash, no plate and no text on
 * it, and the brass eyebrow, Cormorant headline, lead and buttons sit under it on
 * the page's own deep-night ground.
 *
 * Why: the old hero put the words over the middle of the photograph, so every
 * picture needed a darkening wash (lightened 1.8., re-darkened as `strong` for
 * the pale summer frame 20.9.) and the subject still disappeared behind the
 * headline or the buttons. On the winter front page Vesa read the aurora, not the
 * villas (1.10.: "tässä ennemmin revontulet on se juttu kuin huvila tai
 * sviitit?"). Contrast now rests on the ground, not on the picture.
 *
 * The band has the same height steps as laplandtransport's PageLayout. It starts
 * under the fixed nav (pt-16 / md:pt-20), so the nav's own gradient never lies on
 * the photograph. The lead is printed once, here.
 */
export default function Hero({
  eyebrow: eyebrowRaw,
  title: titleRaw,
  lede: ledeRaw,
  imageUrl,
  sources,
  imageOverlay,
  primary,
  secondary,
  compact = false,
  imageAlt = '',
  imgObjectPosition,
  imgPositionClass,
  credit,
  videoUrl,
}: HeroProps) {
  // 🔴 The hero fills its own count placeholders. Measured live 20.9.2026:
  // /experiences rendered the literal "{e} yksityistä elämystä", because that
  // page — and five others — passed the copy straight through while only Home,
  // Villas and About remembered `withCounts`. A filler every call site has to
  // remember is a filler that will be forgotten; doing it here makes it
  // impossible to get wrong.
  const lang = useLang()
  const eyebrow = eyebrowRaw ? withCounts(eyebrowRaw, lang) : eyebrowRaw
  const title = withCounts(titleRaw, lang)
  const lede = ledeRaw ? withCounts(ledeRaw, lang) : ledeRaw

  const imgClass = `absolute inset-0 w-full h-full object-cover ${imgPositionClass ?? ''}`
  const imgStyle = imgPositionClass ? undefined : imgObjectPosition ? { objectPosition: imgObjectPosition } : undefined

  return (
    <>
    <section className="pt-16 md:pt-20 bg-[color:var(--color-deep-night)]">
      <div
        className="relative h-[42svh] min-h-[240px] sm:h-[380px] md:h-[440px] lg:h-[500px] xl:h-[560px] 2xl:h-[600px] overflow-hidden"
        style={{
          background:
            imageOverlay ||
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16, 185, 129, 0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 100%, rgba(99, 102, 241, 0.08) 0%, transparent 60%), linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)',
        }}
      >
        {imageUrl && sources ? (
          <picture>
            <source media="(min-width: 768px)" type="image/avif" srcSet={sources.desktopAvif} sizes="100vw" />
            <source media="(min-width: 768px)" type="image/webp" srcSet={sources.desktopWebp} sizes="100vw" />
            <source type="image/avif" srcSet={sources.mobileAvif} />
            <img
              src={sources.mobileWebp}
              alt={imageAlt}
              className={imgClass}
              style={imgStyle}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className={imgClass}
            style={imgStyle}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        ) : null}
        {videoUrl && (
          <video
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
            style={imgObjectPosition ? { objectPosition: imgObjectPosition } : undefined}
            src={videoUrl}
            poster={imageUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
        {credit}
      </div>

      <div
        className={`mx-auto max-w-5xl px-5 sm:px-8 text-center ${
          compact ? 'pt-8 sm:pt-10 pb-10 sm:pb-12' : 'pt-9 sm:pt-12 pb-12 sm:pb-16'
        }`}
      >
        {/* Brass on deep-night is about 7:1, so the eyebrow needs no backing plate
            any more (the plate of 2026-08-03 was there for the photograph). */}
        {eyebrow && (
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <span className="h-px w-10 bg-[color:var(--color-brass)]/70" />
            <span className="eyebrow text-[color:var(--color-brass)]">{eyebrow}</span>
            <span className="h-px w-10 bg-[color:var(--color-brass)]/70" />
          </div>
        )}

        <h1
          className={`font-heading text-[color:var(--color-snow)] xl:text-[clamp(84px,1.3125vw_+_67.2px,100.8px)] leading-[1.05] text-balance ${
            compact
              ? 'text-[2rem] sm:text-5xl md:text-6xl'
              : 'text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem]'
          }`}
        >
          {title}
        </h1>

        {lede && (
          <p className="mt-5 sm:mt-6 mx-auto max-w-2xl xl:max-w-3xl text-base sm:text-lg xl:text-xl text-[color:var(--color-bone)]/90 font-body leading-relaxed text-pretty">
            {lede}
          </p>
        )}

        {(primary || secondary) && (
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
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
