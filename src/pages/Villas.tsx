import { useState } from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import PartnerStayAd from '../components/PartnerStayAd'
import NewsletterSection from '../components/NewsletterSection'
import { getVillas, type Villa } from '../lib/villas'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

export default function Villas() {
  const lang = useLang()
  const c = COPY[lang]
  const seo = getPageSeo('villas', lang)
  const FILTERS: { id: 'all' | Villa['category']; label: string }[] = [
    { id: 'all', label: c.villasPage.filters.all },
    { id: 'glass-roof', label: c.villasPage.filters.glassRoof },
    { id: 'log-estate', label: c.villasPage.filters.logEstate },
    { id: 'designer-suite', label: c.villasPage.filters.designerSuite },
    { id: 'alpine-chalet', label: c.villasPage.filters.alpineChalet },
    { id: 'lakeside-retreat', label: c.villasPage.filters.lakeside },
  ]
  const [filter, setFilter] = useState<typeof FILTERS[number]['id']>('all')
  const VILLAS = getVillas(lang)
  const list = filter === 'all' ? VILLAS : VILLAS.filter((v) => v.category === filter)

  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/villas"
        keywords={['lapland villa rental', 'glass roof villa lapland', 'private villa finland', 'aurora cabin lapland', 'kakslauttanen']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Lapland Luxury Villa Collection',
          url: 'https://laplandluxuryvillas.com/villas',
          inLanguage: lang === 'fi' ? 'fi' : lang === 'de' ? 'de' : 'en',
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: VILLAS.length,
            itemListElement: VILLAS.map((v, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'LodgingBusiness',
                name: v.name,
                description: v.tagline,
                address: { '@type': 'PostalAddress', addressLocality: v.destination, addressCountry: 'FI' },
                priceRange: v.fromPerNight ? `€${v.fromPerNight}+/night` : 'On request',
              },
            })),
          },
        }}
      />

      <Hero
        compact
        eyebrow={c.hero.villas.eyebrow}
        title={c.hero.villas.title}
        lede={c.hero.villas.lede}
        imageUrl="/images/summer-villa-forest.webp"
        imageAlt="A luxury Lapland villa set among tall green summer forest, floor-to-ceiling glass framing the sunlit trees"
      />

      {/* FILTER BAR */}
      <section className="bg-[color:var(--color-deep-night)] py-10 md:py-12 border-b border-[color:var(--color-mist)]/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body border transition-colors ${
                  filter === f.id
                    ? 'bg-[color:var(--color-brass)] border-[color:var(--color-brass)] text-[color:var(--color-deep-night)]'
                    : 'border-[color:var(--color-mist)] text-[color:var(--color-bone)]/75 hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          {list.length === 0 ? (
            <p className="text-center text-[color:var(--color-bone)]/65 font-body">{c.villasPage.noVillas}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {list.map((v) => (
                <VillaCard key={v.slug} villa={v} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partner stay — Lomarengas whole-cabin alternative (brand-skinned ad). */}
      <section className="bg-[color:var(--color-onyx)] py-16 md:py-24 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-4xl px-5 sm:px-7">
          <PartnerStayAd sid="villas_collection" />
        </div>
      </section>

      <ConciergeBand title={c.villasPage.conciergeTitle} body={c.villasPage.conciergeBody} />

      <NewsletterSection />
    </Page>
  )
}
