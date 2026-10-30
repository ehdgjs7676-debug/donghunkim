import { FaqItem, VerifiedPromotion } from '../types';

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-passport',
    category: '입장 & 신분증',
    question: '스마트폰에 저장된 여권 사진이나 사본으로 카지노에 입장할 수 있나요?',
    answer: '절대 불가합니다. 베트남 재무부 및 공안부 규정에 따라 모든 외국인 전용 카지노는 "유효기간이 6개월 이상 남은 실물 여권 원본"과 "베트남 정식 입국 스탬프(또는 정식 비자)"를 육안 및 전자 스캐너로 확인해야만 입장이 허용됩니다.',
    importantNote: '호텔 금고에 여권을 두고 방문하지 않도록 반드시 출발 전 실물 여권을 챙기십시오.'
  },
  {
    id: 'faq-usd-bills',
    category: '칩 & 환전 규정',
    question: '왜 100달러 지폐 중 구권이나 낙서가 있는 돈은 환전이 거부되나요?',
    answer: '베트남 중앙은행 및 현지 시중은행의 위조지폐 방지 지침이 매우 엄격하기 때문입니다. 2013년 이전에 발행된 구권(작은 인물 초상)이나 접힘 자국, 볼펜 낙서, 미세한 찢어짐이 있는 달러는 카지노 케이지에서 전량 수취를 거부합니다. 2013년 이후 발행된 파란색 입체 보안 띠가 있는 깨끗한 신권(Series 2013 or newer)을 준비하십시오.',
    importantNote: '현지 환전소나 은행에서도 훼손된 달러는 환전 수수료를 3~5% 깎거나 거부합니다.'
  },
  {
    id: 'faq-chip-export',
    category: '칩 & 환전 규정',
    question: '기념품으로 카지노 칩 1~2개를 한국으로 가져가도 되나요?',
    answer: '원칙적으로 법적 처벌 및 압류 대상입니다. 베트남 법률상 카지노 칩은 사업장 밖으로 반출할 수 없는 유가증표입니다. 다낭 공항 출국장 X-Ray 검색대에서 칩이 적발될 경우 즉시 전액 몰수되며, 외환 불법 유출 혐의로 세관 조사를 받게 됩니다. 퇴장 전 반드시 케이지에서 전액 현금화하십시오.',
    importantNote: '가방 깊숙이 넣어도 금속 재질이 포함된 카지노 칩은 X-ray에 선명히 투영됩니다.'
  },
  {
    id: 'faq-customs-korea',
    category: '세관 & 고액 당첨',
    question: '카지노에서 큰돈을 따서 귀국할 때 한국 세관 신고는 어떻게 하나요?',
    answer: '대한민국 외국환거래법 및 관세법에 따라, 미화 1만 달러(약 1,350만 원)를 초과하는 외환을 소지하고 입국할 때는 세관 휴대품 신고서에 반드시 성실히 자진 신고해야 합니다. 카지노 케이지에서 발급받은 정식 "외화 당첨 증명서(Certificate of Winnings)" 및 세금 영수증을 제시하면 합법적인 자금으로 인정되어 과태료나 압류 없이 통관됩니다.',
    importantNote: '미신고 후 세관에 적발되면 고액의 과태료 부과 및 외국환거래법 위반 혐의로 검찰 고발될 수 있습니다.'
  },
  {
    id: 'faq-vietnam-tax',
    category: '세관 & 고액 당첨',
    question: '베트남에서 카지노 당첨금에 세금을 원천징수하나요?',
    answer: '네, 베트남 개인소득세법(Decree No. 65/2013/ND-CP)에 따라 1회 당첨금 중 1,000만 VND(약 50만 원)을 초과하는 금액에 대해 10%의 개인소득세(PIT)가 원천징수된 후 잔액이 지급됩니다. 이때 발급되는 세금 원천징수 영수증은 외화 반출 시 공항 세관 제출용으로 필수적이므로 버리지 마십시오.'
  },
  {
    id: 'faq-service-scope',
    category: '서비스 & 여행',
    question: 'DANANG VVIP에서 카지노 롤링 에이전트나 칩 대여를 신청할 수 있나요?',
    answer: '일체 불가합니다. DANANG VVIP는 성인 여행객을 위한 공정하고 합법적인 정보 포털이자 프리미엄 여행 컨시어지 플랫폼입니다. 법적 분쟁의 소지가 있는 카지노 에이전시 모객, 무허가 롤링 수수료 분배, 칩 불법 대여(환치기), 불법 성인 서비스 알선은 법률과 사규에 따라 일체 취급하지 않습니다.',
    importantNote: '카카오톡 상담(danangvvip)은 순수 항공/호텔/차량 의전 및 합법 시설 여행 편의 상담만 지원합니다.'
  }
];

export const INITIAL_PROMOTIONS: VerifiedPromotion[] = [
  {
    id: 'promo-hoiana-hotel-vip',
    title: '호이아나 리조트 스위트 객실 3박 이상 예약 시 전용 픽업 무료',
    provider: '호이아나 리조트 한국 총판 공식 B2B 계약',
    discountOrPerk: '프리미엄 7인승 공항 픽업 왕복 무료 제공 (공식 소비자가 $90 상당 혜택)',
    validUntil: '2026-12-31',
    targetConditions: '호이아나 호텔/레지던스 스위트급 3박 이상 실결제 투숙객 한정 (바우처 사전 제출)',
    proofDocument: '계약서 번호: HOI-2026-KOR-CONCIERGE-04호 (호텔 정식 계약 완료)',
    legalReviewStatus: 'approved'
  },
  {
    id: 'promo-limousine-upgrade',
    title: '다낭 공항 CIP 패스트트랙 예약 고객 Dcar 리무진 업그레이드',
    provider: '다낭 국제공항 공식 CIP 지상조업사 제휴',
    discountOrPerk: '일반 세단 요금으로 9인승 럭셔리 Dcar 리무진 무료 업그레이드 배차',
    validUntil: '2026-11-30',
    targetConditions: '출발 72시간 전 CIP 패스트트랙 정식 접수 고객 (1일 선착순 5팀)',
    proofDocument: '다낭공항 지상조업사 사업협약서 제2026-19호',
    legalReviewStatus: 'approved'
  },
  {
    id: 'promo-rejected-sample',
    title: '[게시 불허 샘플] 카지노 롤링 2만불 달성 시 5성급 호텔 무료 숙박 제공',
    provider: '미확인 사설 에이전시 (불법 정킷 브로커)',
    discountOrPerk: '롤링 실적 연동 무료 객실 지급',
    validUntil: '무효',
    targetConditions: '카지노 칩 환전 및 강제 롤링 조건 부과',
    proofDocument: '공식 호텔 제휴 계약서 부존재 (단순 사설 브로커 구두 제안)',
    legalReviewStatus: 'rejected',
    rejectionReason: '카지노 베팅액 및 롤링 실적에 연동된 프로모션은 베트남 및 한국 법률(사행행위 규제 및 외환관리법) 위반 위험이 있어 DANANG VVIP 플랫폼 게재 불가 판정.'
  }
];
