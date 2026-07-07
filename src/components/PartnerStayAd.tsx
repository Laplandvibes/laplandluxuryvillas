import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Home, Flame } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'

// ─────────────────────────────────────────────────────────────────────────────
// PartnerStayAd — brand-skinned affiliate ad for the DIRECT-LINK stay partner
// Lomarengas (Finland's largest holiday-cottage agency). Its Adtraction tracking
// link is the public deep-link from _affiliate/affiliate-links.json (carries the
// laplandvibes.com channel as=2086870803; the Adtraction t/t URL has no client
// SID slot, so the placement lives only in the GA4 affiliate_click event).
//
// premium_design_standard §6 + affiliate_ad_creative_process: each ad wears the
// ADVERTISER's own brand — real logo + their accent colour — as a clearly-labelled
// "Mainos / Ad" unit. This site's idiom is DARK luxury (onyx + champagne brass),
// so the card sits as a distinct framed unit on the dark page with Lomarengas
// GREEN as the partner accent (top rule, icon, trust dots, CTA) so it still reads
// as an authentic partner placement that belongs here, not a re-skin of our brand.
// The offer is EVERGREEN and accurate (whole-cabin rental, private lakeside sauna,
// thousands across Lapland — no time-limited promo hardcoded, no invented stats),
// per the affiliate creative rule.
//
// Angle for THIS audience (luxury villas / women / lifestyle): when the villa
// collection is fully booked, or a group wants the whole place to themselves with
// their own private shore sauna, a hand-picked cottage is the warm alternative —
// the whole house, not a hotel room.
//
// Required affiliate attributes (LV spec): target="_blank"
// rel="sponsored nofollow noopener" — NO noreferrer (the Worker / CJ attribution
// reads Referer; kept consistent across every affiliate <a>).
// ─────────────────────────────────────────────────────────────────────────────

type PartnerKey = 'lomarengas'

interface PartnerConfig {
  brand: string
  logo: string
  /** Public Adtraction tracking URL (no client SID slot). */
  link: string
  /** Advertiser brand accent — top rule, icon, trust dots, CTA. */
  accent: string
  accentSoft: string
  icon: LucideIcon
  trackKey: string
}

const CONFIG: Record<PartnerKey, PartnerConfig> = {
  // Lomarengas — Finland's largest holiday-cottage agency. Brand green.
  lomarengas: {
    brand: 'Lomarengas',
    logo: '/images/partners/lomarengas.png',
    link: 'https://on.lomarengas.fi/t/t?a=1071150667&as=2086870803&t=2&tk=1',
    accent: '#34D399',
    accentSoft: '#6EE7B7',
    icon: Home,
    trackKey: 'lomarengas',
  },
}

interface AdCopy {
  adLabel: string
  eyebrow: string
  headline: string
  sub: string
  trust: [string, string, string]
  cta: string
  poweredBy: string
}

// ── Lomarengas copy (11 langs). Angle for a luxury audience: rent the WHOLE
// cottage, private lakeside sauna, room for the group — the warm alternative when
// the villa list is full or you want the whole place to yourselves. Warm, personal
// register (puhekieli in FI / the natural colloquial equivalent in each language).
// Evergreen, no stats, no em-dashes. ───────────────────────────────────────────
const LOMARENGAS_COPY: Record<Lang, AdCopy> = {
  fi: {
    adLabel: 'Mainos',
    eyebrow: 'Koko mökki, ei hotellihuone',
    headline: 'Lomarengas: vuokraa koko mökki Lapista, oma rantasauna ja tilaa koko porukalle',
    sub: 'Jos huvilakokoelmamme on varattu tai haluatte vain paikan kokonaan itsellenne, käsin valittu mökki on lämmin vaihtoehto. Lomarengas on Suomen suurin mökkivuokraaja, ja Lapissa on tuhansia mökkejä, monessa oma rantasauna ja takka. Varaat suoraan ja saatte koko talon, ette yhtä huonetta.',
    trust: ['Oma sauna useimmissa', 'Koko mökki, ei jaettu', 'Tuhansia mökkejä Lapissa'],
    cta: 'Katso vapaat mökit',
    poweredBy: 'Varaus Lomarenkaan kautta',
  },
  en: {
    adLabel: 'Ad',
    eyebrow: 'The whole cabin, not a hotel room',
    headline: 'Lomarengas: rent a whole Lapland cabin, with your own lakeside sauna and room for everyone',
    sub: "When the villa collection is booked, or you simply want a place all to yourselves, a hand-picked cabin is the warm alternative. Lomarengas is Finland's largest cottage-rental agency, with thousands of cabins across Lapland, many with a private lakeside sauna and a fireplace. You book direct and get the whole house, not just a room.",
    trust: ['Private sauna in most', 'The whole cabin, not shared', 'Thousands across Lapland'],
    cta: 'See available cabins',
    poweredBy: 'Booking via Lomarengas',
  },
  de: {
    adLabel: 'Anzeige',
    eyebrow: 'Das ganze Haus, kein Hotelzimmer',
    headline: 'Lomarengas: ein ganzes Ferienhaus in Lappland mieten, mit eigener Seesauna und Platz für alle',
    sub: 'Wenn die Villen-Auswahl ausgebucht ist oder Sie einfach einen Ort ganz für sich möchten, ist ein handverlesenes Ferienhaus die warme Alternative. Lomarengas ist Finnlands größter Ferienhaus-Vermittler, mit Tausenden Hütten in ganz Lappland, viele mit eigener Seesauna und Kamin. Sie buchen direkt und haben das ganze Haus, nicht nur ein Zimmer.',
    trust: ['Eigene Sauna in den meisten', 'Das ganze Haus, nicht geteilt', 'Tausende in ganz Lappland'],
    cta: 'Freie Hütten ansehen',
    poweredBy: 'Buchung über Lomarengas',
  },
  ja: {
    adLabel: '広告',
    eyebrow: 'ホテルの一室ではなく一棟貸し',
    headline: 'Lomarengas: ラップランドのコテージを一棟まるごと。湖畔の専用サウナと、みんなで泊まれる広さ',
    sub: 'ヴィラのコレクションが満室のときや、自分たちだけの場所がほしいときは、厳選されたコテージが心地よい選択肢になります。Lomarengasはフィンランド最大のコテージ予約サービスで、ラップランド各地に数千棟、多くに湖畔の専用サウナと暖炉がついています。直接予約で、一室ではなく一棟をまるごと使えます。',
    trust: ['多くに専用サウナ', '一棟貸し、相部屋なし', 'ラップランド各地に数千棟'],
    cta: '空きコテージを見る',
    poweredBy: '予約はLomarengas経由',
  },
  es: {
    adLabel: 'Anuncio',
    eyebrow: 'La cabaña entera, no una habitación',
    headline: 'Lomarengas: alquila una cabaña entera en Laponia, con tu propia sauna junto al lago y sitio para todos',
    sub: 'Cuando la colección de villas está reservada, o simplemente queréis un sitio solo para vosotros, una cabaña escogida con cuidado es la alternativa cálida. Lomarengas es la mayor agencia de alquiler de cabañas de Finlandia, con miles por toda Laponia, muchas con sauna privada junto al lago y chimenea. Reservas directamente y tienes toda la casa, no solo una habitación.',
    trust: ['Sauna privada en la mayoría', 'La cabaña entera, sin compartir', 'Miles por toda Laponia'],
    cta: 'Ver cabañas disponibles',
    poweredBy: 'Reserva con Lomarengas',
  },
  'pt-BR': {
    adLabel: 'Anúncio',
    eyebrow: 'A cabana inteira, não um quarto',
    headline: 'Lomarengas: alugue uma cabana inteira na Lapônia, com a sua própria sauna à beira do lago e espaço para todos',
    sub: 'Quando a coleção de vilas está reservada, ou vocês simplesmente querem um lugar só de vocês, uma cabana escolhida a dedo é a alternativa aconchegante. A Lomarengas é a maior agência de aluguel de cabanas da Finlândia, com milhares por toda a Lapônia, muitas com sauna privativa à beira do lago e lareira. Você reserva direto e fica com a casa inteira, não só um quarto.',
    trust: ['Sauna privativa na maioria', 'A cabana inteira, sem dividir', 'Milhares por toda a Lapônia'],
    cta: 'Ver cabanas disponíveis',
    poweredBy: 'Reserva pela Lomarengas',
  },
  'zh-CN': {
    adLabel: '广告',
    eyebrow: '整栋小屋,而非一间客房',
    headline: 'Lomarengas:在拉普兰整栋租下一座小屋,带湖畔专属桑拿,全家都住得下',
    sub: '当别墅精选已订满,或者你们只想要一个完全属于自己的地方时,一座精选小屋就是温暖的选择。Lomarengas 是芬兰最大的度假小屋租赁机构,拉普兰各地有数千座,许多带湖畔专属桑拿和壁炉。直接预订,整座房子归你们,而不只是一间房。',
    trust: ['多数带专属桑拿', '整栋租下,不与人共用', '拉普兰各地数千座'],
    cta: '查看可订小屋',
    poweredBy: '由 Lomarengas 提供预订',
  },
  ko: {
    adLabel: '광고',
    eyebrow: '객실이 아니라 통째로 빌리는 오두막',
    headline: 'Lomarengas: 라플란드 오두막을 통째로, 호숫가 전용 사우나와 모두가 묵을 공간까지',
    sub: '빌라 컬렉션이 모두 예약되었거나, 그저 온전히 우리만의 공간을 원할 때는 정성껏 고른 오두막이 따뜻한 대안이 됩니다. Lomarengas는 핀란드 최대 오두막 대여 업체로, 라플란드 곳곳에 수천 채가 있고 상당수가 호숫가 전용 사우나와 벽난로를 갖췄습니다. 직접 예약하면 방 하나가 아니라 집 전체를 쓸 수 있습니다.',
    trust: ['대부분 전용 사우나', '집 전체, 공유 아님', '라플란드 전역에 수천 채'],
    cta: '예약 가능한 오두막 보기',
    poweredBy: 'Lomarengas를 통한 예약',
  },
  fr: {
    adLabel: 'Annonce',
    eyebrow: 'Le chalet entier, pas une chambre',
    headline: 'Lomarengas : louez un chalet entier en Laponie, avec votre sauna au bord du lac et de la place pour tous',
    sub: "Quand la collection de villas est complète, ou que vous voulez simplement un lieu rien qu'à vous, un chalet choisi avec soin est l'alternative chaleureuse. Lomarengas est la plus grande agence de location de chalets de Finlande, avec des milliers partout en Laponie, beaucoup avec un sauna privé au bord du lac et une cheminée. Vous réservez en direct et avez toute la maison, pas seulement une chambre.",
    trust: ['Sauna privé dans la plupart', 'Le chalet entier, sans partage', 'Des milliers en Laponie'],
    cta: 'Voir les chalets libres',
    poweredBy: 'Réservation via Lomarengas',
  },
  it: {
    adLabel: 'Annuncio',
    eyebrow: "La baita intera, non una stanza",
    headline: 'Lomarengas: affitta una baita intera in Lapponia, con la tua sauna sul lago e spazio per tutti',
    sub: "Quando la collezione di ville è al completo, o volete semplicemente un posto tutto vostro, una baita scelta con cura è l'alternativa accogliente. Lomarengas è la più grande agenzia di affitto baite della Finlandia, con migliaia in tutta la Lapponia, molte con sauna privata sul lago e camino. Prenoti diretto e hai tutta la casa, non solo una stanza.",
    trust: ['Sauna privata nella maggior parte', "L'intera baita, non condivisa", 'Migliaia in tutta la Lapponia'],
    cta: 'Vedi baite disponibili',
    poweredBy: 'Prenotazione con Lomarengas',
  },
  nl: {
    adLabel: 'Advertentie',
    eyebrow: 'Het hele huisje, geen hotelkamer',
    headline: 'Lomarengas: huur een heel Lapland-huisje, met je eigen sauna aan het meer en plek voor iedereen',
    sub: 'Als de villacollectie vol is, of je wilt gewoon een plek helemaal voor jezelf, dan is een zorgvuldig gekozen huisje het warme alternatief. Lomarengas is de grootste verhuurder van vakantiehuisjes van Finland, met duizenden door heel Lapland, veel met een eigen sauna aan het meer en een open haard. Je boekt rechtstreeks en hebt het hele huis, niet alleen een kamer.',
    trust: ['Eigen sauna in de meeste', 'Het hele huisje, niet gedeeld', 'Duizenden in heel Lapland'],
    cta: 'Bekijk vrije huisjes',
    poweredBy: 'Boeking via Lomarengas',
  },
}

const COPY: Record<PartnerKey, Record<Lang, AdCopy>> = {
  lomarengas: LOMARENGAS_COPY,
}

interface PartnerStayAdProps {
  partner?: PartnerKey
  /** snake_case GA4/attribution SID. */
  sid: string
  className?: string
}

export default function PartnerStayAd({ partner = 'lomarengas', sid, className = '' }: PartnerStayAdProps) {
  const lang = useLang()
  const cfg = CONFIG[partner]
  const c = COPY[partner][lang] ?? COPY[partner].en
  const Icon = cfg.icon
  const href = cfg.link

  return (
    <section
      className={`relative overflow-hidden card-onyx ${className}`}
      style={{ borderTop: `2px solid ${cfg.accent}` }}
      aria-label={c.headline}
    >
      {/* Soft advertiser-accent wash, top-right — ties the card to Lomarengas green. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${cfg.accent}24, transparent)` }}
      />

      <div className="relative p-7 sm:p-9">
        {/* Header: icon badge + ad label + eyebrow, real partner logo on the right */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${cfg.accent}1A`, boxShadow: `inset 0 0 0 1px ${cfg.accent}3D` }}
            >
              <Icon className="h-5 w-5" style={{ color: cfg.accent }} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1.5">
              <span
                className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ background: `${cfg.accent}1A`, color: cfg.accentSoft }}
              >
                {c.adLabel}
              </span>
              <p
                className="font-body text-[11px] font-medium uppercase tracking-[0.2em]"
                style={{ color: cfg.accentSoft }}
              >
                {c.eyebrow}
              </p>
            </div>
          </div>
          <span className="flex h-10 items-center rounded-md bg-white px-3.5 shrink-0">
            <img
              src={cfg.logo}
              alt={cfg.brand}
              width={150}
              height={50}
              loading="lazy"
              decoding="async"
              className="h-6 w-auto"
            />
          </span>
        </div>

        <h3 className="font-heading text-2xl sm:text-[1.85rem] text-[color:var(--color-snow)] leading-tight mb-3 max-w-2xl text-balance">
          {c.headline}
        </h3>
        <p className="text-[color:var(--color-bone)]/75 text-sm sm:text-base leading-relaxed max-w-2xl font-body">
          {c.sub}
        </p>

        {/* Trust points — advertiser-accent dots. */}
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
          {c.trust.map((point, i) => (
            <li key={point} className="flex items-center gap-2 text-[color:var(--color-bone)]/85 text-sm font-body">
              {i === 0 ? (
                <Flame className="h-3.5 w-3.5 shrink-0" style={{ color: cfg.accent }} aria-hidden="true" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: cfg.accent }} aria-hidden="true" />
              )}
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={href}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick(cfg.trackKey, `stay_ad:${sid}`, href)}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[color:var(--color-deep-night)] text-[12px] tracking-[0.22em] uppercase font-body font-medium no-underline transition-colors whitespace-nowrap"
            style={{ backgroundColor: cfg.accent }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = cfg.accentSoft)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = cfg.accent)}
          >
            {c.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
          <span className="text-[color:var(--color-bone)]/45 text-[11px] uppercase tracking-[0.14em] font-body">
            {c.poweredBy}
          </span>
        </div>

        <AffiliateDisclosure variant="compact" className="mt-6 !justify-start text-left" />
      </div>
    </section>
  )
}
