import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Beheiztes Thermoglas über einer handgefertigten Kelo-Kiefernhütte, das ursprüngliche Polarlicht-Schlafzimmer.',
      copy: [
        'Eine eigenständige Blockhausvilla mit eigenem Schlafzimmer unter dem Glasdach, privater Küche, Kaminlounge und finnischer Sauna. Das Thermoglas bleibt auch bei −30 °C klar, sodass Sie die Polarlichter aus einem Kingsize-Bett beobachten, ohne die Decke zu verlassen.',
        'Gelegen auf dem Kakslauttanen-Anwesen nahe dem Urho-Kekkonen-Nationalpark, ein 35-minütiger privater Transfer vom Flughafen Ivalo. Halbpension im Restaurant des Resorts möglich; Privatkoch auf Anfrage.',
      ],
      signature: [
        'Beheiztes Glasdach über dem Schlafzimmer (klar bei −30 °C)',
        'Private Holzofensauna + Whirlpool im Freien mit Holzfeuerung',
        'Zwei Schlafzimmer, voll ausgestattete Küche, Kaminlounge',
        'Privater Transfer ab Flughafen Ivalo inbegriffen',
        'Polarlicht-Weckruf im Zimmer über die Rezeption',
        'Halbpension über die Resortküche',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Von Rajakangas entworfene auskragende Suite mit voller Glasfassade in Richtung der Polarlichter.',
      copy: [
        'Eine 73 m² große Penthouse-Suite auf Stelzen, mit raumhohem Glas über die gesamte Breite. Entworfen von Studio Puisto. Private Terrasse mit Whirlpool. Das Gebäude wurde um eine einzelne Kiefer herum errichtet, jedes Detail der Innenausstattung wurde so gewählt, dass es verschwindet und der Wald das einzige Objekt im Raum bleibt.',
        'Fünf Minuten vom Santa Claus Village entfernt, ein nützlicher Stützpunkt für Familien in der Weihnachtssaison, die nachts ein ruhiges Refugium und tagsüber einen einfachen Zugang nach Rovaniemi wünschen.',
      ],
      signature: [
        '73 m² Suite, raumhohe Glasfassade nach Norden ausgerichtet',
        'Private Terrasse mit Whirlpool + Außensauna',
        'Innenausstattung von Studio Puisto, finnische Designikonen durchgängig',
        'Fußbodenheizung, Verdunkelungsvorhänge für den Tagschlaf',
        'Hauseigenes Restaurant Rakas',
        'Fünf Minuten bis zum Santa Claus Village',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Vierundzwanzig Glashütten, die auf nichts als Wald und das Polarlichtoval blicken.',
      copy: [
        'Inari liegt genau unter dem Polarlichtoval, statistisch der zuverlässigste Nordlicht-Breitengrad Europas. Aurora Village ist ein Anwesen mit 24 Hütten ohne Durchgangsverkehr und ohne benachbarte Dörfer am sichtbaren Horizont. Die Hütten sind für Privatsphäre verteilt, mit dem Bett unter dem Glas und dem Sofa darauf ausgerichtet.',
        'Das hauseigene, von Sami geführte Restaurant bietet ein Degustationsmenü rund um Rentier, Saibling und Moltebeere. Polarlicht-Weckrufe werden von Hütte zu Hütte gefunkt, damit niemand die Nachbarvilla weckt.',
      ],
      signature: [
        'Hütte mit Glasdach und Bett unter dem Scheitelpunkt',
        '24 Hütten auf einem 30 Hektar großen Anwesen, großzügig verteilt',
        'Von Sami geführtes Restaurant vor Ort, jeden Abend Degustationsmenü',
        'Polarlicht-Weckruf über Funk in der Hütte',
        'Inari ist der zuverlässigste Polarlicht-Breitengrad der EU',
        'Kostenloser privater Schneeschuhpfad ab dem Anwesen',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Glasiglus hoch über dem Fjell von Levi, das einzige Iglu-Cluster Lapplands mit Südausrichtung zum Tal.',
      copy: [
        'Zweiundvierzig Glasiglus, angeordnet an der Südschulter des Levi-Fjells. Die meisten Polarlichthütten blicken nach Norden in einen leeren Wald; Levin Iglut ist eines der ganz wenigen, das die Lichter über der beleuchteten Skyline des Fjelldorfs darunter einrahmt, besser für Fotografen, dramatischer in der Dämmerung.',
        'Zu Fuß erreichbar zum Dorf Levi (Gondel, Restaurants, Ski-in/Ski-out), doch die Iglus selbst sind ruhig. Restaurant Aurora vor Ort, dessen Küchenchef innerhalb von 100 km einkauft.',
      ],
      signature: [
        'Nach Süden ausgerichtetes Polarlicht-Panorama (selten für Lappland)',
        'Zu Fuß erreichbar zur Gondel + zum Dorf Levi',
        'Hauseigenes Restaurant Aurora, Einkaufsradius von 100 km',
        'Premium-Suiten mit eigenem Whirlpool auf der Terrasse',
        'Ski-in/Ski-out-Zugang in der Wintersaison',
        'Polarlicht-Weckruf im Zimmer',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Eine Glaskuppel-Suite am Rand des borealen Waldes, zwanzig Minuten von der russischen Grenze entfernt.',
      copy: [
        'Nellim ist ein bewohntes Wildnisdorf (220 Einwohner) am Ostufer des Inarisees. Die Polarlicht-Kuppeln liegen abseits der Hauptlodge auf einer eigenen Lichtung, jede mit einer transparenten Panoramakuppel über dem Bett und einem holzbefeuerten Whirlpool auf der Veranda.',
        'Die Lodge veranstaltet samische Kulturabende, Eisfischen auf dem See und eines der wenigen zertifizierten geführten Programme für Polarlichtfotografie in Finnland. Die Zimmer sind für die Februar-Hochsaison ein Jahr im Voraus ausgebucht, der Concierge kann gelegentlich eine Freigabe finden.',
      ],
      signature: [
        'Transparente Panoramakuppel über dem Bett',
        'Privater holzbefeuerter Whirlpool auf der Veranda',
        'Lage im Wildnisdorf, 20 Min. von der russischen Grenze',
        'Zertifiziertes geführtes Programm für Polarlichtfotografie',
        'Samisches Kulturprogramm an mehreren Abenden pro Woche',
        'Angeln am Inarisee + traditionelle Rauchsauna',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Eine verglaste Suite auf dem Gipfel des Kaunispää-Fjells, das höchstgelegene Polarlicht-Schlafzimmer des Landes.',
      copy: [
        'Star Arctic liegt ganz oben auf dem Kaunispää, dem Fjell, das sich direkt aus dem Dorf Saariselkä erhebt. Die Skyview-Suiten haben raumhohe Glaswände an drei Seiten, keine Vorhänge und eine Lage hoch genug über der lokalen Baumgrenze, das bedeutet ein echtes 270°-Panorama vom Bett aus.',
        'Die Gipfelstraße ist privat und nachts beleuchtet, sodass Gäste selbst fahren können. Das Hotel verfügt über eine eigene Sternwarte, ein Restaurant und eine Flotte von Fatbikes für den Sommer.',
      ],
      signature: [
        '270°-Glas auf dem höchsten Fjellgipfel der Region',
        'Private Gipfelstraße, nachts beleuchtet',
        'Hauseigene Sternwarte unter dunklem Himmel (Teleskopnächte)',
        'Sauna mit raumhohem Blick auf das Fjell',
        'Premium-Suiten, Eckverglasung, separate Lounge',
        'Fünf Minuten Fahrt zum Dorf Saariselkä',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Polarlicht-Waggons im historischen Stil am Ufer eines zugefrorenen Sees, zehn Minuten vom Flughafen Rovaniemi.',
      copy: [
        'Eine Handvoll restaurierter historischer Eisenbahnwaggons, umgebaut zu Polarlichthütten mit Glasdach, gelegen direkt am Ufer des Apukkajärvi-Sees. Praktisch, wenn Sie nur zwei Nächte haben und landen, transferieren und innerhalb einer Stunde im Bett unter dem Glas liegen möchten.',
        'Hauseigene Huskyfarm, Rentiere, Eisfischen, Schneemobilroute in die Wildnis. Die Waggons selbst sind intim (ein Schlafzimmer, ein Bad, Lounge); das Resort übernimmt die gesamte Aktivitätenlogistik.',
      ],
      signature: [
        'Historisches Eisenbahnwaggon-Design, Schlafzimmer mit Glasdach',
        'Am Ufer des Apukkajärvi-Sees',
        '10-minütiger Transfer vom Flughafen Rovaniemi',
        'Hauseigene Huskys + Rentiere + Eisfischen',
        'Schneemobilstrecke ab dem Anwesen',
        'Polarlicht-Weckruf + Whirlpool neben der Hütte',
      ],
    },
    'private-lakeside-log-estate': {
      tagline: 'Ein privates, handgebautes Blockhaus an einer eigenen Bucht des Inarisees. Nur auf Concierge-Anfrage.',
      copy: [
        'Ein Blockhaus-Anwesen mit vier Schlafzimmern an einer eigenen privaten Bucht, erreichbar über eine einzige Straße. Genutzt von einer kleinen Gruppe wiederkehrender Gäste, wir halten jede Saison einige Wochen als private Kontingente zurück.',
        'Inklusive einer Rauchsauna, zweier holzbefeuerter Whirlpools, eines Bootshauses und einer privaten Kochbrigade, die wir koordinieren, wenn das Anwesen gebucht ist. Schneemobil- und Huskyzugang über die Bucht im Winter; Kanu und Angeln auf dem See in der Mitternachtssonnen-Saison.',
      ],
      signature: [
        'Vier Schlafzimmer an einer privaten Bucht des Inarisees',
        'Rauchsauna + zwei holzbefeuerte Whirlpools',
        'Private Kochbrigade auf Anfrage organisiert',
        'Schneemobil-/Huskyzugang über den See im Winter',
        'Boot + Kanu + Steg für die Mitternachtssonnen-Saison',
        'Concierge-Kontingent, nie in öffentlichen Angeboten',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Ein modernes, architektengeplantes Chalet am Südhang von Levi. Ski-in/Ski-out, private Wellnessetage.',
      copy: [
        'Architektengeplantes Chalet mit drei Schlafzimmern am Südhang des Levi-Fjells, mit einer Wellnessetage (Sauna, Dampfbad, Tauchbecken, Behandlungsraum) im Erdgeschoss und einem Wohnbereich, der sich zu einer 12 m langen, zum Tal ausgerichteten Terrasse öffnet.',
        'Eine kurze Skiabfahrt zur Gondel von Levi; ein kurzer Aufstieg zurück über den beheizten Weg. Inklusive täglicher Reinigung, Frühstücksvorbereitung und einem auf Abruf verfügbaren Ski-Concierge.',
      ],
      signature: [
        'Architektengeplantes Chalet mit drei Schlafzimmern, Südhang',
        'Ski-in/Ski-out über den beheizten Weg',
        'Private Wellnessetage: Sauna, Dampfbad, Tauchbecken, Behandlungsraum',
        '12 m lange Glasterrasse mit Blick auf das Tal',
        'Tägliche Reinigung + Frühstücksvorbereitung inbegriffen',
        'Ski-Concierge auf Abruf während des gesamten Aufenthalts',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Das Luxus-Polarlichtzentrum Nordfinnlands, Kakslauttanen, Star Arctic, der wilde Rand des Urho-Kekkonen-Nationalparks.',
      copy: [
        'Saariselkä liegt am nördlichen Rand des Urho-Kekkonen-Nationalparks, Finnlands wildester Schutzwildnis, und ist das Dorf, das die Polarlicht-Unterkunft unter dem Glasdach geprägt hat. Die meisten der führenden Glashütten des Landes (Kakslauttanen, Star Arctic, Northern Lights Village) liegen innerhalb von 10 km vom Dorf entfernt.',
        'Das Dorf selbst ist klein und zu Fuß zu erkunden, mit einer Hauptstraße, drei ernstzunehmenden Restaurants und direktem Zugang zum Nationalpark. Der Flughafen Ivalo, 30 Minuten per privatem Transfer, bedient Regionaljets und Privatcharter.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, die ursprüngliche Unterkunft mit Glasdach',
        'Star Arctic Hotel, Gipfelsuiten auf dem Kaunispää-Fjell',
        'Direkter Zugang zum Urho-Kekkonen-Nationalpark (Wildnisniveau)',
        'Flughafen Ivalo, privatchartertauglich, 30 Min. Transfer',
      ],
      arrival: 'Ivalo (IVL), 30 Min. per privatem Transfer',
      auroraNote: 'Boreales Binnenwaldgebiet, geringe Lichtverschmutzung. ~200 Polarlichtnächte mit klarem Himmel pro Saison, Finnlands zweitbeste nach Inari.',
    },
    'inari': {
      position: 'Statistisch der zuverlässigste Polarlicht-Breitengrad der Europäischen Union. Samisches Kernland, Inarisee, dunkle Himmel.',
      copy: [
        'Inari ist Finnlands nördlichste Gemeinde und die kulturelle Hauptstadt der finnischen Sami. Das Dorf liegt am Inarisee, dem drittgrößten See Finnlands mit 3.000 Inseln und der geringsten Lichtverschmutzung südlich des Polarkreises.',
        'Für Luxusreisen bedeutet das zweierlei. Erstens: Die Polarlichter sind hier statistisch die zuverlässigsten der Europäischen Union, mit den am häufigsten direkt über dem Kopf liegenden ovalen Erscheinungen. Zweitens: Die Blockhaus-Anwesen am See (von denen wir einige privat halten) sind die ruhigsten Unterkünfte Lapplands, kein Durchgangsverkehr, keine benachbarten Dörfer am sichtbaren Horizont.',
      ],
      highlights: [
        'Aurora Village, eigens errichtetes 30 Hektar großes Glashütten-Anwesen',
        'Wilderness Hotel Nellim, Polarlicht-Kuppeln am Ostufer des Inarisees',
        'Sami-Museum SIIDA + ganzjährige Kulturprogramme',
        'Private Blockhaus-Anwesen am See über den Concierge verfügbar',
      ],
      arrival: 'Ivalo (IVL), 45 Min. per privatem Transfer',
      auroraNote: 'Höchste Polarlichtfrequenz der kontinentalen EU. ~220 Polarlichtnächte mit klarem Himmel pro Saison, der statistische Sieger.',
    },
    'rovaniemi': {
      position: 'Die Ankunftsstadt. Architektengeplante Suiten, tägliche Direktflüge von großen Drehkreuzen.',
      copy: [
        'Rovaniemi ist die Regionalhauptstadt Lapplands und das am einfachsten erreichbare Polarlichtziel, mehrere tägliche Direktflüge ab Helsinki sowie saisonale Direktflüge aus London, Frankfurt, Paris, Wien und der Golfregion. Der Flughafen liegt sechs Minuten vom Stadtzentrum entfernt.',
        'Das Luxusangebot baut hier auf architektengeplante Designersuiten innerhalb von zehn Minuten zum Flughafen (Arctic TreeHouse, Apukka). Helikoptertransfers vom Flughafen zu abgelegenen Wildnisreservaten sind üblich.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, von Studio Puisto entworfene auskragende Suiten',
        'Apukka Resort, historische Polarlicht-Waggons am Apukkajärvi-See',
        'Direktflüge aus London / Frankfurt / Wien / Doha (saisonal)',
      ],
      arrival: 'Rovaniemi (RVN), 6 Min. vom Stadtzentrum',
      auroraNote: 'Niedrigerer Polarlicht-Breitengrad als Inari/Saariselkä, aber dennoch ~150 Polarlichtnächte mit klarem Himmel. Am besten kombiniert mit mindestens einer Nacht im Fjelldorf.',
    },
    'levi': {
      position: 'Finnlands führendes Skigebiet. Luxuschalets am Südhang, Ski-in/Ski-out von der Gondel in Levi.',
      copy: [
        'Levi ist das am besten erschlossene Fjell-Resort Lapplands, ein komplettes Wintersportdorf mit 43 Liften, mehreren von Michelin empfohlenen Küchen und einem Markt für Designer-Chaletvermietung, der im letzten Jahrzehnt ernsthaft gewachsen ist. Die Gondel fährt vom Dorfzentrum zum Gipfel; am Südhang liegen die privaten Chalets.',
        'Die Polarlichtsicht von Levi aus ist nach Süden gerichtet und dramatisch, selten für Lappland, da die beleuchtete Dorfsilhouette Teil des Fotos wird. Am besten kombiniert mit ein oder zwei Nächten weiter nördlich (Inari oder Saariselkä) für echte Wildnis-Polarlichter, bevor man zum Skifahren hierher zurückkehrt.',
      ],
      highlights: [
        'Levin Iglut, nach Süden ausgerichtete Glasiglus über dem Fjelldorf',
        'Architektengeplante Designer-Chalets, Südhang, Ski-in/out',
        '43 Skilifte, längste Abfahrt 2,5 km, Saison Nov.–Mai',
        'Flughafen Kittilä (KTT) bedient saisonale internationale Direktflüge',
      ],
      arrival: 'Kittilä (KTT), 20 Min. per privatem Transfer',
      auroraNote: 'Nach Süden ausgerichtetes Polarlicht-Panorama (selten). ~150 Nächte mit klarem Himmel, doch das beleuchtete Dorf bietet eine Vordergrundkomposition, die weiter nördlich ungewöhnlich ist.',
    },
    'yllas': {
      position: 'Die ruhige Alternative zu Levi. Pallas-Yllästunturi-Nationalpark, weniger Menschenmengen, tieferer Wald.',
      copy: [
        'Ylläs ist das zweitgrößte Fjell-Resort Finnlands, fühlt sich aber wie ein Fünftel der Größe an, das Dorf ist auf zwei Siedlungen verteilt (Äkäslompolo und Ylläsjärvi), getrennt durch 15 km Fjell, mit dem Pallas-Yllästunturi-Nationalpark dazwischen. Das Skiangebot entspricht Levi; die Besucherdichte nicht.',
        'Für Luxusreisen liegt der Reiz im Raum. Architektengeplante Chalets stehen hier allein am Fjellhang; die Wege des Nationalparks führen direkt vom Anwesen weg; die Stille ist es, wofür die Menschen tatsächlich zahlen. Die Polarlichtsicht ist dank der sehr geringen lokalen Lichtverschmutzung ausgezeichnet.',
      ],
      highlights: [
        'Pallas-Yllästunturi-Nationalpark, Finnlands drittgrößter',
        'Zwei Skidörfer auf gegenüberliegenden Seiten des Ylläs-Fjells',
        'Geringere Lichtverschmutzung als jedes andere Skigebiet',
        'Eigene Langlaufloipen (250 km insgesamt)',
      ],
      arrival: 'Kittilä (KTT), 50 Min. per privatem Transfer',
      auroraNote: 'Innerhalb der Nationalparkgrenze, unter den niedrigsten Lichtverschmutzungswerten in Kontinentaleuropa. ~180 Nächte mit klarem Himmel.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Ein einziger Guide, Ihre Gruppe und ein beheiztes Fotofahrzeug, das der Prognose folgt, wohin sie auch zeigt.',
      copy: [
        'Eine sechsstündige private Polarlichtjagd mit einem zertifizierten finnischen Naturfotografie-Guide. Das Fahrzeug ist beheizt und ausgestattet; Stative, Kabelauslöser und arktistaugliche Kameras werden geliehen, wenn Sie keine eigenen mitbringen. Die Route wird am selben Nachmittag anhand des Kp-Index und der Bewölkungsprognose festgelegt.',
        'Warme Speisen und Rentierfelle als Bodenunterlage sind Standard. Das Coaching umfasst die Belichtung der Polarlichter selbst, die Vordergrundkomposition und die Nachbearbeitung noch am selben Abend.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, Sep.–Apr.',
    },
    'helicopter-aurora-flight': {
      hook: 'Ein 45-minütiger Nachthubschrauberflug über die Wolkendecke zu den Polarlichtern selbst.',
      copy: [
        'Betrieben vom einzigen nach Nacht-VFR zertifizierten Hubschrauberbetreiber Finnlands aus Rovaniemi und Ivalo. Der Flug durchstößt die lokale Wolkendecke und kreist innerhalb des aktiven Polarlichtovals, eine vom Boden aus unmögliche Perspektive.',
        'Bodenfotografie ist auf beiden Seiten des Fluges inbegriffen; der Flugteil selbst ist dem Erlebnis gewidmet, nicht der Kamera. Maximal vier Passagiere pro AS350. Wetterfensterabhängig, der Concierge verfolgt die Prognose und benachrichtigt am Vortag.',
      ],
      available: 'Rovaniemi, Ivalo, Okt.–März (wetterabhängig)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Ein neungängiges finnisch-samisches Degustationsmenü, in Ihrer Villenküche von einem tätigen Lappland-Küchenchef zubereitet.',
      copy: [
        'Ein tätiger Küchenchef aus einer der ernstzunehmenden Küchen Lapplands kommt für einen Abend in Ihre Villa. Das Menü wird um das aufgebaut, was in jener Woche tatsächlich Saison hat: Kaltwasser-Saibling, Moltebeere, geräuchertes Rentier, frische Waldpilze, Sanddorn, Wacholder.',
        'Inklusive einer auf das Menü abgestimmten Weinbegleitung, Zutaten, Vorbereitung, Service und Aufräumen. Maximal zehn Gäste. Vegetarische, glutenfreie und schalentierfreie Menüs auf Anfrage, mit mindestens 72 Stunden Vorlauf.',
      ],
      available: 'Jede Villa der Kollektion, ganzjährig',
    },
    'private-husky-safari': {
      hook: 'Ihr eigenes Schlittengespann, Ihr eigener Zwinger-Guide, hinein in den borealen Wald im ersten Licht.',
      copy: [
        'Ein privates Gespann aus sechzehn Schlittenhunden und ein Zwinger-Guide. Die Route führt in das Arbeitstrailnetz eines ernstzunehmenden Schlittenhundezwingers, typischerweise 35 km, mit einer Feuerpause für heißen Preiselbeersaft und gegrillte Wurst auf halber Strecke.',
        'Sie lenken Ihren eigenen Schlitten (zuvor eine 20-minütige Einweisung). Wolloveralls, Fäustlinge und arktische Stiefel werden gestellt. Gruppe von zwei bis sechs Personen, keine geteilten Gruppen, nie mit Fremden zusammengelegt.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, Dez.–Apr.',
    },
    'private-snowmobile-wilderness': {
      hook: 'Eine geführte 80-km-Schneemobilroute durch zugefrorene Seen und unberührten Wald, mit einem über Holzfeuer zubereiteten Mittagessen.',
      copy: [
        'Eine ganztägige geführte Schneemobilroute auf den oberen Fjelltrails, das Netz, das die einheimischen Guides nutzen, nicht die Touristenschleife. Das Mittagessen wird vom Guide über einem Feuer am Trail gekocht (Rentiereintopf, im Feuer gebackenes Brot, heißer Saft).',
        'BRP-Maschinen, Helme, Sturmhauben und Wolloveralls inbegriffen. Zweisitzer-Schlitten verfügbar. Führerschein für den Fahrer erforderlich; der Beifahrersitz benötigt keinen. Maximal vier Schlitten pro Gruppe.',
      ],
      available: 'Saariselkä, Inari, Levi, Dez.–Apr.',
    },
    'private-reindeer-sami-evening': {
      hook: 'Rentierschlittenfahrt auf einer Arbeitsfarm, danach ein Abend in einer privaten Kota mit einem samischen Gastgeber.',
      copy: [
        'Zwei Stunden Rentierschlittenfahrt auf einer aktiven Herdenfarm, gefolgt von einem privaten Abend in einer beheizten Kota (Tipi mit offenem Feuer). Der Gastgeber ist ein samischer Rentierzüchter, der die Farm führt, das Gespräch, kein Skript, ist das Erlebnis.',
        'Zum Abendessen sautiertes Rentier mit Kartoffelpüree und Preiselbeeren, über offenem Feuer zubereitet. Geschichten über die Herde, das Wanderjahr und die Joik-Gesangstradition. Maximal zwölf Gäste.',
      ],
      available: 'Inari, Saariselkä, ganzjährig (Schlittenfahrt Dez.–März)',
    },
    'private-jet-arrival': {
      hook: 'Direkter Privatjet-Transfer nach Ivalo, Kittilä oder Rovaniemi, kein kommerzielles Check-in, kein Umsteigedrehkreuz.',
      copy: [
        'Koordiniert über unsere Jet-Partner in Helsinki, Genf und Doha. Direktflüge nach Ivalo (am nächsten zu den Villen in Saariselkä / Inari), Kittilä (am nächsten zu den Villen in Levi / Ylläs) oder Rovaniemi (am besten für das Arctic TreeHouse).',
        'Vollständige Abfertigung: Bodentransfer zu Ihrer Villa mit einem beheizten Fahrzeug in arktischer Ausführung, Gepäckweiterleitung, Zollabfertigung ohne Warteschlange. Der Concierge meldet den Slot an und stimmt die Ankunft auf die Check-in-Zeit der Villa ab.',
      ],
      available: 'Alle Reiseziele, ganzjährig',
    },
    'helicopter-villa-transfer': {
      hook: 'Aufnahme vom Regionalflughafen direkt zum Landeplatz Ihrer Villa, kein Straßentransfer.',
      copy: [
        'Am häufigsten genutzt für Ankünfte zu den privaten Blockhaus-Anwesen am Ufer des Inarisees. Das Fluggerät ist derselbe AS350, der für die Polarlichtflüge eingesetzt wird; ein einzelner Abschnitt dauert 20–45 Minuten.',
        'Maximal fünf Passagiere + Gepäck. Der Concierge stimmt die Aufnahme auf das Check-in der Villa und das Tageslichtfenster ab, im tiefsten Winter geht die Sonne bereits um 15:00 Uhr unter.',
      ],
      available: 'Rovaniemi, Ivalo → Anwesen am Inarisee',
    },
  },
};

export default overlay;
