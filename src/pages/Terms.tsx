import SEO from '../components/SEO'
import Page from '../components/Page'
import TermsContent from '../shared/Legal/TermsContent'
import { useLang } from '../i18n/useLang'
import { getPageSeo } from '../lib/pageSeo'

export default function Terms() {
  const lang = useLang()
  const seo = getPageSeo('terms', lang)
  return (
    <Page>
      <SEO title={seo.title} description={seo.description} canonicalPath="/terms" />
      <TermsContent siteName="LaplandLuxuryVillas" lang={lang} />
    </Page>
  )
}
