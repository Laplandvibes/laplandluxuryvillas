import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Vetro termico riscaldato sopra una baita in pino kelo lavorata a mano: la camera aurora originale.',
      copy: [
        'Una villa di tronchi indipendente con la propria camera dal tetto in vetro, cucina privata, salotto con camino e sauna finlandese. Il vetro termico resta limpido a −30 °C, cosi osservate l’aurora da un letto king-size senza lasciare il piumino.',
        'Situata all’interno della tenuta Kakslauttanen, vicino al Parco Nazionale di Urho Kekkonen: 35 minuti di transfer privato dall’aeroporto di Ivalo. Disponibile la mezza pensione con il ristorante del resort; chef privato su richiesta.',
      ],
      signature: [
        'Tetto in vetro riscaldato sopra la camera (limpido a −30 °C)',
        'Sauna privata a legna + vasca idromassaggio esterna riscaldata a legna',
        'Due camere da letto, cucina completa, salotto con camino',
        'Transfer privato incluso dall’aeroporto di Ivalo',
        'Sveglia aurora in camera tramite reception',
        'Opzione mezza pensione con la cucina del resort',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Suite a sbalzo firmata Rajakangas, con facciata interamente vetrata rivolta verso l’aurora.',
      copy: [
        'Una suite penthouse di 73 m² su pilastri, con vetrate dal pavimento al soffitto per l’intera larghezza. Progettata da Studio Puisto. Terrazza privata con vasca idromassaggio. L’edificio e stato costruito attorno a un singolo pino: ogni dettaglio degli interni e pensato per sparire, lasciando la foresta come unico soggetto nella stanza.',
        'A cinque minuti dal Villaggio di Babbo Natale: una base utile per le famiglie in viaggio nel periodo natalizio, che cercano un rifugio tranquillo la notte e un facile accesso a Rovaniemi di giorno.',
      ],
      signature: [
        'Suite di 73 m², facciata interamente vetrata esposta a nord',
        'Terrazza privata con vasca idromassaggio + sauna esterna',
        'Interni Studio Puisto, icone del design finlandese ovunque',
        'Riscaldamento a pavimento, tende oscuranti per il sonno diurno',
        'Ristorante Rakas nella struttura',
        'Cinque minuti dal Villaggio di Babbo Natale',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Ventiquattro cabine di vetro affacciate solo sulla foresta e sull’ovale aurorale.',
      copy: [
        'Inari si trova esattamente sotto l’ovale aurorale: statisticamente la latitudine piu affidabile d’Europa per l’aurora boreale. Aurora Village e una tenuta di 24 cabine senza traffico di passaggio, senza villaggi vicini all’orizzonte visibile. Le cabine sono distanziate per garantire la privacy, con il letto sotto il vetro e il divano rivolto verso di esso.',
        'Il ristorante interno guidato dai Sami propone un menu degustazione attorno a renna, salmerino artico e camemoro. Gli allarmi aurora vengono trasmessi via radio da cabina a cabina, cosi nessuno sveglia la villa accanto.',
      ],
      signature: [
        'Cabina dal tetto in vetro con il letto sotto l’apice',
        '24 cabine su una tenuta di 30 ettari, ampiamente distanziate',
        'Ristorante guidato dai Sami nella struttura, menu degustazione ogni sera',
        'Allarme aurora tramite radio in cabina',
        'Inari e la latitudine aurorale piu affidabile dell’UE',
        'Sentiero privato per ciaspolate gratuito dalla struttura',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Igloo di vetro arroccati sopra la fell di Levi: l’unico gruppo di igloo della Lapponia rivolto a sud, verso la valle.',
      copy: [
        'Quarantadue igloo di vetro disposti sulla spalla meridionale della fell di Levi. La maggior parte delle cabine aurora e rivolta a nord, verso una foresta spoglia; Levin Iglut e uno dei pochissimi a incorniciare le luci sopra lo skyline illuminato del villaggio della fell sottostante: meglio per i fotografi, piu suggestivo al tramonto.',
        'A distanza pedonale dal villaggio di Levi (gondola, ristoranti, ski-in/ski-out), ma gli igloo in se restano tranquilli. Ristorante Aurora nella struttura, con lo chef che si rifornisce entro 100 km.',
      ],
      signature: [
        'Panorama aurorale rivolto a sud (raro per la Lapponia)',
        'A distanza pedonale dalla gondola e dal villaggio di Levi',
        'Ristorante Aurora nella struttura, raggio di approvvigionamento di 100 km',
        'Le suite premium hanno una vasca idromassaggio privata in terrazza',
        'Accesso ski-in / ski-out nella stagione invernale',
        'Sveglia aurora in camera',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Una suite a bolla di vetro ai margini della foresta boreale, a venti minuti dal confine russo.',
      copy: [
        'Nellim e un villaggio di frontiera funzionante (220 abitanti) sulla sponda orientale del lago Inari. Le bolle aurora sono collocate a parte rispetto alla lodge principale, in una radura propria, ciascuna con una cupola panoramica trasparente sopra il letto e una vasca idromassaggio a legna sotto il portico.',
        'La lodge propone serate culturali Sami, pesca sul ghiaccio nel lago e uno dei pochi programmi guidati e certificati di fotografia dell’aurora in Finlandia. Le camere si esauriscono con un anno di anticipo per il picco di febbraio: il concierge a volte riesce a trovare una disponibilita liberata.',
      ],
      signature: [
        'Cupola panoramica trasparente sopra il letto',
        'Vasca idromassaggio privata a legna sotto il portico',
        'Posizione in villaggio di frontiera, 20 min dal confine russo',
        'Programma guidato e certificato di fotografia dell’aurora',
        'Programma culturale Sami diverse sere a settimana',
        'Pesca nel lago Inari + tradizionale sauna a fumo',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Una suite con pareti di vetro sulla vetta della fell di Kaunispää: la camera aurora piu alta del paese.',
      copy: [
        'Star Arctic si trova proprio in cima a Kaunispää, la fell che si erge direttamente dal villaggio di Saariselkä. Le suite Skyview hanno pareti di vetro a tutta altezza su tre lati, nessuna tenda e un’altitudine sufficiente a superare la linea degli alberi locale, offrendo un autentico panorama di 270° dal letto.',
        'La strada per la vetta e privata e illuminata di notte, cosi gli ospiti possono guidare da soli. L’hotel dispone di un proprio osservatorio, un ristorante e una flotta di fat-bike per l’estate.',
      ],
      signature: [
        'Vetro a 270° sulla vetta della fell piu alta della zona',
        'Strada privata per la vetta, illuminata di notte',
        'Osservatorio a cielo buio nella struttura (serate al telescopio)',
        'Sauna con vista sulla fell dal pavimento al soffitto',
        'Suite premium, vetro angolare, salotto separato',
        'Cinque minuti d’auto dal villaggio di Saariselkä',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Vagoni aurora in stile storico sulla riva di un lago ghiacciato, a dieci minuti dall’aeroporto di Rovaniemi.',
      copy: [
        'Alcuni vagoni ferroviari d’epoca restaurati e ricostruiti come cabine aurora dal tetto in vetro, collocati proprio sul bordo del lago Apukkajärvi. Comodi se avete solo due notti e volete atterrare, fare il transfer ed essere a letto sotto il vetro nel giro di un’ora.',
        'Fattoria di husky, renne, pesca sul ghiaccio e percorso in motoslitta verso la natura selvaggia nella struttura. I vagoni in se sono intimi (una camera, un bagno, salotto); il resort gestisce tutta la logistica delle attivita.',
      ],
      signature: [
        'Design a vagone ferroviario storico, camera dal tetto in vetro',
        'Sulla riva del lago Apukkajärvi',
        'Transfer di 10 minuti dall’aeroporto di Rovaniemi',
        'Husky + renne + pesca sul ghiaccio nella struttura',
        'Pista per motoslitta dalla struttura',
        'Sveglia aurora + vasca idromassaggio accanto alla cabina',
      ],
    },
    'private-lakeside-log-estate': {
      tagline: 'Una casa di tronchi privata costruita a mano sulla propria baia del lago Inari. Solo su richiesta al concierge.',
      copy: [
        'Una tenuta di tronchi con quattro camere sulla propria baia privata, raggiungibile da un’unica strada. Frequentata da un piccolo gruppo di ospiti abituali: tratteniamo alcune settimane ogni stagione come allocazione privata.',
        'Comprende una sauna a fumo, due vasche idromassaggio a legna, una rimessa per barche e una brigata di chef privata che coordiniamo quando la proprieta e prenotata. Accesso in motoslitta e con husky tramite la baia in inverno; canoa e pesca nel lago nella stagione del sole di mezzanotte.',
      ],
      signature: [
        'Quattro camere su una baia privata del lago Inari',
        'Sauna a fumo + due vasche idromassaggio a legna',
        'Brigata di chef privata organizzata su richiesta',
        'Accesso in motoslitta / con husky tramite il lago in inverno',
        'Barca + canoa + pontile per la stagione del sole di mezzanotte',
        'Allocazione concierge, mai sugli annunci pubblici',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Uno chalet moderno firmato da un architetto sul versante sud di Levi. Ski-in / ski-out, piano benessere privato.',
      copy: [
        'Chalet di tre camere firmato da un architetto sul versante sud della fell di Levi, con un piano benessere (sauna, bagno turco, vasca a immersione, sala trattamenti) al piano terra e lo spazio living che si apre su una terrazza di 12 m affacciata sulla valle.',
        'Una breve discesa con gli sci fino alla gondola di Levi; una breve risalita a piedi lungo il sentiero riscaldato. Comprende pulizia giornaliera, allestimento della colazione e un concierge sci reperibile.',
      ],
      signature: [
        'Chalet di tre camere firmato da un architetto, versante sud',
        'Ski-in / ski-out tramite il sentiero riscaldato',
        'Piano benessere privato: sauna, bagno turco, vasca a immersione, sala trattamenti',
        'Terrazza vetrata di 12 m affacciata sulla valle',
        'Pulizia giornaliera + allestimento della colazione inclusi',
        'Concierge sci reperibile per tutto il soggiorno',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'Il polo del lusso aurorale della Finlandia settentrionale: Kakslauttanen, Star Arctic, il margine selvaggio di Urho Kekkonen.',
      copy: [
        'Saariselkä sorge sul margine settentrionale del Parco Nazionale di Urho Kekkonen, la natura protetta piu selvaggia della Finlandia, ed e il villaggio che ha definito gli alloggi aurora dal tetto in vetro. La maggior parte delle cabine di vetro di punta del paese (Kakslauttanen, Star Arctic, Northern Lights Village) si trova entro 10 km dal villaggio.',
        'Il villaggio in se e piccolo e percorribile a piedi, con una strada principale, tre ristoranti seri e accesso diretto al parco nazionale. L’aeroporto di Ivalo, 30 minuti di transfer privato, serve jet regionali e voli charter privati.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, la proprieta dal tetto in vetro originale',
        'Star Arctic Hotel, suite in vetta sulla fell di Kaunispää',
        'Accesso diretto al Parco Nazionale di Urho Kekkonen (di grado wilderness)',
        'Aeroporto di Ivalo, abilitato ai charter privati, transfer di 30 min',
      ],
      arrival: 'Ivalo (IVL), 30 min con transfer privato',
      auroraNote: 'Foresta boreale interna, basso inquinamento luminoso. ~200 notti aurora a cielo sereno per stagione, la seconda migliore della Finlandia dopo Inari.',
    },
    'inari': {
      position: 'Statisticamente la latitudine aurorale piu affidabile dell’Unione Europea. Cuore Sami, lago Inari, cieli bui.',
      copy: [
        'Inari e il comune piu settentrionale della Finlandia e la capitale culturale dei Sami finlandesi. Il villaggio sorge sul lago Inari, il terzo lago piu grande della Finlandia, con 3.000 isole e il minor inquinamento luminoso a sud del circolo polare.',
        'Per il viaggio di lusso questo significa due cose. Primo: qui le aurore sono statisticamente le piu affidabili dell’Unione Europea, con i display piu spesso allo zenit. Secondo: le tenute di tronchi in riva al lago (alcune delle quali tratteniamo in privato) sono gli alloggi piu tranquilli della Lapponia, nessun traffico di passaggio, nessun villaggio vicino all’orizzonte visibile.',
      ],
      highlights: [
        'Aurora Village, tenuta di cabine di vetro di 30 ettari costruita su misura',
        'Wilderness Hotel Nellim, bolle aurora sulla sponda est del lago Inari',
        'Museo Sami SIIDA + programmi culturali tutto l’anno',
        'Tenute private di tronchi in riva al lago disponibili tramite concierge',
      ],
      arrival: 'Ivalo (IVL), 45 min con transfer privato',
      auroraNote: 'La piu alta frequenza aurorale dell’UE continentale. ~220 notti aurora a cielo sereno per stagione, la vincitrice statistica.',
    },
    'rovaniemi': {
      position: 'La citta d’arrivo. Suite firmate da architetti, voli diretti giornalieri dai principali hub.',
      copy: [
        'Rovaniemi e il capoluogo regionale della Lapponia e la destinazione aurorale piu facile da raggiungere, piu voli diretti giornalieri da Helsinki, oltre a voli diretti stagionali da Londra, Francoforte, Parigi, Vienna e dal Golfo. L’aeroporto e a sei minuti dal centro citta.',
        'L’offerta di lusso qui ruota attorno a suite di design firmate da architetti entro dieci minuti dall’aeroporto (Arctic TreeHouse, Apukka). I transfer in elicottero dall’aeroporto verso le riserve remote sono comuni.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, suite a sbalzo progettate da Studio Puisto',
        'Apukka Resort, vagoni aurora storici sul lago Apukkajärvi',
        'Voli diretti da Londra / Francoforte / Vienna / Doha (stagionali)',
      ],
      arrival: 'Rovaniemi (RVN), 6 min dal centro citta',
      auroraNote: 'Latitudine aurorale piu bassa rispetto a Inari/Saariselkä, ma comunque ~150 notti aurora a cielo sereno. Da abbinare ad almeno una notte in un villaggio di fell.',
    },
    'levi': {
      position: 'La principale stazione sciistica della Finlandia. Chalet di lusso sul versante sud, ski-in / ski-out dalla gondola di Levi.',
      copy: [
        'Levi e la stazione di fell piu sviluppata della Lapponia, un completo villaggio di sport invernali con 43 impianti, diverse cucine raccomandate dalla Michelin e un mercato di noleggio chalet di design diventato serio nell’ultimo decennio. La gondola va dal centro del villaggio alla vetta; il versante sud e dove sorgono gli chalet privati.',
        'La visibilita dell’aurora da Levi e rivolta a sud e suggestiva, cosa rara per la Lapponia, poiche lo skyline illuminato del villaggio entra a far parte della fotografia. Da abbinare a una o due notti piu a nord (Inari o Saariselkä) per una vera aurora wilderness, prima di tornare qui per lo sci.',
      ],
      highlights: [
        'Levin Iglut, igloo di vetro rivolti a sud sopra il villaggio di fell',
        'Chalet di design firmati da architetti, versante sud, ski-in/out',
        '43 impianti di risalita, pista piu lunga 2,5 km, stagione nov–mag',
        'L’aeroporto di Kittilä (KTT) serve voli internazionali diretti stagionali',
      ],
      arrival: 'Kittilä (KTT), 20 min con transfer privato',
      auroraNote: 'Panorama aurorale rivolto a sud (raro). ~150 notti a cielo sereno, ma il villaggio illuminato offre una composizione in primo piano insolita piu a nord.',
    },
    'yllas': {
      position: 'L’alternativa tranquilla a Levi. Parco nazionale Pallas-Yllästunturi, meno folla, foresta piu profonda.',
      copy: [
        'Ylläs e la seconda stazione di fell piu grande della Finlandia, ma sembra un quinto delle dimensioni, il villaggio e disperso su due insediamenti (Äkäslompolo e Ylläsjärvi), separati da 15 km di fell, con il Parco Nazionale Pallas-Yllästunturi tra loro. L’offerta sciistica eguaglia quella di Levi; la densita di visitatori no.',
        'Per il viaggio di lusso l’attrattiva e lo spazio. Gli chalet firmati da architetti qui sorgono isolati sul fianco della fell; i sentieri del parco nazionale partono dalla proprieta; il silenzio e cio per cui la gente paga davvero. La visibilita dell’aurora e eccellente grazie al bassissimo inquinamento luminoso locale.',
      ],
      highlights: [
        'Parco Nazionale Pallas-Yllästunturi, il 3° piu grande della Finlandia',
        'Due villaggi sciistici sui lati opposti della fell di Ylläs',
        'Inquinamento luminoso piu basso di qualsiasi altra stazione sciistica',
        'Piste dedicate al fondo (250 km in totale)',
      ],
      arrival: 'Kittilä (KTT), 50 min con transfer privato',
      auroraNote: 'All’interno del confine del parco nazionale, tra i valori di inquinamento luminoso piu bassi dell’Europa continentale. ~180 notti a cielo sereno.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Una sola guida, il vostro gruppo e un veicolo fotografico riscaldato che segue le previsioni ovunque puntino.',
      copy: [
        'Una caccia all’aurora privata di sei ore con una guida finlandese certificata di fotografia naturalistica. Il veicolo e riscaldato e attrezzato; treppiedi, scatti flessibili e fotocamere adatte all’artico vengono prestati se non portate i vostri. Il percorso si decide nel pomeriggio stesso in base all’indice Kp e alle previsioni di nuvolosita.',
        'Cibo caldo e pelli di renna come isolante dal suolo sono di serie. L’istruzione copre l’esposizione per l’aurora stessa, la composizione del primo piano e la post-produzione la sera stessa.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, set–apr',
    },
    'helicopter-aurora-flight': {
      hook: 'Un volo notturno in elicottero di 45 minuti sopra lo strato di nubi, fino alle aurore stesse.',
      copy: [
        'Operato dall’unico operatore di elicotteri della Finlandia certificato per il volo notturno VFR, da Rovaniemi e Ivalo. Il volo supera lo strato di nubi locale e gira all’interno dell’ovale aurorale attivo: una prospettiva impossibile da terra.',
        'La fotografia a terra e inclusa su entrambi i lati del volo; la parte in volo e dedicata all’esperienza in se, non alla fotocamera. Massimo quattro passeggeri per AS350. Soggetto a finestra meteo: il concierge segue le previsioni e avvisa il giorno prima.',
      ],
      available: 'Rovaniemi, Ivalo, ott–mar (dipende dal meteo)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Un menu degustazione finlandese-sami di nove portate cucinato nella cucina della vostra villa da uno chef in attivita della Lapponia.',
      copy: [
        'Uno chef in attivita di una delle cucine serie della Lapponia viene nella vostra villa per una serata. Il menu si costruisce attorno a cio che e davvero di stagione quella settimana: salmerino artico d’acqua fredda, camemoro, renna affumicata, funghi di bosco freschi, olivello spinoso, ginepro.',
        'Comprende un abbinamento di vini curato per il menu, gli ingredienti, la preparazione, il servizio e la pulizia. Massimo dieci ospiti. Menu vegetariano, senza glutine e senza crostacei su richiesta, con almeno 72 ore di preavviso.',
      ],
      available: 'Qualsiasi villa della collezione, tutto l’anno',
    },
    'private-husky-safari': {
      hook: 'Il vostro tiro di cani, la vostra guida del canile, nella foresta boreale alle prime luci.',
      copy: [
        'Un tiro privato di sedici cani da slitta e una guida del canile. Il percorso si addentra nella rete di sentieri di lavoro di un serio canile di cani da slitta, di norma 35 km, con una sosta accanto al fuoco per succo caldo di mirtillo rosso e salsiccia alla griglia a meta strada.',
        'Guidate la vostra slitta (prima un briefing di 20 minuti). Tute di lana, manopole e stivali artici sono forniti. Gruppo da due a sei: niente gruppi condivisi, mai abbinati a estranei.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, dic–apr',
    },
    'private-snowmobile-wilderness': {
      hook: 'Un percorso guidato in motoslitta di 80 km tra laghi ghiacciati e foresta incontaminata, con un pranzo cotto sul fuoco di legna.',
      copy: [
        'Un percorso guidato in motoslitta di un’intera giornata sui sentieri delle fell alte: la rete che usano le guide locali, non l’anello turistico. Il pranzo viene cucinato sul fuoco lungo il percorso (stufato di renna, pane cotto sul fuoco, succo caldo) dalla guida.',
        'Mezzi BRP, caschi, passamontagna e tute di lana inclusi. Disponibili motoslitte a due posti. Patente richiesta per il conducente; il posto passeggero non richiede patente. Massimo quattro motoslitte per gruppo.',
      ],
      available: 'Saariselkä, Inari, Levi, dic–apr',
    },
    'private-reindeer-sami-evening': {
      hook: 'Slitta trainata da renne in una fattoria in attivita, poi una serata in una kota privata con un ospite Sami.',
      copy: [
        'Due ore di slitta trainata da renne in una fattoria di pastorizia in attivita, seguite da una serata privata in una kota riscaldata (tenda conica con fuoco aperto). L’ospite e un allevatore di renne Sami che gestisce la fattoria: la conversazione, non un copione, e l’esperienza.',
        'La cena e renna saltata con pure di patate e mirtillo rosso, preparata sul fuoco aperto. Racconti sulla mandria, sull’anno della transumanza e sulla tradizione del canto joik. Massimo dodici ospiti.',
      ],
      available: 'Inari, Saariselkä, tutto l’anno (slitta dic–mar)',
    },
    'private-jet-arrival': {
      hook: 'Transfer diretto in jet privato verso Ivalo, Kittilä o Rovaniemi: niente check-in commerciale, niente hub di transito.',
      copy: [
        'Coordinato tramite i nostri partner jet a Helsinki, Ginevra e Doha. Voli diretti verso Ivalo (il piu vicino alle ville di Saariselkä / Inari), Kittilä (il piu vicino alle ville di Levi / Ylläs) o Rovaniemi (ideale per l’Arctic TreeHouse).',
        'Assistenza completa: transfer a terra fino alla vostra villa con un veicolo riscaldato di specifica artica, bagagli inoltrati, dogana sbrigata senza coda. Il concierge prenota lo slot e accorda l’arrivo all’orario di check-in della villa.',
      ],
      available: 'Tutte le destinazioni, tutto l’anno',
    },
    'helicopter-villa-transfer': {
      hook: 'Sollevamento dall’aeroporto regionale direttamente alla piazzola della vostra villa: niente transfer su strada.',
      copy: [
        'Usato piu spesso per gli arrivi alle tenute private di tronchi in riva al lago Inari. Il velivolo e lo stesso AS350 usato per i voli aurora; un singolo settore richiede dai 20 ai 45 minuti.',
        'Massimo cinque passeggeri + bagagli. Il concierge accorda il sollevamento al check-in della villa e alla finestra di luce diurna: nel cuore dell’inverno il sole tramonta gia alle 15:00.',
      ],
      available: 'Rovaniemi, Ivalo → tenute del lago Inari',
    },
  },
};

export default overlay;
