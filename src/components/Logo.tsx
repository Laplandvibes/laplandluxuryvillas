import type { CSSProperties } from 'react';

// Sanamerkin leveys 1 px:n fontilla (Bebas Neue + tracking-wide). Puhelin- ja tablettinavissa koko lasketaan
// tästä ja vapaasta tilasta (index.css LV-NAV-SANAMERKKI): 24 px (tabletilla 30 px), pienempi vain kun ei mahdu.
const WM_STYLE = { '--lv-wm-k': 8.01, '--lv-wm-max-md': '30px' } as CSSProperties;

interface LogoProps {
  /** When true, scales for hero placement with the pink glow. */
  hero?: boolean
  className?: string
  /** Navin sanamerkki: koko puhelin- ja tablettinavissa vapaan tilan mukaan (index.css LV-NAV-SANAMERKKI). */
  nav?: boolean
}

/**
 * `#LAPLANDLUXURYVILLAS` — the network wordmark with this site's brand word.
 *
 * NETWORK RULE (CLAUDE.md, Vesa 2026-07-24): the hashtag wordmark renders in
 * Bebas Neue and looks identical to `#LAPLANDVIBES` on every site: pink `#`,
 * snow LAPLAND, pink brand word, ONE size for all parts, and no gaps, because
 * it is one hashtag and not three words. A two-word brand is still one word
 * in the hashtag (huskysafaris: `HUSKYSAFARIS`).
 *
 * 🔴 Until 2026-09-19 this file broke the rule in two ways Vesa saw at once
 * ("logo on päin vittua"): the brand word was a size smaller than LAPLAND and
 * the three parts were spaced apart, so it read "# LAPLAND LUXURY VILLAS".
 * The first fix kept a space inside the brand ("LUXURY VILLAS") and let it
 * wrap to its own line on a phone; Vesa the same evening: *"ei logo voi olla
 * erikseen kirjoitettu, värimaailma pitää, mietipä paremmin jotta sanat
 * erottuu toisistaan"*. So: one unbroken hashtag on one line at every width,
 * the network's two colours only, and the words told apart BY COLOUR alone:
 * `#` pink · LAPLAND snow · LUXURY pink · VILLAS snow. No space, no wrap, no
 * third colour. On a phone the whole mark steps down (14/16/18 px) so it fits
 * between the network pill and the language/menu controls.
 */
export default function Logo({ hero = false, className = '', nav = false }: LogoProps) {
  // Phone sizes step down so the nav row (network pill, wordmark, language, menu button)
  // fits without clipping the mark from 320 px up. Measured 1.10.2026 in all 12 languages:
  // at 18 px the mark is 144 px wide and was cut by 45 px at 320 and 5 px at 360.
  // Bebas, the two colours and the single unbroken hashtag stay as they are.
  const size = hero
    ? 'text-3xl md:text-5xl'
    : 'text-[14px] min-[360px]:text-[16px] min-[390px]:text-lg sm:text-2xl md:text-3xl'
  const glow = hero ? 'drop-shadow-[0_0_36px_rgba(236,72,153,0.55)]' : ''

  return (
    <span
      className={`font-logo tracking-wide leading-none inline-flex items-baseline whitespace-nowrap ${size} drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] ${nav ? ' lv-wm' : ''} ${className}`}
      data-lv-sanamerkki={nav ? '' : undefined}
      style={nav ? WM_STYLE : undefined}
    >
      <span className={`text-[color:var(--color-vibe-pink)] ${glow}`}>#</span>
      <span className="text-[color:var(--color-snow)]">LAPLAND</span>
      <span className={`text-[color:var(--color-vibe-pink)] ${glow}`}>LUXURY</span>
      <span className="text-[color:var(--color-snow)]">VILLAS</span>
    </span>
  )
}
