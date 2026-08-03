import { useParams, Navigate, Link } from 'react-router-dom'
import { Plane, Compass, ArrowLeft, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Page from '../components/Page'
import VillaCard from '../components/VillaCard'
import InquiryBand from '../components/InquiryBand'
import PartnerStayAd from '../components/PartnerStayAd'
import CabinCarousel from '../components/CabinCarousel'
import DestinationFacts from '../components/DestinationFacts'
import DestinationFaq, { destinationFaqItems } from '../components/DestinationFaq'
import { DestinationLocator, DestinationSeason, DestinationExperiences } from '../components/DestinationPlanner'
import { SECTION_LABELS, s } from '../lib/destinationSections.i18n'
import RelatedSites from '../components/RelatedSites'
import NewsletterSection from '../components/NewsletterSection'
import FeaturedPartnerSlot from '../components/FeaturedPartnerSlot'
import { propertyForVilla, bestGoogleRated, editorialPickNote } from '../data/properties'
import { destinationBySlug } from '../lib/destinations'
import { villasByDestination } from '../lib/villas'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { getDestinationTitleSuffix } from '../lib/pageSeo'

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>()
  const lang = useLang()
  const dest = slug ? destinationBySlug(slug, lang) : undefined
  const to = useLocalePath()
  const c = COPY[lang]

  if (!dest) return <Navigate to={to('/destinations')} replace />

  const villas = villasByDestination(dest.name, lang)
  // Most destinations list only one or two villas, so `bestGoogleRated` returns
  // null here more often than not — correct, and left alone: a mark awarded to
  // an unopposed card would claim a comparison that never happened.
  const villaPick = bestGoogleRated(villas.map((v) => propertyForVilla(v.slug)))
  const villaPickNote = editorialPickNote(c.editorial, villaPick, lang)
  // Built once: the visible list and the FAQPage schema must be the same text.
  const faqItems = destinationFaqItems(dest.slug, lang)

  return (
    <Page>
      <SEO
        title={`${dest.name} · ${getDestinationTitleSuffix(lang)}`}
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
              { '@type': 'ListItem', position: 1, name: c.cta.home, item: 'https://laplandluxuryvillas.com/' },
              { '@type': 'ListItem', position: 2, name: c.destinationPage.backLink, item: 'https://laplandluxuryvillas.com/destinations' },
              { '@type': 'ListItem', position: 3, name: dest.name, item: `https://laplandluxuryvillas.com/destinations/${dest.slug}` },
            ],
          },
          ...(faqItems.length
            ? [{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqItems.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }]
            : []),
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
            alt={`${dest.name}, Finnish Lapland`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Lightened with Hero.tsx 2026-08-01: `from-deep-night` at full opacity
            buried the bottom half of the photograph, and the headline sits on
            its own drop-shadow anyway. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-deep-night)]/85 via-[color:var(--color-deep-night)]/35 to-transparent" />
        <div className="relative z-10 w-full mx-auto max-w-6xl px-5 sm:px-7 pb-14 md:pb-20">
          {/* 🔴 `flex w-fit`, not `inline-flex`: the eyebrow below is an inline
              <span>, so an inline-level back link sat on the SAME line as it
              and the hero read "← KOHTEETKOHDE · SUOMEN LAPPI" (Vesa 2026-08-02).
              `mb-8` cannot separate two inline boxes on one line. VillaDetail
              only escaped this because a block <div> follows its link; both
              heroes now use the same shape so it cannot come back. */}
          <Link
            to={to('/destinations')}
            className="flex w-fit items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-body text-[color:var(--color-bone)]/80 hover:text-[color:var(--color-brass)] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          >
            <ArrowLeft size={14} className="text-[color:var(--color-brass)]" /> {c.destinationPage.backLink}
          </Link>
          {/* Same 1.48:1 contrast failure as Hero.tsx, same fix — the eyebrow
              sits on a photograph here too (Vesa 2026-08-03). `w-fit` keeps the
              plate the width of the words instead of the column. */}
          <span className="eyebrow inline-flex w-fit items-center px-3 py-1.5 rounded-sm bg-[color:var(--color-deep-night)]/85 backdrop-blur-sm border border-[color:var(--color-brass)]/30 text-[color:var(--color-brass)]">{c.destinationPage.eyebrow}</span>
          <h1 className="mt-4 font-heading text-4xl sm:text-6xl md:text-7xl text-[color:var(--color-snow)] leading-[1.05] break-words drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)]">
            {dest.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg sm:text-xl text-[color:var(--color-bone)]/90 font-body leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
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
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-2 inline-flex items-center gap-2">
                  <Plane size={12} /> {c.destinationPage.arrival}
                </div>
                <p className="text-[color:var(--color-bone)]/85 font-body text-sm leading-relaxed">{dest.arrival}</p>
              </div>
              <div>
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-2 inline-flex items-center gap-2">
                  <Compass size={12} /> {c.destinationPage.aurora}
                </div>
                <p className="text-[color:var(--color-bone)]/85 font-body text-sm leading-relaxed">{dest.auroraNote}</p>
              </div>
              <div>
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-2">{c.destinationPage.highlights}</div>
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

      {/* 🔴 Vesa 2026-08-02, asked what these pages still lacked, put images
          first: "vain hero on kuva". Two frames of the same country in its two
          opposite lights — which is also what the seasonal band below is
          about, so the picture and the data argue the same point.

          Decorative (alt=""): the caption states the season, the section under
          it states the light in hours, and neither needs a screen reader to
          hear a description of a photograph. */}
      <section className="bg-[color:var(--color-deep-night)] pb-4 md:pb-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            {([['winter', s(SECTION_LABELS.capWinter, lang)], ['summer', s(SECTION_LABELS.capSummer, lang)]] as const).map(([season, caption]) => (
              <figure key={season} className="m-0">
                <div className="aspect-[16/10] overflow-hidden bg-[color:var(--color-onyx)]">
                  <img
                    src={`/images/dest-${dest.slug}-${season}.webp`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {caption && (
                  <figcaption className="mt-2 text-[11px] tracking-[0.14em] uppercase font-body text-[color:var(--color-bone)]/60">
                    {caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Sourced facts from the network's per-municipality registry. Added
          2026-08-01: the page had two paragraphs and a sidebar and nothing a
          reader could check, which is what "ei tietoa ja ihan keskeneräiset"
          meant. Every number here links to the official page it came from. */}
      <DestinationFacts slug={dest.slug} />

      {/* Where it sits, and when to come — the other two things Vesa named. */}
      <DestinationLocator slug={dest.slug} />
      <DestinationSeason slug={dest.slug} />

      {/* VILLAS IN THIS DESTINATION */}
      {villas.length > 0 && (
        <section className="bg-[color:var(--color-onyx)] py-16 md:py-24 border-y border-[color:var(--color-mist)]/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-7">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="eyebrow">{c.badges.villasIn(dest.name)}</span>
                <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
                  {c.destinationPage.villasHereH2(villas.length)}
                </h2>
              </div>
              <Link
                to={to('/villas')}
                className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body group"
              >
                {c.destinationPage.fullCollection}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            {/* Myytävä Esittelykumppani-paikka kohteen villalistan kärjessä
                (KKV: merkitty mainokseksi). Tyhjänä = kanoninen vaalea
                house-ad; muilla kuin fi/en/sv ei renderöidy mitään. */}
            <FeaturedPartnerSlot placement="destination_villas" locale={lang} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {villas.map((v) => (
                <VillaCard key={v.slug} villa={v} pickProperty={villaPick} pickNote={villaPickNote} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Something to actually book in the place itself. Until now "highlights"
          was a list of words with no link behind any of them. */}
      <DestinationExperiences slug={dest.slug} name={dest.name} />

      {/* Partner stay — Lomarengas whole-cabin alternative (covers all of Lapland). */}
      <section className="bg-[color:var(--color-deep-night)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-7">
          <PartnerStayAd sid={`destination_${dest.slug}`} />
          <CabinCarousel sid={`destination_${dest.slug}`} />
        </div>
      </section>

      <InquiryBand title={c.destinationPage.inquiryTitle(dest.name)} body={c.destinationPage.inquiryBody} />

      {/* Sibling sites, including family itineraries and aurora activities —
          a destination page is where a reader wants the rest of the trip. */}
      {/* Generated from the facts registry, so an answer cannot drift out of
          step with the number it restates. Same array feeds the JSON-LD. */}
      <DestinationFaq slug={dest.slug} />

      <RelatedSites />

      <NewsletterSection />
    </Page>
  )
}
