import { NightlifeKaraoke, MassageSpaItem, NightlifeGuideTopic, LoungeBarItem } from '../types';

export const KARAOKE_LIST: NightlifeKaraoke[] = [
  {
    id: 'ktv-royal-suite',
    name: '다낭 로열 임페리얼 KTV (정식 허가 시설)',
    englishName: 'Royal Imperial Luxury Karaoke Da Nang',
    district: 'Hai Chau (한강변 인근)',
    facilityType: '대형 프리미엄 비즈니스 노래방 (소방 안전 인증 및 정식 엔터테인먼트 라이선스 보유)',
    roomCapacity: 'VIP룸 12실 (4인 소형룸부터 20인 수용 대형 파티룸 완비)',
    audioEquipment: 'BMB / JBL 하이엔드 사운드 시스템, 최신 TJ/금영 한국 가요 반주기 실시간 업데이트, 무선 마이크 4세트',
    averagePriceHour: '룸 차지: 시간당 500,000 VND ~ 800,000 VND (약 2.7만~4.3만 원, 룸 크기별 상이)',
    liquorSetPrice: '맥주 세트: 1,800,000 VND~ / 위스키 기본 세트(12년산): 3,500,000 VND~ (과일 안주, 마른 안주, 음료 포함)',
    operatingHours: '18:00 ~ 익일 01:30 (베트남 지자체 조례 영업시간 엄수)',
    beverages: ['조니워커 블루/골드/블랙 (정식 수입 라벨 확인)', '발렌타인 17년/21년', '맥캘란 12년/18년', '하이네켄/타이거 캔맥주', '신선한 열대과일 플래터'],
    reservationPolicy: '당일 오후 4시 이전 사전 룸 예약 필수 (주말 피크타임 골든타임 사전 배정). 노쇼 방지를 위해 사전 확인 전화 진행.',
    complianceRules: '베트남 형법 및 관광 진흥법을 엄격히 준수하며 건전한 비즈니스 음주 가무 시설로 운영됩니다. 불법적 행위 및 퇴폐적 요구는 즉각 퇴실 조치됩니다.',
    features: ['한국어 소통 가능 상주 지배인', '정찰제 메뉴판 제공 (추가 바가지 차단)', '개별 룸 전용 화장실 완비', '쾌적한 중앙 공기청정 환기 시스템'],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ktv-crystal-palace',
    name: '크리스탈 팰리스 KTV 클럽',
    englishName: 'Crystal Palace Executive KTV',
    district: 'Son Tra (미케비치 인근)',
    facilityType: '모던 럭셔리 부티크 KTV',
    roomCapacity: '총 16개 프라이빗 룸 (룸마다 독창적인 인테리어 테마 적용)',
    audioEquipment: '프랑스 L-Acoustics 음향 튜닝 시스템, 화려한 LED 무빙 라이트 및 터치스크린 패널',
    averagePriceHour: '룸 차지: 시간당 400,000 VND ~ 700,000 VND',
    liquorSetPrice: '프리미엄 위스키 세트 3,200,000 VND ~ 5,500,000 VND',
    operatingHours: '19:00 ~ 익일 01:00',
    beverages: ['로얄 살루트 21년', '글렌피딕 15년/18년', '스페셜 칵테일 타워', '프리미엄 보드카'],
    reservationPolicy: '사전 테이블/룸 예약 시 웰컴 샴페인 또는 과일 플래터 무료 제공',
    complianceRules: '합법적 엔터테인먼트 시설 가이드라인을 준수하며 정품 주류만을 개봉하여 서비스합니다.',
    features: ['미케비치 호텔 밀집 지역 인접', '철저한 위생 관리', '정산서 세부 영수증 발급 의무화'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
  }
];

export const MASSAGE_SPA_LIST: MassageSpaItem[] = [
  {
    id: 'spa-sports-deep-tissue',
    name: '다낭 테라피스트 스포츠 딥티슈 마사지',
    type: '스포츠 마사지',
    district: 'Hai Chau 중심가',
    priceRange: '60분: 450,000 VND / 90분: 600,000 VND / 120분: 750,000 VND (약 2.4만~4만 원)',
    durationOptions: ['60분 코스', '90분 집중 코스', '120분 전신 릴리프 코스'],
    tipPolicy: '팁 정찰제 포함(또는 90분 기준 100,000~150,000 VND 매너 팁 권장). 계산 시 불필요한 과다 팁 요구 없음.',
    targetNeed: '장시간 비행 후 척추 뻐근함, 골프 라운딩 후 승모근 및 허리 근육 피로, 카지노 장시간 착석 후 어깨 결림 해소',
    features: ['숙련된 전문 물리치료 자격증 보유 테라피스트', '강도 조절 1:1 맞춤 피드백 차트 작성', '샤워 시설 및 웰컴 허브티 무료 제공'],
    atmosphere: '차분하고 절제된 원목 인테리어, 은은한 아로마 디퓨저',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'spa-aroma-hot-stone',
    name: '오리엔탈 핫스톤 & 천연 아로마 힐링 스파',
    type: '아로마 마사지',
    district: 'Son Tra (미케비치 도보 5분)',
    priceRange: '90분: 650,000 VND / 120분: 800,000 VND',
    durationOptions: ['90분 핫스톤 아로마', '120분 전신 오일 + 페이셜 마스크'],
    tipPolicy: '메뉴판 표기 가격에 서비스 차지 및 팁 포함(All-inclusive)',
    targetNeed: '심신 안정, 불면증 완화, 긴장 완화 및 혈액 순환 촉진',
    features: ['100% 천연 오가닉 라벤더, 일랑일랑, 레몬그라스 오일 선택', '따뜻한 현무암 핫스톤 체온 순환 요법', '커플 및 1인 프라이빗 룸 완비'],
    atmosphere: '물소리와 명상 음악이 흐르는 고요한 젠(Zen) 스타일',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'spa-luxury-hotel-resort',
    name: '호이아나 마이아 럭셔리 웰니스 스파',
    type: '5성급 호텔 스파',
    district: 'Quang Nam (호이아나 복합리조트 단지 내)',
    priceRange: '60분: 1,800,000 VND~ / 90분: 2,400,000 VND~ (고급 호텔 스파)',
    durationOptions: ['60분 시그니처', '90분 딥 하모니', '150분 로열 리추얼 스파 패키지'],
    tipPolicy: '호텔 공식 서비스료 5% 및 부가세 8~10% 포함 정식 인보이스 발행',
    targetNeed: '완벽한 프라이빗 럭셔리 케어, 호텔 스위트룸 투숙객 및 VVIP 전용',
    features: ['스위스 명품 스파 코스메틱 사용', '히노끼 편백나무 사우나 & 허브 스팀 룸', '호텔 전담 수석 마스터 테라피스트 진행'],
    atmosphere: '최고급 호텔 특유의 웅장한 대리석과 5성급 호스피탈리티',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'spa-foot-reflexology',
    name: '골든 릴랙스 풋 리플렉솔로지 (발 마사지 전문)',
    type: '발 마사지',
    district: 'Hai Chau (야시장 및 한시장 인접)',
    priceRange: '60분: 300,000 VND / 90분: 420,000 VND',
    durationOptions: ['60분 발 집중', '90분 발 + 어깨·두피 케어'],
    tipPolicy: '팁 자율 (보통 50,000~100,000 VND 수준)',
    targetNeed: '다낭 도심 관광 후 발바닥 피로, 족저근막 통증 완화, 가벼운 휴식',
    features: ['생강·레몬그라스 족욕 및 각질 관리', '인체공학적 리클라이너 소파', '신선한 망고 및 생과일주스 무료 서비스'],
    atmosphere: '아늑하고 편안한 캐주얼 힐링 라운지',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  }
];

export const NIGHTLIFE_GUIDE_TOPICS: NightlifeGuideTopic[] = [
  {
    id: 'slang-terms-reality',
    title: '다낭 밤문화 은어의 실체와 객관적 정의: 과장된 환상과 실제 차이',
    category: '현지 용어 사전',
    summary: '온라인 커뮤니티에서 유통되는 다낭 밤문화 은어들의 정확한 유래와 상업적 브로커들이 만든 과장된 실체를 객관적으로 짚어드립니다.',
    detailedPoints: [
      {
        subtitle: 'KTV와 비즈니스 클럽의 구분',
        description: '베트남에서 KTV는 가족 단위나 친구들이 노래를 부르는 일반 가라오케와, 접객원이 동석하여 주류를 서빙하는 비즈니스 클럽 형태로 나뉩니다. 정식 허가를 받은 비즈니스 KTV는 음주와 노래를 즐기는 합법적 공간이며 성적 서비스 알선 공간이 아닙니다.'
      },
      {
        subtitle: '"에코걸"이라는 상업적 조어의 진실',
        description: '일부 무허가 여행 브로커들이 관광객 유치를 위해 만든 이른바 "에코걸(에스코트 걸)"이라는 용어는 베트남 법률상 존재하지 않는 불법 용어입니다. 현지 법률상 유료 성적 동행이나 알선 행위는 성매매 처벌법에 정면으로 위배되며, 적발 시 즉각 강제 추방 및 입국 금지 조치를 받게 됩니다.'
      },
      {
        subtitle: '바(Bar)와 레이디스 드링크(Lady Drink) 구조',
        description: '웨스턴 바나 펍에서 여성 스태프가 손님과 대화하며 주문하는 "레이디스 드링크"는 1잔당 약 100,000~150,000 VND 수준의 팁 성격 음료입니다. 정상적인 바에서는 이를 투명하게 주문받으나, 악덕 업소에서는 가격을 속여 과다 청구하는 수법을 쓰므로 주의해야 합니다.'
      }
    ],
    warningTip: '온라인 카페나 무허가 텔레그램 채널의 "100% 보장" 등의 자극적인 광고 문구는 대부분 유령 사기 조직의 미끼입니다.',
    legalClause: '베트남 사회주의공화국 법률 및 대한민국 형법(속인주의)은 해외에서의 성매매를 엄격히 금지하며 징역형으로 처벌합니다.'
  },
  {
    id: 'identifying-illegal-venues',
    title: '불법 영업 업소 식별법: 무허가 지하 업소와 합법 업소의 4가지 차이',
    category: '불법 영업 식별법',
    summary: '단속 위험과 범죄 노출 가능성이 높은 무허가 업소를 일반 관광객이 현장에서 즉시 구별할 수 있는 핵심 체크포인트를 제공합니다.',
    detailedPoints: [
      {
        subtitle: '1. 사업자 등록증 및 소방 안전 필증 게시 여부',
        description: '베트남 공안부 및 문화체육관광국 정식 허가를 받은 업소는 카운터와 입구에 사업자등록증(Giấy phép kinh doanh) 및 소방 검사 합격증(Giấy chứng nhận PCCC)을 의무적으로 투명하게 게시합니다.'
      },
      {
        subtitle: '2. 정찰제 메뉴판과 공식 부가세(VAT) 인보이스',
        description: '합법 업소는 모든 주류, 안주, 룸 차지 가격이 인쇄된 정식 메뉴판을 제공하며, 결제 시 붉은색 세무 영수증(Hóa đơn đỏ) 발급이 가능합니다. 수기로 적은 쪽지나 구두로 가격을 안내하는 곳은 100% 불법 위험 업소입니다.'
      },
      {
        subtitle: '3. 길거리 삐끼(호객꾼)의 유인 여부',
        description: '용다리 주변이나 미케비치 번화가에서 오토바이를 탄 호객꾼이 사진을 보여주며 접근하는 업소는 대부분 마약성 물질(해피벌룬 등)을 판매하거나 바가지 요금을 청구하는 범죄 은신처입니다.'
      },
      {
        subtitle: '4. 신용카드 결제 단말기 명의 대조',
        description: '카드 결제 시 영수증에 인쇄된 가맹점 상호가 해당 업소 이름과 일치하는지 확인해야 합니다. 엉뚱한 유령 무역회사나 식료품점 이름으로 결제되는 곳은 탈세 및 불법 환전소 연계 업소입니다.'
      }
    ],
    warningTip: '골목 깊숙한 곳의 간판 없는 업소나 셔터를 내리고 영업하는 곳은 절대 출입하지 마십시오.',
    legalClause: '무허가 유흥업소 출입 중 공안 급습 단속 시 여권 압류 및 장기간 현지 수사 구금의 위험이 있습니다.'
  },
  {
    id: 'scam-prevention-golden-rules',
    title: '다낭 밤문화 바가지 및 금융 사기 예방 7계명: 안전한 성인 야간 투어',
    category: '바가지 & 사기 예방',
    summary: '경험자들도 방심하면 당하기 쉬운 현지 주류 바꿔치기, 카드 중복 결제, 셋업 범죄를 사전에 원천 차단하는 실전 가이드입니다.',
    detailedPoints: [
      {
        subtitle: '제1계명: 양주 주문 시 미개봉 홀로그램 실링 본인 직접 확인',
        description: '위스키 등 고급 주류를 주문할 경우 뚜껑의 정품 수입 인지(Holo-strip)가 훼손되지 않았는지 본인이 직접 확인한 후 딜러/웨이터가 눈앞에서 개봉하도록 하십시오. 가짜 양주(Fake Alcohol)는 시력 손상과 극심한 숙취를 유발합니다.'
      },
      {
        subtitle: '제2계명: 중간 계산서(Bill) 상시 확인',
        description: '주문하지 않은 안주나 추가 음료가 계산서에 올라가는 이른바 "빌 부풀리기"를 방지하기 위해 주문할 때마다 중간 계산서를 요청하여 대조하십시오.'
      },
      {
        subtitle: '제3계명: 신용카드 결제는 반드시 카운터에서 본인 눈앞에서 진행',
        description: '웨이터에게 카드를 건네주어 보이지 않는 곳에서 긁게 하지 마십시오. 카드 복제기(Skimmer)나 0을 하나 더 붙인 고액 중복 결제 사고가 빈번합니다.'
      },
      {
        subtitle: '제4계명: 만취 상태에서의 낯선 이와의 합석 금지',
        description: '바나 클럽에서 먼저 말을 걸며 접근하는 외국인이나 현지인과의 합석 시 음료에 약물(스파이크)을 타 소지품을 털어가는 셋업 범죄를 경계하십시오.'
      }
    ],
    warningTip: '문제 발생 시 현지 경찰(113) 또는 주다낭 대한민국 총영사관 긴급전화(+84-90-588-4444)로 즉각 도움을 요청하십시오.',
    legalClause: '부당한 요금 갈취를 당했을 때 물리적 폭력을 행사하면 외국인 폭행죄로 베트남 법령상 구속 사유가 됩니다.'
  },
  {
    id: 'vietnam-penal-code-warning',
    title: '베트남 형법 및 마약류 단속 법규: 엄중한 처벌 기준과 절대 금기 사항',
    category: '베트남 관련 형법',
    summary: '베트남 사법 당국의 성매매 및 마약류 단속 기준은 한국보다 훨씬 엄격합니다. 무관용 원칙이 적용되는 현지 법적 한계를 명확히 인지해야 합니다.',
    detailedPoints: [
      {
        subtitle: '성매매 행위에 대한 처벌 (Decree 144/2021/ND-CP)',
        description: '베트남 법령상 성매매 구매자와 판매자 모두 과태료 처분뿐 아니라 공안 조사 후 강제 추방 및 입국 블랙리스트에 등재됩니다. 특히 알선 조직과 관련된 경우 중형에 처해집니다.'
      },
      {
        subtitle: '마약류(해피벌룬 아산화질소 포함) 절대 금기',
        description: '베트남은 마약 범죄에 대해 최고 사형(Death Penalty)까지 선고하는 세계에서 가장 엄격한 국가 중 하나입니다. 일부 클럽에서 유통되는 아산화질소(풍선) 및 전자담배 형태의 변종 마약 역시 2024년 이후 강력한 형사 처벌 대상이 되었습니다.'
      },
      {
        subtitle: '도박 및 자금 불법 송금',
        description: '허가된 외국인 카지노 외의 모든 사설 도박판이나 호텔 룸 내 텍사스 홀덤 모임 등은 불법 도박죄로 즉시 현장 체포 대상입니다.'
      }
    ],
    warningTip: '안전하고 합법적인 시설에서 정당한 대가를 지불하고 즐기는 것만이 가장 품격 있는 VIP 나이트라이프입니다.',
    legalClause: '베트남 법률 위반 사실은 한국 경찰청 및 외교부로 공식 통보되며 국내에서도 추가 사법 조치가 따릅니다.'
  }
];

export const LOUNGE_BAR_LIST: LoungeBarItem[] = [
  {
    id: 'sky36-rooftop-club',
    name: '스카이 36 (Sky36 Rooftop Lounge)',
    type: '루프탑 스카이라운지',
    location: '36 Bach Dang, Hai Chau, Da Nang (노보텔 다낭 프리미어 한 리버 36층)',
    viewType: '다낭 최고층 한강 파노라마 야경 & 용다리, 한강 다리 360도 뷰',
    operatingHours: '18:00 ~ 익일 02:00',
    signatureDrink: '시그니처 드래곤 파이어 칵테일, 돔 페리뇽 빈티지 샴페인',
    priceRange: '칵테일 250,000~350,000 VND / 보틀 2,500,000 VND ~',
    dressCode: '스마트 캐주얼 (슬리퍼, 샌들, 트레이닝복 입장 불가)',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80',
    description: '다낭의 상징적인 초고층 야경 랜드마크 라운지입니다. 웅장한 음악과 세련된 조명 속에서 시원한 강바람을 맞으며 고급 샴페인을 즐길 수 있는 최고의 장소입니다.'
  },
  {
    id: 'brilliant-top-bar',
    name: '브릴리언트 탑 바 (Brilliant Top Bar)',
    type: '루프탑 스카이라운지',
    location: '162 Bach Dang, Hai Chau, Da Nang (브릴리언트 호텔 17층)',
    viewType: '용다리가 바로 눈앞에 펼쳐지는 감성적인 한강 야경',
    operatingHours: '16:00 ~ 24:00',
    signatureDrink: '패션프루츠 마티니, 훈제 오크통 숙성 위스키',
    priceRange: '칵테일 180,000~280,000 VND / 스테이크 & 타파스 메뉴 구비',
    dressCode: '캐주얼 가능 (단정한 복장)',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    description: '시끄러운 음악보다는 차분한 재즈 선율과 함께 로맨틱한 도심의 야경을 감상할 수 있는 감각적인 루프탑 바입니다. 비즈니스 대화나 와인 한잔에 제격입니다.'
  },
  {
    id: 'whisky-cigar-club',
    name: '더 헤리티지 시가 & 싱글몰트 라운지',
    type: '프라이빗 위스키 & 시가 바',
    location: 'Nguyen Van Linh, Hai Chau, Da Nang',
    viewType: '조용한 프라이빗 살롱 인테리어',
    operatingHours: '19:00 ~ 익일 02:00',
    signatureDrink: '쿠바 정품 코히바(Cohiba) 시가 & 아드벡 25년 싱글몰트',
    priceRange: '잔당 300,000 VND ~ / 시가 스틱별 정찰제',
    dressCode: '정장 또는 스마트 캐주얼 (회원제 우대)',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80',
    description: '엄격한 항온 항습 휴미더(Humidor) 룸을 갖추고 정품 하바나 시가와 희귀 빈티지 스카치위스키를 서비스하는 다낭 최고의 프라이빗 비즈니스 살롱입니다.'
  }
];
