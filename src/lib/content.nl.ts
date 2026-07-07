import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Verwarmd thermisch glas boven een handgebouwde kelo-dennenhutten, de oorspronkelijke noorderlichtslaapkamer.',
      copy: [
        'Een zelfstandige blokhutvilla met een eigen glazen-dakslaapkamer, privékeuken, lounge met open haard en Finse sauna. Het thermische glas blijft helder bij −30 °C, zodat u het noorderlicht vanuit een kingsize bed bekijkt zonder onder het dekbed vandaan te komen.',
        'Gelegen op het Kakslauttanen-landgoed nabij het Nationaal Park Urho Kekkonen, op 35 minuten privétransfer van de luchthaven van Ivalo. Halfpension via het resortrestaurant is beschikbaar; privékok op aanvraag.',
      ],
      signature: [
        'Verwarmd glazen dak boven de slaapkamer (helder bij −30 °C)',
        'Eigen houtgestookte sauna + buiten gelegen houtgestookte hot tub',
        'Twee slaapkamers, volledige keuken, lounge met open haard',
        'Privétransfer inbegrepen vanaf de luchthaven van Ivalo',
        'Noorderlichtwekker op de kamer via de receptie',
        'Optie voor halfpension via de resortkeuken',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Door Rajakangas ontworpen uitkragende suite met een volledig glazen gevel gericht op het noorderlicht.',
      copy: [
        'Een penthousesuite van 73 m² op palen, met glas van vloer tot plafond over de volle breedte. Ontworpen door Studio Puisto. Privéterras met hot tub. Het gebouw is rond één enkele den opgetrokken, elk interieurdetail is gekozen om te verdwijnen, zodat het bos het enige object in de kamer blijft.',
        'Op vijf minuten van Santa Claus Village, handig als uitvalsbasis voor gezinnen die in het kerstseizoen reizen en \'s avonds een rustige retraite willen met overdag eenvoudige toegang tot Rovaniemi.',
      ],
      signature: [
        'Suite van 73 m², volledig glazen gevel op het noorden',
        'Privéterras met hot tub + buitensauna',
        'Interieur van Studio Puisto, Finse designiconen overal',
        'Vloerverwarming, verduisterende gordijnen voor slapen overdag',
        'Restaurant Rakas op het terrein',
        'Vijf minuten naar Santa Claus Village',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Vierentwintig glazen hutten met uitzicht op niets dan bos en de noorderlichtovaal.',
      copy: [
        'Inari ligt pal onder de noorderlichtovaal, statistisch gezien de betrouwbaarste breedtegraad voor noorderlicht in Europa. Aurora Village is een landgoed met 24 hutten zonder doorgaand verkeer en zonder naburige dorpen aan de zichtbare horizon. De hutten staan op afstand voor privacy, met het bed onder het glas en de bank ernaar gericht.',
        'Het Sami-geleide restaurant op het terrein serveert een proefmenu rond rendier, arctische saibling en kruipbraam. Noorderlichtwekkers worden van hut tot hut doorgegeven via de radio, zodat niemand de villa ernaast wakker maakt.',
      ],
      signature: [
        'Hut met glazen dak en het bed onder de nok',
        '24 hutten op een landgoed van 30 hectare, ruim opgesteld',
        'Sami-geleid restaurant op het terrein, elke avond een proefmenu',
        'Noorderlichtwekker via radio in de hut',
        'Inari is de betrouwbaarste noorderlichtbreedtegraad in de EU',
        'Gratis privé sneeuwschoenpad vanaf het terrein',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Glazen iglo\'s hoog boven de fjeld van Levi, de enige iglocluster van Lapland die op het zuiden naar het dal kijkt.',
      copy: [
        'Tweeënveertig glazen iglo\'s op de zuidelijke flank van de fjeld van Levi. De meeste noorderlichthutten kijken naar het noorden, een leeg bos in; Levin Iglut is een van de zeer weinige die het licht boven de verlichte skyline van het fjelddorp eronder kadert, beter voor fotografen, dramatischer in de schemering.',
        'Op loopafstand van het dorp Levi (gondel, restaurants, ski-in/ski-out), maar de iglo\'s zelf zijn rustig. Restaurant Aurora op het terrein, met een chef-kok die binnen 100 km inkoopt.',
      ],
      signature: [
        'Noorderlichtpanorama op het zuiden (zeldzaam voor Lapland)',
        'Op loopafstand van de gondel + het dorp van Levi',
        'Restaurant Aurora op het terrein, inkoopradius van 100 km',
        'Premiumsuites hebben een eigen hot tub op het terras',
        'Ski-in / ski-out toegang in het winterseizoen',
        'Noorderlichtwekker op de kamer',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Een glazen bubbelsuite aan de rand van het boreale bos, twintig minuten van de Russische grens.',
      copy: [
        'Nellim is een werkend wildernisdorp (220 inwoners) aan de oostoever van het Inarimeer. De noorderlichtbubbels staan apart van de hoofdlodge in een eigen open plek, elk met een panoramische transparante koepel boven het bed en een houtgestookte hot tub op de veranda.',
        'De lodge organiseert culturele Sami-avonden, ijsvissen op het meer en een van de weinige gecertificeerde begeleide noorderlicht-fotografieprogramma\'s in Finland. Kamers zijn een jaar van tevoren volgeboekt voor de piek in februari, de concierge kan soms een vrijgekomen kamer vinden.',
      ],
      signature: [
        'Transparante panoramische koepel boven het bed',
        'Eigen houtgestookte hot tub op de veranda',
        'Ligging in een wildernisdorp, 20 min van de Russische grens',
        'Gecertificeerd begeleid noorderlicht-fotografieprogramma',
        'Cultureel Sami-programma meerdere avonden per week',
        'Vissen op het Inarimeer + traditionele rooksauna',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Een suite met glazen wanden op de top van de fjeld Kaunispää, de hoogstgelegen noorderlichtslaapkamer van het land.',
      copy: [
        'Star Arctic ligt op het allerhoogste punt van Kaunispää, de fjeld die direct vanuit het dorp Saariselkä oprijst. De Skyview-suites hebben aan drie zijden glazen wanden van vloer tot plafond, geen gordijnen, en liggen hoog genoeg om de plaatselijke boomgrens te overstijgen, wat een echt panorama van 270° vanuit het bed oplevert.',
        'De weg naar de top is privé en \'s nachts verlicht, zodat gasten er zelf naartoe kunnen rijden. Het hotel heeft een eigen sterrenwacht, een restaurant en een vloot fatbikes voor de zomer.',
      ],
      signature: [
        '270° glas op de hoogste fjeldtop in de omgeving',
        'Eigen weg naar de top, \'s nachts verlicht',
        'Sterrenwacht onder donkere hemel op het terrein (telescoopavonden)',
        'Sauna met fjeldzicht van vloer tot plafond',
        'Premiumsuites, hoekglas, aparte lounge',
        'Vijf minuten rijden naar het dorp Saariselkä',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Noorderlichtwagons in heritage-stijl aan de oever van een bevroren meer, tien minuten van de luchthaven van Rovaniemi.',
      copy: [
        'Een handvol gerestaureerde historische treinwagons, herbouwd als noorderlichthutten met glazen dak, pal aan de rand van het Apukkajärvi-meer. Handig als u maar twee nachten heeft en wilt landen, transfereren en binnen een uur in uw bed onder het glas wilt liggen.',
        'Eigen huskyfarm, rendieren, ijsvissen en een sneeuwscooterroute de wildernis in. De wagons zelf zijn intiem (één slaapkamer, één badkamer, lounge); het resort verzorgt alle logistiek rond de activiteiten.',
      ],
      signature: [
        'Ontwerp van een historische treinwagon, slaapkamer met glazen dak',
        'Aan de oever van het Apukkajärvi-meer',
        'Transfer van 10 minuten vanaf de luchthaven van Rovaniemi',
        'Husky\'s + rendieren + ijsvissen op het terrein',
        'Sneeuwscooterspoor vanaf het terrein',
        'Noorderlichtwekker + hot tub naast de hut',
      ],
    },
    'private-lakeside-log-estate': {
      tagline: 'Een privé handgebouwd blokhuis aan een eigen baai van het Inarimeer. Uitsluitend op aanvraag via de concierge.',
      copy: [
        'Een blokhuislandgoed met vier slaapkamers aan een eigen privébaai, bereikbaar via één enkele weg. In gebruik bij een kleine groep terugkerende gasten, wij houden elk seizoen enkele weken aan als privé-allocatie.',
        'Inbegrepen zijn een rooksauna, twee houtgestookte hot tubs, een botenhuis en een privé keukenbrigade die wij coördineren wanneer het pand geboekt is. In de winter sneeuwscooter- en huskytoegang via de baai; kano en vissen op het meer in het seizoen van de middernachtzon.',
      ],
      signature: [
        'Vier slaapkamers aan een privébaai van het Inarimeer',
        'Rooksauna + twee houtgestookte hot tubs',
        'Privé keukenbrigade op aanvraag geregeld',
        'Sneeuwscooter- / huskytoegang via het meer in de winter',
        'Boot + kano + steiger voor het seizoen van de middernachtzon',
        'Concierge-allocatie, nooit op openbare aanbiedingen',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Een modern, door een architect gebouwd chalet op de zuidhelling van Levi. Ski-in / ski-out, eigen wellnessverdieping.',
      copy: [
        'Een door een architect gebouwd chalet met drie slaapkamers op de zuidhelling van de fjeld van Levi, met een wellnessverdieping (sauna, stoombad, dompelbad, behandelkamer) op de begane grond en een woonruimte die uitkomt op een terras van 12 m met uitzicht op het dal.',
        'Een korte afdaling op ski\'s naar de gondel van Levi; een korte wandeling terug omhoog via het verwarmde pad. Inclusief dagelijkse schoonmaak, ontbijtopstelling en een ski-concierge op afroep.',
      ],
      signature: [
        'Door architect gebouwd chalet met drie slaapkamers, zuidhelling',
        'Ski-in / ski-out via het verwarmde pad',
        'Eigen wellnessverdieping: sauna, stoombad, dompelbad, behandelkamer',
        'Glazen terras van 12 m met uitzicht op het dal',
        'Dagelijkse schoonmaak + ontbijtopstelling inbegrepen',
        'Ski-concierge op afroep gedurende het hele verblijf',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'De luxe noorderlichthub van Noord-Finland, Kakslauttanen, Star Arctic, de wilde rand van Urho Kekkonen.',
      copy: [
        'Saariselkä ligt aan de noordelijke rand van het Nationaal Park Urho Kekkonen, de wildste beschermde wildernis van Finland, en is het dorp dat de noorderlichtaccommodatie met glazen dak heeft gedefinieerd. De meeste vlaggenschip-glashutten van het land (Kakslauttanen, Star Arctic, Northern Lights Village) liggen binnen 10 km van het dorp.',
        'Het dorp zelf is klein en goed te belopen, met één hoofdweg, drie serieuze restaurants en directe toegang tot het nationaal park. De luchthaven van Ivalo, op 30 minuten privétransfer, handelt regionale jets en privécharters af.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, het oorspronkelijke pand met glazen dak',
        'Star Arctic Hotel, topsuites op de fjeld Kaunispää',
        'Directe toegang tot het Nationaal Park Urho Kekkonen (wildernisniveau)',
        'Luchthaven van Ivalo, geschikt voor privécharters, transfer van 30 min',
      ],
      arrival: 'Ivalo (IVL), 30 min per privétransfer',
      auroraNote: 'Boreaal bos in het binnenland, weinig lichtvervuiling. ~200 heldere noorderlichtnachten per seizoen, het op een na beste van Finland na Inari.',
    },
    'inari': {
      position: 'Statistisch gezien de betrouwbaarste noorderlichtbreedtegraad in de Europese Unie. Sami-hartland, Inarimeer, donkere hemel.',
      copy: [
        'Inari is de noordelijkste gemeente van Finland en de culturele hoofdstad van de Finse Sami. Het dorp ligt aan het Inarimeer, het op twee na grootste meer van Finland, met 3.000 eilanden en de laagste lichtvervuiling ten zuiden van de poolcirkel.',
        'Voor luxereizen betekent dit twee dingen. Ten eerste: het noorderlicht is hier statistisch het betrouwbaarst in de Europese Unie, met de meeste ovaal-overhead vertoningen. Ten tweede: de blokhuislandgoederen aan het meer (waarvan wij er enkele privé aanhouden) zijn de rustigste accommodatie van Lapland, geen doorgaand verkeer, geen naburige dorpen aan de zichtbare horizon.',
      ],
      highlights: [
        'Aurora Village, speciaal gebouwd glashuttenlandgoed van 30 hectare',
        'Wilderness Hotel Nellim, noorderlichtbubbels aan de oostoever van het Inarimeer',
        'Sami-museum SIIDA + culturele programma\'s het hele jaar door',
        'Privé blokhuislandgoederen aan het meer beschikbaar via de concierge',
      ],
      arrival: 'Ivalo (IVL), 45 min per privétransfer',
      auroraNote: 'Hoogste noorderlichtfrequentie van de continentale EU. ~220 heldere noorderlichtnachten per seizoen, de statistische winnaar.',
    },
    'rovaniemi': {
      position: 'De aankomststad. Door architecten gebouwde suites, dagelijkse directe vluchten vanaf grote hubs.',
      copy: [
        'Rovaniemi is de regionale hoofdstad van Lapland en de gemakkelijkst bereikbare noorderlichtbestemming, meerdere directe vluchten per dag vanuit Helsinki, plus seizoensgebonden directe vluchten vanuit Londen, Frankfurt, Parijs, Wenen en de Golf. De luchthaven ligt op zes minuten van het stadscentrum.',
        'Het luxeaanbod hier draait om door architecten gebouwde designersuites binnen tien minuten van de luchthaven (Arctic TreeHouse, Apukka). Helikoptertransfers van de luchthaven naar afgelegen reservaten zijn gebruikelijk.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, door Studio Puisto ontworpen uitkragende suites',
        'Apukka Resort, historische noorderlichtwagons aan het Apukkajärvi-meer',
        'Directe vluchten vanuit Londen / Frankfurt / Wenen / Doha (seizoensgebonden)',
      ],
      arrival: 'Rovaniemi (RVN), 6 min van het stadscentrum',
      auroraNote: 'Lagere noorderlichtbreedtegraad dan Inari/Saariselkä maar nog steeds ~150 heldere noorderlichtnachten. Het best gecombineerd met minstens één nacht in een fjelddorp.',
    },
    'levi': {
      position: 'Het toonaangevende skiresort van Finland. Luxechalets op de zuidhelling, ski-in / ski-out vanaf de gondel van Levi.',
      copy: [
        'Levi is het meest ontwikkelde fjeldresort van Lapland, een compleet wintersportdorp met 43 liften, meerdere door Michelin aanbevolen keukens en een verhuurmarkt voor designerchalets die het afgelopen decennium serieus is gegroeid. De gondel loopt van het dorpscentrum naar de top; de zuidhelling is waar de privéchalets staan.',
        'De noorderlichtzichtbaarheid vanuit Levi is op het zuiden gericht en dramatisch, zeldzaam voor Lapland, omdat de verlichte dorpsskyline onderdeel wordt van de foto. Het best gecombineerd met een of twee nachten verder naar het noorden (Inari of Saariselkä) voor echt wildernis-noorderlicht, voordat u hier terugkeert om te skiën.',
      ],
      highlights: [
        'Levin Iglut, glazen iglo\'s op het zuiden boven het fjelddorp',
        'Door architecten gebouwde designerchalets, zuidhelling, ski-in/out',
        '43 skiliften, langste piste 2,5 km, seizoen nov–mei',
        'Luchthaven Kittilä (KTT) handelt seizoensgebonden directe internationale vluchten af',
      ],
      arrival: 'Kittilä (KTT), 20 min per privétransfer',
      auroraNote: 'Noorderlichtpanorama op het zuiden (zeldzaam). ~150 heldere nachten, maar het verlichte dorp biedt een voorgrondcompositie die verder naar het noorden ongebruikelijk is.',
    },
    'yllas': {
      position: 'Het rustige alternatief voor Levi. Nationaal Park Pallas-Yllästunturi, minder drukte, dieper bos.',
      copy: [
        'Ylläs is het op een na grootste fjeldresort van Finland maar voelt als een vijfde van de omvang, het dorp is verspreid over twee nederzettingen (Äkäslompolo en Ylläsjärvi), gescheiden door 15 km fjeld, met het Nationaal Park Pallas-Yllästunturi ertussen. Het ski-aanbod evenaart dat van Levi; de bezoekersdichtheid niet.',
        'Voor luxereizen zit de aantrekkingskracht in de ruimte. Door architecten gebouwde chalets staan hier alleen op de fjeldflank; de paden van het nationaal park vertrekken vanaf het pand; de stilte is waar mensen werkelijk voor betalen. De noorderlichtzichtbaarheid is uitstekend dankzij de zeer lage plaatselijke lichtvervuiling.',
      ],
      highlights: [
        'Nationaal Park Pallas-Yllästunturi, het op twee na grootste van Finland',
        'Twee skidorpen aan weerszijden van de fjeld van Ylläs',
        'Lagere lichtvervuiling dan welk ander skiresort ook',
        'Speciale langlaufloipes (250 km in totaal)',
      ],
      arrival: 'Kittilä (KTT), 50 min per privétransfer',
      auroraNote: 'Binnen de grens van het nationaal park, een van de laagste lichtvervuilingswaarden van continentaal Europa. ~180 heldere nachten.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Eén gids, uw gezelschap en een verwarmd fotovoertuig dat de voorspelling volgt waar die ook heen wijst.',
      copy: [
        'Een privé noorderlichtjacht van zes uur met een gecertificeerde Finse natuurfotografiegids. Het voertuig is verwarmd en uitgerust; statieven, kabelontspanners en arctisch geschikte camera\'s worden uitgeleend als u uw eigen niet meeneemt. De route wordt diezelfde middag bepaald op basis van de Kp-index en de bewolkingsvoorspelling.',
        'Warm eten en rendierhuiden als ondergrond horen er standaard bij. De begeleiding behandelt de belichting voor het noorderlicht zelf, de compositie van de voorgrond en de nabewerking diezelfde avond.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, sep–apr',
    },
    'helicopter-aurora-flight': {
      hook: 'Een nachtelijke helikoptervlucht van 45 minuten boven het wolkendek, tot aan het noorderlicht zelf.',
      copy: [
        'Uitgevoerd door de enige voor nacht-VFR gecertificeerde helikopteroperator van Finland, vanuit Rovaniemi en Ivalo. De vlucht doorbreekt het plaatselijke wolkendek en cirkelt binnen de actieve noorderlichtovaal, een perspectief dat vanaf de grond onmogelijk is.',
        'Fotografie op de grond is aan weerszijden van de vlucht inbegrepen; het deel in de lucht is voor de beleving zelf, niet voor de camera. Maximaal vier passagiers per AS350. Afhankelijk van het weervenster, de concierge volgt de voorspelling en meldt het de dag ervoor.',
      ],
      available: 'Rovaniemi, Ivalo, okt–mrt (weersafhankelijk)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Een Fins-Samisch proefmenu van negen gangen, in uw villakeuken bereid door een werkende Laplandse chef-kok.',
      copy: [
        'Een werkende chef-kok uit een van de serieuze keukens van Lapland komt voor een avond naar uw villa. Het menu wordt opgebouwd rond wat die week echt in het seizoen is: koudwater-saibling, kruipbraam, gerookt rendier, verse bospaddenstoelen, duindoorn, jeneverbes.',
        'Inclusief een op het menu afgestemde wijnbegeleiding, ingrediënten, voorbereiding, bediening en opruimen. Maximaal tien gasten. Vegetarische, glutenvrije en schaaldiervrije menu\'s op aanvraag, met minstens 72 uur vooraf.',
      ],
      available: 'Elke villa uit de collectie, het hele jaar door',
    },
    'private-husky-safari': {
      hook: 'Uw eigen sledespan, uw eigen kennelgids, het boreale bos in bij het eerste licht.',
      copy: [
        'Een privéspan van zestien sledehonden en één kennelgids. De route gaat het werkende trailnetwerk van een serieuze sledehondenkennel in, doorgaans 35 km, met halverwege een pauze bij het vuur voor warm vossenbessensap en geroosterde worst.',
        'U bestuurt uw eigen slee (eerst een briefing van 20 minuten). Wollen overalls, wanten en arctische laarzen worden verstrekt. Gezelschap van twee tot zes, geen gedeelde groepen, nooit gecombineerd met vreemden.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, dec–apr',
    },
    'private-snowmobile-wilderness': {
      hook: 'Een begeleide sneeuwscooterroute van 80 km door bevroren meren en ongerept bos, met een op houtvuur bereide lunch.',
      copy: [
        'Een begeleide sneeuwscooterroute van een hele dag over de hoge fjeldtrails, het netwerk dat de plaatselijke gidsen gebruiken, niet de toeristenlus. De lunch wordt door de gids op een vuur langs de route bereid (rendierstoofpot, op vuur gebakken brood, warm sap).',
        'BRP-machines, helmen, bivakmutsen en wollen overalls inbegrepen. Tweepersoonssleeën beschikbaar. Rijbewijs vereist voor de bestuurder; de passagiersstoel heeft er geen nodig. Maximaal vier sleeën per groep.',
      ],
      available: 'Saariselkä, Inari, Levi, dec–apr',
    },
    'private-reindeer-sami-evening': {
      hook: 'Rendierslee rijden op een werkende boerderij, daarna een avond in een privé-kota met een Samische gastheer.',
      copy: [
        'Twee uur rendiersleeën op een werkende herdersboerderij, gevolgd door een privéavond in een verwarmde kota (tipi met open vuur). De gastheer is een Samische rendierherder die de boerderij runt, het gesprek, geen script, is de beleving.',
        'Het diner is gesauteerd rendier met aardappelpuree en vossenbessen, bereid op open vuur. Verhalen over de kudde, het trekjaar en de joik-zangtraditie. Maximaal twaalf gasten.',
      ],
      available: 'Inari, Saariselkä, het hele jaar (slee dec–mrt)',
    },
    'private-jet-arrival': {
      hook: 'Directe privéjettransfer naar Ivalo, Kittilä of Rovaniemi, geen commerciële check-in, geen overstaphub.',
      copy: [
        'Gecoördineerd via onze jetpartners in Helsinki, Genève en Doha. Directe vluchten naar Ivalo (het dichtst bij de villa\'s van Saariselkä / Inari), Kittilä (het dichtst bij de villa\'s van Levi / Ylläs) of Rovaniemi (het beste voor het Arctic TreeHouse).',
        'Volledige afhandeling: grondtransfer naar uw villa met een verwarmd voertuig van arctische specificatie, bagage doorgestuurd, douane zonder rij. De concierge dient de slot in en stemt de aankomst af op de incheck­tijd van de villa.',
      ],
      available: 'Alle bestemmingen, het hele jaar door',
    },
    'helicopter-villa-transfer': {
      hook: 'Oppikken vanaf de regionale luchthaven rechtstreeks naar het landingsplatform van uw villa, geen wegtransfer.',
      copy: [
        'Het vaakst gebruikt voor aankomsten bij de private blokhuislandgoederen aan het Inarimeer. Het toestel is dezelfde AS350 die voor de noorderlichtvluchten wordt gebruikt; één sector duurt 20 tot 45 minuten.',
        'Maximaal vijf passagiers + bagage. De concierge stemt het oppikken af op de incheck van de villa en het daglichtvenster, in het diepst van de winter gaat de zon al om 15:00 uur onder.',
      ],
      available: 'Rovaniemi, Ivalo → landgoederen aan het Inarimeer',
    },
  },
};

export default overlay;
