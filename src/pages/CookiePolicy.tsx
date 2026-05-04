import SEO from '../components/SEO'
import Page from '../components/Page'
import CookieContent from '../../../shared/Legal/CookieContent'

export default function CookiePolicy() {
  return (
    <Page>
      <SEO
        title="Cookie Policy — LaplandLuxuryVillas"
        description="Cookie usage on laplandluxuryvillas.com. Default-denied analytics until consent given via the Finnish-flag banner. Operated by Lapeso Oy."
        canonicalPath="/cookie-policy"
      />
      <CookieContent siteName="LaplandLuxuryVillas" />
    </Page>
  )
}
