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
    h2: 'More ways to stay in Lapland',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Compare all Lapland stays', body: 'From glass igloos to log cabins and hotels across the region.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa & sauna retreats', body: 'Wellness stays, traditional saunas and Arctic spa rituals.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Luxury hotel deals', body: 'Premium Lapland hotels and curated seasonal offers.' },
    ],
  },
  fi: {
    eyebrow: 'Verkostossa',
    h2: 'Lisää tapoja majoittua Lapissa',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Vertaile kaikkia Lapin majoituksia', body: 'Lasi-igluista hirsimökkeihin ja hotelleihin ympäri aluetta.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- ja saunalomat', body: 'Hyvinvointimajoitusta, perinteisiä saunoja ja arktisia spa-rituaaleja.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Luksushotellien tarjoukset', body: 'Lapin laadukkaat hotellit ja kauden valitut tarjoukset.' },
    ],
  },
  de: {
    eyebrow: 'Im Netzwerk',
    h2: 'Weitere Unterkünfte in Lappland',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Alle Unterkünfte in Lappland vergleichen', body: 'Von Glas-Iglus über Blockhütten bis zu Hotels in der Region.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- & Sauna-Refugien', body: 'Wellness-Aufenthalte, traditionelle Saunen und arktische Spa-Rituale.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Luxushotel-Angebote', body: 'Erstklassige Hotels in Lappland und kuratierte Saisonangebote.' },
    ],
  },
  ja: {
    eyebrow: 'ネットワークから',
    h2: 'ラップランドの滞在をもっと探す',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'ラップランドの宿泊先を比較', body: 'ガラスイグルーからログキャビン、ホテルまで地域全体から。' },
      { href: 'https://laplandwellness.com/spas/', label: 'スパ＆サウナの保養', body: 'ウェルネス滞在、伝統的なサウナ、北極圏のスパ体験。' },
      { href: 'https://laplandhoteldeals.com/deals/', label: '高級ホテルのお得情報', body: 'ラップランドの上質なホテルと厳選した季節のオファー。' },
    ],
  },
  es: {
    eyebrow: 'En la red',
    h2: 'Más formas de alojarse en Laponia',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Compare todos los alojamientos de Laponia', body: 'Desde iglús de cristal a cabañas de troncos y hoteles de la región.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Retiros de spa y sauna', body: 'Estancias de bienestar, saunas tradicionales y rituales de spa ártico.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Ofertas de hoteles de lujo', body: 'Hoteles premium de Laponia y ofertas de temporada seleccionadas.' },
    ],
  },
  'pt-BR': {
    eyebrow: 'Na rede',
    h2: 'Mais formas de se hospedar na Lapônia',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Compare todas as hospedagens da Lapônia', body: 'De iglus de vidro a cabanas de madeira e hotéis em toda a região.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Retiros de spa e sauna', body: 'Estadias de bem-estar, saunas tradicionais e rituais de spa ártico.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Ofertas de hotéis de luxo', body: 'Hotéis premium da Lapônia e ofertas de temporada selecionadas.' },
    ],
  },
  'zh-CN': {
    eyebrow: '来自网络',
    h2: '在拉普兰住宿的更多选择',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: '比较拉普兰的所有住宿', body: '从玻璃冰屋到木屋和酒店,遍及整个地区。' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa 与桑拿静养', body: '养生住宿、传统桑拿与北极 Spa 体验。' },
      { href: 'https://laplandhoteldeals.com/deals/', label: '豪华酒店优惠', body: '拉普兰高端酒店与精选季节优惠。' },
    ],
  },
  ko: {
    eyebrow: '네트워크에서',
    h2: '라플란드에서 머무는 더 많은 방법',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: '라플란드의 모든 숙소 비교', body: '글래스 이글루부터 통나무 캐빈과 호텔까지 지역 전역에서.' },
      { href: 'https://laplandwellness.com/spas/', label: '스파 & 사우나 리트리트', body: '웰니스 숙박, 전통 사우나, 북극 스파 의식.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: '럭셔리 호텔 특가', body: '라플란드 프리미엄 호텔과 엄선된 시즌 혜택.' },
    ],
  },
  fr: {
    eyebrow: 'Dans le réseau',
    h2: 'D’autres façons de séjourner en Laponie',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Comparer tous les hébergements de Laponie', body: 'Des igloos de verre aux chalets en rondins et aux hôtels de la région.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Séjours spa & sauna', body: 'Séjours bien-être, saunas traditionnels et rituels spa arctiques.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Offres d’hôtels de luxe', body: 'Hôtels haut de gamme de Laponie et offres de saison sélectionnées.' },
    ],
  },
  it: {
    eyebrow: 'Nel network',
    h2: 'Altri modi di soggiornare in Lapponia',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Confronta tutti i soggiorni in Lapponia', body: 'Dagli igloo di vetro alle baite in legno e agli hotel della regione.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Ritiri spa & sauna', body: 'Soggiorni benessere, saune tradizionali e rituali spa artici.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Offerte hotel di lusso', body: 'Hotel di pregio in Lapponia e offerte stagionali selezionate.' },
    ],
  },
  nl: {
    eyebrow: 'In het netwerk',
    h2: 'Meer manieren om in Lapland te verblijven',
    cards: [
      { href: 'https://laplandstays.com/property-types/', label: 'Vergelijk alle verblijven in Lapland', body: 'Van glazen iglo’s tot blokhutten en hotels in de hele regio.' },
      { href: 'https://laplandwellness.com/spas/', label: 'Spa- & saunaretraites', body: 'Wellnessverblijven, traditionele sauna’s en Arctische sparituelen.' },
      { href: 'https://laplandhoteldeals.com/deals/', label: 'Aanbiedingen luxehotels', body: 'Premium hotels in Lapland en samengestelde seizoensaanbiedingen.' },
    ],
  },
}

export default function RelatedSites() {
  const lang = useLang()
  const t = COPY[lang]

  return (
    <section className="bg-[color:var(--color-deep-night)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
            {t.h2}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {t.cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              target="_blank"
              rel="noopener"
              className="group card-onyx p-7 flex flex-col"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
