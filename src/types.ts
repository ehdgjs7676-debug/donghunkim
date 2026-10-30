export type NavigationTab = 
  | 'home'
  | 'casino-guide'
  | 'casino-insights'
  | 'vip-facilities'
  | 'services'
  | 'karaoke'
  | 'massage-spa'
  | 'nightlife-guide'
  | 'lounge-bar'
  | 'casino-news'
  | 'faq'
  | 'admin';

export interface CasinoItem {
  id: string;
  name: string;
  englishName: string;
  badge: string;
  location: string;
  distanceFromAirport: string;
  operator: string;
  licenseInfo: string;
  isLegalConfirmed: boolean;
  foreignerOnly: boolean;
  ageLimit: number;
  passportRequirements: string;
  dressCode: string;
  gameTypes: string[];
  tableCount: string;
  slotCount: string;
  minimumBet: string;
  maximumBet: string;
  vipRoomsAvailable: boolean;
  preVisitChecklist: string[];
  officialRules: string[];
  disputeProcedure: string;
  currencyAccepted: string[];
  officialSource: string;
  lastVerifiedDate: string;
  heroImage: string;
  description: string;
  operatingHours: string;
  contactOfficial: string;
}

export interface CasinoInsightArticle {
  id: string;
  title: string;
  category: '바카라 & 룰' | '롤링 & 턴오버' | '커미션 분석' | '칩 교환 & 정산' | '고액 당첨 & 세무' | '자금세탁방지 (AML)' | 'VIP 살롱 구조' | '출입금지 & 분쟁';
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaway: string;
  legalNotice: string;
  publishedDate: string;
  author: string;
}

export interface VipFacility {
  id: string;
  category: 'VIP 라운지' | '프라이빗 객실 & 스위트' | '고급 레스토랑' | '차량 & 의전' | '호텔 스파 & 웰니스';
  name: string;
  resortName: string;
  image: string;
  tagline: string;
  features: string[];
  accessRequirement: string;
  dressCode: string;
  verifiedSource: string;
  description: string;
}

export interface ServicePackage {
  id: 'basic' | 'premium' | 'signature';
  tierName: string;
  badge: string;
  targetAudience: string;
  priceGuide: string;
  priceNote: string;
  includedItems: string[];
  excludedItems: string[];
  termsAndConditions: string[];
  serviceProvider: string;
  cancellationPolicy: string;
  compliancePledge: string;
}

export interface NightlifeKaraoke {
  id: string;
  name: string;
  englishName: string;
  district: string;
  facilityType: string;
  roomCapacity: string;
  audioEquipment: string;
  averagePriceHour: string;
  liquorSetPrice: string;
  operatingHours: string;
  beverages: string[];
  reservationPolicy: string;
  complianceRules: string;
  features: string[];
  image: string;
}

export interface MassageSpaItem {
  id: string;
  name: string;
  type: '스포츠 마사지' | '아로마 마사지' | '발 마사지' | '5성급 호텔 스파';
  district: string;
  priceRange: string;
  durationOptions: string[];
  tipPolicy: string;
  targetNeed: string;
  features: string[];
  atmosphere: string;
  image: string;
}

export interface NightlifeGuideTopic {
  id: string;
  title: string;
  category: '현지 용어 사전' | '업소 유형 객관적 분석' | '불법 영업 식별법' | '바가지 & 사기 예방' | '베트남 관련 형법';
  summary: string;
  detailedPoints: { subtitle: string; description: string }[];
  warningTip: string;
  legalClause: string;
}

export interface LoungeBarItem {
  id: string;
  name: string;
  type: '루프탑 스카이라운지' | '프라이빗 위스키 & 시가 바' | '라이브 재즈 바' | '비치사이드 클럽';
  location: string;
  viewType: string;
  operatingHours: string;
  signatureDrink: string;
  priceRange: string;
  dressCode: string;
  image: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: '현지 법원 판결' | '재무부 정책 시행' | '외환 & 환전 규정' | '사건사고 예방' | '업계 동향';
  thumbnail: string;
  summary: string;
  content: string;
  incidentDate: string;
  publishDate: string;
  source: string;
  sourceUrl?: string;
  relatedArticleIds: string[];
  isVerified: boolean;
}

export interface FaqItem {
  id: string;
  category: '입장 & 신분증' | '칩 & 환전 규정' | '베팅 & 게임 룰' | '세관 & 고액 당첨' | '서비스 & 여행';
  question: string;
  answer: string;
  importantNote?: string;
}

export interface VerifiedPromotion {
  id: string;
  title: string;
  provider: string;
  discountOrPerk: string;
  validUntil: string;
  targetConditions: string;
  proofDocument: string;
  legalReviewStatus: 'approved' | 'under_review' | 'rejected';
  rejectionReason?: string;
}
