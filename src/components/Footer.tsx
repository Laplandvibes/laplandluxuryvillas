// Local Footer wraps the canonical 5-band Finnish-flag SharedFooter.
// Locale-aware: forwards FI / DE dict when visitor is on /fi/* or /de/*.
import SharedFooter from '../shared/Footer'
import type { FooterDict } from '../shared/Footer'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

const FOOTER_EXTRA_LEGAL_DEFS = [
  { key: 'about', enLabel: 'About', fiLabel: 'Tietoa', deLabel: 'Über uns', to: '/about' },
  { key: 'contact', enLabel: 'Contact', fiLabel: 'Yhteystiedot', deLabel: 'Kontakt', to: '/contact' },
] as const

const FI_DICT: FooterDict = {
  networkBadge: 'Suomen Lapin -verkosto',
  tagline: 'Lopullinen digitaalinen koti Suomen Lapin matkailulle.',
  groups: {
    stay: 'Majoitu',
    eatDrink: 'Syö & juo',
    do: 'Tee',
    explore: 'Tutustu',
    essentials: 'Olennaiset',
  },
  travelGuideKicker: 'Lapin matkaopas',
  about: {
    eyebrow: 'Tietoa LaplandVibesista',
    body: 'Lopullinen opas Suomen Lappiin, revontulista yöttömään yöhön. Käsin valitut elämykset, paikalliset vinkit ja käytännön perustiedot arktisen matkasi suunnitteluun.',
    badge: 'Riippumattomasti ylläpidetty · lähteet näkyvillä',
  },
  spottedError: {
    title: 'Huomasitko virheen?',
    body: 'Näitkö jotain mikä kaipaa korjausta? Kerro meille, korjaamme heti.',
    cta: 'Ilmoita virheestä →',
  },
  partner: {
    title: 'Tee yhteistyötä kanssamme',
    body: 'Mainosta tai tee yhteistyötä 21+ Lapin sivustolla.',
    cta: 'Ota yhteyttä →',
  },
  press: {
    title: 'Lehdistö & media',
    body: 'Toimitukselliset yhteistyöt ja lehdistömateriaalit.',
    cta: 'Lehdistötiedustelut →',
  },
  affiliate:
    'Tämä sivusto sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandVibes saa pienen provision ilman lisäkustannuksia sinulle.',
  copyright: '© {{year}} #LaplandVibes. Osa #LaplandVibes-verkostoa',
  websiteBy: 'Sivusto: Yrityspaketit.fi',
  legal: {
    privacy: 'Tietosuoja',
    cookie: 'Evästekäytäntö',
    terms: 'Käyttöehdot',
    contact: 'Yhteystiedot',
  },
}

const DE_DICT: FooterDict = {
  networkBadge: 'Finnisch-Lappland-Netzwerk',
  tagline: 'Das definitive digitale Zuhause für Reisen in Finnisch-Lappland.',
  groups: {
    stay: 'Übernachten',
    eatDrink: 'Essen & Trinken',
    do: 'Erleben',
    explore: 'Entdecken',
    essentials: 'Wesentliches',
  },
  travelGuideKicker: 'Lappland-Reiseführer',
  about: {
    eyebrow: 'Über LaplandVibes',
    body: 'Der definitive Leitfaden für Finnisch-Lappland, von den Polarlichtern bis zur Mitternachtssonne. Kuratierte Erlebnisse, Insider-Tipps und alles für die Planung Ihres arktischen Abenteuers.',
    badge: 'Unabhängig gepflegt · Quellen sichtbar',
  },
  spottedError: {
    title: 'Einen Fehler entdeckt?',
    body: 'Sehen Sie etwas, das korrigiert werden sollte? Sagen Sie es uns, wir bessern es sofort aus.',
    cta: 'Fehler melden →',
  },
  partner: {
    title: 'Mit uns zusammenarbeiten',
    body: 'Werben oder kollaborieren Sie 27 Lappland-Websites hinweg.',
    cta: 'Kontakt aufnehmen →',
  },
  press: {
    title: 'Presse & Medien',
    body: 'Redaktionelle Partnerschaften und Pressekits.',
    cta: 'Presseanfragen →',
  },
  affiliate:
    'Diese Seite enthält Partner-Links. Wenn Sie über diese Links buchen, erhält LaplandVibes möglicherweise eine Provision ohne Mehrkosten für Sie.',
  copyright: '© {{year}} #LaplandVibes. Teil des #LaplandVibes-Netzwerks',
  websiteBy: 'Website von Yrityspaketit.fi',
  legal: {
    privacy: 'Datenschutz',
    cookie: 'Cookie-Richtlinie',
    terms: 'Nutzungsbedingungen',
    contact: 'Kontakt',
  },
}

export default function Footer() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]

  const pillarLinks = c.footerPillars.map((p) => ({ name: p.name, href: to(p.href) }))
  const extraLegal = FOOTER_EXTRA_LEGAL_DEFS.map((d) => ({
    to: to(d.to),
    label: lang === 'fi' ? d.fiLabel : lang === 'de' ? d.deLabel : d.enLabel,
  }))
  const dict: FooterDict | undefined = lang === 'fi' ? FI_DICT : lang === 'de' ? DE_DICT : undefined

  return (
    <SharedFooter
      pillarLinks={pillarLinks}
      editorialNote={c.footerNote}
      extraLegalLinks={extraLegal}
      dict={dict}
    />
  )
}
