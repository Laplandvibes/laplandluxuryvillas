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
      tagline: 'Suite voladiza diseñada por Rajakangas con una fachada de cristal íntegra orientada a las auroras.',
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
        'Inari se sitúa de lleno bajo el óvalo auroral: estadísticamente, la latitud de auroras boreales más fiable de Europa. Aurora Village es una finca de 24 cabañas sin tráfico de paso ni aldeas vecinas en el horizonte visible. Las cabañas están espaciadas para preservar la intimidad, con la cama bajo el cristal y el sofá orientado hacia él.',
        'El restaurante de la propiedad, dirigido por sami, ofrece un menú degustación en torno al reno, la trucha alpina y la mora ártica. Los avisos de aurora se transmiten por radio de cabaña a cabaña para que nadie despierte a la villa contigua.',
      ],
      signature: [
        'Cabaña de techo de cristal con la cama bajo el vértice',
        '24 cabañas en una finca de 30 hectáreas, ampliamente espaciadas',
        'Restaurante dirigido por sami en la propiedad, menú degustación cada noche',
        'Aviso de aurora por radio en la cabaña',
        'Inari es la latitud de auroras más fiable de la UE',
        'Sendero privado de raquetas de nieve gratuito desde la propiedad',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Iglús de cristal asomados sobre el fell de Levi: el único conjunto de iglús de Laponia orientado al sur, hacia el valle.',
      copy: [
        'Cuarenta y dos iglús de cristal dispuestos en la ladera meridional del fell de Levi. La mayoría de las cabañas de aurora apuntan al norte hacia un bosque vacío; Levin Iglut es uno de los muy pocos que enmarca las luces sobre el perfil iluminado de la aldea del fell que se extiende abajo: mejor para fotógrafos, más espectacular al anochecer.',
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
        'El refugio organiza veladas culturales sami, pesca en el hielo del lago y uno de los pocos programas guiados certificados de fotografía de auroras de Finlandia. Las habitaciones se reservan con un año de antelación para el pico de febrero; la concierge puede a veces encontrar una liberación.',
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
      tagline: 'Una suite con paredes de cristal en la cima del fell de Kaunispää: el dormitorio bajo la aurora más alto del país.',
      copy: [
        'Star Arctic se asienta en lo más alto de Kaunispää, el fell que se eleva directamente desde la aldea de Saariselkä. Las suites Skyview tienen paredes de cristal a doble altura en tres de sus lados, sin cortinas, y una altitud suficiente para superar la línea de árboles local, lo que ofrece un verdadero panorama de 270° desde la cama.',
        'La carretera de la cima es privada y está iluminada de noche, de modo que los huéspedes pueden conducir ellos mismos. El hotel cuenta con su propio observatorio, restaurante y una flota de fat-bikes para el verano.',
      ],
      signature: [
        'Cristal de 270° en la cima del fell más alto de la zona',
        'Carretera privada a la cima, iluminada de noche',
        'Observatorio de cielo oscuro en la propiedad (noches de telescopio)',
        'Sauna con vistas al fell de suelo a techo',
        'Suites premium: cristal en esquina y salón independiente',
        'A cinco minutos en coche de la aldea de Saariselkä',
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
    'private-lakeside-log-estate': {
      tagline: 'Una casa de troncos privada construida a mano en su propia bahía del lago Inari. Solo por consulta a la concierge.',
      copy: [
        'Una finca de troncos de cuatro dormitorios en su propia bahía privada, a la que se accede por un único camino. Frecuentada por un reducido grupo de huéspedes habituales; reservamos algunas semanas cada temporada como asignación privada.',
        'Incluye una sauna de humo, dos jacuzzis de leña, un cobertizo para barcas y una brigada de chef privado que coordinamos cuando la propiedad está reservada. Acceso en motonieve y husky por la bahía en invierno; canoa y pesca en el lago en la temporada del sol de medianoche.',
      ],
      signature: [
        'Cuatro dormitorios en una bahía privada del lago Inari',
        'Sauna de humo y dos jacuzzis de leña',
        'Brigada de chef privado organizada bajo petición',
        'Acceso en motonieve / husky por el lago en invierno',
        'Barca, canoa y embarcadero para la temporada del sol de medianoche',
        'Asignación de concierge: nunca en listados públicos',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Un chalé moderno de autor en la ladera sur de Levi. Ski-in / ski-out, planta de bienestar privada.',
      copy: [
        'Chalé de autor de tres dormitorios en la ladera sur del fell de Levi, con una planta de bienestar (sauna, baño de vapor, piscina de inmersión, sala de tratamientos) en el nivel inferior y el espacio de estar abierto a una terraza de 12 m orientada al valle.',
        'Un breve descenso esquiando hasta la góndola de Levi; un breve paseo de vuelta por el sendero calefactado. Incluye limpieza diaria, preparación del desayuno y un concierge de esquí disponible bajo llamada.',
      ],
      signature: [
        'Chalé de autor de tres dormitorios, ladera sur',
        'Ski-in / ski-out por el sendero calefactado',
        'Planta de bienestar privada: sauna, vapor, inmersión, sala de tratamientos',
        'Terraza de cristal de 12 m orientada al valle',
        'Limpieza diaria y preparación del desayuno incluidas',
        'Concierge de esquí disponible bajo llamada durante toda la estancia',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'El núcleo de auroras de lujo del norte de Finlandia: Kakslauttanen, Star Arctic, el límite salvaje de Urho Kekkonen.',
      copy: [
        'Saariselkä se asienta en el extremo septentrional del Parque Nacional de Urho Kekkonen,la naturaleza protegida más salvaje de Finlandia, y es la aldea que definió el alojamiento de aurora con techo de cristal. La mayoría de las cabañas de cristal emblemáticas del país (Kakslauttanen, Star Arctic, Northern Lights Village) se encuentran a menos de 10 km de la aldea.',
        'La aldea en sí es pequeña y transitable a pie, con una calle principal, tres restaurantes serios y acceso directo al parque nacional. El aeropuerto de Ivalo,a 30 minutos en traslado privado, acoge aviones regionales y vuelos chárter privados.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort: la propiedad de techo de cristal original',
        'Star Arctic Hotel: suites en la cima del fell de Kaunispää',
        'Acceso directo al Parque Nacional de Urho Kekkonen (naturaleza salvaje)',
        'Aeropuerto de Ivalo: apto para chárter privado, traslado de 30 min',
      ],
      arrival: 'Ivalo (IVL): 30 min en traslado privado',
      auroraNote: 'Bosque boreal interior, baja contaminación lumínica. ~200 noches de aurora con cielo despejado por temporada: el segundo mejor de Finlandia tras Inari.',
    },
    'inari': {
      position: 'Estadísticamente, la latitud de auroras más fiable de la Unión Europea. Corazón sami, lago Inari, cielos oscuros.',
      copy: [
        'Inari es el municipio más septentrional de Finlandia y la capital cultural de los sami finlandeses. La aldea se sitúa en el lago Inari,el tercero más grande de Finlandia, con 3.000 islas y la menor contaminación lumínica al sur del círculo polar.',
        'Para el viaje de lujo esto significa dos cosas. Primero: las auroras son aquí estadísticamente las más fiables de la Unión Europea, con los despliegues más ovalmente cenitales. Segundo: las fincas de troncos junto al lago (algunas de las cuales reservamos en privado) son el alojamiento más tranquilo de Laponia: sin tráfico de paso ni aldeas vecinas en el horizonte visible.',
      ],
      highlights: [
        'Aurora Village: finca de cabañas de cristal de 30 hectáreas construida a tal fin',
        'Wilderness Hotel Nellim: burbujas de aurora en la orilla este del lago Inari',
        'Museo sami SIIDA y programas culturales durante todo el año',
        'Fincas privadas de troncos junto al lago disponibles a través de la concierge',
      ],
      arrival: 'Ivalo (IVL): 45 min en traslado privado',
      auroraNote: 'La mayor frecuencia de auroras de la Europa continental. ~220 noches de aurora con cielo despejado por temporada: el vencedor estadístico.',
    },
    'rovaniemi': {
      position: 'La ciudad de llegada. Suites de autor, vuelos directos diarios desde grandes hubs.',
      copy: [
        'Rovaniemi es la capital regional de Laponia y el destino de auroras más fácil de alcanzar: múltiples vuelos directos diarios desde Helsinki, además de vuelos directos de temporada desde Londres, Frankfurt, París, Viena y el Golfo. El aeropuerto está a seis minutos del centro de la ciudad.',
        'El inventario de lujo aquí se centra en suites de diseño de autor a menos de diez minutos del aeropuerto (Arctic TreeHouse, Apukka). Los traslados en helicóptero del aeropuerto a reservas remotas son habituales.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel: suites voladizas diseñadas por Studio Puisto',
        'Apukka Resort: vagones de aurora históricos en el lago Apukkajärvi',
        'Vuelos directos desde Londres / Frankfurt / Viena / Doha (de temporada)',
      ],
      arrival: 'Rovaniemi (RVN): 6 min del centro de la ciudad',
      auroraNote: 'Latitud de auroras más baja que Inari/Saariselkä, pero aun así ~150 noches de aurora con cielo despejado. Mejor combinado con al menos una noche en una aldea del fell.',
    },
    'levi': {
      position: 'La principal estación de esquí de Finlandia. Chalés de lujo en la ladera sur, ski-in / ski-out desde la góndola de Levi.',
      copy: [
        'Levi es la estación de fell más desarrollada de Laponia: una completa aldea de deportes de invierno con 43 remontes, varias cocinas recomendadas por Michelin y un mercado de alquiler de chalés de diseño que se ha vuelto serio en la última década. La góndola sube del centro de la aldea a la cima; la ladera sur es donde se asientan los chalés privados.',
        'La visibilidad de auroras desde Levi es orientada al sur y espectacular,poco habitual en Laponia, ya que el perfil iluminado de la aldea pasa a formar parte de la fotografía. Mejor combinada con una o dos noches más al norte (Inari o Saariselkä) para una aurora de naturaleza salvaje genuina antes de regresar aquí a esquiar.',
      ],
      highlights: [
        'Levin Iglut: iglús de cristal orientados al sur sobre la aldea del fell',
        'Chalés de autor de diseño: ladera sur, ski-in/out',
        '43 remontes, descenso más largo de 2,5 km, temporada nov.–may.',
        'El aeropuerto de Kittilä (KTT) acoge vuelos internacionales directos de temporada',
      ],
      arrival: 'Kittilä (KTT): 20 min en traslado privado',
      auroraNote: 'Panorama auroral orientado al sur (poco habitual). ~150 noches despejadas, pero la aldea iluminada aporta una composición en primer plano infrecuente más al norte.',
    },
    'yllas': {
      position: 'La alternativa tranquila a Levi. Parque nacional de Pallas-Yllästunturi, menos gente, bosque más profundo.',
      copy: [
        'Ylläs es la segunda estación de fell más grande de Finlandia, pero parece una quinta parte de su tamaño: la aldea se reparte entre dos asentamientos (Äkäslompolo y Ylläsjärvi), separados por 15 km de fell, con el Parque Nacional de Pallas-Yllästunturi entre ambos. El inventario de esquí iguala al de Levi; la densidad de visitantes, no.',
        'Para el viaje de lujo el atractivo es el espacio. Los chalés de autor se asientan aquí en solitario en la ladera del fell; los senderos del parque nacional parten desde la propiedad; el silencio es lo que la gente realmente paga. La visibilidad de auroras es excelente gracias a la muy baja contaminación lumínica local.',
      ],
      highlights: [
        'Parque Nacional de Pallas-Yllästunturi: el 3.º más grande de Finlandia',
        'Dos aldeas de esquí en lados opuestos del fell de Ylläs',
        'Menor contaminación lumínica que cualquier otra estación de esquí',
        'Pistas de esquí de fondo dedicadas (250 km en total)',
      ],
      arrival: 'Kittilä (KTT): 50 min en traslado privado',
      auroraNote: 'Dentro del límite del parque nacional: entre los registros de contaminación lumínica más bajos de la Europa continental. ~180 noches despejadas.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Un solo guía, tu grupo y un vehículo fotográfico calefactado que sigue la previsión allá donde apunte.',
      copy: [
        'Una caza de auroras privada de seis horas con un guía finlandés certificado de fotografía de naturaleza. El vehículo está calefactado y equipado; se prestan trípodes, disparadores de cable y cámaras preparadas para el ártico si no traes los tuyos. La ruta se decide esa misma tarde en función del índice Kp y de la previsión de nubosidad.',
        'La comida caliente y las pieles de reno como aislante del suelo van de serie. La instrucción cubre la exposición para la propia aurora, la composición del primer plano y el revelado esa misma noche.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi: sep.–abr.',
    },
    'helicopter-aurora-flight': {
      hook: 'Un vuelo nocturno en helicóptero de 45 minutos por encima de la capa de nubes, hasta las propias auroras.',
      copy: [
        'Operado por el único operador de helicópteros de Finlandia certificado para vuelo nocturno VFR, desde Rovaniemi e Ivalo. El vuelo supera la capa de nubes local y traza círculos dentro del óvalo auroral activo: una perspectiva imposible desde el suelo.',
        'La fotografía en tierra se incluye a ambos lados del vuelo; la parte en el aire es para la experiencia en sí, no para la cámara. Máximo cuatro pasajeros por AS350. Sujeto a ventana meteorológica: la concierge sigue la previsión y avisa el día anterior.',
      ],
      available: 'Rovaniemi, Ivalo: oct.–mar. (según meteorología)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Un menú degustación finlandés-sami de nueve platos cocinado en la cocina de tu villa por un chef en activo de Laponia.',
      copy: [
        'Un chef en activo de una de las cocinas serias de Laponia acude a tu villa por una velada. El menú se construye en torno a lo que de verdad está de temporada esa semana: trucha alpina de aguas frías, mora ártica, reno ahumado, setas frescas del bosque, espino amarillo, enebro.',
        'Incluye un maridaje de vinos seleccionado para el menú, los ingredientes, la preparación, el servicio y la limpieza. Máximo diez comensales. Menús vegetariano, sin gluten y sin marisco bajo petición, con al menos 72 horas de antelación.',
      ],
      available: 'Cualquier villa de la colección: todo el año',
    },
    'private-husky-safari': {
      hook: 'Tu propio tiro de trineo, tu propio guía de la perrera, hacia el bosque boreal con la primera luz.',
      copy: [
        'Un tiro privado de dieciséis perros de trineo y un guía de la perrera. La ruta se interna en la red de senderos de trabajo de una perrera de trineo seria,normalmente 35 km, con una parada junto al fuego para zumo caliente de arándano rojo y salchicha a la brasa a mitad de camino.',
        'Conduces tu propio trineo (primero una sesión informativa de 20 minutos). Se facilitan monos de lana, manoplas y botas árticas. Grupo de dos a seis: sin grupos compartidos, nunca combinado con desconocidos.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä: dic.–abr.',
    },
    'private-snowmobile-wilderness': {
      hook: 'Una ruta guiada en motonieve de 80 km a través de lagos helados y bosque virgen, con un almuerzo cocinado al fuego de leña.',
      copy: [
        'Una ruta guiada en motonieve de día completo por los senderos del fell alto: la red que usan los guías locales, no el circuito turístico. El guía cocina el almuerzo al fuego en la ruta (estofado de reno, pan horneado al fuego, zumo caliente).',
        'Máquinas BRP, cascos, pasamontañas y monos de lana incluidos. Motonieves de dos plazas disponibles. Se requiere permiso de conducir para el conductor; el asiento del pasajero no necesita permiso. Máximo cuatro motonieves por grupo.',
      ],
      available: 'Saariselkä, Inari, Levi: dic.–abr.',
    },
    'private-reindeer-sami-evening': {
      hook: 'Paseo en trineo de renos en una granja en activo y, después, una velada en una kota privada con un anfitrión sami.',
      copy: [
        'Dos horas de trineo de renos en una granja de pastoreo en activo, seguidas de una velada privada en una kota calefactada (tipi con fuego abierto). El anfitrión es un pastor de renos sami que lleva la granja: la conversación, no un guion, es la experiencia.',
        'La cena es reno salteado con puré de patata y arándano rojo, preparado al fuego abierto. Historias sobre el rebaño, el año de la migración y la tradición del canto joik. Máximo doce comensales.',
      ],
      available: 'Inari, Saariselkä: todo el año (trineo dic.–mar.)',
    },
    'private-jet-arrival': {
      hook: 'Traslado directo en jet privado a Ivalo, Kittilä o Rovaniemi: sin facturación comercial, sin escala.',
      copy: [
        'Coordinado a través de nuestros socios de aviación privada en Helsinki, Ginebra y Doha. Vuelos directos a Ivalo (el más cercano a las villas de Saariselkä / Inari), Kittilä (el más cercano a las villas de Levi / Ylläs) o Rovaniemi (el mejor para Arctic TreeHouse).',
        'Asistencia completa: traslado terrestre a tu villa en un vehículo calefactado de especificación ártica, equipaje reenviado, aduana sin cola. La concierge tramita el slot y ajusta la llegada a la hora de entrada en la villa.',
      ],
      available: 'Todos los destinos: todo el año',
    },
    'helicopter-villa-transfer': {
      hook: 'Recogida desde el aeropuerto regional directamente al helipuerto de tu villa: sin traslado por carretera.',
      copy: [
        'Se usa con mayor frecuencia para las llegadas a las fincas privadas de troncos junto al lago Inari. La aeronave es el mismo AS350 de los vuelos de auroras; un solo trayecto dura entre 20 y 45 minutos.',
        'Máximo cinco pasajeros más equipaje. La concierge ajusta la recogida a la entrada en la villa y a la ventana de luz diurna: en pleno invierno el sol se pone a las 15:00.',
      ],
      available: 'Rovaniemi, Ivalo → fincas del lago Inari',
    },
  },
};

export default overlay;
