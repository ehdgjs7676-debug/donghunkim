import { NewsArticle } from '../types';

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-mof-chip-export-ban',
    title: '[베트남 재무부] 외국인 전용 카지노 칩 불법 국외 반출 단속 강화 시행령 공표',
    category: '재무부 정책 시행',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80',
    summary: '베트남 재무부(MOF)와 국가은행(SBV)이 카지노 게임용 칩의 국외 반출 및 개인 간 거래를 엄중 단속하고, 공항 세관 검색 시 압류 및 벌금 부과를 강화합니다.',
    content: `베트남 재무부(Ministry of Finance)는 외국인 전용 카지노 사업장 관리 세칙 개정안(Decree 03/2017/ND-CP 수정 보완령)을 통해 카지노 칩의 외부 반출에 대한 감독 규정을 대폭 강화한다고 공식 발표했습니다.

재무부 카지노관리국 관계자는 "카지노 칩은 법정 화폐가 아닌 지정된 사업장 내부에서만 통용되는 게임용 유가증표"라며 "이를 기념품이나 자산 이전 목적으로 소지하고 출국하려는 외국인 관광객이 늘어남에 따라 다낭 국제공항 및 노이바이 공항 세관과의 합동 전수 조사를 실시한다"고 밝혔습니다.

이번 조치에 따라 다낭 내 주요 카지노(호이아나, 크라운, 푸라마 등)는 카지노 퇴장 출구 및 케이지 창구에 "칩 반출 절대 금지" 안내문을 3개 국어(한국어, 영어, 중국어)로 의무 게시해야 합니다. 적발될 경우 외환관리법 위반으로 칩 전액 몰수 및 미화 2,000달러에서 10,000달러에 달하는 행정 과태료가 부과됩니다.`,
    incidentDate: '2026-09-08',
    publishDate: '2026-09-12',
    source: '베트남 재무부(MOF) 공식 관보 & VNExpress 경제부',
    sourceUrl: 'https://mof.gov.vn',
    relatedArticleIds: ['news-danang-court-chip-theft', 'news-aml-fatf-regulation'],
    isVerified: true
  },
  {
    id: 'news-danang-court-chip-theft',
    title: '[다낭 법원 판결] 카지노 내 타인 베팅 칩 무단 수거 외국인에 징역 1년 6개월 실형 및 추방 선고',
    category: '현지 법원 판결',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    summary: '다낭 인민법원은 카지노 바카라 테이블 혼잡 틈을 타 타인의 칩 5,000달러 상당을 가로챈 외국 국적 남성에게 절도죄 실형을 선고했습니다.',
    content: `다낭시 인민법원 형사부는 2026년 8월, 관내 모 카지노 바카라 테이블에서 옆 좌석 고객이 승리한 칩 5,000달러(약 680만 원) 상당을 본인의 칩인 것처럼 챙겨 달아나려 한 외국인 피고인 A씨(48세)에 대해 징역 1년 6개월의 실형과 형기 만료 후 강제 추방(Deportation) 판결을 확정했습니다.

재판부는 판결문에서 "카지노 내부는 초고화질 천장 감시 카메라(Surveillance)와 딜러 및 플로어 매니저의 실시간 모니터링이 상시 가동되는 특수 보안 구역"이라며 "피고인은 혼잡한 분위기를 악용해 절도 행위를 자행했으며, 감시 카메라 녹화 영상 분석 결과 고의적인 칩 훔치기가 명백히 입증되었다"고 양형 이유를 밝혔습니다.

이 사건은 카지노 측이 피해 고객의 이의 제기를 접수하고 즉시 CCTV 리플레이를 가동해 용의자의 동선을 추적한 뒤 관할 공안에 신병을 인계하면서 신속히 해결되었습니다. 전문가들은 "테이블에서 칩 분실이나 혼선이 발생했을 때는 현장에서 절대 몸싸움을 벌이지 말고 매니저를 통해 감시실 확인을 거치는 것이 정석"이라고 강조했습니다.`,
    incidentDate: '2026-08-14',
    publishDate: '2026-08-22',
    source: '다낭시 인민법원 형사공보 & Da Nang Police News',
    sourceUrl: 'https://toaan.gov.vn',
    relatedArticleIds: ['news-mof-chip-export-ban'],
    isVerified: true
  },
  {
    id: 'news-aml-fatf-regulation',
    title: '[금융 당국] 베트남 중앙은행, 카지노 고액 현금 거래 보고(CTR) 기준 4,000달러로 일원화',
    category: '외환 & 환전 규정',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    summary: '자금세탁방지법 시행령에 따라 1회 1억 동(약 4,000달러) 이상 칩 바이인 및 캐시아웃 시 전산 신원확인(KYC)이 전면 의무화되었습니다.',
    content: `베트남 국가은행(SBV) 산하 자금세탁방지국은 국제 기준 부합을 위해 베트남 내 모든 외국인 전용 카지노 및 E-Gaming 클럽에 대해 고객 확인 의무(KYC)와 고액 현금 거래 보고(CTR: Currency Transaction Report) 시스템을 일괄 정비했습니다.

기존에는 사업장별로 상이했던 현금 환전 보고 기준이 미화 4,000달러(약 1억 VND)로 일원화되었습니다. 이에 따라 다낭 방문객이 해당 금액 이상의 현금으로 칩을 교환하거나 승리한 칩을 달러로 재환전할 때는 여권 사본 스캔과 함께 직업, 체류 호텔, 자금 출처 확인 양식을 작성해야 합니다.

현지 카지노 관계자는 "합법적인 관광 목적의 정직한 플레이어에게는 전혀 불편함이 없는 통상적인 서류 확인 절차"라며 "오히려 이 과정을 통해 카지노 공식 직인이 찍힌 정식 외환 반출 증명서가 발급되므로 귀국 시 공항 세관 통과가 더욱 안전해진다"고 설명했습니다.`,
    incidentDate: '2026-07-05',
    publishDate: '2026-07-10',
    source: 'State Bank of Vietnam (SBV) Circular No. 09/2023/TT-NHNN Update',
    sourceUrl: 'https://sbv.gov.vn',
    relatedArticleIds: ['news-mof-chip-export-ban'],
    isVerified: true
  },
  {
    id: 'news-hoiana-expansion-update',
    title: '[업계 동향] 호이아나 리조트, 2026 하반기 신규 VIP 살롱 및 골프 클럽하우스 리노베이션 완료',
    category: '업계 동향',
    thumbnail: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80',
    summary: '호이아나 복합리조트가 프라이빗 게이밍 공간 확충과 함께 인터내셔널 파인다이닝 레스토랑 3곳을 신규 오픈하며 아시아 럭셔리 휴양 허브로 도약합니다.',
    content: `호이아나 리조트 & 골프(Hoiana Resort & Golf)가 2단계 개발 사업의 일환으로 최상급 프라이버시를 보장하는 독립형 하이리밋 게이밍 살롱을 오픈했습니다.

이번에 증축된 VIP 살롱 구역은 최고급 이탈리아 대리석과 샴페인 골드 톤의 절제된 마감재로 설계되었으며, 룸마다 1:1 전담 서비스 케이지와 개별 버틀러 라운지가 배치되었습니다. 또한 세계적인 명성을 가진 마스터 셰프들이 이끄는 일식 오마카세와 광동식 파인다이닝이 추가되어 게이밍과 미식을 원스톱으로 즐길 수 있는 인프라가 강화되었습니다.

리조트 총지배인은 "다낭과 호이안을 찾는 수준 높은 글로벌 여행객들이 안전하고 합법적인 환경에서 최고 수준의 호스피탈리티를 경험할 수 있도록 지속적인 투자를 아끼지 않겠다"고 밝혔습니다.`,
    incidentDate: '2026-09-28',
    publishDate: '2026-10-02',
    source: 'Hoiana Integrated Resort Corporate Release & Asia Gaming Brief',
    sourceUrl: 'https://hoiana.com',
    relatedArticleIds: ['news-aml-fatf-regulation'],
    isVerified: true
  }
];
