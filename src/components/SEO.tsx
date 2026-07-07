// 2026-05-21: locale-aware — hreflang × 11 + og:locale + JSON-LD inLanguage.
import type { ReactNode } from 'react';
import { useEffect } from 'react';
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

const SUPPORTED: Lang[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl'];
const URL_PREFIX_OF: Record<Lang, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es',
  'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl',
};
const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL',
};
const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES',
  'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL',
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

export default function SEO({
  title,
  description,
  path,
  canonical,
  canonicalPath,
  schema,
  jsonLd,
  keywords,
  breadcrumbs,
  noindex,
}: SEOProps): ReactNode {
  const lang = useLang();
  const bcp47 = BCP47[lang];
  const fullTitle = title.includes('|') ? title : `${title} | ${SITE_NAME}`;
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

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          inLanguage: bcp47,
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: `${BASE}${b.url}`,
          })),
        }
      : null;

  const localizedLd = ld ? injectInLanguage(JSON.parse(JSON.stringify(ld)), bcp47) : null;

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
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      {SUPPORTED.filter((l) => l !== lang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALE[l]} />
      ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
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
