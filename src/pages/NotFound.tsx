import Page from '../components/Page'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import SharedNotFound from '../../../shared/NotFound'

// Thin wrapper around the shared network 404 (Vesa 2026-07-12 migration).
// Title + robots noindex are set by SharedNotFound itself — the old SEO
// component (which also emitted a canonical) is dropped, same policy as
// laplandcarrental. Default dark + vibe-pink variant per the network
// migration plan (the villas' own brass accent stays on its real pages).
// Nav/Footer are rendered by App.tsx around the router; <Page> only adds the
// fixed-Nav top offset the old page relied on.
export default function NotFound() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang].nav

  return (
    <Page>
      <SharedNotFound
        lang={lang}
        siteName="LaplandLuxuryVillas"
        homeHref={to('/')}
        links={[
          { href: to('/villas'), label: c.villas },
          { href: to('/destinations'), label: c.destinations },
          { href: to('/experiences'), label: c.experiences },
        ]}
      />
    </Page>
  )
}
