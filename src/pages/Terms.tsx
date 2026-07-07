import SEO from '../components/SEO'
import Page from '../components/Page'
import TermsContent from '../shared/Legal/TermsContent'
import { useLang } from '../i18n/useLang'

export default function Terms() {
  const lang = useLang()
  return (
    <Page>
      <SEO
        title="Terms of Service · LaplandLuxuryVillas"
        description="Terms governing use of laplandluxuryvillas.com. Operated by Lapeso Oy in Finland."
        canonicalPath="/terms"
      />
      <TermsContent siteName="LaplandLuxuryVillas" lang={lang} />
    </Page>
  )
}
