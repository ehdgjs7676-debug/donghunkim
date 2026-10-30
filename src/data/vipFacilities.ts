import { VipFacility } from '../types';

export const INITIAL_VIP_FACILITIES: VipFacility[] = [
  {
    id: 'hoiana-exclusive-lounge',
    category: 'VIP 라운지',
    name: '호이아나 익스클루시브 클럽 라운지',
    resortName: '호이아나 리조트 & 골프',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    tagline: '동해(South China Sea) 파노라마 오션뷰와 프라이빗 다이닝이 결합된 하이엔드 라운지',
    features: [
      '전용 컨시어지 체크인 & 체크아웃 서비스',
      '프리미엄 싱글 몰트 위스키 및 샴페인 셀렉션 상시 구비',
      '프라이빗 미팅룸 및 개인 금고 보관소 완비',
      '초고속 보안 Wi-Fi 및 인터내셔널 뉴스 브리핑 룸'
    ],
    accessRequirement: '호이아나 VIP 티어 회원 또는 프레지덴셜 스위트 투숙객 전용 (입구 카드키 태그 보안)',
    dressCode: '엘레강트 스마트 캐주얼 (남성 긴 바지, 칼라 셔츠 권장)',
    verifiedSource: 'Hoiana Integrated Resort 공식 객실 & VIP 부대시설 가이드북',
    description: '호이아나 최상층에 위치하여 탁 트인 에메랄드빛 해변을 270도 조망할 수 있는 최상급 라운지입니다. 최고급 가죽 소파와 절제된 샴페인 골드 인테리어 속에서 조용하고 격조 높은 휴식을 제공합니다.'
  },
  {
    id: 'furama-ocean-villa-suite',
    category: '프라이빗 객실 & 스위트',
    name: '오션프론트 4베드룸 풀빌라 & 스위트',
    resortName: '푸라마 리조트 다낭 / 빌라 단지',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    tagline: '완벽한 독립성과 전용 인피니티 풀을 갖춘 다낭 최고급 해변 단독 빌라',
    features: [
      '24시간 전담 버틀러(Butler) 1:1 서비스 연계',
      '개별 프라이빗 인피니티 풀 및 선데크 라운지',
      '마스터 침실 내 워크인 클로젯과 대리석 자쿠지 스파',
      '빌라 내 프라이빗 셰프 BBQ 다이닝 연계 가능'
    ],
    accessRequirement: '사전 예약 확정 고객 한정 (철저한 프라이버시 출입 통제)',
    dressCode: '자율 (프라이빗 구역)',
    verifiedSource: 'Furama Villas Danang 공식 예약 카탈로그',
    description: '미케비치 황금 해안선에 바로 맞닿아 있는 최고급 풀빌라로, 외부의 시선과 소음이 완전히 차단되어 최고위 비즈니스 인사 및 프라이빗 휴양객이 선호하는 시그니처 숙소입니다.'
  },
  {
    id: 'yue-cantonese-finedining',
    category: '고급 레스토랑',
    name: 'Yue (광동 정통 파인다이닝 & 프라이빗 룸)',
    resortName: '호이아나 리조트 다이닝 컬렉션',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    tagline: '홍콩 마스터 셰프가 선보이는 정통 광동식 샥스핀, 제비집, 최고급 건전복 요리',
    features: [
      '독립된 프라이빗 다이닝 룸(PDR) 6개 완비 (8인~16인석)',
      '소믈리에 추천 5대 샤또 와인 및 희귀 빈티지 컬렉션',
      '생물 다낭 심해 랍스터와 킹크랩 수조 구비',
      '중국 고전 미학을 현대적으로 재해석한 럭셔리 인테리어'
    ],
    accessRequirement: '사전 예약 권장 (주말 만석 가능)',
    dressCode: '스마트 캐주얼 (슬리퍼 입장 불가)',
    verifiedSource: 'Hoiana F&B Directory & Michelin Guide Inspector Review',
    description: '베트남 중부 최고 수준의 딤섬과 정통 광동 해산물 코스를 제공하는 파인다이닝입니다. 격식 있는 비즈니스 접대와 고품격 만찬에 최적화된 프라이빗 룸을 운영합니다.'
  },
  {
    id: 'maybach-transit-limousine',
    category: '차량 & 의전',
    name: 'VIP 의전 리무진 & 전용 드라이버',
    resortName: 'DANANG VVIP 프리미엄 로지스틱스',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    tagline: '공항 활주로 패스트트랙 연계와 최고급 럭셔리 밴의 완벽한 안전 이동',
    features: [
      '포드 트랜짓 Dcar VIP 9인승 리무진 (항공기 퍼스트클래스 리클라이닝 시트)',
      '다낭 공항 CIP 패스트트랙 (입국 심사 줄 없는 논스톱 에스코트 연계)',
      '한국어 소통 지원 및 엄격한 신원 검증을 통과한 전문 의전 기사',
      '차량 내 고급 생수, 충전기, 청결 방역 설비 완비'
    ],
    accessRequirement: 'VVIP 서비스 신청 고객 또는 공식 패키지 예약 고객',
    dressCode: '제한 없음',
    verifiedSource: '다낭 시 교통운송국 정식 등록 운송 사업자 제휴',
    description: '공항에 착륙하는 순간부터 목적지까지 단 한 순간의 피로도 허용하지 않는 VIP 이동 솔루션입니다. 넓고 안락한 공간에서 이동 중에도 업무와 휴식을 온전히 누릴 수 있습니다.'
  },
  {
    id: 'intercon-harnn-spa',
    category: '호텔 스파 & 웰니스',
    name: '인터컨티넨탈 다낭 HARNN 헤리티지 스파',
    resortName: '인터컨티넨탈 다낭 썬 페닌슐라 리조트',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    tagline: '세계 최고의 럭셔리 스파 어워드를 수상한 손짜 반도 천혜의 프라이빗 힐링 공간',
    features: [
      '석호(Lagoon) 위에 떠 있는 독립형 스파 빌라 트리트먼트 룸',
      '아시아 전통 약초와 천연 에센셜 오일을 결합한 맞춤형 테라피',
      '프라이빗 야외 레인 샤워와 자쿠지 배스 세션',
      '테라피 전후 릴랙세이션 티 하우스 이용'
    ],
    accessRequirement: '사전 예약 필수 (최소 24시간 전 예약 권장)',
    dressCode: '스파 전용 로브 및 슬리퍼 제공',
    verifiedSource: 'World Luxury Spa Awards 공식 인증 리스트',
    description: '원숭이 산으로 불리는 손짜 반도 울창한 열대림과 청정 해변을 바라보며 깊은 휴식을 만끽할 수 있는 베트남 최고의 웰니스 스파 시설입니다.'
  }
];
