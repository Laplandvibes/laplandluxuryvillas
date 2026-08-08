import SEO from '../components/SEO'
import Page from '../components/Page'
import PrivacyContent from '../shared/Legal/PrivacyContent'
import InquiryPrivacy from '../components/InquiryPrivacy'
import { useLang } from '../i18n/useLang'
import { getPageSeo } from '../lib/pageSeo'

export default function PrivacyPolicy() {
  const lang = useLang()
  const seo = getPageSeo('privacy', lang)
  return (
    <Page>
      <SEO title={seo.title} description={seo.description} canonicalPath="/privacy" />
      <PrivacyContent siteName="LaplandLuxuryVillas" lang={lang} />
      {/* Site-specific: the shared policy covers what every LV site does, and
          said nothing about this site's own private-enquiry form. See the
          component header for why this is not in shared/Legal. */}
      <InquiryPrivacy />
    </Page>
  )
}
