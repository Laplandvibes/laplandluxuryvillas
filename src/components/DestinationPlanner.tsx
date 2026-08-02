import { ArrowUpRight, Plane, Search } from 'lucide-react'
import { DESTINATION_FACTS, destinationFacts } from '../shared/destinations/facts'
import { LUXURY_PICKS, PRICE_AS_OF, VERIFIED_ON } from '../shared/gyg/luxury'
import { SECTION_LABELS as S, s } from '../lib/destinationSections.i18n'
import { yearOfLight } from '../lib/daylight'
import { gygProduct, GYG_LINKS } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang } from '../i18n/useLang'

// ─────────────────────────────────────────────────────────────────────────────
// The three sections Vesa asked for on 2026-08-02, when he was asked what was
// still missing from the destination pages and picked all four options: images
// (wired directly into DestinationPage), a map and distances, when to come
// month by month, and something bookable in the place itself.
//
// 🔴 Every number on this page is either read from the fact registry with its
// own source, or DERIVED from one that is (latitude -> daylight). Nothing here
// is written by hand, because a hand-written seasonal claim across five
// destinations and twelve locales is 720 places to drift — the exact failure
// this site spent 2026-08-01 undoing.
// ─────────────────────────────────────────────────────────────────────────────

const ARCTIC_CIRCLE = 66.5633

/** Latitude range of the ladder, padded either side of the real spread. */
const LAT_MIN = 66.0
const LAT_MAX = 69.5
const pct = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100

/**
 * Where this destination sits, on the axis that actually matters here.
 *
 * A north-south latitude ladder rather than a geographic map: latitude is the
 * one coordinate the registry publishes with a source, and it is also the one
 * that decides the aurora band, the midnight sun and the polar night. Drawing
 * a true map would have meant inventing longitudes to place the dots.
 */
export function DestinationLocator({ slug }: { slug: string }) {
  const lang = useLang()
  const here = destinationFacts(slug)
  if (!here) return null

  const all = Object.values(DESTINATION_FACTS).sort((a, b) => b.latitude - a.latitude)

  return (
    <section className="bg-[color:var(--color-deep-night)] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <span className="eyebrow">{s(S.locEyebrow, lang)}</span>
        <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
          {s(S.locH2, lang)}
        </h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-bone)]/85 font-body leading-relaxed">
          {s(S.locLede, lang)}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-12">
          {/* The ladder. Decorative as a graphic — the same information is in
              the list beside it, which is what a screen reader reads. */}
          <div className="relative h-[320px] sm:h-[360px]" aria-hidden="true">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[color:var(--color-mist)]" />
            <div
              className="absolute left-0 right-0 border-t border-dashed border-[color:var(--color-brass)]/45"
              style={{ top: `${pct(ARCTIC_CIRCLE)}%` }}
            >
              <span className="absolute left-[30px] -top-2 text-[9px] tracking-[0.16em] uppercase font-body text-[color:var(--color-brass)]/80 bg-[color:var(--color-deep-night)] pr-1">
                {s(S.arcticCircle, lang)}
              </span>
            </div>
            {all.map((d) => {
              const isHere = d.slug === here.slug
              return (
                <div
                  key={d.slug}
                  className="absolute left-0 right-0 flex items-center gap-3"
                  style={{ top: `${pct(d.latitude)}%`, transform: 'translateY(-50%)' }}
                >
                  <span
                    className={
                      isHere
                        ? 'ml-[16px] h-3 w-3 rounded-full bg-[color:var(--color-brass)] ring-4 ring-[color:var(--color-brass)]/25'
                        : 'ml-[18px] h-2 w-2 rounded-full bg-[color:var(--color-bone)]/45'
                    }
                  />
                  <span
                    className={
                      isHere
                        ? 'font-heading text-lg text-[color:var(--color-brass)] leading-none'
                        : 'font-body text-xs text-[color:var(--color-bone)]/60 leading-none'
                    }
                  >
                    {d.name}
                  </span>
                </div>
              )
            })}
          </div>

          <ul className="space-y-3 list-none p-0 m-0">
            {all.map((d) => {
              const isHere = d.slug === here.slug
              return (
                <li
                  key={d.slug}
                  className={
                    'flex flex-wrap items-baseline gap-x-3 gap-y-1 border-l-2 pl-4 py-1 ' +
                    (isHere
                      ? 'border-[color:var(--color-brass)]'
                      : 'border-[color:var(--color-mist)]')
                  }
                >
                  <span
                    className={
                      isHere
                        ? 'font-heading text-xl text-[color:var(--color-brass)]'
                        : 'font-heading text-xl text-[color:var(--color-snow)]/80'
                    }
                  >
                    {d.name}
                  </span>
                  <span className="font-body text-xs text-[color:var(--color-bone)]/70">
                    {d.latitude.toFixed(2)}° N
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs text-[color:var(--color-bone)]/70">
                    <Plane size={11} className="text-[color:var(--color-brass)]" aria-hidden="true" />
                    {d.airport.name} ({d.airport.iata}) · {d.airport.distanceKm.value} km
                  </span>
                  {isHere && (
                    <span className="text-[10px] tracking-[0.16em] uppercase font-body text-[color:var(--color-brass)]">
                      {s(S.thisPlace, lang)}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-6 text-[11px] font-body text-[color:var(--color-bone)]/60">
          {s(S.locNote, lang)}
        </p>
      </div>
    </section>
  )
}

/** Month-by-month light, derived from the destination's own latitude. */
export function DestinationSeason({ slug }: { slug: string }) {
  const lang = useLang()
  const f = destinationFacts(slug)
  if (!f) return null

  const months = yearOfLight(f.latitude)
  const fmtMonth = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : lang, { month: 'short' })
  const label = (m: number) => fmtMonth.format(new Date(Date.UTC(2026, m - 1, 15)))
  const hours = (h: number) => (Math.round(h * 10) / 10).toLocaleString(lang === 'en' ? 'en-GB' : lang)

  return (
    <section className="bg-[color:var(--color-onyx)] py-14 md:py-20 border-y border-[color:var(--color-mist)]/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <span className="eyebrow">{s(S.seasonEyebrow, lang)}</span>
        <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
          {s(S.seasonH2, lang)}
        </h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-bone)]/85 font-body leading-relaxed">
          {s(S.seasonLede, lang)}
        </p>

        <ul className="mt-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3 list-none p-0 m-0">
          {months.map((m) => (
            // 🔴 The printed number is ALWAYS the mid-month day length, the
            // same value the bar draws. An earlier version printed "24" for any
            // month CONTAINING a midnight-sun day, so Ylläs read "May: 24 h"
            // when mid-May is nineteen — the number and the bar beside it
            // disagreed, which is the exact drift this whole section exists to
            // avoid. Midnight sun and polar night are markers on the bar now,
            // because "occurs this month" and "lasts all month" are not the
            // same claim.
            <li key={m.month} className="flex flex-col items-center gap-2">
              <div className="relative h-28 w-full max-w-[46px] bg-[color:var(--color-deep-night)] border border-[color:var(--color-mist)]/60 overflow-hidden">
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--color-brass)]/70 to-[color:var(--color-brass)]/25"
                  style={{ height: `${(m.hours / 24) * 100}%` }}
                />
                {m.midnightSun && (
                  <span
                    className="absolute inset-x-0 top-0 h-1.5 bg-[color:var(--color-brass)]"
                    title={s(S.midnightSun, lang)}
                  />
                )}
                {m.polarNight && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-1.5 bg-[color:var(--color-mist)]"
                    title={s(S.polarNight, lang)}
                  />
                )}
                {m.trueNight && (
                  <span
                    className="absolute inset-y-0 right-0 w-1 bg-[color:var(--color-aurora,#10B981)]/70"
                    title={s(S.darkSky, lang)}
                  />
                )}
              </div>
              <span className="font-body text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-bone)]/70 text-center leading-tight">
                {label(m.month)}
              </span>
              <span className="font-body text-[11px] text-[color:var(--color-snow)]/90">
                {hours(m.hours)}
                <span className="text-[color:var(--color-bone)]/60"> {s(S.hoursShort, lang)}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <Legend swatch="bg-gradient-to-t from-[color:var(--color-brass)]/70 to-[color:var(--color-brass)]/25" text={s(S.daylight, lang)} />
          <Legend swatch="bg-[color:var(--color-aurora,#10B981)]/70" text={s(S.darkSky, lang)} />
          {months.some((m) => m.midnightSun) && (
            <Legend swatch="bg-[color:var(--color-brass)]" text={s(S.midnightSun, lang)} />
          )}
          {months.some((m) => m.polarNight) && (
            <Legend swatch="bg-[color:var(--color-mist)]" text={s(S.polarNight, lang)} />
          )}
        </div>

        <p className="mt-6 max-w-3xl text-[11px] font-body text-[color:var(--color-bone)]/60 leading-relaxed">
          {s(S.seasonMethod, lang, { lat: f.latitude.toFixed(2) })}
        </p>
      </div>
    </section>
  )
}

function Legend({ swatch, text }: { swatch: string; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-body text-[11px] text-[color:var(--color-bone)]/75">
      <span className={`h-3 w-3 shrink-0 ${swatch}`} aria-hidden="true" />
      {text}
    </span>
  )
}

/**
 * Which curated GetYourGuide products belong to which destination page.
 *
 * 🔴 A place is listed here only when a guest staying at the destination can
 * actually take that departure. Ivalo sits in the Inari municipality 40 km from
 * the village and shares its airport, so an Ivalo departure belongs on the
 * Inari page. Kemi and Posio belong to neither and stay off both — they are
 * still on /experiences, where nothing claims they are local.
 *
 * Ylläs has no entry because no private departure from it has been verified.
 * It gets the search fallback below rather than a borrowed neighbour's product.
 */
const PLACES_FOR: Record<string, string[]> = {
  levi: ['Levi'],
  rovaniemi: ['Rovaniemi'],
  saariselka: ['Saariselkä'],
  inari: ['Inari', 'Ivalo'],
  yllas: [],
}

export function DestinationExperiences({ slug, name }: { slug: string; name: string }) {
  const lang = useLang()
  const places = PLACES_FOR[slug] ?? []
  const picks = LUXURY_PICKS.filter((p) => places.includes(p.place))
  const fmt = (n: number) =>
    new Intl.NumberFormat(lang === 'en' ? 'en-GB' : lang, { maximumFractionDigits: 0 }).format(n)

  // No verified departure from this base: search, and say so. Never a
  // neighbouring operator's product dressed up as a local one.
  if (picks.length === 0) {
    const href = GYG_LINKS(lang).laplandPremium
    return (
      <section className="bg-[color:var(--color-deep-night)] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-7">
          <span className="eyebrow">{s(S.expEyebrow, lang)}</span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
            {`${name}: ${s(S.expH2, lang)}`}
          </h2>
          <a
            href={href}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick('gyg', `destination_search:${slug}`, href)}
            className="mt-6 inline-flex items-center gap-2 border border-[color:var(--color-brass)]/70 px-5 py-3 text-[11px] tracking-[0.18em] uppercase font-body text-[color:var(--color-brass)] no-underline transition-colors hover:bg-[color:var(--color-brass)] hover:text-[color:var(--color-deep-night)]"
          >
            <Search size={13} aria-hidden="true" />
            {s(S.expNoneCta, lang)}
          </a>
          <p className="mt-4 max-w-2xl text-[11px] font-body text-[color:var(--color-bone)]/60 leading-relaxed">
            {s(S.expNoneNote, lang)}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[color:var(--color-deep-night)] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <span className="eyebrow">{s(S.expEyebrow, lang)}</span>
        {/* Place name outside the sentence: Finnish would need Inarissa /
            Levillä, German in Inari / auf Levi. Same rule as DestinationFaq. */}
        <h2 className="mt-3 font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1]">
          {`${name}: ${s(S.expH2, lang)}`}
        </h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-bone)]/85 font-body leading-relaxed">
          {s(S.expLede, lang)}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p) => {
            const id = p.path.slice(p.path.lastIndexOf('-t') + 2)
            const href = gygProduct(p.path, `dest_${slug}_${id}`, lang)
            return (
              <a
                key={p.path}
                href={href}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={() => trackAffiliateClick('gyg', `destination_experience:${id}`, href)}
                className="group flex flex-col justify-between gap-5 rounded-xl border border-[color:var(--color-mist)]/60 bg-[color:var(--color-onyx)] p-6 no-underline transition-colors hover:border-[color:var(--color-brass)]/60"
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
                    <div className="text-[10px] uppercase tracking-[0.16em] font-body text-[color:var(--color-bone)]/70">
                      {s(S.expFrom, lang)}
                    </div>
                    <div className="font-heading text-xl text-[color:var(--color-brass)]">{fmt(p.price)} €</div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 border border-[color:var(--color-brass)]/70 px-3.5 py-2 text-[10px] tracking-[0.18em] uppercase font-body text-[color:var(--color-brass)] transition-colors group-hover:bg-[color:var(--color-brass)] group-hover:text-[color:var(--color-deep-night)]">
                    {s(S.expCta, lang)}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        <p className="mt-6 text-[11px] font-body text-[color:var(--color-bone)]/70">
          {s(S.expPriceNote, lang, { p: PRICE_AS_OF, v: VERIFIED_ON })}
        </p>
      </div>
    </section>
  )
}
