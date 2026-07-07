import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Verre thermique chauffant au-dessus d\'une cabane en pin kelo faite main, la chambre aurorale originelle.',
      copy: [
        'Une villa en rondins autonome dotée de sa propre chambre au toit de verre, d\'une cuisine privée, d\'un salon avec cheminée et d\'un sauna finlandais. Le verre thermique reste limpide à −30 °C : vous observez les aurores depuis un lit king sans quitter la couette.',
        'Située au cœur du domaine de Kakslauttanen, près du parc national d\'Urho Kekkonen, à 35 minutes de transfert privé de l\'aéroport d\'Ivalo. Demi-pension possible au restaurant du resort ; chef privé sur demande.',
      ],
      signature: [
        'Toit de verre chauffant au-dessus de la chambre (limpide à −30 °C)',
        'Sauna privé au feu de bois + bain nordique extérieur chauffé au bois',
        'Deux chambres, cuisine complète, salon avec cheminée',
        'Transfert privé depuis l\'aéroport d\'Ivalo inclus',
        'Alerte aurores en chambre via la réception',
        'Option demi-pension assurée par la cuisine du resort',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Suite en porte-à-faux signée Rajakangas, à la façade entièrement vitrée orientée vers les aurores.',
      copy: [
        'Une suite penthouse de 73 m² sur pilotis, dont le verre court du sol au plafond sur toute la largeur. Conçue par Studio Puisto. Terrasse privée avec bain à remous. Le bâtiment a été édifié autour d\'un seul pin, chaque détail intérieur a été choisi pour s\'effacer, afin que la forêt reste le seul objet de la pièce.',
        'À cinq minutes du Village du Père Noël, une base utile pour les familles voyageant en période de Noël, qui veulent une retraite paisible la nuit et un accès facile à Rovaniemi le jour.',
      ],
      signature: [
        'Suite de 73 m², façade entièrement vitrée orientée nord',
        'Terrasse privée avec bain à remous + sauna extérieur',
        'Intérieur Studio Puisto, icônes du design finlandais partout',
        'Plancher chauffant, rideaux occultants pour le sommeil diurne',
        'Restaurant Rakas sur place (chef Kari Aihinen)',
        'Cinq minutes du Village du Père Noël',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Vingt-quatre cabanes de verre face à rien d\'autre que la forêt et l\'ovale auroral.',
      copy: [
        'Inari se situe précisément sous l\'ovale auroral, statistiquement la latitude la plus fiable d\'Europe pour les aurores boréales. Aurora Village est un domaine de 24 cabanes, sans circulation de passage ni village voisin sur l\'horizon visible. Les cabanes sont espacées pour l\'intimité, le lit placé sous le verre et le canapé face à lui.',
        'Le restaurant du domaine, dirigé par les Samis, propose un menu dégustation autour du renne, de l\'omble chevalier et de la mûre arctique. Les alertes aurores se transmettent de cabane en cabane par radio, afin que personne ne réveille la villa voisine.',
      ],
      signature: [
        'Cabane au toit de verre, lit placé sous l\'apex',
        '24 cabanes sur un domaine de 30 hectares, généreusement espacées',
        'Restaurant dirigé par les Samis sur place, menu dégustation chaque soir',
        'Alerte aurores par radio en cabane',
        'Inari est la latitude aurorale la plus fiable de l\'UE',
        'Sentier privé de raquette gratuit au départ de la propriété',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Igloos de verre perchés au-dessus du fjell de Levi, le seul ensemble d\'igloos de Laponie tourné au sud, vers la vallée.',
      copy: [
        'Quarante-deux igloos de verre disposés sur le flanc sud du fjell de Levi. La plupart des cabanes aurorales pointent vers le nord, sur une forêt sans relief ; Levin Iglut est l\'une des très rares à cadrer les lumières au-dessus de la ligne d\'horizon illuminée du village de fjell en contrebas, meilleur pour les photographes, plus spectaculaire au crépuscule.',
        'À distance de marche du village de Levi (télécabine, restaurants, ski-in/ski-out), mais les igloos eux-mêmes restent paisibles. Restaurant Aurora sur place, le chef s\'approvisionnant dans un rayon de 100 km.',
      ],
      signature: [
        'Panorama auroral orienté sud (rare en Laponie)',
        'À distance de marche de la télécabine et du village de Levi',
        'Restaurant Aurora sur place, rayon d\'approvisionnement de 100 km',
        'Les suites premium disposent d\'un bain à remous privé sur la terrasse',
        'Accès ski-in / ski-out en saison hivernale',
        'Alerte aurores en chambre',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Une suite-bulle de verre à la lisière de la forêt boréale, à vingt minutes de la frontière russe.',
      copy: [
        'Nellim est un véritable village sauvage (220 habitants) sur la rive est du lac Inari. Les bulles aurorales sont à l\'écart du lodge principal, dans leur propre clairière, chacune coiffée d\'un dôme transparent panoramique au-dessus du lit et dotée d\'un bain à remous au feu de bois sur le porche.',
        'Le lodge organise des soirées culturelles samies, la pêche sur glace sur le lac et l\'un des rares programmes guidés certifiés de photographie d\'aurores en Finlande. Les chambres se réservent un an à l\'avance pour le pic de février, le concierge peut parfois trouver une disponibilité libérée.',
      ],
      signature: [
        'Dôme panoramique transparent au-dessus du lit',
        'Bain à remous privé au feu de bois sur le porche',
        'Emplacement en village sauvage, à 20 min de la frontière russe',
        'Programme guidé certifié de photographie d\'aurores',
        'Programme culturel sami plusieurs soirs par semaine',
        'Pêche sur le lac Inari + sauna à fumée traditionnel',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Une suite aux parois de verre au sommet du fjell de Kaunispää, la chambre aurorale la plus haute du pays.',
      copy: [
        'Star Arctic se dresse tout en haut de Kaunispää, le fjell qui s\'élève directement depuis le village de Saariselkä. Les suites Skyview disposent de parois de verre toute hauteur sur trois côtés, sans rideaux, et d\'une altitude suffisante pour dépasser la cime des arbres, soit un véritable panorama à 270° depuis le lit.',
        'La route du sommet est privée et éclairée la nuit, les hôtes peuvent donc conduire eux-mêmes. L\'hôtel possède son propre observatoire, son restaurant et une flotte de fat-bikes pour l\'été.',
      ],
      signature: [
        'Verre à 270° sur le plus haut sommet de fjell de la région',
        'Route privée jusqu\'au sommet, éclairée la nuit',
        'Observatoire à ciel noir sur place (soirées télescope)',
        'Sauna avec vue sur le fjell du sol au plafond',
        'Suites premium, verre d\'angle, salon séparé',
        'Cinq minutes en voiture du village de Saariselkä',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Wagons auroraux d\'inspiration patrimoniale au bord d\'un lac gelé, à dix minutes de l\'aéroport de Rovaniemi.',
      copy: [
        'Quelques wagons ferroviaires d\'époque restaurés et réaménagés en cabanes aurorales au toit de verre, posés au bord même du lac Apukkajärvi. Pratique si vous ne disposez que de deux nuits et souhaitez atterrir, faire votre transfert et vous retrouver au lit sous le verre en moins d\'une heure.',
        'Ferme de huskies, rennes, pêche sur glace et itinéraire de motoneige vers la nature sauvage sur place. Les wagons eux-mêmes sont intimes (une chambre, une salle de bain, un salon) ; le resort gère toute la logistique des activités.',
      ],
      signature: [
        'Design de wagon ferroviaire patrimonial, chambre au toit de verre',
        'Au bord du lac Apukkajärvi',
        'Transfert de 10 minutes depuis l\'aéroport de Rovaniemi',
        'Huskies + rennes + pêche sur glace sur place',
        'Piste de motoneige au départ de la propriété',
        'Alerte aurores + bain à remous attenant à la cabane',
      ],
    },
    'private-lakeside-log-estate': {
      tagline: 'Une maison en rondins privée, bâtie main, sur sa propre baie du lac Inari. Sur demande auprès du concierge uniquement.',
      copy: [
        'Un domaine en rondins de quatre chambres sur sa propre baie privée, accessible par une seule route. Fréquenté par un petit cercle d\'hôtes fidèles, nous en réservons quelques semaines chaque saison en allocation privée.',
        'Comprend un sauna à fumée, deux bains à remous au feu de bois, un hangar à bateaux et une brigade de chef privée que nous coordonnons lorsque la propriété est réservée. Accès motoneige et huskies par la baie en hiver ; canoë et pêche au lac durant la saison du soleil de minuit.',
      ],
      signature: [
        'Quatre chambres sur une baie privée du lac Inari',
        'Sauna à fumée + deux bains à remous au feu de bois',
        'Brigade de chef privée organisée sur demande',
        'Accès motoneige / huskies par le lac en hiver',
        'Bateau + canoë + ponton pour la saison du soleil de minuit',
        'Allocation concierge, jamais sur les listes publiques',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Un chalet contemporain d\'architecte sur le versant sud de Levi. Ski-in / ski-out, étage bien-être privé.',
      copy: [
        'Chalet d\'architecte de trois chambres sur le versant sud du fjell de Levi, avec un étage bien-être (sauna, hammam, bassin d\'eau froide, salle de soins) au rez-de-chaussée et un espace de vie ouvrant sur une terrasse de 12 m face à la vallée.',
        'Une courte descente à ski jusqu\'à la télécabine de Levi ; une courte remontée par le sentier chauffant. Comprend le ménage quotidien, la mise en place du petit-déjeuner et un concierge de ski disponible sur appel.',
      ],
      signature: [
        'Chalet d\'architecte de trois chambres, versant sud',
        'Ski-in / ski-out par le sentier chauffant',
        'Étage bien-être privé : sauna, hammam, bassin d\'eau froide, salle de soins',
        'Terrasse vitrée de 12 m face à la vallée',
        'Ménage quotidien + mise en place du petit-déjeuner inclus',
        'Concierge de ski disponible sur appel tout au long du séjour',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Le pôle aurores de luxe du nord de la Finlande, Kakslauttanen, Star Arctic, la frange sauvage d\'Urho Kekkonen.',
      copy: [
        'Saariselkä se trouve à la lisière nord du parc national d\'Urho Kekkonen, la nature protégée la plus sauvage de Finlande, et c\'est le village qui a défini l\'hébergement auroral au toit de verre. La plupart des cabanes de verre phares du pays (Kakslauttanen, Star Arctic, Northern Lights Village) se situent à moins de 10 km du village.',
        'Le village lui-même est petit et facile à parcourir à pied, avec une rue principale, trois restaurants sérieux et un accès direct au parc national. L\'aéroport d\'Ivalo, à 30 minutes de transfert privé, accueille les jets régionaux et les vols charters privés.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, la propriété au toit de verre originelle',
        'Star Arctic Hotel, suites de sommet sur le fjell de Kaunispää',
        'Accès direct au parc national d\'Urho Kekkonen (de niveau nature sauvage)',
        'Aéroport d\'Ivalo, capable d\'accueillir des charters privés, 30 min de transfert',
      ],
      arrival: 'Ivalo (IVL), 30 min en transfert privé',
      auroraNote: 'Forêt boréale intérieure, faible pollution lumineuse. ~200 nuits aurorales à ciel dégagé par saison, la deuxième meilleure de Finlande après Inari.',
    },
    'inari': {
      position: 'Statistiquement la latitude aurorale la plus fiable de l\'Union européenne. Cœur sami, lac Inari, ciels noirs.',
      copy: [
        'Inari est la commune la plus septentrionale de Finlande et la capitale culturelle des Samis finlandais. Le village est situé sur le lac Inari, le troisième plus grand lac de Finlande, avec 3 000 îles et la plus faible pollution lumineuse au sud du cercle polaire.',
        'Pour le voyage de luxe, cela signifie deux choses. D\'abord : les aurores y sont statistiquement les plus fiables de l\'Union européenne, avec les manifestations les plus à la verticale. Ensuite : les domaines en rondins au bord du lac (dont certains que nous réservons en privé) sont l\'hébergement le plus paisible de Laponie, sans circulation de passage, sans village voisin sur l\'horizon visible.',
      ],
      highlights: [
        'Aurora Village, domaine de cabanes de verre de 30 hectares conçu à dessein',
        'Wilderness Hotel Nellim, bulles aurorales sur la rive est du lac Inari',
        'Musée sami SIIDA + programmes culturels toute l\'année',
        'Domaines en rondins privés au bord du lac, disponibles via le concierge',
      ],
      arrival: 'Ivalo (IVL), 45 min en transfert privé',
      auroraNote: 'Fréquence aurorale la plus élevée de l\'UE continentale. ~220 nuits aurorales à ciel dégagé par saison, la gagnante statistique.',
    },
    'rovaniemi': {
      position: 'La ville d\'arrivée. Suites d\'architecte, vols directs quotidiens depuis les grands hubs.',
      copy: [
        'Rovaniemi est la capitale régionale de la Laponie et la destination aurorale la plus facile d\'accès, plusieurs vols directs quotidiens depuis Helsinki, ainsi que des vols directs saisonniers depuis Londres, Francfort, Paris, Vienne et le Golfe. L\'aéroport est à six minutes du centre-ville.',
        'L\'offre de luxe s\'articule ici autour de suites d\'architecte à moins de dix minutes de l\'aéroport (Arctic TreeHouse, Apukka). Les transferts en hélicoptère de l\'aéroport vers les réserves isolées sont courants.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, suites en porte-à-faux conçues par Studio Puisto',
        'Apukka Resort, wagons auroraux patrimoniaux sur le lac Apukkajärvi',
        'Vols directs depuis Londres / Francfort / Vienne / Doha (saisonniers)',
      ],
      arrival: 'Rovaniemi (RVN), 6 min du centre-ville',
      auroraNote: 'Latitude aurorale plus basse qu\'Inari/Saariselkä mais toujours ~150 nuits aurorales à ciel dégagé. À combiner idéalement avec au moins une nuit en village de fjell.',
    },
    'levi': {
      position: 'La première station de ski de Finlande. Chalets de luxe sur le versant sud, ski-in / ski-out depuis la télécabine de Levi.',
      copy: [
        'Levi est la station de fjell la plus développée de Laponie, un véritable village de sports d\'hiver avec 43 remontées, plusieurs cuisines recommandées par le Michelin et un marché de location de chalets de designer devenu sérieux au cours de la dernière décennie. La télécabine relie le centre du village au sommet ; c\'est sur le versant sud que se trouvent les chalets privés.',
        'La visibilité des aurores depuis Levi est orientée sud et spectaculaire, chose rare en Laponie, puisque la ligne d\'horizon illuminée du village fait partie de la photographie. À combiner idéalement avec une ou deux nuits plus au nord (Inari ou Saariselkä) pour de vraies aurores sauvages avant de revenir ici pour le ski.',
      ],
      highlights: [
        'Levin Iglut, igloos de verre orientés sud au-dessus du village de fjell',
        'Chalets d\'architecte de designer, versant sud, ski-in/out',
        '43 remontées, piste la plus longue de 2,5 km, saison nov.–mai',
        'L\'aéroport de Kittilä (KTT) accueille des vols intl. directs saisonniers',
      ],
      arrival: 'Kittilä (KTT), 20 min en transfert privé',
      auroraNote: 'Panorama auroral orienté sud (rare). ~150 nuits à ciel dégagé, mais le village illuminé offre une composition d\'avant-plan peu commune plus au nord.',
    },
    'yllas': {
      position: 'L\'alternative paisible à Levi. Parc national de Pallas-Yllästunturi, moins de foule, forêt plus profonde.',
      copy: [
        'Ylläs est la deuxième plus grande station de fjell de Finlande mais paraît cinq fois plus petite, le village est réparti sur deux agglomérations (Äkäslompolo et Ylläsjärvi), séparées par 15 km de fjell, avec le parc national de Pallas-Yllästunturi entre elles. L\'offre de ski égale celle de Levi ; pas la densité de visiteurs.',
        'Pour le voyage de luxe, l\'attrait tient à l\'espace. Les chalets d\'architecte y sont isolés à flanc de fjell ; les sentiers du parc national partent de la propriété ; le silence est ce pour quoi les gens paient réellement. La visibilité des aurores est excellente grâce à une pollution lumineuse locale très faible.',
      ],
      highlights: [
        'Parc national de Pallas-Yllästunturi, le 3e plus grand de Finlande',
        'Deux villages de ski de part et d\'autre du fjell d\'Ylläs',
        'Pollution lumineuse plus faible que toute autre station de ski',
        'Pistes de ski de fond dédiées (250 km au total)',
      ],
      arrival: 'Kittilä (KTT), 50 min en transfert privé',
      auroraNote: 'À l\'intérieur des limites du parc national, parmi les relevés de pollution lumineuse les plus faibles d\'Europe continentale. ~180 nuits à ciel dégagé.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Un seul guide, votre groupe et un véhicule photo chauffé qui suit la prévision où qu\'elle pointe.',
      copy: [
        'Une chasse aux aurores privée de six heures avec un guide finlandais certifié en photographie de nature. Le véhicule est chauffé et équipé ; trépieds, déclencheurs souples et appareils photo adaptés à l\'arctique sont prêtés si vous n\'apportez pas les vôtres. L\'itinéraire est décidé l\'après-midi même selon l\'indice Kp et la prévision de couverture nuageuse.',
        'Repas chaud et peaux de renne au sol sont fournis de série. Le coaching porte sur l\'exposition de l\'aurore elle-même, la composition du premier plan et le post-traitement le soir même.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, sept.–avr.',
    },
    'helicopter-aurora-flight': {
      hook: 'Un vol de nuit en hélicoptère de 45 minutes au-dessus de la couche nuageuse, jusqu\'aux aurores elles-mêmes.',
      copy: [
        'Opéré par le seul exploitant d\'hélicoptères de Finlande certifié pour le vol de nuit VFR, au départ de Rovaniemi et d\'Ivalo. Le vol franchit la couche nuageuse locale et tourne à l\'intérieur de l\'ovale auroral actif, une perspective impossible depuis le sol.',
        'La photographie au sol est incluse de part et d\'autre du vol ; la partie en vol est consacrée à l\'expérience elle-même, pas à l\'appareil photo. Maximum quatre passagers par AS350. Tributaire d\'une fenêtre météo, le concierge suit la prévision et prévient la veille.',
      ],
      available: 'Rovaniemi, Ivalo, oct.–mars (selon météo)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Un menu dégustation finno-sami de neuf services, cuisiné dans la cuisine de votre villa par un chef lapon en activité.',
      copy: [
        'Un chef en activité issu de l\'une des cuisines sérieuses de Laponie, Nili, Aanaar, Northern Lights Ranch, vient dans votre villa pour une soirée. Le menu se construit autour de ce qui est réellement de saison cette semaine-là : omble chevalier d\'eau froide, mûre arctique, renne fumé, champignons des bois frais, argousier, genièvre.',
        'Comprend un accord mets-vins composé pour le menu, les ingrédients, la préparation, le service et le nettoyage. Maximum dix convives. Menus végétarien, sans gluten et sans crustacés sur demande, avec un préavis d\'au moins 72 heures.',
      ],
      available: 'Toute villa de la collection, toute l\'année',
    },
    'private-husky-safari': {
      hook: 'Votre propre attelage, votre propre guide de chenil, dans la forêt boréale aux premières lueurs.',
      copy: [
        'Un attelage privé de seize chiens de traîneau et un guide de chenil. L\'itinéraire emprunte le réseau de pistes de travail d\'un chenil de traîneau sérieux, généralement 35 km, avec une pause au coin du feu pour un jus d\'airelle chaud et une saucisse grillée à mi-parcours.',
        'Vous conduisez votre propre traîneau (un briefing de 20 minutes d\'abord). Combinaisons en laine, moufles et bottes arctiques fournies. Groupe de deux à six, pas de groupes partagés, jamais réuni avec des inconnus.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, déc.–avr.',
    },
    'private-snowmobile-wilderness': {
      hook: 'Un itinéraire guidé en motoneige de 80 km à travers lacs gelés et forêt vierge, avec un déjeuner cuit au feu de bois.',
      copy: [
        'Un itinéraire guidé en motoneige d\'une journée complète sur les pistes des hauts fjells, le réseau qu\'utilisent les guides locaux, pas la boucle touristique. Le déjeuner est cuisiné au feu sur la piste (ragoût de renne, pain cuit au feu, jus chaud) par le guide.',
        'Machines BRP, casques, cagoules et combinaisons en laine inclus. Motoneiges biplaces disponibles. Permis de conduire requis pour le pilote ; la place passager n\'en demande aucun. Maximum quatre motoneiges par groupe.',
      ],
      available: 'Saariselkä, Inari, Levi, déc.–avr.',
    },
    'private-reindeer-sami-evening': {
      hook: 'Traîneau à rennes sur une ferme en activité, puis une soirée dans une kota privée avec un hôte sami.',
      copy: [
        'Deux heures de traîneau à rennes sur une ferme d\'élevage en activité, suivies d\'une soirée privée dans une kota chauffée (tipi à feu ouvert). L\'hôte est un éleveur de rennes sami qui dirige la ferme, la conversation, et non un script, est l\'expérience.',
        'Le dîner est du renne sauté avec purée de pommes de terre et airelles, préparé au feu ouvert. Des récits sur le troupeau, l\'année de transhumance et la tradition du chant joik. Maximum douze convives.',
      ],
      available: 'Inari, Saariselkä, toute l\'année (traîneau déc.–mars)',
    },
    'private-jet-arrival': {
      hook: 'Transfert direct en jet privé vers Ivalo, Kittilä ou Rovaniemi, pas d\'enregistrement commercial, pas de hub de correspondance.',
      copy: [
        'Coordonné avec nos partenaires jet à Helsinki, Genève et Doha. Vols directs vers Ivalo (le plus proche des villas de Saariselkä / Inari), Kittilä (le plus proche des villas de Levi / Ylläs) ou Rovaniemi (idéal pour l\'Arctic TreeHouse).',
        'Prise en charge complète : transfert terrestre vers votre villa dans un véhicule chauffé de spécification arctique, bagages acheminés, douane franchie sans file d\'attente. Le concierge dépose le créneau et accorde l\'arrivée à l\'heure d\'enregistrement de la villa.',
      ],
      available: 'Toutes les destinations, toute l\'année',
    },
    'helicopter-villa-transfer': {
      hook: 'Prise en charge depuis l\'aéroport régional directement vers l\'hélisurface de votre villa, sans transfert routier.',
      copy: [
        'Utilisé le plus souvent pour les arrivées vers les domaines en rondins privés au bord du lac Inari. L\'appareil est le même AS350 que celui des vols auroraux ; un seul secteur prend 20 à 45 minutes.',
        'Maximum cinq passagers + bagages. Le concierge accorde la prise en charge à l\'enregistrement de la villa et à la fenêtre de lumière du jour, au cœur de l\'hiver, le soleil se couche dès 15 h.',
      ],
      available: 'Rovaniemi, Ivalo → domaines du lac Inari',
    },
  },
};

export default overlay;
