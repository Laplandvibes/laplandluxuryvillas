interface LogoProps {
  /** When true, scales for hero placement with the pink glow. */
  hero?: boolean
  className?: string
}

/**
 * `#LAPLANDLUXURY VILLAS` — the network wordmark with this site's brand word.
 *
 * NETWORK RULE (CLAUDE.md, Vesa 2026-07-24): the hashtag wordmark renders in
 * Bebas Neue and looks identical to `#LAPLANDVIBES` on every site: pink `#`,
 * snow LAPLAND, pink brand word, ONE size for all three parts, and no gaps,
 * because it is one hashtag and not three words.
 *
 * 🔴 Until 2026-09-19 this file broke the rule in two ways Vesa saw at once
 * ("logo on päin vittua"): the brand word was a size smaller than LAPLAND
 * (20 px against 24 px on desktop, 11 px against 14 px on a phone), and the
 * three parts were spaced apart with `gap-x-1.5`, so it read "# LAPLAND
 * LUXURY VILLAS". Measured live 19.9.2026: lockup 186 px wide at 1280 px,
 * brand word 11 px on a 375 px phone.
 *
 * Phone: the brand word is the longest in the network, so below `sm` it takes
 * its own line at the SAME size (two lines of 20 px inside the 64 px bar)
 * instead of shrinking; from `sm` up it is one line at the hub's sizes.
 */
export default function Logo({ hero = false, className = '' }: LogoProps) {
  const size = hero ? 'text-3xl md:text-5xl' : 'text-xl sm:text-2xl md:text-3xl'
  const glow = hero ? 'drop-shadow-[0_0_36px_rgba(236,72,153,0.55)]' : ''

  return (
    <span
      className={`font-logo tracking-wide leading-none inline-flex flex-wrap items-baseline ${size} drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] ${className}`}
    >
      <span className={`text-[color:var(--color-vibe-pink)] ${glow}`}>#</span>
      <span className="text-[color:var(--color-snow)]">LAPLAND</span>
      <span className={`${hero ? '' : 'basis-full sm:basis-auto'} text-[color:var(--color-vibe-pink)] ${glow}`}>
        LUXURY&nbsp;VILLAS
      </span>
    </span>
  )
}
