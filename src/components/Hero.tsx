import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'
import { withCounts } from '../lib/copyCounts'
import { Fragment, type CSSProperties, type ReactNode } from 'react'
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
  /**
   * Inner pages from 1024 px: the side of the photograph the words sit on. Pick
   * the side away from the subject (the experiences clip has its aurora on the
   * left, so its words go right). Ignored on the front page and below 1024 px.
   */
  textSide?: 'left' | 'right'
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
 *
 * 🔴 Inner pages from 1024 px (Vesa 18.10.2026: "miksi tietokoneella hero teksti ei
 * ole hero kuvien/videoiden päällä? se oli vain mobiilissa jossa näin sovittiin"):
 * the network rule since 3.10. is model C below 1024 px only, and on a computer the
 * words on the photograph. Of this site only the FRONT page was kept under the
 * photograph on a computer (Vesa's choice 3.10.), so `compact` decides. From lg the
 * photograph fills the hero and the words sit on one side over a horizontal fade
 * (laplandactivities' inner pages 17.10.), never on a blurred plate behind the text.
 */
/* ── Japanese and Chinese titles on a computer (Vesa 3.10.2026: "tehdään turhaan kolmirivisiä") ─────────────
 * Measured live 3.10.: the ja home title ran to three lines and broke inside words at 1280–1920 px
 * ("ラップランドのヴ / ィラ選びに、当て / 推量はいらない。"): CJK may break between any two glyphs, and balance split
 * it evenly. From lg such a title now breaks only after its own punctuation (、。，！？ get a <wbr>, keep-all
 * blocks the rest), and its size is the smaller of the designed size and the size at which the best two-line
 * split fits the column (100cqi / em): "ラップランドのヴィラ選びに、 / 当て推量はいらない。". Below lg nothing changes. */
const CJK_TITLE = /[぀-ヿ㐀-鿿]/
const CJK_GLYPH = /[　-ヿ㐀-鿿＀-￯]/
/** Width in em: a CJK glyph 1.05 (fallback face 1.0 + margin), Cormorant Latin ~0.5, space 0.25. */
const emWidth = (s: string) => [...s].reduce((w, ch) => w + (CJK_GLYPH.test(ch) ? 1.05 : ch === ' ' ? 0.25 : 0.5), 0)
function cjkTitleLayout(title: string): { chunks: string[]; em: number } | null {
  if (!CJK_TITLE.test(title)) return null
  const chunks = title.split(/(?<=[、。，！？])/).filter(Boolean)
  if (chunks.length < 2) return null
  let em = Infinity
  for (let k = 1; k < chunks.length; k++) {
    em = Math.min(em, Math.max(emWidth(chunks.slice(0, k).join('')), emWidth(chunks.slice(k).join(''))))
  }
  return { chunks, em }
}

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
  textSide = 'left',
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

  const cjk = cjkTitleLayout(title)
  const imgClass = `absolute inset-0 w-full h-full object-cover ${imgPositionClass ?? ''}`
  const imgStyle = imgPositionClass ? undefined : imgObjectPosition ? { objectPosition: imgObjectPosition } : undefined
  // Words on the photograph from lg: inner pages only (see the note above).
  const onPhoto = compact
  const right = onPhoto && textSide === 'right'

  return (
    <>
    <section className="pt-16 md:pt-20 xl:pt-16 bg-[color:var(--color-deep-night)]">
      <div className={onPhoto ? 'relative lg:flex lg:items-center lg:min-h-[500px] xl:min-h-[560px] 2xl:min-h-[600px]' : undefined}>
      <div
        className={`relative h-[42svh] min-h-[240px] sm:h-[380px] md:h-[440px] overflow-hidden ${
          onPhoto ? 'lg:absolute lg:inset-0 lg:h-auto lg:min-h-0' : 'lg:h-[500px] xl:h-[560px] 2xl:h-[600px]'
        }`}
        data-lv-tp-tausta={onPhoto ? 'hero' : undefined}
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
        {/* From lg only, where the words lie on the photograph: one horizontal fade on
            their side and a short fade into the page at the foot. Below lg the
            photograph stays clean. */}
        {onPhoto && (
          <>
            <div
              aria-hidden="true"
              className={`hidden lg:block absolute inset-0 pointer-events-none ${
                right ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
              } from-[#0F172A]/85 via-[#0F172A]/70 via-55% to-transparent`}
            />
            <div aria-hidden="true" className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
          </>
        )}
        {credit}
      </div>

      <div
        className={`relative mx-auto max-w-5xl px-5 sm:px-8 text-center ${
          compact ? 'pt-8 sm:pt-10 pb-10 sm:pb-12' : 'pt-9 sm:pt-12 pb-12 sm:pb-16'
        } ${onPhoto ? 'z-10 w-full lg:max-w-7xl lg:px-12 lg:py-16 lg:pointer-events-none' : ''}`}
      >
       <div
        className={`@container ${
          onPhoto ? `lg:text-left lg:max-w-[42rem] xl:max-w-[46rem] lg:pointer-events-auto ${right ? 'lg:ml-auto' : ''}` : ''
        }`}
      >
        {/* Brass on deep-night is about 7:1, so the eyebrow needs no backing plate
            any more (the plate of 2026-08-03 was there for the photograph). */}
        {eyebrow && (
          <div className={`flex items-center justify-center gap-3 mb-5 sm:mb-6 ${onPhoto ? 'lg:justify-start' : ''}`}>
            <span className={`h-px w-10 bg-[color:var(--color-brass)]/70 ${onPhoto ? 'lg:hidden' : ''}`} />
            <span className="eyebrow text-[color:var(--color-brass)]">{eyebrow}</span>
            <span className="h-px w-10 bg-[color:var(--color-brass)]/70" />
          </div>
        )}

        {/* Inner pages on the photograph from lg: 56 / 64 / 72 px in a 42–46 rem column
            (the 84–100 px of the band-under model ran to four lines there). */}
        <h1
          className={`font-heading text-[color:var(--color-snow)] leading-[1.05] text-balance ${
            compact
              ? 'text-[2rem] sm:text-5xl md:text-6xl'
              : `text-4xl sm:text-6xl md:text-7xl ${cjk ? 'lg:[--h1-max:5.25rem]' : 'lg:text-[5.25rem]'}`
          } ${
            cjk
              ? `${
                  compact
                    ? 'lg:[--h1-max:3.5rem] xl:[--h1-max:4rem] 2xl:[--h1-max:4.5rem]'
                    : 'xl:[--h1-max:clamp(84px,1.3125vw_+_67.2px,100.8px)]'
                } lg:[font-size:min(var(--h1-max),calc(100cqi/var(--h1-em)))] lg:[word-break:keep-all]`
              : compact
                ? 'lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]'
                : 'xl:text-[clamp(84px,1.3125vw_+_67.2px,100.8px)]'
          }`}
          style={cjk ? ({ '--h1-em': cjk.em.toFixed(2) } as CSSProperties) : undefined}
        >
          {cjk
            ? cjk.chunks.map((chunk, i) => (
                <Fragment key={i}>
                  {i > 0 && <wbr />}
                  {chunk}
                </Fragment>
              ))
            : title}
        </h1>

        {lede && (
          <p className={`mt-5 sm:mt-6 mx-auto max-w-2xl xl:max-w-3xl text-base sm:text-lg xl:text-xl text-[color:var(--color-bone)]/90 font-body leading-relaxed text-pretty ${onPhoto ? 'lg:mx-0' : ''}`}>
            {lede}
          </p>
        )}

        {(primary || secondary) && (
          <div className={`mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 ${onPhoto ? 'lg:justify-start' : ''}`}>
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
      </div>
      </div>
    </section>
    <PageBreadcrumb />
    </>
  )
}
