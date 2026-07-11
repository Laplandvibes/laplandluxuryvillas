import { Link } from 'react-router-dom'
import { ArrowUpRight, Star, ShieldCheck, Compass } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import ConciergeBand from '../components/ConciergeBand'
import MidnightSunBand from '../components/MidnightSunBand'
import NewsletterSection from '../components/NewsletterSection'
import FAQ, { VILLA_FAQ_BY_LANG } from '../components/FAQ'
import RelatedSites from '../components/RelatedSites'
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots'
import { AD_SLOTS } from '../data/adSlots'
import { signatureVillas } from '../lib/villas'
import { getDestinations } from '../lib/destinations'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'

export default function Home() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const villas = signatureVillas(lang)
  const PHILOSOPHY_ICONS = [Star, ShieldCheck, Compass]
  const seo = getPageSeo('home', lang)

  return (
    <Page fullBleed>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/"
        keywords={[
          'lapland luxury villas',
          'private villa lapland',
          'glass roof villa finland',
          'aurora villa lapland',
          'finnish lapland luxury cabin',
          'private chalet lapland',
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
            sameAs: ['https://laplandvibes.com', 'https://laplandstays.com'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://laplandluxuryvillas.com',
            name: 'LaplandLuxuryVillas',
            inLanguage: lang === 'fi' ? 'fi' : lang === 'de' ? 'de' : 'en',
            publisher: { '@type': 'Organization', name: 'Lapeso Oy' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: VILLA_FAQ_BY_LANG[lang].map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <Hero
        eyebrow={c.hero.home.eyebrow}
        title={c.hero.home.title}
        lede={c.hero.home.lede}
        primary={{ to: to('/villas'), label: c.hero.home.primary }}
        secondary={{ to: to('/concierge'), label: c.hero.home.secondary }}
        imageUrl="/images/summer-villa-lakeside.webp"
        imageAlt="A glass-walled luxury villa on a still Lapland lakeshore in summer, green forest and open water under soft northern light"
        imgObjectPosition="20% 50%"
      />

      {/* PÄÄKUMPPANI-banneri heti heron alla — sivun paras mainospaikka,
          tyhjänä kompakti house-ad → LV Media -portaali */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} className="bg-[color:var(--color-deep-night)]" />

      {/* PHILOSOPHY */}
      <section className="bg-[color:var(--color-deep-night)] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">{c.home.philosophy.eyebrow}</span>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              {c.home.philosophy.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {c.home.philosophy.items.map((p, i) => {
              const Icon = PHILOSOPHY_ICONS[i]
              return (
                <div key={p.title} className="text-center md:text-left">
                  <Icon size={32} strokeWidth={1.4} className="mx-auto md:mx-0 text-[color:var(--color-brass)]" />
                  <h3 className="mt-6 font-heading text-2xl text-[color:var(--color-snow)] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[color:var(--color-bone)]/75 text-sm sm:text-base font-body leading-relaxed">
                    {p.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kumppaniosio ylhäällä (jaettu malli, Vesa 2026-07-11): kakkospääkumppani +
          6 premium-paikkaa — pääkumppanit eivät näy vierekkäin (banneri ↑) */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} className="bg-[color:var(--color-deep-night)]" />

      <hr className="hair-rule mx-auto max-w-6xl" />

      {/* SIGNATURE VILLAS */}
      <section className="bg-[color:var(--color-deep-night)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">{c.home.signature.eyebrow}</span>
              <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
                {c.home.signature.h2}
              </h2>
              <p className="mt-5 text-[color:var(--color-bone)]/75 text-base font-body leading-relaxed">
                {c.home.signature.lede}
              </p>
            </div>
            <Link
              to={to('/villas')}
              className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group whitespace-nowrap"
            >
              {c.cta.fullCollection}
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
            <span className="eyebrow">{c.home.destinations.eyebrow}</span>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              {c.home.destinations.h2}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {getDestinations(lang).map((d) => (
              <Link
                key={d.slug}
                to={to(`/destinations/${d.slug}`)}
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
                  {c.cta.readProfile}
                  <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConciergeBand />

      <MidnightSunBand />

      <FAQ />

      <RelatedSites />

      <NewsletterSection />
    </Page>
  )
}
