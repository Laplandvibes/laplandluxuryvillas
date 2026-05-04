import { useState } from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { VILLAS, type Villa } from '../lib/villas'

const FILTERS: { id: 'all' | Villa['category']; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'glass-roof', label: 'Glass-roof' },
  { id: 'log-estate', label: 'Log Estate' },
  { id: 'designer-suite', label: 'Designer Suite' },
  { id: 'alpine-chalet', label: 'Alpine Chalet' },
  { id: 'lakeside-retreat', label: 'Lakeside' },
]

export default function Villas() {
  const [filter, setFilter] = useState<typeof FILTERS[number]['id']>('all')
  const list = filter === 'all' ? VILLAS : VILLAS.filter((v) => v.category === filter)

  return (
    <Page fullBleed>
      <SEO
        title="The Collection — Lapland Luxury Villas, Glass Cabins & Estates"
        description="A short, curated list of Lapland's finest private villas: glass-roof aurora cabins, lakeside log estates, designer suites, alpine chalets. From €460/night to concierge-only reserve estates."
        canonicalPath="/villas"
        keywords={['lapland villa rental', 'glass roof villa lapland', 'private villa finland', 'aurora cabin lapland', 'kakslauttanen', 'octola']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Lapland Luxury Villa Collection',
          url: 'https://laplandluxuryvillas.com/villas',
          inLanguage: 'en',
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
        eyebrow="The Collection"
        title="Ten villas. Five destinations. One private inquiry."
        lede="Every property below has been visited in the last twelve months. Filter by the kind of building you have in mind — or send a private inquiry and we'll shortlist around your dates."
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
            <p className="text-center text-[color:var(--color-bone)]/65 font-body">No villas in that category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {list.map((v) => (
                <VillaCard key={v.slug} villa={v} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ConciergeBand
        title="Don't see the right fit?"
        body="The collection above is what's currently published. We hold additional villas privately — including reserve properties with no public listing — and quote those directly on inquiry."
      />

      <NewsletterSection />
    </Page>
  )
}
