import React, { useState } from 'react';
import { 
  CasinoItem, 
  ServicePackage, 
  NewsArticle, 
  VerifiedPromotion 
} from '../types';
import { 
  Settings, 
  X, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Edit3, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  Newspaper, 
  Coins, 
  Sparkles, 
  CheckCircle2, 
  Ban
} from 'lucide-react';

interface AdminCMSProps {
  isOpen: boolean;
  onClose: () => void;
  casinos: CasinoItem[];
  setCasinos: React.Dispatch<React.SetStateAction<CasinoItem[]>>;
  services: ServicePackage[];
  setServices: React.Dispatch<React.SetStateAction<ServicePackage[]>>;
  news: NewsArticle[];
  setNews: React.Dispatch<React.SetStateAction<NewsArticle[]>>;
  promotions: VerifiedPromotion[];
  setPromotions: React.Dispatch<React.SetStateAction<VerifiedPromotion[]>>;
  onResetToDefault: () => void;
}

export const AdminCMS: React.FC<AdminCMSProps> = ({
  isOpen,
  onClose,
  casinos,
  setCasinos,
  services,
  setServices,
  news,
  setNews,
  promotions,
  setPromotions,
  onResetToDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'casinos' | 'services' | 'news' | 'promotions'>('promotions');
  const [saveNotification, setSaveNotification] = useState(false);

  // New News form state
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsCategory, setNewNewsCategory] = useState<'현지 법원 판결' | '재무부 정책 시행' | '외환 & 환전 규정' | '사건사고 예방' | '업계 동향'>('현지 법원 판결');
  const [newNewsSummary, setNewNewsSummary] = useState('');
  const [newNewsContent, setNewNewsContent] = useState('');
  const [newNewsSource, setNewNewsSource] = useState('');
  const [newNewsThumbnail, setNewNewsThumbnail] = useState('https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80');

  // New Promo form state
  const [newPromoTitle, setNewPromoTitle] = useState('');
  const [newPromoProvider, setNewPromoProvider] = useState('');
  const [newPromoPerk, setNewPromoPerk] = useState('');
  const [newPromoProof, setNewPromoProof] = useState('');
  const [newPromoValid, setNewPromoValid] = useState('2026-12-31');
  const [newPromoStatus, setNewPromoStatus] = useState<'approved' | 'under_review' | 'rejected'>('approved');
  const [newPromoRejectReason, setNewPromoRejectReason] = useState('');

  if (!isOpen) return null;

  const triggerSaveNotification = () => {
    setSaveNotification(true);
    setTimeout(() => setSaveNotification(false), 2500);
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNewsTitle.trim()) return;

    const created: NewsArticle = {
      id: `news-${Date.now()}`,
      title: newNewsTitle,
      category: newNewsCategory,
      summary: newNewsSummary,
      content: newNewsContent,
      thumbnail: newNewsThumbnail,
      incidentDate: new Date().toISOString().split('T')[0],
      publishDate: new Date().toISOString().split('T')[0],
      source: newNewsSource || 'DANANG VVIP 뉴스룸',
      relatedArticleIds: [],
      isVerified: true
    };

    setNews([created, ...news]);
    setNewNewsTitle('');
    setNewNewsSummary('');
    setNewNewsContent('');
    setNewNewsSource('');
    triggerSaveNotification();
  };

  const handleDeleteNews = (id: string) => {
    setNews(news.filter(n => n.id !== id));
    triggerSaveNotification();
  };

  const handleAddPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromoTitle.trim()) return;

    const created: VerifiedPromotion = {
      id: `promo-${Date.now()}`,
      title: newPromoTitle,
      provider: newPromoProvider,
      discountOrPerk: newPromoPerk,
      validUntil: newPromoValid,
      targetConditions: '공식 제휴 확정 고객',
      proofDocument: newPromoProof,
      legalReviewStatus: newPromoStatus,
      rejectionReason: newPromoStatus === 'rejected' ? newPromoRejectReason : undefined
    };

    setPromotions([created, ...promotions]);
    setNewPromoTitle('');
    setNewPromoProvider('');
    setNewPromoPerk('');
    setNewPromoProof('');
    setNewPromoRejectReason('');
    triggerSaveNotification();
  };

  const handleTogglePromoStatus = (id: string, newStatus: 'approved' | 'under_review' | 'rejected') => {
    setPromotions(promotions.map(p => {
      if (p.id === id) {
        return {
          ...p,
          legalReviewStatus: newStatus,
          rejectionReason: newStatus === 'rejected' ? '카지노 롤링 연동 의심 또는 계약 증빙 미비로 게재 기각' : undefined
        };
      }
      return p;
    }));
    triggerSaveNotification();
  };

  const handleDeletePromo = (id: string) => {
    setPromotions(promotions.filter(p => p.id !== id));
    triggerSaveNotification();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b1120] border-2 border-[#d4af37] rounded-xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative my-6 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#d4af37] text-black text-xs font-bold font-cinzel">
                ADMIN CONSOLE
              </span>
              <span className="text-xs text-slate-400">콘텐츠 & 법적 컴플라이언스 관리자</span>
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-white mt-1">
              DANANG VVIP 통합 CMS 관리
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onResetToDefault}
              className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs flex items-center gap-1.5"
              title="기본 초기 데이터로 복원"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">데이터 초기화</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Save Notice */}
        {saveNotification && (
          <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>변경사항이 시스템에 즉시 반영 및 저장되었습니다.</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('promotions')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              activeTab === 'promotions'
                ? 'bg-[#d4af37] text-black font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            프로모션 법적 검토 대장 ({promotions.length})
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              activeTab === 'news'
                ? 'bg-[#d4af37] text-black font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            카지노 뉴스 & 판례 발행 ({news.length})
          </button>

          <button
            onClick={() => setActiveTab('casinos')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              activeTab === 'casinos'
                ? 'bg-[#d4af37] text-black font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <Coins className="w-4 h-4" />
            카지노 정보 수정 ({casinos.length})
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              activeTab === 'services'
                ? 'bg-[#d4af37] text-black font-bold'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            서비스 패키지 가격 ({services.length})
          </button>
        </div>

        {/* TAB 1: PROMOTIONS COMPLIANCE MANAGER */}
        {activeTab === 'promotions' && (
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
              <strong>규정 준수 필수 지침:</strong> 프로모션 데이터에는 제공 업체, 증빙 자료, 유효기간, 적용 조건, 법적 검토 상태를 반드시 기록해야 하며, 적법성이 확인되지 않은 카지노 롤링 프로모션은 절대 공개로 승인할 수 없습니다.
            </div>

            {/* Create Promo Form */}
            <form onSubmit={handleAddPromo} className="p-4 rounded-xl bg-[#070a12] border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#d4af37]" />
                신규 호텔·차량 프로모션 등록 & 적법성 심사
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400">프로모션 제목</label>
                  <input
                    type="text"
                    required
                    value={newPromoTitle}
                    onChange={(e) => setNewPromoTitle(e.target.value)}
                    placeholder="예: 5성급 리조트 스위트 3박 예약 시 VIP 픽업 지원"
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">제공 업체 (호텔명, 항공사, 인가 운송사)</label>
                  <input
                    type="text"
                    required
                    value={newPromoProvider}
                    onChange={(e) => setNewPromoProvider(e.target.value)}
                    placeholder="예: 호이아나 리조트 한국 공식 B2B 총판"
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">할인 및 혜택 내용</label>
                  <input
                    type="text"
                    required
                    value={newPromoPerk}
                    onChange={(e) => setNewPromoPerk(e.target.value)}
                    placeholder="예: 편도 $45 상당 7인승 공항 픽업 무료"
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">증빙 자료 번호 (계약서, 공문)</label>
                  <input
                    type="text"
                    required
                    value={newPromoProof}
                    onChange={(e) => setNewPromoProof(e.target.value)}
                    placeholder="예: B2B 제휴 계약서 제2026-08호 첨부 확인"
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400">법적 검토 상태</label>
                  <select
                    value={newPromoStatus}
                    onChange={(e) => setNewPromoStatus(e.target.value as any)}
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  >
                    <option value="approved">승인 완료 (법적 검토 통과 / 공식 사이트 노출)</option>
                    <option value="under_review">검토 중 (비공개)</option>
                    <option value="rejected">게재 기각 (불법 롤링/성인 연계)</option>
                  </select>
                </div>
                {newPromoStatus === 'rejected' && (
                  <div className="space-y-1">
                    <label className="text-rose-400">기각 사유 명시</label>
                    <input
                      type="text"
                      value={newPromoRejectReason}
                      onChange={(e) => setNewPromoRejectReason(e.target.value)}
                      placeholder="사유: 카지노 롤링 연동 의심"
                      className="w-full bg-[#0b1120] border border-rose-500 rounded p-2 text-rose-200"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded bg-[#d4af37] text-black font-bold text-xs hover:brightness-110 flex items-center gap-1.5 shadow"
              >
                <Plus className="w-4 h-4" />
                등록하기
              </button>
            </form>

            {/* Promotion List */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                현재 등록된 프로모션 리스트 ({promotions.length}건)
              </h4>
              {promotions.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-lg bg-[#070a12] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.legalReviewStatus === 'approved'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : p.legalReviewStatus === 'rejected'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {p.legalReviewStatus === 'approved' ? '승인됨 (공개)' : p.legalReviewStatus === 'rejected' ? '기각됨' : '심사중'}
                      </span>
                      <strong className="text-white text-sm">{p.title}</strong>
                    </div>
                    <p className="text-slate-400">
                      제공: {p.provider} · 혜택: <span className="text-[#f5df9a]">{p.discountOrPerk}</span> · 증빙: {p.proofDocument}
                    </p>
                    {p.rejectionReason && (
                      <p className="text-rose-400 text-[11px]">기각 이유: {p.rejectionReason}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleTogglePromoStatus(p.id, p.legalReviewStatus === 'approved' ? 'rejected' : 'approved')}
                      className="px-3 py-1.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[11px]"
                    >
                      상태 변경
                    </button>
                    <button
                      onClick={() => handleDeletePromo(p.id)}
                      className="p-1.5 rounded text-rose-400 hover:bg-rose-950/40"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: NEWS & CASE STUDY PUBLISHER */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            {/* Create News Form */}
            <form onSubmit={handleAddNews} className="p-4 rounded-xl bg-[#070a12] border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#d4af37]" />
                신규 카지노 뉴스 및 법원 판결 기사 작성
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400">기사 제목</label>
                  <input
                    type="text"
                    required
                    value={newNewsTitle}
                    onChange={(e) => setNewNewsTitle(e.target.value)}
                    placeholder="예: [현지 법원] 카지노 칩 절취 혐의 외국인 징역형 선고"
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">카테고리</label>
                  <select
                    value={newNewsCategory}
                    onChange={(e) => setNewNewsCategory(e.target.value as any)}
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  >
                    <option value="현지 법원 판결">현지 법원 판결</option>
                    <option value="재무부 정책 시행">재무부 정책 시행</option>
                    <option value="외환 & 환전 규정">외환 & 환전 규정</option>
                    <option value="사건사고 예방">사건사고 예방</option>
                    <option value="업계 동향">업계 동향</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">기사 출처 (언론사, 관보, 법원)</label>
                  <input
                    type="text"
                    required
                    value={newNewsSource}
                    onChange={(e) => setNewNewsSource(e.target.value)}
                    placeholder="예: 다낭시 인민법원 형사공보"
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400">대표 이미지 URL</label>
                  <input
                    type="text"
                    value={newNewsThumbnail}
                    onChange={(e) => setNewNewsThumbnail(e.target.value)}
                    className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                  />
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <label className="text-slate-400">기사 핵심 요약 (Summary)</label>
                <input
                  type="text"
                  required
                  value={newNewsSummary}
                  onChange={(e) => setNewNewsSummary(e.target.value)}
                  placeholder="1~2문장으로 기사의 핵심 사실을 요약"
                  className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                />
              </div>

              <div className="space-y-1 text-xs">
                <label className="text-slate-400">기사 본문 내용</label>
                <textarea
                  required
                  rows={4}
                  value={newNewsContent}
                  onChange={(e) => setNewNewsContent(e.target.value)}
                  placeholder="육하원칙에 입각한 실제 사건 및 정책 내용 서술..."
                  className="w-full bg-[#0b1120] border border-slate-700 rounded p-2 text-white"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded bg-[#d4af37] text-black font-bold text-xs hover:brightness-110 flex items-center gap-1.5 shadow"
              >
                <Plus className="w-4 h-4" />
                기사 발행하기
              </button>
            </form>

            {/* News List */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                발행된 기사 목록 ({news.length}건)
              </h4>
              {news.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg bg-[#070a12] border border-slate-800 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[#e6ca65] text-[10px]">
                        {item.category}
                      </span>
                      <strong className="text-white text-sm">{item.title}</strong>
                    </div>
                    <p className="text-slate-400 text-xs line-clamp-1">{item.summary}</p>
                    <span className="text-slate-500 text-[11px]">
                      발행: {item.publishDate} · 출처: {item.source}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDeleteNews(item.id)}
                    className="p-1.5 rounded text-rose-400 hover:bg-rose-950/40 shrink-0"
                    title="기사 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CASINO INFO EDITOR */}
        {activeTab === 'casinos' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              실사 검증된 카지노의 최소 베팅, 영업 시간 및 최종 확인 일자를 실시간 업데이트합니다.
            </p>

            <div className="space-y-4">
              {casinos.map((c, idx) => (
                <div key={c.id} className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <strong className="text-base text-white font-cinzel">{c.name} ({c.badge})</strong>
                    <span className="text-slate-500 text-[11px]">라이선스: {c.licenseInfo}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-slate-400 block text-[11px]">미니멈 베팅 표기</label>
                      <input
                        type="text"
                        value={c.minimumBet}
                        onChange={(e) => {
                          const updated = [...casinos];
                          updated[idx].minimumBet = e.target.value;
                          setCasinos(updated);
                          triggerSaveNotification();
                        }}
                        className="w-full bg-[#0b1120] border border-slate-700 rounded p-1.5 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block text-[11px]">맥시멈 베팅 표기</label>
                      <input
                        type="text"
                        value={c.maximumBet}
                        onChange={(e) => {
                          const updated = [...casinos];
                          updated[idx].maximumBet = e.target.value;
                          setCasinos(updated);
                          triggerSaveNotification();
                        }}
                        className="w-full bg-[#0b1120] border border-slate-700 rounded p-1.5 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block text-[11px]">최종 확인일</label>
                      <input
                        type="text"
                        value={c.lastVerifiedDate}
                        onChange={(e) => {
                          const updated = [...casinos];
                          updated[idx].lastVerifiedDate = e.target.value;
                          setCasinos(updated);
                          triggerSaveNotification();
                        }}
                        className="w-full bg-[#0b1120] border border-slate-700 rounded p-1.5 text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SERVICES PRICE EDITOR */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              BASIC, PREMIUM, SIGNATURE 서비스 패키지의 정찰 가격 가이드를 관리합니다.
            </p>

            <div className="space-y-4">
              {services.map((s, idx) => (
                <div key={s.id} className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <strong className="text-base text-white">{s.tierName}</strong>
                    <span className="text-slate-400">제공자: {s.serviceProvider}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 block text-[11px]">가격 가이드 표기</label>
                      <input
                        type="text"
                        value={s.priceGuide}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx].priceGuide = e.target.value;
                          setServices(updated);
                          triggerSaveNotification();
                        }}
                        className="w-full bg-[#0b1120] border border-slate-700 rounded p-1.5 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block text-[11px]">가격 보충 설명</label>
                      <input
                        type="text"
                        value={s.priceNote}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx].priceNote = e.target.value;
                          setServices(updated);
                          triggerSaveNotification();
                        }}
                        className="w-full bg-[#0b1120] border border-slate-700 rounded p-1.5 text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <span className="text-[11px] text-slate-500">
            * 변경된 내용은 브라우저 로컬 저장소 및 런타임 메모리에 자동 영속화됩니다.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-[#d4af37] text-black font-bold text-xs hover:brightness-110"
          >
            관리자 콘솔 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
