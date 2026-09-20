import { Link } from 'react-router-dom'
import { ArrowUpRight, BedDouble, CarFront, MoonStar, type LucideIcon } from 'lucide-react'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { villaBySlug } from '../lib/villas'
import { propertyForVilla, ctaPromisesProperty } from '../data/properties'
import { buildAffiliateUrl, gygProduct, gygSearch } from '../lib/affiliate'
import { creditFor } from '../data/photoCredits'
import PhotoCredit from './PhotoCredit'
import ProductRail, { type RailLang } from '../shared/ads/ProductRail'
import nordicnestRail from '../shared/ads/rails/nordicnest'
import nordicnestPicks from '../shared/ads/data/nordicnestPicks'

/**
 * StayPackages — three ready-made Lapland weeks, told as a story first.
 *
 * Vesa 2026-09-19, looking at the front page: *"luxus sivu ja kaksi eka
 * juttua on mainokset etusivulla, ei hyvä. mainokset pitää olla osa jotain
 * tällä sivulla, ei erillisinä juttuina, eli jokin story johon liitetty tämä.
 * Täällähän voisi olla sellaisia valmiita retkeilypaketteja joka sisältäisi
 * kaiken mitä tarvittaisiin, sama kun tehtiin Haltin kaupalle
 * laplandstore.fi sivulle, eli tuotettaisiin arvoa lukijalle."*
 *
 * The model is laplandstore's "Valmis kori" (5.9.2026): a scene in two
 * paragraphs first, and only then the rows and the buttons. Each week is
 * one villa from the collection, the car from the nearest airport and the
 * one evening worth booking before the flight. Every row is its own
 * measurable click (`package_<week>_stay|car|night`), and every link goes
 * through the redirect Worker to the partner's own page:
 *
 *   stay   /go/hotels with the property's Sembo/Trip.com ids (fi → Sembo,
 *          other languages → Trip.com; "view options" where the partner
 *          serving this language has no page for the property)
 *   car    /go/cars with the airport IATA (EconomyBookings pre-filled)
 *   night  /go/activities (GetYourGuide search or product) or, for the
 *          private chef, the site's own inquiry page: no partner sells it
 *
 * 🔴 Facts in the stories are the ones the villa pages already state
 * (Kakslauttanen "35-minute transfer from Ivalo", Arctic TreeHouse "five
 * minutes to Santa Claus Village", Levin Iglut "walking distance"), plus
 * Lake Inari being Finland's third-largest lake. Nothing here is a price,
 * a guarantee or a number the partner does not publish. The copy lives in
 * `copy.<lang>.home.packages`, twelve languages, number-gated against EN.
 *
 * 🔴 The Nordic Nest rail closes the section as "what comes home with you",
 * which is the only place on this page an interiors shop belongs: after a
 * week at a table set with Iittala. It renders only where the partner has
 * copy in the reader's language (fi/en) instead of falling back to English.
 */

type Night =
  | { kind: 'search'; q: string }
  | { kind: 'product'; path: string }
  | { kind: 'inquiry' }

interface PackageDef {
  key: string
  villa: string
  iata: string
  night: Night
  /**
   * A SECOND photograph of the same property, never the one the villa card
   * shows (Vesa 2026-09-20: *"sama kuva hero ja sivulla alempana, yksi kuva
   * vain yhden kerran"*). Measured on the live front page that day: three
   * Sembo frames each rendered twice, once in the collection grid and once
   * here. Same source and same licence line, a different frame of the hotel,
   * picked to carry this week's story: aurora through the glass roof, the
   * sauna for the Christmas week, the fireplace room for summer.
   */
  image: string
}

const PACKAGES: PackageDef[] = [
  {
    key: 'aurora',
    villa: 'star-arctic-suite',
    iata: 'IVL',
    // A specific product, not a search: Vesa 19.9.2026 clicked the search link and
    // landed on GetYourGuide's generic Lapland list ("ei tälläistä geneeristä paskaa").
    // Saariselkä private photo northern-lights tour, 6 h, verified 2026-08-01 in
    // shared/gyg/luxury.ts (LUXURY_PICKS).
    night: { kind: 'product', path: 'saariselka-l181615/saariselka-private-photo-northern-lights-tour-t1120345' },
    image: '/images/villas/starArctic-sembo-4.webp',
  },
  { key: 'christmas', villa: 'arctic-treehouse-suite', iata: 'RVN', night: { kind: 'inquiry' }, image: '/images/villas/arcticTreeHouse-sembo-3.webp' },
  {
    key: 'summer',
    villa: 'kakslauttanen-glass-igloo-suite',
    iata: 'IVL',
    // GetYourGuide product, verified 2026-08-01 in shared/gyg/luxury.ts.
    night: { kind: 'product', path: 'inari-l245909/inari-lake-inari-boat-tour-with-campfire-and-bbq-t1073872' },
    image: '/images/villas/kakslauttanen-sembo-2.webp',
  },
]

function Row({
  icon: Icon,
  label,
  name,
  sub,
  href,
  cta,
  external,
  nearby,
}: {
  icon: LucideIcon
  label: string
  name: string
  sub?: string
  href: string
  cta: string
  external: boolean
  nearby?: { href: string; label: string }
}) {
  const ctaClass =
    'lv-tap inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap text-[11px] tracking-[0.2em] uppercase font-body text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] no-underline'
  return (
    <li className="py-4 flex flex-wrap items-center gap-x-5 gap-y-1">
      <Icon size={20} strokeWidth={1.4} className="shrink-0 text-[color:var(--color-brass)]" aria-hidden="true" />
      <div className="min-w-0 flex-1 basis-56">
        <div className="eyebrow text-[10px]">{label}</div>
        <div className="mt-1 text-[color:var(--color-snow)] font-body text-base leading-snug">{name}</div>
        {sub && <div className="text-[color:var(--color-bone)]/70 font-body text-sm">{sub}</div>}
        {nearby && (
          <a href={nearby.href} target="_blank" rel="sponsored nofollow noopener" className="lv-tap mt-1 inline-flex min-h-11 items-center gap-1 text-[11px] tracking-[0.12em] uppercase font-body text-[color:var(--color-bone)]/70 hover:text-[color:var(--color-brass)] no-underline">
            {nearby.label}
            <ArrowUpRight size={11} aria-hidden="true" />
          </a>
        )}
      </div>
      {external ? (
        <a href={href} target="_blank" rel="sponsored nofollow noopener" className={ctaClass}>
          {cta}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      ) : (
        <Link to={href} className={ctaClass}>
          {cta}
          <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
      )}
    </li>
  )
}

export default function StayPackages() {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang]
  const p = c.home.packages
  const railCopy = nordicnestRail.copy[lang as RailLang]

  return (
    <section className="bg-[color:var(--color-deep-night)] py-14 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-7">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
            {p.h2}
          </h2>
          <p className="mt-5 text-[color:var(--color-bone)]/75 text-base sm:text-lg font-body leading-relaxed">{p.lede}</p>
        </div>

        <div className="space-y-14 md:space-y-24">
          {PACKAGES.map((pk, i) => {
            const t = p.items[i]
            const villa = villaBySlug(pk.villa, lang)
            if (!t || !villa) return null
            const property = propertyForVilla(villa.slug)
            const stayHref = property
              ? buildAffiliateUrl({
                  partner: 'hotels',
                  sid: `package_${pk.key}_stay`,
                  destination: property.city,
                  property: { sembo: property.sembo, trip: property.trip },
                  lang,
                })
              : villa.bookingUrl ?? to(`/villas/${villa.slug}`)
            const stayCta = ctaPromisesProperty(property, lang) ? c.cta.viewRates : c.cta.viewOptions
            const nearbyHref = property
              ? buildAffiliateUrl({ partner: 'hotels', sid: `package_${pk.key}_area`, destination: property.city, lang })
              : null
            const carHref = buildAffiliateUrl({ partner: 'cars', sid: `package_${pk.key}_car`, query: { pickup_location: pk.iata }, lang })
            const night = pk.night
            const nightHref =
              night.kind === 'search'
                ? gygSearch(`package_${pk.key}_night`, night.q, lang)
                : night.kind === 'product'
                  ? gygProduct(night.path, `package_${pk.key}_night`, lang)
                  : to('/private-inquiry')
            const nightCta = night.kind === 'inquiry' ? p.ctaNightInquiry : p.ctaNight
            const credit = creditFor(pk.image)
            const flip = i % 2 === 1

            return (
              <article key={pk.key} className="grid lg:grid-cols-2 gap-7 lg:gap-14 items-start">
                <div className={`relative aspect-[3/2] overflow-hidden ${flip ? 'lg:order-2' : ''}`} style={{ background: villa.imageGradient }}>
                  {pk.image && (
                    <img
                      src={pk.image}
                      alt={`${villa.name}, ${villa.destination}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <PhotoCredit credit={credit} />
                </div>

                <div className={flip ? 'lg:order-1' : ''}>
                  <span className="eyebrow">
                    {p.season}: {t.season}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl sm:text-4xl text-[color:var(--color-snow)] leading-tight">{t.title}</h3>
                  <p className="mt-5 text-[color:var(--color-bone)]/85 text-base sm:text-lg font-body leading-relaxed">{t.story[0]}</p>
                  <p className="mt-4 text-[color:var(--color-bone)]/85 text-base sm:text-lg font-body leading-relaxed">{t.story[1]}</p>

                  <ul className="mt-7 divide-y divide-[color:var(--color-mist)]/60 border-y border-[color:var(--color-mist)]/60">
                    <Row icon={BedDouble} label={p.stay} name={villa.name} sub={villa.destination} href={stayHref} cta={stayCta} external nearby={nearbyHref ? { href: nearbyHref, label: c.cta.nearbyStays } : undefined} />
                    <Row icon={CarFront} label={p.car} name={p.carFrom.replace('{airport}', t.airport)} href={carHref} cta={p.ctaCar} external />
                    <Row icon={MoonStar} label={p.night} name={t.night} href={nightHref} cta={nightCta} external={night.kind !== 'inquiry'} />
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        {railCopy && (
          <div className="mt-16 md:mt-24">
            <span className="eyebrow">{p.home}</span>
            <p className="mt-3 max-w-2xl text-[color:var(--color-bone)]/75 text-base font-body leading-relaxed">{p.homeLede}</p>
            <ProductRail
              partner={nordicnestRail}
              snapshot={nordicnestPicks}
              lang={lang as RailLang}
              sid="home_package_table"
              variant="dark"
              className="mt-6"
            />
          </div>
        )}
      </div>
    </section>
  )
}
