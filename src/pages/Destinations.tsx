import { Link } from 'react-router-dom'
import { ArrowUpRight, Plane, Compass } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { DESTINATIONS } from '../lib/destinations'

export default function Destinations() {
  return (
    <Page fullBleed>
      <SEO
        title="Where to Stay in Lapland — Five Destinations Worth the Journey"
        description="Saariselkä, Inari, Rovaniemi, Levi, Ylläs — the five Lapland destinations that justify a luxury journey. Aurora-statistics, arrival logistics, and the villas concentrated in each."
        canonicalPath="/destinations"
        keywords={['where to stay lapland', 'best lapland destination', 'saariselka luxury', 'inari aurora', 'rovaniemi private villa', 'levi chalet']}
      />

      <Hero
        compact
        eyebrow="Destinations"
        title="Five places, each with a clear reason to be there."
        lede="Lapland is not interchangeable. The aurora frequency, arrival logistics and accommodation density change meaningfully every 50 km north of the Arctic Circle."
      />

      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 space-y-20 md:space-y-24">
          {DESTINATIONS.map((d, i) => (
            <article
              key={d.slug}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div
                className="aspect-[5/4] w-full overflow-hidden"
                style={{ background: d.imageGradient }}
              >
                {d.image && (
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <span className="eyebrow">Destination 0{i + 1}</span>
                <h2 className="mt-4 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.05] mb-5">
                  {d.name}
                </h2>
                <p className="text-[color:var(--color-bone)]/85 font-body leading-relaxed mb-6">
                  {d.position}
                </p>
                <ul className="text-sm text-[color:var(--color-bone)]/70 font-body space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <Plane size={14} className="text-[color:var(--color-brass)] mt-1 shrink-0" />
                    <span><span className="text-[color:var(--color-brass)]">Arrival ·</span> {d.arrival}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass size={14} className="text-[color:var(--color-brass)] mt-1 shrink-0" />
                    <span><span className="text-[color:var(--color-brass)]">Aurora ·</span> {d.auroraNote}</span>
                  </li>
                </ul>
                <Link
                  to={`/destinations/${d.slug}`}
                  className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group"
                >
                  Read the {d.name} profile
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConciergeBand />
      <NewsletterSection />
    </Page>
  )
}
