/**
 * Villa-, kohde- ja elämysmäärät johdetaan datasta, ei kirjoiteta copyyn.
 *
 * 🔴 Miksi paikanpitäjä eikä kirjoitettu luku: luku oli kirjoitettu auki
 * ("Kahdeksan huvilaa", "viidessä kohteessa") ~60+ merkkijonoon 12 lokaalissa,
 * ja se muuttui kolmesti viikossa (7→8 huvilaa, 4→5 kohdetta). Jokainen lisäys
 * tarkoitti kymmenien käsin korjattavien merkkijonojen metsästystä. Copy
 * käyttää paikanpitäjiä, jotka täytetään renderissä tästä yhdestä lähteestä.
 *
 * 🔴🔴 MUTTA LUKU RENDERÖIDÄÄN SANANA, EI NUMERONA (Vesa 2026-09-20: *"eikö
 * suomen kielessä numerot less than 10 kirjoiteta eikä käytetä lukuna, tämä on
 * kuitenkin luxus sivusto niin kielioppi pitää olla täydellistä"*). Hän on
 * oikeassa leipätekstin osalta. Kielitoimiston ohjepankki: juoksevassa
 * tekstissä pieni luku kirjoitetaan tavallisesti kirjaimin; numeroita käytetään
 * mitoissa, hinnoissa, arvosteluissa, päivämäärissä ja taulukkomaisessa
 * tiedossa. Sama käytäntö on englannissa (Chicago: one–nine), saksassa,
 * ruotsissa, ranskassa, italiassa, hollannissa, espanjassa ja portugalissa.
 * 🔴 CJK-kielissä (ja, ko, zh-CN) numero on juoksevassa tekstissä normaali
 * käytäntö, joten niissä renderöidään numero.
 *
 * Aiempi versio kirjoitti tähän: "Numerot kirjoitetaan NUMEROINA (8, ei
 * 'kahdeksan'): se väistää myös lukusanojen taivutuksen." Taivutus oli oikea
 * huoli ja se ratkaistaan omalla paikanpitäjällä (`{mIness}` = "viidessä"),
 * ei luopumalla oikeakielisyydestä.
 *
 * Paikanpitäjät:
 *   {n}       huviloiden määrä sanana        ("kahdeksan")
 *   {m}       kohteiden määrä sanana         ("viisi")
 *   {mIness}  kohteiden määrä inessiivissä   ("viidessä") — muissa kielissä = {m}
 *   {e}       elämysten määrä sanana         ("kuusi")
 *   {nFig} {mFig} {eFig}  sama luku numerona, taulukkomaisiin merkintöihin
 *                         (eyebrow "8 huvilaa · 5 kohdetta")
 */
import { VILLAS } from './villas'
import { EXPERIENCES } from './experiences'
import type { Lang } from './affiliate'

export const N_VILLAS = VILLAS.length
export const N_DESTINATIONS = new Set(VILLAS.map((v) => v.destination)).size
/**
 * 🔴 Oma laskenta, ei `{n}`. Ennen 2026-09-20 elämyssivun ingressi käytti
 * `{n}`:ää eli HUVILOIDEN määrää: se sattui olemaan sama luku (8) niin kauan
 * kuin elämyksiä oli kahdeksan, ja muuttui valheeksi sillä hetkellä kun kaksi
 * helikopterikorttia poistettiin. Luku, joka on oikein vahingossa, on vika.
 */
export const N_EXPERIENCES = EXPERIENCES.length

/** 1–12 sanoina. Suuremmat luvut renderöidään numerona kaikissa kielissä. */
const WORDS: Record<string, readonly string[]> = {
  fi: ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen', 'yksitoista', 'kaksitoista'],
  en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
  de: ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'],
  sv: ['noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv'],
  fr: ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze'],
  it: ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici'],
  nl: ['nul', 'een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf'],
  es: ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'],
  'pt-BR': ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze'],
}

/** Suomen inessiivi ("viidessä kohteessa"). Vain suomi taivuttaa lukusanan täällä. */
const FI_INESSIVE: Record<number, string> = {
  1: 'yhdessä', 2: 'kahdessa', 3: 'kolmessa', 4: 'neljässä', 5: 'viidessä',
  6: 'kuudessa', 7: 'seitsemässä', 8: 'kahdeksassa', 9: 'yhdeksässä', 10: 'kymmenessä',
}

const word = (n: number, lang: Lang): string => {
  const table = WORDS[lang]
  return table && n >= 0 && n < table.length ? table[n] : String(n)
}

/** Iso alkukirjain virkkeen alussa ja pisteen jälkeen. */
const capitalise = (s: string): string =>
  s.replace(/(^|[.!?]\s+)(\p{Ll})/gu, (_, lead: string, ch: string) => lead + ch.toUpperCase())

export const withCounts = (s: string, lang: Lang = 'en'): string =>
  capitalise(
    s
      .replaceAll('{nFig}', String(N_VILLAS))
      .replaceAll('{mFig}', String(N_DESTINATIONS))
      .replaceAll('{eFig}', String(N_EXPERIENCES))
      .replaceAll('{mIness}', lang === 'fi' ? (FI_INESSIVE[N_DESTINATIONS] ?? word(N_DESTINATIONS, lang)) : word(N_DESTINATIONS, lang))
      .replaceAll('{n}', word(N_VILLAS, lang))
      .replaceAll('{m}', word(N_DESTINATIONS, lang))
      .replaceAll('{e}', word(N_EXPERIENCES, lang)),
  )
