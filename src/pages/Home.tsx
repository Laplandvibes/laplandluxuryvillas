import { Link } from 'react-router-dom'
import { ArrowUpRight, Star, ShieldCheck, Compass } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import MidnightSunBand from '../components/MidnightSunBand'
import NewsletterSection from '../components/NewsletterSection'
import { signatureVillas } from '../lib/villas'
import { DESTINATIONS } from '../lib/destinations'

const PHILOSOPHY = [
  {
    icon: Star,
    title: 'A short list, not a directory.',
    body: 'Ten villas and suites we know personally, in the destinations that actually justify the journey. We turn down properties more often than we add them — every entry on this page is one we would book ourselves.',
  },
  {
    icon: ShieldCheck,
    title: 'Anonymous trip-planning.',
    body: 'A single private inbox, no public profile, no shared calendars with third parties. Send dates, headcount, preferences — receive a curated shortlist within one working day.',
  },
  {
    icon: Compass,
    title: 'Direct rates, where they exist.',
    body: 'Public listings link to verified rates. Properties we hold privately — including reserve villas with no public availability — are quoted directly. We tell you which is which on the inquiry reply.',
  },
]

export default function Home() {
  const villas = signatureVillas()

  return (
    <Page fullBleed>
      <SEO
        title="Lapland Luxury Villas: Private Aurora Residences & Suites"
        description="A private collection of Lapland's finest villas and suites — glass-roof retreats, lakeside log estates, designer aurora residences. Anonymous concierge, direct rates on request."
        canonicalPath="/"
        keywords={[
          'lapland luxury villas',
          'private villa lapland',
          'glass roof villa finland',
          'aurora villa lapland',
          'finnish lapland luxury cabin',
          'private chalet lapland',
          'octola private wilderness',
          'kakslauttanen private villa',
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'LaplandLuxuryVillas',
            url: 'https://laplandluxuryvillas.com',
            logo: 'https://laplandluxuryvillas.com/favicon.svg',
            email: 'private@laplandvibes.com',
            parentOrganization: {
              '@type': 'Organization',
              name: 'Lapeso Oy',
              url: 'https://laplandvibes.com',
            },
            sameAs: [
              'https://laplandvibes.com',
              'https://laplandstays.com',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://laplandluxuryvillas.com',
            name: 'LaplandLuxuryVillas',
            inLanguage: 'en',
            publisher: { '@type': 'Organization', name: 'Lapeso Oy' },
          },
        ]}
      />

      <Hero
        eyebrow="The Private Collection"
        title="Finland's Lapland — quietly, at the top of the market."
        lede="A short, curated selection of glass-roof villas, lakeside log estates and designer aurora suites across Saariselkä, Inari, Rovaniemi and the Lapland fells. Concierge-led, anonymous, direct rates on request."
        primary={{ to: '/villas', label: 'Browse the collection' }}
        secondary={{ to: '/concierge', label: 'Begin a private inquiry' }}
        imageUrl="/images/hero-villa.webp"
        imageAlt="A single glass-roof aurora villa in a snow-covered Lapland forest at twilight"
      />

      {/* PHILOSOPHY */}
      <section className="bg-[color:var(--color-deep-night)] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              The opposite of a booking platform.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {PHILOSOPHY.map((p) => (
              <div key={p.title} className="text-center md:text-left">
                <p.icon size={32} strokeWidth={1.4} className="mx-auto md:mx-0 text-[color:var(--color-brass)]" />
                <h3 className="mt-6 font-heading text-2xl text-[color:var(--color-snow)] leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-[color:var(--color-bone)]/75 text-sm sm:text-base font-body leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hair-rule mx-auto max-w-6xl" />

      {/* SIGNATURE VILLAS */}
      <section className="bg-[color:var(--color-deep-night)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Signature villas</span>
              <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
                Four anchors of the Lapland collection.
              </h2>
              <p className="mt-5 text-[color:var(--color-bone)]/75 text-base font-body leading-relaxed">
                The properties we recommend most often. Each one has been visited
                in the last twelve months — every detail below is verified, not
                copied from a brochure.
              </p>
            </div>
            <Link
              to="/villas"
              className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group whitespace-nowrap"
            >
              Full collection
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {villas.map((v) => (
              <VillaCard key={v.slug} villa={v} />
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS RAIL */}
      <section className="bg-[color:var(--color-onyx)] py-24 md:py-32 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow">Destinations</span>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              Five places, each with a clear reason.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="group card-onyx p-6 flex flex-col"
              >
                <div
                  className="aspect-[4/5] -mx-6 -mt-6 mb-5 overflow-hidden"
                  style={{ background: d.imageGradient }}
                >
                  {d.image && (
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <h3 className="font-heading text-2xl text-[color:var(--color-snow)] mb-2 group-hover:text-[color:var(--color-brass)] transition-colors">
                  {d.name}
                </h3>
                <p className="text-[color:var(--color-bone)]/70 text-sm font-body leading-relaxed flex-1">
                  {d.position}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase font-body text-[color:var(--color-brass)]">
                  Read profile
                  <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONCIERGE BAND */}
      <ConciergeBand />

      {/* MIDNIGHT SUN */}
      <MidnightSunBand />

      {/* NEWSLETTER */}
      <NewsletterSection />
    </Page>
  )
}
