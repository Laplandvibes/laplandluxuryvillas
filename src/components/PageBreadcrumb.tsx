import Breadcrumbs from '../shared/Breadcrumbs'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

/**
 * Ecosystem breadcrumb, rendered BELOW the hero (mounted once inside Hero)
 * so it reads as the first line of page content instead of a bar wedged between
 * the nav and the hero. Self-hides on home + unmapped routes (shared/Breadcrumbs
 * returns null there), so Hero can mount it unconditionally.
 *
 * Static content subpages only — dynamic detail routes (/villas/:slug,
 * /destinations/:slug) intentionally fall through to no breadcrumb, legal pages
 * are omitted, and /contact has no localized label in COPY, so it's skipped.
 */
export default function PageBreadcrumb() {
  const lang = useLang()
  const c = COPY[lang]
  const to = useLocalePath()
  const labelMap: Record<string, string> = {
    '/villas': c.nav.villas,
    '/suites': c.nav.suites,
    '/destinations': c.nav.destinations,
    '/experiences': c.nav.experiences,
    '/midnight-sun': c.nav.midnightSun,
    '/concierge': c.nav.privateInquiry,
    '/about': c.nav.about,
  }
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      className="bg-[color:var(--color-deep-night)] text-[color:var(--color-bone)] border-b border-[color:var(--color-mist)]/60"
      accentClassName="hover:text-[color:var(--color-brass)] hover:opacity-100"
    />
  )
}
