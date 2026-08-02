import { useLocation } from 'react-router-dom'

export type Lang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'

export function useLang(): Lang {
  const { pathname } = useLocation()
  if (pathname === '/fi' || pathname.startsWith('/fi/')) return 'fi'
  if (pathname === '/de' || pathname.startsWith('/de/')) return 'de'
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja'
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
  if (pathname === '/br' || pathname.startsWith('/br/')) return 'pt-BR'
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'zh-CN'
  if (pathname === '/kr' || pathname.startsWith('/kr/')) return 'ko'
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr'
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it'
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'nl'
  if (pathname === '/sv' || pathname.startsWith('/sv/')) return 'sv'
  return 'en'
}

const LANG_TO_PREFIX: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja',
  es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
}

/**
 * Add the trailing slash the canonical URL and the sitemap both use.
 *
 * 🔴 Every internal link used to omit it. Cloudflare Pages answers `/fi/villas`
 * with a 308 to `/fi/villas/`, so a browser following a link took two round
 * trips and Googlebot crawled two URLs for every one page. Search Console on
 * 2026-08-02 counted **328 pages in the "page with redirect" bucket** — the
 * single largest reason in the not-indexed report, and pure waste: the
 * redirect targets were already indexed.
 *
 * The canonical tag, the sitemap and the hreflang set have always used the
 * trailing slash. This makes the links agree with them.
 */
const withSlash = (p: string): string => (p.endsWith('/') || p.includes('#') || p.includes('?') ? p : `${p}/`)

export function useLocalePath() {
  const lang = useLang()
  return (path: string): string => {
    if (lang === 'en') return withSlash(path)
    const prefix = `/${LANG_TO_PREFIX[lang]}`
    if (path === '/') return `${prefix}/`
    return withSlash(`${prefix}${path.startsWith('/') ? path : `/${path}`}`)
  }
}

export type Bcp47 = 'en-US' | 'fi-FI' | 'de-DE' | 'ja-JP' | 'es-ES' | 'pt-BR' | 'zh-CN' | 'ko-KR' | 'fr-FR' | 'it-IT' | 'nl-NL' | 'sv-SE'

export function useHtmlLang(): Bcp47 {
  const lang = useLang()
  if (lang === 'fi') return 'fi-FI'
  if (lang === 'de') return 'de-DE'
  if (lang === 'ja') return 'ja-JP'
  if (lang === 'es') return 'es-ES'
  if (lang === 'pt-BR') return 'pt-BR'
  if (lang === 'zh-CN') return 'zh-CN'
  if (lang === 'ko') return 'ko-KR'
  if (lang === 'fr') return 'fr-FR'
  if (lang === 'it') return 'it-IT'
  if (lang === 'nl') return 'nl-NL'
  if (lang === 'sv') return 'sv-SE'
  return 'en-US'
}
