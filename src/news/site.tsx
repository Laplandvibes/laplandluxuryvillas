/**
 * Uutisosion SIVUSTOSOVITIN — laplandluxuryvillas.com.
 *
 * Osio on kopioitu laplandflights.fi:n mallista laplandnaturen kautta (24.9.2026).
 * Tietomalli, rekisteri, kortit, runko ja portti ovat tavu tavulta samat; vain tämä
 * tiedosto, news.css ja embeds.tsx tuntevat sivuston.
 *
 * Tämä on verkoston DOKUMENTOITU VARIANTTI: Cormorant Garamond -otsikot, DM Sans
 * leipäteksti, deep-night/onyx pohja ja **messinki `#C9A46B` pinkin sijaan**. Osiossa
 * ei ole pinkkiä lainkaan — ei linkeissä, ei korostuksissa (CLAUDE.md: agentti vaihtoi
 * kerran tämän sivuston messingin pinkiksi ja se peruttiin 16.8.2026).
 *
 * Erot malliin, kaikki sivuston omasta rakenteesta:
 *  1. Navi ja alatunniste tulevat App.tsx:stä ⇒ NewsChrome kääriytyy vain juureensa.
 *  2. Otsikot ja metat sivuston omalla <SEO>-komponentilla, joka on komponentti eikä
 *     hookki ⇒ useNewsHead palauttaa ReactNoden.
 *  3. Murupolun JSON-LD:tä EI latota tässä: esirenderöijä kirjoittaa sen jokaiselle
 *     reitille (mitattu laplandnaturessa livenä 24.9. — oma lohko tuotti kaksi).
 *  4. Ei mainosruudukkoa jutun alle.
 */
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import type { NewsBlock, NewsMeta } from './types'
import { ScaleFigure } from './embeds'
import './news.css'

export const SITE = {
  name: 'LaplandLuxuryVillas',
  origin: 'https://laplandluxuryvillas.com',
  /** Osion polku ilman kieliprefiksiä. Sama arvo scripts/news-prerender.mjs:ssä. */
  path: '/news',
} as const

/** Sivuston omat sivut jutun perään — sama linkkijoukko kuin navissa. */
function MorePages({ current }: { current: string }) {
  const lang = useLang()
  const to = useLocalePath()
  const c = COPY[lang].nav
  const items = [
    { href: '/villas', label: c.villas },
    { href: '/suites', label: c.suites },
    { href: '/destinations', label: c.destinations },
    { href: '/experiences', label: c.experiences },
    { href: '/midnight-sun', label: c.midnightSun },
    { href: '/about', label: c.about },
  ].filter((i) => !current.startsWith(i.href))
  return (
    <nav className="nw-morepages" aria-label={SITE.name}>
      <div className="wrap">
        <ul>
          {items.map((i) => (
            <li key={i.href}><Link to={to(i.href)}>{i.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function NewsChrome({ current, children }: { current: string; children: ReactNode }) {
  return (
    <div className="nw">
      {children}
      <MorePages current={current} />
    </div>
  )
}

export function useNewsHead(m: {
  title: string
  description: string
  path: string
  image?: string
  breadcrumbs: { name: string; path: string }[]
  jsonLd?: unknown[]
}): ReactNode {
  const items = (m.jsonLd ?? []) as object[]
  return (
    <SEO
      title={m.title}
      description={m.description}
      canonicalPath={m.path}
      jsonLd={items.length === 1 ? items[0] : ({ '@context': 'https://schema.org', '@graph': items } as object)}
    />
  )
}

export function renderEmbed(block: Extract<NewsBlock, { t: 'embed' }>, meta: NewsMeta): ReactNode {
  const cfg = meta.embeds?.[block.id]
  if (!cfg) return null
  if (cfg.type === 'scale') return <ScaleFigure config={cfg} block={block} />
  return null
}

/** Tällä sivustolla ei ole jutun alle tulevaa mainosruudukkoa. */
export function NewsAds(_: { meta: NewsMeta }) {
  return null
}

export function NotFoundPage() {
  return (
    <div className="nw">
      <header className="nw-head">
        <div className="wrap"><h1 className="nw-h1">404</h1></div>
      </header>
    </div>
  )
}
