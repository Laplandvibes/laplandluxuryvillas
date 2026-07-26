/**
 * Kumppanipaikkojen data — LaplandLuxuryVillas
 *
 * Myyntiprosessi:
 *   1. Kumppani ostaa mainospaikan (LV Media -portaali → lv_bookings)
 *   2. Agentti täyttää sopivan paikan tässä tiedostossa Partner-objektilla
 *   3. `npm run build` + deploy → kortti/banneri ilmestyy sivulle
 *
 * Paikat (jaettu malli, Vesa 2026-07-11):
 *   sponsors[0] = PÄÄKUMPPANI — kompakti banneri heti heron alla (paras paikka)
 *   sponsors[1] = KAKKOSPÄÄKUMPPANI — kortti kumppaniosiossa (1. sisältöosion jälkeen)
 *   spots       = 6 kohdekohtaista premium-paikkaa (Rovaniemi, Levi, Ylläs,
 *                 Saariselkä, Kittilä, Inari)
 *
 * Tyhjät paikat renderöivät "Haluatko mainoksesi tähän?" -house-adin joka
 * linkittää LV Media -portaaliin (/media/site/laplandluxuryvillas) + GA4-event.
 */

import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots'
import type { Partner } from '../shared/PartnerSlot'
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid'

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandluxuryvillas',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
}

/**
 * ESITTELYKUMPPANI-PAIKAT (Vesa 2026-07-26: "TOTTAKAI HALUAN" + "TEE KAIKKI")
 * ==========================================================================
 * Sivusto antoi seitsemälle oikealle, nimetylle kohteelle isot toimitukselliset
 * pinnat täysin ILMAISEKSI — koko leveä hero + H1 + kahden kappaleen essee
 * jokaisella `/villas/:slug`-sivulla, etusivun signature-ruudukko, `/villas`,
 * `/suites` ja kohdesivujen villalistat — samalla kun molemmat myydyt
 * mainospaikat (`sponsors`) olivat tyhjinä. `/villas/:slug` ja `/suites`
 * olivat kokonaan ilman mainosinventaaria. Nyt jokaisen sellaisen pinnan
 * kärjessä on YKSI myytävä Esittelykumppani-paikka. Malli on sama kuin
 * laplanddining `/restaurants` (`bdf9b37`), laplandhoteldeals (`f67c6d6`) ja
 * laplandstays: **AdSpec + 1 datarivi**.
 *
 * Säännöt (älä pura näitä ilman Vesan päätöstä):
 *  - Tyhjä (null) = kanoninen VAALEA house-ad `shared/PartnerSlot`ista
 *    ("MAINOSPAIKKA VAPAANA / Varaa mainospaikka →"). EI koskaan automaattista
 *    nostoa jollekin kokoelman villalle — ilmainen iso pinta on juuri se mikä
 *    tässä korjattiin.
 *  - Maksettu paikka on merkittävä mainokseksi (KKV) — merkintä tehdään
 *    `FeaturedPartnerSlot`issa, ei täällä.
 *  - Paikat näkyvät vain fi/en/sv (`adLocaleEnabled`). Muilla 9 kielellä paikka
 *    jää pois kokonaan eikä pintaan tule aukkoa: villakortisto on tästä
 *    erillään ja renderöityy kaikilla 12 kielellä ennallaan.
 *  - Kumppanin linkki EI ole affiliate-muotoinen: maksettu esittely noudattaa
 *    bear-precedenttia ("maksettu esittely, ei komissiolinkki", ks.
 *    `shared/PartnerSlot`). Villojen omat varaus-CTA:t pysyvät omissa
 *    affiliate-reiteissään koskemattomina (`sponsored nofollow noopener`,
 *    ei `noreferrer`).
 *  - Toimituksen valinta -merkki EI ole osa tätä inventaaria eikä ole
 *    myynnissä. Se johdetaan aidosta Google-arviodatasta (`bestGoogleRated`,
 *    src/data/properties.ts). Älä lisää tänne maksullista tapaa saada se.
 *
 * 🔴 `src/shared/` on VENDOROITU ja `scripts/sync-shared.mjs` ylikirjoittaa sen
 * joka `prebuild`illa. Tämän tiedoston ja `FeaturedPartnerSlot`in on siksi
 * pysyttävä `src/data/` ja `src/components/` -puolella, ja importtien on oltava
 * `../shared/...` — EI `../../../shared/...` (se piti CI:n punaisena 13.–26.7.).
 *
 * Myynti: täytä alla oleva kenttä Partner-objektilla → build → deploy.
 */
export type FeaturedPlacement =
  | 'home_signature'
  | 'villas_collection'
  | 'suites'
  | 'villa_detail'
  | 'destination_villas'

/**
 * Paikan konteksti mainosmerkinnässä ("Esittelykumppani · Kokoelma").
 * Vain fi/en/sv, koska paikka itse on `adLocaleEnabled`-rajattu — nämä eivät
 * kuulu 12-kielisiin copy-tiedostoihin eivätkä voi vuotaa muille kielille.
 */
export const FEATURED_CONTEXT: Record<FeaturedPlacement, { fi: string; en: string; sv: string }> = {
  home_signature: { fi: 'Signature-villat', en: 'Signature villas', sv: 'Signaturvillor' },
  villas_collection: { fi: 'Koko kokoelma', en: 'The full collection', sv: 'Hela kollektionen' },
  suites: { fi: 'Sviitit', en: 'Suites', sv: 'Sviter' },
  villa_detail: { fi: 'Villaesittely', en: 'Villa profile', sv: 'Villapresentation' },
  destination_villas: { fi: 'Kohteen villat', en: 'Villas in this destination', sv: 'Villor i destinationen' },
}

/** Myydyt Esittelykumppani-paikat. null = house-ad (paikka vapaana). */
export const FEATURED_PARTNERS: Record<FeaturedPlacement, Partner | null> = {
  home_signature: null,
  villas_collection: null,
  suites: null,
  villa_detail: null,
  destination_villas: null,
}
