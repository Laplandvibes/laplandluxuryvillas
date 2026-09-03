import { ArrowUpRight } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'

/**
 * Contextual sibling links into the LaplandVibes network. External links use
 * rel="noopener" (NOT affiliate rel) — editorial cross-links, not monetised CTAs.
 * Each href is a DEEP page that delivers the card's promise, NOT the sibling
 * homepage (Vesa 2026-07-08). Verified live 200 + matching title:
 * stays→/property-types/, wellness→/spas/, hoteldeals→/deals/.
 */
type Card = { href: string; label: string; body: string }

const COPY: Record<Lang, { eyebrow: string; h2: string; cards: Card[] }> = {
  en: {
    eyebrow: 'Across the network',
    h2: 'More of Lapland, from our network',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Compare all Lapland stays', body: 'From glass igloos to log cabins and hotels across the region.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa & sauna retreats', body: 'Wellness stays, traditional saunas and Arctic spa rituals.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Luxury hotel deals', body: 'Premium Lapland hotels and curated seasonal offers.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Family itineraries for Lapland', body: 'Day-by-day winter and summer plans, for travelling here with children.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Aurora activities and guided hunts', body: 'Photography tours, snowmobile chases and snowshoe nights under the lights.' },
    ],
  },
  fi: {
    eyebrow: 'Verkostossa',
    h2: 'Lisää Lappia verkostostamme',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Vertaile kaikkia Lapin majoituksia', body: 'Lasi-igluista hirsimökkeihin ja hotelleihin ympäri aluetta.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- ja saunalomat', body: 'Hyvinvointimajoitusta, perinteisiä saunoja ja arktisia spa-rituaaleja.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Luksushotellien tarjoukset', body: 'Lapin laadukkaat hotellit ja kauden valitut tarjoukset.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Perheen Lappi-matkaohjelmat', body: 'Päivä kerrallaan rakennetut talvi- ja kesäsuunnitelmat lasten kanssa matkaaville.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Revontuliretket ja opastetut ajot', body: 'Kuvausretket, kelkkajahdit ja lumikenkäillat revontulien alla.' },
    ],
  },
  de: {
    eyebrow: 'Im Netzwerk',
    h2: 'Mehr von Lappland, aus unserem Netzwerk',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Alle Unterkünfte in Lappland vergleichen', body: 'Von Glas-Iglus über Blockhütten bis zu Hotels in der Region.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- & Sauna-Refugien', body: 'Wellness-Aufenthalte, traditionelle Saunen und arktische Spa-Rituale.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Luxushotel-Angebote', body: 'Erstklassige Hotels in Lappland und kuratierte Saisonangebote.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Familien-Reiserouten für Lappland', body: 'Tag für Tag geplante Winter- und Sommerrouten für Reisen mit Kindern.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Polarlicht-Touren und geführte Jagden', body: 'Fotoreisen, Schneemobil-Jagden und Schneeschuhnächte unter den Lichtern.' },
    ],
  },
  ja: {
    eyebrow: 'ネットワークから',
    h2: 'ネットワークから、ラップランドをもっと',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'ラップランドの宿泊先を比較', body: 'グラスイグルーからログキャビン、ホテルまで地域全体から。' },
      { href: 'https://laplandwellness.com/spas/', label: 'スパ＆サウナの保養', body: 'ウェルネス滞在、伝統的なサウナ、北極圏のスパ体験。' },
      { href: 'https://laplandhoteldeals.com/deals/', label: '高級ホテルのお得情報', body: 'ラップランドの上質なホテルと厳選した季節のオファー。' },
      { href: 'https://laplandkids.com/itineraries/', label: 'ラップランドの家族向け旅程', body: '子ども連れの旅のための、冬と夏の一日ごとのプラン。' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'オーロラ体験とガイド付きツアー', body: '撮影ツアー、スノーモービルでの追跡、スノーシューの夜。' },
    ],
  },
  es: {
    eyebrow: 'En la red',
    h2: 'Más Laponia, desde nuestra red',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Compare todos los alojamientos de Laponia', body: 'Desde iglús de cristal a cabañas de troncos y hoteles de la región.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Retiros de spa y sauna', body: 'Estancias de bienestar, saunas tradicionales y rituales de spa ártico.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Ofertas de hoteles de lujo', body: 'Hoteles premium de Laponia y ofertas de temporada seleccionadas.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Itinerarios familiares por Laponia', body: 'Planes de invierno y verano día a día, para viajar aquí con niños.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Actividades y cazas de auroras', body: 'Tours fotográficos, persecuciones en motonieve y noches con raquetas.' },
    ],
  },
  'pt-BR': {
    eyebrow: 'Na rede',
    h2: 'Mais da Lapônia, da nossa rede',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Compare todas as hospedagens da Lapônia', body: 'De iglus de vidro a cabanas de madeira e hotéis em toda a região.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Retiros de spa e sauna', body: 'Estadias de bem-estar, saunas tradicionais e rituais de spa ártico.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Ofertas de hotéis de luxo', body: 'Hotéis premium da Lapônia e ofertas de temporada selecionadas.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Roteiros de família para a Lapônia', body: 'Planos de inverno e verão dia a dia, para viajar aqui com crianças.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Atividades e caçadas de auroras', body: 'Tours fotográficos, perseguições de snowmobile e noites de raquete de neve.' },
    ],
  },
  'zh-CN': {
    eyebrow: '来自网络',
    h2: '来自我们网络的更多拉普兰内容',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: '比较拉普兰的所有住宿', body: '从玻璃冰屋到木屋和酒店，遍及整个地区。' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa 与桑拿静养', body: '养生住宿、传统桑拿与北极 Spa 体验。' },
      { href: 'https://laplandhoteldeals.com/deals/', label: '豪华酒店优惠', body: '拉普兰高端酒店与精选季节优惠。' },
      { href: 'https://laplandkids.com/itineraries/', label: '拉普兰亲子行程', body: '按天规划的冬季与夏季行程，专为带孩子出行的家庭。' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: '极光活动与向导追光', body: '摄影团、雪地摩托追光，以及极光下的雪鞋徒步之夜。' },
    ],
  },
  ko: {
    eyebrow: '네트워크에서',
    h2: '네트워크에서 만나는 더 많은 라플란드',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: '라플란드의 모든 숙소 비교', body: '글래스 이글루부터 통나무 캐빈과 호텔까지 지역 전역에서.' },
      { href: 'https://laplandwellness.com/spas/', label: '스파 & 사우나 리트리트', body: '웰니스 숙박, 전통 사우나, 북극 스파 의식.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: '럭셔리 호텔 특가', body: '라플란드 프리미엄 호텔과 엄선된 시즌 혜택.' },
      { href: 'https://laplandkids.com/itineraries/', label: '라플란드 가족 여행 일정', body: '아이와 함께 오는 여행을 위한 겨울과 여름의 하루 단위 계획.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: '오로라 액티비티와 가이드 헌팅', body: '사진 투어, 스노모빌 추적, 오로라 아래 스노슈 나이트.' },
    ],
  },
  fr: {
    eyebrow: 'Dans le réseau',
    h2: 'Plus de Laponie, depuis notre réseau',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Comparer tous les hébergements de Laponie', body: 'Des igloos de verre aux chalets en rondins et aux hôtels de la région.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Séjours spa & sauna', body: 'Séjours bien-être, saunas traditionnels et rituels spa arctiques.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Offres d’hôtels de luxe', body: 'Hôtels haut de gamme de Laponie et offres de saison sélectionnées.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Itinéraires famille en Laponie', body: 'Des programmes jour par jour, hiver et été, pour voyager ici avec des enfants.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Activités et chasses aux aurores', body: 'Sorties photo, poursuites en motoneige et nuits en raquettes sous les lumières.' },
    ],
  },
  it: {
    eyebrow: 'Nel network',
    h2: 'Altra Lapponia, dalla nostra rete',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Confronta tutti i soggiorni in Lapponia', body: 'Dagli igloo di vetro alle baite in legno e agli hotel della regione.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Ritiri spa & sauna', body: 'Soggiorni benessere, saune tradizionali e rituali spa artici.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Offerte hotel di lusso', body: 'Hotel di pregio in Lapponia e offerte stagionali selezionate.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Itinerari di famiglia in Lapponia', body: 'Programmi giorno per giorno, inverno ed estate, per viaggiare qui con i bambini.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Attività e cacce all’aurora', body: 'Tour fotografici, inseguimenti in motoslitta e notti con le ciaspole.' },
    ],
  },
  nl: {
    eyebrow: 'In het netwerk',
    h2: 'Meer van Lapland, uit ons netwerk',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Vergelijk alle verblijven in Lapland', body: 'Van glazen iglo’s tot blokhutten en hotels in de hele regio.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- & saunaretraites', body: 'Wellnessverblijven, traditionele sauna’s en Arctische sparituelen.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Aanbiedingen luxehotels', body: 'Premium hotels in Lapland en samengestelde seizoensaanbiedingen.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Gezinsroutes door Lapland', body: 'Dag-voor-dag plannen voor winter en zomer, om hier met kinderen te reizen.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Noorderlichtactiviteiten en tochten', body: 'Fototochten, sneeuwscooterjachten en sneeuwschoennachten onder het licht.' },
    ],
  },
  sv: {
    eyebrow: 'I nätverket',
    h2: 'Mer av Lappland, från vårt nätverk',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Jämför alla boenden i Lappland', body: 'Från glasigloor till stugor och hotell i hela regionen.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- och bastuvistelser', body: 'Wellnessboenden, traditionella bastur och arktiska sparitualer.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Erbjudanden på lyxhotell', body: 'Förstklassiga hotell i Lappland och utvalda säsongserbjudanden.' },
      { href: 'https://laplandkids.com/itineraries/', label: 'Familjeprogram för Lappland', body: 'Dag-för-dag-planer för vinter och sommar, för resor hit med barn.' },
      { href: 'https://laplandactivities.fi/categories/northern-lights/', label: 'Norrskensaktiviteter och guidade jakter', body: 'Fototurer, skoterjakter och snöskonätter under ljuset.' },
    ],
  },
}

/**
 * Card artwork, keyed by the sibling's host so it cannot drift out of step
 * with the twelve translated card lists (Vesa 2026-08-02: "totta kai näissä
 * pitää olla kuvat myös" — the grid was five text boxes).
 *
 * The images are decorative: `alt=""` and aria-hidden, because the card's own
 * heading already states where the link goes. An alt here would either repeat
 * that heading to a screen reader or need twelve translations of a sentence
 * nobody asked for.
 *
 * 🔴 Generated for this site only. No LV image may appear on two ecosystem
 * sites, so these are NOT the sibling sites' own artwork — they are scenes
 * that describe what the reader will find there.
 */
const CARD_IMAGE: Record<string, string> = {
  'laplandstays.com': '/images/net-stays.webp',
  'laplandwellness.com': '/images/net-wellness.webp',
  'laplandhoteldeals.com': '/images/net-hoteldeals.webp',
  'laplandkids.com': '/images/net-kids.webp',
  'laplandactivities.fi': '/images/net-activities.webp',
}

const cardImage = (href: string): string | undefined => {
  try {
    return CARD_IMAGE[new URL(href).hostname.replace(/^www\./, '')]
  } catch {
    return undefined
  }
}

export default function RelatedSites() {
  const lang = useLang()
  const t = COPY[lang]

  return (
    <section className="bg-[color:var(--color-deep-night)] py-14 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-14">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
            {t.h2}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.cards.map((card) => {
            const img = cardImage(card.href)
            return (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener"
                className="group card-onyx p-5 sm:p-7 flex flex-col"
              >
                {img && (
                  <div className="aspect-[2/1] sm:aspect-[16/9] -mx-5 sm:-mx-7 -mt-5 sm:-mt-7 mb-5 sm:mb-6 overflow-hidden bg-[color:var(--color-deep-night)]">
                    <img
                      src={img}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <h3 className="font-heading text-2xl text-[color:var(--color-snow)] leading-snug flex items-start gap-2 group-hover:text-[color:var(--color-brass)] transition-colors">
                  {card.label}
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[color:var(--color-brass)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-3 text-[color:var(--color-bone)]/70 text-sm font-body leading-relaxed">
                  {card.body}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
