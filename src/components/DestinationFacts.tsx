import { ExternalLink } from 'lucide-react'
import { destinationFacts, AURORA_BANDS, AURORA_SOURCE, AURORA_VERIFIED, type SourcedNumber } from '../shared/destinations/facts'
import { FACT_LABELS, t } from '../shared/destinations/labels'
import { useLang } from '../i18n/useLang'
import { factText } from '../shared/destinations/factsI18n'

/**
 * The checkable half of a destination page.
 *
 * Every number here comes from `shared/destinations/facts.ts` — the network's
 * one place per municipality — and every one renders WITH the official page it
 * was read from and the date it was read. That pairing is the point: the reason
 * this site printed "43 lifts" and "250 km of track" for a year is that its
 * numbers had no source attached and so nobody could tell they had drifted.
 *
 * Renders nothing for a destination the registry does not cover yet, rather
 * than guessing.
 */

/** One fact line: value, then its provenance in small type. */
function Fact({ label, value, fact, lang }: { label: string; value: string; fact?: SourcedNumber | { source: string; verified: string; note?: string }; lang: string }) {
  const l = lang as Parameters<typeof t>[1]
  return (
    <div>
      <div className="eyebrow text-[color:var(--color-bone)]/75 mb-1">{label}</div>
      <p className="text-[color:var(--color-bone)]/90 font-body text-sm leading-relaxed">{value}</p>
      {fact?.note && (
        <p className="text-[color:var(--color-bone)]/75 font-body text-xs leading-relaxed mt-1">{factText(fact.note, l)}</p>
      )}
      {fact && (
        <a
          href={fact.source}
          target="_blank"
          rel="noopener"
          className="mt-1.5 inline-flex items-center gap-1 text-[10px] tracking-[0.14em] uppercase font-body text-[color:var(--color-bone)]/45 hover:text-[color:var(--color-brass)] no-underline"
        >
          {t(FACT_LABELS.source, l)}
          <ExternalLink size={10} aria-hidden="true" />
          <span className="normal-case tracking-normal">· {t(FACT_LABELS.checked, l, { d: fact.verified })}</span>
        </a>
      )}
    </div>
  )
}

export default function DestinationFacts({ slug }: { slug: string }) {
  const lang = useLang()
  const l = lang as Parameters<typeof t>[1]
  const f = destinationFacts(slug)
  if (!f) return null

  const band = AURORA_BANDS[f.auroraBand]
  const km = t(FACT_LABELS.km, l)
  const m = t(FACT_LABELS.m, l)
  const num = (n: number) => new Intl.NumberFormat(lang === 'en' ? 'en-GB' : lang).format(n)

  return (
    <section className="bg-[color:var(--color-onyx)] py-14 md:py-20 border-y border-[color:var(--color-mist)]/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-7">
        <span className="eyebrow">{t(FACT_LABELS.heading, l)}</span>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Fact
            lang={lang}
            label={t(FACT_LABELS.airport, l)}
            value={`${f.airport.name} (${f.airport.iata}) · ${num(f.airport.distanceKm.value)} ${km}`}
            fact={f.airport.distanceKm}
          />

          <Fact
            lang={lang}
            label={t(FACT_LABELS.aurora, l)}
            value={t(FACT_LABELS.auroraScale, l, { a: band.nightsIn[0], b: band.nightsIn[1], ref: band.reference })}
            fact={{ source: AURORA_SOURCE, verified: AURORA_VERIFIED }}
          />

          {f.ski && (
            <Fact
              lang={lang}
              label={t(FACT_LABELS.ski, l)}
              value={[
                `${num(f.ski.slopes.value)} ${t(FACT_LABELS.slopes, l)}`,
                `${num(f.ski.lifts.value)} ${t(FACT_LABELS.lifts, l)}`,
                f.ski.groomedKm && `${num(f.ski.groomedKm.value)} ${km} ${t(FACT_LABELS.groomed, l)}`,
                f.ski.crossCountryKm && `${num(f.ski.crossCountryKm.value)} ${km} ${t(FACT_LABELS.crossCountry, l)}`,
                f.ski.summitM && `${t(FACT_LABELS.summit, l)} ${num(f.ski.summitM.value)} ${m}`,
              ].filter(Boolean).join(' · ')}
              fact={f.ski.lifts}
            />
          )}

          {f.nationalPark && (
            <Fact lang={lang} label={t(FACT_LABELS.nationalPark, l)} value={f.nationalPark.name} fact={f.nationalPark} />
          )}
        </div>
      </div>
    </section>
  )
}
