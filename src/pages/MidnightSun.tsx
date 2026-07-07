import { Link } from 'react-router-dom'
import { Sun, Calendar, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Page from '../components/Page'
import Hero from '../components/Hero'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

export default function MidnightSun() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const seo = getPageSeo('midnight-sun', lang)

  const summerImgs = [
    '/images/summer-villa-glass.webp',
    '/images/summer-villa-lakeside.webp',
    '/images/summer-villa-fell.webp',
    '/images/summer-villa-forest.webp',
  ]

  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/midnight-sun"
        keywords={['midnight sun lapland', 'lapland summer luxury villa', 'midnight sun villa finland', 'lapland 24 hour daylight', 'lapland summer concierge']}
      />

      <Hero
        compact
        eyebrow={c.hero.midnightSun.eyebrow}
        title={c.hero.midnightSun.title}
        lede={c.hero.midnightSun.lede}
        primary={{ to: to('/concierge'), label: c.hero.midnightSun.primary }}
        secondary={{ to: to('/villas'), label: c.hero.midnightSun.secondary }}
        imageUrl="/images/hero-midnight-sun.webp"
        imageAlt="A glass-roof Lapland villa in late-June midnight-sun light, lush green forest, lake unfrozen"
      />

      {/* FACTS BAND */}
      <section className="bg-[color:var(--color-onyx)] py-14 md:py-16 border-b border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 grid grid-cols-2 md:grid-cols-4 gap-8">
          {c.midnightSunPage.facts.map((f) => (
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
            <span className="eyebrow text-[#FFC95A]">{c.midnightSunPage.fourReasons}</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              {c.midnightSunPage.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {c.midnightSunPage.reasons.map((r, i) => (
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

      {/* SUMMER COLLECTION */}
      <section className="bg-[color:var(--color-onyx)] py-20 md:py-28 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow text-[#FFC95A]">{c.midnightSunPage.summerCollection.eyebrow}</span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
                {c.midnightSunPage.summerCollection.h2}
              </h2>
              <p className="mt-4 max-w-2xl text-[color:var(--color-bone)]/75 font-body leading-relaxed">
                {c.midnightSunPage.summerCollection.lede}
              </p>
            </div>
            <Link
              to={to('/villas')}
              className="hidden md:inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group"
            >
              {c.cta.fullVillaCollection}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {c.midnightSunPage.summerCollection.cards.map((card, idx) => (
              <article key={card.title} className="card-onyx flex flex-col h-full overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[color:var(--color-deep-night)]">
                  <img
                    src={summerImgs[idx]}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col p-7">
                  <h3 className="font-heading text-xl text-[color:var(--color-snow)] leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-bone)]/75 font-body leading-relaxed mb-5 flex-1">
                    {card.copy}
                  </p>
                  <Link
                    to={to('/concierge')}
                    className="inline-flex items-center gap-2 self-start border border-[#FFC95A]/60 text-[#FFC95A] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[#FFC95A]/10 transition-colors"
                  >
                    {c.cta.inquireAboutJuneShort}
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
            {c.midnightSunPage.planning.h2}
          </h2>
          <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-3">
            {c.midnightSunPage.planning.p1}
          </p>
          <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-10">
            {c.midnightSunPage.planning.p2}
          </p>
          <div className="inline-flex items-center gap-3 text-[color:var(--color-brass)] font-body text-sm">
            <Calendar size={14} />
            <span className="tracking-[0.18em] uppercase">{c.midnightSunPage.planning.quoting}</span>
          </div>
        </div>
      </section>

      <ConciergeBand title={c.midnightSunPage.conciergeTitle} body={c.midnightSunPage.conciergeBody} />

      <NewsletterSection />
    </Page>
  )
}
