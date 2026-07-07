import SEO from '../components/SEO'
import Page from '../components/Page'
import PrivacyContent from '../shared/Legal/PrivacyContent'
import { useLang } from '../i18n/useLang'

export default function PrivacyPolicy() {
  const lang = useLang()
  return (
    <Page>
      <SEO
        title="Privacy Policy · LaplandLuxuryVillas"
        description="How LaplandLuxuryVillas (operated by Lapeso Oy) handles your data: GDPR-compliant, no concierge-form data stored on our servers, EU-only processors."
        canonicalPath="/privacy"
      />
      <PrivacyContent siteName="LaplandLuxuryVillas" lang={lang} />
    </Page>
  )
}
