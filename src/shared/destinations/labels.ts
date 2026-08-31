/**
 * UI labels for rendering `shared/destinations/facts.ts`, in the network's 12
 * locales.
 *
 * These live beside the facts rather than inside them on purpose: `facts.ts`
 * holds numbers and sources and nothing a translator would touch, so it can be
 * re-verified against official pages without anyone reading past the data. This
 * file is the opposite — chrome only, no claims.
 *
 * Kept here rather than in each site's `copy.<lang>.ts` because the panel is
 * the same everywhere and threading twelve short strings through every site's
 * locale files is how the numbers themselves ended up duplicated in the first
 * place. Same reasoning as the inline locale table in `scripts/gyg-rollout.mjs`.
 */

export type FactLocale =
  | 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';

type L = Record<FactLocale, string>;

export const FACT_LABELS: {
  heading: L; airport: L; distanceFromAirport: L; aurora: L; auroraScale: L;
  ski: L; slopes: L; lifts: L; groomed: L; crossCountry: L; summit: L;
  nationalPark: L; source: L; checked: L; km: L; m: L;
} = {
  heading: { en: 'Checkable facts', fi: 'Tarkistettavat faktat', de: 'Nachprüfbare Fakten', ja: '確認できる事実', es: 'Datos verificables', 'pt-BR': 'Fatos verificáveis', 'zh-CN': '可核查的事实', ko: '확인 가능한 정보', fr: 'Faits vérifiables', it: 'Fatti verificabili', nl: 'Controleerbare feiten', sv: 'Kontrollerbara fakta' },
  airport: { en: 'Airport', fi: 'Lentoasema', de: 'Flughafen', ja: '空港', es: 'Aeropuerto', 'pt-BR': 'Aeroporto', 'zh-CN': '机场', ko: '공항', fr: 'Aéroport', it: 'Aeroporto', nl: 'Luchthaven', sv: 'Flygplats' },
  distanceFromAirport: { en: 'From the airport', fi: 'Lentoasemalta', de: 'Vom Flughafen', ja: '空港から', es: 'Desde el aeropuerto', 'pt-BR': 'Do aeroporto', 'zh-CN': '距机场', ko: '공항에서', fr: "Depuis l’aéroport", it: "Dall’aeroporto", nl: 'Vanaf de luchthaven', sv: 'Från flygplatsen' },
  aurora: { en: 'Aurora frequency', fi: 'Revontulien esiintyvyys', de: 'Polarlicht-Häufigkeit', ja: 'オーロラの出現頻度', es: 'Frecuencia de auroras', 'pt-BR': 'Frequência de auroras', 'zh-CN': '极光出现频率', ko: '오로라 출현 빈도', fr: 'Fréquence des aurores', it: "Frequenza dell’aurora", nl: 'Noorderlichtfrequentie', sv: 'Norrskensfrekvens' },
  // {a} of {b} nights, at {ref} — the reference place is a proper noun, so no
  // locale has to inflect it inside the sentence.
  auroraScale: {
    en: 'Observed on about {a} nights in {b}. Reference point: {ref} (Finnish Meteorological Institute)',
    fi: 'Havaitaan noin {a} yönä {b}:sta. Vertailupiste: {ref} (Ilmatieteen laitos)',
    de: 'Etwa {a} von {b} Nächten beobachtet. Referenzpunkt: {ref} (Finnisches Meteorologisches Institut)',
    ja: 'およそ{b}夜に{a}夜観測されます。基準地点：{ref}（フィンランド気象庁）',
    es: 'Observada unas {a} de cada {b} noches. Punto de referencia: {ref} (Instituto Meteorológico Finlandés)',
    'pt-BR': 'Observada em cerca de {a} de cada {b} noites. Ponto de referência: {ref} (Instituto Meteorológico Finlandês)',
    'zh-CN': '每 {b} 夜约有 {a} 夜可观测到。参考地点：{ref}（芬兰气象研究所）',
    ko: '약 {b}밤 중 {a}밤 관측됩니다. 기준 지점: {ref}(핀란드 기상청)',
    fr: 'Observée environ {a} nuits sur {b}. Point de référence : {ref} (Institut météorologique finlandais)',
    it: 'Osservata circa {a} notti su {b}. Punto di riferimento: {ref} (Istituto meteorologico finlandese)',
    nl: 'Ongeveer {a} op {b} nachten waargenomen. Referentiepunt: {ref} (Fins Meteorologisch Instituut)',
    sv: 'Observeras ungefär {a} nätter av {b}. Referenspunkt: {ref} (Meteorologiska institutet)',
  },
  ski: { en: 'Ski resort', fi: 'Hiihtokeskus', de: 'Skigebiet', ja: 'スキーリゾート', es: 'Estación de esquí', 'pt-BR': 'Estação de esqui', 'zh-CN': '滑雪度假区', ko: '스키 리조트', fr: 'Station de ski', it: 'Stazione sciistica', nl: 'Skigebied', sv: 'Skidort' },
  slopes: { en: 'slopes', fi: 'rinnettä', de: 'Pisten', ja: 'コース', es: 'pistas', 'pt-BR': 'pistas', 'zh-CN': '条雪道', ko: '슬로프', fr: 'pistes', it: 'piste', nl: 'pistes', sv: 'backar' },
  lifts: { en: 'lifts', fi: 'hissiä', de: 'Lifte', ja: '基のリフト', es: 'remontes', 'pt-BR': 'teleféricos', 'zh-CN': '条索道', ko: '리프트', fr: 'remontées', it: 'impianti', nl: 'liften', sv: 'liftar' },
  groomed: { en: 'groomed piste', fi: 'hoidettua rinnettä', de: 'präparierte Piste', ja: 'の整備斜面', es: 'de pista pisada', 'pt-BR': 'de pista preparada', 'zh-CN': '压雪道', ko: '정설 슬로프', fr: 'de piste damée', it: 'di pista battuta', nl: 'geprepareerde piste', sv: 'preparerad backe' },
  crossCountry: { en: 'cross-country track', fi: 'latua', de: 'Loipen', ja: 'のクロスカントリーコース', es: 'de pista de fondo', 'pt-BR': 'de trilha cross-country', 'zh-CN': '越野滑雪道', ko: '크로스컨트리 코스', fr: 'de piste de fond', it: 'di piste da fondo', nl: 'loipe', sv: 'längdspår' },
  summit: { en: 'summit', fi: 'laki', de: 'Gipfel', ja: '山頂', es: 'cima', 'pt-BR': 'cume', 'zh-CN': '山顶', ko: '정상', fr: 'sommet', it: 'vetta', nl: 'top', sv: 'topp' },
  nationalPark: { en: 'National park', fi: 'Kansallispuisto', de: 'Nationalpark', ja: '国立公園', es: 'Parque nacional', 'pt-BR': 'Parque nacional', 'zh-CN': '国家公园', ko: '국립공원', fr: 'Parc national', it: 'Parco nazionale', nl: 'Nationaal park', sv: 'Nationalpark' },
  source: { en: 'Source', fi: 'Lähde', de: 'Quelle', ja: '出典', es: 'Fuente', 'pt-BR': 'Fonte', 'zh-CN': '来源', ko: '출처', fr: 'Source', it: 'Fonte', nl: 'Bron', sv: 'Källa' },
  checked: { en: 'Checked {d}', fi: 'Tarkistettu {d}', de: 'Geprüft am {d}', ja: '{d} 確認', es: 'Comprobado el {d}', 'pt-BR': 'Verificado em {d}', 'zh-CN': '{d} 核查', ko: '{d} 확인', fr: 'Vérifié le {d}', it: 'Verificato il {d}', nl: 'Gecontroleerd op {d}', sv: 'Kontrollerat {d}' },
  km: { en: 'km', fi: 'km', de: 'km', ja: 'km', es: 'km', 'pt-BR': 'km', 'zh-CN': '公里', ko: 'km', fr: 'km', it: 'km', nl: 'km', sv: 'km' },
  m: { en: 'm', fi: 'm', de: 'm', ja: 'm', es: 'm', 'pt-BR': 'm', 'zh-CN': '米', ko: 'm', fr: 'm', it: 'm', nl: 'm', sv: 'm' },
};

/** `t(FACT_LABELS.checked, lang, { d: '1.8.2026' })` */
export function t(label: L, lang: FactLocale, vars?: Record<string, string | number>): string {
  let s = label[lang] ?? label.en;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split('{' + k + '}').join(String(v));
  return s;
}
