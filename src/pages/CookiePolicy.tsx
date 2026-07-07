import SEO from '../components/SEO'
import Page from '../components/Page'
import CookieContent from '../shared/Legal/CookieContent'
import { useLang } from '../i18n/useLang'

export default function CookiePolicy() {
  const lang = useLang()
  return (
    <Page>
      <SEO
        title="Cookie Policy · LaplandLuxuryVillas"
        description="Cookie usage on laplandluxuryvillas.com. Default-denied analytics until consent given via the Finnish-flag banner. Operated by Lapeso Oy."
        canonicalPath="/cookie-policy"
      />
      <CookieContent siteName="LaplandLuxuryVillas" lang={lang} />
    </Page>
  )
}
