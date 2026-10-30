import React, { useState } from 'react';
import { ServicePackage, VerifiedPromotion } from '../types';
import { 
  Sparkles, 
  Check, 
  X as XIcon, 
  AlertCircle, 
  ShieldCheck, 
  MessageCircle, 
  FileText, 
  HelpCircle, 
  Award, 
  Clock
} from 'lucide-react';

interface ServicesViewProps {
  services: ServicePackage[];
  promotions: VerifiedPromotion[];
  onOpenCustomerCenter: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  services,
  promotions,
  onOpenCustomerCenter,
}) => {
  const [activeTier, setActiveTier] = useState<'basic' | 'premium' | 'signature'>('premium');

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>투명 정찰제 & 법적 검토 완료</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                서비스 & <span className="text-gold-gradient">혜택 정보 (3-TIER)</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                다낭 여행의 안전과 품격을 위한 3단계 정찰제 서비스입니다. 
                포함 및 불포함 내역, 제공 주체, 취소 및 환불 규정을 사전에 투명하게 공개합니다.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 max-w-sm">
              <strong className="block text-amber-300 font-semibold mb-0.5">컴플라이언스 준수 서약:</strong>
              카지노 베팅액·손실액·롤링 실적에 연동된 불법 무료 숙박이나 항공권 혜택은 일체 취급하지 않습니다.
            </div>
          </div>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const isFeatured = svc.id === 'premium';
            const isSignature = svc.id === 'signature';

            return (
              <div
                key={svc.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#0e172a] via-[#0b1120] to-[#070a12] border-2 border-[#d4af37] ring-1 ring-[#d4af37]/30 scale-100 lg:-translate-y-2'
                    : isSignature
                    ? 'bg-[#0b1120] border border-[#d4af37]/40 hover:border-[#d4af37]'
                    : 'bg-[#0b1120] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Top Badge */}
                {isFeatured && (
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#b59228] text-black text-center py-1.5 text-xs font-bold tracking-wider font-cinzel uppercase">
                    MOST RECOMMENDED FOR EXECUTIVES
                  </div>
                )}
                {isSignature && (
                  <div className="bg-slate-900 border-b border-[#d4af37]/30 text-[#e6ca65] text-center py-1.5 text-xs font-bold tracking-wider font-cinzel uppercase">
                    ULTIMATE BESPOKE VIP
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6 flex-1">
                  
                  {/* Tier Title & Audience */}
                  <div>
                    <span className="text-[11px] font-semibold text-[#e6ca65] px-2 py-0.5 rounded bg-[#d4af37]/15 border border-[#d4af37]/30">
                      {svc.badge}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-2">
                      {svc.tierName}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {svc.targetAudience}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-xl bg-[#070a12] border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 block font-medium">가격 / 견적 가이드</span>
                    <div className="font-cinzel text-xl sm:text-2xl font-black text-gold-gradient">
                      {svc.priceGuide}
                    </div>
                    <p className="text-[11px] text-slate-400">{svc.priceNote}</p>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold text-[#f5df9a] uppercase tracking-wider block">
                      포함 사항 (Included)
                    </span>
                    <ul className="space-y-2">
                      {svc.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded Items */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      불포함 사항 (Excluded)
                    </span>
                    <ul className="space-y-1.5">
                      {svc.excludedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <XIcon className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Terms & Provider Details */}
                  <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                    <div>
                      <span className="text-slate-400 block text-[11px]">제공 주체</span>
                      <span className="text-slate-200 font-medium">{svc.serviceProvider}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">취소 및 환불 규정</span>
                      <span className="text-slate-300 text-[11px]">{svc.cancellationPolicy}</span>
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="p-2.5 rounded bg-black/50 border border-slate-800 text-[11px] text-slate-400 mb-4">
                    <strong className="text-slate-300">법적 보증:</strong> {svc.compliancePledge}
                  </div>

                  <button
                    onClick={onOpenCustomerCenter}
                    className={`w-full py-3.5 rounded font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#b59228] text-black hover:brightness-110 shadow-lg shadow-[#d4af37]/25'
                        : 'bg-slate-800 text-slate-200 hover:bg-[#d4af37] hover:text-black border border-slate-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{svc.id.toUpperCase()} 패키지 상담 (danangvvip)</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Verified Promotions Audit Table - Transparent legal compliance */}
        <div className="mt-16 bg-[#0b1120] rounded-xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-cinzel text-xl font-bold text-white">
                  실제 확인된 프로모션 검증 대장 (Compliance Registry)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                플랫폼 신뢰도를 위해 정식 계약이 확인된 호텔/차량 혜택만 승인하며, 사설 카지노 롤링 연계 프로모션은 전량 기각합니다.
              </p>
            </div>
            <span className="text-xs text-[#e6ca65] font-semibold">
              실시간 검증 상태 공개
            </span>
          </div>

          <div className="space-y-4">
            {promotions.map((promo) => {
              const isApproved = promo.legalReviewStatus === 'approved';
              return (
                <div
                  key={promo.id}
                  className={`p-4 rounded-lg border text-xs space-y-2 ${
                    isApproved
                      ? 'bg-[#070a12] border-emerald-500/30'
                      : 'bg-rose-950/20 border-rose-500/40 opacity-80'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      {isApproved ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">
                          승인 완료 (적법성 통과)
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px]">
                          게재 거절 (불법 롤링 연계)
                        </span>
                      )}
                      <span>{promo.title}</span>
                    </span>
                    <span className="text-slate-500 text-[11px]">유효기간: {promo.validUntil}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-slate-300 pt-1">
                    <div>
                      <span className="text-slate-400 block text-[11px]">제공 업체:</span>
                      <span>{promo.provider}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">혜택 내용:</span>
                      <span className="text-[#f5df9a]">{promo.discountOrPerk}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">증빙 자료:</span>
                      <span className="text-slate-400 truncate">{promo.proofDocument}</span>
                    </div>
                  </div>

                  {promo.rejectionReason && (
                    <div className="p-2.5 rounded bg-rose-950/40 border border-rose-500/20 text-[11px] text-rose-200">
                      <strong>기각 사유:</strong> {promo.rejectionReason}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
