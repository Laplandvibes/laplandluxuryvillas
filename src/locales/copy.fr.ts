import type { SiteCopy } from './types'

const fr: SiteCopy = {
  nav: {
    villas: 'Villas', suites: 'Suites', destinations: 'Destinations', experiences: 'Expériences',
    midnightSun: 'Soleil de minuit', about: 'À propos', privateInquiry: 'Demande privée',
    openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
  },
  cta: {
    browseCollection: 'Voir la collection',
    beginPrivateInquiry: 'Démarrer une demande privée',
    fullCollection: 'Collection complète',
    readProfile: 'Lire le profil',
    inquire: 'Demander',
    viewRates: 'Voir les tarifs',
    viewOptions: 'Voir les options',
    viewPublicRates: 'Voir les tarifs publics',
    orSendPrivateInquiry: 'Ou envoyez une demande privée',
    seeTheCollection: 'Voir la collection',
    inquireAboutJune: 'Demander les dates de juin',
    inquireAboutJuneShort: 'Demander pour juin',
    seeSummerCollection: 'Voir la collection d’été',
    fullVillaCollection: 'Collection complète de villas',
    sendPrivateInquiry: 'Envoyer une demande privée',
    sendAnother: 'Envoyer une autre demande',
    home: 'Accueil',
    theCollection: 'La collection',
    sending: 'Envoi…',
    subscribe: 'S’abonner',
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
    sleeps: 'Couchages',
    arrival: 'Arrivée',
    aurora: 'Aurore',
    highlights: 'Points forts',
    villas: (n) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    villasIn: (name) => `Villas à ${name}`,
    villasInH2: (n, _name) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    alsoInCollection: 'Également dans la collection',
    threeOthers: 'Trois autres villas à considérer.',
    signatureDetails: 'Détails signature',
    sixVerifyOnArrival: 'Six détails que vous pourrez vérifier à votre arrivée.',
    theDestination: 'La destination',
    fullCollectionShort: 'Collection complète',
  },
  tier: {
    signature: 'Signature',
    private: 'Collection privée',
    reserve: 'Reserve · Conciergerie uniquement',
  },
  category: {
    'glass-roof': 'Villa à toit de verre',
    'log-estate': 'Domaine privé en rondins',
    'designer-suite': 'Suite design',
    'alpine-chalet': 'Chalet alpin',
    'lakeside-retreat': 'Retraite au bord du lac',
  },
  concierge: {
    eyebrow: 'La conciergerie privée',
    defaultTitle: 'Une façon plus sereine de préparer un voyage en Laponie.',
    defaultBody: 'Envoyez un seul message, préférences, dates, nombre de personnes, et notre conciergerie vous répond avec une présélection privée sous un jour ouvré. Aucun profil public, aucun calendrier partagé.',
    inquireBtn: 'Demande privée',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: 'Préparation de voyage anonyme',
      reply: 'Réponse sous un jour ouvré',
      rates: 'Tarifs directs sur demande',
    },
  },
  midnightSunBand: {
    eyebrow: '6 juin – 7 juillet',
    h2: 'Les mêmes villas, dans 32 jours de lumière ininterrompue.',
    body: 'Même architecture, autre saison. Le toit de verre devient une verrière ouverte sur un soleil qui ne se couche jamais, le lac dégèle, la forêt se couvre de mûres arctiques. Moitié moins de demande qu’en hiver, et la seule fenêtre de l’année où chefs privés, vols en hélicoptère et villas reserve ouvrent le reste de leur calendrier.',
    primary: 'Voir la collection d’été',
    secondary: 'Demander les dates de juin',
  },
  newsletter: {
    eyebrow: 'La newsletter #LaplandVibes',
    h2: 'Un message discret quand les villas ouvrent de nouvelles dates et que nous apprenons une disponibilité privée.',
    lede: 'Tarifs directs. Créneaux de conciergerie de dernière minute. Prévisions de la fenêtre d’aurores la semaine précédant chaque nouvelle lune. Aucun spam, écrit en Finlande, envoyé seulement quand il y a quelque chose de concret à dire.',
    emailPlaceholder: 'votre@email.com',
    footnote: 'Désabonnement en un clic.',
    welcome: 'Bienvenue à bord. Le premier message arrive sous une semaine.',
    already: 'Vous êtes déjà sur la liste, à très bientôt pour le prochain message.',
    invalidEmail: 'Cette adresse e-mail semble invalide.',
    networkError: 'Erreur réseau. Veuillez réessayer.',
    genericError: 'Une erreur est survenue. Réessayez dans un instant.',
  },
  affiliateDisclosure: {
    compact: 'Liens affiliés, nous percevons une petite commission sans frais supplémentaires lorsque vous réservez.',
    full: 'Cette page contient des liens affiliés. Si vous réservez via ces liens, LaplandLuxuryVillas peut percevoir une commission sans frais supplémentaires pour vous.',
  },
  hero: {
    home: {
      eyebrow: 'La collection privée',
      title: 'Laponie finlandaise, discrète, au sommet du marché.',
      lede: 'Une petite collection de villas privées de luxe choisies à la main à travers la Laponie, conciergerie dédiée, tarifs sur demande.',
      primary: 'Voir la collection', secondary: 'Demande privée',
    },
    villas: {
      eyebrow: 'La collection',
      title: 'Neuf villas. Cinq destinations. Une demande privée.',
      lede: 'Chaque propriété listée ci-dessous est vérifiée à partir des informations publiées par l\'exploitant et d\'avis récents de voyageurs. Filtrez par type d\'édifice que vous avez en tête, ou envoyez une demande privée et nous composerons une présélection autour de vos dates.',
    },
    suites: {
      eyebrow: 'Suites design',
      title: 'Quand vous n’avez pas besoin d’une villa, mais bien du toit de verre.',
      lede: 'Une courte liste de suites d’une chambre et de cabanes à aurore où l’architecture elle-même est l’expérience. Moins de personnes, le même plafond panoramique.',
    },
    destinations: {
      eyebrow: 'Destinations',
      title: 'Cinq lieux, chacun avec une raison claire d’y être.',
      lede: 'La Laponie n’est pas interchangeable. La fréquence des aurores, la logistique d’arrivée et la densité d’hébergement changent sensiblement tous les 50 km au nord du cercle polaire.',
    },
    experiences: {
      eyebrow: 'Expériences sur mesure',
      title: 'La journée, avant la nuit sous le verre.',
      lede: 'Huit expériences privées que nous associons aux villas, chacune réservée en fonction de la fenêtre météo, des heures de lumière et de l’heure d’arrivée à la villa.',
    },
    midnightSun: {
      eyebrow: '6 juin – 7 juillet',
      title: 'La fenêtre de 32 jours où le soleil ne se couche pas.',
      lede: 'Les mêmes villas, à la saison du soleil de minuit, moins de voyageurs, une lumière infinie et douce.',
      primary: 'Demander les dates de juin', secondary: 'Voir la collection',
    },
    concierge: {
      eyebrow: 'Conciergerie privée',
      title: 'Un message privé, une présélection soignée.',
      lede: 'Envoyez vos dates, le nombre de personnes et le type de voyage que vous imaginez. Nous répondons sous un jour ouvré, y compris, lorsque cela convient, les villas reserve qui n’apparaissent jamais publiquement.',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une liste courte, gardée courte à dessein.',
      lede: 'Une collection privée des plus belles villas et suites de Laponie, conciergerie anonyme, tarifs directs là où ils existent, aucune plateforme entre vous et nous.',
    },
  },
  home: {
    philosophy: {
      eyebrow: 'Notre façon de travailler',
      h2: 'L’exact opposé d’une plateforme de réservation.',
      items: [
        { title: 'Une liste courte, pas un annuaire.', body: 'Neuf villas et suites dans les destinations qui justifient vraiment le voyage. Nous refusons des propriétés plus souvent que nous n’en ajoutons, chaque entrée de cette page est une que l’on peut réserver sans hésiter.' },
        { title: 'Préparation de voyage anonyme.', body: 'Une seule boîte de réception privée, aucun profil public, aucun calendrier partagé avec des tiers. Envoyez vos dates, le nombre de personnes et vos préférences, recevez une présélection soignée sous un jour ouvré.' },
        { title: 'Tarifs directs, là où ils existent.', body: 'Les annonces publiques renvoient vers des tarifs vérifiés. Les propriétés tenues en privé, y compris les villas reserve sans disponibilité publique, sont chiffrées directement. La réponse vous précise laquelle est laquelle.' },
      ],
    },
    signature: {
      eyebrow: 'Villas signature',
      h2: 'Quatre piliers de la collection lapone.',
      lede: 'Les propriétés que nous recommandons le plus souvent. Chaque détail ci-dessous est vérifié à partir des informations de l\'exploitant et d\'avis récents, jamais recopié d\'une brochure.',
    },
    destinations: {
      eyebrow: 'Destinations',
      h2: 'Cinq lieux, chacun avec une raison claire.',
    },
  },
  villasPage: {
    filters: { all: 'Toutes', glassRoof: 'Toit de verre', logEstate: 'Domaine en rondins', designerSuite: 'Suite design', alpineChalet: 'Chalet alpin', lakeside: 'Au bord du lac' },
    noVillas: 'Aucune villa dans cette catégorie pour l’instant.',
    conciergeTitle: 'Vous ne trouvez pas le bon choix ?',
    conciergeBody: 'La collection ci-dessus correspond à ce qui est publié actuellement. D’autres villas sont tenues en privé, dont des propriétés reserve sans annonce publique, et chiffrées directement sur demande.',
  },
  suitesPage: {
    intro: {
      p1Pre: '« Suite » en Laponie recouvre deux gestes architecturaux distincts, tous deux dignes d’intérêt. Le premier est la ',
      designerSuite: 'suite design',
      p1Mid: ', où un grand studio finlandais (Studio Puisto, ALA, Avanto) a bâti une chambre unique autour d’une vue unique. Le second est la ',
      glassRoof: 'cabane à toit de verre',
      p1Post: ', où le plafond est le détail vedette. Les deux sont listées ci-dessous.',
    },
    conciergeTitle: 'Une réservation de deux suites, ou un étage privé ?',
    conciergeBody: 'Plusieurs de ces propriétés libèrent un étage de plusieurs suites en usage exclusif lors des semaines creuses. Indiquez-nous vos dates et le nombre de personnes.',
  },
  destinationsPage: {
    destinationLabel: (i) => `Destination 0${i + 1}`,
    readTheProfile: (name) => `Lire le profil de ${name}`,
  },
  destinationPage: {
    backLink: 'Destinations',
    eyebrow: 'Destination · Laponie finlandaise',
    arrival: 'Arrivée',
    aurora: 'Aurore',
    highlights: 'Points forts',
    villasHere: (n) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    villasHereH2: (n) => (n === 1 ? 'Une villa dans cette destination.' : `${n} villas dans cette destination.`),
    fullCollection: 'Collection complète',
    conciergeTitle: (name) => `Préparez un voyage privé à ${name}.`,
    conciergeBody: 'Envoyez vos dates, le nombre de personnes et toute préférence (chef privé, arrivée en hélicoptère, usage exclusif). Nous répondons avec une présélection sous un jour ouvré.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: 'Aurore', intro: 'Les aurores en elles-mêmes sont gratuites. Ce qui se vend ici, c’est l’accès, le bon véhicule, le bon guide et la bonne nuit sous la bonne éclaircie.' },
      wilderness: { title: 'Nature sauvage', intro: 'Les versions privées des expériences pour lesquelles tout le monde vient en Laponie, husky, motoneige, renne, sans le bus partagé ni le circuit en boucle.' },
      culinary: { title: 'Gastronomie', intro: 'Un chef en activité issu de l’une des cuisines sérieuses de Laponie, dans votre villa, le temps d’une soirée, ou le menu dégustation sur place quand la cuisine est la raison de votre venue.' },
      arrival: { title: 'Arrivée', intro: 'Jet privé, transfert en hélicoptère, véhicules terrestres équipés pour l’Arctique. Réservés selon le créneau, la fenêtre de lumière et l’arrivée à la villa.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: 'Jours où le soleil ne se couche pas' },
      { value: '24 h', label: 'Lumière au pic, 21 juin' },
      { value: '+18 °C', label: 'Température diurne moyenne fin juin' },
      { value: '50 %', label: 'Demande inférieure à la saison des aurores' },
    ],
    fourReasons: 'Quatre raisons',
    h2: 'La Laponie en été est un autre lieu.',
    reasons: [
      { title: 'L’architecture change de caractère.', body: 'Les toits de verre conçus pour les aurores encadrent désormais un soleil ininterrompu. Verrière au-dessus du lit, soleil sur le lac, nul besoin de tirer un rideau, il n’y a aucune nuit où se cacher.' },
      { title: 'La nature sauvage devient accessible.', body: 'Les lacs dégèlent, la forêt boréale s’ouvre, les routes de canoë apparaissent. La même villa atteinte en motoneige en février se trouve désormais à cinq minutes de bateau du ponton.' },
      { title: 'Les villas reserve s’ouvrent.', body: 'Les domaines privés en rondins au bord du lac et les chalets d’architecte libèrent le reste de leur calendrier. La fenêtre de 32 jours est le seul moment de l’année où chefs privés et vols en hélicoptère chiffrent à des tarifs de basse saison.' },
      { title: 'Ni files, ni voisins.', body: 'La Laponie en été ne voit qu’une fraction de la densité de visiteurs de l’hiver. Le sentier à travers la forêt, le belvédère sur le fjell, ils sont pour ainsi dire à vous.' },
    ],
    summerCollection: {
      eyebrow: 'La collection d’été',
      h2: 'Quatre caractères de villa, dans la lumière de l’été.',
      lede: 'Les mêmes catégories architecturales que la collection d’hiver, cabanes à toit de verre, domaines en rondins au bord du lac, chalets alpins, villas en forêt, photographiées dans la lumière du soleil de minuit de fin juin pour montrer la seconde moitié de l’histoire.',
      cards: [
        { title: 'Cabane à toit de verre dans la verdure', copy: 'L’architecture des aurores dans la lumière dorée de 23 h, entourée d’une forêt luxuriante plutôt que de neige.' },
        { title: 'Domaine en rondins au bord du lac', copy: 'Baie privée sur le lac Inari dégelée, canoë au ponton, fumée du sauna au feu de bois.' },
        { title: 'Chalet design sur le fjell', copy: 'La linaigrette et les fleurs sauvages remplacent la piste de ski, la même façade panoramique de verre.' },
        { title: 'Villa moderne en forêt', copy: 'Bâtiment de bois en porte-à-faux au cœur du pin boréal vert, chaleur dorée du soleil de minuit sur la façade.' },
      ],
    },
    planning: {
      h2: 'Une note sur la préparation d’un voyage au soleil de minuit.',
      p1: 'La fenêtre de 32 jours est courte et les villas appartiennent à des propriétaires individuels, le calendrier se remplit donc au gré des occasions, pas uniformément. La conciergerie réserve une petite allocation dans les domaines reserve chaque été.',
      p2: 'Le bon moment pour s’enquérir d’un juin donné se situe entre janvier et mars de la même année. Les demandes plus tardives valent tout de même la peine, des libérations surviennent, mais le haut de gamme part souvent plus tôt.',
      quoting: 'Nous chiffrons actuellement les étés 2026 et 2027',
    },
    conciergeTitle: 'Renseignez-vous sur un voyage au soleil de minuit.',
    conciergeBody: 'Envoyez vos dates, le nombre de personnes et toute préférence. Une réponse arrive sous un jour ouvré avec les disponibilités de toute la collection d’été, y compris des villas reserve non listées publiquement.',
  },
  conciergePage: {
    eyebrow: 'Le formulaire de demande',
    h2: 'Dites-nous ce que vous imaginez.',
    intro: 'Cinq champs courts. Plus les préférences et contraintes sont précises, plus la présélection est utile. Le nom et l’e-mail restent facultatifs, les réponses partent vers l’adresse d’où vient le message.',
    fields: {
      headcount: 'Nombre de personnes',
      tripIntent: 'Type de voyage',
      budget: 'Budget indicatif par nuit',
      datesLabel: 'Dates (ou période)',
      datesHint: 'ex. « 14–21 fév. » ou « première moitié de mars, 5 nuits »',
      datesPlaceholder: 'Facultatif',
      messageLabel: 'Quelque chose de précis',
      messageHint: 'Chef privé, arrivée en hélicoptère, usage exclusif, accessibilité, régime, intérêt pour la photographie, tout ce qui façonne la présélection.',
      nameLabel: 'Nom (facultatif)',
      namePlaceholder: 'Anonyme si vide',
      emailLabel: 'E-mail de réponse',
      emailHint: 'Si vide, les réponses partent vers votre propre adresse d’envoi.',
      emailPlaceholder: 'facultatif',
    },
    options: {
      headcount: ['1–2 personnes', '3–4 personnes', '5–6 personnes', '7–10 personnes', 'Groupe plus grand'],
      intent: ['Saison des aurores, première visite', 'Saison des aurores, visite répétée', 'Soleil de minuit (juin–juil.)', 'Noël / Nouvel An', 'Voyage en famille', 'Célébration privée', 'Lune de miel / retraite à deux', 'Autre, précisez dans le message'],
      budget: ['Moins de 1 000 € / nuit', '1 000 – 2 500 € / nuit', '2 500 – 5 000 € / nuit', 'Plus de 5 000 € / nuit', 'Propriété reserve, usage exclusif', 'Je préfère ne pas dire'],
    },
    submit: 'Envoyer une demande privée',
    sending: 'Envoi…',
    successH2: 'Demande reçue.',
    successBody: 'Une réponse arrivera sous un jour ouvré. Si vous souhaitez nous contacter directement, vous pouvez aussi nous écrire à',
    successFollowUp: '.',
    errorFallback: 'Vous pouvez aussi nous écrire directement à',
    fallbackNotice: 'Ouverture de votre messagerie pour envoyer la demande directement.',
    fineprint: 'Les envois sont transmis via une connexion chiffrée vers une seule boîte de réception privée en Finlande. Aucun CRM tiers, aucune attribution publicitaire dans le corps du message.',
    trustStrip: [
      { title: 'Anonyme', body: 'Le nom et l’e-mail sont facultatifs. La demande est envoyée via un formulaire chiffré vers une seule boîte de réception.' },
      { title: 'private@laplandvibes.com', body: 'Suivi du lundi au vendredi. Réponses sous un jour ouvré, écrites par une personne en Finlande.' },
      { title: 'Discret par défaut', body: 'Aucun CRM tiers, aucun calendrier partagé. La présélection est constituée en privé pour chaque demande.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: 'Pourquoi cette collection existe',
        paragraphs: [
          'L’hébergement de luxe en Laponie est un petit monde. La même poignée de villas et quelques dizaines de suites se retrouvent sur chaque plateforme de réservation, souvent avec les mêmes photos de banque d’images et la même fourchette de prix vague. Les voyageurs qui ont déjà fait les voyages évidents commencent à interroger la Laponie plus précisément : quelle villa réserveriez-vous vraiment, où logez-vous une famille de neuf personnes, quel est l’endroit dont personne ne parle ?',
          'Ce site est une réponse brève et réfléchie à ces questions, une sélection faite main des villas et suites qui, selon nous, valent le voyage.',
        ],
      },
      {
        title: 'Ce que ce site ne fait pas',
        paragraphs: [
          'Nous n’exploitons pas les villas et nous ne sommes pas une agence de réservation. Il n’y a pas d’annuaire ici, ni l’intention d’en créer un, la collection est volontairement restreinte.',
          'Nous sommes indépendants. Lorsqu’une propriété peut être réservée en ligne, nous renvoyons vers son annonce publique, par exemple via Trip.com ; ces liens peuvent nous rapporter une petite commission sans coût supplémentaire pour vous, et ils n’influencent jamais les villas que nous recommandons. Les propriétés ne peuvent pas payer pour être mises en avant.',
        ],
      },
      {
        title: 'Qui s’en occupe',
        paragraphs: [
          {
            type: 'link',
            pre: 'Une petite équipe basée en Finlande, qui anime également l’écosystème ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ', un hub éditorial et un réseau de sites de voyage sur la Laponie. Ce site est la partie de ce travail consacrée aux villas et suites les plus singulières de Laponie.',
          },
          'Les demandes arrivent dans une seule boîte de réception et reçoivent une réponse personnelle, pas de chatbot, pas de centre d’appels externalisé. Si une demande ne convient pas à cette collection (un groupe trop nombreux, une destination que nous ne couvrons pas), nous le disons honnêtement et, lorsque c’est possible, nous vous orientons vers une meilleure adresse.',
        ],
      },
      {
        title: 'Deux types de voyage que nous ne prenons pas',
        paragraphs: [
          'Les mariages de plus de trente invités, ainsi que la privatisation complète d’un domaine pour des événements de marque, sortent de ce pour quoi ces propriétés ont été conçues. Nous vous orientons volontiers vers des opérateurs qui gèrent ce type d’événement comme il faut.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: 'La collection',
    bedroom: 'chambre',
    bedrooms: 'chambres',
    sleeps: 'Couchages',
    fromPerNight: 'À partir de / nuit',
    nightlyHint: 'Tarif indicatif de basse saison. Le tarif réel par nuit dépend des dates, de la durée du séjour et des prestations incluses.',
    rate: 'Tarif',
    onRequest: 'Sur demande',
    reserveHint: 'Propriété reserve, chiffrée en privé sur demande, jamais sur une annonce publique.',
    beginInquiry: 'Démarrer une demande privée',
    viewRates: 'Voir les tarifs publics',
    orSendInquiry: 'Ou envoyez une demande privée',
    signatureEyebrow: 'Détails signature',
    signatureH2: 'Six détails que vous pourrez vérifier à votre arrivée.',
    destinationEyebrow: 'La destination',
    readProfile: (name) => `Lire le profil de ${name} →`,
    conciergeTitle: (dest) => `Démarrez une demande pour ${dest}.`,
    conciergeBody: 'Envoyez vos dates, le nombre de personnes, vos préférences. Une réponse arrive sous un jour ouvré avec les disponibilités, le tarif réel par nuit et toute villa reserve à associer à celle-ci.',
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
    seoTitle: 'Contact · LaplandLuxuryVillas',
    seoDescription: 'Une seule boîte privée : private@laplandvibes.com. Exploitée par Lapeso Oy depuis la Laponie finlandaise. Contacts presse, partenariats et accords directs ci-dessous.',
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
        body: 'Pour tout le reste. Délai de réponse plus long que private@ ; pour organiser un séjour, utilisez la boîte conciergerie ci-dessus.',
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
    'Une collection privée constituée en Laponie finlandaise, dernière revue en mai 2026. Certaines réservations génèrent une commission d’affiliation, qui n’influence jamais le choix des villas recommandées. Les propriétés reserve et réservées à la conciergerie ne paient rien.',
  footerPillars: [
    { name: 'La collection', href: '/villas' },
    { name: 'Suites design', href: '/suites' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Soleil de minuit', href: '/midnight-sun' },
    { name: 'Conciergerie privée', href: '/concierge' },
  ],
}

Object.assign(fr.cta, {
  inquireAboutJune: 'Consulter les dates de juin', inquireAboutJuneShort: 'Dates de juin',
  seeSummerCollection: 'Voir la collection estivale', fullVillaCollection: 'Collection complète des villas',
  sendPrivateInquiry: 'Envoyer une demande privée', sendAnother: 'Envoyer une autre demande',
  home: 'Accueil', theCollection: 'La collection', sending: 'Envoi…', subscribe: 'S\'abonner', subscribed: 'Abonné',
})
Object.assign(fr.badges, {
  onRequest: 'Sur demande', fromPerNight: 'À partir de / nuit', fromPerPerson: 'À partir de / personne', fromPerGroup: 'À partir de / groupe',
  rate: 'Tarif', bedroom: 'chambre', bedrooms: 'chambres', sleeps: 'Capacité',
  arrival: 'Arrivée', aurora: 'Aurore', highlights: 'Points forts',
  villas: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  villasIn: (name: string) => `Villas à ${name}`,
  villasInH2: (n: number, _name: string) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  alsoInCollection: 'Également dans la collection', threeOthers: 'Trois autres villas à considérer.',
  signatureDetails: 'Détails signature', sixVerifyOnArrival: 'Six choses à vérifier à l\'arrivée.',
  theDestination: 'La destination', fullCollectionShort: 'Collection complète',
})
Object.assign(fr.tier, { signature: 'Signature', private: 'Collection privée', reserve: 'Réserve · Conciergerie uniquement' })
Object.assign(fr.category, { 'glass-roof': 'Villa à toit de verre', 'log-estate': 'Propriété privée en rondins', 'designer-suite': 'Suite design', 'alpine-chalet': 'Chalet alpin', 'lakeside-retreat': 'Retraite au bord du lac' })
Object.assign(fr.concierge, {
  eyebrow: 'La conciergerie privée',
  defaultTitle: 'Une façon plus discrète de planifier un voyage en Laponie.',
  defaultBody: 'Envoyez un seul message, préférences, dates, nombre de voyageurs, et notre conciergerie répond avec une présélection privée en un jour ouvré. Pas de profil public, pas de calendriers partagés.',
  inquireBtn: 'Demande privée',
  badges: { anonymous: 'Planification anonyme', reply: 'Réponse en un jour ouvré', rates: 'Tarifs directs sur demande' },
})
Object.assign(fr.midnightSunBand, {
  eyebrow: '6 juin – 7 juillet',
  h2: 'Les villas, en 32 jours de lumière ininterrompue.',
  body: 'Même architecture, autre saison. Le toit de verre devient une lucarne sur un soleil qui ne se couche jamais, le lac dégèle, la forêt se remplit de mûres arctiques. Demande divisée par deux par rapport à l\'hiver, et l\'unique fenêtre de l\'année où chefs privés, charters d\'hélicoptère et villas de réserve ouvrent le reste de leur calendrier.',
  primary: 'Voir la collection estivale', secondary: 'Consulter les dates de juin',
})
Object.assign(fr.newsletter, {
  eyebrow: 'La newsletter #LaplandVibes',
  h2: 'Une dépêche discrète lorsque les villas ouvrent de nouvelles dates et que nous entendons parler d\'une remise privée.',
  lede: 'Tarifs directs. Ouvertures conciergerie de dernière minute. Prévisions de fenêtres d\'aurore la semaine précédant chaque nouvelle lune. Pas de spam, rédigée en Finlande, envoyée uniquement quand il y a quelque chose de spécifique à dire.',
  emailPlaceholder: 'votre@email.com', footnote: 'Désabonnement en un clic.',
  welcome: 'Bienvenue à bord. La première dépêche arrive dans la semaine.',
  already: 'Vous êtes déjà sur la liste, rendez-vous dans la prochaine dépêche.',
  invalidEmail: 'Cette adresse e-mail semble invalide.',
  networkError: 'Erreur réseau. Veuillez réessayer.',
  genericError: 'Quelque chose s\'est mal passé. Réessayez dans un instant.',
})
Object.assign(fr.affiliateDisclosure, {
  compact: 'Liens d\'affiliation, nous percevons une petite commission sans coût supplémentaire pour vous.',
  full: 'Cette page contient des liens d\'affiliation. Si vous réservez via ces liens, LaplandLuxuryVillas peut percevoir une commission sans coût supplémentaire pour vous.',
})
fr.hero.suites = { eyebrow: 'Suites design', title: 'Quand vous n\'avez pas besoin d\'une villa, mais bien du toit de verre.', lede: 'Une courte liste de suites une-chambre et de cabines à aurore où l\'architecture est l\'expérience. Effectif réduit, même plafond panoramique.' }
fr.hero.destinations = { eyebrow: 'Destinations', title: 'Cinq lieux, chacun avec une raison claire d\'y être.', lede: 'La Laponie n\'est pas interchangeable. La fréquence d\'aurore, la logistique d\'arrivée et la densité d\'hébergement changent de façon significative tous les 50 km au nord du cercle polaire.' }
fr.hero.experiences = { eyebrow: 'Expériences sur mesure', title: 'La journée, avant la nuit sous le verre.', lede: 'Huit expériences privées que nous associons aux villas, chacune réservée selon la fenêtre météo, la lumière du jour et l\'horaire d\'enregistrement.' }
fr.hero.concierge = { eyebrow: 'Conciergerie privée', title: 'Un message privé, une présélection sur mesure.', lede: 'Envoyez dates, effectif et le type de voyage envisagé. Nous répondons en un jour ouvré, y compris, le cas échéant, avec les villas de réserve qui n\'apparaissent jamais publiquement.' }
fr.hero.about = { eyebrow: 'À propos', title: 'Une liste courte, gardée courte volontairement.', lede: 'Une collection privée des plus belles villas et suites de Laponie, conciergerie anonyme, tarifs directs quand ils existent, aucune plateforme intermédiaire.' }
fr.home = {
  philosophy: { eyebrow: 'Notre façon de travailler', h2: 'L\'opposé d\'une plateforme de réservation.',
    items: [
      { title: 'Une liste courte, pas un annuaire.', body: 'Neuf villas et suites dans les destinations qui justifient réellement le voyage. Les propriétés sont plus souvent refusées qu\'ajoutées, chaque entrée de cette page est une que le voyageur attentionné peut réserver sans hésitation.' },
      { title: 'Planification anonyme.', body: 'Une seule boîte de réception privée, aucun profil public, aucun calendrier partagé avec des tiers. Envoyez dates, effectif et préférences, recevez une présélection en un jour ouvré.' },
      { title: 'Tarifs directs, là où ils existent.', body: 'Les annonces publiques renvoient vers des tarifs vérifiés. Les propriétés détenues en privé, y compris les villas de réserve sans disponibilité publique, sont cotées directement. La réponse vous dit laquelle est laquelle.' },
    ] },
  signature: { eyebrow: 'Villas signature', h2: 'Quatre piliers de la collection lapone.', lede: 'Les propriétés les plus souvent recommandées. Chaque détail ci-dessous est vérifié à partir des informations de l\'exploitant et d\'avis récents, jamais copié d\'une brochure.' },
  destinations: { eyebrow: 'Destinations', h2: 'Cinq lieux, chacun avec une raison claire.' },
}
Object.assign(fr.villasPage, {
  filters: { all: 'Toutes', glassRoof: 'Toit de verre', logEstate: 'Rondins', designerSuite: 'Suite design', alpineChalet: 'Chalet alpin', lakeside: 'Bord du lac' },
  noVillas: 'Aucune villa dans cette catégorie pour l\'instant.',
  conciergeTitle: 'Vous ne trouvez pas la bonne adresse ?',
  conciergeBody: 'La collection ci-dessus est ce qui est actuellement publié. D\'autres villas sont détenues en privé, y compris des propriétés de réserve sans annonce publique, et cotées directement sur demande.',
})
Object.assign(fr.suitesPage, {
  intro: { p1Pre: '« Suite » en Laponie recouvre deux gestes architecturaux distincts, tous deux à connaître. Le premier est la ', designerSuite: 'suite design', p1Mid: ', où un studio finlandais de premier plan (Studio Puisto, ALA, Avanto) a bâti une chambre unique autour d\'une vue unique. Le second est la ', glassRoof: 'cabine à toit de verre', p1Post: ', où le plafond est le détail principal. Les deux sont listés ci-dessous.' },
  conciergeTitle: 'Une réservation deux-suites, ou un étage privé ?',
  conciergeBody: 'Plusieurs de ces propriétés libèrent un étage multi-suites en usage exclusif en mi-saison. Partagez vos dates et votre effectif.',
})
Object.assign(fr.destinationsPage, { destinationLabel: (i: number) => `Destination 0${i + 1}`, readTheProfile: (name: string) => `Lire le profil ${name}` })
Object.assign(fr.destinationPage, {
  backLink: 'Destinations', eyebrow: 'Destination · Laponie finlandaise',
  arrival: 'Arrivée', aurora: 'Aurore', highlights: 'Points forts',
  villasHere: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  villasHereH2: (n: number) => (n === 1 ? 'Une villa ancrée ici.' : `${n} villas ancrées ici.`),
  fullCollection: 'Collection complète',
  conciergeTitle: (name: string) => `Planifier un séjour privé à ${name}.`,
  conciergeBody: 'Envoyez dates, effectif et préférences (chef privé, arrivée en hélicoptère, usage exclusif). Nous répondons par une présélection en un jour ouvré.',
})
Object.assign(fr.experiencesPage, {
  sections: {
    aurora: { title: 'Aurore', intro: 'Les aurores elles-mêmes sont gratuites. Ce qui se vend ici est l\'accès, le bon véhicule, le bon guide et la bonne nuit sous la bonne fenêtre nuageuse.' },
    wilderness: { title: 'Nature sauvage', intro: 'Versions privées des expériences pour lesquelles tout le monde vient en Laponie, husky, motoneige, renne, sans le bus partagé ni le sentier en boucle.' },
    culinary: { title: 'Gastronomie', intro: 'Un chef en activité issu d\'une des cuisines sérieuses de la Laponie, dans votre villa, pour une soirée, ou la dégustation sur place quand la cuisine est la raison de la venue.' },
    arrival: { title: 'Arrivée', intro: 'Jet privé, transfert hélicoptère, véhicules au sol arctiques. Réservés selon le créneau, la fenêtre de lumière et l\'enregistrement.' },
  },
})
Object.assign(fr.midnightSunPage, {
  facts: [{ value: '32', label: 'Jours où le soleil ne se couche pas' }, { value: '24h', label: 'Lumière au pic, 21 juin' }, { value: '+18°C', label: 'Moyenne diurne fin juin' }, { value: '50%', label: 'Demande inférieure à la saison aurore' }],
  fourReasons: 'Quatre raisons', h2: 'La Laponie en été est un autre lieu.',
  reasons: [
    { title: 'L\'architecture change de caractère.', body: 'Les toits de verre qui existent pour les aurores encadrent désormais un soleil ininterrompu. Lucarne sur le lit, soleil sur le lac, aucune raison de tirer un rideau, il n\'y a pas de nuit pour se cacher.' },
    { title: 'La nature devient accessible.', body: 'Les lacs dégèlent, la forêt boréale s\'ouvre, les routes de canoë apparaissent. La même villa atteinte en motoneige en février est désormais à cinq minutes en bateau du ponton.' },
    { title: 'Les villas de réserve ouvrent.', body: 'Les propriétés privées au bord du lac et les chalets d\'architecte libèrent le reste de leur calendrier. La fenêtre de 32 jours est le seul moment de l\'année où chefs privés et charters d\'hélicoptère cotent en mi-saison.' },
    { title: 'Pas de files, pas de voisins.', body: 'La Laponie en été voit une fraction de la densité de visiteurs hivernale. Le sentier sauvage dans la forêt, le belvédère au sommet, ils sont essentiellement à vous.' },
  ],
  summerCollection: { eyebrow: 'La collection estivale', h2: 'Quatre caractères de villa, en lumière estivale.', lede: 'Mêmes catégories architecturales que la collection hivernale, cabines à toit de verre, propriétés en rondins au lac, chalets alpins, villas en forêt, photographiées en lumière de soleil de minuit pour montrer la seconde moitié de l\'histoire.',
    cards: [
      { title: 'Cabine à toit de verre dans la verdure', copy: 'L\'architecture aurorale en lumière dorée de 23 h, entourée d\'une forêt luxuriante au lieu de neige.' },
      { title: 'Propriété en rondins au bord du lac', copy: 'Baie privée sur le lac Inari dégelée, canoë au ponton, fumée du sauna à bois.' },
      { title: 'Chalet design sur le fjell', copy: 'Linaigrettes et fleurs sauvages remplacent la piste, même façade panoramique en verre.' },
      { title: 'Villa moderne en forêt', copy: 'Bâtiment en bois en porte-à-faux au cœur des pins boréaux verts, chaleur dorée du soleil de minuit sur la façade.' },
    ] },
  planning: { h2: 'Une note sur la planification d\'un voyage au soleil de minuit.', p1: 'La fenêtre de 32 jours est courte et les villas sont individuellement détenues, le calendrier se remplit donc de manière opportuniste plutôt qu\'uniforme. La conciergerie conserve une petite allocation chaque été dans les domaines de réserve.', p2: 'Le bon moment pour s\'enquérir d\'un mois de juin donné est entre janvier et mars de la même année. Les demandes ultérieures valent toujours la peine d\'être envoyées, des disponibilités apparaissent, mais le haut de gamme part souvent plus tôt.', quoting: 'Cotations actuelles : étés 2026 + 2027' },
  conciergeTitle: 'Demander un séjour au soleil de minuit.', conciergeBody: 'Envoyez dates, effectif et toute préférence. Une réponse arrive en un jour ouvré avec la disponibilité sur la collection estivale, y compris les villas de réserve non listées publiquement.',
})
Object.assign(fr.conciergePage, {
  eyebrow: 'Le formulaire de demande', h2: 'Dites-nous ce que vous imaginez.',
  intro: 'Cinq champs courts. Plus les préférences et contraintes sont précises, plus la présélection est utile. Nom et e-mail restent facultatifs, les réponses partent vers l\'adresse d\'origine du message.',
  fields: { headcount: 'Effectif', tripIntent: 'Intention de voyage', budget: 'Budget indicatif par nuit',
    datesLabel: 'Dates (ou fenêtre)', datesHint: 'p. ex. « 14–21 février » ou « première moitié de mars, 5 nuits »', datesPlaceholder: 'Facultatif',
    messageLabel: 'Quelque chose de spécifique', messageHint: 'Chef privé, arrivée en hélicoptère, usage exclusif, accessibilité, régime, photographie, tout ce qui façonne la présélection.',
    nameLabel: 'Nom (facultatif)', namePlaceholder: 'Anonyme si vide', emailLabel: 'E-mail de réponse', emailHint: 'Si vide, les réponses partent vers votre adresse d\'envoi.', emailPlaceholder: 'facultatif' },
  options: {
    headcount: ['1–2 voyageurs', '3–4 voyageurs', '5–6 voyageurs', '7–10 voyageurs', 'Groupe plus important'],
    intent: ['Saison aurore, première visite', 'Saison aurore, revisite', 'Soleil de minuit (juin–juil)', 'Noël / Nouvel An', 'Groupe familial', 'Célébration privée', 'Lune de miel / retraite à deux', 'Autre, précisez dans le message'],
    budget: ['Moins de 1 000 € / nuit', '1 000 – 2 500 € / nuit', '2 500 – 5 000 € / nuit', '5 000+ € / nuit', 'Propriété de réserve, usage exclusif', 'Préfère ne pas dire'],
  },
  submit: 'Envoyer la demande privée', sending: 'Envoi…',
  successH2: 'Demande reçue.', successBody: 'Une réponse arrivera en un jour ouvré. Pour un suivi direct, vous pouvez aussi nous joindre à',
  successFollowUp: '.', errorFallback: 'Vous pouvez aussi nous écrire directement à', fallbackNotice: 'Ouverture de votre client de messagerie pour envoyer la demande directement.',
  fineprint: 'Les soumissions sont transmises via une connexion chiffrée à une seule boîte privée en Finlande. Aucun CRM tiers, aucun suivi publicitaire sur le corps du message.',
  trustStrip: [
    { title: 'Anonyme', body: 'Nom et e-mail facultatifs. Demande transmise via un formulaire chiffré à une seule boîte.' },
    { title: 'private@laplandvibes.com', body: 'Surveillée lun–ven. Réponses en un jour ouvré, rédigées par une personne en Finlande.' },
    { title: 'Discrète par défaut', body: 'Aucun CRM tiers, aucun calendrier partagé. La présélection est construite en privé pour chaque demande.' },
  ],
})
Object.assign(fr.aboutPage, {
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
})
Object.assign(fr.villaDetailPage, {
  backLink: 'La collection', bedroom: 'chambre', bedrooms: 'chambres', sleeps: 'Capacité',
  fromPerNight: 'À partir de / nuit', nightlyHint: 'Tarif basse saison indicatif. Le tarif réel dépend des dates, de la durée du séjour et des inclusions.',
  rate: 'Tarif', onRequest: 'Sur demande', reserveHint: 'Propriété de réserve, cotée en privé sur demande, jamais sur une annonce publique.',
  beginInquiry: 'Démarrer une demande privée', viewRates: 'Voir les tarifs publics', orSendInquiry: 'Ou envoyer une demande privée',
  signatureEyebrow: 'Détails signature', signatureH2: 'Six choses à vérifier à l\'arrivée.',
  destinationEyebrow: 'La destination', readProfile: (name: string) => `Lire le profil ${name} →`,
  conciergeTitle: (dest: string) => `Lancer une demande pour ${dest}.`,
  conciergeBody: 'Envoyez dates, effectif et préférences. Une réponse arrive en un jour ouvré avec la disponibilité, le tarif réel par nuit et les villas de réserve à associer.',
  alsoEyebrow: 'Également dans la collection', alsoH2: 'Trois autres villas à considérer.',
})
Object.assign(fr.notFound, { eyebrow: 'Erreur', body: 'Cette page ne fait pas partie de la collection. Les villas, suites et destinations sont listées ci-dessous.', home: 'Accueil', collection: 'La collection' })
fr.footerNote = 'Une collection privée curée en Laponie finlandaise, dernière revue mai 2026. Certaines réservations génèrent une commission d\'affiliation, qui n\'influence jamais le choix des villas recommandées. Les villas de réserve et conciergerie-uniquement ne paient rien.'

// ITALIAN, Lei, editorial luxury

export default fr
