import type { Villa } from './villas';
import type { Destination } from './destinations';
import type { Experience } from './experiences';

type VillaOv = Partial<Pick<Villa, 'tagline' | 'copy' | 'signature'>>;
type DestOv = Partial<Pick<Destination, 'position' | 'copy' | 'highlights' | 'arrival' | 'auroraNote'>>;
type ExpOv = Partial<Pick<Experience, 'hook' | 'copy' | 'available'>>;

const overlay: { villas: Record<string, VillaOv>; destinations: Record<string, DestOv>; experiences: Record<string, ExpOv> } = {
  villas: {
    'kakslauttanen-glass-igloo-suite': {
      tagline: 'Vidro térmico aquecido sobre uma cabana de pinho kelo feita à mão, o quarto-aurora original.',
      copy: [
        'Uma villa de madeira autossuficiente, com seu próprio quarto de teto de vidro, cozinha privativa, sala com lareira e sauna finlandesa. O vidro térmico permanece transparente a −30 °C, então você observa as auroras de uma cama king-size sem sair do edredom.',
        'Localizada dentro da propriedade Kakslauttanen, perto do Parque Nacional Urho Kekkonen, a 35 minutos do aeroporto de Ivalo por transfer privativo. Meia pensão no restaurante do resort disponível; chef particular sob solicitação.',
      ],
      signature: [
        'Teto de vidro aquecido sobre o quarto (transparente a −30 °C)',
        'Sauna privativa a lenha + ofurô externo aquecido a lenha',
        'Dois quartos, cozinha completa, sala com lareira',
        'Transfer privativo incluído a partir do aeroporto de Ivalo',
        'Alarme de aurora no quarto via recepção',
        'Opção de meia pensão pela cozinha do resort',
      ],
    },
    'arctic-treehouse-suite': {
      tagline: 'Suíte em balanço projetada por Rajakangas, com fachada de vidro inteira voltada para as auroras.',
      copy: [
        'Uma suíte penthouse de 73 m² sobre palafitas, com vidro do piso ao teto ao longo de toda a largura. Projetada pelo Studio Puisto. Terraço privativo com ofurô. O edifício foi construído ao redor de um único pinheiro, cada detalhe interior escolhido para desaparecer, de modo que a floresta permaneça o único objeto no ambiente.',
        'A cinco minutos da Vila do Papai Noel, útil como base para famílias que viajam na temporada de Natal e querem um refúgio tranquilo à noite, com acesso fácil a Rovaniemi durante o dia.',
      ],
      signature: [
        'Suíte de 73 m², fachada de vidro de altura total voltada para o norte',
        'Terraço privativo com ofurô + sauna externa',
        'Interiores Studio Puisto, ícones do design finlandês por toda parte',
        'Aquecimento de piso, cortinas blackout para dormir durante o dia',
        'Restaurante Rakas na propriedade (chef Kari Aihinen)',
        'Cinco minutos da Vila do Papai Noel',
      ],
    },
    'aurora-village-glass-cabin': {
      tagline: 'Vinte e quatro cabanas de vidro voltadas para nada além de floresta e do oval da aurora.',
      copy: [
        'Inari fica exatamente sob o oval auroral, estatisticamente a latitude de auroras boreais mais confiável da Europa. A Aurora Village é uma propriedade de 24 cabanas, sem tráfego de passagem, sem vilarejos vizinhos no horizonte visível. As cabanas são espaçadas para garantir privacidade, com a cama sob o vidro e o sofá voltado para ele.',
        'O restaurante no local, conduzido por Sami, oferece um menu degustação em torno de rena, salmão-ártico e amora-branca. Os alarmes de aurora são transmitidos por rádio de cabana em cabana, para que ninguém acorde a villa ao lado.',
      ],
      signature: [
        'Cabana de teto de vidro com a cama sob o ápice',
        '24 cabanas em uma propriedade de 30 hectares, generosamente espaçadas',
        'Restaurante conduzido por Sami no local, menu degustação todas as noites',
        'Alarme de aurora via rádio na cabana',
        'Inari é a latitude de auroras mais confiável da UE',
        'Trilha privativa gratuita de raquetes de neve a partir da propriedade',
      ],
    },
    'levin-iglut-golden-crown': {
      tagline: 'Iglus de vidro empoleirados acima do fell de Levi, o único conjunto de iglus da Lapônia voltado para o sul, para o vale.',
      copy: [
        'Quarenta e dois iglus de vidro dispostos na encosta sul do fell de Levi. A maioria das cabanas-aurora aponta para o norte, para uma floresta vazia; a Levin Iglut é uma das pouquíssimas que enquadra as luzes acima do horizonte iluminado da fell-village logo abaixo, melhor para fotógrafos, mais dramático ao entardecer.',
        'A distância de caminhada da vila de Levi (gôndola, restaurantes, ski-in/ski-out), mas os próprios iglus são tranquilos. Restaurant Aurora no local, com o chef se abastecendo num raio de 100 km.',
      ],
      signature: [
        'Panorama de auroras voltado para o sul (raro para a Lapônia)',
        'Distância de caminhada da gôndola + vila de Levi',
        'Restaurant Aurora no local, raio de abastecimento de 100 km',
        'As suítes premium têm ofurô privativo no deck',
        'Acesso ski-in / ski-out na temporada de inverno',
        'Alarme de aurora no quarto',
      ],
    },
    'wilderness-hotel-nellim-aurora-bubble': {
      tagline: 'Uma suíte-bolha de vidro na borda da floresta boreal, a vinte minutos da fronteira russa.',
      copy: [
        'Nellim é um vilarejo de natureza selvagem em atividade (população de 220) na margem leste do Lago Inari. As bolhas-aurora ficam afastadas do chalé principal, em sua própria clareira, cada uma com um domo panorâmico transparente sobre a cama e um ofurô a lenha na varanda.',
        'O chalé promove noites culturais Sami, pesca no gelo no lago e um dos poucos programas guiados certificados de fotografia de auroras da Finlândia. Os quartos esgotam com um ano de antecedência para o pico de fevereiro, o concierge às vezes consegue encontrar uma liberação.',
      ],
      signature: [
        'Domo panorâmico transparente sobre a cama',
        'Ofurô privativo a lenha na varanda',
        'Localização em vilarejo selvagem, a 20 min da fronteira russa',
        'Programa guiado certificado de fotografia de auroras',
        'Programa cultural Sami várias noites por semana',
        'Pesca no Lago Inari + sauna tradicional a fumaça',
      ],
    },
    'star-arctic-suite': {
      tagline: 'Uma suíte com paredes de vidro no cume do fell Kaunispää, o quarto-aurora mais alto do país.',
      copy: [
        'A Star Arctic fica no topo do Kaunispää, o fell que se ergue diretamente da vila de Saariselkä. As suítes Skyview têm paredes de vidro de altura total em três lados, sem cortinas, e elevação suficiente para superar a linha das árvores local, o que significa um verdadeiro panorama de 270° a partir da cama.',
        'A estrada do cume é privativa e iluminada à noite, para que os hóspedes possam dirigir por conta própria. O hotel tem seu próprio observatório, restaurante e uma frota de fat-bikes para o verão.',
      ],
      signature: [
        'Vidro de 270° no cume do fell mais alto da região',
        'Estrada privativa do cume, iluminada à noite',
        'Observatório de céu escuro no local (noites de telescópio)',
        'Sauna com vista do fell do piso ao teto',
        'Suítes premium, vidro de canto, sala de estar separada',
        'Cinco minutos de carro da vila de Saariselkä',
      ],
    },
    'apukka-resort-aurora-cabin': {
      tagline: 'Vagões-aurora de estilo histórico à beira de um lago congelado, a dez minutos do aeroporto de Rovaniemi.',
      copy: [
        'Um punhado de vagões ferroviários de época restaurados, reconstruídos como cabanas-aurora com teto de vidro, instalados bem na borda do lago Apukkajärvi. Conveniente se você tem apenas duas noites e quer pousar, fazer o transfer e estar na sua cama sob o vidro em menos de uma hora.',
        'Fazenda de huskies, renas, pesca no gelo e rota de snowmobile pela natureza, tudo no local. Os vagões em si são intimistas (um quarto, um banheiro, sala de estar); o resort cuida de toda a logística das atividades.',
      ],
      signature: [
        'Design de vagão ferroviário histórico, quarto com teto de vidro',
        'À beira do lago Apukkajärvi',
        'Transfer de 10 minutos a partir do aeroporto de Rovaniemi',
        'Husky + rena + pesca no gelo no local',
        'Trilha de snowmobile a partir da propriedade',
        'Alarme de aurora + ofurô ao lado da cabana',
      ],
    },
    'private-lakeside-log-estate': {
      tagline: 'Uma casa de madeira privativa, feita à mão, em sua própria enseada do Lago Inari. Apenas por consulta ao concierge.',
      copy: [
        'Uma propriedade de madeira de quatro quartos em sua própria enseada privativa, acessada por uma única estrada. Utilizada por um pequeno grupo de hóspedes recorrentes, reservamos algumas semanas a cada temporada como uma alocação privativa.',
        'Inclui uma sauna a fumaça, dois ofurôs a lenha, um galpão para barcos e uma brigada de chefs particulares que coordenamos quando a propriedade está reservada. Acesso a snowmobile e husky pela enseada no inverno; canoa e pesca no lago na temporada do sol da meia-noite.',
      ],
      signature: [
        'Quatro quartos em uma enseada privativa do Lago Inari',
        'Sauna a fumaça + dois ofurôs a lenha',
        'Brigada de chefs particulares organizada sob solicitação',
        'Acesso a snowmobile / husky pelo lago no inverno',
        'Barco + canoa + cais para a temporada do sol da meia-noite',
        'Alocação de concierge, nunca em listagens públicas',
      ],
    },
    'designer-mountain-chalet-levi': {
      tagline: 'Um chalé moderno projetado por arquiteto na encosta sul de Levi. Ski-in / ski-out, andar de bem-estar privativo.',
      copy: [
        'Chalé de três quartos projetado por arquiteto na encosta sul do fell de Levi, com um andar de bem-estar (sauna, vapor, piscina de imersão, sala de tratamentos) no térreo e a área de estar abrindo-se para um terraço de 12 m voltado para o vale.',
        'Uma curta descida de esqui até a gôndola de Levi; uma curta caminhada de volta pelo caminho aquecido. Inclui arrumação diária, preparação do café da manhã e um concierge de esqui de plantão.',
      ],
      signature: [
        'Chalé de três quartos projetado por arquiteto, encosta sul',
        'Ski-in / ski-out pelo caminho aquecido',
        'Andar de bem-estar privativo: sauna, vapor, piscina de imersão, sala de tratamentos',
        'Terraço de vidro de 12 m voltado para o vale',
        'Arrumação diária + preparação do café da manhã incluídas',
        'Concierge de esqui de plantão durante toda a estadia',
      ],
    },
  },
  destinations: {
    'saariselka': {
      position: 'O polo de auroras de luxo do norte da Finlândia, Kakslauttanen, Star Arctic, a borda selvagem de Urho Kekkonen.',
      copy: [
        'Saariselkä fica na orla norte do Parque Nacional Urho Kekkonen, a natureza selvagem protegida mais bruta da Finlândia, e é a vila que definiu a hospedagem-aurora de teto de vidro. A maioria das cabanas de vidro emblemáticas do país (Kakslauttanen, Star Arctic, Northern Lights Village) está a até 10 km da vila.',
        'A vila em si é pequena e percorrível a pé, com uma rua principal, três restaurantes sérios e acesso direto ao parque nacional. O aeroporto de Ivalo, a 30 minutos por transfer privativo, opera jatos regionais e voos fretados particulares.',
      ],
      highlights: [
        'Kakslauttanen Arctic Resort, a propriedade de teto de vidro original',
        'Star Arctic Hotel, suítes no cume do fell Kaunispää',
        'Acesso direto ao Parque Nacional Urho Kekkonen (nível natureza selvagem)',
        'Aeroporto de Ivalo, apto a voos fretados particulares, transfer de 30 min',
      ],
      arrival: 'Ivalo (IVL), 30 min por transfer privativo',
      auroraNote: 'Floresta boreal do interior, baixa poluição luminosa. ~200 noites de aurora com céu limpo por temporada, a segunda melhor da Finlândia, depois de Inari.',
    },
    'inari': {
      position: 'Estatisticamente a latitude de auroras mais confiável da União Europeia. Coração Sami, Lago Inari, céus escuros.',
      copy: [
        'Inari é o município mais ao norte da Finlândia e a capital cultural dos Sami finlandeses. A vila fica no Lago Inari, o terceiro maior lago da Finlândia, com 3.000 ilhas e a menor poluição luminosa ao sul do círculo polar.',
        'Para o turismo de luxo, isso significa duas coisas. Primeiro: aqui as auroras são estatisticamente as mais confiáveis da União Europeia, com as exibições mais ovalmente sobre a cabeça. Segundo: as propriedades de madeira à beira do lago (algumas das quais mantemos de forma privativa) são a hospedagem mais tranquila da Lapônia, sem tráfego de passagem, sem vilarejos vizinhos no horizonte visível.',
      ],
      highlights: [
        'Aurora Village, propriedade de cabanas de vidro de 30 hectares, construída para esse fim',
        'Wilderness Hotel Nellim, bolhas-aurora na margem leste do Lago Inari',
        'Museu Sami SIIDA + programas culturais o ano todo',
        'Propriedades de madeira privativas à beira do lago disponíveis via concierge',
      ],
      arrival: 'Ivalo (IVL), 45 min por transfer privativo',
      auroraNote: 'Maior frequência de auroras na UE continental. ~220 noites de aurora com céu limpo por temporada, a vencedora estatística.',
    },
    'rovaniemi': {
      position: 'A cidade de chegada. Suítes projetadas por arquitetos, voos diretos diários a partir dos principais hubs.',
      copy: [
        'Rovaniemi é a capital regional da Lapônia e o destino de auroras mais fácil de alcançar, vários voos diretos diários de Helsinque, além de voos diretos sazonais de Londres, Frankfurt, Paris, Viena e do Golfo. O aeroporto fica a seis minutos do centro da cidade.',
        'O inventário de luxo aqui gira em torno de suítes de design projetadas por arquitetos a menos de dez minutos do aeroporto (Arctic TreeHouse, Apukka). Transfers de helicóptero do aeroporto até reservas remotas são comuns.',
      ],
      highlights: [
        'Arctic TreeHouse Hotel, suítes em balanço projetadas pelo Studio Puisto',
        'Apukka Resort, vagões-aurora históricos no lago Apukkajärvi',
        'Voos diretos de Londres / Frankfurt / Viena / Doha (sazonal)',
      ],
      arrival: 'Rovaniemi (RVN), 6 min do centro da cidade',
      auroraNote: 'Latitude de auroras mais baixa que Inari/Saariselkä, mas ainda ~150 noites de aurora com céu limpo. Melhor combinada com pelo menos uma noite em uma fell-village.',
    },
    'levi': {
      position: 'O principal resort de esqui da Finlândia. Chalés de luxo na encosta sul, ski-in / ski-out a partir da gôndola de Levi.',
      copy: [
        'Levi é o resort de fell mais desenvolvido da Lapônia, uma vila completa de esportes de inverno com 43 teleféricos, várias cozinhas recomendadas pelo Michelin e um mercado de aluguel de chalés de design que se tornou sério na última década. A gôndola vai do centro da vila até o cume; é na encosta sul que ficam os chalés privativos.',
        'A visibilidade de auroras em Levi é voltada para o sul e dramática, algo raro na Lapônia, já que o horizonte iluminado da vila passa a fazer parte da fotografia. Melhor combinada com uma ou duas noites mais ao norte (Inari ou Saariselkä) para auroras de natureza selvagem de verdade, antes de voltar aqui para o esqui.',
      ],
      highlights: [
        'Levin Iglut, iglus de vidro voltados para o sul acima da fell-village',
        'Chalés de design projetados por arquitetos, encosta sul, ski-in/out',
        '43 teleféricos, pista mais longa de 2,5 km, temporada nov–mai',
        'Aeroporto de Kittilä (KTT) opera voos internacionais diretos sazonais',
      ],
      arrival: 'Kittilä (KTT), 20 min por transfer privativo',
      auroraNote: 'Panorama de auroras voltado para o sul (raro). ~150 noites de céu limpo, mas a vila iluminada oferece uma composição em primeiro plano incomum mais ao norte.',
    },
    'yllas': {
      position: 'A alternativa tranquila a Levi. Parque nacional Pallas-Yllästunturi, menos multidões, floresta mais profunda.',
      copy: [
        'Ylläs é o segundo maior resort de fell da Finlândia, mas parece um quinto do tamanho, a vila está dispersa por dois povoados (Äkäslompolo e Ylläsjärvi), separados por 15 km de fell, com o Parque Nacional Pallas-Yllästunturi entre eles. O inventário de esqui se equipara ao de Levi; a densidade de visitantes não.',
        'Para o turismo de luxo, o apelo é o espaço. Os chalés projetados por arquitetos aqui ficam sozinhos na encosta do fell; as trilhas do parque nacional partem da propriedade; o silêncio é o que as pessoas de fato pagam para ter. A visibilidade de auroras é excelente, graças à pouquíssima poluição luminosa local.',
      ],
      highlights: [
        'Parque Nacional Pallas-Yllästunturi, o 3º maior da Finlândia',
        'Duas vilas de esqui em lados opostos do fell de Ylläs',
        'Menor poluição luminosa que qualquer outro resort de esqui',
        'Trilhas dedicadas de esqui cross-country (250 km no total)',
      ],
      arrival: 'Kittilä (KTT), 50 min por transfer privativo',
      auroraNote: 'Dentro dos limites do parque nacional, entre os menores índices de poluição luminosa da Europa continental. ~180 noites de céu limpo.',
    },
  },
  experiences: {
    'private-aurora-photography-night': {
      hook: 'Um único guia, o seu grupo e um veículo fotográfico aquecido que segue a previsão para onde quer que ela aponte.',
      copy: [
        'Uma caçada às auroras privativa de seis horas com um guia finlandês certificado de fotografia de natureza. O veículo é aquecido e equipado; tripés, disparadores de cabo e câmeras preparadas para o ártico são emprestados se você não trouxer os seus. A rota é definida naquela mesma tarde, com base no índice Kp e na previsão de cobertura de nuvens.',
        'Comida quente e peles de rena para forrar o chão vêm de série. A orientação cobre a exposição para a própria aurora, a composição do primeiro plano e o pós-processamento na mesma noite.',
      ],
      available: 'Inari, Saariselkä, Levi, Rovaniemi, set.–abr.',
    },
    'helicopter-aurora-flight': {
      hook: 'Um voo noturno de helicóptero de 45 minutos acima da camada de nuvens, até as próprias auroras.',
      copy: [
        'Operado pelo único operador de helicópteros da Finlândia certificado para voo noturno VFR, a partir de Rovaniemi e Ivalo. O voo ultrapassa a camada de nuvens local e circula dentro do oval auroral ativo, uma perspectiva impossível a partir do solo.',
        'A fotografia em terra está incluída antes e depois do voo; a parte no ar é para a experiência em si, não para a câmera. Máximo de quatro passageiros por AS350. Sujeito à janela meteorológica, o concierge acompanha a previsão e avisa na véspera.',
      ],
      available: 'Rovaniemi, Ivalo, out.–mar. (depende do tempo)',
    },
    'private-chef-arctic-tasting': {
      hook: 'Um menu degustação finlandês-Sami de nove tempos, preparado na cozinha da sua villa por um chef em atividade da Lapônia.',
      copy: [
        'Um chef em atividade de uma das cozinhas sérias da Lapônia, Nili, Aanaar, Northern Lights Ranch, vai até a sua villa por uma noite. O menu é construído em torno do que está de fato na estação naquela semana: salmão-ártico de água fria, amora-branca, rena defumada, cogumelos frescos da floresta, espinheiro-marítimo, zimbro.',
        'Inclui uma harmonização de vinhos selecionada para o menu, os ingredientes, o preparo, o serviço e a limpeza. Máximo de dez convidados. Menus vegetariano, sem glúten e sem frutos do mar sob solicitação, com no mínimo 72 horas de antecedência.',
      ],
      available: 'Qualquer villa da coleção, o ano todo',
    },
    'private-husky-safari': {
      hook: 'Sua própria parelha de trenó, seu próprio guia do canil, rumo à floresta boreal à primeira luz.',
      copy: [
        'Uma parelha privativa de dezesseis cães de trenó e um guia do canil. A rota segue para a rede de trilhas de trabalho de um canil de trenó sério, normalmente 35 km, com uma parada à beira da fogueira para suco quente de oxicoco e linguiça grelhada na metade do caminho.',
        'Você conduz o seu próprio trenó (antes, uma instrução de 20 minutos). Macacões de lã, luvas e botas árticas são fornecidos. Grupo de dois a seis, sem grupos compartilhados, nunca combinado com desconhecidos.',
      ],
      available: 'Rovaniemi, Levi, Saariselkä, dez.–abr.',
    },
    'private-snowmobile-wilderness': {
      hook: 'Uma rota guiada de snowmobile de 80 km através de lagos congelados e floresta intocada, com um almoço preparado no fogo de lenha.',
      copy: [
        'Uma rota guiada de snowmobile de dia inteiro pelas trilhas do fell alto, a rede que os guias locais usam, não o circuito turístico. O almoço é preparado pelo guia no fogo, ao longo da trilha (ensopado de rena, pão assado no fogo, suco quente).',
        'Máquinas BRP, capacetes, balaclavas e macacões de lã incluídos. Snowmobiles para dois disponíveis. Carteira de motorista exigida para o condutor; o assento do passageiro não precisa de carteira. Máximo de quatro snowmobiles por grupo.',
      ],
      available: 'Saariselkä, Inari, Levi, dez.–abr.',
    },
    'private-reindeer-sami-evening': {
      hook: 'Trenó puxado por renas em uma fazenda em atividade e, depois, uma noite em uma kota privativa com um anfitrião Sami.',
      copy: [
        'Duas horas de trenó puxado por renas em uma fazenda de pastoreio em atividade, seguidas de uma noite privativa em uma kota aquecida (tenda cônica com fogo aberto). O anfitrião é um criador de renas Sami que toca a fazenda, a conversa, e não um roteiro, é a experiência.',
        'O jantar é rena salteada com purê de batata e oxicoco, preparada no fogo aberto. Histórias sobre o rebanho, o ano da migração e a tradição do canto joik. Máximo de doze convidados.',
      ],
      available: 'Inari, Saariselkä, o ano todo (trenó dez.–mar.)',
    },
    'private-jet-arrival': {
      hook: 'Transfer direto em jato privativo para Ivalo, Kittilä ou Rovaniemi, sem check-in comercial, sem hub de conexão.',
      copy: [
        'Coordenado por meio dos nossos parceiros de jato em Helsinque, Genebra e Doha. Voos diretos para Ivalo (mais próximo das villas de Saariselkä / Inari), Kittilä (mais próximo das villas de Levi / Ylläs) ou Rovaniemi (melhor para o Arctic TreeHouse).',
        'Atendimento completo: transfer terrestre até a sua villa em um veículo aquecido de especificação ártica, bagagem encaminhada, alfândega liberada sem fila. O concierge solicita o slot e ajusta a chegada ao horário de check-in da villa.',
      ],
      available: 'Todos os destinos, o ano todo',
    },
    'helicopter-villa-transfer': {
      hook: 'Embarque a partir do aeroporto regional direto para o heliponto da sua villa, sem transfer rodoviário.',
      copy: [
        'Usado com mais frequência para chegadas às propriedades de madeira privativas à beira do Lago Inari. A aeronave é o mesmo AS350 usado nos voos de aurora; um único trecho leva de 20 a 45 minutos.',
        'Máximo de cinco passageiros + bagagem. O concierge ajusta o embarque ao check-in da villa e à janela de luz do dia, no auge do inverno, o sol se põe às 15h.',
      ],
      available: 'Rovaniemi, Ivalo → propriedades do Lago Inari',
    },
  },
};

export default overlay;
