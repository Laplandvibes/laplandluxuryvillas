/**
 * FeaturedPartnerSlot — myytävä "Esittelykumppani"-paikka nostopinnan kärjessä.
 *
 * Miksi (Vesa 2026-07-26): seitsemän oikeaa, nimettyä kohdetta sai isot
 * toimitukselliset pinnat ilmaiseksi — koko leveä hero + H1 + essee jokaisella
 * `/villas/:slug`-sivulla, etusivun signature-ruudukko, `/villas`, `/suites` —
 * samalla kun molemmat myydyt mainospaikat olivat tyhjinä ja `/villas/:slug` +
 * `/suites` olivat kokonaan ilman mainosinventaaria. Nyt jokainen sellainen
 * pinta alkaa yhdellä myytävällä paikalla, ja toimituksellinen kärkivalinta on
 * pelkkä ANSAITTU merkki normaalikortilla (ks. `bestGoogleRated` — sitä ei
 * myydä; peruste on aito Google-arvio, ei toimituksen mieltymys).
 *
 * Kanoninen malli: laplanddining `/restaurants` → `CityFeaturedSlot`
 * (`bdf9b37`), laplandhoteldeals (`f67c6d6`), laplandstays (26.7.).
 *
 * KKV: maksettu paikka on merkitty selvästi mainokseksi (pinkki "Mainos"
 * -pilleri + "Esittelykumppani · <pinta>"), samalla muotoilulla kuin verkoston
 * muut maksetut paikat.
 *
 * Tyhjä paikka renderöi kanonisen VAALEAN house-adin `shared/PartnerSlot`ista
 * (bg #F9FAFB, dashed-pinkki reunus, pinkki pilleri-CTA; hehku inline-tyylinä
 * koska arbitrary `shadow-[…]` ei emitoidu kaikissa repoissa).
 *
 * Lokaalirajaus: `adLocaleEnabled` (fi/en/sv) on PAKOLLINEN — ilman sitä
 * fi/en/sv-copy vuotaisi 9 muulle kielelle. Muilla kielillä komponentti ei
 * renderöi mitään, eikä pintaan jää aukkoa: villakortisto on erillään tästä ja
 * renderöityy kaikilla 12 kielellä ennallaan.
 *
 * 🔴 Importit osoittavat `../shared/...`, koska `src/shared/` on tässä reposssa
 * VENDOROITU kopio (scripts/sync-shared.mjs ylikirjoittaa sen prebuildissa).
 * `../../../shared/...` piti CI:n punaisena 13.–26.7. — älä "korjaa" sitä.
 */
import PartnerSlot from '../shared/PartnerSlot'
import { adLocaleEnabled } from '../shared/adSlotsCopy'
import {
  AD_SLOTS,
  FEATURED_CONTEXT,
  FEATURED_PARTNERS,
  type FeaturedPlacement,
} from '../data/adSlots'

/** fi/en/sv mainosmerkinnän copy. Ei 12-kielisissä tiedostoissa: paikka on gatettu. */
function markerCopy(locale: string) {
  const l = (locale || 'en').toLowerCase()
  if (l.startsWith('fi')) return { ad: 'Mainos', featured: 'Esittelykumppani' }
  if (l.startsWith('sv')) return { ad: 'Annons', featured: 'Utvald partner' }
  return { ad: 'Advertisement', featured: 'Featured partner' }
}

function contextLabel(placement: FeaturedPlacement, locale: string): string {
  const l = (locale || 'en').toLowerCase()
  const c = FEATURED_CONTEXT[placement]
  if (l.startsWith('fi')) return c.fi
  if (l.startsWith('sv')) return c.sv
  return c.en
}

export default function FeaturedPartnerSlot({
  placement,
  locale,
  className,
}: {
  /** `undefined` = tuntematon pinta → ei renderöidä mitään (fail closed). */
  placement: FeaturedPlacement | undefined
  locale: string
  className?: string
}) {
  if (!placement) return null
  if (!adLocaleEnabled(locale)) return null

  const m = markerCopy(locale)
  const context = contextLabel(placement, locale)
  const partner = FEATURED_PARTNERS[placement]
  const wrap = ['mb-10 md:mb-14', className].filter(Boolean).join(' ')

  if (partner) {
    return (
      <div className={wrap} data-featured-partner={placement}>
        <p className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-bone)]/55 mb-2">
          <span className="inline-flex items-center rounded-full bg-[#EC4899]/90 px-2 py-0.5 text-white">
            {m.ad}
          </span>
          <span>
            {m.featured} · {context}
          </span>
        </p>
        {/* Kanoninen PartnerSlot-banneri on tummalla sivulla hyvin vähäeleinen
            `bg-white/5` -lasikortti. Lisätään sivuston oma messinkihiusviiva
            PELKKÄNÄ LISÄYKSENÄ (ring + varjo eivät kilpaile minkään olemassa
            olevan declarationin kanssa, joten Tailwind-luokkajärjestys ei voi
            kumota sitä) → maksava kumppani ei huku onyx-pintaan. */}
        <PartnerSlot
          variant="banner"
          partner={partner}
          locale={locale}
          surface="dark"
          className="ring-1 ring-[color:var(--color-brass)]/40 shadow-lg shadow-black/40"
        />
      </div>
    )
  }

  return (
    <div className={wrap} data-featured-partner={placement}>
      <PartnerSlot
        variant="banner"
        partner={null}
        locale={locale}
        surface="dark"
        placeholder={{
          siteSlug: AD_SLOTS.siteSlug,
          slotId: `featured_${placement}`,
          level: 'premium',
          label: `${m.featured} · ${context}`,
        }}
      />
    </div>
  )
}
