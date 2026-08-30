import AdUnit, { type AdSpec, type AdCopy } from '../shared/ads/AdUnit'
import lomarengas from '../shared/ads/advertisers/lomarengas'
import { useLang, type Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'

// ─────────────────────────────────────────────────────────────────────────────
// PartnerStayAd — the Lomarengas placement, rendered by the NETWORK's shared
// ad unit (`shared/ads/AdUnit` + `shared/ads/advertisers/lomarengas`).
//
// Why this file changed on 2026-08-01
// -----------------------------------
// It used to be a full local fork of the ad: its own markup, its own colours,
// its own link. Vesa asked why the Lomarengas ad looks different here than on
// every other site, and the fork was the answer. Three things had drifted, and
// one of them was a bug rather than a style choice:
//
//   1. 🔴 THE SID NEVER LEFT THE PAGE. The link was the constant
//      `?sid=villas_partner`, so every Lomarengas click from anywhere on this
//      site — home, each destination, the collection — arrived at the Worker
//      under one placement id and D1 could not tell them apart. The `sid` prop
//      was only ever passed to GA4. The shared unit calls `spec.linkFor(sid)`,
//      so the placement now reaches the Worker and the Command Center.
//   2. The accent was #34D399/#6EE7B7, a lighter mint than the advertiser's own
//      #10B981/#047857 used everywhere else in the network.
//   3. The whole card was duplicated markup that no shared fix could reach.
//
// What is deliberately kept: the COPY. The network spec sells a cottage on its
// own merits; on a page of villas the honest angle is the one this site already
// had — when the collection is booked, or the group wants the whole place to
// itself, a hand-picked cottage is the warm alternative. That is an override of
// `spec.copy`, which is plain data, not a second implementation of the ad.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The villa-audience angle, layered over the shared Lomarengas copy. Same 12
 * locales as the spec, so no locale falls back to the generic version.
 * Evergreen, no invented stats, no em dashes.
 */
const VILLA_ANGLE: Record<Lang, AdCopy> = {
  fi: {
    eyebrow: 'Koko mökki, ei hotellihuone',
    headline: 'Lomarengas: vuokraa koko mökki Lapista, oma rantasauna ja tilaa koko porukalle',
    sub: 'Jos huvilakokoelmamme on varattu tai haluatte vain paikan kokonaan itsellenne, käsin valittu mökki on lämmin vaihtoehto. Lomarengas on Suomen suurin mökkivuokraaja, ja Lapissa on tuhansia mökkejä, monessa oma rantasauna ja takka. Varaat suoraan ja saatte koko talon, ette yhtä huonetta.',
    trust: ['Oma sauna useimmissa', 'Koko mökki, ei jaettu', 'Tuhansia mökkejä Lapissa'],
    cta: 'Katso vapaat mökit',
    poweredBy: 'Varaus Lomarenkaan kautta',
  },
  en: {
    eyebrow: 'The whole cabin, not a hotel room',
    headline: 'Lomarengas: rent a whole Lapland cabin, with your own lakeside sauna and room for everyone',
    sub: "When the villa collection is booked, or you simply want a place all to yourselves, a hand-picked cabin is the warm alternative. Lomarengas is Finland's largest cottage-rental agency, with thousands of cabins across Lapland, many with a private lakeside sauna and a fireplace. You book direct and get the whole house, not just a room.",
    trust: ['Private sauna in most', 'The whole cabin, not shared', 'Thousands across Lapland'],
    cta: 'See available cabins',
    poweredBy: 'Booking via Lomarengas',
  },
  de: {
    eyebrow: 'Das ganze Haus, kein Hotelzimmer',
    headline: 'Lomarengas: ein ganzes Ferienhaus in Lappland mieten, mit eigener Seesauna und Platz für alle',
    sub: 'Wenn die Villen-Auswahl ausgebucht ist oder Sie einfach einen Ort ganz für sich möchten, ist ein handverlesenes Ferienhaus die warme Alternative. Lomarengas ist Finnlands größter Ferienhaus-Vermittler, mit Tausenden Hütten in ganz Lappland, viele mit eigener Seesauna und Kamin. Sie buchen direkt und haben das ganze Haus, nicht nur ein Zimmer.',
    trust: ['Eigene Sauna in den meisten Hütten', 'Das ganze Haus, nicht geteilt', 'Tausende in ganz Lappland'],
    cta: 'Freie Hütten ansehen',
    poweredBy: 'Buchung über Lomarengas',
  },
  ja: {
    eyebrow: 'ホテルの一室ではなく一棟貸し',
    headline: 'Lomarengas: ラップランドのコテージを一棟まるごと。湖畔の専用サウナと、みんなで泊まれる広さ',
    sub: 'ヴィラのコレクションが満室のときや、自分たちだけの場所がほしいときは、厳選されたコテージが心地よい選択肢になります。Lomarengasはフィンランド最大のコテージ予約サービスで、ラップランド各地に数千棟、多くに湖畔の専用サウナと暖炉がついています。直接予約で、一室ではなく一棟をまるごと使えます。',
    trust: ['多くに専用サウナ', '一棟貸し、相部屋なし', 'ラップランド各地に数千棟'],
    cta: '空きコテージを見る',
    poweredBy: '予約はLomarengas経由',
  },
  es: {
    eyebrow: 'La cabaña entera, no una habitación',
    headline: 'Lomarengas: alquila una cabaña entera en Laponia, con tu propia sauna junto al lago y sitio para todos',
    sub: 'Cuando la colección de villas está reservada, o simplemente queréis un sitio solo para vosotros, una cabaña escogida con cuidado es la alternativa cálida. Lomarengas es la mayor agencia de alquiler de cabañas de Finlandia, con miles por toda Laponia, muchas con sauna privada junto al lago y chimenea. Reservas directamente y tienes toda la casa, no solo una habitación.',
    trust: ['Sauna privada en la mayoría', 'La cabaña entera, sin compartir', 'Miles por toda Laponia'],
    cta: 'Ver cabañas disponibles',
    poweredBy: 'Reserva con Lomarengas',
  },
  'pt-BR': {
    eyebrow: 'A cabana inteira, não um quarto',
    headline: 'Lomarengas: alugue uma cabana inteira na Lapônia, com a sua própria sauna à beira do lago e espaço para todos',
    sub: 'Quando a coleção de vilas está reservada, ou vocês simplesmente querem um lugar só de vocês, uma cabana escolhida a dedo é a alternativa aconchegante. A Lomarengas é a maior agência de aluguel de cabanas da Finlândia, com milhares por toda a Lapônia, muitas com sauna privativa à beira do lago e lareira. Você reserva direto e fica com a casa inteira, não só um quarto.',
    trust: ['Sauna privativa na maioria', 'A cabana inteira, sem dividir', 'Milhares por toda a Lapônia'],
    cta: 'Ver cabanas disponíveis',
    poweredBy: 'Reserva pela Lomarengas',
  },
  'zh-CN': {
    eyebrow: '整栋小屋，而非一间客房',
    headline: 'Lomarengas：在拉普兰整栋租下一座小屋，带湖畔专属桑拿，全家都住得下',
    sub: '当别墅精选已订满，或者你们只想要一个完全属于自己的地方时，一座精选小屋就是温暖的选择。Lomarengas 是芬兰最大的度假小屋租赁机构，拉普兰各地有数千座，许多带湖畔专属桑拿和壁炉。直接预订，整座房子归你们，而不只是一间房。',
    trust: ['多数带专属桑拿', '整栋租下，不与人共用', '拉普兰各地数千座'],
    cta: '查看可订小屋',
    poweredBy: '由 Lomarengas 提供预订',
  },
  ko: {
    eyebrow: '객실이 아니라 통째로 빌리는 오두막',
    headline: 'Lomarengas: 라플란드 오두막을 통째로, 호숫가 전용 사우나와 모두가 묵을 공간까지',
    sub: '빌라 컬렉션이 모두 예약되었거나, 그저 온전히 우리만의 공간을 원할 때는 정성껏 고른 오두막이 따뜻한 대안이 됩니다. Lomarengas는 핀란드 최대 오두막 대여 업체로, 라플란드 곳곳에 수천 채가 있고 상당수가 호숫가 전용 사우나와 벽난로를 갖췄습니다. 직접 예약하면 방 하나가 아니라 집 전체를 쓸 수 있습니다.',
    trust: ['대부분 전용 사우나', '집 전체, 공유 아님', '라플란드 전역에 수천 채'],
    cta: '예약 가능한 오두막 보기',
    poweredBy: 'Lomarengas를 통한 예약',
  },
  fr: {
    eyebrow: 'Le chalet entier, pas une chambre',
    headline: 'Lomarengas : louez un chalet entier en Laponie, avec votre sauna au bord du lac et de la place pour tous',
    sub: "Quand la collection de villas est complète, ou que vous voulez simplement un lieu rien qu'à vous, un chalet choisi avec soin est l'alternative chaleureuse. Lomarengas est la plus grande agence de location de chalets de Finlande, avec des milliers partout en Laponie, beaucoup avec un sauna privé au bord du lac et une cheminée. Vous réservez en direct et avez toute la maison, pas seulement une chambre.",
    trust: ['Sauna privé dans la plupart', 'Le chalet entier, sans partage', 'Des milliers en Laponie'],
    cta: 'Voir les chalets libres',
    poweredBy: 'Réservation via Lomarengas',
  },
  it: {
    eyebrow: 'La baita intera, non una stanza',
    headline: 'Lomarengas: affitti una baita intera in Lapponia, con la Sua sauna sul lago e spazio per tutti',
    sub: "Quando la collezione di ville è al completo, o vuole semplicemente un posto tutto Suo, una baita scelta con cura è l'alternativa accogliente. Lomarengas è la più grande agenzia di affitto baite della Finlandia, con migliaia in tutta la Lapponia, molte con sauna privata sul lago e camino. Prenoti diretto e hai tutta la casa, non solo una stanza.",
    trust: ['Sauna privata nella maggior parte', "L'intera baita, non condivisa", 'Migliaia in tutta la Lapponia'],
    cta: 'Vedi baite disponibili',
    poweredBy: 'Prenotazione con Lomarengas',
  },
  nl: {
    eyebrow: 'Het hele huisje, geen hotelkamer',
    headline: 'Lomarengas: huur een heel Lapland-huisje, met je eigen sauna aan het meer en plek voor iedereen',
    sub: 'Als de villacollectie vol is, of je wilt gewoon een plek helemaal voor jezelf, dan is een zorgvuldig gekozen huisje het warme alternatief. Lomarengas is de grootste verhuurder van vakantiehuisjes van Finland, met duizenden door heel Lapland, veel met een eigen sauna aan het meer en een open haard. Je boekt rechtstreeks en hebt het hele huis, niet alleen een kamer.',
    trust: ['Eigen sauna in de meeste', 'Het hele huisje, niet gedeeld', 'Duizenden in heel Lapland'],
    cta: 'Bekijk vrije huisjes',
    poweredBy: 'Boeking via Lomarengas',
  },
  sv: {
    eyebrow: 'Hela stugan, inte ett hotellrum',
    headline: 'Lomarengas: hyr en hel stuga i Lappland, med egen strandbastu och plats för hela sällskapet',
    sub: 'När villakollektionen är fullbokad, eller ni bara vill ha ett ställe helt för er själva, är en handplockad stuga det varma alternativet. Lomarengas är Finlands största stuguthyrare, med tusentals stugor i hela Lappland, många med egen strandbastu och öppen spis. Du bokar direkt och får hela huset, inte bara ett rum.',
    trust: ['Egen bastu i de flesta', 'Hela stugan, inte delad', 'Tusentals i hela Lappland'],
    cta: 'Se lediga stugor',
    poweredBy: 'Bokning via Lomarengas',
  },
}

/** The network spec with this site's angle. Everything else stays canonical. */
const SPEC: AdSpec = { ...lomarengas, copy: VILLA_ANGLE }

interface PartnerStayAdProps {
  /** snake_case placement id. Reaches the Worker, D1 and GA4 — make it specific. */
  sid: string
  className?: string
}

export default function PartnerStayAd({ sid, className = '' }: PartnerStayAdProps) {
  const lang = useLang()
  return (
    <AdUnit
      spec={SPEC}
      sid={sid}
      lang={lang}
      variant="dark"
      onCtaClick={(key, s, url) => trackAffiliateClick(key, `ad_unit:${s}`, url)}
      disclosure={<AffiliateDisclosure variant="compact" className="!justify-start text-left" />}
      className={className}
    />
  )
}
