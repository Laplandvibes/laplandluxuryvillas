import { useParams, Navigate, Link } from 'react-router-dom'
import { Plane, Compass, ArrowLeft, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { destinationBySlug } from '../lib/destinations'
import { villasByDestination } from '../lib/villas'

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>()
  const dest = slug ? destinationBySlug(slug) : undefined

  if (!dest) return <Navigate to="/destinations" replace />

  const villas = villasByDestination(dest.name)

  return (
    <Page>
      <SEO
        title={`${dest.name}, Lapland — Private Villas, Suites & Aurora Logistics`}
        description={`${dest.position} ${dest.auroraNote}`}
        canonicalPath={`/destinations/${dest.slug}`}
        keywords={[dest.name, `${dest.name} luxury villa`, `${dest.name} aurora`, 'lapland luxury accommodation']}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: `${dest.name}, Finnish Lapland`,
            description: dest.position,
            url: `https://laplandluxuryvillas.com/destinations/${dest.slug}`,
            geo: { '@type': 'AdministrativeArea', addressCountry: 'FI' },
            includesAttraction: dest.highlights.map((h) => ({ '@type': 'TouristAttraction', name: h })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandluxuryvillas.com/' },
              { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://laplandluxuryvillas.com/destinations' },
              { '@type': 'ListItem', position: 3, name: dest.name, item: `https://laplandluxuryvillas.com/destinations/${dest.slug}` },
            ],
          },
        ]}
      />

      {/* HERO */}
      <section
        className="relative w-full min-h-[60svh] md:min-h-[68svh] flex items-end overflow-hidden"
        style={{ background: dest.imageGradient }}
      >
        {dest.image && (
          <img
            src={dest.image}
            alt={`${dest.name} — Finnish Lapland`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-deep-night)] via-[color:var(--color-deep-night)]/60 to-transparent -z-[5]" />
        <div className="relative w-full mx-auto max-w-6xl px-5 sm:px-7 pb-14 md:pb-20">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-body text-[color:var(--color-bone)]/65 hover:text-[color:var(--color-brass)] mb-8"
          >
            <ArrowLeft size={14} /> Destinations
          </Link>
          <span className="eyebrow text-[color:var(--color-brass)]">Destination · Finnish Lapland</span>
          <h1 className="mt-4 font-heading text-5xl sm:text-6xl md:text-7xl text-[color:var(--color-snow)] leading-[1.05]">
            {dest.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg sm:text-xl text-[color:var(--color-bone)]/85 font-body leading-relaxed">
            {dest.position}
          </p>
        </div>
      </section>

      {/* COPY + STATS */}
      <section className="bg-[color:var(--color-deep-night)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 grid lg:grid-cols-[1.6fr,1fr] gap-12 lg:gap-16">
          <div className="space-y-6 text-[color:var(--color-bone)]/85 font-body leading-relaxed">
            <p>{dest.copy[0]}</p>
            <p>{dest.copy[1]}</p>
          </div>
          <aside className="card-onyx p-7 self-start">
            <div className="space-y-6">
              <div>
                <div className="eyebrow text-[color:var(--color-bone)]/55 mb-2 inline-flex items-center gap-2">
                  <Plane size={12} /> Arrival
                </div>
                <p className="text-[color:var(--color-bone)]/85 font-body text-sm leading-relaxed">{dest.arrival}</p>
              </div>
              <div>
                <div className="eyebrow text-[color:var(--color-bone)]/55 mb-2 inline-flex items-center gap-2">
                  <Compass size={12} /> Aurora
                </div>
                <p className="text-[color:var(--color-bone)]/85 font-body text-sm leading-relaxed">{dest.auroraNote}</p>
              </div>
              <div>
                <div className="eyebrow text-[color:var(--color-bone)]/55 mb-2">Highlights</div>
                <ul className="space-y-2">
                  {dest.highlights.map((h) => (
                    <li key={h} className="text-[color:var(--color-bone)]/85 font-body text-sm leading-relaxed">
                      · {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* VILLAS IN THIS DESTINATION */}
      {villas.length > 0 && (
        <section className="bg-[color:var(--color-onyx)] py-16 md:py-24 border-y border-[color:var(--color-mist)]/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-7">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="eyebrow">Villas in {dest.name}</span>
                <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
                  {villas.length === 1 ? 'One villa anchored here.' : `${villas.length} villas anchored here.`}
                </h2>
              </div>
              <Link
                to="/villas"
                className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group"
              >
                Full collection
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {villas.map((v) => (
                <VillaCard key={v.slug} villa={v} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ConciergeBand
        title={`Plan a private ${dest.name} trip.`}
        body="Send dates, headcount and any preferences (private chef, helicopter arrival, exclusive use). We reply with a shortlist within one working day."
      />

      <NewsletterSection />
    </Page>
  )
}
