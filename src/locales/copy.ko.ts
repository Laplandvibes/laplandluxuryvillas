import type { SiteCopy } from './types'

const ko: SiteCopy = {
  nav: {
    villas: '빌라', suites: '스위트', destinations: '여행지', experiences: '체험',
    midnightSun: '백야', about: '소개', privateInquiry: '비공개 문의',
    openMenu: '메뉴 열기', closeMenu: '메뉴 닫기',
  },
  cta: {
    browseCollection: '컬렉션 보기',
    beginPrivateInquiry: '비공개 문의 시작',
    fullCollection: '전체 컬렉션',
    readProfile: '프로필 보기',
    inquire: '문의하기',
    viewRates: '요금 보기',
    viewOptions: '옵션 보기',
    viewPublicRates: '공개 요금 보기',
    orSendPrivateInquiry: '또는 비공개 문의를 보내세요',
    seeTheCollection: '컬렉션 보기',
    inquireAboutJune: '6월 일정 문의',
    inquireAboutJuneShort: '6월 문의',
    seeSummerCollection: '여름 컬렉션 보기',
    fullVillaCollection: '전체 빌라 컬렉션',
    sendPrivateInquiry: '비공개 문의 보내기',
    sendAnother: '다른 문의 보내기',
    home: '홈',
    theCollection: '컬렉션',
    sending: '보내는 중…',
    subscribe: '구독',
    subscribed: '구독 완료',
  },
  badges: {
    onRequest: '요청 시 안내',
    fromPerNight: '1박 기준 ~',
    fromPerPerson: '1인 기준 ~',
    fromPerGroup: '그룹 기준 ~',
    rate: '요금',
    bedroom: '베드룸',
    bedrooms: '베드룸',
    sleeps: '수용 인원',
    arrival: '도착',
    aurora: '오로라',
    highlights: '하이라이트',
    villas: (n) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    villasIn: (name) => `${name}의 빌라`,
    villasInH2: (n, _name) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    alsoInCollection: '컬렉션의 다른 빌라',
    threeOthers: '함께 고려해 볼 만한 다른 빌라 3채.',
    signatureDetails: '시그니처 디테일',
    sixVerifyOnArrival: '도착하셔서 직접 확인하실 수 있는 여섯 가지.',
    theDestination: '여행지',
    fullCollectionShort: '전체 컬렉션',
  },
  tier: {
    signature: '시그니처',
    private: '프라이빗 컬렉션',
    reserve: 'Reserve · 컨시어지 전용',
  },
  category: {
    'glass-roof': '글래스 루프 빌라',
    'log-estate': '프라이빗 통나무 저택',
    'designer-suite': '디자이너 스위트',
    'alpine-chalet': '알파인 샬레',
    'lakeside-retreat': '호숫가 리트리트',
  },
  concierge: {
    eyebrow: '프라이빗 컨시어지',
    defaultTitle: '라플란드 여행을 더 차분하게 준비하는 방법.',
    defaultBody: '선호 사항, 날짜, 인원을 한 통의 메시지로 보내 주세요. 컨시어지가 영업일 기준 하루 안에 비공개 추천 목록과 함께 답장해 드립니다. 공개 프로필도, 공유 캘린더도 없습니다.',
    inquireBtn: '비공개 문의',
    emailLabel: 'private@laplandvibes.com',
    badges: {
      anonymous: '익명 여행 설계',
      reply: '영업일 기준 하루 내 답장',
      rates: '요청 시 직접 요금 안내',
    },
  },
  midnightSunBand: {
    eyebrow: '6월 6일 – 7월 7일',
    h2: '같은 빌라, 끊기지 않는 빛 속의 32일.',
    body: '건축은 그대로, 계절만 바뀝니다. 글래스 루프는 지지 않는 태양을 향한 천창이 되고, 호수는 녹고, 숲은 클라우드베리로 가득 찹니다. 겨울의 절반에 불과한 수요, 그리고 프라이빗 셰프, 헬리콥터 전세기, reserve 빌라가 그해 남은 일정을 여는 한 해의 유일한 창입니다.',
    primary: '여름 컬렉션 보기',
    secondary: '6월 일정 문의',
  },
  newsletter: {
    eyebrow: '#LaplandVibes 뉴스레터',
    h2: '빌라가 새 날짜를 열거나 비공개로 풀린 객실 소식을 접했을 때만 조용히 알려 드립니다.',
    lede: '직접 요금. 막판에 나온 컨시어지 자리. 새 달이 뜨기 한 주 전의 오로라 관측 창 예보. 스팸은 없습니다, 핀란드에서 직접 쓰고, 전할 만한 구체적인 소식이 있을 때만 보냅니다.',
    emailPlaceholder: 'your@email.com',
    footnote: '클릭 한 번으로 구독 해지.',
    welcome: '환영합니다. 첫 소식은 일주일 안에 도착합니다.',
    already: '이미 목록에 계십니다, 다음 소식에서 뵙겠습니다.',
    invalidEmail: '이메일 주소가 올바르지 않은 것 같습니다.',
    networkError: '네트워크 오류입니다. 다시 시도해 주세요.',
    genericError: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  },
  affiliateDisclosure: {
    compact: '제휴 링크, 예약하시면 추가 비용 없이 저희가 소액의 수수료를 받습니다.',
    full: '이 페이지에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 추가 비용 없이 LaplandLuxuryVillas가 수수료를 받을 수 있습니다.',
  },
  hero: {
    home: {
      eyebrow: '프라이빗 컬렉션',
      title: '핀란드 라플란드, 조용히, 시장의 최상단에서.',
      lede: '라플란드 곳곳의 프라이빗 럭셔리 빌라를 손수 고른 작은 컬렉션, 컨시어지가 응대하며, 요금은 요청 시 안내합니다.',
      primary: '컬렉션 보기', secondary: '비공개 문의',
    },
    villas: {
      eyebrow: '컬렉션',
      title: '빌라 9채. 여행지 5곳. 한 번의 비공개 문의.',
      lede: '아래의 모든 숙소는 운영사가 공개한 정보와 최근 투숙객 후기를 바탕으로 검증했습니다. 원하시는 건물 유형으로 필터링하시거나, 비공개 문의를 보내시면 날짜에 맞춰 추천 목록을 만들어 드립니다.',
    },
    suites: {
      eyebrow: '디자이너 스위트',
      title: '빌라까지는 필요 없지만, 그 글래스 루프만은 포기할 수 없을 때.',
      lede: '건축 그 자체가 경험이 되는 원베드룸 스위트와 오로라 캐빈의 짧은 목록. 인원은 줄이고, 파노라마 천장은 그대로.',
    },
    destinations: {
      eyebrow: '여행지',
      title: '다섯 곳, 저마다 그곳이어야 할 분명한 이유가 있습니다.',
      lede: '라플란드는 어디나 같지 않습니다. 북극권에서 북쪽으로 50km씩 올라갈 때마다 오로라 빈도, 도착 동선, 숙소 밀도가 뚜렷이 달라집니다.',
    },
    experiences: {
      eyebrow: '맞춤 체험',
      title: '유리 아래의 밤, 그 전에 보내는 하루.',
      lede: '빌라와 함께 엮는 여덟 가지 프라이빗 체험, 각각 날씨 창, 일조 시간, 빌라 체크인 시각에 맞춰 예약합니다.',
    },
    midnightSun: {
      eyebrow: '6월 6일 – 7월 7일',
      title: '해가 지지 않는 32일의 창.',
      lede: '백야의 계절에 머무는 바로 그 빌라들, 손님은 더 적고, 끝없는 빛은 더 부드럽습니다.',
      primary: '6월 일정 문의', secondary: '컬렉션 보기',
    },
    concierge: {
      eyebrow: '프라이빗 컨시어지',
      title: '한 통의 비공개 메시지, 한 건의 엄선된 추천 목록.',
      lede: '날짜, 인원, 그리고 마음에 두신 여행의 성격을 보내 주세요. 영업일 기준 하루 안에 답장해 드립니다, 잘 맞는 경우에는 공개되지 않는 reserve 빌라도 함께 제안합니다.',
    },
    about: {
      eyebrow: '소개',
      title: '일부러 짧게 유지하는 짧은 목록.',
      lede: '라플란드 최고의 빌라와 스위트를 모은 프라이빗 컬렉션, 익명 컨시어지, 가능한 곳에서는 직접 요금, 그 사이에 어떤 플랫폼도 두지 않습니다.',
    },
  },
  home: {
    philosophy: {
      eyebrow: '일하는 방식',
      h2: '예약 플랫폼의 정반대.',
      items: [
        { title: '디렉터리가 아닌 짧은 목록.', body: '여정을 떠날 만한 이유가 분명한 여행지에 자리한 빌라와 스위트 9채. 추가하기보다 거절하는 일이 더 많습니다, 이 페이지의 모든 항목은 안목 있는 여행자가 망설임 없이 예약할 수 있는 곳입니다.' },
        { title: '익명 여행 설계.', body: '하나의 비공개 받은편지함뿐, 공개 프로필도 제3자와 공유하는 캘린더도 없습니다. 날짜, 인원, 선호 사항을 보내시면 영업일 기준 하루 안에 엄선된 추천 목록을 받아 보십니다.' },
        { title: '가능한 곳에서는 직접 요금.', body: '공개 매물은 검증된 요금으로 연결됩니다. 비공개로 보유한 물건, 공개 예약이 없는 reserve 빌라 포함, 은 직접 견적을 드립니다. 답장에서 어느 쪽인지 분명히 알려 드립니다.' },
      ],
    },
    signature: {
      eyebrow: '시그니처 빌라',
      h2: '라플란드 컬렉션을 떠받치는 네 곳.',
      lede: '가장 자주 추천하는 숙소들입니다. 아래의 모든 디테일은 운영사 공식 정보와 최근 후기로 확인한 것이며, 브로슈어에서 옮긴 것이 아닙니다.',
    },
    destinations: {
      eyebrow: '여행지',
      h2: '다섯 곳, 저마다 분명한 이유가 있습니다.',
    },
  },
  villasPage: {
    filters: { all: '전체', glassRoof: '글래스 루프', logEstate: '통나무 저택', designerSuite: '디자이너 스위트', alpineChalet: '알파인 샬레', lakeside: '호숫가' },
    noVillas: '아직 이 카테고리에는 빌라가 없습니다.',
    conciergeTitle: '딱 맞는 곳을 못 찾으셨나요?',
    conciergeBody: '위 컬렉션은 현재 공개된 물건입니다. 추가 빌라는 비공개로 보유하고 있으며, 공개 매물이 없는 reserve 물건을 포함해, 문의 시 직접 견적을 드립니다.',
  },
  suitesPage: {
    intro: {
      p1Pre: '라플란드에서 「스위트」는 알아 둘 만한 두 가지 서로 다른 건축적 접근을 아우릅니다. 첫째는 ',
      designerSuite: '디자이너 스위트',
      p1Mid: '입니다. 핀란드의 손꼽히는 스튜디오(Studio Puisto, ALA, Avanto)가 단 하나의 풍경을 중심으로 원베드룸을 지은 곳이죠. 둘째는 ',
      glassRoof: '글래스 루프 캐빈',
      p1Post: '으로, 천장 그 자체가 주인공인 건축입니다. 둘 다 아래에 정리해 두었습니다.',
    },
    conciergeTitle: '스위트 두 개 예약, 아니면 프라이빗 한 개 층?',
    conciergeBody: '이 가운데 몇몇 물건은 비수기 사이 주간에 여러 스위트로 이루어진 한 개 층을 단독 사용으로 엽니다. 날짜와 인원을 알려 주세요.',
  },
  destinationsPage: {
    destinationLabel: (i) => `여행지 0${i + 1}`,
    readTheProfile: (name) => `${name} 프로필 보기`,
  },
  destinationPage: {
    backLink: '여행지',
    eyebrow: '여행지 · 핀란드 라플란드',
    arrival: '도착',
    aurora: '오로라',
    highlights: '하이라이트',
    villasHere: (n) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    villasHereH2: (n) => (n === 1 ? '이 여행지에 빌라 1채가 있습니다.' : `이 여행지에 빌라 ${n}채가 있습니다.`),
    fullCollection: '전체 컬렉션',
    conciergeTitle: (name) => `프라이빗 ${name} 여행을 설계해 보세요.`,
    conciergeBody: '날짜, 인원, 그리고 모든 선호 사항(프라이빗 셰프, 헬리콥터 도착, 단독 사용)을 보내 주세요. 영업일 기준 하루 안에 추천 목록과 함께 답장해 드립니다.',
  },
  experiencesPage: {
    sections: {
      aurora: { title: '오로라', intro: '오로라 자체는 무료입니다. 여기서 제공하는 것은 접근입니다, 알맞은 차량, 알맞은 가이드, 그리고 알맞은 구름 사이로 맞이하는 알맞은 밤.' },
      wilderness: { title: '야생', intro: '모두가 라플란드를 찾는 이유인 체험, 허스키, 스노모빌, 순록, 의 프라이빗 버전. 합승 버스도, 순환 코스도 없습니다.' },
      culinary: { title: '미식', intro: '라플란드의 진지한 주방에서 활동하는 현역 셰프를 빌라로 모셔 보내는 하룻저녁, 또는 주방 그 자체가 방문의 이유가 되는 곳에서의 온프로퍼티 테이스팅 메뉴.' },
      arrival: { title: '도착', intro: '프라이빗 제트기, 헬리콥터 이동, 북극 사양 지상 차량. 시간대, 일조 창, 빌라 체크인에 맞춰 예약합니다.' },
    },
  },
  midnightSunPage: {
    facts: [
      { value: '32', label: '해가 지지 않는 날수' },
      { value: '24시간', label: '절정의 일조, 6월 21일' },
      { value: '+18°C', label: '6월 말 평균 낮 기온' },
      { value: '50%', label: '오로라 시즌보다 낮은 수요' },
    ],
    fourReasons: '네 가지 이유',
    h2: '여름의 라플란드는 전혀 다른 곳입니다.',
    reasons: [
      { title: '건축의 표정이 바뀝니다.', body: '오로라를 위해 만든 글래스 루프가 이제는 끊기지 않는 태양을 담아냅니다. 침대 위로 쏟아지는 빛, 호수 위의 햇살, 커튼을 칠 필요도 없습니다, 숨길 밤이 없으니까요.' },
      { title: '야생이 가까워집니다.', body: '호수가 녹고, 한대림이 열리고, 카누 루트가 드러납니다. 2월에 스노모빌로 닿던 그 빌라가 이제는 선착장에서 배로 5분 거리입니다.' },
      { title: 'reserve 빌라가 열립니다.', body: '호숫가 프라이빗 통나무 저택, 건축가의 샬레가 그해 남은 일정을 엽니다. 이 32일의 창은 프라이빗 셰프와 헬리콥터 전세기가 비수기 사이 요금을 제시하는 한 해의 유일한 시기입니다.' },
      { title: '줄도, 이웃도 없습니다.', body: '여름의 라플란드는 겨울 방문객 밀도의 극히 일부만을 맞이합니다. 숲을 가로지르는 오솔길, 펠 위의 전망대, 사실상 당신만의 것입니다.' },
    ],
    summerCollection: {
      eyebrow: '여름 컬렉션',
      h2: '네 가지 빌라의 성격, 여름빛 속에서.',
      lede: '겨울 컬렉션과 같은 건축 카테고리, 글래스 루프 캐빈, 호숫가 통나무 저택, 알파인 샬레, 숲속 빌라, 를 6월 말 백야의 빛으로 촬영해 이야기의 후반부를 보여 드립니다.',
      cards: [
        { title: '초록 속의 글래스 루프 캐빈', copy: '오로라의 건축을 23시의 황금빛 속에서, 눈 대신 무성한 숲에 둘러싸여.' },
        { title: '호숫가 통나무 저택', copy: '얼음이 풀린 이나리 호수의 프라이빗 만, 선착장의 카누, 장작 사우나에서 피어오르는 연기.' },
        { title: '펠 위의 디자이너 샬레', copy: '스키 슬로프 대신 황새풀과 들꽃, 파노라마 유리 파사드는 그대로.' },
        { title: '모던 숲속 빌라', copy: '초록빛 한대림 깊숙이 뻗은 캔틸레버 목조 건물, 파사드에 내려앉은 백야의 황금빛 온기.' },
      ],
    },
    planning: {
      h2: '백야 여행 계획에 관한 한 가지 안내.',
      p1: '32일의 창은 짧고 빌라는 개인 소유이기에, 캘린더는 고르게가 아니라 기회가 닿는 대로 채워집니다. 컨시어지는 매년 여름 reserve 저택에 소량의 배정분을 확보해 둡니다.',
      p2: '특정 해의 6월을 문의하기 좋은 시기는 그해 1월에서 3월 사이입니다. 그 이후의 문의도 보낼 가치가 있습니다, 빈자리가 나기도 하니까요, 다만 상위 인벤토리는 더 일찍 빠지는 경우가 많습니다.',
      quoting: '현재 2026년 및 2027년 여름 견적을 받고 있습니다',
    },
    conciergeTitle: '백야 여행을 문의해 보세요.',
    conciergeBody: '날짜, 인원, 그리고 모든 선호 사항을 보내 주세요. 영업일 기준 하루 안에 여름 컬렉션 전체의 예약 가능 여부와 함께 답장해 드립니다, 공개되지 않은 reserve 빌라도 포함됩니다.',
  },
  conciergePage: {
    eyebrow: '문의 양식',
    h2: '머릿속에 그리고 계신 그림을 들려주세요.',
    intro: '짧은 항목 다섯 개입니다. 선호와 조건이 구체적일수록 추천 목록은 더 유용해집니다. 이름과 이메일은 선택입니다, 답장은 메시지가 온 주소로 보내 드립니다.',
    fields: {
      headcount: '인원',
      tripIntent: '여행 목적',
      budget: '1박 예산 가이드',
      datesLabel: '날짜(또는 기간)',
      datesHint: "예: '2월 14–21일' 또는 '3월 전반, 5박'",
      datesPlaceholder: '선택',
      messageLabel: '특별히 원하시는 점',
      messageHint: '프라이빗 셰프, 헬리콥터 도착, 단독 사용, 접근성, 식이, 사진 촬영 중심, 추천 목록에 반영할 점이라면 무엇이든.',
      nameLabel: '이름(선택)',
      namePlaceholder: '비워 두시면 익명',
      emailLabel: '회신 이메일',
      emailHint: '비워 두시면 보내신 주소로 답장이 갑니다.',
      emailPlaceholder: '선택',
    },
    options: {
      headcount: ['1–2명', '3–4명', '5–6명', '7–10명', '더 큰 그룹'],
      intent: ['오로라 시즌, 첫 방문', '오로라 시즌, 재방문', '백야(6–7월)', '크리스마스 / 새해', '가족 여행', '프라이빗 기념일', '허니문 / 두 사람의 리트리트', '기타, 메시지에 설명'],
      budget: ['1박 €1,000 미만', '1박 €1,000 – €2,500', '1박 €2,500 – €5,000', '1박 €5,000 이상', 'Reserve 물건, 단독 사용', '밝히지 않음'],
    },
    submit: '비공개 문의 보내기',
    sending: '보내는 중…',
    successH2: '문의가 접수되었습니다.',
    successBody: '영업일 기준 하루 안에 답장이 도착합니다. 직접 연락하고 싶으시면 다음 주소로도 연락하실 수 있습니다',
    successFollowUp: '.',
    errorFallback: '다음 주소로 직접 이메일을 보내실 수도 있습니다',
    fallbackNotice: '문의를 직접 보내실 수 있도록 메일 클라이언트를 엽니다.',
    fineprint: '제출 내용은 암호화된 연결을 통해 핀란드의 단일 비공개 받은편지함으로 전달됩니다. 제3자 CRM도, 메시지 본문에 대한 광고 어트리뷰션도 없습니다.',
    trustStrip: [
      { title: '익명', body: '이름과 이메일은 선택입니다. 문의는 암호화된 양식을 통해 단일 받은편지함으로 전송됩니다.' },
      { title: 'private@laplandvibes.com', body: '월–금 확인. 영업일 기준 하루 안에, 핀란드에 있는 사람이 직접 쓴 답장을 보내 드립니다.' },
      { title: '기본은 신중하게', body: '제3자 CRM도, 공유 캘린더도 없습니다. 추천 목록은 문의마다 비공개로 작성됩니다.' },
    ],
  },
  aboutPage: {
    sections: [
      {
        title: '이 컬렉션이 존재하는 이유',
        paragraphs: [
          '라플란드의 럭셔리 숙소는 좁은 세계입니다. 같은 몇 채의 빌라와 수십 곳의 스위트가 모든 예약 플랫폼에 등장합니다, 흔히 같은 스톡 사진과 똑같이 모호한 가격대를 달고서. 뻔한 여행은 이미 다녀온 여행자들은 라플란드를 더 구체적으로 묻기 시작합니다. 당신이라면 실제로 어느 빌라를 예약하겠는가, 아홉 식구는 어디에 묵게 하겠는가, 아무도 쓰지 않는 그곳은 어디인가.',
          '이 사이트는 그 질문들에 대한 짧고 신중한 답입니다, 여정을 떠날 만하다고 우리가 믿는 빌라와 스위트를 손수 골라 추린 목록입니다.',
        ],
      },
      {
        title: '이 사이트가 하지 않는 일',
        paragraphs: [
          '우리는 빌라를 운영하지 않으며 예약 대행사도 아닙니다. 이곳에는 디렉터리가 없고, 만들 계획도 없습니다, 컬렉션은 의도적으로 작게 유지합니다.',
          '우리는 독립적입니다. 온라인으로 예약할 수 있는 숙소의 경우 그 공개 매물로 연결합니다. 예를 들어 Hotels.com을 통해서입니다. 이러한 링크는 추가 비용 없이 우리에게 소액의 수수료를 안겨 줄 수 있으나, 어느 빌라를 추천할지에는 결코 영향을 주지 않습니다. 숙소는 비용을 지불하고 소개될 수 없습니다.',
        ],
      },
      {
        title: '누가 운영하는가',
        paragraphs: [
          {
            type: 'link',
            pre: '핀란드에 기반을 둔 작은 팀으로, ',
            label: 'LaplandVibes',
            href: 'https://laplandvibes.com',
            post: ' 생태계, 편집 허브와 라플란드 여행 사이트 네트워크, 도 함께 운영합니다. 이 사이트는 그 작업 가운데 라플란드의 가장 개성 있는 빌라와 스위트에 집중하는 부분입니다.',
          },
          '문의는 하나의 받은편지함으로 모이며 사람이 직접 답합니다, 챗봇도, 외주 콜센터도 없습니다. 요청이 이 컬렉션에 맞지 않으면(인원이 너무 많거나, 우리가 다루지 않는 여행지인 경우) 솔직하게 말씀드리고, 가능한 경우 더 나은 곳을 안내해 드립니다.',
        ],
      },
      {
        title: '받지 않는 두 가지 여행',
        paragraphs: [
          '서른 명을 넘는 하객의 결혼식, 그리고 브랜드 행사를 위해 숙소 전체를 빌리는 일은 이 숙소들이 지어진 목적의 밖에 있습니다. 그런 행사를 제대로 다루는 운영자를 기꺼이 소개해 드립니다.',
        ],
      },
    ],
  },
  villaDetailPage: {
    backLink: '컬렉션',
    bedroom: '베드룸',
    bedrooms: '베드룸',
    sleeps: '수용 인원',
    fromPerNight: '1박 기준 ~',
    nightlyHint: '비수기 가이드 요금입니다. 실제 1박 요금은 날짜, 숙박 일수, 포함 사항에 따라 달라집니다.',
    rate: '요금',
    onRequest: '요청 시 안내',
    reserveHint: 'Reserve 물건, 문의 시 비공개로 견적을 드리며, 공개 매물에는 올리지 않습니다.',
    beginInquiry: '비공개 문의 시작',
    viewRates: '공개 요금 보기',
    orSendInquiry: '또는 비공개 문의를 보내세요',
    signatureEyebrow: '시그니처 디테일',
    signatureH2: '도착하셔서 직접 확인하실 수 있는 여섯 가지.',
    destinationEyebrow: '여행지',
    readProfile: (name) => `${name} 프로필 보기 →`,
    conciergeTitle: (dest) => `${dest} 문의를 시작하세요.`,
    conciergeBody: '날짜, 인원, 선호 사항을 보내 주세요. 영업일 기준 하루 안에 예약 가능 여부, 실제 1박 요금, 그리고 이 빌라와 함께 고려할 만한 reserve 빌라와 함께 답장해 드립니다.',
    alsoEyebrow: '컬렉션의 다른 빌라',
    alsoH2: '함께 고려해 볼 만한 다른 빌라 3채.',
  },
  notFound: {
    eyebrow: '오류',
    body: '이 페이지는 컬렉션에 포함되어 있지 않습니다. 빌라, 스위트, 여행지는 아래에 정리해 두었습니다.',
    home: '홈',
    collection: '컬렉션',
  },
  contactPage: {
    seoTitle: '문의 · LaplandLuxuryVillas',
    seoDescription: '단일 프라이빗 메일함: private@laplandvibes.com. 핀란드 라플란드의 Lapeso Oy가 운영합니다. 언론·제휴·직접 거래 문의처는 아래에 있습니다.',
    eyebrow: '문의',
    h1: '하나의 메일함, 하나의 운영자.',
    cards: {
      private: {
        eyebrow: '프라이빗 문의',
        body: '익명 여행 계획, 빌라 후보 선정, 직접 요금 문의. 영업일 기준 1일 이내에 답변드립니다.',
      },
      press: {
        eyebrow: '언론 및 제휴',
        body: '편집 관련 요청, 숙소의 제휴 제안, 기자 문의.',
      },
      deals: {
        eyebrow: '직접 거래(숙소)',
        body: '컬렉션에 등재되기를 원하는 빌라 소유주 및 운영자를 위한 창구입니다. 대부분의 제안은 정중히 거절합니다, 먼저 소개 페이지를 읽어 주세요.',
      },
      general: {
        eyebrow: '일반 및 편집',
        body: '그 밖의 모든 문의. private@ 보다 답변이 느립니다. 여행 계획은 위의 컨시어지 메일함을 이용하세요.',
      },
    },
    privateCta: '프라이빗 문의 보내기',
    operatorEyebrow: '운영자',
    location: '핀란드 라플란드, 핀란드에 등록된 회사입니다.',
    aboutPre: 'LaplandVibes 생태계의 더 넓은 맥락은 ',
    aboutLabel: '소개',
    aboutPost: ' 페이지를 참고하세요.',
  },
  footerNote:
    '핀란드 라플란드에서 엄선한 프라이빗 컬렉션, 최종 검토 2026년 5월. 일부 예약은 제휴 수수료의 대상이 되지만, 어떤 빌라를 추천하는지에는 결코 영향을 주지 않습니다. reserve 및 컨시어지 전용 물건은 아무것도 내지 않습니다.',
  footerPillars: [
    { name: '컬렉션', href: '/villas' },
    { name: '디자이너 스위트', href: '/suites' },
    { name: '여행지', href: '/destinations' },
    { name: '체험', href: '/experiences' },
    { name: '백야', href: '/midnight-sun' },
    { name: '프라이빗 컨시어지', href: '/concierge' },
  ],
}

Object.assign(ko.cta, {
  inquireAboutJune: '6월 일정 문의', inquireAboutJuneShort: '6월 문의',
  seeSummerCollection: '여름 컬렉션 보기', fullVillaCollection: '전체 빌라 컬렉션',
  sendPrivateInquiry: '비공개 문의 보내기', sendAnother: '추가 문의 보내기',
  home: '홈', theCollection: '컬렉션', sending: '전송 중…',
  subscribe: '구독', subscribed: '구독 완료',
})
Object.assign(ko.badges, {
  onRequest: '요청 시', fromPerNight: '시작가 / 1박', fromPerPerson: '시작가 / 1인', fromPerGroup: '시작가 / 그룹',
  rate: '요금', bedroom: '침실', bedrooms: '침실', sleeps: '수용 인원',
  arrival: '도착', aurora: '오로라', highlights: '하이라이트',
  villas: (n: number) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  villasIn: (name: string) => `${name}의 빌라`,
  villasInH2: (n: number, _name: string) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  alsoInCollection: '컬렉션의 다른 빌라', threeOthers: '검토할 가치가 있는 세 개의 빌라.',
  signatureDetails: '시그니처 디테일', sixVerifyOnArrival: '도착 시 확인 가능한 여섯 가지.',
  theDestination: '여행지', fullCollectionShort: '전체 컬렉션',
})
Object.assign(ko.tier, { signature: '시그니처', private: '프라이빗 컬렉션', reserve: '리저브 · 컨시어지 전용' })
Object.assign(ko.category, { 'glass-roof': '글래스 루프 빌라', 'log-estate': '프라이빗 로그 저택', 'designer-suite': '디자이너 스위트', 'alpine-chalet': '알파인 샬레', 'lakeside-retreat': '호숫가 리트리트' })
Object.assign(ko.concierge, {
  eyebrow: '프라이빗 컨시어지',
  defaultTitle: '라플란드 여행을 더 조용히 계획하는 방법.',
  defaultBody: '단 하나의 메시지를 보내주세요, 선호 사항, 일정, 인원, 컨시어지가 영업일 1일 이내에 비공개 셔틀리스트로 답변드립니다. 공개 프로필도, 공유 캘린더도 없습니다.',
  inquireBtn: '비공개 문의',
  badges: { anonymous: '익명 여행 계획', reply: '영업일 1일 이내 답변', rates: '요청 시 직접 요금 안내' },
})
Object.assign(ko.midnightSunBand, {
  eyebrow: '6월 6일 – 7월 7일',
  h2: '빛이 끊이지 않는 32일, 그 빌라들.',
  body: '같은 건축, 다른 계절. 글래스 루프는 결코 지지 않는 태양을 향한 스카이라이트가 되고, 호수는 녹으며, 숲은 클라우드베리로 가득 찹니다. 겨울의 절반 수요, 그리고 프라이빗 셰프, 헬기 차터, 리저브 빌라가 나머지 캘린더를 여는 1년 중 단 하나의 창입니다.',
  primary: '여름 컬렉션 보기', secondary: '6월 일정 문의',
})
Object.assign(ko.newsletter, {
  eyebrow: '#LaplandVibes 뉴스레터',
  h2: '빌라가 새 일정을 열거나 비공개 출시 소식을 듣게 되면 조용히 전합니다.',
  lede: '직접 요금. 막판 컨시어지 가능 일정. 새 달이 뜨기 한 주 전의 오로라 예보. 스팸 없이, 핀란드에서 작성되어, 전할 만한 것이 있을 때에만 발송합니다.',
  emailPlaceholder: 'your@email.com', footnote: '클릭 한 번으로 구독 해지.',
  welcome: '환영합니다. 첫 발신은 일주일 이내에 도착합니다.',
  already: '이미 명단에 계십니다, 다음 발신에서 뵙겠습니다.',
  invalidEmail: '이메일 주소가 올바르지 않은 듯합니다.',
  networkError: '네트워크 오류. 다시 시도해 주세요.',
  genericError: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
})
Object.assign(ko.affiliateDisclosure, {
  compact: '제휴 링크, 예약 시 추가 비용 없이 소액의 수수료를 받습니다.',
  full: '이 페이지는 제휴 링크를 포함합니다. 이 링크를 통해 예약하시면 LaplandLuxuryVillas가 추가 비용 없이 수수료를 받을 수 있습니다.',
})
ko.hero.suites = { eyebrow: '디자이너 스위트', title: '빌라가 필요하지 않을 때, 그러나 글래스 루프는 필요할 때.', lede: '건축 자체가 경험인, 침실 하나 스위트와 오로라 캐빈의 짧은 목록. 더 적은 인원, 같은 파노라마 천장.' }
ko.hero.destinations = { eyebrow: '여행지', title: '다섯 곳, 각각 그곳에 있을 분명한 이유.', lede: '라플란드는 균질하지 않습니다. 오로라 빈도, 도착 동선, 숙박 밀도는 북극권 이북 50km마다 의미 있게 달라집니다.' }
ko.hero.experiences = { eyebrow: '비스포크 체험', title: '글래스 아래의 밤, 그 전의 낮.', lede: '빌라와 함께 매치하는 여덟 가지 프라이빗 체험, 각각 날씨 창, 일조 시간, 빌라 체크인에 맞춰 예약됩니다.' }
ko.hero.concierge = { eyebrow: '프라이빗 컨시어지', title: '하나의 비공개 메시지, 하나의 큐레이션된 셔틀리스트.', lede: '일정, 인원, 원하시는 여행의 성격을 보내주세요. 영업일 1일 이내에 답변 드립니다, 적합한 경우에는 공개되지 않는 리저브 빌라까지 포함하여.' }
ko.hero.about = { eyebrow: '소개', title: '의도적으로 짧게 유지된 짧은 목록.', lede: '라플란드 최고의 빌라와 스위트의 프라이빗 컬렉션, 익명 컨시어지, 가능한 곳에서는 직접 요금, 중간 플랫폼 없음.' }
ko.home = {
  philosophy: {
    eyebrow: '운영 방식',
    h2: '예약 플랫폼의 정반대.',
    items: [
      { title: '디렉터리가 아닌 짧은 목록.', body: '여정의 가치를 진정 정당화하는 여행지의 9개 빌라와 스위트. 추가되는 것보다 거절되는 경우가 더 많습니다, 이 페이지의 모든 항목은 신중한 여행자가 망설임 없이 예약할 수 있는 것입니다.' },
      { title: '익명 여행 계획.', body: '단 하나의 비공개 받은편지함, 공개 프로필 없음, 제3자와 공유되는 캘린더 없음. 일정, 인원, 선호를 보내주세요, 영업일 1일 이내에 큐레이션된 셔틀리스트를 받으실 수 있습니다.' },
      { title: '가능한 곳에서는 직접 요금.', body: '공개 리스팅은 검증된 요금으로 연결됩니다. 비공개로 보유되는 빌라, 공개 가용성이 없는 리저브 빌라 포함, 는 직접 견적됩니다. 답변에서 어느 쪽인지 알려드립니다.' },
    ],
  },
  signature: { eyebrow: '시그니처 빌라', h2: '라플란드 컬렉션의 네 가지 앵커.', lede: '가장 자주 추천되는 빌라들. 아래 모든 디테일은 운영사 공식 정보와 최근 후기로 검증된 정보입니다.' },
  destinations: { eyebrow: '여행지', h2: '다섯 곳, 각각 분명한 이유.' },
}
Object.assign(ko.villasPage, {
  filters: { all: '전체', glassRoof: '글래스 루프', logEstate: '로그 저택', designerSuite: '디자이너 스위트', alpineChalet: '알파인 샬레', lakeside: '호숫가' },
  noVillas: '아직 이 카테고리의 빌라가 없습니다.',
  conciergeTitle: '딱 맞는 것을 찾지 못하셨나요?',
  conciergeBody: '위 컬렉션은 현재 공개된 것입니다. 추가 빌라는 비공개로 보유되고 있습니다, 공개 리스팅이 없는 리저브 빌라를 포함하여, 문의 시 직접 견적해 드립니다.',
})
Object.assign(ko.suitesPage, {
  intro: { p1Pre: '라플란드의 "스위트"는 알아둘 만한 두 가지 건축적 접근을 포괄합니다. 첫째는 ', designerSuite: '디자이너 스위트', p1Mid: ', 핀란드 선두 스튜디오(Studio Puisto, ALA, Avanto)가 하나의 침실을 하나의 풍경에 맞춰 지은 것입니다. 둘째는 ', glassRoof: '글래스 루프 캐빈', p1Post: ', 천장이 헤드라인 디테일입니다. 두 가지 모두 아래에 정리되어 있습니다.' },
  conciergeTitle: '두 개의 스위트 예약, 또는 프라이빗 플로어?',
  conciergeBody: '몇몇 빌라는 비수기에 다중 스위트 플로어를 독점 사용으로 개방합니다. 일정과 인원을 공유해 주세요.',
})
Object.assign(ko.destinationsPage, { destinationLabel: (i: number) => `여행지 0${i + 1}`, readTheProfile: (name: string) => `${name} 프로필 읽기` })
Object.assign(ko.destinationPage, {
  backLink: '여행지', eyebrow: '여행지 · 핀란드 라플란드',
  arrival: '도착', aurora: '오로라', highlights: '하이라이트',
  villasHere: (n: number) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  villasHereH2: (n: number) => (n === 1 ? '1개 빌라가 이곳에 있습니다.' : `${n}개 빌라가 이곳에 있습니다.`),
  fullCollection: '전체 컬렉션',
  conciergeTitle: (name: string) => `프라이빗 ${name} 여행 계획하기.`,
  conciergeBody: '일정, 인원, 선호 사항(프라이빗 셰프, 헬기 도착, 독점 사용)을 보내주세요. 영업일 1일 이내에 셔틀리스트로 답변드립니다.',
})
Object.assign(ko.experiencesPage, {
  sections: {
    aurora: { title: '오로라', intro: '오로라 자체는 무료입니다. 여기서 판매하는 것은 접근, 적합한 차량, 적합한 가이드, 적합한 구름 창 아래의 적합한 밤입니다.' },
    wilderness: { title: '야생', intro: '모두가 라플란드에 오는 이유의 프라이빗 버전, 허스키, 스노모빌, 순록, 단체 버스와 루프 코스 없이.' },
    culinary: { title: '식문화', intro: '라플란드 진지한 주방 출신의 현역 셰프가 저녁 시간에 빌라로, 또는 그 주방이 방문 이유 자체일 때의 온프로퍼티 테이스팅 메뉴.' },
    arrival: { title: '도착', intro: '프라이빗 제트, 헬기 이동, 북극 사양 지상 차량. 도착 슬롯, 일조 창, 빌라 체크인에 맞춰 예약됩니다.' },
  },
})
Object.assign(ko.midnightSunPage, {
  facts: [{ value: '32', label: '해가 지지 않는 일수' }, { value: '24h', label: '정점의 일조, 6월 21일' }, { value: '+18°C', label: '6월 말 평균 낮 기온' }, { value: '50%', label: '오로라 시즌 대비 낮은 수요' }],
  fourReasons: '네 가지 이유', h2: '여름의 라플란드는 별개의 장소입니다.',
  reasons: [
    { title: '건축의 성격이 바뀝니다.', body: '오로라를 위해 존재하던 글래스 루프가 이제는 결코 지지 않는 태양을 담는 프레임이 됩니다. 침대 위 스카이라이트, 호수 위 태양, 커튼을 칠 필요 없음, 숨을 밤이 없습니다.' },
    { title: '야생이 접근 가능해집니다.', body: '호수가 녹고, 북방림이 열리며, 카누 경로가 나타납니다. 2월에 스노모빌로 가던 같은 빌라가 이제는 부두에서 보트로 5분 거리입니다.' },
    { title: '리저브 빌라가 개방됩니다.', body: '프라이빗 호숫가 로그 저택과 건축가 샬레가 나머지 캘린더를 풉니다. 32일의 창은 프라이빗 셰프와 헬기 차터가 비수기 요금을 견적하는 1년 중 유일한 시기입니다.' },
    { title: '줄도, 이웃도 없습니다.', body: '여름의 라플란드는 겨울 방문자 밀도의 일부에 불과합니다. 숲을 가로지르는 야생 산책로, 산봉우리의 전망대, 사실상 당신의 것입니다.' },
  ],
  summerCollection: {
    eyebrow: '여름 컬렉션', h2: '네 가지 빌라 캐릭터, 여름빛 속에서.',
    lede: '겨울 컬렉션과 같은 건축 카테고리, 글래스 루프 캐빈, 호숫가 로그 저택, 알파인 샬레, 숲속 빌라, 6월 말 백야의 빛에서 촬영하여 이야기의 후반부를 보여줍니다.',
    cards: [
      { title: '녹음 속 글래스 루프 캐빈', copy: '오로라 건축이 23시의 황금빛 속에서, 눈 대신 무성한 숲에 둘러싸여.' },
      { title: '호숫가 로그 저택', copy: '얼어붙지 않은 이나리 호수의 프라이빗 만, 부두의 카누, 장작 사우나의 연기.' },
      { title: '산봉우리 디자이너 샬레', copy: '코튼그래스와 야생화가 스키 슬로프를 대신합니다, 같은 파노라마 글래스 파사드.' },
      { title: '현대 숲속 빌라', copy: '깊은 푸른 북방 소나무 속의 캔틸레버 목조 건물, 황금빛 백야가 파사드에 닿습니다.' },
    ],
  },
  planning: { h2: '백야 여행 계획에 대한 짧은 메모.', p1: '32일의 창은 짧고 빌라는 개별 소유이므로, 캘린더는 균등하기보다 기회적으로 채워집니다. 컨시어지는 매년 여름 리저브 저택에 소량의 할당을 보유합니다.', p2: '특정 6월 문의의 적기는 그 해 1~3월입니다. 그 이후의 문의도 보낼 가치가 있습니다, 출시가 발생하니까요, 그러나 고급 인벤토리는 종종 더 일찍 나갑니다.', quoting: '현재 2026 + 2027 여름 견적 중' },
  conciergeTitle: '백야 여행 문의하기.', conciergeBody: '일정, 인원, 선호 사항을 보내주세요. 영업일 1일 이내에 여름 컬렉션 전체의 가용성으로 답변드립니다, 공개되지 않는 리저브 빌라 포함.',
})
Object.assign(ko.conciergePage, {
  eyebrow: '문의 양식', h2: '그리고 계신 모습을 말씀해 주세요.',
  intro: '다섯 개의 짧은 필드. 선호와 제약이 구체적일수록 셔틀리스트가 더 유용해집니다. 이름과 이메일은 선택 사항, 답변은 메시지가 온 주소로 발송됩니다.',
  fields: {
    headcount: '인원 수', tripIntent: '여행 의도', budget: '예상 1박 예산',
    datesLabel: '날짜 (또는 기간)', datesHint: '예: "2월 14–21일" 또는 "3월 전반, 5박"', datesPlaceholder: '선택 사항',
    messageLabel: '구체적인 사항', messageHint: '프라이빗 셰프, 헬기 도착, 독점 사용, 접근성, 식이, 사진 촬영 중심, 셔틀리스트를 형성하는 무엇이든.',
    nameLabel: '이름 (선택)', namePlaceholder: '비워두시면 익명', emailLabel: '회신 이메일', emailHint: '비워두시면 발신 주소로 회신됩니다.', emailPlaceholder: '선택 사항',
  },
  options: {
    headcount: ['1–2명', '3–4명', '5–6명', '7–10명', '더 큰 그룹'],
    intent: ['오로라 시즌, 첫 방문', '오로라 시즌, 재방문', '백야 (6–7월)', '크리스마스 / 새해', '가족 그룹', '프라이빗 기념', '허니문 / 2인 리트리트', '기타, 메시지에서 설명'],
    budget: ['€1,000 / 박 미만', '€1,000 – €2,500 / 박', '€2,500 – €5,000 / 박', '€5,000+ / 박', '리저브, 독점 사용', '말씀하지 않겠습니다'],
  },
  submit: '비공개 문의 보내기', sending: '전송 중…',
  successH2: '문의가 접수되었습니다.', successBody: '영업일 1일 이내에 답변이 도착합니다. 직접 후속 문의를 원하시면 다음으로 연락하실 수 있습니다',
  successFollowUp: '.', errorFallback: '직접 이메일로 연락하실 수도 있습니다', fallbackNotice: '직접 문의 전송을 위해 메일 클라이언트를 엽니다.',
  fineprint: '제출물은 암호화된 연결을 통해 핀란드의 단일 비공개 받은편지함으로 전달됩니다. 제3자 CRM 없음, 메시지 본문에 광고 추적 없음.',
  trustStrip: [
    { title: '익명', body: '이름과 이메일은 선택 사항. 문의는 암호화된 양식을 통해 단일 받은편지함으로 전송됩니다.' },
    { title: 'private@laplandvibes.com', body: '월–금 모니터링. 영업일 1일 이내에 핀란드의 사람이 직접 작성한 답변.' },
    { title: '기본적으로 신중하게', body: '제3자 CRM 없음, 공유 캘린더 없음. 셔틀리스트는 각 문의를 위해 비공개로 구성됩니다.' },
  ],
})
Object.assign(ko.aboutPage, {
  sections: [
    { title: '이 컬렉션이 존재하는 이유', paragraphs: [
      '라플란드의 럭셔리 숙소는 좁은 세계입니다. 같은 몇 채의 빌라와 수십 곳의 스위트가 모든 예약 플랫폼에 등장합니다, 흔히 같은 스톡 사진과 똑같이 모호한 가격대를 달고서. 뻔한 여행은 이미 다녀온 여행자들은 라플란드를 더 구체적으로 묻기 시작합니다. 당신이라면 실제로 어느 빌라를 예약하겠는가, 아홉 식구는 어디에 묵게 하겠는가, 아무도 쓰지 않는 그곳은 어디인가.',
      '이 사이트는 그 질문들에 대한 짧고 신중한 답입니다, 여정을 떠날 만하다고 우리가 믿는 빌라와 스위트를 손수 골라 추린 목록입니다.',
    ]},
    { title: '이 사이트가 하지 않는 일', paragraphs: [
      '우리는 빌라를 운영하지 않으며 예약 대행사도 아닙니다. 이곳에는 디렉터리가 없고, 만들 계획도 없습니다, 컬렉션은 의도적으로 작게 유지합니다.',
      '우리는 독립적입니다. 온라인으로 예약할 수 있는 숙소의 경우 그 공개 매물로 연결합니다. 예를 들어 Hotels.com을 통해서입니다. 이러한 링크는 추가 비용 없이 우리에게 소액의 수수료를 안겨 줄 수 있으나, 어느 빌라를 추천할지에는 결코 영향을 주지 않습니다. 숙소는 비용을 지불하고 소개될 수 없습니다.',
    ]},
    { title: '누가 운영하나', paragraphs: [
      { type: 'link', pre: '핀란드에 기반을 둔 작은 팀으로, ', label: 'LaplandVibes', href: 'https://laplandvibes.com', post: ' 생태계, 편집 허브와 라플란드 여행 사이트 네트워크, 도 함께 운영합니다. 이 사이트는 그 작업 가운데 라플란드의 가장 개성 있는 빌라와 스위트에 집중하는 부분입니다.' },
      '문의는 하나의 받은편지함으로 모이며 사람이 직접 답합니다, 챗봇도, 외주 콜센터도 없습니다. 요청이 이 컬렉션에 맞지 않으면(인원이 너무 많거나, 우리가 다루지 않는 여행지인 경우) 솔직하게 말씀드리고, 가능한 경우 더 나은 곳을 안내해 드립니다.',
    ]},
    { title: '받지 않는 두 가지 여행', paragraphs: [
      '서른 명을 넘는 하객의 결혼식, 그리고 브랜드 행사를 위해 숙소 전체를 빌리는 일은 이 숙소들이 지어진 목적의 밖에 있습니다. 그런 행사를 제대로 다루는 운영자를 기꺼이 소개해 드립니다.',
    ]},
  ],
})
Object.assign(ko.villaDetailPage, {
  backLink: '컬렉션', bedroom: '침실', bedrooms: '침실', sleeps: '수용 인원',
  fromPerNight: '시작가 / 1박', nightlyHint: '비수기 참고 요금. 실제 1박 요금은 일정, 숙박 기간, 포함 사항에 따라 달라집니다.',
  rate: '요금', onRequest: '요청 시', reserveHint: '리저브 빌라, 공개 리스팅 없이 문의 시 비공개로 견적됩니다.',
  beginInquiry: '비공개 문의 시작', viewRates: '공개 요금 보기', orSendInquiry: '또는 비공개 문의 보내기',
  signatureEyebrow: '시그니처 디테일', signatureH2: '도착 시 확인 가능한 여섯 가지.',
  destinationEyebrow: '여행지', readProfile: (name: string) => `${name} 프로필 읽기 →`,
  conciergeTitle: (dest: string) => `${dest} 문의 시작하기.`,
  conciergeBody: '일정, 인원, 선호 사항을 보내주세요. 영업일 1일 이내에 가용성, 실제 1박 요금, 이 빌라와 함께 페어링할 가치가 있는 리저브 빌라를 포함한 답변이 도착합니다.',
  alsoEyebrow: '컬렉션의 다른 빌라', alsoH2: '검토할 가치가 있는 세 개의 빌라.',
})
Object.assign(ko.notFound, { eyebrow: '오류', body: '이 페이지는 컬렉션의 일부가 아닙니다. 빌라, 스위트, 여행지는 아래에 나열되어 있습니다.', home: '홈', collection: '컬렉션' })
ko.footerNote = '핀란드 라플란드에서 큐레이션된 프라이빗 컬렉션, 최종 검토 2026년 5월. 일부 예약은 제휴 수수료를 발생시키지만, 이는 결코 어느 빌라가 추천될지에 영향을 주지 않습니다. 리저브 및 컨시어지 전용 빌라는 아무것도 지불하지 않습니다.'

// FRENCH, vous, editorial luxury

export default ko
