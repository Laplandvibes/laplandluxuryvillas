// 2026-05-21: locale-aware — hreflang × 11 + og:locale + JSON-LD inLanguage.
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { dedupeHeadLinks } from '../shared/seo/dedupeHeadLinks';
import { useLang, type Lang } from '../i18n/useLang';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  canonical?: string;
  canonicalPath?: string;
  schema?: object;
  jsonLd?: object;
  keywords?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex?: boolean;
}

const BASE = 'https://laplandluxuryvillas.com';
const SITE_NAME = 'LaplandLuxuryVillas';

const SUPPORTED: Lang[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];
const URL_PREFIX_OF: Record<Lang, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es',
  'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl', sv: '/sv',
};
const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};
const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES',
  'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', sv: 'sv_SE',
};

function injectInLanguage(node: unknown, bcp47: string): unknown {
  if (Array.isArray(node)) return node.map((n) => injectInLanguage(n, bcp47));
  if (node && typeof node === 'object') {
    const o = node as Record<string, unknown>;
    if (o['@type'] && o.inLanguage === undefined) o.inLanguage = bcp47;
    if (Array.isArray(o['@graph'])) o['@graph'] = (o['@graph'] as unknown[]).map((n) => injectInLanguage(n, bcp47));
    return o;
  }
  return node;
}

// Rakenteisen datan sisäiset osoitteet samaan muotoon kuin kanoninen, hreflang ja sivukartta:
// sivun OMA kieliversio ja loppukauttaviiva. Sivujen schema-oliot on kirjoitettu englannin
// kauttaviivattomilla osoitteilla (https://laplandluxuryvillas.com/villas), jolloin esim. /fi/villas/
// kertoi Googlelle osoitteekseen englanninkielisen sivun 308-ohjautuvan muodon.
// Mitattu 12.–13.11.2026, mittari lv-ops scripts/audit_jsonld_osoitteet.mjs.
// - polullinen osoite -> kieliversio + kauttaviiva (/fi/villas/)
// - juuri -> https://laplandluxuryvillas.com/
// - tiedostot (.jpg), ankkurit (#org) ja ulkoiset osoitteet jäävät ennalleen
// Sivun oma BreadcrumbList (`breadcrumbs` tai olio schemassa) ei tulostu: esirenderöijä kirjoittaa jokaiselle
// sivulle murupolun sivun kielellä ja oikeilla osoitteilla, kun taas sivujen omat oliot sanoivat "Home" ja
// englannin osoitteen joka kielellä (sama ratkaisu kuin laplandcarrental 25.9. ja laplandwellness 12.11.2026).
const INTERNAL_URL = /^https:\/\/laplandluxuryvillas\.com((?:\/[A-Za-z0-9_-]+)*)\/?$/;
const LOCALE_SEGMENT = /^\/(fi|de|ja|es|br|cn|kr|fr|it|nl|sv)(?=\/|$)/;
function localizeUrls(node: unknown, localePrefix: string, key = ''): unknown {
  if (typeof node === 'string') {
    const m = INTERNAL_URL.exec(node);
    if (!m) return node;
    const raw = m[1] || '/';
    if (raw === '/' && key !== 'item') return `${BASE}/`;
    const path = raw.replace(LOCALE_SEGMENT, '') || '/';
    return `${BASE}${localePrefix}${path === '/' ? '' : path}/`;
  }
  if (Array.isArray(node)) return node.map((n) => localizeUrls(n, localePrefix, key));
  if (node && typeof node === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) out[k] = localizeUrls(v, localePrefix, k);
    return out;
  }
  return node;
}
const isBreadcrumbList = (x: unknown) =>
  Boolean(x && typeof x === 'object' && (x as { '@type'?: unknown })['@type'] === 'BreadcrumbList');
function dropBreadcrumbs(ld: unknown): unknown {
  if (Array.isArray(ld)) {
    const kept = ld.filter((x) => !isBreadcrumbList(x));
    return kept.length ? kept : null;
  }
  if (isBreadcrumbList(ld)) return null;
  if (ld && typeof ld === 'object' && Array.isArray((ld as { '@graph'?: unknown })['@graph'])) {
    const o = ld as Record<string, unknown>;
    return { ...o, '@graph': (o['@graph'] as unknown[]).filter((x) => !isBreadcrumbList(x)) };
  }
  return ld;
}

export default function SEO({
  title,
  description,
  path,
  canonical,
  canonicalPath,
  schema,
  jsonLd,
  keywords,
  noindex,
}: SEOProps): ReactNode {
  const lang = useLang();
  const bcp47 = BCP47[lang];
  // No brand suffix in the title (Vesa 2026-09-22): Google prints the site name and
  // domain above every result, so " | LaplandLuxuryVillas" only repeated them and spent
  // characters of the ~60 the result shows. Static HTML and hydration agree.
  const fullTitle = title;
  const p = path ?? canonical ?? canonicalPath ?? '/';
  const localePrefix = URL_PREFIX_OF[lang];
  // Trailing-slash form matches the prerendered static HTML (Cloudflare Pages
  // serves /path/index.html at /path/ with 200; the no-slash form 308-redirects).
  const enUrl = `${BASE}${p === '/' ? '' : p}`.replace(/\/?$/, '/');
  const url = `${BASE}${localePrefix}${p === '/' ? '' : p}`.replace(/\/?$/, '/');
  const ld = schema ?? jsonLd;

  useEffect(() => {
    document.documentElement.lang = bcp47;
  }, [bcp47]);

  // React 19 nostaa alla renderöidyt <link>-tagit headiin mutta ei korvaa esirenderöijän
  // kirjoittamia samanlaisia ⇒ 26 hreflangia ja 2 kanonista (mitattu 25.9.2026). Arvot ovat
  // identtiset, joten ei hakukonevirhe, mutta se peitti alleen oikean vian (sama kieli kahteen
  // ERI osoitteeseen). Apuri poistaa vain tarkat kaksoiskappaleet.
  useEffect(() => {
    dedupeHeadLinks();
  }, [url, bcp47]);

  const keptLd = ld ? dropBreadcrumbs(ld) : null;
  const localizedLd = keptLd ? localizeUrls(injectInLanguage(JSON.parse(JSON.stringify(keptLd)), bcp47), localePrefix) : null;

  return (
    <>
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />
      {SUPPORTED.map((l) => {
        const lp = URL_PREFIX_OF[l];
        // Short hreflang codes (en, fi, pt-BR, …) + trailing-slash hrefs:
        // must match the prerenderer (_prerender_routes.mjs) and sitemap.xml exactly.
        const href = `${BASE}${lp}${p === '/' ? '' : p}`.replace(/\/?$/, '/');
        return <link key={l} rel="alternate" hrefLang={l} href={href} />;
      })}
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      {/* og:locale:alternate EI täällä (8.10.2026): esirenderöity HTML ei kirjoita sitä, ja Facebook lukee vain
          staattisen HTML:n, joten JS:n lisäämällä tagilla ei ollut lukijaa (gate:og-js "vain-js" joka sivulla). */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {localizedLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedLd) }}
        />
      )}
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
    </>
  );
}

export function useSEO(_: SEOProps): void {
  /* no-op */
}
