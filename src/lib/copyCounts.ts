/**
 * Villa- ja kohdemäärät johdetaan datasta, ei kirjoiteta copyyn sanoina.
 *
 * 🔴 Miksi: luku oli kirjoitettu auki ("Kahdeksan huvilaa", "viidessä
 * kohteessa") ~60+ merkkijonoon 12 lokaalissa, ja se muuttui kolmesti
 * viikossa (7→8 huvilaa, 4→5 kohdetta). Jokainen lisäys tarkoitti kymmenien
 * käsin korjattavien merkkijonojen metsästystä — täsmälleen sama vika jonka
 * tämä sivusto siivosi faktoistaan 1.8. Copy käyttää {n}- ja {m}-
 * paikanpitäjiä, jotka täytetään renderissä tästä yhdestä lähteestä.
 *
 * Numerot kirjoitetaan NUMEROINA (8, ei "kahdeksan"): se väistää myös
 * lukusanojen taivutuksen ("viidessä kohteessa" vs "{m} kohteessa").
 */
import { VILLAS } from './villas'

export const N_VILLAS = VILLAS.length
export const N_DESTINATIONS = new Set(VILLAS.map((v) => v.destination)).size

export const withCounts = (s: string): string =>
  s.replaceAll('{n}', String(N_VILLAS)).replaceAll('{m}', String(N_DESTINATIONS))
