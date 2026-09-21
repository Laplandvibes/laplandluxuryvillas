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
      tagline: 'Suite en porte-à-faux signée Studio Puisto, à la façade entièrement vitrée orientée vers les aurores.',
      copy: [
        'Une suite penthouse de 73 m² sur pilotis, dont le verre court du sol au plafond sur toute la largeur. Conçue par Studio Puisto. Terrasse privée avec bain nordique. Le bâtiment a été édifié autour d\'un seul pin, chaque détail intérieur a été choisi pour s\'effacer, afin que la forêt reste le seul objet de la pièce.',
        'À cinq minutes du Village du Père Noël, une base utile pour les familles voyageant en période de Noël, qui veulent une retraite paisible la nuit et un accès facile à Rovaniemi le jour.',
      ],
      signature: [
        'Suite de 73 m², façade entièrement vitrée orientée nord',
        'Terrasse privée avec bain nordique + sauna extérieur',
        'Intérieur Studio Puisto, icônes du design finlandais partout',
        'Plancher chauffant, rideaux occultants pour le sommeil diurne',
        'Restaurant Rakas sur place',
        'Cinq minutes du Village du Père Noël',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Vingt-quatre cabanes de verre face à rien d\'autre que la forêt et l\'ovale auroral.',
      copy: [
        'Inari se situe précisément sous l\'ovale auroral, à la latitude où l\'Institut météorologique finlandais observe l\'aurore environ trois nuits sur quatre. Aurora Village est un domaine de 24 cabanes, sans circulation de passage ni village voisin sur l\'horizon visible. Les cabanes sont espacées pour l\'intimité, le lit placé sous le verre et le canapé face à lui.',
        'Le restaurant du domaine, dirigé par les Samis, propose un menu dégustation autour du renne, de l\'omble chevalier et de la mûre arctique. Les alertes aurores se transmettent de cabane en cabane par radio, afin que personne ne réveille la villa voisine.',
      ],
      signature: [
        'Cabane au toit de verre, lit placé sous l\'apex',
        '24 cabanes sur un domaine de 30 hectares, généreusement espacées',
        'Restaurant dirigé par les Samis sur place, menu dégustation chaque soir',
        'Alerte aurores par radio en cabane',
        'Aurore environ 3 nuits sur 4 à cette latitude (institut météo finlandais)',
        'Sentier privé de raquette gratuit au départ de la propriété',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Igloos de verre perchés au-dessus du fjäll de Levi, le seul ensemble d\'igloos de Laponie tourné au sud, vers la vallée.',
      copy: [
        'Quarante-deux igloos de verre disposés sur le flanc sud du fjäll de Levi. La plupart des cabanes aurorales pointent vers le nord, sur une forêt sans relief ; Levin Iglut est l\'une des très rares à cadrer les lumières au-dessus de la ligne d\'horizon illuminée du village de fjäll en contrebas, meilleur pour les photographes, plus spectaculaire au crépuscule.',
        'À distance de marche du village de Levi (télécabine, restaurants, ski-in/ski-out), mais les igloos eux-mêmes restent paisibles. Restaurant Aurora sur place, le chef s\'approvisionnant dans un rayon de 100 km.',
      ],
      signature: [
        'Panorama auroral orienté sud (rare en Laponie)',
        'À distance de marche de la télécabine et du village de Levi',
        'Restaurant Aurora sur place, rayon d\'approvisionnement de 100 km',
        'Les suites premium disposent d\'un bain nordique privé sur la terrasse',
        'Accès ski-in / ski-out en saison hivernale',
        'Alerte aurores en chambre',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Une suite-bulle de verre à la lisière de la forêt boréale, à vingt minutes de la frontière russe.',
      copy: [
        'Nellim est un véritable village sauvage (220 habitants) sur la rive est du lac Inari. Les bulles aurorales sont à l\'écart du lodge principal, dans leur propre clairière, chacune coiffée d\'un dôme transparent panoramique au-dessus du lit et dotée d\'un bain nordique au feu de bois sur le porche.',
        'Le lodge organise des soirées culturelles samies, la pêche sur glace sur le lac et l\'un des rares programmes guidés certifiés de photographie d\'aurores en Finlande. Les chambres se réservent un an à l\'avance pour le pic de février.',
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
      tagline: 'Une suite aux parois de verre au sommet du fjäll de Kaunispää, au-dessus de la limite des arbres et des lumières du village.',
      copy: [
        'Star Arctic se dresse tout en haut de Kaunispää, le fjäll qui s\'élève directement depuis le village de Saariselkä. Les suites Skyview disposent de parois de verre toute hauteur sur trois côtés, sans rideaux, et d\'une altitude suffisante pour dépasser la cime des arbres, soit un véritable panorama à 270° depuis le lit.',
        'La route du sommet est privée et éclairée la nuit, les hôtes peuvent donc conduire eux-mêmes. L\'hôtel possède son propre observatoire, son restaurant et une flotte de fat-bikes pour l\'été.',
      ],
      signature: [
        'Verre à 270° au sommet, au-dessus de la limite des arbres',
        'Route privée jusqu\'au sommet, éclairée la nuit',
        'Observatoire à ciel noir sur place (soirées télescope)',
        'Sauna avec vue sur le fjäll du sol au plafond',
        'Suites premium, verre d\'angle, salon séparé',
        'Cinq minutes en voiture du village de Saariselkä',
      ],
    },
    'lapland-hotels-saaga-apartment': {
      tagline: 'Un appartement indépendant au pied des pentes sud du Ylläs, avec le spa de l’hôtel derrière.',
      copy: [
        'Le Lapland Hotels Saaga se trouve au village de Ylläsjärvi, juste sous les pentes sud du domaine de Ylläs. Outre ses chambres, il loue des appartements pour une à huit personnes, sur le terrain de l’hôtel ou à environ 300 mètres du bâtiment principal, de sorte qu’une famille ou un petit groupe dispose de son propre espace sans quitter la station.',
        'Derrière les appartements, il y a tout l’hôtel : un spa avec espace piscine, bains à remous et saunas vapeur, une salle de fitness et des soins, ainsi qu’un sauna privé pouvant accueillir quinze personnes avec son propre espace de détente. Trois restaurants sont sur place, dont le buffet Biegga, et le petit-déjeuner s’appuie sur des produits du Nord.',
      ],
      signature: [
        'Village de Ylläsjärvi, sous les pentes sud du Ylläs',
        'Appartements pour 1 à 8 personnes',
        'Sur le terrain de l’hôtel ou à environ 300 m du bâtiment principal',
        'Spa : espace piscine, bains à remous, saunas vapeur, fitness',
        'Sauna privé jusqu’à 15 personnes avec espace de détente',
        'Trois restaurants sur place, dont le buffet Biegga',
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
        'Alerte aurores + bain nordique attenant à la cabane',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Le pôle aurores de luxe du nord de la Finlande, Kakslauttanen, Star Arctic, la frange sauvage d\'Urho Kekkonen.',
      copy: [
        'Saariselkä se trouve à la lisière nord du parc national d\'Urho Kekkonen, le deuxième plus grand parc national de Finlande avec 2 550 km², et c\'est le village qui a défini l\'hébergement auroral au toit de verre. La plupart des cabanes de verre les plus connues du pays (Kakslauttanen, Star Arctic, Northern Lights Village) se situent à moins de 10 km du village.',
        'Le village lui-même est petit et facile à parcourir à pied : une rue principale, trois bons restaurants et un accès direct au parc national. L\'aéroport d\'Ivalo est à 27 km, soit environ une demi-heure en transfert privé, et il accueille aussi bien les vols réguliers que les charters privés.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, la propriété au toit de verre originelle',
        'Star Arctic Hotel, suites de sommet sur le fjäll de Kaunispää',
        'Accès direct au parc national d\'Urho Kekkonen (de niveau nature sauvage)',
        'Aéroport d\'Ivalo, capable d\'accueillir des charters privés, 30 min de transfert',
      ],
      arrival: 'Ivalo (IVL), 27 km, environ 30 min en transfert privé',
      auroraNote: 'Forêt boréale intérieure, sans aucune lumière d\'habitation sur des dizaines de kilomètres dans toutes les directions. Les fjälls offrent un horizon haut et dégagé, ce qui compte les nuits où l\'arc reste bas sur le nord.',
    },
    'inari': {
      position: 'Notre destination la plus septentrionale, où les aurores sont observées environ trois nuits sur quatre. Cœur sami, lac Inari, ciels noirs.',
      copy: [
        'Inari est la plus vaste commune de Finlande et la capitale culturelle des Samis finlandais. Le village est situé sur le lac Inari, le troisième plus grand lac de Finlande, avec quelque 3 000 îles, à plus de 200 km au nord du cercle polaire et sans aucune lumière urbaine sur l\'horizon.',
        'Pour le voyage de luxe, cela signifie deux choses. D\'abord : à cette latitude, l\'Institut météorologique finlandais observe les aurores environ trois nuits sur quatre, et elles se tiennent à la verticale plutôt que basses sur le nord. Ensuite : les domaines en rondins au bord du lac comptent parmi les hébergements les plus paisibles de Laponie : sans circulation de passage, sans village voisin sur l\'horizon visible.',
      ],
      highlights: [
        'Aurora Village, domaine de cabanes de verre de 30 hectares conçu à dessein',
        'Wilderness Hotel Nellim, bulles aurorales sur la rive est du lac Inari',
        'Musée sami SIIDA + programmes culturels toute l\'année',
        'Lac Inari, troisième plus grand lac de Finlande, environ 3 000 îles',
      ],
      arrival: 'Ivalo (IVL), 40 km, environ 40 min en transfert privé',
      auroraNote: 'Notre destination la plus septentrionale, et celle où l\'aurore se tient le plus souvent à la verticale plutôt que basse sur le nord. Le lac Inari offre un horizon ininterrompu, sans lumière de village dessus.',
    },
    'rovaniemi': {
      position: 'La ville d\'arrivée. Suites d\'architecte, vols directs quotidiens depuis les grands hubs.',
      copy: [
        'Rovaniemi est la capitale régionale de la Laponie et la destination aurorale la plus facile d\'accès, plusieurs vols directs quotidiens depuis Helsinki, ainsi que des vols directs saisonniers depuis Londres, Francfort, Paris, Vienne et le Golfe. L\'aéroport est à environ 10 km au nord du centre-ville, dix à quinze minutes en voiture.',
        'L\'offre de luxe s\'articule ici autour de suites d\'architecte à moins de dix minutes de l\'aéroport (Arctic TreeHouse, Apukka).',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, suites en porte-à-faux conçues par Studio Puisto',
        'Apukka Resort, wagons auroraux patrimoniaux sur le lac Apukkajärvi',
        'Vols directs depuis Londres / Francfort / Vienne / Doha (saisonniers)',
      ],
      arrival: 'Rovaniemi (RVN), 10 km, 10 à 15 min du centre-ville',
      auroraNote: 'Notre destination la plus méridionale et la seule dont l\'horizon porte les lumières d\'une ville, si bien que l\'aurore y est à la fois moins fréquente et plus difficile à voir. À combiner avec au moins une nuit dans un village de fjäll plus au nord.',
    },
    'levi': {
      position: 'La première station de ski de Finlande. Chalets de luxe sur le versant sud, ski-in / ski-out depuis la télécabine de Levi.',
      copy: [
        'Levi est la station de fjäll la plus développée de Laponie, un véritable village de sports d\'hiver avec 44 pistes et 26 remontées, dont deux télécabines. Le marché de la location de chalets de designer y est devenu sérieux au cours de la dernière décennie. La télécabine relie le centre du village au sommet à 531 mètres ; c\'est sur le versant sud que se trouvent les chalets privés, et un nouveau télésiège y ouvre pour la saison 2026-2027.',
        'La visibilité des aurores depuis Levi est orientée sud, chose rare en Laponie, de sorte que la ligne d\'horizon illuminée du village fait partie de la photographie. À combiner idéalement avec une ou deux nuits plus au nord (Inari ou Saariselkä) pour de vraies aurores sauvages avant de revenir ici pour le ski.',
      ],
      highlights: [
        'Levin Iglut, igloos de verre orientés sud au-dessus du village de fjäll',
        'Chalets d\'architecte de designer, versant sud, ski-in/out',
        '44 pistes, 26 remontées (deux télécabines), 38,5 km de piste damée',
        'L\'aéroport de Kittilä (KTT) accueille des vols internationaux directs saisonniers',
      ],
      arrival: 'Kittilä (KTT), 15 km, environ 20 min en transfert privé',
      auroraNote: 'Un panorama orienté sud, chose rare en Laponie : le village de fjäll illuminé devient le premier plan de la photo. La contrepartie est cette lumière même, et la vue la plus sombre se trouve donc à quelques minutes de voiture.',
    },
    'yllas': {
      position: 'L\'alternative paisible à Levi. Parc national de Pallas-Yllästunturi, moins de foule, forêt plus profonde.',
      copy: [
        'Ylläs compte 62 pistes, plus que tout autre domaine skiable de Finlande, et les plus longues descentes du pays : plus de trois kilomètres depuis le sommet dénudé à 719 mètres jusqu\'à la vallée. La station paraît pourtant une fraction de Levi, car le village est réparti sur deux agglomérations (Äkäslompolo et Ylläsjärvi), séparées par 15 km de fjäll et par le parc national de Pallas-Yllästunturi.',
        'Pour le voyage de luxe, l\'attrait tient à l\'espace. Les chalets d\'architecte y sont isolés à flanc de fjäll, les sentiers du parc national partent de la propriété, et le silence est ce pour quoi les gens paient réellement. La visibilité des aurores y est excellente grâce à la très faible pollution lumineuse locale.',
      ],
      highlights: [
        'Parc national de Pallas-Yllästunturi, le 3e plus grand de Finlande',
        'Deux villages de ski de part et d\'autre du fjäll d\'Ylläs',
        'À la lisière du parc national, sans lumière de station côté fjäll',
        'Environ 300 km de pistes de fond entretenues, plus de 30 km éclairés',
      ],
      arrival: 'Kittilä (KTT), 40 km, environ 45 min en transfert privé',
      auroraNote: 'Les chalets sont adossés au parc national plutôt qu\'au cœur d\'une station, on sort donc directement dans le noir au lieu de rouler pour le trouver.',
    },
  },
  experiences: {
  },
};

export default overlay;
