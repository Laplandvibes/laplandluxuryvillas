import { useEffect, useState } from 'react'
import { ArrowUpRight, BedDouble, Users, Maximize2 } from 'lucide-react'
import { CABINS_API, lomarengasCabinUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'
import { useLang, type Lang } from '../i18n/useLang'

// ─────────────────────────────────────────────────────────────────────────────
// CabinCarousel — three named Lomarengas cabins under the partner ad.
//
// Vesa 2026-08-01: "eikö tämä Lomarengas-mainos voisi olla karuselli ja siihen
// olisi lisätty 3 kpl käsin haettuja suositeltuja rantasaunakohteita?"
//
// What is curated and what is live
// --------------------------------
// The SELECTION is ours and hand-made (`CURATED` below). The FACTS on each card
// are read live from the Worker's `/_cabins` parse of the Lomarengas product
// feed, refreshed daily. That split is deliberate: a hand-written price or
// capacity is stale the week after it ships, and a delisted cabin would keep
// selling itself. If a curated id is no longer in the feed the card simply does
// not render, and if fewer than two survive the whole section disappears rather
// than showing a lonely leftover.
//
// 🔴 WHY THE CARDS DO NOT SAY "RANTASAUNA"
// Vesa asked for lakeside-sauna cabins specifically, and that attribute is NOT
// in the feed. Each cabin's own page would settle it, but lomarengas.fi is
// blocked in the review browser here, so on 2026-08-01 there was no way to
// check it per cabin. The cards therefore state only what the feed carries and
// what a reader can check on the destination page: size, bedrooms, capacity,
// the operator's star rating and the weekly from-price. The ad copy above still
// says many Lomarengas cabins have a private lakeside sauna, which is
// Lomarengas's own general claim about its inventory, not our claim about these
// three. Swap `CURATED` for verified lakeside-sauna ids once the pages can be
// opened, and only then may a card say so.
//
// 🔴 RUKA IS NOT LAPLAND (network rule). The feed's `ruka` group is Kuusamo /
// Koillismaa. The selection below is administrative Lapland only.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Hand-picked cabin ids. Chosen 2026-08-01 from the live feed on criteria that
 * are in the feed and therefore checkable: 5-star operator rating, the largest
 * floor areas in administrative Lapland, and enough bedrooms for the parties
 * this site's villas are booked by.
 */
const CURATED: readonly string[] = [
  '17899',  // Saajomaja, Saariselkä — 254 m², 6 bedrooms, sleeps 12
  '830347', // Villa Lumo, Ylläsjärvi — 210 m², 4 bedrooms, sleeps 8
  '16065',  // Pyhän kivi, Pyhätunturi — 300 m², 6 bedrooms, sleeps 12
]

interface Cabin {
  id: string
  name: string
  img: string
  slug: string
  place: string
  muni: string
  p?: number
  pe?: number
  sqm?: number
  br?: number
  stars?: number
  weeklyFrom?: number
}

interface CabinsPayload {
  updatedAt: string
  groups: Record<string, Cabin[]>
}

const COPY: Record<Lang, { eyebrow: string; h3: string; cta: string; sqm: string; bedrooms: string; sleeps: string; from: string; perWeek: string; sourceNote: (d: string) => string }> = {
  fi: { eyebrow: 'Mainos · käsin valitut', h3: 'Kolme tilavaa mökkiä Lapista', cta: 'Katso mökki', sqm: 'm²', bedrooms: 'makuuhuonetta', sleeps: 'nukkuu', from: 'alkaen', perWeek: '/ viikko', sourceNote: (d) => `Tiedot ja hinnat Lomarenkaan omasta tuotesyötteestä, päivitetty ${d}.` },
  en: { eyebrow: 'Ad · hand-picked', h3: 'Three large cabins in Lapland', cta: 'See the cabin', sqm: 'm²', bedrooms: 'bedrooms', sleeps: 'sleeps', from: 'from', perWeek: '/ week', sourceNote: (d) => `Details and prices from Lomarengas' own product feed, updated ${d}.` },
  de: { eyebrow: 'Anzeige · handverlesen', h3: 'Drei große Hütten in Lappland', cta: 'Hütte ansehen', sqm: 'm²', bedrooms: 'Schlafzimmer', sleeps: 'Schlafplätze', from: 'ab', perWeek: '/ Woche', sourceNote: (d) => `Angaben und Preise aus dem Produktfeed von Lomarengas, aktualisiert am ${d}.` },
  ja: { eyebrow: '広告・厳選', h3: 'ラップランドの広いコテージ3棟', cta: 'コテージを見る', sqm: 'm²', bedrooms: '寝室', sleeps: '定員', from: '', perWeek: '／週', sourceNote: (d) => `情報と料金はLomarengasの商品フィードより。更新日 ${d}。` },
  es: { eyebrow: 'Anuncio · selección propia', h3: 'Tres cabañas amplias en Laponia', cta: 'Ver la cabaña', sqm: 'm²', bedrooms: 'dormitorios', sleeps: 'duerme', from: 'desde', perWeek: '/ semana', sourceNote: (d) => `Datos y precios del propio feed de productos de Lomarengas, actualizado el ${d}.` },
  'pt-BR': { eyebrow: 'Anúncio · seleção nossa', h3: 'Três cabanas amplas na Lapônia', cta: 'Ver a cabana', sqm: 'm²', bedrooms: 'quartos', sleeps: 'acomoda', from: 'a partir de', perWeek: '/ semana', sourceNote: (d) => `Dados e preços do próprio feed de produtos da Lomarengas, atualizado em ${d}.` },
  'zh-CN': { eyebrow: '广告 · 精选', h3: '拉普兰三座宽敞小屋', cta: '查看小屋', sqm: '平方米', bedrooms: '间卧室', sleeps: '可住', from: '起价', perWeek: '／周', sourceNote: (d) => `资料与价格来自 Lomarengas 自有商品数据，更新于 ${d}。` },
  ko: { eyebrow: '광고 · 직접 선정', h3: '라플란드의 넓은 오두막 3채', cta: '오두막 보기', sqm: 'm²', bedrooms: '침실', sleeps: '숙박', from: '부터', perWeek: '/ 주', sourceNote: (d) => `정보와 가격은 Lomarengas 자체 상품 피드 기준, ${d} 갱신.` },
  fr: { eyebrow: 'Annonce · sélection maison', h3: 'Trois grands chalets en Laponie', cta: 'Voir le chalet', sqm: 'm²', bedrooms: 'chambres', sleeps: 'couche', from: 'à partir de', perWeek: '/ semaine', sourceNote: (d) => `Informations et prix issus du flux produits de Lomarengas, mis à jour le ${d}.` },
  it: { eyebrow: 'Annuncio · selezione nostra', h3: 'Tre baite ampie in Lapponia', cta: 'Vedi la baita', sqm: 'm²', bedrooms: 'camere', sleeps: 'posti letto', from: 'da', perWeek: '/ settimana', sourceNote: (d) => `Dati e prezzi dal feed prodotti di Lomarengas, aggiornato il ${d}.` },
  nl: { eyebrow: 'Advertentie · handmatig gekozen', h3: 'Drie ruime huisjes in Lapland', cta: 'Bekijk het huisje', sqm: 'm²', bedrooms: 'slaapkamers', sleeps: 'slaapt', from: 'vanaf', perWeek: '/ week', sourceNote: (d) => `Gegevens en prijzen uit de eigen productfeed van Lomarengas, bijgewerkt op ${d}.` },
  sv: { eyebrow: 'Annons · handplockade', h3: 'Tre rymliga stugor i Lappland', cta: 'Se stugan', sqm: 'm²', bedrooms: 'sovrum', sleeps: 'sover', from: 'från', perWeek: '/ vecka', sourceNote: (d) => `Uppgifter och priser från Lomarengas egen produktfeed, uppdaterad ${d}.` },
}

export default function CabinCarousel({ sid }: { sid: string }) {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const [cabins, setCabins] = useState<Cabin[] | null>(null)
  const [updatedAt, setUpdatedAt] = useState('')

  useEffect(() => {
    let live = true
    fetch(CABINS_API)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((j: CabinsPayload) => {
        if (!live) return
        const all = ([] as Cabin[]).concat(...Object.values(j.groups ?? {}))
        const byId = new Map(all.map((x) => [String(x.id), x]))
        // Keep OUR order, drop anything the feed no longer carries.
        setCabins(CURATED.map((id) => byId.get(id)).filter((x): x is Cabin => Boolean(x)))
        setUpdatedAt((j.updatedAt || '').slice(0, 10))
      })
      .catch(() => { if (live) setCabins([]) })
    return () => { live = false }
  }, [])

  // Nothing while loading, and nothing if the feed left us with a single card —
  // one lonely cabin is not the "three we picked" the heading promises.
  if (!cabins || cabins.length < 2) return null

  const fmt = (n: number) => new Intl.NumberFormat(lang === 'en' ? 'en-GB' : lang, { maximumFractionDigits: 0 }).format(n)

  return (
    <section className="mt-8" aria-label={c.h3}>
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <div>
          <span className="eyebrow text-[color:var(--color-brass)]">{c.eyebrow}</span>
          <h3 className="mt-2 font-heading text-2xl sm:text-3xl text-[color:var(--color-snow)] leading-tight">{c.h3}</h3>
        </div>
      </div>

      {/* Horizontal rail: scrolls on small screens, three across from sm up.
          `relative` on the row is load-bearing — an absolutely positioned child
          inside a scroll row anchors to the nearest positioned ancestor, and
          without it the mobile viewport inflates (Lomarengas lesson 2026-07-25). */}
      <div className="relative -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
        {cabins.map((cab) => {
          const href = lomarengasCabinUrl(cab.slug, `${sid}_cabin_${cab.id}`, lang)
          return (
            <article
              key={cab.id}
              className="relative flex min-w-[78%] snap-start flex-col overflow-hidden rounded-xl border border-[color:var(--color-mist)]/60 bg-[color:var(--color-deep-night)] sm:min-w-0"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[color:var(--color-onyx)]">
                <img
                  src={cab.img}
                  alt={`${cab.name}, ${cab.place}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-body text-[color:var(--color-bone)]/75">
                    {cab.place === cab.muni ? cab.place : `${cab.place}, ${cab.muni}`}
                  </span>
                  {cab.stars ? (
                    <span className="text-[color:var(--color-brass)] text-[11px]" aria-label={`${cab.stars}/5`}>
                      {'★'.repeat(cab.stars)}
                    </span>
                  ) : null}
                </div>

                <h4 className="font-heading text-xl text-[color:var(--color-snow)] leading-tight mb-3">{cab.name}</h4>

                <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-body text-[color:var(--color-bone)]/80">
                  {cab.sqm ? (
                    <li className="inline-flex items-center gap-1.5">
                      <Maximize2 size={12} className="text-[color:var(--color-brass)]" aria-hidden="true" />
                      {fmt(cab.sqm)} {c.sqm}
                    </li>
                  ) : null}
                  {cab.br ? (
                    <li className="inline-flex items-center gap-1.5">
                      <BedDouble size={12} className="text-[color:var(--color-brass)]" aria-hidden="true" />
                      {cab.br} {c.bedrooms}
                    </li>
                  ) : null}
                  {cab.p ? (
                    <li className="inline-flex items-center gap-1.5">
                      <Users size={12} className="text-[color:var(--color-brass)]" aria-hidden="true" />
                      {c.sleeps} {cab.p}{cab.pe ? `+${cab.pe}` : ''}
                    </li>
                  ) : null}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-3">
                  {cab.weeklyFrom ? (
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.16em] font-body text-[color:var(--color-bone)]/70">{c.from}</div>
                      <div className="font-heading text-lg text-[color:var(--color-brass)]">
                        {fmt(cab.weeklyFrom)} € <span className="text-xs font-body text-[color:var(--color-bone)]/70">{c.perWeek}</span>
                      </div>
                    </div>
                  ) : <span />}

                  <a
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('lomarengas', `cabin:${sid}_${cab.id}`, href)}
                    className="inline-flex shrink-0 items-center gap-1.5 border border-[color:var(--color-brass)]/70 px-3.5 py-2 text-[10px] tracking-[0.18em] uppercase font-body text-[color:var(--color-brass)] no-underline transition-colors hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)]"
                  >
                    {c.cta}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* The numbers above are the advertiser's, not ours, and they have a date. */}
      {updatedAt && (
        <p className="mt-3 text-[11px] font-body text-[color:var(--color-bone)]/75">{c.sourceNote(updatedAt)}</p>
      )}
      <AffiliateDisclosure variant="compact" className="mt-3 !justify-start text-left" />
    </section>
  )
}
