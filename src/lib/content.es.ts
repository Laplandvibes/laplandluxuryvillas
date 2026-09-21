import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Cristal térmico calefactado sobre una cabaña de pino kelo tallada a mano: el dormitorio bajo la aurora original.',
      copy: [
        'Una villa de troncos independiente con su propio dormitorio de techo de cristal, cocina privada, salón con chimenea y sauna finlandesa. El cristal térmico permanece transparente a −30 °C, de modo que se contemplan las auroras desde una cama de matrimonio sin abandonar el edredón.',
        'Situada dentro de la finca Kakslauttanen, junto al Parque Nacional de Urho Kekkonen, a 35 minutos en traslado privado del aeropuerto de Ivalo. Media pensión disponible en el restaurante del resort; chef privado bajo petición.',
      ],
      signature: [
        'Techo de cristal calefactado sobre el dormitorio (transparente a −30 °C)',
        'Sauna privada de leña y jacuzzi exterior de leña',
        'Dos dormitorios, cocina completa y salón con chimenea',
        'Traslado privado incluido desde el aeropuerto de Ivalo',
        'Aviso de aurora en la habitación a través de recepción',
        'Opción de media pensión en la cocina del resort',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Suite voladiza diseñada por Studio Puisto con una fachada de cristal íntegra orientada a las auroras.',
      copy: [
        'Una suite penthouse de 73 m² sobre pilotes, con cristal de suelo a techo a todo lo ancho. Diseñada por Studio Puisto. Terraza privada con jacuzzi. El edificio se levantó en torno a un único pino, con cada detalle interior elegido para desaparecer y que el bosque sea el único objeto de la sala.',
        'A cinco minutos del Pueblo de Papá Noel: una base útil para familias que viajan en temporada navideña y desean un refugio tranquilo de noche y fácil acceso a Rovaniemi de día.',
      ],
      signature: [
        'Suite de 73 m², fachada de cristal a doble altura orientada al norte',
        'Terraza privada con jacuzzi y sauna exterior',
        'Interior de Studio Puisto: iconos del diseño finlandés en todo el espacio',
        'Suelo radiante y cortinas opacas para dormir de día',
        'Restaurante Rakas en la propiedad',
        'A cinco minutos del Pueblo de Papá Noel',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Veinticuatro cabañas de cristal frente a nada más que bosque y el óvalo auroral.',
      copy: [
        'Inari se sitúa de lleno bajo el óvalo auroral: en la latitud donde el Instituto Meteorológico Finlandés observa la aurora unas tres noches de cada cuatro. Aurora Village es una finca de 24 cabañas sin tráfico de paso ni aldeas vecinas en el horizonte visible. Las cabañas están espaciadas para preservar la intimidad, con la cama bajo el cristal y el sofá orientado hacia él.',
        'El restaurante de la propiedad, dirigido por sami, ofrece un menú degustación en torno al reno, la trucha alpina y la mora ártica. Los avisos de aurora se transmiten por radio de cabaña a cabaña para que nadie despierte a la villa contigua.',
      ],
      signature: [
        'Cabaña de techo de cristal con la cama bajo el vértice',
        '24 cabañas en una finca de 30 hectáreas, ampliamente espaciadas',
        'Restaurante dirigido por sami en la propiedad, menú degustación cada noche',
        'Aviso de aurora por radio en la cabaña',
        'Aurora unas 3 de cada 4 noches en esta latitud (FMI)',
        'Sendero privado de raquetas de nieve gratuito desde la propiedad',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Iglús de cristal asomados sobre el fell de Levi: el único conjunto de iglús de Laponia orientado al sur, hacia el valle.',
      copy: [
        'Cuarenta y dos iglús de cristal dispuestos en la ladera meridional del fell de Levi. La mayoría de las cabañas de aurora apuntan al norte hacia un bosque vacío; Levin Iglut es uno de los muy pocos que enmarca las luces sobre el perfil iluminado de la aldea del fell que se extiende abajo: mejor para fotógrafos, más dramático al anochecer.',
        'A poca distancia a pie de la aldea de Levi (góndola, restaurantes, ski-in/ski-out), pero los iglús en sí son tranquilos. Restaurante Aurora en la propiedad, con el chef abasteciéndose dentro de un radio de 100 km.',
      ],
      signature: [
        'Panorama auroral orientado al sur (poco habitual en Laponia)',
        'A poca distancia a pie de la góndola y la aldea de Levi',
        'Restaurante Aurora en la propiedad: radio de abastecimiento de 100 km',
        'Las suites premium disponen de jacuzzi privado en la terraza',
        'Acceso ski-in / ski-out en temporada de invierno',
        'Aviso de aurora en la habitación',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Una suite burbuja de cristal al borde del bosque boreal, a veinte minutos de la frontera rusa.',
      copy: [
        'Nellim es una aldea silvestre en activo (220 habitantes) en la orilla oriental del lago Inari. Las burbujas de aurora se sitúan apartadas del refugio principal, en su propio claro, cada una con una cúpula panorámica transparente sobre la cama y un jacuzzi de leña en el porche.',
        'El refugio organiza veladas culturales sami, pesca en el hielo del lago y uno de los pocos programas guiados certificados de fotografía de auroras de Finlandia. Las habitaciones se reservan con un año de antelación para el pico de febrero.',
      ],
      signature: [
        'Cúpula panorámica transparente sobre la cama',
        'Jacuzzi privado de leña en el porche',
        'Ubicación en aldea silvestre: a 20 min de la frontera rusa',
        'Programa guiado certificado de fotografía de auroras',
        'Programa cultural sami varias noches por semana',
        'Pesca en el lago Inari y sauna de humo tradicional',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Una suite con paredes de cristal en la cima del fell de Kaunispää: por encima de la línea de árboles y de las luces de la aldea.',
      copy: [
        'Star Arctic se asienta en lo más alto de Kaunispää, el fell que se eleva directamente desde la aldea de Saariselkä. Las suites Skyview tienen paredes de cristal a doble altura en tres de sus lados, sin cortinas, y una altitud suficiente para superar la línea de árboles local, lo que ofrece un verdadero panorama de 270° desde la cama.',
        'La carretera de la cima es privada y está iluminada de noche, de modo que los huéspedes pueden conducir ellos mismos. El hotel cuenta con su propio observatorio, restaurante y una flota de fat-bikes para el verano.',
      ],
      signature: [
        'Cristal de 270° en la cima, por encima de la línea de árboles',
        'Carretera privada a la cima, iluminada de noche',
        'Observatorio de cielo oscuro en la propiedad (noches de telescopio)',
        'Sauna con vistas al fell de suelo a techo',
        'Suites premium: cristal en esquina y salón independiente',
        'A cinco minutos en coche de la aldea de Saariselkä',
      ],
    },
    'lapland-hotels-saaga-apartment': {
      tagline: 'Un apartamento independiente al pie de las laderas sur de Ylläs, con el spa del hotel detrás.',
      copy: [
        'Lapland Hotels Saaga está en el pueblo de Ylläsjärvi, justo debajo de las laderas sur de la estación de Ylläs. Además de habitaciones de hotel, alquila apartamentos para uno a ocho huéspedes, dentro del recinto del hotel o a unos 300 metros del edificio principal, de modo que una familia o un grupo pequeño tiene su propio espacio sin salir del complejo.',
        'Detrás de los apartamentos está todo el hotel: un spa con zona de piscina, jacuzzis y saunas de vapor, sala de fitness y tratamientos, y una sauna privada para hasta quince personas con su propia zona de descanso. Hay tres restaurantes en el recinto, entre ellos el bufé Biegga, y el desayuno se basa en ingredientes del norte.',
      ],
      signature: [
        'Pueblo de Ylläsjärvi, bajo las laderas sur de Ylläs',
        'Apartamentos para 1–8 huéspedes',
        'En el recinto del hotel o a unos 300 m del edificio principal',
        'Spa: zona de piscina, jacuzzis, saunas de vapor, fitness',
        'Sauna privada para hasta 15 con su propia zona de descanso',
        'Tres restaurantes en el recinto, incluido el bufé Biegga',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Vagones de aurora de estilo histórico a la orilla de un lago helado, a diez minutos del aeropuerto de Rovaniemi.',
      copy: [
        'Un puñado de vagones ferroviarios de época restaurados y reconstruidos como cabañas de aurora con techo de cristal, situados justo al borde del lago Apukkajärvi. Una opción cómoda si solo dispone de dos noches y quiere aterrizar, trasladarse y estar en su cama bajo el cristal en menos de una hora.',
        'Granja de huskies, renos, pesca en el hielo y ruta de motonieve hacia la naturaleza en la propiedad. Los vagones en sí son íntimos (un dormitorio, un baño, salón); el resort gestiona toda la logística de actividades.',
      ],
      signature: [
        'Diseño de vagón ferroviario histórico, dormitorio con techo de cristal',
        'A la orilla del lago Apukkajärvi',
        'Traslado de 10 minutos desde el aeropuerto de Rovaniemi',
        'Huskies, renos y pesca en el hielo en la propiedad',
        'Pista de motonieve desde la propiedad',
        'Aviso de aurora y jacuzzi junto a la cabaña',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'El núcleo de auroras de lujo del norte de Finlandia: Kakslauttanen, Star Arctic, el límite salvaje de Urho Kekkonen.',
      copy: [
        'Saariselkä se asienta en el extremo septentrional del Parque Nacional de Urho Kekkonen, el segundo parque nacional más grande de Finlandia con 2.550 km², y es la aldea que definió el alojamiento de aurora con techo de cristal. La mayoría de las cabañas de cristal más conocidas del país (Kakslauttanen, Star Arctic, Northern Lights Village) se encuentran a menos de 10 km de la aldea.',
        'La aldea en sí es pequeña y transitable a pie: una calle principal, tres restaurantes serios y acceso directo al parque nacional. El aeropuerto de Ivalo está a 27 km, alrededor de media hora en traslado privado, y acoge tanto vuelos regionales como chárteres privados.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort: la propiedad de techo de cristal original',
        'Star Arctic Hotel: suites en la cima del fell de Kaunispää',
        'Acceso directo al Parque Nacional de Urho Kekkonen (naturaleza salvaje)',
        'Aeropuerto de Ivalo: apto para chárter privado, traslado de 30 min',
      ],
      arrival: 'Ivalo (IVL): 27 km, unos 30 min en traslado privado',
      auroraNote: 'Bosque boreal interior, sin luz de asentamientos en decenas de kilómetros en ninguna dirección. Los fells dan un horizonte alto y despejado, que es lo que cuenta las noches en que el arco se queda bajo al norte.',
    },
    'inari': {
      position: 'Nuestro destino más septentrional, donde la aurora se observa unas tres noches de cada cuatro. Corazón sami, lago Inari, cielos oscuros.',
      copy: [
        'Inari es el municipio más extenso de Finlandia y la capital cultural de los sami finlandeses. Lago Inari, el tercero más grande de Finlandia, unas 3.000 islas, a más de 200 km al norte del círculo polar y sin ninguna luz urbana en el horizonte.',
        'Para el viaje de lujo esto significa dos cosas. Primero: a esta latitud el Instituto Meteorológico Finlandés observa la aurora unas tres noches de cada cuatro, y aparece en el cenit en lugar de baja al norte. Segundo: las fincas de troncos junto al lago están entre los alojamientos más tranquilos de Laponia: sin tráfico de paso ni aldeas vecinas en el horizonte visible.',
      ],
      highlights: [
        'Aurora Village: finca de cabañas de cristal de 30 hectáreas construida a tal fin',
        'Wilderness Hotel Nellim: burbujas de aurora en la orilla este del lago Inari',
        'Museo sami SIIDA y programas culturales durante todo el año',
        'Lago Inari, el tercero más grande de Finlandia, unas 3 000 islas',
      ],
      arrival: 'Ivalo (IVL): 40 km, unos 40 min en traslado privado',
      auroraNote: 'Nuestro destino más septentrional y aquel en el que la aurora aparece más a menudo en el cenit en lugar de baja al norte. El lago Inari ofrece un horizonte ininterrumpido, sin luz de aldea sobre él.',
    },
    'rovaniemi': {
      position: 'La ciudad de llegada. Suites de autor, vuelos directos diarios desde grandes hubs.',
      copy: [
        'Rovaniemi es la capital regional de Laponia y el destino de auroras más fácil de alcanzar: múltiples vuelos directos diarios desde Helsinki, además de vuelos directos de temporada desde Londres, Frankfurt, París, Viena y el Golfo. El aeropuerto está a unos 10 km al norte del centro de la ciudad, diez o quince minutos en coche.',
        'El inventario de lujo aquí se centra en suites de diseño de autor a menos de diez minutos del aeropuerto (Arctic TreeHouse, Apukka).',
      ],
      highlights: [
        'Arctic TreeHouse Hotel: suites voladizas diseñadas por Studio Puisto',
        'Apukka Resort: vagones de aurora históricos en el lago Apukkajärvi',
        'Vuelos directos desde Londres / Frankfurt / Viena / Doha (de temporada)',
      ],
      arrival: 'Rovaniemi (RVN): 10 km, 10 a 15 min del centro de la ciudad',
      auroraNote: 'Nuestro destino más meridional y el único con las luces de una ciudad en el horizonte, así que la aurora aquí aparece menos y cuesta más verla cuando llega. Mejor combinado con al menos una noche en una aldea del fell más al norte.',
    },
    'levi': {
      position: 'La principal estación de esquí de Finlandia. Chalés de lujo en la ladera sur, ski-in / ski-out desde la góndola de Levi.',
      copy: [
        'Levi es la estación de fell más desarrollada de Laponia: una completa aldea de deportes de invierno con 44 pistas y 26 remontes, dos de ellos telecabinas. El mercado de alquiler de chalés de diseño se ha vuelto serio en la última década. La góndola sube del centro de la aldea a la cima, a 531 metros; en la ladera sur se asientan los chalés privados, y allí abre un telesilla nuevo para la temporada 2026-2027.',
        'La visibilidad de auroras desde Levi suele estar orientada al sur, sobre la aldea, de modo que el perfil iluminado pasa a formar parte de la fotografía. Mejor combinada con una o dos noches más al norte (Inari o Saariselkä) para una aurora de naturaleza salvaje genuina antes de regresar aquí a esquiar.',
      ],
      highlights: [
        'Levin Iglut: iglús de cristal orientados al sur sobre la aldea del fell',
        'Chalés de autor de diseño: ladera sur, ski-in/out',
        '44 pistas, 26 remontes (dos telecabinas), 38,5 km de pista pisada',
        'El aeropuerto de Kittilä (KTT) acoge vuelos internacionales directos de temporada',
      ],
      arrival: 'Kittilä (KTT): 15 km, unos 20 min en traslado privado',
      auroraNote: 'Un panorama orientado al sur, algo poco habitual en Laponia: la aldea del fell iluminada pasa a ser el primer plano de la fotografía. El precio es esa misma luz, así que la vista más oscura queda a un corto trayecto en coche.',
    },
    'yllas': {
      position: 'La alternativa tranquila a Levi. Parque nacional de Pallas-Yllästunturi, menos gente, bosque más profundo.',
      copy: [
        'Ylläs tiene 62 pistas, más que ninguna otra área esquiable de Finlandia, y los descensos más largos del país: más de tres kilómetros desde la cima pelada de 719 metros hasta el valle. Aun así parece una fracción de Levi, porque la aldea se reparte entre dos asentamientos (Äkäslompolo y Ylläsjärvi), separados por 15 km de fell y por el Parque Nacional de Pallas-Yllästunturi.',
        'Para el viaje de lujo el atractivo es el espacio. Los chalés de autor se asientan aquí en solitario en la ladera del fell, los senderos del parque nacional parten desde la propiedad, y el silencio es lo que la gente realmente paga. La visibilidad de auroras es excelente gracias a la escasísima contaminación lumínica local.',
      ],
      highlights: [
        'Parque Nacional de Pallas-Yllästunturi: el 3.º más grande de Finlandia',
        'Dos aldeas de esquí en lados opuestos del fell de Ylläs',
        'Menor contaminación lumínica que cualquier otra estación de esquí',
        'Unos 300 km de pistas de fondo mantenidas, más de 30 km iluminados',
      ],
      arrival: 'Kittilä (KTT): 40 km, unos 45 min en traslado privado',
      auroraNote: 'Los chalés se apoyan en el parque nacional en lugar de estar en medio de una estación, así que sales por la puerta directamente a la oscuridad en vez de conducir para buscarla.',
    },
  },
  experiences: {
  },
};

export default overlay;
