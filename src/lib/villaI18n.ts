// Data-layer i18n for villas + destinations. Base content (villas.ts/destinations.ts)
// is English; native translations live in per-language overlay files content.<lang>.ts.
// Missing fields/langs fall back to English — the site never breaks.
import type { Villa } from './villas'
import type { Destination } from './destinations'
import type { Experience } from './experiences'
import type { Lang } from './affiliate'

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>
interface ContentOverlay {
  villas?: Record<string, VillaOv>
  destinations?: Record<string, DestOv>
  experiences?: Record<string, ExpOv>
}

// Lazy glob: each content.<lang>.ts is its own chunk, fetched by the App-level
// CopyGate alongside the copy chunk. Was `eager: true`, which bundled all 10
// overlay languages into the main bundle.
const modules = import.meta.glob<{ default: ContentOverlay }>('./content.*.ts')
const OVERLAYS: Partial<Record<Lang, ContentOverlay>> = {}
const loaded = new Set<string>(['en'])

export function isOverlayLoaded(lang: Lang): boolean {
  return loaded.has(lang)
}

export function loadOverlays(lang: Lang): Promise<void> {
  if (!lang || loaded.has(lang)) return Promise.resolve()
  const entry = Object.keys(modules).find((p) => p.endsWith(`content.${lang}.ts`))
  if (!entry) { loaded.add(lang); return Promise.resolve() }
  return modules[entry]().then((mod) => {
    if (mod && mod.default) OVERLAYS[lang] = mod.default
    loaded.add(lang)
  })
}

const sameLen = <T,>(a: T[] | undefined, base: T[]): T[] => (a && a.length === base.length ? a : base)

export function overlayVilla(v: Villa, lang: Lang): Villa {
  if (lang === 'en') return v
  const o = OVERLAYS[lang]?.villas?.[v.slug]
  if (!o) return v
  return {
    ...v,
    tagline: o.tagline ?? v.tagline,
    copy: (o.copy && o.copy.length === 2 ? o.copy : v.copy) as Villa['copy'],
    signature: sameLen(o.signature, v.signature),
  }
}

export function overlayDestination(d: Destination, lang: Lang): Destination {
  if (lang === 'en') return d
  const o = OVERLAYS[lang]?.destinations?.[d.slug]
  if (!o) return d
  return {
    ...d,
    position: o.position ?? d.position,
    copy: (o.copy && o.copy.length === 2 ? o.copy : d.copy) as Destination['copy'],
    highlights: sameLen(o.highlights, d.highlights),
    arrival: o.arrival ?? d.arrival,
    auroraNote: o.auroraNote ?? d.auroraNote,
  }
}

export function overlayExperience(e: Experience, lang: Lang): Experience {
  if (lang === 'en') return e
  const o = OVERLAYS[lang]?.experiences?.[e.slug]
  if (!o) return e
  return {
    ...e,
    hook: o.hook ?? e.hook,
    copy: (o.copy && o.copy.length === 2 ? o.copy : e.copy) as Experience['copy'],
    available: o.available ?? e.available,
  }
}
