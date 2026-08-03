import SEO from '../components/SEO'
import Page from '../components/Page'
import CookieContent from '../shared/Legal/CookieContent'
import { useLang } from '../i18n/useLang'
import { getPageSeo } from '../lib/pageSeo'

export default function CookiePolicy() {
  const lang = useLang()
  const seo = getPageSeo('cookie-policy', lang)
  return (
    <Page>
      <SEO title={seo.title} description={seo.description} canonicalPath="/cookie-policy" />
      <CookieContent siteName="LaplandLuxuryVillas" lang={lang} />
    </Page>
  )
}
