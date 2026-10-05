// Runtime accessor for per-page SEO title/description (static pages).
//
// Single source of truth: src/locales/seo-meta.json — the SAME file read by
// scripts/generate-prerender-meta.mjs, so the prerendered first-byte <title> /
// <meta description> are byte-identical to what these page components render at
// runtime (no English placeholder on /fi/, /de/, … subpages).
//
// Falls back to English if a locale is somehow missing, so the UI never breaks.

import seoMeta from '../locales/seo-meta.json'
import type { Lang } from '../i18n/useLang'

type Entry = { title: string; description: string }
type PageKey =
  | 'home'
  | 'villas'
  | 'suites'
  | 'destinations'
  | 'experiences'
  | 'midnight-sun'
  | 'private-inquiry'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'cookie-policy'

const MAP = seoMeta as unknown as Record<string, Record<string, Entry>>

export function getPageSeo(page: PageKey, lang: Lang): Entry {
  const byLang = MAP[page]
  if (!byLang) return { title: '', description: '' }
  return byLang[lang] ?? byLang.en
}

const DEST_SUFFIX = (seoMeta as unknown as { _destinationTitleSuffix?: Record<string, string> })
  ._destinationTitleSuffix

/** Localized descriptive suffix for a /destinations/:slug <title>, composed by
 *  destinationTitle() in detailMeta.mjs. scripts/generate-prerender-meta.mjs reads the
 *  same seo-meta.json key with the same fallback, so the static and client titles match. */
export function getDestinationTitleSuffix(lang: Lang): string {
  if (!DEST_SUFFIX) return 'Lapland · Private Villas, Suites & Aurora'
  return DEST_SUFFIX[lang] ?? DEST_SUFFIX.en
}
