import { Link } from 'react-router-dom'
import { ArrowUpRight, Star, ShieldCheck, Compass } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import StayPackages from '../components/StayPackages'
import InquiryBand from '../components/InquiryBand'
import MidnightSunBand from '../components/MidnightSunBand'
import NewsletterSection from '../components/NewsletterSection'
import FAQ, { VILLA_FAQ_BY_LANG } from '../components/FAQ'
import RelatedSites from '../components/RelatedSites'
import PhotoCredit from '../components/PhotoCredit'
import HomeAdSlots from '../shared/HomeAdSlots'
import FeaturedPartnerSlot from '../components/FeaturedPartnerSlot'
import { AD_SLOTS } from '../data/adSlots'
import { propertyForVilla, bestGoogleRated, editorialPickNote } from '../data/properties'
import { creditFor } from '../data/photoCredits'
import { signatureVillas } from '../lib/villas'
import { getDestinations } from '../lib/destinations'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getPageSeo } from '../lib/pageSeo'
import { withCounts } from '../lib/copyCounts'
import { AppPromoHero } from '../components/AppPromo'
import { seasonal } from '../lib/season'

/**
 * Front page order (Vesa 16.9. laplandstays, 18.9. stayinlapland, 19.9. here):
 * the screen under the hero is what the reader came for, with pictures;
 * ads are part of a story, never a block of their own; the site's own
 * "how this works" talk goes to the bottom. Before 19.9.2026 the order was
 * hero → philosophy → app promo → Nordic Nest rail → villas, so the first
 * villa card sat 2 635 px down a 1280 px screen (measured live 19.9.).
 */
const WINTER_HERO = '/images/commons/hero-winter-saariselka-aurora.webp'
// The summer hero is the render Vesa approved on 2026-09-12; there is no own
// summer frame of a lakeside villa in the July pool (KUVA-INVENTAARIO).
const SUMMER_HERO = '/images/summer-villa-lakeside.webp'

export default function Home() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const villas = signatureVillas(lang)
  // Earned, derived, unpurchasable: the best real Google rating among the
  // properties behind these four cards. Every card prints its own rating and
  // links to Google's review list, so the claim is checkable on the spot.
  const villaPick = bestGoogleRated(villas.map((v) => propertyForVilla(v.slug)))
  const villaPickNote = editorialPickNote(c.editorial, villaPick, lang)
  const PHILOSOPHY_ICONS = [Star, ShieldCheck, Compass]
  const seo = getPageSeo('home', lang)
  const heroImage = seasonal(WINTER_HERO, SUMMER_HERO)
  const heroCredit = creditFor(heroImage)

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
              name: 'LaPeso Oy',
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
            publisher: { '@type': 'Organization', name: 'LaPeso Oy' },
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
        eyebrow={withCounts(c.hero.home.eyebrow)}
        title={withCounts(c.hero.home.title)}
        lede={withCounts(c.hero.home.lede)}
        primary={{ to: to('/villas'), label: c.hero.home.primary }}
        secondary={{ to: to('/private-inquiry'), label: c.hero.home.secondary }}
        imageUrl={heroImage}
        imageAlt={seasonal(
          c.photo.heroWinter,
          'A glass-walled luxury villa on a still Lapland lakeshore in summer, green forest and open water under soft northern light',
        )}
        imgObjectPosition={seasonal('50% 60%', '20% 50%')}
        // The summer frame is a bright sky over open water and the winter one is
        // a night aurora, so they need different washes to carry the same words.
        scrim={seasonal('default', 'strong')}
        credit={<PhotoCredit credit={heroCredit} />}
      />

      {/* SIGNATURE VILLAS — first thing under the hero, two wide cards per row.
          Four narrow towers (278 px wide, 712 px tall at 1280, measured live
          19.9.2026; Vesa: "liian kapeat") became a 2×2 grid of ~600 px cards
          with a 3:2 photograph. Onyx band so the dark cards separate from the
          page (Vesa 2.8. "tarvitaan jotain kontrastia"). */}
      <section className="bg-[color:var(--color-onyx)] py-14 sm:py-20 md:py-32 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-9 sm:mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">{c.home.signature.eyebrow}</span>
              <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
                {c.home.signature.h2}
              </h2>
              <p className="mt-5 text-[color:var(--color-bone)]/75 text-base font-body leading-relaxed">
                {c.home.signature.lede}
              </p>
            </div>
            <Link
              to={to('/villas')}
              className="lv-tap inline-flex min-h-11 items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group whitespace-nowrap"
            >
              {c.cta.fullCollection}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Myytävä Esittelykumppani-paikka signature-ruudukon kärjessä
              (KKV: merkitty mainokseksi). Tyhjänä = kanoninen vaalea house-ad;
              muilla kuin fi/en/sv ei renderöidy mitään eikä ruudukkoon jää
              aukkoa. */}
          <FeaturedPartnerSlot placement="home_signature" locale={lang} />

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {villas.map((v) => (
              <VillaCard key={v.slug} villa={v} pickProperty={villaPick} pickNote={villaPickNote} />
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS RAIL */}
      <section className="bg-[color:var(--color-onyx)] py-14 sm:py-20 md:py-32 border-y border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-14">
            <span className="eyebrow">{c.home.destinations.eyebrow}</span>
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              {c.home.destinations.h2}
            </h2>
          </div>

          {/* 🔴 TWO COLUMNS ON THE PHONE (Vesa 2026-08-02: the home page is too
              long on mobile). Measured at 375×812 before this change: five
              full-width cards with a 4:5 image = 3 511 px, 4.3 screens, for 71
              words. Two columns and a shallower image on the phone bring the
              same five destinations into ~1.6 screens with nothing removed. */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {getDestinations(lang).map((d) => (
              <Link
                key={d.slug}
                to={to(`/destinations/${d.slug}`)}
                className="group card-onyx p-4 sm:p-6 flex flex-col"
              >
                <div
                  className="relative aspect-[3/2] sm:aspect-[4/5] -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 sm:mb-5 overflow-hidden"
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
                  <PhotoCredit credit={creditFor(d.image)} />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-[color:var(--color-snow)] mb-2 group-hover:text-[color:var(--color-brass)] transition-colors">
                  {d.name}
                </h3>
                <p className="text-[color:var(--color-bone)]/70 text-[13px] sm:text-sm font-body leading-relaxed flex-1">
                  {d.position}
                </p>
                <span className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase font-body text-[color:var(--color-brass)]">
                  {c.cta.readProfile}
                  <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* READY-MADE WEEKS — the villa, the car and the one evening, told as a
          story; the Nordic Nest rail closes it as "what comes home with you".
          This is where the page's partner links live now, inside content. */}
      <StayPackages />

      <InquiryBand />

      <MidnightSunBand />

      <FAQ />

      {/* HOW THIS WORKS — the site talking about itself, kept, but at the end:
          "a sentence whose subject is this site or we is removed from the top
          of the page" (feedback_etusivun_karki_sisalto_ensin). */}
      <section className="bg-[color:var(--color-deep-night)] py-14 sm:py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="eyebrow">{c.home.philosophy.eyebrow}</span>
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
              {c.home.philosophy.h2}
            </h2>
          </div>
          {/* Three columns only from lg: the live layout gate measured 205–249 px cards at
              768–900 px with every title wrapping (asettelu-portti 19.9.2026). */}
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {c.home.philosophy.items.map((p, i) => {
              const Icon = PHILOSOPHY_ICONS[i]
              return (
                <div key={p.title} className="text-center md:text-left">
                  <Icon size={32} strokeWidth={1.4} className="mx-auto md:mx-0 text-[color:var(--color-brass)]" />
                  <h3 className="mt-6 font-heading text-2xl text-[color:var(--color-snow)] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[color:var(--color-bone)]/75 text-sm sm:text-base font-body leading-relaxed">
                    {withCounts(p.body)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* App launch block and the sold partner slots, after the content
          (network order since laplandstays ef91439, 17.9.2026). */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppPromoHero />
      </div>
      <HomeAdSlots config={AD_SLOTS} locale={lang} className="bg-[color:var(--color-deep-night)]" />

      <RelatedSites />

      <NewsletterSection />
    </Page>
  )
}
