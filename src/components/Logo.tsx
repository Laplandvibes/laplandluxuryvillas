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
  const sizeBase = hero
    ? 'text-3xl md:text-5xl'
    : 'text-xl md:text-2xl'
  const sizeBrand = hero
    ? 'text-2xl md:text-4xl'
    : 'text-base md:text-xl'
  const glow = hero ? 'drop-shadow-[0_0_36px_rgba(236,72,153,0.55)]' : ''

  return (
    <span className={`font-heading inline-flex items-baseline gap-1.5 tracking-wide ${className}`}>
      <span className={`text-[color:var(--color-vibe-pink)] ${sizeBase} ${glow}`}>#</span>
      <span className={`text-[color:var(--color-snow)] ${sizeBase}`}>LAPLAND</span>
      <span className={`text-[color:var(--color-vibe-pink)] ${sizeBrand} ${glow}`}>LUXURY&nbsp;VILLAS</span>
    </span>
  )
}
