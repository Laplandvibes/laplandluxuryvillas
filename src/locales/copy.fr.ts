import type { SiteCopy } from './types'

// 🔴 Yksi kerros (23.9.2026). Tassa tiedostossa oli literaalin JALKEEN toinen
// kerros (25 Object.assign- ja fr.x = ... -lausetta), joka voitti ajossa aina:
// ylemman kerroksen muokkaus ei nakynyt sivulla (ansa osui kolmesti), ja
// prerenderoija, joka poimii merkkijonot TIEDOSTOSTA, tulosti samasta kappaleesta
// kaksi eri kaannosta hakukoneversioon. Kerrokset yhdistettiin koneellisesti ja
// lopullinen objekti todettiin identtiseksi. Muokkaa vain alla olevaa literaalia.

const fr: SiteCopy = {
  nav: {
    villas: 'Villas', suites: 'Suites', destinations: 'Destinations', experiences: 'Expériences',
    midnightSun: 'Soleil de minuit', about: 'À propos', privateInquiry: 'Demande privée',
    openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
  },
  cta: {
    browseCollection: 'Voir les villas',
    beginPrivateInquiry: 'Démarrer une demande privée',
    fullCollection: 'Toutes les villas',
    readProfile: 'Lire le profil',
    inquire: 'Demander',
    viewRates: 'Voir les tarifs',
    viewOptions: 'Voir les options',
    nearbyStays: "Toutes les dates et d’autres hébergements à proximité",
    prevPhoto: "Photo précédente",
    nextPhoto: "Photo suivante",
    viewPublicRates: 'Voir les tarifs publics',
    orSendPrivateInquiry: 'Ou envoyez une demande privée',
    seeTheCollection: 'Voir les villas',
    inquireAboutJune: 'Consulter les dates de juin',
    inquireAboutJuneShort: 'Dates de juin',
    seeSummerCollection: 'Voir la collection estivale',
    fullVillaCollection: 'Collection complète des villas',
    sendPrivateInquiry: 'Envoyer une demande privée',
    sendAnother: 'Envoyer une autre demande',
    home: 'Accueil',
    theCollection: 'La collection',
    sending: 'Envoi…',
    subscribe: 'S\'abonner',
    subscribed: 'Abonné',
  },
  badges: {
    onRequest: 'Sur demande',
    fromPerNight: 'À partir de / nuit',
    fromPerPerson: 'À partir de / personne',
    fromPerGroup: 'À partir de / groupe',
    rate: 'Tarif',
    bedroom: 'chambre',
    bedrooms: 'chambres',
    sleeps: 'Capacité',
    arrival: 'Arrivée',
    aurora: 'Aurore',
    highlights: 'Points forts',
    villas: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
    villasIn: (name: string) => `Villas à ${name}`,
    villasInH2: (n: number, _name: string) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
    alsoInCollection: 'Également dans la collection',
    threeOthers: 'Trois autres villas à considérer.',
    signatureDetails: 'Détails signature',
    sixVerifyOnArrival: 'Six choses à vérifier à l\'arrivée.',
    theDestination: 'La destination',
    fullCollectionShort: 'Collection complète',
  },
  editorial: {
    pickLabel: 'Choix de la rédaction',
    pickReason: 'La meilleure note Google de cette page',
    ratingLine: 'Google {r} · {n} avis',
    ratingAria: 'Ouvrir les avis Google dans un nouvel onglet',
    verifiedOn: 'Vérifié le {d}',
    ratingScope: 'La note concerne l\'ensemble de l\'établissement, {p}',
  },
  photo: {
    "credit": "Photo",
    "inPicture": "Sur la photo : {what}",
    "cropped": "recadrée",
    "nellim": "Le village de Nellim au bord du lac Inari, et non l’hôtel lui-même",
    "nellimLake": "L’aurore au-dessus du lac Inari, pas l’hôtel lui-même",
    "heroWinter": "Aurore boréale au-dessus d’un lodge éclairé à Saariselkä, février 2019"
  },
  tier: {
    signature: 'Signature',
    private: 'Collection privée',
    reserve: 'Réserve · Sur demande uniquement',
  },
  category: {
    'glass-roof': 'Villa à toit de verre',
    'log-estate': 'Propriété privée en rondins',
    'designer-suite': 'Suite design',
    'alpine-chalet': 'Chalet alpin',
    'lakeside-retreat': 'Retraite au bord du lac',
  },
  inquiry: {
    eyebrow: 'Demande privée',
    defaultTitle: 'Une façon plus discrète de planifier un voyage en Laponie.',
    defaultBody: 'Envoyez un seul message, préférences, dates, nombre de voyageurs, et vous recevez une présélection privée en un jour ouvré. Pas de profil public, pas de calendriers partagés.',
    inquireBtn: 'Demande privée',
    emailLabel: 'private@laplandvibes.com',
    badges: { anonymous: 'Planification anonyme', reply: 'Réponse en un jour ouvré', rates: 'Lien vers la réservation de la maison' },
  },
  midnightSunBand: {
    eyebrow: '6 juin – 7 juillet',
    h2: 'Les villas, en un été de lumière ininterrompue.',
    body: 'Même architecture, autre saison. Le toit de verre devient une lucarne sur un soleil qui ne se couche jamais, le lac dégèle, la forêt se remplit de mûres arctiques. L\'été est la saison calme de la Laponie, et ce sont les mêmes maisons. Le tarif est indiqué sur la page de réservation de chaque maison.',
    primary: 'Voir la collection estivale',
    secondary: 'Consulter les dates de juin',
  },
  newsletter: {
    eyebrow: 'La newsletter #LaplandVibes',
    h2: 'Une dépêche discrète lorsque les villas ouvrent de nouvelles dates et que nous entendons parler d\'une remise privée.',
    lede: 'Des dates qui se libèrent. Des maisons qui méritent un coup d\'œil. Prévisions de fenêtres d\'aurore la semaine précédant chaque nouvelle lune. Pas de spam, rédigée en Finlande, envoyée uniquement quand il y a quelque chose de spécifique à dire.',
    emailPlaceholder: 'votre@email.com',
    footnote: 'Désabonnement en un clic.',
    welcome: 'Bienvenue à bord. La première dépêche arrive dans la semaine.',
    already: 'Vous êtes déjà sur la liste, rendez-vous dans la prochaine dépêche.',
    invalidEmail: 'Cette adresse e-mail semble invalide.',
    networkError: 'Erreur réseau. Veuillez réessayer.',
    genericError: 'Quelque chose s\'est mal passé. Réessayez dans un instant.',
  },
  affiliateDisclosure: {
    compact: 'Liens d\'affiliation, nous percevons une petite commission sans coût supplémentaire pour vous.',
    full: 'Cette page contient des liens d\'affiliation. Si vous réservez via ces liens, LaplandLuxuryVillas peut percevoir une commission sans coût supplémentaire pour vous.',
  },
  hero: {
    home: {
      eyebrow: '{nFig} villas · {mFig} destinations',
      title: 'Une villa en Laponie, sans approximation.',
      lede: "{n} villas à toit de verre et suites design dans {m} destinations de Laponie. L’aurore derrière le verre, vue depuis le lit. Donnez vos dates, la sélection suit sous un jour.",
      primary: 'Voir les villas',
      secondary: 'Demander des suggestions',
    },
    villas: {
      eyebrow: 'Les villas',
      title: '{n} villas. {m} destinations. Un message suffit.',
      lede: 'Chaque propriété listée ci-dessous est vérifiée à partir des informations publiées par l\'exploitant et d\'avis récents de voyageurs. Filtrez par type d\'édifice que vous avez en tête, ou envoyez une demande privée et nous composerons une présélection autour de vos dates.',
    },
    suites: { eyebrow: 'Suites design', title: 'Quand vous n\'avez pas besoin d\'une villa, mais bien du toit de verre.', lede: 'Une courte liste de suites une-chambre et de cabines à aurore où l\'architecture est l\'expérience. Effectif réduit, même plafond panoramique.' },
    destinations: { eyebrow: 'Destinations', title: 'Saariselkä, Inari, Rovaniemi, Levi et Ylläs.', lede: 'La Laponie n\'est pas interchangeable. La fréquence d\'aurore, la logistique d\'arrivée et la densité d\'hébergement changent de façon significative tous les 50 km au nord du cercle polaire.' },
    experiences: { eyebrow: 'Expériences sur mesure', title: 'Aurores, nature sauvage et autres sorties privées.', lede: 'Chaque sortie ici est privée et se réserve sur la page de l\'organisateur. Le prix et les dates libres y figurent avant tout engagement.' },
    midnightSun: {
      eyebrow: '6 juin – 7 juillet',
      title: 'La fenêtre où le soleil ne se couche pas.',
      lede: 'Les mêmes villas, à la saison du soleil de minuit, moins de voyageurs, une lumière infinie et douce.',
      primary: 'Demander les dates de juin', secondary: 'Voir les villas',
    },
    inquiry: { eyebrow: 'Demande privée', title: 'Un message privé, une présélection sur mesure.', lede: 'Envoyez dates, effectif et le type de voyage envisagé. Nous répondons en un jour ouvré.' },
    about: { eyebrow: 'À propos', title: 'Qui est derrière ce site, et ce que nous ne faisons pas.', lede: 'Huit villas et suites choisies à la main en Laponie finlandaise, demande anonyme, un lien direct vers la réservation de chaque maison, aucune plateforme intermédiaire.' },
  },
  home: {
    packages: {
      "eyebrow": "Semaines toutes prêtes",
      "h2": "Trois semaines en Laponie, planifiées jusqu’à la dernière soirée.",
      "lede": "Choisissez la villa, ajoutez la voiture prise à l’aéroport et réservez la seule soirée qui doit être réussie. Chaque lien ci-dessous mène à la page de réservation du partenaire, prix affiché.",
      "season": "Saison",
      "stay": "Où vous dormez",
      "car": "Comment vous circulez",
      "night": "La soirée à réserver à l’avance",
      "home": "Ce qui rentre à la maison avec vous",
      "homeLede": "La table à laquelle vous avez mangé pendant une semaine : Iittala, Marimekko et Kosta Boda dans une seule boutique nordique.",
      "carFrom": "Voiture de location {airport}, retrait au terminal",
      "ctaCar": "Voir les tarifs des voitures",
      "ctaNight": "Voir l’excursion",
      "ctaNightInquiry": "Envoyer une demande",
      "items": [
        {
          "title": "Une semaine d’aurores au-dessus de Saariselkä",
          "season": "De septembre à mars",
          "airport": "depuis l’aéroport d’Ivalo",
          "story": [
            "Les prévisions annoncent un ciel dégagé. Vous êtes dans la Skyview Suite depuis l’après-midi, le sauna est encore chaud et le ciel au-dessus de Kaunispää a pris ce bleu dur et sombre qu’il prend avant l’arrivée des lumières. Le lit fait face à la paroi de verre : l’attente se passe allongé.",
            "L’aéroport d’Ivalo est à une demi-heure de route environ, et c’est précisément pour cela que la voiture compte : les meilleurs endroits à aurores autour de Saariselkä sont hors des lignes de bus, et une voiture chauffée, moteur tournant, est le plus chaud des affûts. La soirée photo privée est la seule chose à réserver avant de prendre l’avion ; le guide choisit la direction l’après-midi même, d’après la carte des nuages."
          ],
          "night": "Soirée privée de photographie des aurores avec un guide"
        },
        {
          "title": "Semaine de Noël à Rovaniemi, silencieuse une fois la nuit tombée",
          "season": "De décembre à janvier",
          "airport": "depuis l’aéroport de Rovaniemi",
          "story": [
            "À cinq minutes du Village du Père Noël, et dès que le dernier lutin est rentré chez lui, la forêt autour de l’Arctic TreeHouse se tait. La paroi de verre de la suite est orientée au nord ; le bain nordique se trouve sur la terrasse, juste devant. Les enfants endormis dans la chambre, les parents sur la terrasse : voilà la semaine de Rovaniemi qui fonctionne.",
            "L’aéroport de Rovaniemi est à quelques minutes de voiture, et la voiture transforme la région en excursions à la journée : la piste de ski d’Ounasvaara, la rivière, le parc animalier de Ranua à une heure au sud. Pour la seule soirée qui doit être parfaite, un chef privé prépare un menu dégustation arctique dans la suite."
          ],
          "night": "Chef privé et menu dégustation arctique dans la suite"
        },
        {
          "title": "Soleil de minuit : Kakslauttanen et le lac Inari",
          "season": "Juin",
          "airport": "depuis l’aéroport d’Ivalo",
          "story": [
            "En juin, le soleil ne se couche pas à Kakslauttanen, et la villa en pin kelo avec la chambre de verre devient une autre maison : le toit qui encadre les aurores en hiver encadre maintenant un ciel encore clair à deux heures du matin. Le parc national Urho Kekkonen est à une courte distance en voiture.",
            "Le lac Inari est à une heure de route vers le nord, et la croisière privée en bateau avec feu de camp est la soirée à réserver : c’est le troisième lac de Finlande par la taille, et la plus grande partie de ses rives n’a pas de route. De retour à la villa, le sauna et le bain nordique fonctionnent exactement comme en février."
          ],
          "night": "Croisière privée en bateau sur le lac Inari avec feu de camp"
        }
      ]
    },
    philosophy: { eyebrow: 'Notre façon de travailler', h2: 'L\'opposé d\'une plateforme de réservation.',
    items: [
      { title: 'Une liste courte, pas un annuaire.', body: 'Huit villas et suites dans les destinations qui justifient réellement le voyage. Les propriétés sont plus souvent refusées qu\'ajoutées, chaque entrée de cette page est une que le voyageur attentionné peut réserver sans hésitation.' },
      { title: 'Planification anonyme.', body: 'Une seule boîte de réception privée, aucun profil public, aucun calendrier partagé avec des tiers. Envoyez dates, effectif et préférences, recevez une présélection en un jour ouvré.' },
      { title: 'Tarifs directs, là où ils existent.', body: 'Les annonces publiques renvoient vers des tarifs vérifiés. Lorsqu’aucun tarif n’est publié, c’est la maison qui le donne. Nous ne fixons pas les prix et ne prenons pas de réservations.' },
    ] },
    signature: { eyebrow: "Nos quatre choix", h2: 'Les quatre que nous recommandons le plus souvent.', lede: 'Les propriétés les plus souvent recommandées. Chaque détail ci-dessous est vérifié à partir des informations de l\'exploitant et d\'avis récents, jamais copié d\'une brochure.' },
    destinations: { eyebrow: 'Destinations', h2: 'Cinq lieux, chacun avec une raison claire.' },
  },
  villasPage: {
    leadTitle: 'Ce que contient cette sélection',
    leadP1: 'Huit chambres, pas huit hôtels. Chaque entrée ici est un type de chambre précis à l\'intérieur d\'un établissement réel : une cabane à toit de verre à Kakslauttanen, une suite en porte-à-faux à l\'Arctic TreeHouse, une bulle aurores sur le lac Inari. C\'est l\'unité que vous réservez vraiment, donc c\'est celle que nous listons.',
    leadP2: 'Les notes de ce site viennent de Google et portent sur l\'établissement entier, jamais sur la chambre seule, et chaque fiche le précise. La sélection est courte à dessein : cinq destinations et quatre types de construction, du toit de verre au chalet alpin, et elle s\'arrête là plutôt que de gonfler la liste.',
    filters: { all: 'Toutes', glassRoof: 'Toit de verre', logEstate: 'Rondins', designerSuite: 'Suite design', alpineChalet: 'Chalet alpin', lakeside: 'Bord du lac' },
    noVillas: 'Aucune villa dans cette catégorie pour l\'instant.',
    inquiryTitle: 'Vous ne trouvez pas la bonne adresse ?',
    inquiryBody: 'La collection ci-dessus est ce qui est actuellement publié. D\'autres villas sont détenues en privé, y compris des propriétés de réserve sans annonce publique, et cotées directement sur demande.',
  },
  suitesPage: {
    intro: { p1Pre: '« Suite » en Laponie recouvre deux gestes architecturaux distincts, tous deux à connaître. Le premier est la ', designerSuite: 'suite design', p1Mid: ', où un studio d’architecture finlandais comme Studio Puisto a bâti une chambre unique autour d\'une vue unique. Le second est la ', glassRoof: 'cabine à toit de verre', p1Post: ', où le plafond est le détail principal. Les deux sont listés ci-dessous.' },
    inquiryTitle: 'Une réservation deux-suites, ou un étage privé ?',
    inquiryBody: 'Plusieurs de ces propriétés libèrent un étage multi-suites en usage exclusif en mi-saison. Partagez vos dates et votre effectif.',
  },
  destinationsPage: {
    leadTitle: 'Cinq lieux, cinq ciels différents',
    leadP1: 'Ces cinq destinations ne sont pas interchangeables. Inari est la plus septentrionale, au bord d\'un lac dont l\'horizon visible ne porte aucune lumière de ville. Saariselkä borde le nord du parc national d\'Urho Kekkonen, et c\'est là qu\'est né l\'hébergement à toit de verre. Rovaniemi a les vols, Levi les infrastructures de station, Ylläs le calme.',
    leadP2: 'Chaque profil ci-dessous donne l\'aéroport d\'arrivée et le temps de transfert, ce qu\'est réellement le ciel sur place ( l\'horizon, la lumière des habitations, la hauteur habituelle de l\'arc ) et quelles villas se trouvent dans cette zone. Nous ne publions aucun chiffre de fréquence des aurores par village, parce que personne n\'en mesure par village.',
    destinationLabel: (i: number) => `Destination 0${i + 1}`,
    readTheProfile: (name: string) => `Lire le profil ${name}`,
  },
  destinationPage: {
    backLink: 'Destinations',
    eyebrow: 'Destination · Laponie finlandaise',
    arrival: 'Arrivée',
    aurora: 'Aurore',
    highlights: 'Points forts',
    villasHere: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
    villasHereH2: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
    fullCollection: 'Collection complète',
    inquiryTitle: (name: string) => `Planifier un séjour privé à ${name}.`,
    inquiryBody: 'Envoyez dates, effectif et préférences (chef privé, usage exclusif). Nous répondons par une présélection en un jour ouvré.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurore', intro: 'Les aurores en elles-mêmes sont gratuites. Ce qui se vend ici, c’est l’accès, le bon véhicule, le bon guide et la bonne nuit sous la bonne éclaircie.' },
    wilderness: { title: 'Nature sauvage', intro: 'Motoneige, renne, brise-glace et lac Inari. Les versions privées de ce pour quoi on vient en Laponie, sans bus partagé ni la même boucle que tout le monde.' },
    other: { title: 'Autres sorties privées', intro: 'Le Père Noël à la villa, un photographe pour des fiançailles et une expédition de quatre jours vers l\'océan Arctique. Tout est privé, tout se réserve.' },
    onRequest: { eyebrow: 'Sur demande', title: 'Chef et transferts : nous demandons pour vous.', intro: 'Nous n\'avons pas de produit réservable pour un chef privé ou un transfert depuis l\'aéroport, il n\'y a donc pas de carte ici. Indiquez votre souhait dans la demande, nous interrogeons l\'établissement et revenons avec la réponse.', cta: 'Envoyer une demande' },
  },
  },
  midnightSunPage: {
    facts: [{ value: '32', label: 'Jours sans coucher de soleil à Rovaniemi, davantage plus au nord' }, { value: '24 h', label: 'Lumière au pic, 21 juin' }, { value: '+18 °C', label: 'Moyenne diurne fin juin' }, { value: '68,9°N', label: 'Inari, notre destination la plus au nord, où il dure le plus' }],
    fourReasons: 'Quatre raisons',
    h2: 'La Laponie en été est un autre lieu.',
    reasons: [
    { title: 'L\'architecture change de caractère.', body: 'Les toits de verre qui existent pour les aurores encadrent désormais un soleil ininterrompu. Lucarne sur le lit, soleil sur le lac, aucune raison de tirer un rideau, il n\'y a pas de nuit pour se cacher.' },
    { title: 'La nature devient accessible.', body: 'Les lacs dégèlent, la forêt boréale s\'ouvre, les routes de canoë apparaissent. La même villa atteinte en motoneige en février est désormais à cinq minutes en bateau du ponton.' },
    { title: 'La même maison, une autre saison.', body: 'La collection est la même en été qu’en hiver. Sous le même toit de verre, un soleil qui ne se couche pas remplace l’aurore, les lacs sont dégelés et la forêt est praticable. Le tarif figure sur la page de réservation de chaque maison : l’écart entre les saisons s’y lit directement.' },
    { title: 'Pas de files, pas de voisins.', body: 'La Laponie en été voit une fraction de la densité de visiteurs hivernale. Le sentier sauvage dans la forêt, le belvédère au sommet, ils sont essentiellement à vous.' },
  ],
    summerCollection: { eyebrow: 'La collection estivale', h2: 'Quatre caractères de villa, en lumière estivale.', lede: 'Mêmes catégories architecturales que la collection hivernale, cabines à toit de verre, propriétés en rondins au lac, chalets alpins, villas en forêt, photographiées en lumière de soleil de minuit pour montrer la seconde moitié de l\'histoire.',
    cards: [
      { title: 'Cabine à toit de verre dans la verdure', copy: 'L\'architecture aurorale en lumière dorée de 23 h, entourée d\'une forêt luxuriante au lieu de neige.' },
      { title: 'Propriété en rondins au bord du lac', copy: 'Baie privée sur le lac Inari dégelée, canoë au ponton, fumée du sauna à bois.' },
      { title: 'Chalet design sur le fjäll', copy: 'Linaigrettes et fleurs sauvages remplacent la piste, même façade panoramique en verre.' },
      { title: 'Villa moderne en forêt', copy: 'Bâtiment en bois en porte-à-faux au cœur des pins boréaux verts, chaleur dorée du soleil de minuit sur la façade.' },
    ] },
    planning: { h2: 'Une note sur la planification d\'un voyage au soleil de minuit.', p1: 'La fenêtre est courte et les villas sont individuellement détenues, le calendrier se remplit donc de manière opportuniste plutôt qu\'uniforme. Mieux vaut demander tôt.', p2: 'Le bon moment pour s\'enquérir d\'un mois de juin donné est entre janvier et mars de la même année. Les demandes ultérieures valent toujours la peine d\'être envoyées, des disponibilités apparaissent, mais le haut de gamme part souvent plus tôt.', quoting: 'Demandes en cours : étés 2026 + 2027' },
    inquiryTitle: 'Demander un séjour au soleil de minuit.',
    inquiryBody: 'Envoyez dates, effectif et toute préférence. Une réponse arrive en un jour ouvré avec la disponibilité sur la collection estivale.',
  },
  inquiryPage: {
    eyebrow: 'Le formulaire de demande',
    h2: 'Dites-nous ce que vous imaginez.',
    intro: 'Cinq champs courts. Plus les préférences et contraintes sont précises, plus la présélection est utile. Nom et e-mail restent facultatifs, les réponses partent vers l\'adresse d\'origine du message.',
    fields: { headcount: 'Effectif', tripIntent: 'Intention de voyage', budget: 'Budget indicatif par nuit',
    datesLabel: 'Dates (ou fenêtre)', datesHint: 'p. ex. « 14–21 février » ou « première moitié de mars, 5 nuits »', datesPlaceholder: 'Facultatif',
    messageLabel: 'Quelque chose de spécifique', messageHint: 'Chef privé, usage exclusif, accessibilité, régime, photographie, tout ce qui façonne la présélection.',
    nameLabel: 'Nom (facultatif)', namePlaceholder: 'Anonyme si vide', emailLabel: 'E-mail de réponse', emailHint: 'Si vide, les réponses partent vers votre adresse d\'envoi.', emailPlaceholder: 'facultatif' },
    options: {
    headcount: ['1–2 voyageurs', '3–4 voyageurs', '5–6 voyageurs', '7–10 voyageurs', 'Groupe plus important'],
    intent: ['Saison aurore, première visite', 'Saison aurore, revisite', 'Soleil de minuit (juin–juil)', 'Noël / Nouvel An', 'Groupe familial', 'Célébration privée', 'Lune de miel / retraite à deux', 'Autre, précisez dans le message'],
    budget: ['Moins de 1 000 € / nuit', '1 000 – 2 500 € / nuit', '2 500 – 5 000 € / nuit', '5 000+ € / nuit', 'Propriété de réserve, usage exclusif', 'Préfère ne pas dire'],
  },
    submit: 'Envoyer la demande privée',
    sending: 'Envoi…',
    successH2: 'Demande reçue.',
    successBody: 'Une réponse arrivera en un jour ouvré. Pour un suivi direct, vous pouvez aussi nous joindre à',
    successFollowUp: '.',
    errorFallback: 'Vous pouvez aussi nous écrire directement à',
    fallbackNotice: 'Ouverture de votre client de messagerie pour envoyer la demande directement.',
    fineprint: 'Les soumissions sont transmises via une connexion chiffrée à une seule boîte privée en Finlande. Aucun CRM tiers, aucun suivi publicitaire sur le corps du message.',
    trustStrip: [
    { title: 'Anonyme', body: 'Nom et e-mail facultatifs. Demande transmise via un formulaire chiffré à une seule boîte.' },
    { title: 'private@laplandvibes.com', body: 'Surveillée lun–ven. Réponses en un jour ouvré, rédigées par une personne en Finlande.' },
    { title: 'Discrète par défaut', body: 'Aucun CRM tiers, aucun calendrier partagé. La présélection est construite en privé pour chaque demande.' },
  ],
  },
  aboutPage: {
    sections: [
    { title: 'Pourquoi cette collection existe', paragraphs: [
      'L\'hébergement de luxe en Laponie est un petit monde. La même poignée de villas et quelques dizaines de suites se retrouvent sur chaque plateforme de réservation, souvent avec les mêmes photos de banque d\'images et la même fourchette de prix vague. Les voyageurs qui ont déjà fait les voyages évidents commencent à interroger la Laponie plus précisément : quelle villa réserveriez-vous vraiment, où logez-vous une famille de neuf personnes, quel est l\'endroit dont personne ne parle ?',
      'Ce site est une réponse brève et réfléchie à ces questions, une sélection faite main des villas et suites qui, selon nous, valent le voyage.',
    ] },
    { title: 'Ce que ce site ne fait pas', paragraphs: [
      'Nous n\'exploitons pas les villas et nous ne sommes pas une agence de réservation. Il n\'y a pas d\'annuaire ici, ni l\'intention d\'en créer un, la collection est volontairement restreinte.',
      'Nous sommes indépendants. Lorsqu\'une propriété peut être réservée en ligne, nous renvoyons vers son annonce publique, par exemple via Trip.com ; ces liens peuvent nous rapporter une petite commission sans coût supplémentaire pour vous, et ils n\'influencent jamais les villas que nous recommandons. Les propriétés ne peuvent pas payer pour être mises en avant.',
    ] },
    { title: 'Qui s\'en occupe', paragraphs: [
      { type: 'link', pre: 'Une petite équipe basée en Finlande, qui anime également l\'écosystème ', label: 'LaplandVibes', href: 'https://laplandvibes.com', post: ', un hub éditorial et un réseau de sites de voyage sur la Laponie. Ce site est la partie de ce travail consacrée aux villas et suites les plus singulières de Laponie.' },
      'Les demandes arrivent dans une seule boîte de réception et reçoivent une réponse personnelle, pas de chatbot, pas de centre d\'appels externalisé. Si une demande ne convient pas à cette collection (un groupe trop nombreux, une destination que nous ne couvrons pas), nous le disons honnêtement et, lorsque c\'est possible, nous vous orientons vers une meilleure adresse.',
    ] },
    { title: 'Deux types de voyage que nous ne prenons pas', paragraphs: [
      'Les mariages de plus de trente invités, ainsi que la privatisation complète d\'un domaine pour des événements de marque, sortent de ce pour quoi ces propriétés ont été conçues. Nous vous orientons volontiers vers des opérateurs qui gèrent ce type d\'événement comme il faut.',
    ] },
  ],
  },
  villaDetailPage: {
    backLink: 'La collection',
    bedroom: 'chambre',
    bedrooms: 'chambres',
    sleeps: 'Capacité',
    fromPerNight: 'À partir de / nuit',
    nightlyHint: 'Tarif basse saison indicatif. Le tarif réel dépend des dates, de la durée du séjour et des inclusions.',
    rate: 'Tarif',
    onRequest: 'Sur demande',
    reserveHint: 'Propriété de réserve, cotée en privé sur demande, jamais sur une annonce publique.',
    beginInquiry: 'Démarrer une demande privée',
    viewRates: 'Voir les tarifs publics',
    orSendInquiry: 'Ou envoyer une demande privée',
    signatureEyebrow: 'Détails signature',
    signatureH2: 'Six choses à vérifier à l\'arrivée.',
    destinationEyebrow: 'La destination',
    readProfile: (name: string) => `Lire le profil ${name} →`,
    inquiryTitle: (dest: string) => `Lancer une demande pour ${dest}.`,
    inquiryBody: 'Envoyez dates, effectif et préférences. Nous répondons en un jour ouvré : où consulter le tarif de cette maison et ce qui, dans la collection, mérite d’être regardé à côté.',
    alsoEyebrow: 'Également dans la collection',
    alsoH2: 'Trois autres villas à considérer.',
  },
  notFound: {
    eyebrow: 'Erreur',
    body: 'Cette page ne fait pas partie de la collection. Les villas, suites et destinations sont listées ci-dessous.',
    home: 'Accueil',
    collection: 'La collection',
  },
  contactPage: {
    seoTitle: 'Contactez-nous',
    seoDescription: 'Une seule boîte privée : private@laplandvibes.com. Exploitée par LaPeso Oy depuis la Laponie finlandaise. Contacts presse, partenariats et accords directs ci-dessous.',
    eyebrow: 'Contact',
    h1: 'Une seule boîte, un seul opérateur.',
    cards: {
      private: {
        eyebrow: 'Demandes privées',
        body: 'Organisation de séjour anonyme, présélection de villas, questions sur les tarifs directs. Réponse sous un jour ouvré.',
      },
      press: {
        eyebrow: 'Presse & partenariats',
        body: 'Demandes éditoriales, propositions de partenariat émanant de propriétés, demandes de journalistes.',
      },
      deals: {
        eyebrow: 'Accords directs (propriétés)',
        body: 'Propriétaires et exploitants de villas souhaitant figurer dans la collection. Nous refusons la plupart des candidatures, veuillez d’abord lire la page À propos.',
      },
      general: {
        eyebrow: 'Éditorial général',
        body: 'Pour tout le reste. Délai de réponse plus long que private@ ; pour organiser un séjour, utilisez la boîte privée ci-dessus.',
      },
    },
    privateCta: 'Envoyer une demande privée',
    operatorEyebrow: 'Opérateur',
    location: 'Laponie finlandaise, société immatriculée en Finlande.',
    aboutPre: 'Consultez la page ',
    aboutLabel: 'À propos',
    aboutPost: ' pour le contexte plus large de l’écosystème LaplandVibes.',
  },
  footerNote:
    'Une collection privée curée en Laponie finlandaise, dernière revue mai 2026. Certaines réservations génèrent une commission d\'affiliation, qui n\'influence jamais le choix des villas recommandées. Les maisons ne peuvent pas payer pour entrer dans la collection.',
  footerPillars: [
    { name: 'Villas', href: '/villas' },
    { name: 'Suites design', href: '/suites' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Soleil de minuit', href: '/midnight-sun' },
    { name: 'Demande privée', href: '/private-inquiry' },
  ],
}


export default fr
