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
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid'

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandluxuryvillas',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
}
