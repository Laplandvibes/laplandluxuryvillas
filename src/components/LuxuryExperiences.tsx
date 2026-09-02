import { ArrowUpRight } from 'lucide-react'
import { LUXURY_PICKS, PRICE_AS_OF, VERIFIED_ON } from '../shared/gyg/luxury'
import { gygProduct } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, type Lang } from '../i18n/useLang'

// ─────────────────────────────────────────────────────────────────────────────
// LuxuryExperiences — the fifteen bookable private experiences.
//
// Vesa 2026-08-01: "miksi meillä ei ole täällä myynnissä vaikka piti olla
// tehtynä jokaiselle sivulle jo syvälinkitetyt luksustuotteet myyntiin?"
//
// They existed as curation and never reached a page: the "Luksus & yksityiset"
// bucket in `shared/activities/heroes.ts` is annotated "→ laplandluxuryvillas
// .com", but the site was missing from `scripts/gyg-rollout.mjs`'s SITES list,
// so nothing was ever rolled out. Meanwhile the five hand-written experience
// CTAs on this site all pointed at `lapland-finland-l2652/?q=…`, and a
// GetYourGuide LOCATION page ignores `?q=` — every one of them landed on the
// same bare listing.
//
// Each card here opens ONE product's own booking page, through the Worker so
// the click lands in D1. Vesa's rule, 2026-07-31: if we name the experience,
// the button belongs on that operator's page, where the visitor picks a date
// and adds to cart. Not a search.
//
// Prices are GetYourGuide's own and are rendered with the source and the date
// beside them, never as our price.
// ─────────────────────────────────────────────────────────────────────────────

const COPY: Record<Lang, { eyebrow: string; h2: string; lede: string; cta: string; from: string; priceNote: (p: string, v: string) => string }> = {
  fi: { eyebrow: 'Varattavissa', h2: 'Yksityiset elämykset', lede: 'Jokainen kortti avaa järjestäjän oman varaussivun. Valitset päivän ja lisäät ostoskoriin, et etsi.', cta: 'Katso saatavuus', from: 'alkaen', priceNote: (p, v) => `Hinnat GetYourGuiden omia, luettu ${p}. Tuotesivut tarkistettu ${v}.` },
  en: { eyebrow: 'Bookable', h2: 'Private experiences', lede: "Each card opens the operator's own booking page. You pick a date and add to cart, you do not search.", cta: 'Check availability', from: 'from', priceNote: (p, v) => `Prices are GetYourGuide's own, read ${p}. Product pages checked ${v}.` },
  de: { eyebrow: 'Buchbar', h2: 'Private Erlebnisse', lede: 'Jede Karte öffnet die Buchungsseite des Anbieters. Sie wählen ein Datum und legen in den Warenkorb, statt zu suchen.', cta: 'Verfügbarkeit prüfen', from: 'ab', priceNote: (p, v) => `Preise von GetYourGuide, gelesen am ${p}. Produktseiten geprüft am ${v}.` },
  ja: { eyebrow: '予約できます', h2: 'プライベート体験', lede: '各カードは主催者の予約ページを直接開きます。探すのではなく、日付を選んでカートに入れるだけです。', cta: '空き状況を見る', from: '', priceNote: (p, v) => `料金はGetYourGuideのもの（${p} 時点）。商品ページ確認日 ${v}。` },
  es: { eyebrow: 'Reservable', h2: 'Experiencias privadas', lede: 'Cada tarjeta abre la página de reserva del propio operador. Elige fecha y añade al carrito, no busca.', cta: 'Ver disponibilidad', from: 'desde', priceNote: (p, v) => `Precios de GetYourGuide, leídos el ${p}. Páginas comprobadas el ${v}.` },
  'pt-BR': { eyebrow: 'Reservável', h2: 'Experiências privadas', lede: 'Cada cartão abre a página de reserva do próprio operador. Você escolhe a data e adiciona ao carrinho, sem procurar.', cta: 'Ver disponibilidade', from: 'a partir de', priceNote: (p, v) => `Preços do próprio GetYourGuide, lidos em ${p}. Páginas verificadas em ${v}.` },
  'zh-CN': { eyebrow: '可预订', h2: '私人体验', lede: '每张卡片直接打开运营商自己的预订页面。你只需选择日期加入购物车，无需搜索。', cta: '查看可订日期', from: '起价', priceNote: (p, v) => `价格来自 GetYourGuide，读取于 ${p}。产品页核查于 ${v}。` },
  ko: { eyebrow: '예약 가능', h2: '프라이빗 체험', lede: '각 카드는 운영사의 예약 페이지를 바로 엽니다. 검색할 필요 없이 날짜를 고르고 담으면 됩니다.', cta: '예약 가능 여부 확인', from: '부터', priceNote: (p, v) => `가격은 GetYourGuide 기준, ${p} 확인. 상품 페이지 ${v} 점검.` },
  fr: { eyebrow: 'Réservable', h2: 'Expériences privées', lede: "Chaque carte ouvre la page de réservation de l'organisateur. Vous choisissez une date et ajoutez au panier, sans chercher.", cta: 'Voir les disponibilités', from: 'à partir de', priceNote: (p, v) => `Prix de GetYourGuide, relevés le ${p}. Pages produits vérifiées le ${v}.` },
  it: { eyebrow: 'Prenotabile', h2: 'Esperienze private', lede: "Ogni scheda apre la pagina di prenotazione dell'operatore. Scegli una data e aggiungi al carrello, senza cercare.", cta: 'Vedi disponibilità', from: 'da', priceNote: (p, v) => `Prezzi di GetYourGuide, letti il ${p}. Pagine prodotto verificate il ${v}.` },
  nl: { eyebrow: 'Te boeken', h2: 'Privé-ervaringen', lede: 'Elke kaart opent de boekingspagina van de aanbieder zelf. U kiest een datum en legt hem in uw mandje, zoeken hoeft niet.', cta: 'Bekijk beschikbaarheid', from: 'vanaf', priceNote: (p, v) => `Prijzen van GetYourGuide zelf, gelezen op ${p}. Productpagina's gecontroleerd op ${v}.` },
  sv: { eyebrow: 'Bokningsbart', h2: 'Privata upplevelser', lede: 'Varje kort öppnar arrangörens egen bokningssida. Du väljer datum och lägger i varukorgen, du behöver inte leta.', cta: 'Se tillgänglighet', from: 'från', priceNote: (p, v) => `Priser från GetYourGuide, avlästa ${p}. Produktsidor kontrollerade ${v}.` },
}

export default function LuxuryExperiences() {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const fmt = (n: number) => new Intl.NumberFormat(lang === 'en' ? 'en-GB' : lang, { maximumFractionDigits: 0 }).format(n)

  return (
    <section className="bg-[color:var(--color-onyx)] py-16 md:py-24 border-y border-[color:var(--color-mist)]/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-7">
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">{c.h2}</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-bone)]/85 font-body leading-relaxed">{c.lede}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LUXURY_PICKS.map((p) => {
            const id = p.path.slice(p.path.lastIndexOf('-t') + 2)
            const href = gygProduct(p.path, `experience_${id}`, lang)
            return (
              <a
                key={p.path}
                href={href}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={() => trackAffiliateClick('gyg', `luxury_experience:${id}`, href)}
                className="group flex flex-col justify-between gap-5 rounded-xl border border-[color:var(--color-mist)]/60 bg-[color:var(--color-deep-night)] p-6 no-underline transition-colors hover:border-[color:var(--color-brass)]/60"
              >
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-body text-[color:var(--color-bone)]/75">
                    <span>{p.place}</span>
                    {p.duration && (
                      <>
                        <span className="text-[color:var(--color-mist)]">·</span>
                        <span>{p.duration}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-heading text-xl text-[color:var(--color-snow)] leading-tight">{p.title}</h3>
                </div>

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] font-body text-[color:var(--color-bone)]/70">{c.from}</div>
                    <div className="font-heading text-xl text-[color:var(--color-brass)]">{fmt(p.price)} €</div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 border border-[color:var(--color-brass)]/70 px-3.5 py-2 text-[10px] tracking-[0.18em] uppercase font-body text-[color:var(--color-brass)] transition-colors group-hover:bg-[color:var(--color-brass)] group-hover:text-[color:var(--color-deep-night)]">
                    {c.cta}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        <p className="mt-6 text-[11px] font-body text-[color:var(--color-bone)]/70">{c.priceNote(PRICE_AS_OF, VERIFIED_ON)}</p>
      </div>
    </section>
  )
}
