interface LogoProps {
  /** When true, scales for hero placement with brass glow. */
  hero?: boolean
  className?: string
}

/**
 * `#LAPLAND<LUXURY VILLAS>` — canonical LV logo with the brand-word swap.
 *
 * Per LV-BRAND-GUIDELINES the `#` is vibe-pink, the brand prefix is snow,
 * the brand word is vibe-pink. On this site we make the brand word slightly
 * smaller so the wide compound word reads on mobile nav.
 */
export default function Logo({ hero = false, className = '' }: LogoProps) {
  // `LUXURY VILLAS` is the longest brand word in the network. On one line at the
  // old nav size the lockup measured 212px — wide enough that the menu button was
  // laid out past the right edge of a 375px screen and, on a `fixed` bar, simply
  // disappeared. Below 420px the brand word now takes its own line (see the
  // `basis-full` below) instead of being shrunk to illegibility or clipped
  // mid-word; two lines at these sizes still sit inside the 64px bar.
  const sizeBase = hero
    ? 'text-3xl md:text-5xl'
    : 'text-sm min-[420px]:text-lg sm:text-xl md:text-2xl'
  const sizeBrand = hero
    ? 'text-2xl md:text-4xl'
    : 'text-[11px] min-[420px]:text-sm sm:text-base md:text-xl'
  const glow = hero ? 'drop-shadow-[0_0_36px_rgba(236,72,153,0.55)]' : ''

  return (
    <span className={`font-heading inline-flex flex-wrap items-baseline gap-x-1.5 leading-none tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] ${className}`}>
      <span className={`text-[color:var(--color-vibe-pink)] ${sizeBase} ${glow}`}>#</span>
      <span className={`text-[color:var(--color-snow)] ${sizeBase}`}>LAPLAND</span>
      <span className={`${hero ? '' : 'basis-full min-[420px]:basis-auto'} text-[color:var(--color-vibe-pink)] ${sizeBrand} ${glow}`}>LUXURY&nbsp;VILLAS</span>
    </span>
  )
}
