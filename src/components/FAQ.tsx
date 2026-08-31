import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'

/**
 * Home FAQ — editorial Q&A on the onyx "members-club" surface (Cormorant
 * headings, brass accents, bone body). `a` feeds both the visible answer and the
 * FAQPage JSON-LD, so there is a single source of truth.
 *
 * Brand rules honoured: NO invented nightly prices, no fabricated statistics,
 * no banned adjectives.
 *
 * 🔴 WE ARE NOT A BOOKING AGENCY AND NOT A CONCIERGE (Vesa 2026-08-02).
 * An answer must never say we arrange, confirm, quote or hold anything. We
 * read an enquiry and reply with a suggestion; a property's OWN services may
 * be described as the property's. Rates live on the property's booking page.
 * `a` also feeds the FAQPage JSON-LD, so a wrong answer here goes to Google
 * as structured data.
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
      a: 'It varies by property, but our collection typically features a private sauna, a hot tub or outdoor jacuzzi, a fully equipped kitchen and a fireplace or wood stove. Several villas can arrange a private chef, daily housekeeping, firewood and grocery pre-stocking. Aurora wake-up alerts, where offered, notify you when the lights appear. Exact inclusions are set by each property, so check its own page or ask it directly.',
    },
    {
      q: 'How many guests do Lapland luxury villas sleep?',
      a: 'Capacity ranges across the collection. Glass igloos and design suites usually suit two guests, while lakeside log estates and larger chalets sleep a family or a small group. Each villa page lists its sleeping capacity and bedroom layout, and if you tell us how many of you there are we will suggest which ones fit.',
    },
    {
      q: 'When is the best season for a luxury aurora villa stay?',
      a: 'The aurora season in Lapland runs from roughly late August to early April, when the nights are dark enough. Activity is strongest and snow most reliable from December to March. For the Midnight Sun and bright, mild nights instead of the aurora, visit from June to July. The right window depends on whether you are travelling for the Northern Lights, snow activities or the polar summer.',
    },
    {
      q: 'Do luxury villas offer private guides and transfers?',
      a: 'Many do. Several of the properties arrange private airport transfers from Rovaniemi, Kittilä or Ivalo, and private guides for aurora hunting, husky and reindeer experiences and snowmobiling, through their own operators. We do not arrange or confirm any of it ourselves. Ask the property directly, or ask us and we will tell you who runs it.',
    },
    {
      q: 'How do I book, and how are rates quoted?',
      a: 'You book with the property, never with us. Where a villa has a public booking page we link straight to it and the rate is shown there. Where no rate is published, you contact the property and it quotes you itself. We are not a booking agency: we take no payments, hold no availability and confirm nothing on your behalf.',
    },
  ],

  fi: [
    {
      q: 'Mikä on yksityinen revontulihuvila Lapissa?',
      a: 'Yksityinen revontulihuvila on erillinen luksusasunto Suomen Lapissa, rakennettu niin että revontulia voi katsella omasta rauhasta, yleensä lasikaton, lasiseinien tai suurten panoraamaikkunoiden läpi. Toisin kuin hotellihuone, huvila on vain sinun käytössäsi koko oleskelun ajan, ja se sijaitsee usein kaukana valosaasteesta, joten revontulet erottuvat kirkkaana yönä helpommin.',
    },
    {
      q: 'Mitä luksushuvilaan Lapissa kuuluu?',
      a: 'Sisältö vaihtelee kohteittain, mutta kokoelmassamme on tyypillisesti oma sauna, palju tai ulkoporeallas, täysin varusteltu keittiö sekä takka tai puuhella. Useat huvilat voivat järjestää yksityiskokin, päivittäisen siivouksen, polttopuut sekä ruokaostokset valmiiksi. Revontuliherätys, kun se on tarjolla, ilmoittaa kun revontulet ilmestyvät. Tarkat sisällöt määrittelee kukin kohde itse, joten tarkista ne kohteen omilta sivuilta tai kysy suoraan siltä.',
    },
    {
      q: 'Kuinka monelle vieraalle Lapin luksushuvilat on mitoitettu?',
      a: 'Majoituskapasiteetti vaihtelee kokoelmassa. Lasi-iglut ja design-sviitit sopivat yleensä kahdelle, kun taas järvenrantaiset hirsikartanot ja suuremmat huvilat majoittavat perheen tai pienen ryhmän. Jokaisen huvilan sivulla on majoituskapasiteetti ja makuuhuonejärjestely, ja kerro montako teitä on, niin ehdotamme mitkä sopivat.',
    },
    {
      q: 'Mikä on paras vuodenaika luksusrevontulihuvilan vierailulle?',
      a: 'Revontulikausi Lapissa kestää suunnilleen elokuun lopusta huhtikuun alkuun, kun yöt ovat riittävän pimeitä. Aktiivisuus on voimakkainta ja lumitilanne varmin joulukuusta maaliskuuhun. Keskiyön aurinkoa ja vaaleita, leutoja öitä revontulien sijaan voi kokea kesä–heinäkuussa. Sopiva ajankohta riippuu siitä, matkustatteko revontulien, lumiaktiviteettien vai napakesän vuoksi.',
    },
    {
      q: 'Tarjoavatko luksushuvilat yksityisoppaita ja kuljetuksia?',
      a: 'Monet tarjoavat. Useat kohteet järjestävät yksityiset lentokenttäkuljetukset Rovaniemeltä, Kittilästä tai Ivalosta sekä yksityisoppaat revontuliretkille, husky- ja poroelämyksiin ja moottorikelkkailuun oman operaattorinsa kautta. Me emme järjestä emmekä vahvista näitä. Kysy suoraan kohteelta, tai kysy meiltä, niin kerromme kuka ne hoitaa.',
    },
    {
      q: 'Miten varaan, ja miten hinnat ilmoitetaan?',
      a: 'Varaus tehdään aina kohteen kanssa, ei meidän kanssamme. Kun huvilalla on julkinen varaussivu, linkitämme suoraan sinne ja hinta näkyy siellä. Kun julkista hintaa ei ole, otat yhteyttä kohteeseen ja se hinnoittelee itse. Emme ole varaustoimisto: emme ota maksuja, emme pidä saatavuutta emmekä vahvista mitään puolestasi.',
    },
  ],

  de: [
    {
      q: 'Was ist eine private Polarlicht-Villa in Lappland?',
      a: 'Eine private Polarlicht-Villa ist eine eigenständige Luxusresidenz in Finnisch-Lappland, die darauf ausgelegt ist, die Nordlichter aus dem eigenen Rückzugsort zu beobachten, meist durch ein Glasdach, Glaswände oder große Panoramafenster. Anders als ein Hotelzimmer gehört die Villa während des Aufenthalts allein Ihnen und liegt oft abseits von Lichtverschmutzung, sodass das Polarlicht in einer klaren Nacht leichter zu sehen ist.',
    },
    {
      q: 'Was ist in einer Luxusvilla in Lappland enthalten?',
      a: 'Das hängt vom Objekt ab, doch unsere Sammlung bietet in der Regel eine private Sauna, einen Hot Tub oder Außen-Whirlpool, eine voll ausgestattete Küche sowie einen Kamin oder Holzofen. Mehrere Villen können einen Privatkoch, tägliche Reinigung, Brennholz und einen vorab gefüllten Lebensmittelvorrat arrangieren. Eine Polarlicht-Weckfunktion benachrichtigt Sie, sofern angeboten, wenn die Lichter erscheinen. Die genauen Leistungen legt jedes Haus selbst fest, prüfen Sie also dessen eigene Seite oder fragen Sie dort direkt nach.',
    },
    {
      q: 'Für wie viele Gäste sind die Luxusvillen in Lappland ausgelegt?',
      a: 'Die Kapazität variiert innerhalb der Sammlung. Glas-Iglus und Design-Suiten eignen sich meist für zwei Gäste, während Blockhaus-Anwesen am See und größere Chalets eine Familie oder kleine Gruppe beherbergen. Auf jeder Villenseite sind Belegung und Schlafzimmeraufteilung angegeben, und wenn Sie uns Ihre Gruppengröße nennen, schlagen wir passende Häuser vor.',
    },
    {
      q: 'Wann ist die beste Saison für einen Aufenthalt in einer Luxus-Polarlicht-Villa?',
      a: 'Die Polarlichtsaison in Lappland reicht etwa von Ende August bis Anfang April, wenn die Nächte dunkel genug sind. Am stärksten ist die Aktivität und am verlässlichsten der Schnee von Dezember bis März. Für die Mitternachtssonne und helle, milde Nächte statt des Polarlichts reisen Sie von Juni bis Juli. Der passende Zeitraum hängt davon ab, ob Sie für die Nordlichter, Schneeaktivitäten oder den Polarsommer kommen.',
    },
    {
      q: 'Bieten die Luxusvillen private Guides und Transfers?',
      a: 'Viele tun das. Mehrere Häuser organisieren über ihre eigenen Anbieter private Flughafentransfers ab Rovaniemi, Kittilä oder Ivalo sowie private Guides für die Polarlichtjagd, Husky- und Rentier-Erlebnisse und Schneemobiltouren. Wir organisieren und bestätigen davon nichts selbst. Fragen Sie direkt beim Haus, oder fragen Sie uns, und wir sagen Ihnen, wer es durchführt.',
    },
    {
      q: 'Wie buche ich, und wie werden die Preise angegeben?',
      a: 'Gebucht wird immer beim Haus, nie bei uns. Hat eine Villa eine öffentliche Buchungsseite, verlinken wir direkt dorthin, und der Preis steht dort. Ist kein Preis veröffentlicht, wenden Sie sich an das Haus, und es nennt Ihnen den Preis selbst. Wir sind keine Buchungsagentur: Wir nehmen keine Zahlungen entgegen, halten keine Verfügbarkeiten und bestätigen nichts in Ihrem Namen.',
    },
  ],

  ja: [
    {
      q: 'ラップランドのプライベート・オーロラ・ヴィラとは何ですか？',
      a: 'プライベート・オーロラ・ヴィラとは、フィンランド・ラップランドにある独立した高級邸宅で、自分だけの空間からオーロラを眺められるように設計されています。多くはガラス屋根、ガラス壁、または大きなパノラマ窓を備えています。ホテルの客室とは異なり、滞在中はヴィラを一棟まるごとご利用いただけ、光害の少ない場所に建つことが多いため、晴れた夜にはオーロラが見えやすくなります。',
    },
    {
      q: 'ラップランドの高級ヴィラには何が含まれますか？',
      a: '施設によって異なりますが、当コレクションには通常、専用サウナ、ホットタブまたは屋外ジャグジー、設備の整ったキッチン、暖炉または薪ストーブが備わっています。複数のヴィラでは、専属シェフ、毎日のハウスキーピング、薪、食料の事前補充を手配できます。オーロラの出現を知らせるウェイクアップアラートは、提供される場合にご利用いただけます。正確な内容は各宿が定めていますので、宿のページをご確認いただくか、宿に直接お尋ねください。',
    },
    {
      q: 'ラップランドの高級ヴィラは何名まで宿泊できますか？',
      a: '収容人数はコレクションによって異なります。ガラスイグルーやデザインスイートは通常2名向けで、湖畔のログハウスや大きめのシャレーは家族や少人数のグループに対応します。各ヴィラのページに宿泊人数と寝室の構成を記載しており、ご一行の人数をお知らせいただければ、合う宿をご提案します。',
    },
    {
      q: '高級オーロラ・ヴィラ滞在に最適な季節はいつですか？',
      a: 'ラップランドのオーロラのシーズンは、夜が十分に暗くなるおよそ8月下旬から4月上旬までです。活動が最も活発で雪が最も確実なのは12月から3月です。オーロラの代わりに白夜と明るく穏やかな夜を求めるなら、6月から7月にお越しください。最適な時期は、オーロラ、雪のアクティビティ、極地の夏のいずれを目的に旅をなさるかによります。',
    },
    {
      q: '高級ヴィラはプライベートガイドや送迎を提供していますか？',
      a: '多くの施設で提供しています。いくつかの宿は、自社の手配先を通じて、ロヴァニエミ、キッティラ、イヴァロからのプライベート空港送迎や、オーロラ観察、ハスキー・トナカイ体験、スノーモービルのプライベートガイドを用意しています。私たちがそれらを手配することも、確約することもありません。宿に直接お尋ねいただくか、私たちにお尋ねいただければ、どこが運営しているかをお伝えします。',
    },
    {
      q: '予約方法と料金の案内はどのようになりますか？',
      a: 'ご予約は必ず宿と直接お願いします。私たちが承ることはありません。公開の予約ページがあるヴィラは、そのページへ直接リンクしており、料金もそこに表示されています。料金が公開されていない場合は、宿にご連絡いただければ宿自身がお見積もりします。私たちは予約代理店ではありません。決済も、空室の確保も、お客様に代わっての確約もいたしません。',
    },
  ],

  es: [
    {
      q: '¿Qué es una villa privada de auroras en Laponia?',
      a: 'Una villa privada de auroras es una residencia de lujo independiente en la Laponia finlandesa, pensada para contemplar la aurora boreal desde su propio espacio, normalmente a través de un techo de cristal, paredes acristaladas o grandes ventanales panorámicos. A diferencia de una habitación de hotel, la villa es solo para usted durante la estancia y suele situarse lejos de la contaminación lumínica, de modo que la aurora se ve con más facilidad en una noche despejada.',
    },
    {
      q: '¿Qué incluye una villa de lujo en Laponia?',
      a: 'Depende del alojamiento, pero nuestra colección suele incluir sauna privada, jacuzzi o bañera de hidromasaje exterior, cocina totalmente equipada y chimenea o estufa de leña. Varias villas pueden organizar chef privado, limpieza diaria, leña y la compra de víveres por adelantado. El aviso de auroras, cuando se ofrece, le avisa al aparecer las luces. Las inclusiones exactas las fija cada casa, así que consulte su propia página o pregúntele directamente.',
    },
    {
      q: '¿Para cuántos huéspedes son las villas de lujo de Laponia?',
      a: 'La capacidad varía dentro de la colección. Los iglús de cristal y las suites de diseño suelen ser para dos personas, mientras que las fincas de troncos a orillas del lago y los chalés más grandes alojan a una familia o a un grupo reducido. Cada página de villa indica la capacidad y la distribución de dormitorios, y si nos dice cuántos son, le sugerimos cuáles encajan.',
    },
    {
      q: '¿Cuál es la mejor temporada para una estancia en una villa de auroras de lujo?',
      a: 'La temporada de auroras en Laponia va aproximadamente de finales de agosto a principios de abril, cuando las noches son lo bastante oscuras. La actividad es mayor y la nieve más fiable de diciembre a marzo. Para el sol de medianoche y noches claras y suaves en lugar de la aurora, viaje de junio a julio. La ventana adecuada depende de si viaja por la aurora boreal, las actividades en la nieve o el verano polar.',
    },
    {
      q: '¿Las villas de lujo ofrecen guías privados y traslados?',
      a: 'Muchas sí. Varias casas organizan traslados privados desde el aeropuerto de Rovaniemi, Kittilä o Ivalo, y guías privados para la caza de auroras, experiencias con huskies y renos y motos de nieve, a través de sus propios operadores. Nosotros no organizamos ni confirmamos nada de eso. Pregunte directamente a la casa, o pregúntenos y le diremos quién lo opera.',
    },
    {
      q: '¿Cómo reservo y cómo se indican las tarifas?',
      a: 'La reserva se hace siempre con la casa, nunca con nosotros. Si una villa tiene página pública de reserva, enlazamos directamente a ella y allí figura la tarifa. Si no hay tarifa publicada, usted contacta con la casa y ella misma se la indica. No somos una agencia de reservas: no cobramos, no retenemos disponibilidad y no confirmamos nada en su nombre.',
    },
  ],

  'pt-BR': [
    {
      q: 'O que é uma vila privativa de auroras na Lapônia?',
      a: 'Uma vila privativa de auroras é uma residência de luxo independente na Lapônia finlandesa, pensada para observar a aurora boreal a partir do seu próprio espaço, normalmente por um teto de vidro, paredes de vidro ou grandes janelas panorâmicas. Diferente de um quarto de hotel, a vila é só sua durante a estadia e costuma ficar longe da poluição luminosa, de modo que a aurora fica mais fácil de ver numa noite limpa.',
    },
    {
      q: 'O que está incluído em uma vila de luxo na Lapônia?',
      a: 'Varia conforme a propriedade, mas nossa coleção costuma ter sauna privativa, hot tub ou banheira externa, cozinha totalmente equipada e lareira ou fogão a lenha. Várias vilas podem providenciar chef privativo, arrumação diária, lenha e abastecimento de mantimentos antecipado. O alerta de auroras, quando oferecido, avisa você quando as luzes aparecem. As inclusões exatas são definidas por cada casa, então veja a página dela ou pergunte diretamente.',
    },
    {
      q: 'Para quantos hóspedes são as vilas de luxo da Lapônia?',
      a: 'A capacidade varia dentro da coleção. Iglus de vidro e suítes de design costumam acomodar duas pessoas, enquanto propriedades de madeira à beira do lago e chalés maiores acomodam uma família ou um grupo pequeno. Cada página de vila informa a capacidade e a disposição dos quartos, e, se disser quantas pessoas são, sugerimos quais servem.',
    },
    {
      q: 'Qual é a melhor estação para uma estadia em vila de auroras de luxo?',
      a: 'A temporada de auroras na Lapônia vai mais ou menos do fim de agosto ao início de abril, quando as noites são escuras o suficiente. A atividade é mais forte e a neve mais garantida de dezembro a março. Para o sol da meia-noite e noites claras e amenas no lugar da aurora, viaje de junho a julho. A janela ideal depende de você viajar pela aurora boreal, pelas atividades na neve ou pelo verão polar.',
    },
    {
      q: 'As vilas de luxo oferecem guias privativos e traslados?',
      a: 'Muitas oferecem. Várias casas organizam, por meio de seus próprios operadores, traslados privativos do aeroporto de Rovaniemi, Kittilä ou Ivalo e guias privativos para caça às auroras, experiências com huskies e renas e snowmobile. Nós não organizamos nem confirmamos nada disso. Fale direto com a casa, ou pergunte a nós e diremos quem opera.',
    },
    {
      q: 'Como faço a reserva e como as tarifas são informadas?',
      a: 'A reserva é sempre feita com a casa, nunca conosco. Quando uma vila tem página pública de reserva, levamos direto até ela e a tarifa aparece lá. Quando não há tarifa publicada, você fala com a casa e ela mesma cota. Não somos agência de reservas: não recebemos pagamentos, não seguramos disponibilidade e não confirmamos nada em seu nome.',
    },
  ],

  'zh-CN': [
    {
      q: '拉普兰的私人极光别墅是什么？',
      a: '私人极光别墅是位于芬兰拉普兰的独立豪华居所，专为让您在自己的空间里观赏北极光而设计，通常配有玻璃屋顶、玻璃幕墙或大型全景窗。与酒店客房不同，入住期间整栋别墅仅供您专享，且多设在光污染较少的地方，因此在晴朗的夜晚更易看到极光。',
    },
    {
      q: '拉普兰的豪华别墅包含哪些设施？',
      a: '具体因物业而异，但我们的精选别墅通常配有私人桑拿、热水浴缸或户外按摩浴池、设备齐全的厨房，以及壁炉或柴火炉。多处别墅可安排私人厨师、每日清洁、柴火以及提前备好食材。如提供极光唤醒提醒，会在极光出现时通知您。具体包含内容由各家住宿自行规定，请查看其自己的页面，或直接向其询问。',
    },
    {
      q: '拉普兰的豪华别墅可容纳多少位客人？',
      a: '容纳人数因别墅而异。玻璃冰屋和设计套房通常适合两位客人，而湖畔木屋庄园和较大的木屋可容纳一家人或小型团体。每个别墅页面都列出可住人数和卧室布局，若告诉我们你们几位，我们会建议哪几栋合适。',
    },
    {
      q: '入住豪华极光别墅的最佳季节是什么时候？',
      a: '拉普兰的极光季大致从八月底持续到四月初，此时夜晚足够黑暗。十二月至三月极光活动最强，积雪也最有保障。若想体验午夜阳光以及明亮温和的夜晚而非极光，可在六月至七月前来。合适的时段取决于您此行是为了北极光、雪上活动，还是极地夏季。',
    },
    {
      q: '豪华别墅是否提供私人向导和接送？',
      a: '许多别墅都提供。数家住宿会通过自己的运营方，安排从罗瓦涅米、基蒂莱或伊瓦洛机场出发的私人接送，以及追极光、哈士奇与驯鹿体验、雪地摩托的私人向导。这些我们既不安排也不确认。请直接询问该住宿，或问我们，我们会告诉你由谁运营。',
    },
    {
      q: '我该如何预订？价格又是如何报出的？',
      a: '预订始终与住宿方进行，而非与我们。若别墅设有公开预订页面，我们会直接链接过去，价格就写在那里。若未公开价格，请联系该住宿，由其自行报价。我们不是订房代理：不收款、不占用房位，也不代你确认任何事项。',
    },
  ],

  ko: [
    {
      q: '라플란드의 프라이빗 오로라 빌라란 무엇인가요?',
      a: '프라이빗 오로라 빌라는 핀란드 라플란드에 있는 독립형 럭셔리 레지던스로, 자신만의 공간에서 오로라를 감상하도록 설계되었습니다. 보통 유리 지붕, 유리 벽, 또는 큰 파노라마 창을 갖추고 있습니다. 호텔 객실과 달리 머무는 동안 빌라 전체가 오롯이 손님의 공간이며, 빛 공해가 적은 곳에 자리해 맑은 밤에는 오로라를 보기가 더 쉽습니다.',
    },
    {
      q: '라플란드 럭셔리 빌라에는 무엇이 포함되나요?',
      a: '숙소마다 다르지만, 저희 컬렉션에는 보통 전용 사우나, 핫텁이나 야외 자쿠지, 풀옵션 주방, 벽난로 또는 장작 난로가 갖춰져 있습니다. 여러 빌라에서 전속 셰프, 매일 하우스키핑, 장작, 식료품 사전 준비를 마련해 드릴 수 있습니다. 제공되는 경우 오로라 알림이 오로라가 나타날 때 알려 드립니다. 정확한 포함 사항은 각 숙소가 정하므로, 숙소의 페이지를 보시거나 직접 문의해 주세요.',
    },
    {
      q: '라플란드 럭셔리 빌라는 몇 명까지 묵을 수 있나요?',
      a: '수용 인원은 컬렉션마다 다릅니다. 글래스 이글루와 디자인 스위트는 보통 2인에 적합하고, 호숫가 통나무 저택과 더 큰 샬레는 가족이나 소규모 일행이 묵을 수 있습니다. 각 빌라 페이지에 수용 인원과 침실 구성이 안내되어 있으며, 일행이 몇 분인지 알려 주시면 어울리는 곳을 제안해 드립니다.',
    },
    {
      q: '럭셔리 오로라 빌라 숙박에 가장 좋은 시기는 언제인가요?',
      a: '라플란드의 오로라 시즌은 밤이 충분히 어두워지는 대략 8월 말부터 4월 초까지입니다. 활동이 가장 활발하고 눈이 가장 확실한 시기는 12월부터 3월까지입니다. 오로라 대신 백야와 밝고 온화한 밤을 원하신다면 6월부터 7월 사이에 방문하십시오. 적절한 시기는 오로라, 설상 액티비티, 극지의 여름 중 무엇을 위해 여행하시는지에 따라 달라집니다.',
    },
    {
      q: '럭셔리 빌라는 프라이빗 가이드와 차량 이동을 제공하나요?',
      a: '많은 빌라가 제공합니다. 여러 숙소가 자체 운영사를 통해 로바니에미, 키틸레, 이발로 공항에서의 프라이빗 차량 이동과 오로라 헌팅, 허스키·순록 체험, 스노모빌 프라이빗 가이드를 마련합니다. 저희가 이를 대신 준비하거나 확정하지는 않습니다. 숙소에 직접 문의하시거나, 저희에게 물어보시면 어디가 운영하는지 알려 드립니다.',
    },
    {
      q: '예약은 어떻게 하며, 요금은 어떻게 안내되나요?',
      a: '예약은 언제나 숙소와 직접 하시게 되며, 저희를 통하지 않습니다. 공개 예약 페이지가 있는 빌라는 그 페이지로 바로 연결되고 요금도 거기에 표시됩니다. 공개된 요금이 없으면 숙소에 연락하시면 숙소가 직접 견적을 냅니다. 저희는 예약 대행사가 아닙니다. 결제를 받지 않고, 객실을 잡아 두지 않으며, 손님을 대신해 무엇도 확정하지 않습니다.',
    },
  ],

  fr: [
    {
      q: 'Qu’est-ce qu’une villa privée aux aurores en Laponie ?',
      a: 'Une villa privée aux aurores est une résidence de luxe indépendante en Laponie finlandaise, conçue pour observer les aurores boréales depuis votre propre espace, généralement par un toit vitré, des murs de verre ou de grandes baies panoramiques. Contrairement à une chambre d’hôtel, la villa est à vous seul pour tout le séjour et se situe souvent à l’écart de la pollution lumineuse, ce qui rend l’aurore plus facile à voir par nuit claire.',
    },
    {
      q: 'Qu’est-ce qui est inclus dans une villa de luxe en Laponie ?',
      a: 'Cela dépend du bien, mais notre collection comprend en général un sauna privé, un bain nordique ou un jacuzzi extérieur, une cuisine entièrement équipée et une cheminée ou un poêle à bois. Plusieurs villas peuvent organiser un chef privé, un ménage quotidien, le bois de chauffage et un approvisionnement en courses à l’avance. L’alerte aux aurores, lorsqu’elle est proposée, vous prévient à l’apparition des lumières. Les prestations exactes sont fixées par chaque maison : consultez sa propre page ou renseignez-vous directement auprès d’elle.',
    },
    {
      q: 'Combien de personnes peuvent loger dans les villas de luxe de Laponie ?',
      a: 'La capacité varie au sein de la collection. Les igloos de verre et les suites design conviennent généralement à deux personnes, tandis que les domaines en rondins au bord du lac et les chalets plus grands accueillent une famille ou un petit groupe. Chaque page de villa indique la capacité et la répartition des chambres, et si vous nous indiquez votre nombre, nous vous suggérons celles qui conviennent.',
    },
    {
      q: 'Quelle est la meilleure saison pour un séjour en villa de luxe aux aurores ?',
      a: 'La saison des aurores en Laponie s’étend environ de fin août à début avril, lorsque les nuits sont assez sombres. L’activité est la plus forte et la neige la plus sûre de décembre à mars. Pour le soleil de minuit et des nuits claires et douces plutôt que l’aurore, voyagez de juin à juillet. La bonne période dépend de votre objectif : les aurores boréales, les activités sur neige ou l’été polaire.',
    },
    {
      q: 'Les villas de luxe proposent-elles des guides privés et des transferts ?',
      a: 'Beaucoup le font. Plusieurs maisons organisent, via leurs propres prestataires, des transferts privés depuis l’aéroport de Rovaniemi, Kittilä ou Ivalo, ainsi que des guides privés pour la chasse aux aurores, les expériences avec huskies et rennes et la motoneige. Nous n’organisons ni ne confirmons rien de tout cela. Adressez-vous directement à la maison, ou demandez-nous et nous vous dirons qui s’en charge.',
    },
    {
      q: 'Comment réserver, et comment les tarifs sont-ils communiqués ?',
      a: 'La réservation se fait toujours auprès de la maison, jamais auprès de nous. Lorsqu’une villa dispose d’une page de réservation publique, nous y renvoyons directement et le tarif y est affiché. Lorsqu’aucun tarif n’est publié, vous contactez la maison et c’est elle qui vous le communique. Nous ne sommes pas une agence de réservation : nous n’encaissons rien, ne bloquons aucune disponibilité et ne confirmons rien en votre nom.',
    },
  ],

  it: [
    {
      q: 'Che cos’è una villa privata con aurora in Lapponia?',
      a: 'Una villa privata con aurora è una residenza di lusso indipendente nella Lapponia finlandese, pensata per osservare l’aurora boreale dal proprio spazio, di solito attraverso un tetto di vetro, pareti vetrate o ampie vetrate panoramiche. A differenza di una camera d’albergo, la villa è solo Sua per tutto il soggiorno e spesso si trova lontano dall’inquinamento luminoso, così l’aurora è più facile da vedere in una notte limpida.',
    },
    {
      q: 'Che cosa è incluso in una villa di lusso in Lapponia?',
      a: 'Dipende dalla struttura, ma la nostra collezione prevede in genere sauna privata, hot tub o vasca idromassaggio esterna, cucina completamente attrezzata e camino o stufa a legna. Diverse ville possono organizzare uno chef privato, pulizie giornaliere, legna da ardere e una scorta di generi alimentari predisposta. L’avviso aurora, dove offerto, La avverte quando compaiono le luci. Le inclusioni esatte le stabilisce ogni struttura, quindi consulti la sua pagina o chieda direttamente a lei.',
    },
    {
      q: 'Quanti ospiti possono alloggiare nelle ville di lusso della Lapponia?',
      a: 'La capacità varia all’interno della collezione. Igloo di vetro e suite di design sono di norma per due persone, mentre le dimore in tronchi sul lago e gli chalet più ampi ospitano una famiglia o un piccolo gruppo. Ogni pagina della villa indica la capacità e la disposizione delle camere, e se ci dice in quanti siete, Le suggeriamo quali sono adatte.',
    },
    {
      q: 'Qual è la stagione migliore per un soggiorno in una villa di lusso con aurora?',
      a: 'La stagione dell’aurora in Lapponia va all’incirca da fine agosto a inizio aprile, quando le notti sono abbastanza buie. L’attività è più intensa e la neve più sicura da dicembre a marzo. Per il sole di mezzanotte e notti chiare e miti anziché l’aurora, viaggi da giugno a luglio. Il periodo giusto dipende dal fatto che viaggi per l’aurora boreale, le attività sulla neve o l’estate polare.',
    },
    {
      q: 'Le ville di lusso offrono guide private e transfer?',
      a: 'Molte sì. Diverse strutture organizzano, tramite i propri operatori, transfer privati dall’aeroporto di Rovaniemi, Kittilä o Ivalo e guide private per la caccia all’aurora, esperienze con husky e renne e motoslitta. Noi non organizziamo né confermiamo nulla di tutto ciò. Si rivolga direttamente alla struttura, oppure lo chieda a noi e Le diremo chi se ne occupa.',
    },
    {
      q: 'Come prenoto e come vengono indicate le tariffe?',
      a: 'La prenotazione si fa sempre con la struttura, mai con noi. Se una villa ha una pagina di prenotazione pubblica, rimandiamo direttamente lì e la tariffa è indicata in quella pagina. Se non c’è una tariffa pubblicata, contatta la struttura ed è lei a quotarLe il soggiorno. Non siamo un’agenzia di prenotazioni: non incassiamo, non blocchiamo disponibilità e non confermiamo nulla per Suo conto.',
    },
  ],

  nl: [
    {
      q: 'Wat is een privé-auroravilla in Lapland?',
      a: 'Een privé-auroravilla is een vrijstaande luxeresidentie in Fins Lapland, ontworpen om het noorderlicht vanuit uw eigen ruimte te bekijken, meestal door een glazen dak, glazen wanden of grote panoramaramen. Anders dan een hotelkamer is de villa tijdens uw verblijf helemaal van u, en ligt ze vaak buiten de lichtvervuiling, zodat de aurora op een heldere nacht beter te zien is.',
    },
    {
      q: 'Wat is inbegrepen bij een luxe villa in Lapland?',
      a: 'Het verschilt per accommodatie, maar onze collectie biedt doorgaans een privésauna, een hot tub of buitenjacuzzi, een volledig uitgeruste keuken en een open haard of houtkachel. Verschillende villa’s kunnen een privékok, dagelijkse schoonmaak, brandhout en het vooraf inslaan van boodschappen regelen. De aurorawekker waarschuwt u, waar aangeboden, wanneer het licht verschijnt. Wat er precies bij zit bepaalt elk huis zelf, dus raadpleeg de eigen pagina of vraag het daar rechtstreeks.',
    },
    {
      q: 'Voor hoeveel gasten zijn de luxe villa’s in Lapland geschikt?',
      a: 'De capaciteit verschilt binnen de collectie. Glazen iglo’s en designsuites zijn meestal geschikt voor twee gasten, terwijl blokhutlandgoederen aan het meer en grotere chalets plaats bieden aan een gezin of een kleine groep. Op elke villapagina staan de capaciteit en de slaapkamerindeling, en als u ons uw groepsgrootte doorgeeft, stellen wij voor welke passen.',
    },
    {
      q: 'Wat is het beste seizoen voor een verblijf in een luxe auroravilla?',
      a: 'Het auroraseizoen in Lapland loopt ruwweg van eind augustus tot begin april, wanneer de nachten donker genoeg zijn. De activiteit is het sterkst en de sneeuw het meest zeker van december tot maart. Voor de middernachtszon en heldere, milde nachten in plaats van de aurora reist u van juni tot juli. Het juiste venster hangt ervan af of u reist voor het noorderlicht, sneeuwactiviteiten of de poolzomer.',
    },
    {
      q: 'Bieden de luxe villa’s privégidsen en transfers?',
      a: 'Veel wel. Verschillende huizen regelen via hun eigen aanbieders privétransfers vanaf de luchthaven van Rovaniemi, Kittilä of Ivalo, en privégidsen voor het jagen op de aurora, husky- en rendierbelevenissen en sneeuwscootertochten. Wij regelen en bevestigen daar niets van. Vraag het rechtstreeks aan het huis, of vraag het ons en wij vertellen u wie het uitvoert.',
    },
    {
      q: 'Hoe boek ik, en hoe worden de tarieven opgegeven?',
      a: 'U boekt altijd bij het huis, nooit bij ons. Heeft een villa een publieke boekingspagina, dan linken wij daar rechtstreeks naartoe en staat het tarief daar vermeld. Is er geen tarief gepubliceerd, dan neemt u contact op met het huis en geeft het huis zelf het tarief op. Wij zijn geen boekingsbureau: wij innen niets, houden geen beschikbaarheid aan en bevestigen niets namens u.',
    },
  ],

  sv: [
    {
      q: 'Vad är en privat norrskensvilla i Lappland?',
      a: 'En privat norrskensvilla är en fristående lyxbostad i finska Lappland, byggd så att du kan se norrskenet från ditt eget utrymme, oftast genom ett glastak, glasväggar eller stora panoramafönster. Till skillnad från ett hotellrum är villan bara din under vistelsen, och den ligger ofta borta från ljusföroreningar så att norrskenet syns lättare en klar natt.',
    },
    {
      q: 'Vad ingår i en lyxvilla i Lappland?',
      a: 'Det varierar mellan boenden, men vår kollektion har vanligtvis egen bastu, badtunna eller utomhusjacuzzi, ett fullt utrustat kök och en öppen spis eller vedspis. Flera villor kan ordna privatkock, daglig städning, ved och förhandsfyllt skafferi. Norrskensväckning, där det erbjuds, meddelar dig när ljusen dyker upp. Exakt vad som ingår bestäms av varje hus, så kolla husets egen sida eller fråga det direkt.',
    },
    {
      q: 'Hur många gäster får plats i Lapplands lyxvillor?',
      a: 'Kapaciteten varierar inom kollektionen. Glasigloor och designsviter passar oftast två gäster, medan strandnära timmergårdar och större stugor rymmer en familj eller en mindre grupp. Varje villasida anger sängkapacitet och sovrumsindelning, och om du berättar hur många ni är föreslår vi vilka som passar.',
    },
    {
      q: 'När är bästa säsongen för en vistelse i en lyxig norrskensvilla?',
      a: 'Norrskenssäsongen i Lappland pågår ungefär från slutet av augusti till början av april, när nätterna är tillräckligt mörka. Aktiviteten är starkast och snön säkrast från december till mars. För midnattssol och ljusa, milda nätter i stället för norrsken reser du i juni–juli. Rätt period beror på om du reser för norrskenet, snöaktiviteterna eller den arktiska sommaren.',
    },
    {
      q: 'Erbjuder lyxvillorna privata guider och transfer?',
      a: 'Många gör det. Flera av husen ordnar privat flygplatstransfer från Rovaniemi, Kittilä eller Ivalo, och privata guider för norrskensjakt, hundspanns- och renupplevelser och snöskoteråkning, via sina egna arrangörer. Vi ordnar och bekräftar ingenting av det själva. Fråga huset direkt, eller fråga oss så säger vi vem som kör det.',
    },
    {
      q: 'Hur bokar jag, och hur anges priserna?',
      a: 'Du bokar alltid hos huset, aldrig hos oss. Har en villa en offentlig bokningssida länkar vi rakt dit, och priset står där. Finns inget pris publicerat kontaktar du huset och det offererar dig självt. Vi är ingen bokningsbyrå: vi tar inte emot betalningar, håller ingen tillgänglighet och bekräftar ingenting åt dig.',
    },
  ],
}

// Contextual links under the FAQ — the natural next step after reading the
// answers (premium_design_standard: FAQ/big blocks get contextual links).
const FAQ_LINKS: Record<Lang, { prompt: string; collection: string; inquiry: string }> = {
  en: { prompt: 'Still wondering about something?', collection: 'See the villas', inquiry: 'Ask for suggestions' },
  fi: { prompt: 'Jäikö jokin mietityttämään?', collection: 'Katso huvilat', inquiry: 'Pyydä ehdotus' },
  de: { prompt: 'Noch eine Frage offen?', collection: 'Zu den Villen', inquiry: 'Vorschläge anfragen' },
  ja: { prompt: 'まだ気になることがありますか？', collection: 'ヴィラを見る', inquiry: '提案を頼む' },
  es: { prompt: '¿Te queda alguna duda?', collection: 'Ver las villas', inquiry: 'Pedir sugerencias' },
  'pt-BR': { prompt: 'Ainda ficou com alguma dúvida?', collection: 'Ver as vilas', inquiry: 'Pedir sugestões' },
  'zh-CN': { prompt: '还有想了解的吗？', collection: '查看别墅', inquiry: '请求推荐' },
  ko: { prompt: '아직 궁금한 점이 있으신가요?', collection: '빌라 보기', inquiry: '추천 요청' },
  fr: { prompt: 'Une question vous reste ?', collection: 'Voir les villas', inquiry: 'Demander des suggestions' },
  it: { prompt: 'Resta qualche dubbio?', collection: 'Vedi le ville', inquiry: 'Chiedi una proposta' },
  nl: { prompt: 'Zit je nog met een vraag?', collection: "Bekijk de villa's", inquiry: 'Vraag om suggesties' },
  sv: { prompt: 'Undrar du fortfarande över något?', collection: 'Se villorna', inquiry: 'Be om förslag' },
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
    <section className="bg-[color:var(--color-onyx)] py-14 sm:py-20 md:py-32 border-y border-[color:var(--color-mist)]/60">
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
          <span className="text-[color:var(--color-bone)]/75 text-sm font-body">{links.prompt}</span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <Link
              to={to('/villas')}
              className="inline-flex items-center gap-1.5 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.18em] uppercase font-body group"
            >
              {links.collection}
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to={to('/private-inquiry')}
              className="inline-flex items-center gap-1.5 text-[color:var(--color-brass)] hover:text-[color:var(--color-brass-bright)] text-[12px] tracking-[0.18em] uppercase font-body group"
            >
              {links.inquiry}
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
