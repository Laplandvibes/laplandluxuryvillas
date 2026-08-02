import SEO from '../components/SEO'
import Page from '../components/Page'
import PrivacyContent from '../shared/Legal/PrivacyContent'
import InquiryPrivacy from '../components/InquiryPrivacy'
import { useLang } from '../i18n/useLang'

export default function PrivacyPolicy() {
  const lang = useLang()
  return (
    <Page>
      <SEO
        title="Privacy Policy · LaplandLuxuryVillas"
        description="How LaplandLuxuryVillas (operated by Lapeso Oy) handles your data: GDPR-compliant, EU-only processors, and exactly what happens to a private concierge inquiry."
        canonicalPath="/privacy"
      />
      <PrivacyContent siteName="LaplandLuxuryVillas" lang={lang} />
      {/* Site-specific: the shared policy covers what every LV site does, and
          said nothing about this site's own concierge funnel. See the component
          header for why this is not in shared/Legal. */}
      <InquiryPrivacy />
    </Page>
  )
}
