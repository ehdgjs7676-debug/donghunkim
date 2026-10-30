import React from 'react';
import { NavigationTab } from '../types';
import { 
  ShieldCheck, 
  Compass, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  MapPin, 
  Award
} from 'lucide-react';

interface HeroProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCustomerCenter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab, onOpenCustomerCenter }) => {
  return (
    <div className="relative overflow-hidden bg-[#070a12] border-b border-[#d4af37]/20">
      {/* Background Cinematic Gradient & Luxury Pattern */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center filter brightness-50 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070a12]/60 to-[#070a12]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">
        
        {/* Independent Compliance Banner - Explicit legal protection */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-[#d4af37]/40 text-xs text-slate-300 backdrop-blur-md shadow-lg">
          <span className="flex h-2 w-2 rounded-full bg-[#d4af37] animate-ping" />
          <span className="font-cinzel text-[#e6ca65] font-bold tracking-wider">OFFICIAL NOTICE</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 text-[11px] sm:text-xs">
            카지노 운영사 공식 홈페이지가 아닌 <strong>독립적인 성인 전문 정보 플랫폼</strong>입니다.
          </span>
        </div>

        {/* Main Headings */}
        <div className="max-w-4xl space-y-4">
          <div className="space-y-1">
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              DANANG <span className="text-gold-gradient">VVIP</span>
            </h1>
            <p className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#e6ca65]">
              CASINO & NIGHTLIFE INSIDER
            </p>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl pt-2">
            경험자를 위한 <strong className="text-white font-medium">다낭 카지노 입장 규정</strong>과 
            <strong className="text-[#f5df9a] font-medium"> 칩 정산 절차</strong>, 
            그리고 <strong className="text-white font-medium">프리미엄 나이트라이프 가이드</strong>.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            골프 및 일반 관광 패키지는 다루지 않으며, 검증된 합법 카지노 라이선스 규정, 바카라 수학적 하우스 에지, 
            외환 세무 신고 요건, 정찰제 VIP 시설 및 안전 수칙만을 엄선하여 제공합니다.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={() => onSelectTab('casino-guide')}
            className="px-6 py-3.5 rounded bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#b59228] text-black font-bold text-sm sm:text-base flex items-center gap-2 hover:brightness-110 active:scale-95 shadow-xl shadow-[#d4af37]/20 transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5 text-black" />
            <span>카지노 가이드 바로보기</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={() => onSelectTab('casino-insights')}
            className="px-6 py-3.5 rounded bg-[#0b1120] border border-[#d4af37]/50 text-[#f5df9a] font-semibold text-sm sm:text-base flex items-center gap-2 hover:bg-[#101a30] hover:border-[#d4af37] transition-all cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#d4af37]" />
            <span>경험자용 카지노 인사이트</span>
          </button>

          <button
            onClick={onOpenCustomerCenter}
            className="px-5 py-3.5 rounded bg-slate-900/80 border border-slate-700 text-slate-300 font-medium text-xs sm:text-sm flex items-center gap-2 hover:text-white hover:border-slate-500 transition-all cursor-pointer"
          >
            <span>여행 편의 상담 (danangvvip)</span>
          </button>
        </div>

        {/* Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          <div 
            onClick={() => onSelectTab('casino-guide')}
            className="p-4 rounded-lg bg-[#0b1120]/80 border border-slate-800 hover:border-[#d4af37]/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#e6ca65] uppercase tracking-wider">CASINO</span>
              <Award className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="font-cinzel text-2xl font-bold text-white group-hover:text-[#e6ca65] transition-colors">4개소</div>
            <div className="text-xs text-slate-400 mt-1">호이아나 · 크라운 · 푸라마99 · 원오페라 공식 규정</div>
          </div>

          <div 
            onClick={() => onSelectTab('casino-insights')}
            className="p-4 rounded-lg bg-[#0b1120]/80 border border-slate-800 hover:border-[#d4af37]/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#e6ca65] uppercase tracking-wider">INSIGHTS</span>
              <Lock className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="font-cinzel text-2xl font-bold text-white group-hover:text-[#e6ca65] transition-colors">9편</div>
            <div className="text-xs text-slate-400 mt-1">슈퍼6 하우스에지 · 롤링 진실 · 케이지 정산 · AML</div>
          </div>

          <div 
            onClick={() => onSelectTab('services')}
            className="p-4 rounded-lg bg-[#0b1120]/80 border border-slate-800 hover:border-[#d4af37]/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#e6ca65] uppercase tracking-wider">SERVICES</span>
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="font-cinzel text-2xl font-bold text-white group-hover:text-[#e6ca65] transition-colors">3-TIER</div>
            <div className="text-xs text-slate-400 mt-1">BASIC · PREMIUM · SIGNATURE 실비 정찰제</div>
          </div>

          <div 
            onClick={() => onSelectTab('nightlife-guide')}
            className="p-4 rounded-lg bg-[#0b1120]/80 border border-slate-800 hover:border-[#d4af37]/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#e6ca65] uppercase tracking-wider">NIGHTLIFE</span>
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="font-cinzel text-2xl font-bold text-white group-hover:text-[#e6ca65] transition-colors">COMPLIANCE</div>
            <div className="text-xs text-slate-400 mt-1">가라오케 · 마사지스파 · 바가지 방지 7계명</div>
          </div>

        </div>

        {/* Responsible Gaming & Anti-Scam Notice Card */}
        <div className="mt-8 p-3.5 sm:p-4 rounded-lg bg-[#0b1120]/90 border border-[#d4af37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-start sm:items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#e6ca65] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-white">책임 있는 도박 & 건전 여가 안내:</strong> 본 사이트는 카지노 이용을 권장하거나 도박을 통한 수익을 보장하지 않습니다. 도박은 오락의 목적으로만 절제 있게 접근해야 합니다. (도박문제 상담 한국 1336)
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-[11px] text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>롤링 수수료 모객 및 불법 알선 엄격 배제</span>
          </div>
        </div>

      </div>
    </div>
  );
};
