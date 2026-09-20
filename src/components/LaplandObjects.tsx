import { ArrowUpRight } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'

// ─────────────────────────────────────────────────────────────────────────────
// LaplandObjects — the things worth taking home from the villa.
//
// Vesa 2026-08-12: "kyllähän näitä kalliita tuotteita pitää luxus sivulle
// sitten laittaa myös tarjolle, mutta hyvällä maulla ja extra hienoilla
// mainoksilla että luxus ja tyylikkyys huokuu, mustaa kiiltoa" — and then,
// when I had built the page on the wrong site: "minä kyllä puhuin luxurista
// niin laplandluxuryvillas.com".
//
// 🔴🔴 TWO OF THE THREE CARDS LINKED TO A 404 (measured 20.9.2026, after Vesa
// clicked one: *"nämä menee 404 sivulle ja eihän me näistä tuotteista edes
// saada provisiota? nämä tuotteet pitää löytyä jostain ja kalleimmat
// mahdolliset myyntiin."*). `lapuan-kankurit-kaamos-blanket` and
// `moomin-mystical-forest-wool-throw` had left the gifts catalogue, so the
// cards sold nothing and earned nothing. A product slug on another site is a
// FOREIGN KEY: it must be checked against that site's live sitemap, not
// remembered. All three below returned HTTP 200 on 20.9.2026.
//
// 🔴 The picks are now the most expensive objects the shop will send abroad,
// which is what Vesa asked for. Measured from `laplandgifts/src/data/`:
// Halti's two shell jackets (280 € / 250 €) are more expensive still, but the
// Halti affiliate programme is the FI shop, which ships inside Finland only
// (partners.ts: `shipsTo: 'fi'`, delivery policy read 4.8.2026), and a card a
// foreign guest cannot order is worse than no card. Iittala and Makia are
// Finland-only for the same reason. Experiences are excluded on purpose: this
// section is about objects that go home in the luggage.
//
// 🔴 The link goes to the laplandgifts product page, not straight to the
// partner. The affiliate wiring, the price date and the shipping badge all
// live there, and duplicating them here would mean two places to keep true.
// This is also the internal network link the ecosystem was missing.
// ─────────────────────────────────────────────────────────────────────────────

interface Obj {
  slug: string
  image: string
  price: string
  name: Record<'fi' | 'en', string>
  note: Record<'fi' | 'en', string>
}

/** Hinta on kumppanikaupan oma ja luettu tällä päivämäärällä. */
const PRICE_AS_OF = '2026-09-20'

const OBJECTS: Obj[] = [
  {
    slug: 'north-outdoor-sointu-cardigan',
    image: 'prod-north-outdoor-sointu-cardigan',
    price: '199,95 €',
    name: {
      fi: 'North Outdoor Sointu -merinoneuletakki',
      en: 'North Outdoor Sointu merino cardigan',
    },
    note: {
      fi: 'Suomessa neulottua merinovillaa. Se takki, jonka vetää päälle terassille, kun lämpömittari näyttää miinus kahtakymmentä.',
      en: 'Merino knitted in Finland. The cardigan you pull on to step onto the terrace at minus twenty.',
    },
  },
  {
    slug: 'fl-lino-linen-duvet-set',
    image: 'prod-fl-lino-linen-duvet-set',
    price: '199,95 €',
    name: {
      fi: 'Finlayson Lino-pellavapussilakanasetti',
      en: 'Finlayson Lino linen duvet set',
    },
    note: {
      fi: 'Pesty pellava, joka pehmenee joka pesussa. Sama materiaali, joka on lasikattosviitin sängyssä.',
      en: 'Washed linen that softens with every wash. The same cloth that is on the bed under the glass roof.',
    },
  },
  {
    slug: 'marttiini-lapinleuku-255',
    image: 'prod-marttiini-lapinleuku-255',
    price: '120 €',
    name: { fi: 'Marttiini Lapinleuku 255', en: 'Marttiini Lapinleuku 255' },
    note: {
      fi: 'Leveäteräinen lapinleuku Rovaniemeltä, tehty vuodesta 1928 samassa kaupungissa.',
      en: 'The broad-bladed Lapland knife from Rovaniemi, made in the same town since 1928.',
    },
  },
]

const COPY: Record<Lang, { eyebrow: string; h2: string; lede: string; cta: string; note: string }> = {
  fi: {
    eyebrow: 'Mukaan',
    h2: 'Esineet, jotka jäävät',
    lede: 'Kolme asiaa, jotka kuuluvat samaan huoneeseen kuin villa itse. Jokainen lähtee myös Suomen ulkopuolelle.',
    cta: 'Katso tuote',
    note: `Hinnat kumppanikaupan omia, luettu ${PRICE_AS_OF}. Tuotteet myy ja lähettää suomalainen kauppa, emme me.`,
  },
  en: {
    eyebrow: 'To take home',
    h2: 'The things that stay',
    lede: 'Three pieces that belong in the same room as the villa. Each one ships beyond Finland.',
    cta: 'See the product',
    note: `Prices are the partner shop’s own, read ${PRICE_AS_OF}. A Finnish shop sells and ships these, not us.`,
  },
  de: {
    eyebrow: 'Für zu Hause',
    h2: 'Die Dinge, die bleiben',
    lede: 'Drei Stücke, die in denselben Raum gehören wie die Villa. Jedes wird auch über Finnland hinaus versandt.',
    cta: 'Produkt ansehen',
    note: `Preise vom Partnershop, gelesen am ${PRICE_AS_OF}. Verkauf und Versand über einen finnischen Shop, nicht über uns.`,
  },
  sv: {
    eyebrow: 'Med hem',
    h2: 'Sakerna som blir kvar',
    lede: 'Tre ting som hör hemma i samma rum som villan. Alla skickas även utanför Finland.',
    cta: 'Se produkten',
    note: `Priser från partnerbutiken, avlästa ${PRICE_AS_OF}. En finländsk butik säljer och skickar dessa, inte vi.`,
  },
  fr: {
    eyebrow: 'À rapporter',
    h2: 'Ce qui reste',
    lede: 'Trois pièces qui appartiennent à la même pièce que la villa. Chacune est expédiée au-delà de la Finlande.',
    cta: 'Voir le produit',
    note: `Prix de la boutique partenaire, relevés le ${PRICE_AS_OF}. Une boutique finlandaise vend et expédie, pas nous.`,
  },
  es: {
    eyebrow: 'Para llevar',
    h2: 'Lo que se queda',
    lede: 'Tres piezas que pertenecen a la misma habitación que la villa. Todas se envían fuera de Finlandia.',
    cta: 'Ver el producto',
    note: `Precios de la tienda asociada, leídos el ${PRICE_AS_OF}. Una tienda finlandesa vende y envía, no nosotros.`,
  },
  it: {
    eyebrow: 'Da portare a casa',
    h2: 'Le cose che restano',
    lede: 'Tre pezzi che stanno nella stessa stanza della villa. Ognuno viene spedito anche fuori dalla Finlandia.',
    cta: 'Vedi il prodotto',
    note: `Prezzi del negozio partner, letti il ${PRICE_AS_OF}. Vende e spedisce un negozio finlandese, non noi.`,
  },
  nl: {
    eyebrow: 'Mee naar huis',
    h2: 'De dingen die blijven',
    lede: 'Drie stukken die in dezelfde kamer horen als de villa. Elk wordt ook buiten Finland verzonden.',
    cta: 'Bekijk het product',
    note: `Prijzen van de partnerwinkel, gelezen op ${PRICE_AS_OF}. Een Finse winkel verkoopt en verzendt, wij niet.`,
  },
  'pt-BR': {
    eyebrow: 'Para levar',
    h2: 'O que fica',
    lede: 'Três peças que pertencem ao mesmo cômodo que a villa. Todas são enviadas para fora da Finlândia.',
    cta: 'Ver o produto',
    note: `Preços da loja parceira, lidos em ${PRICE_AS_OF}. Uma loja finlandesa vende e envia, não nós.`,
  },
  ja: {
    eyebrow: '持ち帰る',
    h2: 'あとに残るもの',
    lede: 'ヴィラと同じ部屋に似合う三点。いずれもフィンランド国外へ発送されます。',
    cta: '商品を見る',
    note: `価格は提携店のもので、${PRICE_AS_OF} に確認しました。販売と発送はフィンランドの店で、当サイトではありません。`,
  },
  'zh-CN': {
    eyebrow: '带回家',
    h2: '留下来的东西',
    lede: '三件与这栋别墅同处一室的物件。每一件都可寄往芬兰以外。',
    cta: '查看商品',
    note: `价格为合作商店自己的定价，于 ${PRICE_AS_OF} 读取。由芬兰的商店销售并寄送，而非我们。`,
  },
  ko: {
    eyebrow: '가져갈 것',
    h2: '남는 물건들',
    lede: '이 빌라와 같은 방에 어울리는 세 가지. 모두 핀란드 밖으로도 배송됩니다.',
    cta: '상품 보기',
    note: `가격은 제휴 상점의 것이며 ${PRICE_AS_OF}에 확인했습니다. 핀란드의 상점이 판매하고 배송합니다.`,
  },
}

/** laplandgifts on verkoston oma sivusto, joten linkki on tavallinen. */
const giftsUrl = (slug: string, lang: Lang) => {
  const prefix = lang === 'en' ? '' : `/${lang === 'pt-BR' ? 'br' : lang === 'zh-CN' ? 'cn' : lang === 'ko' ? 'kr' : lang}`
  return `https://laplandgifts.com${prefix}/product/${slug}`
}

export default function LaplandObjects() {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const pick = (v: Record<'fi' | 'en', string>) => (lang === 'fi' ? v.fi : v.en)

  return (
    <section className="border-y border-[color:var(--color-mist)]/60 bg-[color:var(--color-onyx)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7">
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className="mt-3 font-heading text-3xl leading-[1.1] text-[color:var(--color-snow)] md:text-4xl">
          {c.h2}
        </h2>
        <p className="mt-4 max-w-2xl font-body leading-relaxed text-[color:var(--color-bone)]/85">
          {c.lede}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OBJECTS.map((o) => (
            <a
              key={o.slug}
              href={giftsUrl(o.slug, lang)}
              className="group flex flex-col overflow-hidden rounded-lg border border-[color:var(--color-mist)] bg-[color:var(--color-charcoal)] transition-colors hover:border-[color:var(--color-brass)]/70"
            >
              {/* 🔴 Kuvalava on valkoinen mustan kortin sisällä: kumppanien
                  tuotekuvat on kuvattu valkoista vasten, joten musta lava
                  tekisi jokaisesta kuvasta valkoisen laatikon. Sama ratkaisu
                  kuin laplandgiftsin tuotekortissa. */}
              <div className="m-3 mb-0 overflow-hidden rounded bg-white p-4">
                <picture>
                  <source srcSet={`/img/objects/${o.image}.avif`} type="image/avif" />
                  <img
                    src={`/img/objects/${o.image}.webp`}
                    alt={pick(o.name)}
                    width={720}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </picture>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-heading text-xl leading-snug text-[color:var(--color-snow)]">
                  {pick(o.name)}
                </h3>
                <p className="flex-1 font-body text-sm leading-relaxed text-[color:var(--color-bone)]/70">
                  {pick(o.note)}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-heading text-lg text-[color:var(--color-brass)]">
                    {o.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm text-[color:var(--color-bone)]/80 group-hover:text-[color:var(--color-brass-bright)]">
                    {c.cta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 font-body text-xs leading-relaxed text-[color:var(--color-bone)]/45">
          {c.note}
        </p>
      </div>
    </section>
  )
}
