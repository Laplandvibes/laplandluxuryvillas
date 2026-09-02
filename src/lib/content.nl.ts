import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Verwarmd thermisch glas boven een handgebouwde kelo-dennenhut, de oorspronkelijke noorderlichtslaapkamer.',
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
      tagline: 'Door Studio Puisto ontworpen uitkragende suite met een volledig glazen gevel gericht op het noorderlicht.',
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
        'Inari ligt pal onder de noorderlichtovaal, op de breedtegraad waar het Fins Meteorologisch Instituut het noorderlicht ongeveer drie op vier nachten waarneemt. Aurora Village is een landgoed met 24 hutten zonder doorgaand verkeer en zonder naburige dorpen aan de zichtbare horizon. De hutten staan op afstand voor privacy, met het bed onder het glas en de bank ernaar gericht.',
        'Het Sami-geleide restaurant op het terrein serveert een proefmenu rond rendier, beekridder en kruipbraam. Noorderlichtwekkers worden van hut tot hut doorgegeven via de radio, zodat niemand de villa ernaast wakker maakt.',
      ],
      signature: [
        'Hut met glazen dak en het bed onder de nok',
        '24 hutten op een landgoed van 30 hectare, ruim opgesteld',
        'Sami-geleid restaurant op het terrein, elke avond een proefmenu',
        'Noorderlichtwekker via radio in de hut',
        'Noorderlicht ongeveer 3 op 4 nachten op deze breedtegraad (FMI)',
        'Gratis privé sneeuwschoenpad vanaf het terrein',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Glazen iglo\'s hoog boven de fjäll van Levi, op het zuiden naar het dal gericht in plaats van noordwaarts het bos in.',
      copy: [
        'Tweeënveertig glazen iglo\'s op de zuidelijke flank van de fjäll van Levi. De meeste noorderlichthutten kijken naar het noorden, een leeg bos in; Levin Iglut is een van de zeer weinige die het licht boven de verlichte skyline van het fjälldorp eronder kadert, beter voor fotografen, dramatischer in de schemering.',
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
        'De lodge organiseert culturele Sami-avonden, ijsvissen op het meer en een van de weinige gecertificeerde begeleide noorderlicht-fotografieprogramma\'s in Finland. Kamers zijn een jaar van tevoren volgeboekt voor de piek in februari.',
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
      tagline: 'Een suite met glazen wanden op de top van de fjäll Kaunispää, boven de boomgrens en boven de lichten van het dorp.',
      copy: [
        'Star Arctic ligt op het allerhoogste punt van Kaunispää, de fjäll die direct vanuit het dorp Saariselkä oprijst. De Skyview-suites hebben aan drie zijden glazen wanden van vloer tot plafond, geen gordijnen, en liggen hoog genoeg om de plaatselijke boomgrens te overstijgen, wat een echt panorama van 270° vanuit het bed oplevert.',
        'De weg naar de top is privé en \'s nachts verlicht, zodat gasten er zelf naartoe kunnen rijden. Het hotel heeft een eigen sterrenwacht, een restaurant en een vloot fatbikes voor de zomer.',
      ],
      signature: [
        '270° glas op de top, boven de boomgrens',
        'Eigen weg naar de top, \'s nachts verlicht',
        'Sterrenwacht onder donkere hemel op het terrein (telescoopavonden)',
        'Sauna met fjällzicht van vloer tot plafond',
        'Premiumsuites, hoekglas, aparte lounge',
        'Vijf minuten rijden naar het dorp Saariselkä',
      ],
    },
    'lapland-hotels-saaga-apartment': {
      tagline: 'Een zelfstandig appartement aan de voet van de zuidhellingen van Ylläs, met de spa van het hotel erachter.',
      copy: [
        'Lapland Hotels Saaga ligt in het dorp Ylläsjärvi, direct onder de zuidhellingen van skigebied Ylläs. Naast hotelkamers verhuurt het vakantieappartementen voor één tot acht gasten, op het hotelterrein of zo’n 300 meter van het hoofdgebouw, zodat een gezin of kleine groep een eigen plek heeft zonder het resort te verlaten.',
        'Achter de appartementen staat het hele hotel: een spa met zwembadgedeelte, whirlpools en stoomsauna’s, een fitnessruimte en behandelingen, en een privésauna voor maximaal vijftien personen met een eigen relaxruimte. Op het terrein zijn drie restaurants, waaronder het Biegga-buffet, en het ontbijt is gebouwd op noordelijke ingrediënten.',
      ],
      signature: [
        'Dorp Ylläsjärvi, onder de zuidhellingen van Ylläs',
        'Vakantieappartementen voor 1–8 gasten',
        'Op het hotelterrein of zo’n 300 m van het hoofdgebouw',
        'Spa: zwembadgedeelte, whirlpools, stoomsauna’s, fitness',
        'Privésauna voor maximaal 15 met eigen relaxruimte',
        'Drie restaurants op het terrein, waaronder het Biegga-buffet',
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
  },
  destinations: {
    'saariselka': {
      position: 'De luxe noorderlichthub van Noord-Finland, Kakslauttanen, Star Arctic, de wilde rand van Urho Kekkonen.',
      copy: [
        'Saariselkä ligt aan de noordelijke rand van het Nationaal Park Urho Kekkonen, een van de grootste wildernisgebieden van Finland, en is het dorp dat de noorderlichtaccommodatie met glazen dak heeft gedefinieerd. De meeste bekende glashutten van het land (Kakslauttanen, Star Arctic, Northern Lights Village) liggen binnen 10 km van het dorp.',
        'Het dorp zelf is klein en goed te belopen: één hoofdweg, een paar restaurants en directe toegang tot het nationaal park. De luchthaven van Ivalo ligt op 27 km, ongeveer een half uur per privétransfer, en handelt zowel lijnvluchten als privécharters af.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, het oorspronkelijke pand met glazen dak',
        'Star Arctic Hotel, topsuites op de fjäll Kaunispää',
        'Directe toegang tot het Nationaal Park Urho Kekkonen (wildernisniveau)',
        'Luchthaven van Ivalo, geschikt voor privécharters, transfer van 30 min',
      ],
      arrival: 'Ivalo (IVL), 27 km, ongeveer 30 min per privétransfer',
      auroraNote: 'Boreaal bos in het binnenland, zonder bewoningslicht over tientallen kilometers in welke richting dan ook. De fjällen geven een hoge, open horizon, en dat telt op de nachten dat de boog laag in het noorden blijft.',
    },
    'inari': {
      position: 'Onze noordelijkste bestemming, waar het noorderlicht ongeveer drie nachten op vier wordt waargenomen. Sami-hartland, Inarimeer, donkere hemel.',
      copy: [
        'Inari is qua oppervlakte de grootste gemeente van Finland en de culturele hoofdstad van de Finse Sami. Het dorp ligt aan het Inarimeer, het op twee na grootste meer van Finland, met zo’n 3.000 eilanden, ruim 200 km ten noorden van de poolcirkel en zonder stadslicht aan de horizon.',
        'Voor luxereizen betekent dit twee dingen. Ten eerste: op deze breedtegraad neemt het Fins Meteorologisch Instituut het noorderlicht ongeveer drie nachten op vier waar, en staat het recht boven u in plaats van laag in het noorden. Ten tweede: de blokhuislandgoederen aan het meer behoren tot de rustigste accommodaties van Lapland: geen doorgaand verkeer, geen naburige dorpen aan de zichtbare horizon.',
      ],
      highlights: [
        'Aurora Village, speciaal gebouwd glashuttenlandgoed van 30 hectare',
        'Wilderness Hotel Nellim, noorderlichtbubbels aan de oostoever van het Inarimeer',
        'Sami-museum SIIDA + culturele programma\'s het hele jaar door',
        'Inarimeer, het op twee na grootste meer van Finland, zo\'n 3.000 eilanden',
      ],
      arrival: 'Ivalo (IVL), 40 km, ongeveer 40 min per privétransfer',
      auroraNote: 'Onze noordelijkste bestemming, en die waar het noorderlicht het vaakst recht boven u staat in plaats van laag in het noorden. Het Inarimeer geeft een ononderbroken horizon, zonder dorpslicht erop.',
    },
    'rovaniemi': {
      position: 'De aankomststad. Door architecten gebouwde suites, dagelijkse directe vluchten vanaf grote hubs.',
      copy: [
        'Rovaniemi is de regionale hoofdstad van Lapland en de gemakkelijkst bereikbare noorderlichtbestemming, meerdere directe vluchten per dag vanuit Helsinki, plus seizoensgebonden directe vluchten vanuit Londen, Frankfurt, Parijs, Wenen en de Golf. De luchthaven ligt ongeveer 10 km ten noorden van het stadscentrum, tien tot vijftien minuten met de auto.',
        'Het luxeaanbod hier draait om door architecten gebouwde designersuites binnen tien minuten van de luchthaven (Arctic TreeHouse, Apukka). Helikoptertransfers van de luchthaven naar afgelegen reservaten zijn gebruikelijk.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, door Studio Puisto ontworpen uitkragende suites',
        'Apukka Resort, historische noorderlichtwagons aan het Apukkajärvi-meer',
        'Directe vluchten vanuit Londen / Frankfurt / Wenen / Doha (seizoensgebonden)',
      ],
      arrival: 'Rovaniemi (RVN), 10 km, 10 tot 15 min van het stadscentrum',
      auroraNote: 'Onze zuidelijkste bestemming en de enige met stadslicht aan de horizon, waardoor het noorderlicht hier zowel minder vaak verschijnt als lastiger te zien is. Het best gecombineerd met minstens één nacht in een fjälldorp verder naar het noorden.',
    },
    'levi': {
      position: 'Het toonaangevende skiresort van Finland. Luxechalets op de zuidhelling, ski-in / ski-out vanaf de gondel van Levi.',
      copy: [
        'Levi is het meest ontwikkelde fjällresort van Lapland, een compleet wintersportdorp met 44 pistes en 26 liften, waarvan twee gondels. De verhuurmarkt voor designerchalets is er het afgelopen decennium serieus gegroeid. De gondel loopt van het dorpscentrum naar de top op 531 meter; op de zuidhelling staan de privéchalets, en daar opent een nieuwe stoeltjeslift voor het seizoen 2026-2027.',
        'De noorderlichtzichtbaarheid vanuit Levi is op het zuiden gericht en dramatisch, zeldzaam voor Lapland, waardoor de verlichte dorpsskyline onderdeel wordt van de foto. Het best gecombineerd met een of twee nachten verder naar het noorden (Inari of Saariselkä) voor echt wildernis-noorderlicht, voordat u hier terugkeert om te skiën.',
      ],
      highlights: [
        'Levin Iglut, glazen iglo\'s op het zuiden boven het fjälldorp',
        'Door architecten gebouwde designerchalets, zuidhelling, ski-in/out',
        '44 pistes, 26 liften (twee gondels), 38,5 km geprepareerde piste',
        'Luchthaven Kittilä (KTT) handelt seizoensgebonden directe internationale vluchten af',
      ],
      arrival: 'Kittilä (KTT), 15 km, ongeveer 20 min per privétransfer',
      auroraNote: 'Een panorama op het zuiden, wat in Lapland zeldzaam is: het verlichte fjälldorp wordt de voorgrond van de foto. De prijs is datzelfde dorpslicht, dus het donkerste uitzicht ligt een korte autorit verderop.',
    },
    'yllas': {
      position: 'Het rustige alternatief voor Levi. Nationaal Park Pallas-Yllästunturi, minder drukte, dieper bos.',
      copy: [
        'Ylläs heeft 62 pistes, meer dan welk ander skigebied van Finland ook, en de langste afdalingen van het land: ruim drie kilometer vanaf de kale top op 719 meter naar het dal. Toch voelt het als een fractie van Levi, want het dorp is verspreid over twee nederzettingen (Äkäslompolo en Ylläsjärvi), gescheiden door 15 km fjäll en het Nationaal Park Pallas-Yllästunturi.',
        'Voor luxereizen zit de aantrekkingskracht in de ruimte. Door architecten gebouwde chalets staan hier alleen op de fjällflank, de paden van het nationaal park vertrekken vanaf het pand, en de stilte is waar mensen werkelijk voor betalen. Het loipenetwerk telt ongeveer 300 kilometer, waarvan ruim 30 kilometer verlicht.',
      ],
      highlights: [
        'Nationaal Park Pallas-Yllästunturi, het op twee na grootste van Finland',
        'Twee skidorpen aan weerszijden van de fjäll van Ylläs',
        'Lagere lichtvervuiling dan welk ander skiresort ook',
        'Ongeveer 300 km geprepareerde loipes, ruim 30 km verlicht',
      ],
      arrival: 'Kittilä (KTT), 40 km, ongeveer 45 min per privétransfer',
      auroraNote: 'De chalets staan tegen het nationaal park aan in plaats van midden in een resort, dus u stapt de deur uit zo de duisternis in in plaats van ernaartoe te rijden.',
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
        'Uitgevoerd door een voor nacht-VFR gecertificeerde helikopteroperator, vanuit Rovaniemi en Ivalo. De vlucht doorbreekt het plaatselijke wolkendek en cirkelt binnen de actieve noorderlichtovaal, een perspectief dat vanaf de grond onmogelijk is.',
        'Fotografie op de grond is aan weerszijden van de vlucht inbegrepen; het deel in de lucht is voor de beleving zelf, niet voor de camera. Maximaal vier passagiers per AS350. Afhankelijk van het weervenster: de exploitant volgt de voorspelling en meldt het de dag ervoor.',
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
        'Een begeleide sneeuwscooterroute van een hele dag over de hoge fjälltrails, het netwerk dat de plaatselijke gidsen gebruiken, niet de toeristenlus. De lunch wordt door de gids op een vuur langs de route bereid (rendierstoofpot, op vuur gebakken brood, warm sap).',
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
        'Volledige afhandeling: grondtransfer naar uw villa met een verwarmd voertuig van arctische specificatie, bagage doorgestuurd, douane zonder rij. De exploitant dient de slot in en stemt de aankomst af op de incheck­tijd van de villa.',
      ],
      available: 'Alle bestemmingen, het hele jaar door',
    },
    'helicopter-villa-transfer': {
      hook: 'Oppikken vanaf de regionale luchthaven rechtstreeks naar het landingsplatform van uw villa, geen wegtransfer.',
      copy: [
        'Het vaakst gebruikt voor aankomsten bij de private blokhuislandgoederen aan het Inarimeer. Het toestel is dezelfde AS350 die voor de noorderlichtvluchten wordt gebruikt; één sector duurt 20 tot 45 minuten.',
        'Maximaal vijf passagiers + bagage. De exploitant stemt het oppikken af op de incheck van de villa en het daglichtvenster, dat midden in de winter maar een paar schemeruren rond het middaguur is, op de breedte van Inari komt de zon helemaal niet op.',
      ],
      available: 'Rovaniemi, Ivalo → landgoederen aan het Inarimeer',
    },
  },
};

export default overlay;
