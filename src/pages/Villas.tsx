import { useState } from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import InquiryBand from '../components/InquiryBand'
import PartnerStayAd from '../components/PartnerStayAd'
import CabinCarousel from '../components/CabinCarousel'
import NewsletterSection from '../components/NewsletterSection'
import FeaturedPartnerSlot from '../components/FeaturedPartnerSlot'
import { propertyForVilla, bestGoogleRated, editorialPickNote } from '../data/properties'
import { getVillas, type Villa } from '../lib/villas'
import { ratePriceRange } from '../lib/rate'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'
import { withCounts } from '../lib/copyCounts'

export default function Villas() {
  const lang = useLang()
  const c = COPY[lang]
  const seo = getPageSeo('villas', lang)
  const VILLAS = getVillas(lang)
  // 🔴 DERIVED FROM THE COLLECTION, never a hand-written list (2026-08-02).
  // The chips used to be hard-coded. When the two unnamed house-inventory
  // entries were removed, `log-estate` and `alpine-chalet` became empty and
  // the page still offered both — a chip that answers "no villas in this
  // category yet" reads as inventory we have but are not showing, which is
  // the same false impression this whole pass exists to remove.
  const CATEGORY_ORDER: { id: Villa['category']; label: string }[] = [
    { id: 'glass-roof', label: c.villasPage.filters.glassRoof },
    { id: 'log-estate', label: c.villasPage.filters.logEstate },
    { id: 'designer-suite', label: c.villasPage.filters.designerSuite },
    { id: 'alpine-chalet', label: c.villasPage.filters.alpineChalet },
    { id: 'lakeside-retreat', label: c.villasPage.filters.lakeside },
  ]
  const FILTERS: { id: 'all' | Villa['category']; label: string }[] = [
    { id: 'all', label: c.villasPage.filters.all },
    ...CATEGORY_ORDER.filter((f) => VILLAS.some((v) => v.category === f.id)),
  ]
  const [filter, setFilter] = useState<'all' | Villa['category']>('all')
  const list = filter === 'all' ? VILLAS : VILLAS.filter((v) => v.category === filter)
  // Derived from the CURRENTLY VISIBLE list, not the whole collection: the mark
  // claims "highest rated on this page", and the category filter changes what
  // that page is. Filtering down to a single rated villa correctly drops the
  // mark rather than crowning an unopposed card.
  const villaPick = bestGoogleRated(list.map((v) => propertyForVilla(v.slug)))
  const villaPickNote = editorialPickNote(c.editorial, villaPick, lang)

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
                // Omitted entirely unless a verified rate exists. See lib/rate.ts.
                ...(ratePriceRange(v.fromPerNight) ? { priceRange: ratePriceRange(v.fromPerNight) } : {}),
              },
            })),
          },
        }}
      />

      <Hero
        compact
        eyebrow={withCounts(c.hero.villas.eyebrow)}
        title={withCounts(c.hero.villas.title)}
        lede={withCounts(c.hero.villas.lede)}
        imageUrl="/images/summer-villa-forest.webp"
        imageAlt="A luxury Lapland villa set among tall green summer forest, floor-to-ceiling glass framing the sunlit trees"
      />

      {/* EDITORIAL LEAD — same COPY block the prerenderer harvests through
          routes.json copyKey "villasPage", so reader and crawler get one text. */}
      <section className="bg-[color:var(--color-deep-night)] pt-14 md:pt-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-7">
          <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-bone)]">{c.villasPage.leadTitle}</h2>
          <p className="mt-5 font-body text-[color:var(--color-bone)]/75 leading-relaxed">{c.villasPage.leadP1}</p>
          <p className="mt-4 font-body text-[color:var(--color-bone)]/75 leading-relaxed">{c.villasPage.leadP2}</p>
        </div>
      </section>

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
          {/* Myytävä Esittelykumppani-paikka koko kokoelman kärjessä
              (KKV: merkitty mainokseksi). Tyhjänä = kanoninen vaalea house-ad;
              muilla kuin fi/en/sv ei renderöidy mitään eikä ruudukkoon jää
              aukkoa. */}
          <FeaturedPartnerSlot placement="villas_collection" locale={lang} />

          {list.length === 0 ? (
            <p className="text-center text-[color:var(--color-bone)]/65 font-body">{c.villasPage.noVillas}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {list.map((v) => (
                <VillaCard key={v.slug} villa={v} pickProperty={villaPick} pickNote={villaPickNote} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partner stay — Lomarengas whole-cabin alternative (brand-skinned ad). */}
      <section className="bg-[color:var(--color-onyx)] py-16 md:py-24 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-4xl px-5 sm:px-7">
          <PartnerStayAd sid="villas_collection" />
          <CabinCarousel sid={"villas_collection"} />
        </div>
      </section>

      <InquiryBand title={c.villasPage.inquiryTitle} body={c.villasPage.inquiryBody} />

      <NewsletterSection />
    </Page>
  )
}
