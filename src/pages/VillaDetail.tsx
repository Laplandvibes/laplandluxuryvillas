import { useParams, Link, Navigate } from 'react-router-dom'
import { Bed, Users, MapPin, Check, ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import Page from '../components/Page'
import InquiryBand from '../components/InquiryBand'
import NewsletterSection from '../components/NewsletterSection'
import FeaturedPartnerSlot from '../components/FeaturedPartnerSlot'
import GoogleRatingRow from '../components/GoogleRatingRow'
import { propertyForVilla, ctaPromisesProperty } from '../data/properties'
import { villaBySlug, getVillas } from '../lib/villas'
import { formatRate, ratePriceRange } from '../lib/rate'
import { destinationBySlug } from '../lib/destinations'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'

export default function VillaDetail() {
  const { slug } = useParams<{ slug: string }>()
  const lang = useLang()
  const to = useLocalePath()
  const villa = slug ? villaBySlug(slug, lang) : undefined
  const c = COPY[lang]

  if (!villa) return <Navigate to={to('/villas')} replace />

  const inquiryOnly = villa.inquiryOnly || villa.tier === 'reserve'
  const dest = destinationBySlug(villa.destination.toLowerCase())
  // Undefined unless this villa carries a verified rate, in which case the key
  // is omitted from the LodgingBusiness node entirely. See lib/rate.ts.
  const priceRange = ratePriceRange(villa.fromPerNight)

  return (
    <Page>
      <SEO
        title={`${villa.name} · ${villa.destination} | LaplandLuxuryVillas`}
        description={villa.tagline}
        canonicalPath={`/villas/${villa.slug}`}
        keywords={[villa.name, villa.destination, 'lapland villa', c.category[villa.category]]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'LodgingBusiness',
            name: villa.name,
            description: `${villa.tagline} ${villa.copy[0]}`,
            address: { '@type': 'PostalAddress', addressLocality: villa.destination, addressCountry: 'FI' },
            ...(priceRange ? { priceRange } : {}),
            numberOfRooms: villa.bedrooms,
            amenityFeature: villa.signature.map((s) => ({ '@type': 'LocationFeatureSpecification', name: s })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: c.cta.home, item: 'https://laplandluxuryvillas.com/' },
              { '@type': 'ListItem', position: 2, name: c.cta.theCollection, item: 'https://laplandluxuryvillas.com/villas' },
              { '@type': 'ListItem', position: 3, name: villa.name, item: `https://laplandluxuryvillas.com/villas/${villa.slug}` },
            ],
          },
        ]}
      />

      {/* HERO */}
      <section
        className="relative w-full min-h-[60svh] md:min-h-[68svh] flex items-end overflow-hidden"
        style={{ background: villa.imageGradient }}
      >
        {villa.image && (
          <img
            src={villa.image}
            alt={`${villa.name}, ${villa.destination}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}
        {/* Same lightening as Hero.tsx / DestinationPage.tsx, 2026-08-01. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-deep-night)]/85 via-[color:var(--color-deep-night)]/35 to-transparent" />
        <div className="relative z-10 w-full mx-auto max-w-6xl px-5 sm:px-7 pb-14 md:pb-20">
          <Link
            to={to('/villas')}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-body text-[color:var(--color-bone)]/80 hover:text-[color:var(--color-brass)] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          >
            <ArrowLeft size={14} className="text-[color:var(--color-brass)]" /> {c.villaDetailPage.backLink}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="eyebrow inline-flex items-center px-2.5 py-1 bg-[color:var(--color-deep-night)]/85 backdrop-blur-sm text-[color:var(--color-brass)] border border-[color:var(--color-brass)]/30">
              {c.tier[villa.tier]}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[color:var(--color-bone)]/80 text-xs font-body tracking-[0.18em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              <MapPin size={13} className="text-[color:var(--color-brass)]" /> {villa.destination}
            </span>
            <span className="inline-flex items-center text-[color:var(--color-bone)]/80 text-xs font-body drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              {c.category[villa.category]}
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[color:var(--color-snow)] leading-[1.05] max-w-4xl break-words drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)]">
            {villa.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[color:var(--color-bone)]/90 font-body leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {villa.tagline}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-[color:var(--color-deep-night)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          {/* Myytävä Esittelykumppani-paikka. Tämä sivutyyppi (9 sivua) antoi
              nimetylle kohteelle koko leveän heron, H1:n ja kahden kappaleen
              esseen täysin ilmaiseksi eikä siinä ollut lainkaan mainos-
              inventaaria (Vesa 2026-07-26). Tyhjänä = kanoninen vaalea
              house-ad; muilla kuin fi/en/sv ei renderöidy mitään. */}
          <FeaturedPartnerSlot placement="villa_detail" locale={lang} />
        </div>
        <div className="mx-auto max-w-6xl px-5 sm:px-7 grid lg:grid-cols-[1.6fr,1fr] gap-12 lg:gap-16">
          <div className="space-y-6 text-[color:var(--color-bone)]/85 font-body text-base leading-relaxed">
            {/* Google's verdict on the property that contains this room type,
                scope stated in the row itself. NO editorial pick mark here: one
                villa is not a field, so `bestGoogleRated` would return null
                anyway and a mark would be claiming a comparison that never
                happened. */}
            <GoogleRatingRow property={propertyForVilla(villa.slug)} />
            <p>{villa.copy[0]}</p>
            <p>{villa.copy[1]}</p>
          </div>

          <aside className="card-onyx p-7 lg:sticky lg:top-28 self-start">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6 pb-6 border-b border-[color:var(--color-mist)]/40">
              <span className="inline-flex items-center gap-1.5 text-sm font-body text-[color:var(--color-bone)]/80">
                <Bed size={15} className="text-[color:var(--color-brass)]" />
                {villa.bedrooms} {villa.bedrooms === 1 ? c.villaDetailPage.bedroom : c.villaDetailPage.bedrooms}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-body text-[color:var(--color-bone)]/80">
                <Users size={15} className="text-[color:var(--color-brass)]" />
                {c.villaDetailPage.sleeps} {villa.sleeps}
              </span>
            </div>

            {villa.fromPerNight ? (
              <>
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-1">{c.villaDetailPage.fromPerNight}</div>
                <div className="font-heading text-4xl text-[color:var(--color-brass)] mb-2">
                  {formatRate(villa.fromPerNight, lang)}
                </div>
                <p className="text-xs text-[color:var(--color-bone)]/75 font-body mb-6">{c.villaDetailPage.nightlyHint}</p>
              </>
            ) : (
              <>
                <div className="eyebrow text-[color:var(--color-bone)]/75 mb-1">{c.villaDetailPage.rate}</div>
                <div className="font-heading text-3xl text-[color:var(--color-brass)] mb-2">{c.villaDetailPage.onRequest}</div>
                {/* `reserveHint` asserts the property is "never on a public
                    listing". That is true only for the two concierge-only
                    house-inventory entries. The other seven have a public
                    partner listing linked immediately below, so printing it
                    there would be a false statement. Both groups publish no
                    rate; only the reason differs. */}
                {inquiryOnly ? (
                  <p className="text-xs text-[color:var(--color-bone)]/75 font-body mb-6">{c.villaDetailPage.reserveHint}</p>
                ) : (
                  <div className="mb-6" />
                )}
              </>
            )}

            <div className="space-y-3">
              {inquiryOnly ? (
                <Link
                  to={to('/concierge')}
                  className="block w-full text-center bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-5 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
                >
                  {c.villaDetailPage.beginInquiry}
                </Link>
              ) : (
                <>
                  <a
                    href={villa.bookingUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="block w-full text-center bg-[color:var(--color-brass)] text-[color:var(--color-deep-night)] px-5 py-4 text-[12px] tracking-[0.22em] uppercase font-body font-medium hover:bg-[color:var(--color-brass-bright)] transition-colors"
                  >
                    {ctaPromisesProperty(propertyForVilla(villa.slug), lang)
                      ? c.villaDetailPage.viewRates
                      : c.cta.viewOptions}
                  </a>
                  <Link
                    to={to('/concierge')}
                    className="block w-full text-center border border-[color:var(--color-brass)]/70 text-[color:var(--color-brass)] px-5 py-4 text-[12px] tracking-[0.22em] uppercase font-body hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)] transition-colors"
                  >
                    {c.villaDetailPage.orSendInquiry}
                  </Link>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="bg-[color:var(--color-onyx)] py-16 md:py-24 border-t border-[color:var(--color-mist)]/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <span className="eyebrow">{c.villaDetailPage.signatureEyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1] mb-10 max-w-2xl">
            {c.villaDetailPage.signatureH2}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {villa.signature.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[color:var(--color-bone)]/85 font-body">
                <Check size={18} className="text-[color:var(--color-brass)] shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DESTINATION CONTEXT */}
      {dest && (
        <section className="bg-[color:var(--color-deep-night)] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-7 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <span className="eyebrow">{c.villaDetailPage.destinationEyebrow}</span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1] mb-5">
                {dest.name}
              </h2>
              <p className="text-[color:var(--color-bone)]/80 font-body leading-relaxed mb-6">{dest.position}</p>
              <p className="text-sm text-[color:var(--color-bone)]/65 font-body mb-3">
                <span className="text-[color:var(--color-brass)]">{c.badges.arrival} ·</span> {dest.arrival}
              </p>
              <p className="text-sm text-[color:var(--color-bone)]/65 font-body mb-8">
                <span className="text-[color:var(--color-brass)]">{c.badges.aurora} ·</span> {dest.auroraNote}
              </p>
              <Link
                to={to(`/destinations/${dest.slug}`)}
                className="inline-flex items-center gap-2 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.22em] uppercase font-body"
              >
                {c.villaDetailPage.readProfile(dest.name)}
              </Link>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden" style={{ background: dest.imageGradient }}>
              {dest.image && (
                <img src={dest.image} alt={dest.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              )}
            </div>
          </div>
        </section>
      )}

      <InquiryBand
        title={c.villaDetailPage.inquiryTitle(villa.destination)}
        body={c.villaDetailPage.inquiryBody}
      />

      {/* OTHER VILLAS */}
      <section className="bg-[color:var(--color-deep-night)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7">
          <span className="eyebrow">{c.villaDetailPage.alsoEyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1] mb-10">
            {c.villaDetailPage.alsoH2}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getVillas(lang).filter((v) => v.slug !== villa.slug)
              .slice(0, 3)
              .map((v) => (
                <article key={v.slug} className="card-onyx overflow-hidden">
                  <Link to={to(`/villas/${v.slug}`)} className="group block">
                    <div className="aspect-[4/3] w-full overflow-hidden" style={{ background: v.imageGradient }}>
                      {v.image && (
                        <img
                          src={v.image}
                          alt={`${v.name}, ${v.destination}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <span className="eyebrow text-[color:var(--color-brass)]">{v.destination}</span>
                      <h3 className="mt-2 font-heading text-xl text-[color:var(--color-snow)] transition-colors group-hover:text-[color:var(--color-brass)]">{v.name}</h3>
                      <p className="mt-3 text-sm text-[color:var(--color-bone)]/70 font-body">{v.tagline}</p>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </Page>
  )
}
