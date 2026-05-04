import { Link } from 'react-router-dom'
import { Sun, Calendar, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Page from '../components/Page'
import Hero from '../components/Hero'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'

const FACTS = [
  { value: '32', label: 'Days the sun never sets' },
  { value: '24h', label: 'Daylight at peak — Jun 21' },
  { value: '+18°C', label: 'Average daytime in late June' },
  { value: '50%', label: 'Lower demand than aurora-season' },
]

const REASONS = [
  {
    title: 'The architecture changes character.',
    body: 'The glass roofs that exist for the auroras now frame an unbroken sun. Skylight on the bed, sun on the lake, no need to draw a curtain — there is no night to hide.',
  },
  {
    title: 'The wilderness becomes accessible.',
    body: 'Lakes thaw, the boreal forest opens, the canoe routes appear. The same villa that you reached by snowmobile in February is now a five-minute boat ride from the dock.',
  },
  {
    title: 'The reserve villas open.',
    body: 'Octola, the private lakeside log estates and the architect chalets release the rest of their calendar. The 32-day window is the one time of year private chefs and helicopter charters quote shoulder rates.',
  },
  {
    title: 'No queues, no neighbours.',
    body: 'Lapland in summer sees a fraction of the winter visitor density. The wilderness footpath through the forest, the lookout from the fell — they are essentially yours.',
  },
]

export default function MidnightSun() {
  return (
    <Page fullBleed>
      <SEO
        title="Midnight Sun — Lapland Luxury Villas in 32 Days of Unbroken Light"
        description="Jun 6 – Jul 7: the 32-day window when the sun does not set in Lapland. The same villas you book for the auroras, in their summer character. Reserve estates, private chefs, half the demand."
        canonicalPath="/midnight-sun"
        keywords={['midnight sun lapland', 'lapland summer luxury villa', 'midnight sun villa finland', 'lapland 24 hour daylight', 'octola summer', 'lapland summer concierge']}
      />

      <Hero
        compact
        eyebrow="Jun 6 – Jul 7"
        title="The 32-day window when the sun never sets."
        lede="The same villas you came north for in February — different season, half the demand, the architecture changes character. Reserve villas open the rest of their calendar."
        primary={{ to: '/concierge', label: 'Inquire about June dates' }}
        secondary={{ to: '/villas', label: 'See the collection' }}
        imageUrl="/images/hero-midnight-sun.webp"
        imageAlt="A glass-roof Lapland villa in late-June midnight-sun light, lush green forest, lake unfrozen"
      />

      {/* FACTS BAND */}
      <section className="bg-[color:var(--color-onyx)] py-14 md:py-16 border-b border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FACTS.map((f) => (
            <div key={f.label} className="text-center">
              <div className="font-heading text-4xl md:text-5xl text-[#FFC95A] mb-2">{f.value}</div>
              <div className="eyebrow text-[color:var(--color-bone)]/65">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow text-[#FFC95A]">Four reasons</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              Lapland in summer is a separate place.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {REASONS.map((r, i) => (
              <div key={r.title}>
                <span className="font-heading text-3xl text-[color:var(--color-brass)]">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-2xl text-[color:var(--color-snow)] leading-tight mb-3">
                  {r.title}
                </h3>
                <p className="text-[color:var(--color-bone)]/75 font-body leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMER COLLECTION — purpose-shot summer imagery */}
      <section className="bg-[color:var(--color-onyx)] py-20 md:py-28 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow text-[#FFC95A]">The summer collection</span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
                Four villa characters, in summer light.
              </h2>
              <p className="mt-4 max-w-2xl text-[color:var(--color-bone)]/75 font-body leading-relaxed">
                The same architectural categories as the winter collection — glass-roof
                cabins, lakeside log estates, alpine chalets, forest villas — shot in
                late-June midnight-sun light to show the second half of the story.
              </p>
            </div>
            <Link to="/villas" className="hidden md:inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group">
              Full villa collection
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                slug: 'glass-roof',
                title: 'Glass-roof cabin in the green',
                copy: 'The aurora architecture in 23:00 golden light, surrounded by lush forest instead of snow.',
                img: '/images/summer-villa-glass.webp',
              },
              {
                slug: 'lakeside',
                title: 'Lakeside log estate',
                copy: 'Private bay on Lake Inari unfrozen — canoe at the dock, smoke from the wood-fired sauna.',
                img: '/images/summer-villa-lakeside.webp',
              },
              {
                slug: 'fell',
                title: 'Designer chalet on the fell',
                copy: 'Cotton-grass and wildflowers replace the ski slope — same panoramic glass facade.',
                img: '/images/summer-villa-fell.webp',
              },
              {
                slug: 'forest',
                title: 'Modern forest villa',
                copy: 'Cantilevered timber building deep in green boreal pine, golden midnight-sun warmth on the facade.',
                img: '/images/summer-villa-forest.webp',
              },
            ].map((c) => (
              <article key={c.slug} className="card-onyx flex flex-col h-full overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[color:var(--color-deep-night)]">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col p-7">
                  <h3 className="font-heading text-xl text-[color:var(--color-snow)] leading-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-bone)]/75 font-body leading-relaxed mb-5 flex-1">
                    {c.copy}
                  </p>
                  <Link
                    to="/concierge"
                    className="inline-flex items-center gap-2 self-start border border-[#FFC95A]/60 text-[#FFC95A] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[#FFC95A]/10 transition-colors"
                  >
                    Inquire for June dates
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING NOTE */}
      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-7 text-center">
          <Sun size={40} strokeWidth={1.4} className="mx-auto text-[#FFC95A] mb-6" />
          <h2 className="font-heading text-3xl sm:text-4xl text-[color:var(--color-snow)] leading-[1.1] mb-5">
            A note on planning a midnight-sun trip.
          </h2>
          <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-3">
            The 32-day window is short and the villas are individually owned —
            so the calendar fills opportunistically rather than evenly. Concierge
            holds a small allocation in the reserve estates each summer.
          </p>
          <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-10">
            The right time to inquire for a given June is between January and
            March of that year. Inquiries that come later are still worth sending
            — releases happen — but the high-end of the inventory often goes earlier.
          </p>
          <div className="inline-flex items-center gap-3 text-[color:var(--color-brass)] font-body text-sm">
            <Calendar size={14} />
            <span className="tracking-[0.18em] uppercase">Currently quoting summer 2026 + 2027</span>
          </div>
        </div>
      </section>

      <ConciergeBand
        title="Inquire about a midnight-sun trip."
        body="Send dates, headcount and any preferences. We reply within one working day with availability across the summer collection — including reserve villas not listed publicly."
      />

      <NewsletterSection />
    </Page>
  )
}
