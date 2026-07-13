import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'

/**
 * Home FAQ — editorial Q&A on the onyx "members-club" surface (Cormorant
 * headings, brass accents, bone body). `a` feeds both the visible answer and the
 * FAQPage JSON-LD, so there is a single source of truth.
 *
 * Brand rules honoured: NO invented nightly prices, no fabricated statistics,
 * no banned adjectives. Rates are described as "on request / on application",
 * which is how this concierge collection actually quotes.
 */
export interface VillaFaq {
  q: string
  a: string
}

export const VILLA_FAQ_BY_LANG: Record<Lang, VillaFaq[]> = {
  en: [
    {
      q: 'What is a private aurora villa in Lapland?',
      a: 'A private aurora villa is a stand-alone luxury residence in Finnish Lapland, built so you can watch the Northern Lights from your own space, usually through a glass roof, glass walls or large panoramic windows. Unlike a hotel room, the villa is yours alone for the stay, and it is often set away from light pollution so the aurora is easier to see on a clear night.',
    },
    {
      q: 'What is included in a luxury Lapland villa?',
      a: 'It varies by property, but our collection typically features a private sauna, a hot tub or outdoor jacuzzi, a fully equipped kitchen and a fireplace or wood stove. Several villas can arrange a private chef, daily housekeeping, firewood and grocery pre-stocking. Aurora wake-up alerts, where offered, notify you when the lights appear. Exact inclusions are confirmed per villa when you enquire.',
    },
    {
      q: 'How many guests do Lapland luxury villas sleep?',
      a: 'Capacity ranges across the collection. Glass igloos and design suites usually suit two guests, while lakeside log estates and larger chalets sleep a family or a small group. Each villa page lists its sleeping capacity and bedroom layout, and the concierge can match a property to your party size.',
    },
    {
      q: 'When is the best season for a luxury aurora villa stay?',
      a: 'The aurora season in Lapland runs from roughly late August to early April, when the nights are dark enough. Activity is strongest and snow most reliable from December to March. For the Midnight Sun and bright, mild nights instead of the aurora, visit from June to July. The right window depends on whether you are travelling for the Northern Lights, snow activities or the polar summer.',
    },
    {
      q: 'Do luxury villas offer private guides and transfers?',
      a: 'Many do. The concierge can arrange private airport transfers from Rovaniemi, Kittilä or Ivalo, and private guides for aurora hunting, husky and reindeer experiences, snowmobiling and other activities. These are tailored to each booking and confirmed in advance rather than sold as a fixed package.',
    },
    {
      q: 'How do I book, and how are rates quoted?',
      a: 'Booking is handled through an anonymous concierge enquiry rather than an instant online checkout. You share your dates and party, and rates are quoted on request directly for the villa and season you choose. This lets the concierge confirm availability, inclusions and any private arrangements before you commit.',
    },
  ],

  fi: [
    {
      q: 'Mikä on yksityinen revontulihuvila Lapissa?',
      a: 'Yksityinen revontulihuvila on erillinen luksusasunto Suomen Lapissa, rakennettu niin että revontulia voi katsella omasta rauhasta, yleensä lasikaton, lasiseinien tai suurten panoraamaikkunoiden läpi. Toisin kuin hotellihuone, huvila on vain sinun käytössäsi koko oleskelun ajan, ja se sijaitsee usein kaukana valosaasteesta, joten revontulet erottuvat kirkkaana yönä helpommin.',
    },
    {
      q: 'Mitä luksushuvilaan Lapissa kuuluu?',
      a: 'Sisältö vaihtelee kohteittain, mutta kokoelmassamme on tyypillisesti oma sauna, palju tai ulkoporeallas, täysin varusteltu keittiö sekä takka tai puuhella. Useat huvilat voivat järjestää yksityiskokin, päivittäisen siivouksen, polttopuut sekä ruokaostokset valmiiksi. Revontuliherätys, kun se on tarjolla, ilmoittaa kun revontulet ilmestyvät. Tarkat sisällöt vahvistetaan huvilakohtaisesti tiedustelun yhteydessä.',
    },
    {
      q: 'Kuinka monelle vieraalle Lapin luksushuvilat on mitoitettu?',
      a: 'Majoituskapasiteetti vaihtelee kokoelmassa. Lasi-iglut ja design-sviitit sopivat yleensä kahdelle, kun taas järvenrantaiset hirsikartanot ja suuremmat huvilat majoittavat perheen tai pienen ryhmän. Jokaisen huvilan sivulla on majoituskapasiteetti ja makuuhuonejärjestely, ja concierge osaa sovittaa kohteen seurueenne kokoon.',
    },
    {
      q: 'Mikä on paras vuodenaika luksusrevontulihuvilan vierailulle?',
      a: 'Revontulikausi Lapissa kestää suunnilleen elokuun lopusta huhtikuun alkuun, kun yöt ovat riittävän pimeitä. Aktiivisuus on voimakkainta ja lumitilanne varmin joulukuusta maaliskuuhun. Keskiyön aurinkoa ja vaaleita, leutoja öitä revontulien sijaan voi kokea kesä–heinäkuussa. Sopiva ajankohta riippuu siitä, matkustatteko revontulien, lumiaktiviteettien vai napakesän vuoksi.',
    },
    {
      q: 'Tarjoavatko luksushuvilat yksityisoppaita ja kuljetuksia?',
      a: 'Monet tarjoavat. Concierge voi järjestää yksityiset lentokenttäkuljetukset Rovaniemeltä, Kittilästä tai Ivalosta sekä yksityisoppaat revontuliretkille, husky- ja poroelämyksiin, moottorikelkkailuun ja muihin aktiviteetteihin. Nämä räätälöidään kullekin varaukselle ja vahvistetaan etukäteen sen sijaan, että ne myytäisiin kiinteänä pakettina.',
    },
    {
      q: 'Miten varaan, ja miten hinnat ilmoitetaan?',
      a: 'Varaus hoidetaan anonyymin concierge-tiedustelun kautta eikä välittömänä verkkokassana. Kerrotte päivämääränne ja seurueenne, ja hinnat ilmoitetaan pyynnöstä suoraan valitsemallenne huvilalle ja kaudelle. Näin concierge voi vahvistaa saatavuuden, sisällöt ja mahdolliset yksityisjärjestelyt ennen sitoutumista.',
    },
  ],

  de: [
    {
      q: 'Was ist eine private Polarlicht-Villa in Lappland?',
      a: 'Eine private Polarlicht-Villa ist eine eigenständige Luxusresidenz in Finnisch-Lappland, die darauf ausgelegt ist, die Nordlichter aus dem eigenen Rückzugsort zu beobachten, meist durch ein Glasdach, Glaswände oder große Panoramafenster. Anders als ein Hotelzimmer gehört die Villa während des Aufenthalts allein Ihnen und liegt oft abseits von Lichtverschmutzung, sodass das Polarlicht in einer klaren Nacht leichter zu sehen ist.',
    },
    {
      q: 'Was ist in einer Luxusvilla in Lappland enthalten?',
      a: 'Das hängt vom Objekt ab, doch unsere Sammlung bietet in der Regel eine private Sauna, einen Hot Tub oder Außen-Whirlpool, eine voll ausgestattete Küche sowie einen Kamin oder Holzofen. Mehrere Villen können einen Privatkoch, tägliche Reinigung, Brennholz und einen vorab gefüllten Lebensmittelvorrat arrangieren. Eine Polarlicht-Weckfunktion benachrichtigt Sie, sofern angeboten, wenn die Lichter erscheinen. Die genauen Leistungen werden je Villa bei der Anfrage bestätigt.',
    },
    {
      q: 'Für wie viele Gäste sind die Luxusvillen in Lappland ausgelegt?',
      a: 'Die Kapazität variiert innerhalb der Sammlung. Glas-Iglus und Design-Suiten eignen sich meist für zwei Gäste, während Blockhaus-Anwesen am See und größere Chalets eine Familie oder kleine Gruppe beherbergen. Auf jeder Villenseite sind Belegung und Schlafzimmeraufteilung angegeben, und der Concierge kann ein Objekt auf Ihre Gruppengröße abstimmen.',
    },
    {
      q: 'Wann ist die beste Saison für einen Aufenthalt in einer Luxus-Polarlicht-Villa?',
      a: 'Die Polarlichtsaison in Lappland reicht etwa von Ende August bis Anfang April, wenn die Nächte dunkel genug sind. Am stärksten ist die Aktivität und am verlässlichsten der Schnee von Dezember bis März. Für die Mitternachtssonne und helle, milde Nächte statt des Polarlichts reisen Sie von Juni bis Juli. Der passende Zeitraum hängt davon ab, ob Sie für die Nordlichter, Schneeaktivitäten oder den Polarsommer kommen.',
    },
    {
      q: 'Bieten die Luxusvillen private Guides und Transfers?',
      a: 'Viele tun das. Der Concierge kann private Flughafentransfers ab Rovaniemi, Kittilä oder Ivalo sowie private Guides für die Polarlichtjagd, Husky- und Rentier-Erlebnisse, Schneemobiltouren und weitere Aktivitäten organisieren. Diese werden für jede Buchung individuell zusammengestellt und vorab bestätigt, statt als festes Paket verkauft zu werden.',
    },
    {
      q: 'Wie buche ich, und wie werden die Preise angegeben?',
      a: 'Die Buchung erfolgt über eine anonyme Concierge-Anfrage und nicht über einen sofortigen Online-Checkout. Sie teilen Ihre Daten und Ihre Gruppe mit, und die Preise werden auf Anfrage direkt für die gewählte Villa und Saison genannt. So kann der Concierge Verfügbarkeit, Leistungen und etwaige private Arrangements bestätigen, bevor Sie sich festlegen.',
    },
  ],

  ja: [
    {
      q: 'ラップランドのプライベート・オーロラ・ヴィラとは何ですか?',
      a: 'プライベート・オーロラ・ヴィラとは、フィンランド・ラップランドにある独立した高級邸宅で、自分だけの空間からオーロラを眺められるように設計されています。多くはガラス屋根、ガラス壁、または大きなパノラマ窓を備えています。ホテルの客室とは異なり、滞在中はヴィラを一棟まるごとご利用いただけ、光害の少ない場所に建つことが多いため、晴れた夜にはオーロラが見えやすくなります。',
    },
    {
      q: 'ラップランドの高級ヴィラには何が含まれますか?',
      a: '施設によって異なりますが、当コレクションには通常、専用サウナ、ホットタブまたは屋外ジャグジー、設備の整ったキッチン、暖炉または薪ストーブが備わっています。複数のヴィラでは、専属シェフ、毎日のハウスキーピング、薪、食料の事前補充を手配できます。オーロラの出現を知らせるウェイクアップアラートは、提供される場合にご利用いただけます。正確な内容はお問い合わせ時にヴィラごとに確認いたします。',
    },
    {
      q: 'ラップランドの高級ヴィラは何名まで宿泊できますか?',
      a: '収容人数はコレクションによって異なります。ガラスイグルーやデザインスイートは通常2名向けで、湖畔のログハウスや大きめのシャレーは家族や少人数のグループに対応します。各ヴィラのページに宿泊人数と寝室の構成を記載しており、コンシェルジュがご一行の人数に合わせて施設をご提案します。',
    },
    {
      q: '高級オーロラ・ヴィラ滞在に最適な季節はいつですか?',
      a: 'ラップランドのオーロラのシーズンは、夜が十分に暗くなるおよそ8月下旬から4月上旬までです。活動が最も活発で雪が最も確実なのは12月から3月です。オーロラの代わりに白夜と明るく穏やかな夜を求めるなら、6月から7月にお越しください。最適な時期は、オーロラ、雪のアクティビティ、極地の夏のいずれを目的に旅をなさるかによります。',
    },
    {
      q: '高級ヴィラはプライベートガイドや送迎を提供していますか?',
      a: '多くの施設で提供しています。コンシェルジュは、ロヴァニエミ、キッティラ、イヴァロからのプライベート空港送迎や、オーロラ観察、ハスキー・トナカイ体験、スノーモービルなどのプライベートガイドを手配できます。これらは固定パッケージとして販売するのではなく、ご予約ごとにあつらえ、事前に確認いたします。',
    },
    {
      q: '予約方法と料金の案内はどのようになりますか?',
      a: 'ご予約は、即時のオンライン決済ではなく、匿名のコンシェルジュへのお問い合わせを通じて承ります。ご希望の日程とご一行をお知らせいただくと、お選びのヴィラと季節について料金をリクエストに応じて直接ご案内します。これにより、ご決定の前にコンシェルジュが空室状況、含まれる内容、各種プライベートの手配を確認できます。',
    },
  ],

  es: [
    {
      q: '¿Qué es una villa privada de auroras en Laponia?',
      a: 'Una villa privada de auroras es una residencia de lujo independiente en la Laponia finlandesa, pensada para contemplar la aurora boreal desde su propio espacio, normalmente a través de un techo de cristal, paredes acristaladas o grandes ventanales panorámicos. A diferencia de una habitación de hotel, la villa es solo para usted durante la estancia y suele situarse lejos de la contaminación lumínica, de modo que la aurora se ve con más facilidad en una noche despejada.',
    },
    {
      q: '¿Qué incluye una villa de lujo en Laponia?',
      a: 'Depende del alojamiento, pero nuestra colección suele incluir sauna privada, jacuzzi o bañera de hidromasaje exterior, cocina totalmente equipada y chimenea o estufa de leña. Varias villas pueden organizar chef privado, limpieza diaria, leña y la compra de víveres por adelantado. El aviso de auroras, cuando se ofrece, le avisa al aparecer las luces. Las inclusiones exactas se confirman por villa al hacer la consulta.',
    },
    {
      q: '¿Para cuántos huéspedes son las villas de lujo de Laponia?',
      a: 'La capacidad varía dentro de la colección. Los iglús de cristal y las suites de diseño suelen ser para dos personas, mientras que las fincas de troncos a orillas del lago y los chalés más grandes alojan a una familia o a un grupo reducido. Cada página de villa indica la capacidad y la distribución de dormitorios, y el conserje puede ajustar el alojamiento al tamaño de su grupo.',
    },
    {
      q: '¿Cuál es la mejor temporada para una estancia en una villa de auroras de lujo?',
      a: 'La temporada de auroras en Laponia va aproximadamente de finales de agosto a principios de abril, cuando las noches son lo bastante oscuras. La actividad es mayor y la nieve más fiable de diciembre a marzo. Para el sol de medianoche y noches claras y suaves en lugar de la aurora, viaje de junio a julio. La ventana adecuada depende de si viaja por la aurora boreal, las actividades en la nieve o el verano polar.',
    },
    {
      q: '¿Las villas de lujo ofrecen guías privados y traslados?',
      a: 'Muchas sí. El conserje puede organizar traslados privados desde el aeropuerto de Rovaniemi, Kittilä o Ivalo, y guías privados para la caza de auroras, experiencias con huskies y renos, motos de nieve y otras actividades. Se adaptan a cada reserva y se confirman con antelación, en lugar de venderse como un paquete cerrado.',
    },
    {
      q: '¿Cómo reservo y cómo se indican las tarifas?',
      a: 'La reserva se gestiona mediante una consulta a un conserje anónimo, no con un pago en línea inmediato. Usted comparte sus fechas y su grupo, y las tarifas se indican a petición, directamente para la villa y la temporada que elija. Así el conserje puede confirmar la disponibilidad, las inclusiones y cualquier arreglo privado antes de que se comprometa.',
    },
  ],

  'pt-BR': [
    {
      q: 'O que é uma vila privativa de auroras na Lapônia?',
      a: 'Uma vila privativa de auroras é uma residência de luxo independente na Lapônia finlandesa, pensada para observar a aurora boreal a partir do seu próprio espaço, normalmente por um teto de vidro, paredes de vidro ou grandes janelas panorâmicas. Diferente de um quarto de hotel, a vila é só sua durante a estadia e costuma ficar longe da poluição luminosa, de modo que a aurora fica mais fácil de ver numa noite limpa.',
    },
    {
      q: 'O que está incluído em uma vila de luxo na Lapônia?',
      a: 'Varia conforme a propriedade, mas nossa coleção costuma ter sauna privativa, hot tub ou banheira externa, cozinha totalmente equipada e lareira ou fogão a lenha. Várias vilas podem providenciar chef privativo, arrumação diária, lenha e abastecimento de mantimentos antecipado. O alerta de auroras, quando oferecido, avisa você quando as luzes aparecem. As inclusões exatas são confirmadas por vila no momento da consulta.',
    },
    {
      q: 'Para quantos hóspedes são as vilas de luxo da Lapônia?',
      a: 'A capacidade varia dentro da coleção. Iglus de vidro e suítes de design costumam acomodar duas pessoas, enquanto propriedades de madeira à beira do lago e chalés maiores acomodam uma família ou um grupo pequeno. Cada página de vila informa a capacidade e a disposição dos quartos, e o concierge pode adequar a propriedade ao tamanho do seu grupo.',
    },
    {
      q: 'Qual é a melhor estação para uma estadia em vila de auroras de luxo?',
      a: 'A temporada de auroras na Lapônia vai mais ou menos do fim de agosto ao início de abril, quando as noites são escuras o suficiente. A atividade é mais forte e a neve mais garantida de dezembro a março. Para o sol da meia-noite e noites claras e amenas no lugar da aurora, viaje de junho a julho. A janela ideal depende de você viajar pela aurora boreal, pelas atividades na neve ou pelo verão polar.',
    },
    {
      q: 'As vilas de luxo oferecem guias privativos e traslados?',
      a: 'Muitas oferecem. O concierge pode organizar traslados privativos do aeroporto de Rovaniemi, Kittilä ou Ivalo, e guias privativos para caça às auroras, experiências com huskies e renas, snowmobile e outras atividades. Tudo é adaptado a cada reserva e confirmado com antecedência, em vez de vendido como pacote fechado.',
    },
    {
      q: 'Como faço a reserva e como as tarifas são informadas?',
      a: 'A reserva é feita por uma consulta a um concierge anônimo, não por um checkout on-line imediato. Você informa suas datas e seu grupo, e as tarifas são informadas mediante solicitação, diretamente para a vila e a estação escolhidas. Assim o concierge pode confirmar disponibilidade, inclusões e quaisquer arranjos privativos antes de você se comprometer.',
    },
  ],

  'zh-CN': [
    {
      q: '拉普兰的私人极光别墅是什么?',
      a: '私人极光别墅是位于芬兰拉普兰的独立豪华居所,专为让您在自己的空间里观赏北极光而设计,通常配有玻璃屋顶、玻璃幕墙或大型全景窗。与酒店客房不同,入住期间整栋别墅仅供您专享,且多设在光污染较少的地方,因此在晴朗的夜晚更易看到极光。',
    },
    {
      q: '拉普兰的豪华别墅包含哪些设施?',
      a: '具体因物业而异,但我们的精选别墅通常配有私人桑拿、热水浴缸或户外按摩浴池、设备齐全的厨房,以及壁炉或柴火炉。多处别墅可安排私人厨师、每日清洁、柴火以及提前备好食材。如提供极光唤醒提醒,会在极光出现时通知您。具体包含内容会在您咨询时按别墅逐一确认。',
    },
    {
      q: '拉普兰的豪华别墅可容纳多少位客人?',
      a: '容纳人数因别墅而异。玻璃冰屋和设计套房通常适合两位客人,而湖畔木屋庄园和较大的木屋可容纳一家人或小型团体。每个别墅页面都列出可住人数和卧室布局,礼宾团队可根据您的人数为您匹配合适的别墅。',
    },
    {
      q: '入住豪华极光别墅的最佳季节是什么时候?',
      a: '拉普兰的极光季大致从八月底持续到四月初,此时夜晚足够黑暗。十二月至三月极光活动最强,积雪也最有保障。若想体验午夜阳光以及明亮温和的夜晚而非极光,可在六月至七月前来。合适的时段取决于您此行是为了北极光、雪上活动,还是极地夏季。',
    },
    {
      q: '豪华别墅是否提供私人向导和接送?',
      a: '许多别墅都提供。礼宾团队可安排从罗瓦涅米、基蒂莱或伊瓦洛机场出发的私人接送,以及用于追极光、哈士奇与驯鹿体验、雪地摩托等活动的私人向导。这些均按每笔预订量身安排并提前确认,而非作为固定套餐出售。',
    },
    {
      q: '我该如何预订?价格又是如何报出的?',
      a: '预订通过匿名礼宾咨询办理,而非即时在线结账。您提供日期和同行人数,我们便会针对您所选的别墅与季节,应您的要求直接报价。这样礼宾团队可在您确定之前确认空房、所含内容及任何私人安排。',
    },
  ],

  ko: [
    {
      q: '라플란드의 프라이빗 오로라 빌라란 무엇인가요?',
      a: '프라이빗 오로라 빌라는 핀란드 라플란드에 있는 독립형 럭셔리 레지던스로, 자신만의 공간에서 오로라를 감상하도록 설계되었습니다. 보통 유리 지붕, 유리 벽, 또는 큰 파노라마 창을 갖추고 있습니다. 호텔 객실과 달리 머무는 동안 빌라 전체가 오롯이 손님의 공간이며, 빛 공해가 적은 곳에 자리해 맑은 밤에는 오로라를 보기가 더 쉽습니다.',
    },
    {
      q: '라플란드 럭셔리 빌라에는 무엇이 포함되나요?',
      a: '숙소마다 다르지만, 저희 컬렉션에는 보통 전용 사우나, 핫텁이나 야외 자쿠지, 풀옵션 주방, 벽난로 또는 장작 난로가 갖춰져 있습니다. 여러 빌라에서 전속 셰프, 매일 하우스키핑, 장작, 식료품 사전 준비를 마련해 드릴 수 있습니다. 제공되는 경우 오로라 알림이 오로라가 나타날 때 알려 드립니다. 정확한 포함 사항은 문의 시 빌라별로 확인해 드립니다.',
    },
    {
      q: '라플란드 럭셔리 빌라는 몇 명까지 묵을 수 있나요?',
      a: '수용 인원은 컬렉션마다 다릅니다. 글래스 이글루와 디자인 스위트는 보통 2인에 적합하고, 호숫가 통나무 저택과 더 큰 샬레는 가족이나 소규모 일행이 묵을 수 있습니다. 각 빌라 페이지에 수용 인원과 침실 구성이 안내되어 있으며, 컨시어지가 일행 규모에 맞는 숙소를 매칭해 드립니다.',
    },
    {
      q: '럭셔리 오로라 빌라 숙박에 가장 좋은 시기는 언제인가요?',
      a: '라플란드의 오로라 시즌은 밤이 충분히 어두워지는 대략 8월 말부터 4월 초까지입니다. 활동이 가장 활발하고 눈이 가장 확실한 시기는 12월부터 3월까지입니다. 오로라 대신 백야와 밝고 온화한 밤을 원하신다면 6월부터 7월 사이에 방문하십시오. 적절한 시기는 오로라, 설상 액티비티, 극지의 여름 중 무엇을 위해 여행하시는지에 따라 달라집니다.',
    },
    {
      q: '럭셔리 빌라는 프라이빗 가이드와 차량 이동을 제공하나요?',
      a: '많은 빌라가 제공합니다. 컨시어지가 로바니에미, 키틸레, 이발로 공항에서의 프라이빗 차량 이동과 함께 오로라 헌팅, 허스키·순록 체험, 스노모빌 등 액티비티를 위한 프라이빗 가이드를 마련해 드릴 수 있습니다. 이는 고정 패키지로 판매되는 것이 아니라 예약마다 맞춤으로 구성되어 사전에 확정됩니다.',
    },
    {
      q: '예약은 어떻게 하며, 요금은 어떻게 안내되나요?',
      a: '예약은 즉시 온라인 결제가 아니라 익명 컨시어지 문의를 통해 진행됩니다. 날짜와 일행을 알려 주시면, 선택하신 빌라와 시즌에 대해 요청 시 직접 요금을 안내해 드립니다. 이를 통해 컨시어지가 확정 전에 예약 가능 여부, 포함 사항, 각종 프라이빗 준비를 확인할 수 있습니다.',
    },
  ],

  fr: [
    {
      q: 'Qu’est-ce qu’une villa privée aux aurores en Laponie ?',
      a: 'Une villa privée aux aurores est une résidence de luxe indépendante en Laponie finlandaise, conçue pour observer les aurores boréales depuis votre propre espace, généralement par un toit vitré, des murs de verre ou de grandes baies panoramiques. Contrairement à une chambre d’hôtel, la villa est à vous seul pour tout le séjour et se situe souvent à l’écart de la pollution lumineuse, ce qui rend l’aurore plus facile à voir par nuit claire.',
    },
    {
      q: 'Qu’est-ce qui est inclus dans une villa de luxe en Laponie ?',
      a: 'Cela dépend du bien, mais notre collection comprend en général un sauna privé, un bain nordique ou un jacuzzi extérieur, une cuisine entièrement équipée et une cheminée ou un poêle à bois. Plusieurs villas peuvent organiser un chef privé, un ménage quotidien, le bois de chauffage et un approvisionnement en courses à l’avance. L’alerte aux aurores, lorsqu’elle est proposée, vous prévient à l’apparition des lumières. Les prestations exactes sont confirmées villa par villa lors de la demande.',
    },
    {
      q: 'Combien de personnes peuvent loger dans les villas de luxe de Laponie ?',
      a: 'La capacité varie au sein de la collection. Les igloos de verre et les suites design conviennent généralement à deux personnes, tandis que les domaines en rondins au bord du lac et les chalets plus grands accueillent une famille ou un petit groupe. Chaque page de villa indique la capacité et la répartition des chambres, et le concierge peut adapter le bien à la taille de votre groupe.',
    },
    {
      q: 'Quelle est la meilleure saison pour un séjour en villa de luxe aux aurores ?',
      a: 'La saison des aurores en Laponie s’étend environ de fin août à début avril, lorsque les nuits sont assez sombres. L’activité est la plus forte et la neige la plus sûre de décembre à mars. Pour le soleil de minuit et des nuits claires et douces plutôt que l’aurore, voyagez de juin à juillet. La bonne période dépend de votre objectif : les aurores boréales, les activités sur neige ou l’été polaire.',
    },
    {
      q: 'Les villas de luxe proposent-elles des guides privés et des transferts ?',
      a: 'Beaucoup le font. Le concierge peut organiser des transferts privés depuis l’aéroport de Rovaniemi, Kittilä ou Ivalo, ainsi que des guides privés pour la chasse aux aurores, les expériences avec huskies et rennes, la motoneige et d’autres activités. Tout est adapté à chaque réservation et confirmé à l’avance, plutôt que vendu sous forme de forfait figé.',
    },
    {
      q: 'Comment réserver, et comment les tarifs sont-ils communiqués ?',
      a: 'La réservation se fait par une demande auprès d’un concierge anonyme, et non par un paiement en ligne immédiat. Vous indiquez vos dates et votre groupe, et les tarifs sont communiqués sur demande, directement pour la villa et la saison choisies. Le concierge peut ainsi confirmer la disponibilité, les prestations et les éventuels arrangements privés avant que vous ne vous engagiez.',
    },
  ],

  it: [
    {
      q: 'Che cos’è una villa privata con aurora in Lapponia?',
      a: 'Una villa privata con aurora è una residenza di lusso indipendente nella Lapponia finlandese, pensata per osservare l’aurora boreale dal proprio spazio, di solito attraverso un tetto di vetro, pareti vetrate o ampie vetrate panoramiche. A differenza di una camera d’albergo, la villa è solo Sua per tutto il soggiorno e spesso si trova lontano dall’inquinamento luminoso, così l’aurora è più facile da vedere in una notte limpida.',
    },
    {
      q: 'Che cosa è incluso in una villa di lusso in Lapponia?',
      a: 'Dipende dalla struttura, ma la nostra collezione prevede in genere sauna privata, hot tub o vasca idromassaggio esterna, cucina completamente attrezzata e camino o stufa a legna. Diverse ville possono organizzare uno chef privato, pulizie giornaliere, legna da ardere e una scorta di generi alimentari predisposta. L’avviso aurora, dove offerto, La avverte quando compaiono le luci. Le inclusioni esatte vengono confermate villa per villa al momento della richiesta.',
    },
    {
      q: 'Quanti ospiti possono alloggiare nelle ville di lusso della Lapponia?',
      a: 'La capacità varia all’interno della collezione. Igloo di vetro e suite di design sono di norma per due persone, mentre le dimore in tronchi sul lago e gli chalet più ampi ospitano una famiglia o un piccolo gruppo. Ogni pagina della villa indica la capacità e la disposizione delle camere, e il concierge può adattare la struttura alle dimensioni del Suo gruppo.',
    },
    {
      q: 'Qual è la stagione migliore per un soggiorno in una villa di lusso con aurora?',
      a: 'La stagione dell’aurora in Lapponia va all’incirca da fine agosto a inizio aprile, quando le notti sono abbastanza buie. L’attività è più intensa e la neve più sicura da dicembre a marzo. Per il sole di mezzanotte e notti chiare e miti anziché l’aurora, viaggi da giugno a luglio. Il periodo giusto dipende dal fatto che viaggi per l’aurora boreale, le attività sulla neve o l’estate polare.',
    },
    {
      q: 'Le ville di lusso offrono guide private e transfer?',
      a: 'Molte sì. Il concierge può organizzare transfer privati dall’aeroporto di Rovaniemi, Kittilä o Ivalo e guide private per la caccia all’aurora, esperienze con husky e renne, motoslitta e altre attività. Tutto è personalizzato per ogni prenotazione e confermato in anticipo, anziché venduto come pacchetto fisso.',
    },
    {
      q: 'Come prenoto e come vengono indicate le tariffe?',
      a: 'La prenotazione avviene tramite una richiesta a un concierge anonimo, non con un pagamento online immediato. Lei comunica le date e il gruppo, e le tariffe vengono indicate su richiesta, direttamente per la villa e la stagione scelte. Così il concierge può confermare disponibilità, inclusioni ed eventuali servizi privati prima del Suo impegno.',
    },
  ],

  nl: [
    {
      q: 'Wat is een privé-auroravilla in Lapland?',
      a: 'Een privé-auroravilla is een vrijstaande luxeresidentie in Fins Lapland, ontworpen om het noorderlicht vanuit je eigen ruimte te bekijken, meestal door een glazen dak, glazen wanden of grote panoramaramen. Anders dan een hotelkamer is de villa tijdens je verblijf helemaal van jou, en ligt ze vaak buiten de lichtvervuiling, zodat de aurora op een heldere nacht beter te zien is.',
    },
    {
      q: 'Wat is inbegrepen bij een luxe villa in Lapland?',
      a: 'Het verschilt per accommodatie, maar onze collectie biedt doorgaans een privésauna, een hot tub of buitenjacuzzi, een volledig uitgeruste keuken en een open haard of houtkachel. Verschillende villa’s kunnen een privékok, dagelijkse schoonmaak, brandhout en het vooraf inslaan van boodschappen regelen. De aurorawekker waarschuwt u, waar aangeboden, wanneer het licht verschijnt. De exacte inhoud wordt per villa bevestigd bij uw aanvraag.',
    },
    {
      q: 'Voor hoeveel gasten zijn de luxe villa’s in Lapland geschikt?',
      a: 'De capaciteit verschilt binnen de collectie. Glazen iglo’s en designsuites zijn meestal geschikt voor twee gasten, terwijl blokhutlandgoederen aan het meer en grotere chalets plaats bieden aan een gezin of een kleine groep. Op elke villapagina staan de capaciteit en de slaapkamerindeling, en de concierge kan een accommodatie afstemmen op uw groepsgrootte.',
    },
    {
      q: 'Wat is het beste seizoen voor een verblijf in een luxe auroravilla?',
      a: 'Het auroraseizoen in Lapland loopt ruwweg van eind augustus tot begin april, wanneer de nachten donker genoeg zijn. De activiteit is het sterkst en de sneeuw het meest zeker van december tot maart. Voor de middernachtszon en heldere, milde nachten in plaats van de aurora reist u van juni tot juli. Het juiste venster hangt ervan af of u reist voor het noorderlicht, sneeuwactiviteiten of de poolzomer.',
    },
    {
      q: 'Bieden de luxe villa’s privégidsen en transfers?',
      a: 'Veel wel. De concierge kan privétransfers regelen vanaf de luchthaven van Rovaniemi, Kittilä of Ivalo, en privégidsen voor het jagen op de aurora, husky- en rendierbelevenissen, sneeuwscootertochten en andere activiteiten. Deze worden per boeking op maat samengesteld en vooraf bevestigd, in plaats van als vast pakket verkocht.',
    },
    {
      q: 'Hoe boek ik, en hoe worden de tarieven opgegeven?',
      a: 'Boeken gebeurt via een anonieme concierge-aanvraag en niet via een directe online afrekening. U deelt uw data en gezelschap, en de tarieven worden op aanvraag opgegeven, rechtstreeks voor de villa en het seizoen van uw keuze. Zo kan de concierge beschikbaarheid, inbegrepen voorzieningen en eventuele privéregelingen bevestigen voordat u zich vastlegt.',
    },
  ],

  sv: [
    {
      q: 'Vad är en privat norrskensvilla i Lappland?',
      a: 'En privat norrskensvilla är en fristående lyxbostad i finska Lappland, byggd så att du kan se norrskenet från ditt eget utrymme, oftast genom ett glastak, glasväggar eller stora panoramafönster. Till skillnad från ett hotellrum är villan bara din under vistelsen, och den ligger ofta borta från ljusföroreningar så att norrskenet syns lättare en klar natt.',
    },
    {
      q: 'Vad ingår i en lyxvilla i Lappland?',
      a: 'Det varierar mellan boenden, men vår kollektion har vanligtvis egen bastu, badtunna eller utomhusjacuzzi, ett fullt utrustat kök och en öppen spis eller vedspis. Flera villor kan ordna privatkock, daglig städning, ved och förhandsfyllt skafferi. Norrskensväckning, där det erbjuds, meddelar dig när ljusen dyker upp. Exakt vad som ingår bekräftas per villa när du gör en förfrågan.',
    },
    {
      q: 'Hur många gäster får plats i Lapplands lyxvillor?',
      a: 'Kapaciteten varierar inom kollektionen. Glasigloor och designsviter passar oftast två gäster, medan strandnära timmergårdar och större stugor rymmer en familj eller en mindre grupp. Varje villasida anger sängkapacitet och sovrumsindelning, och concierge kan matcha ett boende mot ert sällskaps storlek.',
    },
    {
      q: 'När är bästa säsongen för en vistelse i en lyxig norrskensvilla?',
      a: 'Norrskenssäsongen i Lappland pågår ungefär från slutet av augusti till början av april, när nätterna är tillräckligt mörka. Aktiviteten är starkast och snön säkrast från december till mars. För midnattssol och ljusa, milda nätter i stället för norrsken reser du i juni–juli. Rätt period beror på om du reser för norrskenet, snöaktiviteterna eller den arktiska sommaren.',
    },
    {
      q: 'Erbjuder lyxvillorna privata guider och transfer?',
      a: 'Många gör det. Concierge kan ordna privat flygplatstransfer från Rovaniemi, Kittilä eller Ivalo, och privata guider för norrskensjakt, hundspanns- och renupplevelser, snöskoteråkning och andra aktiviteter. Dessa skräddarsys för varje bokning och bekräftas i förväg i stället för att säljas som ett fast paket.',
    },
    {
      q: 'Hur bokar jag, och hur anges priserna?',
      a: 'Bokning sker via en anonym concierge-förfrågan i stället för en direkt onlinebetalning. Du delar dina datum och ditt sällskap, och priserna anges på begäran direkt för den villa och säsong du väljer. Så kan concierge bekräfta tillgänglighet, vad som ingår och eventuella privata arrangemang innan du binder dig.',
    },
  ],
}

// Contextual links under the FAQ — the natural next step after reading the
// answers (premium_design_standard: FAQ/big blocks get contextual links).
const FAQ_LINKS: Record<Lang, { prompt: string; collection: string; concierge: string }> = {
  en: { prompt: 'Still wondering about something?', collection: 'Browse the collection', concierge: 'Ask the concierge' },
  fi: { prompt: 'Jäikö jokin mietityttämään?', collection: 'Selaa kokoelmaa', concierge: 'Kysy conciergelta' },
  de: { prompt: 'Noch eine Frage offen?', collection: 'Kollektion ansehen', concierge: 'Concierge fragen' },
  ja: { prompt: 'まだ気になることがありますか?', collection: 'コレクションを見る', concierge: 'コンシェルジュに相談' },
  es: { prompt: '¿Te queda alguna duda?', collection: 'Ver la colección', concierge: 'Preguntar al conserje' },
  'pt-BR': { prompt: 'Ainda ficou com alguma dúvida?', collection: 'Ver a coleção', concierge: 'Falar com o concierge' },
  'zh-CN': { prompt: '还有想了解的吗?', collection: '浏览别墅精选', concierge: '咨询礼宾团队' },
  ko: { prompt: '아직 궁금한 점이 있으신가요?', collection: '컬렉션 둘러보기', concierge: '컨시어지에게 문의' },
  fr: { prompt: 'Une question vous reste ?', collection: 'Voir la collection', concierge: 'Demander au concierge' },
  it: { prompt: 'Resta qualche dubbio?', collection: 'Vedi la collezione', concierge: 'Chiedi al concierge' },
  nl: { prompt: 'Zit je nog met een vraag?', collection: 'Bekijk de collectie', concierge: 'Vraag het de concierge' },
  sv: { prompt: 'Undrar du fortfarande över något?', collection: 'Bläddra i kollektionen', concierge: 'Fråga concierge' },
}

const HEADINGS: Record<Lang, { eyebrow: string; h2: string }> = {
  en: { eyebrow: 'Good to know', h2: 'Questions before you stay' },
  fi: { eyebrow: 'Hyvä tietää', h2: 'Kysymyksiä ennen oleskelua' },
  de: { eyebrow: 'Gut zu wissen', h2: 'Fragen vor Ihrem Aufenthalt' },
  ja: { eyebrow: '知っておきたいこと', h2: 'ご滞在前のよくある質問' },
  es: { eyebrow: 'Bueno saberlo', h2: 'Preguntas antes de su estancia' },
  'pt-BR': { eyebrow: 'Bom saber', h2: 'Perguntas antes da sua estadia' },
  'zh-CN': { eyebrow: '了解一下', h2: '入住前的常见问题' },
  ko: { eyebrow: '알아두면 좋아요', h2: '머무시기 전 자주 묻는 질문' },
  fr: { eyebrow: 'Bon à savoir', h2: 'Questions avant votre séjour' },
  it: { eyebrow: 'Utile da sapere', h2: 'Domande prima del soggiorno' },
  nl: { eyebrow: 'Goed om te weten', h2: 'Vragen voor uw verblijf' },
  sv: { eyebrow: 'Bra att veta', h2: 'Frågor inför din vistelse' },
}

export default function FAQ() {
  const lang = useLang()
  const to = useLocalePath()
  const list = VILLA_FAQ_BY_LANG[lang]
  const h = HEADINGS[lang]
  const links = FAQ_LINKS[lang]

  return (
    <section className="bg-[color:var(--color-onyx)] py-24 md:py-32 border-y border-[color:var(--color-mist)]/60">
      <div className="mx-auto max-w-3xl px-5 sm:px-7">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{h.eyebrow}</span>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl text-[color:var(--color-snow)] leading-[1.1]">
            {h.h2}
          </h2>
        </div>

        <div className="divide-y divide-[color:var(--color-mist)]/60">
          {list.map((faq, i) => (
            <details key={i} className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-5">
                <h3 className="font-heading text-2xl md:text-[1.7rem] text-[color:var(--color-snow)] leading-snug">
                  {faq.q}
                </h3>
                <span
                  className="mt-1 shrink-0 text-[color:var(--color-brass)] text-xl leading-none transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[color:var(--color-bone)]/75 text-[15px] sm:text-base leading-relaxed font-body">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* Contextual links — the natural next step after the answers. */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-center">
          <span className="text-[color:var(--color-bone)]/60 text-sm font-body">{links.prompt}</span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <Link
              to={to('/villas')}
              className="inline-flex items-center gap-1.5 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.18em] uppercase font-body group"
            >
              {links.collection}
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to={to('/concierge')}
              className="inline-flex items-center gap-1.5 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.18em] uppercase font-body group"
            >
              {links.concierge}
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
