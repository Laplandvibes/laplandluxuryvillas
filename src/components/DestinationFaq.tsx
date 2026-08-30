import { destinationFacts, AURORA_BANDS, type DestinationFacts } from '../shared/destinations/facts'
import { factText } from '../shared/destinations/factsI18n'
import { useLang, type Lang } from '../i18n/useLang'

// ─────────────────────────────────────────────────────────────────────────────
// DestinationFaq — the questions a reader actually arrives with, answered from
// the verified facts registry rather than from new prose.
//
// Why generated and not written: every answer here is a restatement of a number
// in `shared/destinations/facts.ts`, which carries its own source URL and read
// date. Hand-writing five answers per destination in twelve languages would
// have produced sixty places for a number to drift out of step with the
// registry — which is the exact failure this whole 2026-08-01 pass was cleaning
// up ("43 lifts", "250 km", "~220 aurora nights"). Generated answers cannot
// drift: change the registry and every locale follows.
//
// 🔴 THE PLACE NAME NEVER SITS INSIDE A SENTENCE. Every question is
// "<Place>: <question>". Finnish would need Inarissa / Levillä / Ylläksellä and
// German in Inari / auf Levi; a template with the name mid-sentence produces
// broken grammar in half the locales, and that is precisely the appositive bug
// Vesa flagged in the destination copy earlier the same day. The colon form is
// correct in all twelve and reads as a heading, not as a mistake.
//
// The same array feeds the visible list and the FAQPage JSON-LD, so the two can
// never disagree.
// ─────────────────────────────────────────────────────────────────────────────

interface T {
  heading: string
  qArrive: string
  aArrive: (airport: string, iata: string, km: number, note: string) => string
  qAurora: string
  aAurora: (a: number, b: number, ref: string) => string
  qWhen: string
  aWhenAurora: string
  aWhenSki: string
  aWhenSummer: string
  qSki: string
  aSki: (slopes: number, lifts: number) => string
  qPark: string
  aPark: (name: string) => string
}

const L: Record<Lang, T> = {
  fi: {
    heading: 'Usein kysyttyä',
    qArrive: 'miten sinne pääsee?',
    aArrive: (ap, ia, km, n) => `Lähin lentoasema on ${ap} (${ia}), josta on ${km} kilometriä. ${n}`,
    qAurora: 'kuinka usein revontulia näkyy?',
    aAurora: (a, b, ref) => `Ilmatieteen laitos havaitsee revontulia tällä leveysasteella keskimäärin ${a} yönä ${b}:sta. Laitoksen vertailupiste on ${ref}. Luku kertoo kuinka usein revontuli on aktiivinen, ei kuinka usein taivas on selkeä.`,
    qWhen: 'milloin kannattaa tulla?',
    aWhenAurora: 'Revontulia varten pimeä kausi, karkeasti elokuun lopusta huhtikuun alkuun. Keskitalvella yö on pisin ja lomakausien ulkopuoliset viikot rauhallisimpia.',
    aWhenSki: 'Laskettelukausi kestää talvesta kevääseen, ja maalis-huhtikuussa yhdistyvät pitkät päivät ja hyvä lumi.',
    aWhenSummer: 'Kesällä yö ei pimene lainkaan, joten vaellus ja vesillä olo jatkuvat läpi yön. Revontulia ei silloin näy.',
    qSki: 'onko täällä laskettelua?',
    aSki: (s, l) => `Kyllä. Rinteitä on ${s} ja hissejä ${l}.`,
    qPark: 'onko lähellä kansallispuistoa?',
    aPark: (n) => `Kyllä: ${n}.`,
  },
  en: {
    heading: 'Common questions',
    qArrive: 'how do you get there?',
    aArrive: (ap, ia, km, n) => `The nearest airport is ${ap} (${ia}), ${km} km away. ${n}`,
    qAurora: 'how often is the aurora visible?',
    aAurora: (a, b, ref) => `The Finnish Meteorological Institute observes the aurora at this latitude on about ${a} nights in ${b}. Its reference point is ${ref}. That figure is how often the aurora is active, not how often the sky is clear.`,
    qWhen: 'when should you come?',
    aWhenAurora: 'For the aurora, the dark season, roughly late August to early April. Midwinter has the longest nights, and the weeks outside school holidays are the quietest.',
    aWhenSki: 'The downhill season runs from winter into spring, and March and April combine long daylight with good snow.',
    aWhenSummer: 'In summer the night never darkens, so hiking and time on the water continue through it. The aurora is not visible then.',
    qSki: 'is there downhill skiing?',
    aSki: (s, l) => `Yes. ${s} slopes and ${l} lifts.`,
    qPark: 'is there a national park nearby?',
    aPark: (n) => `Yes: ${n}.`,
  },
  de: {
    heading: 'Häufige Fragen',
    qArrive: 'wie kommt man hin?',
    aArrive: (ap, ia, km, n) => `Der nächste Flughafen ist ${ap} (${ia}), ${km} km entfernt. ${n}`,
    qAurora: 'wie oft ist das Polarlicht zu sehen?',
    aAurora: (a, b, ref) => `Das Finnische Meteorologische Institut beobachtet das Polarlicht auf diesem Breitengrad in etwa ${a} von ${b} Nächten. Referenzpunkt des Instituts ist ${ref}. Die Zahl sagt, wie oft das Polarlicht aktiv ist, nicht wie oft der Himmel klar ist.`,
    qWhen: 'wann sollte man kommen?',
    aWhenAurora: 'Für das Polarlicht die dunkle Jahreszeit, etwa von Ende August bis Anfang April. Im Hochwinter sind die Nächte am längsten, und außerhalb der Ferienwochen ist es am ruhigsten.',
    aWhenSki: 'Die Abfahrtssaison reicht vom Winter bis ins Frühjahr; März und April verbinden lange Tage mit gutem Schnee.',
    aWhenSummer: 'Im Sommer wird die Nacht nicht dunkel, Wandern und Zeit auf dem Wasser gehen also durch. Polarlichter sind dann nicht zu sehen.',
    qSki: 'gibt es hier Skipisten?',
    aSki: (s, l) => `Ja. ${s} Pisten und ${l} Lifte.`,
    qPark: 'gibt es einen Nationalpark in der Nähe?',
    aPark: (n) => `Ja: ${n}.`,
  },
  ja: {
    heading: 'よくある質問',
    qArrive: 'どうやって行きますか？',
    aArrive: (ap, ia, km, n) => `最寄りの空港は${ap}（${ia}）で、${km} km の距離です。${n}`,
    qAurora: 'オーロラはどのくらいの頻度で見られますか？',
    aAurora: (a, b, ref) => `フィンランド気象庁は、この緯度でおよそ${b}夜に${a}夜オーロラを観測しています。同庁の基準地点は${ref}です。これはオーロラが活発である頻度で、空が晴れる頻度ではありません。`,
    qWhen: 'いつ訪れるのがよいですか？',
    aWhenAurora: 'オーロラ目的なら暗い季節、おおよそ8月下旬から4月上旬です。真冬は夜がもっとも長く、学校休暇を外した週がもっとも静かです。',
    aWhenSki: 'ダウンヒルのシーズンは冬から春まで続き、3月と4月は日照の長さと雪の質が両立します。',
    aWhenSummer: '夏は夜が暗くならないため、ハイキングや水辺の時間が夜通し続きます。その時期にオーロラは見えません。',
    qSki: 'スキー場はありますか？',
    aSki: (s, l) => `あります。コース${s}本、リフト${l}基です。`,
    qPark: '近くに国立公園はありますか？',
    aPark: (n) => `あります: ${n}。`,
  },
  es: {
    heading: 'Preguntas frecuentes',
    qArrive: '¿cómo se llega?',
    aArrive: (ap, ia, km, n) => `El aeropuerto más cercano es ${ap} (${ia}), a ${km} km. ${n}`,
    qAurora: '¿con qué frecuencia se ve la aurora?',
    aAurora: (a, b, ref) => `El Instituto Meteorológico Finlandés observa la aurora en esta latitud unas ${a} noches de cada ${b}. Su punto de referencia es ${ref}. Esa cifra indica con qué frecuencia la aurora está activa, no con qué frecuencia el cielo está despejado.`,
    qWhen: '¿cuándo conviene venir?',
    aWhenAurora: 'Para la aurora, la temporada oscura, aproximadamente de finales de agosto a principios de abril. En pleno invierno las noches son más largas, y las semanas fuera de vacaciones escolares son las más tranquilas.',
    aWhenSki: 'La temporada de esquí alpino va del invierno a la primavera; marzo y abril combinan días largos con buena nieve.',
    aWhenSummer: 'En verano la noche no oscurece, así que las caminatas y el tiempo en el agua continúan durante ella. La aurora no se ve entonces.',
    qSki: '¿hay esquí alpino?',
    aSki: (s, l) => `Sí. ${s} pistas y ${l} remontes.`,
    qPark: '¿hay un parque nacional cerca?',
    aPark: (n) => `Sí: ${n}.`,
  },
  'pt-BR': {
    heading: 'Perguntas frequentes',
    qArrive: 'como se chega?',
    aArrive: (ap, ia, km, n) => `O aeroporto mais próximo é ${ap} (${ia}), a ${km} km. ${n}`,
    qAurora: 'com que frequência a aurora aparece?',
    aAurora: (a, b, ref) => `O Instituto Meteorológico Finlandês observa a aurora nesta latitude em cerca de ${a} noites a cada ${b}. Seu ponto de referência é ${ref}. Esse número diz com que frequência a aurora está ativa, não com que frequência o céu está limpo.`,
    qWhen: 'quando vale a pena vir?',
    aWhenAurora: 'Para a aurora, a estação escura, aproximadamente do fim de agosto ao início de abril. No auge do inverno as noites são mais longas, e as semanas fora das férias escolares são as mais tranquilas.',
    aWhenSki: 'A temporada de esqui alpino vai do inverno à primavera; março e abril combinam dias longos com boa neve.',
    aWhenSummer: 'No verão a noite não escurece, então caminhadas e tempo na água seguem por ela. A aurora não aparece nesse período.',
    qSki: 'há esqui alpino?',
    aSki: (s, l) => `Sim. ${s} pistas e ${l} teleféricos.`,
    qPark: 'há um parque nacional por perto?',
    aPark: (n) => `Sim: ${n}.`,
  },
  'zh-CN': {
    heading: '常见问题',
    qArrive: '怎么到达？',
    aArrive: (ap, ia, km, n) => `最近的机场是${ap}（${ia}），距离 ${km} 公里。${n}`,
    qAurora: '极光多久能看到一次？',
    aAurora: (a, b, ref) => `芬兰气象研究所在这一纬度平均每 ${b} 夜观测到 ${a} 夜极光，其参考地点为${ref}。这个数字说明的是极光活跃的频率，而非天空晴朗的频率。`,
    qWhen: '什么时候来最合适？',
    aWhenAurora: '看极光要选黑夜季节，大致从八月底到四月初。隆冬夜最长，避开学校假期的周次最为清静。',
    aWhenSki: '高山滑雪季从冬季延续到春季，三月和四月兼具长日照与好雪况。',
    aWhenSummer: '夏季夜不转黑，因此徒步与水上活动可以通宵进行。那段时间看不到极光。',
    qSki: '这里有高山滑雪吗？',
    aSki: (s, l) => `有。${s} 条雪道，${l} 条索道。`,
    qPark: '附近有国家公园吗？',
    aPark: (n) => `有：${n}。`,
  },
  ko: {
    heading: '자주 묻는 질문',
    qArrive: '어떻게 갑니까?',
    aArrive: (ap, ia, km, n) => `가장 가까운 공항은 ${ap}(${ia})이며 ${km} km 떨어져 있습니다. ${n}`,
    qAurora: '오로라는 얼마나 자주 보입니까?',
    aAurora: (a, b, ref) => `핀란드 기상청은 이 위도에서 평균 ${b}밤 중 ${a}밤 오로라를 관측합니다. 기준 지점은 ${ref}입니다. 이 수치는 오로라가 활발한 빈도이지 하늘이 맑은 빈도가 아닙니다.`,
    qWhen: '언제 오는 것이 좋습니까?',
    aWhenAurora: '오로라를 보려면 어두운 계절, 대략 8월 말부터 4월 초까지입니다. 한겨울에 밤이 가장 길고, 방학을 피한 주가 가장 한산합니다.',
    aWhenSki: '알파인 스키 시즌은 겨울부터 봄까지이며, 3월과 4월은 긴 낮과 좋은 설질이 함께합니다.',
    aWhenSummer: '여름에는 밤이 어두워지지 않아 하이킹과 물놀이가 밤새 이어집니다. 그 시기에는 오로라가 보이지 않습니다.',
    qSki: '알파인 스키를 탈 수 있습니까?',
    aSki: (s, l) => `있습니다. 슬로프 ${s}개, 리프트 ${l}기입니다.`,
    qPark: '근처에 국립공원이 있습니까?',
    aPark: (n) => `있습니다: ${n}.`,
  },
  fr: {
    heading: 'Questions fréquentes',
    qArrive: 'comment s’y rendre ?',
    aArrive: (ap, ia, km, n) => `L’aéroport le plus proche est ${ap} (${ia}), à ${km} km. ${n}`,
    qAurora: 'à quelle fréquence voit-on l’aurore ?',
    aAurora: (a, b, ref) => `L’Institut météorologique finlandais observe l’aurore à cette latitude environ ${a} nuits sur ${b}. Son point de référence est ${ref}. Ce chiffre indique la fréquence à laquelle l’aurore est active, pas celle à laquelle le ciel est dégagé.`,
    qWhen: 'quand faut-il venir ?',
    aWhenAurora: 'Pour l’aurore, la saison sombre, en gros de fin août à début avril. Au cœur de l’hiver les nuits sont les plus longues, et les semaines hors vacances scolaires les plus calmes.',
    aWhenSki: 'La saison de ski alpin va de l’hiver au printemps ; mars et avril allient longues journées et bonne neige.',
    aWhenSummer: 'En été la nuit ne s’assombrit pas, la randonnée et le temps sur l’eau se poursuivent donc pendant celle-ci. L’aurore n’est alors pas visible.',
    qSki: 'y a-t-il du ski alpin ?',
    aSki: (s, l) => `Oui. ${s} pistes et ${l} remontées.`,
    qPark: 'y a-t-il un parc national à proximité ?',
    aPark: (n) => `Oui : ${n}.`,
  },
  it: {
    heading: 'Domande frequenti',
    qArrive: 'come ci si arriva?',
    aArrive: (ap, ia, km, n) => `L’aeroporto più vicino è ${ap} (${ia}), a ${km} km. ${n}`,
    qAurora: 'quanto spesso si vede l’aurora?',
    aAurora: (a, b, ref) => `L’Istituto meteorologico finlandese osserva l’aurora a questa latitudine circa ${a} notti su ${b}. Il suo punto di riferimento è ${ref}. Quel dato indica quanto spesso l’aurora è attiva, non quanto spesso il cielo è sereno.`,
    qWhen: 'quando conviene venire?',
    aWhenAurora: 'Per l’aurora la stagione buia, all’incirca da fine agosto a inizio aprile. In pieno inverno le notti sono più lunghe e le settimane fuori dalle vacanze scolastiche sono le più tranquille.',
    aWhenSki: 'La stagione dello sci alpino va dall’inverno alla primavera; marzo e aprile uniscono giornate lunghe e buona neve.',
    aWhenSummer: 'D’estate la notte non si fa buia, quindi escursioni e tempo sull’acqua proseguono. L’aurora in quel periodo non si vede.',
    qSki: 'c’è sci alpino?',
    aSki: (s, l) => `Sì. ${s} piste e ${l} impianti.`,
    qPark: 'c’è un parco nazionale nelle vicinanze?',
    aPark: (n) => `Sì: ${n}.`,
  },
  nl: {
    heading: 'Veelgestelde vragen',
    qArrive: 'hoe komt u er?',
    aArrive: (ap, ia, km, n) => `De dichtstbijzijnde luchthaven is ${ap} (${ia}), op ${km} km. ${n}`,
    qAurora: 'hoe vaak is het noorderlicht te zien?',
    aAurora: (a, b, ref) => `Het Fins Meteorologisch Instituut neemt het noorderlicht op deze breedtegraad ongeveer ${a} op ${b} nachten waar. Het referentiepunt is ${ref}. Dat cijfer zegt hoe vaak het noorderlicht actief is, niet hoe vaak de hemel helder is.`,
    qWhen: 'wanneer kunt u het beste komen?',
    aWhenAurora: 'Voor het noorderlicht het donkere seizoen, grofweg eind augustus tot begin april. Midden in de winter zijn de nachten het langst, en de weken buiten de schoolvakanties het rustigst.',
    aWhenSki: 'Het alpineseizoen loopt van de winter tot in het voorjaar; maart en april combineren lange dagen met goede sneeuw.',
    aWhenSummer: 'In de zomer wordt het ’s nachts niet donker, dus wandelen en tijd op het water gaan door. Het noorderlicht is dan niet te zien.',
    qSki: 'is er alpineskiën?',
    aSki: (s, l) => `Ja. ${s} pistes en ${l} liften.`,
    qPark: 'is er een nationaal park in de buurt?',
    aPark: (n) => `Ja: ${n}.`,
  },
  sv: {
    heading: 'Vanliga frågor',
    qArrive: 'hur tar man sig hit?',
    aArrive: (ap, ia, km, n) => `Närmaste flygplats är ${ap} (${ia}), ${km} km bort. ${n}`,
    qAurora: 'hur ofta syns norrskenet?',
    aAurora: (a, b, ref) => `Meteorologiska institutet observerar norrsken på den här breddgraden ungefär ${a} nätter av ${b}. Institutets referenspunkt är ${ref}. Siffran säger hur ofta norrskenet är aktivt, inte hur ofta himlen är klar.`,
    qWhen: 'när lönar det sig att komma?',
    aWhenAurora: 'För norrskenet den mörka årstiden, ungefär slutet av augusti till början av april. Mitt i vintern är nätterna längst, och veckorna utanför skolloven lugnast.',
    aWhenSki: 'Alpinsäsongen sträcker sig från vinter till vår; mars och april kombinerar långa dagar med bra snö.',
    aWhenSummer: 'På sommaren mörknar natten inte, så vandring och tid på vattnet fortsätter genom den. Norrsken syns inte då.',
    qSki: 'finns det utförsåkning?',
    aSki: (s, l) => `Ja. ${s} backar och ${l} liftar.`,
    qPark: 'finns det en nationalpark i närheten?',
    aPark: (n) => `Ja: ${n}.`,
  },
}

export interface FaqItem { q: string; a: string }

/** The Q&A for one destination, built from the registry. Exported so the page
 *  can put the identical text into FAQPage JSON-LD. */
export function destinationFaqItems(slug: string, lang: Lang): FaqItem[] {
  const f: DestinationFacts | undefined = destinationFacts(slug)
  if (!f) return []
  const t = L[lang] ?? L.en
  const band = AURORA_BANDS[f.auroraBand]
  const p = f.name
  const items: FaqItem[] = [
    { q: `${p}: ${t.qArrive}`, a: t.aArrive(f.airport.name, f.airport.iata, f.airport.distanceKm.value, factText(f.airport.distanceKm.note, lang) ?? '') },
    { q: `${p}: ${t.qAurora}`, a: t.aAurora(band.nightsIn[0], band.nightsIn[1], band.reference) },
    {
      q: `${p}: ${t.qWhen}`,
      a: [t.aWhenAurora, f.ski ? t.aWhenSki : '', t.aWhenSummer].filter(Boolean).join(' '),
    },
  ]
  if (f.ski) items.push({ q: `${p}: ${t.qSki}`, a: t.aSki(f.ski.slopes.value, f.ski.lifts.value) })
  if (f.nationalPark) items.push({ q: `${p}: ${t.qPark}`, a: t.aPark(factText(f.nationalPark.name, lang) ?? f.nationalPark.name) })
  return items
}

export default function DestinationFaq({ slug }: { slug: string }) {
  const lang = useLang()
  const items = destinationFaqItems(slug, lang)
  if (!items.length) return null
  const t = L[lang] ?? L.en

  return (
    <section className="bg-[color:var(--color-deep-night)] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-7">
        <h2 className="font-heading text-3xl md:text-4xl text-[color:var(--color-snow)] leading-[1.1] mb-10">
          {t.heading}
        </h2>
        <dl className="space-y-7">
          {items.map((it) => (
            <div key={it.q} className="border-b border-[color:var(--color-mist)]/40 pb-7 last:border-0">
              <dt className="font-heading text-xl text-[color:var(--color-brass)] leading-tight mb-2.5">{it.q}</dt>
              <dd className="text-[color:var(--color-bone)]/85 font-body text-sm sm:text-base leading-relaxed">{it.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
