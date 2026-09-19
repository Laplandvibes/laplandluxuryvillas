interface LogoProps {
  /** When true, scales for hero placement with the pink glow. */
  hero?: boolean
  className?: string
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
 * third colour. On a phone the whole mark steps down to 18 px so it fits
 * between the network pill and the language/menu controls.
 */
export default function Logo({ hero = false, className = '' }: LogoProps) {
  const size = hero ? 'text-3xl md:text-5xl' : 'text-lg sm:text-2xl md:text-3xl'
  const glow = hero ? 'drop-shadow-[0_0_36px_rgba(236,72,153,0.55)]' : ''

  return (
    <span
      className={`font-logo tracking-wide leading-none inline-flex items-baseline whitespace-nowrap ${size} drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] ${className}`}
    >
      <span className={`text-[color:var(--color-vibe-pink)] ${glow}`}>#</span>
      <span className="text-[color:var(--color-snow)]">LAPLAND</span>
      <span className={`text-[color:var(--color-vibe-pink)] ${glow}`}>LUXURY</span>
      <span className="text-[color:var(--color-snow)]">VILLAS</span>
    </span>
  )
}
