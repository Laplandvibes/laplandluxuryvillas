// The ONLY way a price is allowed to reach this site's UI or its structured
// data. Read this before you add a number anywhere.
//
// Why this file exists (2026-07-26)
// ---------------------------------
// Every price this site had ever shown — 8 villa nightly rates and 7
// experience rates — was hand-written in the initial launch commit (880fbf1,
// 2026-05-04) with no source of any kind. They rendered on the cards, on the
// villa detail pages, and went to Google as `priceRange` structured data,
// which is a claim we were making to a search engine about a real business's
// rates. `villas.ts` and `experiences.ts` both carried a header forbidding
// exactly that ("never invent a price"). The numbers were removed 2026-07-26.
//
// The rule, encoded in the type below
// -----------------------------------
// A price is not a number. A price is a number PLUS the official URL it was
// read from PLUS the date it was read. You cannot construct a `VerifiedRate`
// without all three, so a bare estimate no longer type-checks — that is the
// entire point, and it is why this is an interface and not `number`.
//
// What counts as `source`
// -----------------------
//   YES — the property's own official domain, showing an explicit per-night
//         amount you can quote.
//   NO  — an OTA (Trip.com, Sembo, Booking, Expedia), a blog, a "cheapest we
//         found" article, a screenshot, or another LV site. Those are
//         date-dependent spot quotes for one search, not a published rate.
//
// 🔴 Checked 2026-07-26 across all 7 named properties: NONE publishes a
// stable, dateless "from €X/night". Five show nothing but a date picker. Two
// (Kakslauttanen, Wilderness Hotels/Nellim) inject a live lowest-available
// rate into the room page — Nellim listed three near-identical Arctic Suites
// at €630 / €140 / €157 on one screen, which is proof the figure is a booking
// -engine lookup and not a rate card. So no entry sets a rate today, and the
// honest "on request" branch is what every surface renders.
//
// If you are adding one back: verify it on the official domain, fill in all
// four fields, and expect it to go stale. When in doubt, leave it unset — the
// concierge path is already built, already translated into 12 locales, and
// costs us nothing. A wrong four-figure rate on a site that sells luxury is
// the most expensive kind of mistake we can make.
import type { Lang } from './affiliate'

export interface VerifiedRate {
  /** The amount as published. No rounding, no "about", no averaging. */
  amount: number
  /** ISO 4217. Drives `Intl.NumberFormat` — never hard-code a currency glyph. */
  currency: string
  /** The official URL this figure was read from. Not an OTA, not a blog. */
  source: string
  /** ISO date (YYYY-MM-DD) the figure was last read from `source`. */
  lastVerified: string
}

/**
 * BCP-47 tag per site language, so `Intl` picks the right decimal/grouping
 * separator and currency placement: fi "1 450 €", de "1.450 €", en "€1,450",
 * ja "€1,450". Never format money by concatenating a glyph to a string.
 */
const PRICE_LOCALE: Record<Lang, string> = {
  en: 'en-GB',
  fi: 'fi-FI',
  sv: 'sv-SE',
  de: 'de-DE',
  fr: 'fr-FR',
  it: 'it-IT',
  es: 'es-ES',
  nl: 'nl-NL',
  ja: 'ja-JP',
  ko: 'ko-KR',
  'pt-BR': 'pt-BR',
  'zh-CN': 'zh-CN',
}

/** Locale-correct display string for a verified rate. */
export function formatRate(rate: VerifiedRate, lang: Lang): string {
  return new Intl.NumberFormat(PRICE_LOCALE[lang] ?? 'en-GB', {
    style: 'currency',
    currency: rate.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(rate.amount)
}

/**
 * `priceRange` for schema.org, or `undefined` when there is no verified rate.
 *
 * 🔴 `undefined` means the CALLER MUST OMIT THE KEY. Do not fall back to
 * "On request" — that used to be emitted here, and a junk string in structured
 * data is still a statement to Google about a real business. No rate, no key.
 * Locale-neutral by design: structured data is read by a crawler, not a
 * visitor, so it does not follow the page language.
 */
export function ratePriceRange(rate: VerifiedRate | undefined): string | undefined {
  if (!rate) return undefined
  return `${formatRate(rate, 'en')}+`
}
