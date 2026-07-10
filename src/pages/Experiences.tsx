import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import ConciergeBand from '../components/ConciergeBand'
import NewsletterSection from '../components/NewsletterSection'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import { experiencesByCategory } from '../lib/experiences'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

export default function Experiences() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const seo = getPageSeo('experiences', lang)
  const localeForPrice = lang === 'de' ? 'de-DE' : lang === 'fi' ? 'fi-FI' : 'en-GB'

  const SECTIONS: { id: 'aurora' | 'wilderness' | 'culinary' | 'arrival'; title: string; intro: string }[] = [
    { id: 'aurora', title: c.experiencesPage.sections.aurora.title, intro: c.experiencesPage.sections.aurora.intro },
    { id: 'wilderness', title: c.experiencesPage.sections.wilderness.title, intro: c.experiencesPage.sections.wilderness.intro },
    { id: 'culinary', title: c.experiencesPage.sections.culinary.title, intro: c.experiencesPage.sections.culinary.intro },
    { id: 'arrival', title: c.experiencesPage.sections.arrival.title, intro: c.experiencesPage.sections.arrival.intro },
  ]

  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/experiences"
        keywords={['private aurora tour lapland', 'helicopter aurora flight', 'lapland private chef', 'private husky safari', 'lapland luxury experiences', 'private snowmobile lapland']}
      />

      <Hero
        compact
        eyebrow={c.hero.experiences.eyebrow}
        title={c.hero.experiences.title}
        lede={c.hero.experiences.lede}
        imageUrl="/images/hero-experiences.webp"
        imageAlt="A wood-fired sauna interior with low warm light"
      />

      {SECTIONS.map((s, sectionIdx) => {
        const items = experiencesByCategory(s.id, lang)
        if (items.length === 0) return null
        return (
          <section
            key={s.id}
            id={s.id}
            className={`py-20 md:py-28 ${
              sectionIdx % 2 === 0
                ? 'bg-[color:var(--color-deep-night)]'
                : 'bg-[color:var(--color-onyx)] border-y border-[color:var(--color-mist)]/60'
            }`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-7">
              <div className="max-w-3xl mb-12">
                <span className="eyebrow">
                  0{sectionIdx + 1} · {s.title}
                </span>
                <h2 className="mt-4 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1] mb-5">
                  {s.title}
                </h2>
                <p className="text-[color:var(--color-bone)]/75 font-body leading-relaxed">{s.intro}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {items.map((e) => (
                  <article key={e.slug} className="card-onyx flex flex-col h-full overflow-hidden">
                    <div className="aspect-[16/9] w-full overflow-hidden" style={{ background: e.imageGradient }}>
                      {/* Real Picsart photo (gpt-image-2 16:9, 2026-07-08); the
                          gradient stays as the fallback if the file is missing. */}
                      <img
                        src={`/images/experiences/${e.slug}.webp`}
                        alt={e.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={1536}
                        height={864}
                        onError={(ev) => { ev.currentTarget.style.display = 'none' }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-7">
                      <h3 className="font-heading text-2xl text-[color:var(--color-snow)] leading-tight mb-3">{e.name}</h3>
                      <p className="text-[color:var(--color-bone)]/80 font-body text-sm leading-relaxed mb-5">{e.hook}</p>
                      <div className="flex items-start gap-2 text-xs text-[color:var(--color-bone)]/55 font-body mb-5">
                        <MapPin size={13} className="text-[color:var(--color-brass)] mt-0.5" />
                        <span>{e.available}</span>
                      </div>
                      <p className="text-sm text-[color:var(--color-bone)]/75 font-body leading-relaxed mb-6 flex-1">
                        {e.copy[0]}
                      </p>
                      <div className="mt-auto flex items-end justify-between gap-4 pt-5 border-t border-[color:var(--color-mist)]/40">
                        <div>
                          {e.fromPerPerson ? (
                            <>
                              <div className="eyebrow text-[color:var(--color-bone)]/55 mb-0.5">{c.badges.fromPerPerson}</div>
                              <div className="font-heading text-2xl text-[color:var(--color-brass)]">
                                €{e.fromPerPerson.toLocaleString(localeForPrice)}
                              </div>
                            </>
                          ) : e.fromPerGroup ? (
                            <>
                              <div className="eyebrow text-[color:var(--color-bone)]/55 mb-0.5">{c.badges.fromPerGroup}</div>
                              <div className="font-heading text-2xl text-[color:var(--color-brass)]">
                                €{e.fromPerGroup.toLocaleString(localeForPrice)}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="eyebrow text-[color:var(--color-bone)]/55 mb-0.5">{c.badges.rate}</div>
                              <div className="font-heading text-lg text-[color:var(--color-brass)]">{c.badges.onRequest}</div>
                            </>
                          )}
                        </div>
                        {e.conciergeOnly || !e.bookingUrl ? (
                          <Link
                            to={to('/concierge')}
                            className="inline-flex items-center gap-2 border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
                          >
                            {c.cta.inquire}
                            <ArrowUpRight size={13} />
                          </Link>
                        ) : (
                          <a
                            href={e.bookingUrl}
                            target="_blank"
                            rel="sponsored nofollow noopener"
                            className="inline-flex items-center gap-2 bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass-bright)] transition-colors"
                          >
                            {c.cta.viewOptions}
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-[color:var(--color-deep-night)] py-10">
        <AffiliateDisclosure variant="full" />
      </section>

      <ConciergeBand />
      <NewsletterSection />
    </Page>
  )
}
