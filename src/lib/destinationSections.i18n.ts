import type { Lang } from './affiliate'

/**
 * Labels for the three destination-page sections added 2026-08-02, after Vesa
 * was asked what was still missing from these pages and answered: images,
 * a map and distances, when to come month by month, and something bookable.
 *
 * Site-local rather than in `shared/destinations/labels.ts` because these
 * sections are this site's design, not yet a network pattern. Promote them
 * there the moment a second site wants them — but not before, or the network
 * inherits a shape nobody else has agreed to.
 *
 * 🔴 No place name appears INSIDE a sentence here. Finnish would need
 * Inarissa / Levillä / Ylläksellä and German in Inari / auf Levi, so headings
 * that name a destination use the `"<Place>: <heading>"` form instead — the
 * same rule `DestinationFaq` follows.
 */
type L = Record<Lang, string>

export const SECTION_LABELS: {
  capWinter: L; capSummer: L;
  locEyebrow: L; locH2: L; locLede: L; arcticCircle: L; thisPlace: L; locNote: L;
  seasonEyebrow: L; seasonH2: L; seasonLede: L; daylight: L; hoursShort: L;
  midnightSun: L; polarNight: L; darkSky: L; seasonMethod: L;
  expEyebrow: L; expH2: L; expLede: L; expFrom: L; expCta: L;
  expNoneCta: L; expNoneNote: L; expPriceNote: L;
} = {
  // ── Editorial image captions ──────────────────────────────────────────────
  // The season, not a description of the photograph: the images are generic
  // northern scenes and must not claim to BE the named place (network rule —
  // no AI image may stand in as the portrait of a real named location).
  capWinter: { en: 'The dark season', fi: 'Pimeä kausi', de: 'Die dunkle Jahreszeit', ja: '暗い季節', es: 'La estación oscura', 'pt-BR': 'A estação escura', 'zh-CN': '暗季', ko: '어두운 계절', fr: 'La saison sombre', it: 'La stagione buia', nl: 'Het donkere seizoen', sv: 'Den mörka årstiden' },
  capSummer: { en: 'The light season', fi: 'Valoisa kausi', de: 'Die helle Jahreszeit', ja: '明るい季節', es: 'La estación luminosa', 'pt-BR': 'A estação clara', 'zh-CN': '亮季', ko: '밝은 계절', fr: 'La saison claire', it: 'La stagione luminosa', nl: 'Het lichte seizoen', sv: 'Den ljusa årstiden' },

  // ── Locator ───────────────────────────────────────────────────────────────
  locEyebrow: { en: 'Where it sits', fi: 'Sijainti', de: 'Lage', ja: '位置', es: 'Ubicación', 'pt-BR': 'Localização', 'zh-CN': '地理位置', ko: '위치', fr: 'Situation', it: 'Posizione', nl: 'Ligging', sv: 'Läge' },
  locH2: { en: 'How far north, and how you arrive', fi: 'Kuinka pohjoisessa, ja miten tänne tullaan', de: 'Wie weit im Norden, und wie Sie ankommen', ja: 'どれほど北か、そしてどう着くか', es: 'Cuán al norte, y cómo se llega', 'pt-BR': 'Quão ao norte, e como se chega', 'zh-CN': '有多靠北，以及如何抵达', ko: '얼마나 북쪽인지, 그리고 도착하는 방법', fr: 'À quel point au nord, et comment arriver', it: 'Quanto a nord, e come si arriva', nl: 'Hoe ver noordelijk, en hoe u er komt', sv: 'Hur långt norrut, och hur du kommer hit' },
  locLede: {
    en: 'The scale below is latitude: north is up, and the Arctic Circle is marked. How far north a place is decides its aurora band, its midnight sun and its polar night, so it is the distance that actually changes the stay.',
    fi: 'Alla oleva asteikko on leveysaste: pohjoinen ylhäällä ja napapiiri merkittynä. Se kuinka pohjoisessa paikka on ratkaisee revontulivyöhykkeen, keskiyön auringon ja kaamoksen, se on siis se etäisyys joka oikeasti muuttaa lomaa.',
    de: 'Die Skala unten ist der Breitengrad: Norden oben, der Polarkreis ist eingezeichnet. Wie weit nördlich ein Ort liegt, bestimmt seine Polarlichtzone, seine Mitternachtssonne und seine Polarnacht, es ist also die Entfernung, die den Aufenthalt wirklich verändert.',
    ja: '下のスケールは緯度です。上が北で、北極圏を示しています。どれだけ北にあるかがオーロラの帯、白夜、極夜を決めます。滞在を実際に変えるのはこの距離です。',
    es: 'La escala inferior es la latitud: el norte arriba y el Círculo Polar Ártico marcado. Cuán al norte está un lugar decide su banda de auroras, su sol de medianoche y su noche polar: es la distancia que de verdad cambia la estancia.',
    'pt-BR': 'A escala abaixo é a latitude: o norte em cima e o Círculo Polar Ártico marcado. Quão ao norte um lugar está decide sua faixa de auroras, seu sol da meia-noite e sua noite polar, é a distância que realmente muda a estadia.',
    'zh-CN': '下方标尺是纬度：上方为北，并标出北极圈。一个地方有多靠北，决定了它的极光带、午夜太阳与极夜——这才是真正改变行程的距离。',
    ko: '아래 눈금은 위도입니다. 위쪽이 북쪽이며 북극권을 표시했습니다. 얼마나 북쪽에 있는지가 오로라 대역과 백야, 극야를 결정합니다. 체류를 실제로 바꾸는 거리입니다.',
    fr: "L'échelle ci-dessous est la latitude : le nord en haut, le cercle polaire indiqué. La latitude détermine la bande d'aurores, le soleil de minuit et la nuit polaire : c'est la distance qui change vraiment le séjour.",
    it: "La scala qui sotto è la latitudine: nord in alto e Circolo Polare Artico segnato. Quanto a nord si trova un luogo decide la sua fascia aurorale, il sole di mezzanotte e la notte polare: è la distanza che cambia davvero il soggiorno.",
    nl: 'De schaal hieronder is de breedtegraad: noord boven, de poolcirkel is aangegeven. Hoe noordelijk een plek ligt bepaalt de noorderlichtzone, de middernachtzon en de poolnacht, dat is de afstand die het verblijf echt verandert.',
    sv: 'Skalan nedan är latitud: norr uppåt och polcirkeln utmärkt. Hur långt norrut en plats ligger avgör dess norrskensband, midnattssol och polarnatt, det är alltså den sträcka som verkligen förändrar vistelsen.',
  },
  arcticCircle: { en: 'Arctic Circle', fi: 'Napapiiri', de: 'Polarkreis', ja: '北極圏', es: 'Círculo Polar Ártico', 'pt-BR': 'Círculo Polar Ártico', 'zh-CN': '北极圈', ko: '북극권', fr: 'Cercle polaire arctique', it: 'Circolo Polare Artico', nl: 'Poolcirkel', sv: 'Polcirkeln' },
  thisPlace: { en: 'This destination', fi: 'Tämä kohde', de: 'Dieses Ziel', ja: 'この目的地', es: 'Este destino', 'pt-BR': 'Este destino', 'zh-CN': '当前目的地', ko: '이 목적지', fr: 'Cette destination', it: 'Questa destinazione', nl: 'Deze bestemming', sv: 'Denna destination' },
  locNote: {
    en: 'Latitudes and airport road distances from the network fact registry, each with its own source on the panel above.',
    fi: 'Leveysasteet ja lentoasemien tieetäisyydet verkoston faktarekisteristä, kunkin oma lähde yllä olevassa paneelissa.',
    de: 'Breitengrade und Straßenentfernungen zum Flughafen aus dem Faktenregister des Netzwerks, jeweils mit eigener Quelle im Panel oben.',
    ja: '緯度と空港からの道路距離はネットワークの事実レジストリより。出典は上のパネルに記載しています。',
    es: 'Latitudes y distancias por carretera al aeropuerto del registro de datos de la red, cada una con su fuente en el panel superior.',
    'pt-BR': 'Latitudes e distâncias rodoviárias até o aeroporto do registro de fatos da rede, cada uma com sua fonte no painel acima.',
    'zh-CN': '纬度与机场公路距离来自本网络的事实登记表，各自的来源见上方面板。',
    ko: '위도와 공항까지의 도로 거리는 네트워크 팩트 레지스트리 기준이며, 출처는 위 패널에 있습니다.',
    fr: "Latitudes et distances routières depuis l'aéroport issues du registre de faits du réseau, chacune avec sa source dans le panneau ci-dessus.",
    it: "Latitudini e distanze stradali dall'aeroporto dal registro dei fatti della rete, ciascuna con la propria fonte nel pannello sopra.",
    nl: 'Breedtegraden en wegafstanden vanaf de luchthaven uit het feitenregister van het netwerk, elk met eigen bron in het paneel hierboven.',
    sv: 'Latituder och vägavstånd från flygplatsen ur nätverkets faktaregister, var och en med egen källa i panelen ovan.',
  },

  // ── Season ────────────────────────────────────────────────────────────────
  seasonEyebrow: { en: 'When to come', fi: 'Milloin tulla', de: 'Wann kommen', ja: 'いつ訪れるか', es: 'Cuándo venir', 'pt-BR': 'Quando vir', 'zh-CN': '何时前来', ko: '언제 올까', fr: 'Quand venir', it: 'Quando venire', nl: 'Wanneer komen', sv: 'När du ska komma' },
  seasonH2: { en: 'The light, month by month', fi: 'Valo kuukausi kerrallaan', de: 'Das Licht, Monat für Monat', ja: '月ごとの光', es: 'La luz, mes a mes', 'pt-BR': 'A luz, mês a mês', 'zh-CN': '逐月的光', ko: '월별 빛의 변화', fr: 'La lumière, mois par mois', it: 'La luce, mese per mese', nl: 'Het licht, maand voor maand', sv: 'Ljuset, månad för månad' },
  seasonLede: {
    en: 'What decides the trip this far north is not the temperature but the light. Each bar is the length of the day in the middle of that month.',
    fi: 'Näin pohjoisessa matkan ratkaisee lämpötilan sijaan valo. Jokainen palkki on päivän pituus kyseisen kuukauden puolivälissä.',
    de: 'So weit im Norden entscheidet nicht die Temperatur über die Reise, sondern das Licht. Jeder Balken ist die Tageslänge in der Mitte des Monats.',
    ja: 'これほど北では、旅を決めるのは気温ではなく光です。各バーはその月の半ばの昼の長さです。',
    es: 'Tan al norte, lo que decide el viaje no es la temperatura sino la luz. Cada barra es la duración del día a mediados de ese mes.',
    'pt-BR': 'Tão ao norte, o que decide a viagem não é a temperatura, e sim a luz. Cada barra é a duração do dia em meados do mês.',
    'zh-CN': '在这样的高纬度，决定行程的不是气温而是光照。每根柱子是该月中旬的白昼长度。',
    ko: '이만큼 북쪽에서는 여행을 결정하는 것이 기온이 아니라 빛입니다. 각 막대는 그달 중순의 낮 길이입니다.',
    fr: "Aussi loin au nord, ce n'est pas la température qui décide du voyage mais la lumière. Chaque barre est la durée du jour au milieu du mois.",
    it: 'Così a nord non è la temperatura a decidere il viaggio ma la luce. Ogni barra è la durata del giorno a metà mese.',
    nl: 'Zo ver noordelijk bepaalt niet de temperatuur de reis maar het licht. Elke balk is de daglengte midden in die maand.',
    sv: 'Så här långt norrut avgörs resan inte av temperaturen utan av ljuset. Varje stapel är dagens längd mitt i månaden.',
  },
  daylight: { en: 'Daylight', fi: 'Valoisaa', de: 'Tageslicht', ja: '日照時間', es: 'Luz diurna', 'pt-BR': 'Luz do dia', 'zh-CN': '白昼', ko: '낮 길이', fr: 'Jour', it: 'Luce diurna', nl: 'Daglicht', sv: 'Dagsljus' },
  hoursShort: { en: 'h', fi: 't', de: 'Std.', ja: '時間', es: 'h', 'pt-BR': 'h', 'zh-CN': '小时', ko: '시간', fr: 'h', it: 'h', nl: 'u', sv: 'tim' },
  midnightSun: { en: 'Midnight sun', fi: 'Keskiyön aurinko', de: 'Mitternachtssonne', ja: '白夜', es: 'Sol de medianoche', 'pt-BR': 'Sol da meia-noite', 'zh-CN': '午夜太阳', ko: '백야', fr: 'Soleil de minuit', it: 'Sole di mezzanotte', nl: 'Middernachtzon', sv: 'Midnattssol' },
  polarNight: { en: 'Polar night', fi: 'Kaamos', de: 'Polarnacht', ja: '極夜', es: 'Noche polar', 'pt-BR': 'Noite polar', 'zh-CN': '极夜', ko: '극야', fr: 'Nuit polaire', it: 'Notte polare', nl: 'Poolnacht', sv: 'Polarnatt' },
  darkSky: { en: 'Dark enough for aurora', fi: 'Riittävän pimeää revontulille', de: 'Dunkel genug für Polarlichter', ja: 'オーロラが見える暗さ', es: 'Suficientemente oscuro para auroras', 'pt-BR': 'Escuro o bastante para auroras', 'zh-CN': '足够暗，可见极光', ko: '오로라를 볼 만큼 어두움', fr: 'Assez sombre pour les aurores', it: "Abbastanza buio per l'aurora", nl: 'Donker genoeg voor noorderlicht', sv: 'Tillräckligt mörkt för norrsken' },
  seasonMethod: {
    en: 'Calculated from this destination’s latitude ({lat}° N), not estimated. “Dark enough” means the sun reaches 12° below the horizon, the point at which the sky is genuinely dark. Whether the aurora is then ACTIVE is the separate, sourced figure in the panel above.',
    fi: 'Laskettu tämän kohteen leveysasteesta ({lat}° N), ei arvioitu. ”Riittävän pimeää” tarkoittaa että aurinko käy 12° horisontin alapuolella, jolloin taivas on aidosti pimeä. Se onko revontuli silloin AKTIIVINEN on erillinen, lähteistetty luku yllä olevassa paneelissa.',
    de: 'Aus dem Breitengrad dieses Ziels berechnet ({lat}° N), nicht geschätzt. „Dunkel genug“ heißt, die Sonne steht 12° unter dem Horizont, dann ist der Himmel wirklich dunkel. Ob das Polarlicht dann AKTIV ist, ist die separate, belegte Zahl im Panel oben.',
    ja: 'この目的地の緯度（{lat}° N）から計算した値で、推定ではありません。「見える暗さ」とは太陽が地平線下12°に達し、空が本当に暗くなる状態です。そのときオーロラが実際に出現するかは、上のパネルにある出典付きの別の数値です。',
    es: 'Calculado a partir de la latitud de este destino ({lat}° N), no estimado. «Suficientemente oscuro» significa que el sol llega a 12° bajo el horizonte, cuando el cielo está realmente oscuro. Si la aurora está entonces ACTIVA es la cifra aparte, con fuente, del panel superior.',
    'pt-BR': 'Calculado a partir da latitude deste destino ({lat}° N), não estimado. “Escuro o bastante” significa que o sol chega a 12° abaixo do horizonte, quando o céu fica realmente escuro. Se a aurora está então ATIVA é o número separado, com fonte, no painel acima.',
    'zh-CN': '依据本目的地的纬度（{lat}° N）计算，而非估算。“足够暗”指太阳降至地平线以下 12°，此时天空才真正黑暗。届时极光是否活跃，是上方面板中另一个有来源的数据。',
    ko: '이 목적지의 위도({lat}° N)로 계산한 값이며 추정치가 아닙니다. ‘충분히 어둡다’는 태양이 지평선 아래 12°에 이르러 하늘이 실제로 어두워지는 상태를 뜻합니다. 그때 오로라가 실제로 활동하는지는 위 패널의 별도 출처 수치입니다.',
    fr: "Calculé d'après la latitude de cette destination ({lat}° N), non estimé. « Assez sombre » signifie que le soleil descend à 12° sous l'horizon, seuil où le ciel est réellement noir. Que l'aurore soit alors ACTIVE est le chiffre distinct et sourcé du panneau ci-dessus.",
    it: "Calcolato dalla latitudine di questa destinazione ({lat}° N), non stimato. «Abbastanza buio» significa che il sole scende a 12° sotto l'orizzonte, quando il cielo è davvero scuro. Se l'aurora sia poi ATTIVA è il dato separato e con fonte nel pannello sopra.",
    nl: 'Berekend uit de breedtegraad van deze bestemming ({lat}° N), niet geschat. “Donker genoeg” betekent dat de zon 12° onder de horizon komt, waarop de hemel echt donker is. Of het noorderlicht dan ACTIEF is, is het aparte cijfer met bron in het paneel hierboven.',
    sv: 'Beräknat utifrån destinationens latitud ({lat}° N), inte uppskattat. ”Tillräckligt mörkt” betyder att solen når 12° under horisonten, då himlen är verkligt mörk. Om norrskenet då är AKTIVT är den separata, källbelagda siffran i panelen ovan.',
  },

  // ── Bookable here ─────────────────────────────────────────────────────────
  expEyebrow: { en: 'Bookable here', fi: 'Varattavissa täällä', de: 'Hier buchbar', ja: 'ここで予約できます', es: 'Reservable aquí', 'pt-BR': 'Reservável aqui', 'zh-CN': '此地可预订', ko: '여기서 예약 가능', fr: 'Réservable ici', it: 'Prenotabile qui', nl: 'Hier te boeken', sv: 'Bokningsbart här' },
  expH2: { en: 'Private experiences from this base', fi: 'Yksityiset elämykset tästä tukikohdasta', de: 'Private Erlebnisse von hier aus', ja: 'ここを拠点にしたプライベート体験', es: 'Experiencias privadas desde esta base', 'pt-BR': 'Experiências privadas a partir daqui', 'zh-CN': '以此为起点的私人体验', ko: '이곳을 기점으로 한 프라이빗 체험', fr: 'Expériences privées au départ d’ici', it: 'Esperienze private con partenza da qui', nl: 'Privé-ervaringen vanaf hier', sv: 'Privata upplevelser med start härifrån' },
  expLede: {
    en: 'Departures a guest staying here can actually take. Each card opens the operator’s own booking page.',
    fi: 'Lähtöjä jotka täällä majoittuva voi oikeasti ottaa. Jokainen kortti avaa järjestäjän oman varaussivun.',
    de: 'Abfahrten, die ein Gast von hier aus tatsächlich nehmen kann. Jede Karte öffnet die Buchungsseite des Anbieters.',
    ja: 'ここに滞在する方が実際に参加できる催行です。各カードは主催者の予約ページを直接開きます。',
    es: 'Salidas que un huésped alojado aquí puede tomar de verdad. Cada tarjeta abre la página de reserva del operador.',
    'pt-BR': 'Saídas que um hóspede daqui pode realmente fazer. Cada cartão abre a página de reserva do operador.',
    'zh-CN': '住在这里的客人确实可以参加的出发团。每张卡片直接打开运营商的预订页面。',
    ko: '이곳에 머무는 손님이 실제로 참여할 수 있는 출발편입니다. 각 카드는 운영사의 예약 페이지를 엽니다.',
    fr: "Des départs qu'un hôte séjournant ici peut réellement prendre. Chaque carte ouvre la page de réservation de l'organisateur.",
    it: 'Partenze che un ospite che alloggia qui può davvero prendere. Ogni scheda apre la pagina di prenotazione dell’operatore.',
    nl: 'Vertrekken die een gast die hier verblijft echt kan nemen. Elke kaart opent de boekingspagina van de aanbieder.',
    sv: 'Avgångar som en gäst som bor här faktiskt kan ta. Varje kort öppnar arrangörens egen bokningssida.',
  },
  expFrom: { en: 'from', fi: 'alkaen', de: 'ab', ja: '', es: 'desde', 'pt-BR': 'a partir de', 'zh-CN': '起价', ko: '부터', fr: 'à partir de', it: 'da', nl: 'vanaf', sv: 'från' },
  expCta: { en: 'Check availability', fi: 'Katso saatavuus', de: 'Verfügbarkeit prüfen', ja: '空き状況を見る', es: 'Ver disponibilidad', 'pt-BR': 'Ver disponibilidade', 'zh-CN': '查看可订日期', ko: '예약 가능 여부 확인', fr: 'Voir les disponibilités', it: 'Vedi disponibilità', nl: 'Bekijk beschikbaarheid', sv: 'Se tillgänglighet' },
  expNoneCta: { en: 'See what is running here', fi: 'Katso mitä täällä on tarjolla', de: 'Sehen, was hier angeboten wird', ja: 'ここで催行中のものを見る', es: 'Ver qué hay disponible aquí', 'pt-BR': 'Ver o que há por aqui', 'zh-CN': '查看此地有哪些项目', ko: '이곳의 운영 상품 보기', fr: 'Voir ce qui est proposé ici', it: 'Vedi cosa c’è qui', nl: 'Bekijk wat hier draait', sv: 'Se vad som går här' },
  expNoneNote: {
    en: 'We have no private departure verified from this base yet, so this is a search rather than a booking page, a promise we can keep.',
    fi: 'Tästä tukikohdasta ei ole vielä verifioitua yksityislähtöä, joten tämä on haku eikä varaussivu, lupaus jonka pystymme pitämään.',
    de: 'Von hier aus ist noch keine private Abfahrt verifiziert, daher führt dies zu einer Suche und nicht zu einer Buchungsseite, ein Versprechen, das wir halten können.',
    ja: 'ここを拠点とするプライベート催行はまだ確認できていないため、これは予約ページではなく検索です。守れる約束だけをします。',
    es: 'Todavía no tenemos ninguna salida privada verificada desde aquí, así que esto es una búsqueda y no una página de reserva: una promesa que sí podemos cumplir.',
    'pt-BR': 'Ainda não temos saída privada verificada a partir daqui, então isto é uma busca e não uma página de reserva, uma promessa que conseguimos cumprir.',
    'zh-CN': '我们尚未核实以此为起点的私人出发团，因此这是搜索页而非预订页——这是我们能兑现的承诺。',
    ko: '이곳을 기점으로 한 프라이빗 출발편은 아직 확인되지 않아, 예약 페이지가 아닌 검색으로 연결합니다. 지킬 수 있는 약속만 합니다.',
    fr: "Aucun départ privé n'est encore vérifié depuis cette base : ceci mène donc à une recherche et non à une page de réservation, une promesse que nous pouvons tenir.",
    it: 'Da questa base non abbiamo ancora una partenza privata verificata, quindi questa è una ricerca e non una pagina di prenotazione: una promessa che possiamo mantenere.',
    nl: 'Vanaf hier is nog geen privévertrek geverifieerd, dus dit is een zoekopdracht en geen boekingspagina, een belofte die we wél kunnen nakomen.',
    sv: 'Vi har ännu ingen verifierad privat avgång härifrån, så detta är en sökning och inte en bokningssida, ett löfte vi kan hålla.',
  },
  expPriceNote: {
    en: 'Prices are GetYourGuide’s own, read {p}. Product pages checked {v}.',
    fi: 'Hinnat GetYourGuiden omia, luettu {p}. Tuotesivut tarkistettu {v}.',
    de: 'Preise von GetYourGuide, gelesen am {p}. Produktseiten geprüft am {v}.',
    ja: '料金はGetYourGuideのもの（{p} 時点）。商品ページ確認日 {v}。',
    es: 'Precios de GetYourGuide, leídos el {p}. Páginas comprobadas el {v}.',
    'pt-BR': 'Preços do próprio GetYourGuide, lidos em {p}. Páginas verificadas em {v}.',
    'zh-CN': '价格来自 GetYourGuide，读取于 {p}。产品页核查于 {v}。',
    ko: '가격은 GetYourGuide 기준, {p} 확인. 상품 페이지 {v} 점검.',
    fr: 'Prix de GetYourGuide, relevés le {p}. Pages produits vérifiées le {v}.',
    it: 'Prezzi di GetYourGuide, letti il {p}. Pagine prodotto verificate il {v}.',
    nl: 'Prijzen van GetYourGuide zelf, gelezen op {p}. Productpagina’s gecontroleerd op {v}.',
    sv: 'Priser från GetYourGuide, avlästa {p}. Produktsidor kontrollerade {v}.',
  },
}

/** `s(SECTION_LABELS.seasonMethod, lang, { lat: 68.9 })` */
export function s(label: L, lang: Lang, vars?: Record<string, string | number>): string {
  const raw = label[lang] ?? label.en
  return vars
    ? raw.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
    : raw
}
