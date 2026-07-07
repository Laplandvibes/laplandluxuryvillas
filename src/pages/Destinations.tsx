import { Link } from 'react-router-dom'
import { ArrowUpRight, Plane, Compass } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { getDestinations } from '../lib/destinations'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

export default function Destinations() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const seo = getPageSeo('destinations', lang)
  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/destinations"
        keywords={['where to stay lapland', 'best lapland destination', 'saariselka luxury', 'inari aurora', 'rovaniemi private villa', 'levi chalet']}
      />

      <Hero
        compact
        eyebrow={c.hero.destinations.eyebrow}
        title={c.hero.destinations.title}
        lede={c.hero.destinations.lede}
        imageUrl="/images/hero-destinations.webp"
        imageAlt="Wide cinematic Lapland twilight landscape with low fells and a frozen lake"
      />

      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 space-y-20 md:space-y-24">
          {getDestinations(lang).map((d, i) => (
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
                <span className="eyebrow">{c.destinationsPage.destinationLabel(i)}</span>
                <h2 className="mt-4 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.05] mb-5">
                  {d.name}
                </h2>
                <p className="text-[color:var(--color-bone)]/85 font-body leading-relaxed mb-6">
                  {d.position}
                </p>
                <ul className="text-sm text-[color:var(--color-bone)]/70 font-body space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <Plane size={14} className="text-[color:var(--color-brass)] mt-1 shrink-0" />
                    <span>
                      <span className="text-[color:var(--color-brass)]">{c.badges.arrival} ·</span> {d.arrival}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass size={14} className="text-[color:var(--color-brass)] mt-1 shrink-0" />
                    <span>
                      <span className="text-[color:var(--color-brass)]">{c.badges.aurora} ·</span> {d.auroraNote}
                    </span>
                  </li>
                </ul>
                <Link
                  to={to(`/destinations/${d.slug}`)}
                  className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group"
                >
                  {c.destinationsPage.readTheProfile(d.name)}
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
