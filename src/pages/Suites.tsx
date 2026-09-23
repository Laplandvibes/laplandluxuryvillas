import SEO from '../components/SEO'
import Hero from '../components/Hero'
import PhotoCredit from '../components/PhotoCredit'
import { creditFor } from '../data/photoCredits'
import { seasonal } from '../lib/season'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import InquiryBand from '../components/InquiryBand'
import NewsletterSection from '../components/NewsletterSection'
import FeaturedPartnerSlot from '../components/FeaturedPartnerSlot'
import LaplandObjects from '../components/LaplandObjects'
import { propertyForVilla, bestGoogleRated, editorialPickNote } from '../data/properties'
import { getVillas } from '../lib/villas'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

// Real photographs since 23.9.2026 (were launch-commit AI renders): the season
// decides, same switch as the front page and the share card. Receipts in
// src/data/photoCredits.ts.
const HERO_WINTER = '/images/commons/hero-suites-winter.webp'
const HERO_SUMMER = '/images/commons/hero-suites-summer.webp'

export default function Suites() {
  const lang = useLang()
  const c = COPY[lang]
  const seo = getPageSeo('suites', lang)
  const SUITES = getVillas(lang).filter(
    (v) => v.category === 'designer-suite' || v.category === 'glass-roof'
  )
  // Scoped to this page's own field, so the winner here can differ from the one
  // on /villas. That is the point: the claim is "highest rated on this page".
  const villaPick = bestGoogleRated(SUITES.map((v) => propertyForVilla(v.slug)))
  const villaPickNote = editorialPickNote(c.editorial, villaPick, lang)
  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/suites"
        keywords={['lapland suite', 'glass roof bedroom finland', 'designer suite lapland', 'star arctic suite', 'arctic treehouse', 'levin iglut', 'aurora village']}
      />

      <Hero
        compact
        eyebrow={c.hero.suites.eyebrow}
        title={c.hero.suites.title}
        lede={c.hero.suites.lede}
        imageUrl={seasonal(HERO_WINTER, HERO_SUMMER)}
        imageAlt={seasonal(
          'Green aurora arching over frozen Lake Inari on a March evening',
          'Sunlit birch slope of Saana fell above Kilpisjärvi at midsummer',
        )}
        scrim={seasonal('default', 'strong')}
        credit={<PhotoCredit credit={creditFor(seasonal(HERO_WINTER, HERO_SUMMER))} />}
      />

      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 mb-12">
          <p className="text-[color:var(--color-bone)]/85 font-body text-base sm:text-lg leading-relaxed max-w-3xl">
            {c.suitesPage.intro.p1Pre}
            <em className="text-[color:var(--color-brass)] not-italic">{c.suitesPage.intro.designerSuite}</em>
            {c.suitesPage.intro.p1Mid}
            <em className="text-[color:var(--color-brass)] not-italic">{c.suitesPage.intro.glassRoof}</em>
            {c.suitesPage.intro.p1Post}
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          {/* Myytävä Esittelykumppani-paikka sviittiruudukon kärjessä
              (KKV: merkitty mainokseksi). Tämä sivu oli aiemmin KOKONAAN ilman
              mainosinventaaria vaikka se esittelee kuutta nimettyä kohdetta. */}
          <FeaturedPartnerSlot placement="suites" locale={lang} />

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {SUITES.map((v) => (
              <VillaCard key={v.slug} villa={v} pickProperty={villaPick} pickNote={villaPickNote} startImage={1} />
            ))}
          </div>
        </div>
      </section>

      {/* 🔴 Esineet TÄSSÄ, kuutta kohdetta esittelevän ruudukon jälkeen ja
          ennen tiedustelunauhaa (Vesa 12.8.). Lukija on juuri katsonut mihin
          hän majoittuu; se on ainoa hetki jolloin villaan kuuluva huopa on
          kiinnostava eikä keskeytys. */}
      <LaplandObjects />

      <InquiryBand title={c.suitesPage.inquiryTitle} body={c.suitesPage.inquiryBody} />

      <NewsletterSection />
    </Page>
  )
}
