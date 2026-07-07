import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { getVillas } from '../lib/villas'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

export default function Suites() {
  const lang = useLang()
  const c = COPY[lang]
  const seo = getPageSeo('suites', lang)
  const SUITES = getVillas(lang).filter(
    (v) => v.category === 'designer-suite' || v.category === 'glass-roof'
  )
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
        imageUrl="/images/hero-suites.webp"
        imageAlt="A single glass-walled designer suite at twilight, low king bed under a panoramic ceiling"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SUITES.map((v) => (
              <VillaCard key={v.slug} villa={v} />
            ))}
          </div>
        </div>
      </section>

      <ConciergeBand title={c.suitesPage.conciergeTitle} body={c.suitesPage.conciergeBody} />

      <NewsletterSection />
    </Page>
  )
}
