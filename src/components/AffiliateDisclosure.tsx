import { Info } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

interface AffiliateDisclosureProps {
  className?: string
  /** `compact` for inline-near-CTA placement, `full` for footer/page-top blocks. */
  variant?: 'compact' | 'full'
}

export default function AffiliateDisclosure({
  className = '',
  variant = 'full',
}: AffiliateDisclosureProps) {
  const lang = useLang()
  const text = COPY[lang].affiliateDisclosure[variant]

  return (
    <p
      className={`flex items-center justify-center gap-2 text-xs text-[color:var(--color-bone)]/55 ${className}`}
      role="note"
    >
      <Info className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </p>
  )
}
