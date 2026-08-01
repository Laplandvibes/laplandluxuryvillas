import { Home } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Lomarengas — Finland's largest holiday-cottage agency. Adtraction deep-link
// (channel as=2086870803; no client SID slot — GA4 still gets the sid via
// onCtaClick). Logo: _affiliate/logos/adtraction-lomarengas.png
// → public/images/partners/lomarengas.png.
const lomarengas: AdSpec = {
  key: 'lomarengas',
  brand: 'Lomarengas',
  logo: '/images/partners/lomarengas.png',
  linkFor: (sid) => `https://go.laplandvibes.com/go/lomarengas?sid=${encodeURIComponent(sid)}`,
  accent: '#10B981',
  accentDark: '#047857',
  icon: Home,
  copy: {
    fi: {
      eyebrow: 'Oma mökki, ei hotellihuone',
      headline: 'Vuokraa koko mökki Lapista, oma sauna ja tilaa koko porukalle',
      sub: 'Suomen suurin mökkivuokraaja. Tuhansia mökkejä ympäri Lappia, monessa oma rantasauna ja takka, varaat suoraan ja saat koko paikan itsellesi, et vain yhtä huonetta. Kun haluatte tilaa, rauhaa ja oman keittiön, mökki voittaa hotellin.',
      trust: ['Oma sauna useimmissa', 'Koko mökki, ei jaettu', 'Mökkejä ympäri Lappia'],
      cta: 'Katso vapaat mökit',
      poweredBy: 'Varaus Lomarenkaan kautta',
    },
    en: {
      eyebrow: 'A whole cabin, not a hotel room',
      headline: 'Rent a whole Lapland cabin, with your own sauna and room for everyone',
      sub: "Finland's biggest cottage-rental agency. Thousands of cabins across Lapland, many with a private lakeside sauna and fireplace. You book direct and get the whole place to yourselves, not just a room. When you want space, quiet and your own kitchen, a cabin beats a hotel.",
      trust: ['Private sauna in most', 'The whole cabin, not shared', 'Cabins all across Lapland'],
      cta: 'See available cabins',
      poweredBy: 'Booking via Lomarengas',
    },
    de: {
      eyebrow: 'Ein ganzes Haus, kein Hotelzimmer',
      headline: 'Ein ganzes Ferienhaus in Lappland mieten, mit eigener Sauna und Platz für alle',
      sub: 'Finnlands größter Ferienhaus-Vermittler. Tausende Hütten in ganz Lappland, viele mit eigener Seesauna und Kamin. Sie buchen direkt und haben das ganze Haus für sich, nicht nur ein Zimmer. Wenn Sie Platz, Ruhe und eine eigene Küche wollen, schlägt die Hütte das Hotel.',
      trust: ['Eigene Sauna in den meisten', 'Das ganze Haus, nicht geteilt', 'Hütten in ganz Lappland'],
      cta: 'Freie Hütten ansehen',
      poweredBy: 'Buchung über Lomarengas',
    },
    ja: {
      eyebrow: 'ホテルの一室ではなく一棟貸し',
      headline: 'ラップランドのコテージを一棟まるごと。専用サウナと、みんなで泊まれる広さ',
      sub: 'フィンランド最大のコテージ予約サービス。ラップランド各地に数千棟、多くに湖畔の専用サウナと暖炉つき。直接予約で、一室ではなく一棟をまるごと使えます。広さと静けさ、自分たちのキッチンが欲しいなら、コテージはホテルに勝ります。',
      trust: ['多くに専用サウナ', '一棟貸し、相部屋なし', 'ラップランド各地に点在'],
      cta: '空きコテージを見る',
      poweredBy: '予約はLomarengas経由',
    },
    es: {
      eyebrow: 'Una cabaña entera, no una habitación',
      headline: 'Alquila una cabaña entera en Laponia, con sauna propia y sitio para todos',
      sub: 'La mayor agencia de alquiler de cabañas de Finlandia. Miles de cabañas por toda Laponia, muchas con sauna privada junto al lago y chimenea. Reservas directamente y tienes todo el sitio para ti, no solo una habitación. Cuando quieres espacio, calma y tu propia cocina, la cabaña gana al hotel.',
      trust: ['Sauna privada en la mayoría', 'La cabaña entera, sin compartir', 'Cabañas por toda Laponia'],
      cta: 'Ver cabañas disponibles',
      poweredBy: 'Reserva con Lomarengas',
    },
    'pt-BR': {
      eyebrow: 'Uma cabana inteira, não um quarto',
      headline: 'Alugue uma cabana inteira na Lapônia, com sauna própria e espaço para todos',
      sub: 'A maior agência de aluguel de cabanas da Finlândia. Milhares de cabanas por toda a Lapônia, muitas com sauna privativa à beira do lago e lareira. Você reserva direto e fica com o lugar inteiro só para vocês, não só um quarto. Quando você quer espaço, silêncio e cozinha própria, a cabana ganha do hotel.',
      trust: ['Sauna privativa na maioria', 'A cabana inteira, sem dividir', 'Cabanas por toda a Lapônia'],
      cta: 'Ver cabanas disponíveis',
      poweredBy: 'Reserva pela Lomarengas',
    },
    'zh-CN': {
      eyebrow: '整栋小屋，而非一间客房',
      headline: '在拉普兰整栋租下一座小屋，带专属桑拿，全家都住得下',
      sub: '芬兰最大的度假小屋租赁机构。拉普兰各地有数千座小屋，许多带湖畔专属桑拿和壁炉。直接预订，整座小屋归你们，而不只是一间房。想要空间、安静和自己的厨房时，小屋胜过酒店。',
      trust: ['多数带专属桑拿', '整栋租下，不与人共用', '小屋遍布拉普兰各地'],
      cta: '查看可订小屋',
      poweredBy: '由 Lomarengas 提供预订',
    },
    ko: {
      eyebrow: '객실이 아니라 통째로 빌리는 오두막',
      headline: 'Lomarengas: 라플란드 오두막을 통째로, 전용 사우나와 모두가 묵을 공간까지',
      sub: '핀란드 최대 오두막 대여 업체입니다. 라플란드 곳곳에 수천 채, 상당수가 호숫가 전용 사우나와 벽난로를 갖췄습니다. 직접 예약하면 방 하나가 아니라 집 전체를 통째로 쓸 수 있습니다. 공간과 고요함, 나만의 주방을 원한다면 오두막이 호텔보다 낫습니다.',
      trust: ['대부분 전용 사우나', '집 전체, 공유 아님', '라플란드 전역에 분포'],
      cta: '예약 가능한 오두막 보기',
      poweredBy: 'Lomarengas를 통한 예약',
    },
    fr: {
      eyebrow: 'Un chalet entier, pas une chambre',
      headline: 'Louez un chalet entier en Laponie, avec votre sauna et de la place pour tous',
      sub: "La plus grande agence de location de chalets de Finlande. Des milliers de chalets partout en Laponie, beaucoup avec sauna privé au bord du lac et cheminée. Vous réservez en direct et avez tout le chalet pour vous, pas seulement une chambre. Quand vous voulez de l'espace, du calme et votre cuisine, le chalet l'emporte sur l'hôtel.",
      trust: ['Sauna privé dans la plupart', 'Le chalet entier, sans partage', 'Des chalets partout en Laponie'],
      cta: 'Voir les chalets libres',
      poweredBy: 'Réservation via Lomarengas',
    },
    it: {
      eyebrow: 'Una baita intera, non una stanza',
      headline: 'Affitta una baita intera in Lapponia, con sauna privata e spazio per tutti',
      sub: "La più grande agenzia di affitto baite della Finlandia. Migliaia di baite in tutta la Lapponia, molte con sauna privata sul lago e camino. Prenoti diretto e hai tutta la baita per te, non solo una stanza. Quando vuoi spazio, silenzio e una cucina tua, la baita batte l'hotel.",
      trust: ['Sauna privata nella maggior parte', "L'intera baita, non condivisa", 'Baite in tutta la Lapponia'],
      cta: 'Vedi baite disponibili',
      poweredBy: 'Prenotazione con Lomarengas',
    },
    nl: {
      eyebrow: 'Een heel huisje, geen hotelkamer',
      headline: 'Huur een heel Lapland-huisje, met eigen sauna en plek voor iedereen',
      sub: "Finlands grootste verhuurder van vakantiehuisjes. Duizenden huisjes door heel Lapland, veel met een eigen sauna aan het meer en een open haard. Je boekt rechtstreeks en hebt het hele huisje voor jezelf, niet alleen een kamer. Wil je ruimte, rust en je eigen keuken, dan wint het huisje het van het hotel.",
      trust: ['Eigen sauna in de meeste', 'Het hele huisje, niet gedeeld', 'Huisjes door heel Lapland'],
      cta: 'Bekijk vrije huisjes',
      poweredBy: 'Boeking via Lomarengas',
    },
    sv: {
      eyebrow: 'Hela stugan, inte ett hotellrum',
      headline: 'Hyr en hel stuga i Lappland, med egen bastu och plats för alla',
      sub: 'Finlands största stuguthyrare. Tusentals stugor runt om i Lappland, många med egen bastu vid sjön och öppen spis. Du bokar direkt och får hela stället för er själva, inte bara ett rum. När du vill ha utrymme, lugn och ett eget kök vinner stugan över hotellet.',
      trust: ['Egen bastu i de flesta', 'Hela stugan, inte delad', 'Stugor runt om i Lappland'],
      cta: 'Se lediga stugor',
      poweredBy: 'Bokning via Lomarengas',
    },
  },
}

export default lomarengas
