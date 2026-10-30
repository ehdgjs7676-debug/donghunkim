import React, { useState } from 'react';
import { CasinoItem } from '../types';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  FileCheck, 
  AlertTriangle, 
  Coins, 
  Shirt, 
  HelpCircle, 
  CheckCircle, 
  X, 
  ExternalLink, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';

interface CasinoGuideViewProps {
  casinos: CasinoItem[];
}

export const CasinoGuideView: React.FC<CasinoGuideViewProps> = ({ casinos }) => {
  const [selectedCasino, setSelectedCasino] = useState<CasinoItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'integrated' | 'club'>('all');

  const filteredCasinos = casinos.filter(c => {
    if (filter === 'integrated') return c.id === 'hoiana-casino' || c.id === 'crown-international-club';
    if (filter === 'club') return c.id === 'club-99-furama' || c.id === 'club-seven-dragon';
    return true;
  });

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>공식 인가 정보 실사 완료</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                다낭 <span className="text-gold-gradient">카지노 가이드</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                베트남 재무부 및 현지 규정에 근거한 확인된 외국인 전용 카지노 리스트입니다. 
                신분증 지참 규정, 칩 반출 금지, 드레스코드, 실제 게임 종류를 투명하게 공시합니다.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 bg-[#0b1120] p-1.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  filter === 'all' 
                    ? 'bg-[#d4af37] text-black font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                전체 ({casinos.length})
              </button>
              <button
                onClick={() => setFilter('integrated')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  filter === 'integrated' 
                    ? 'bg-[#d4af37] text-black font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                대형 복합리조트
              </button>
              <button
                onClick={() => setFilter('club')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  filter === 'club' 
                    ? 'bg-[#d4af37] text-black font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                전자 게이밍 클럽
              </button>
            </div>
          </div>
        </div>

        {/* Casino Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCasinos.map((casino) => (
            <div 
              key={casino.id}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden flex flex-col group shadow-xl"
            >
              {/* Card Image Banner */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={casino.heroImage} 
                  alt={casino.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#d4af37] text-black text-xs font-bold font-cinzel tracking-wider shadow">
                    {casino.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-medium">
                    외국인 전용 (만 {casino.ageLimit}세 이상)
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-cinzel text-2xl font-bold text-white group-hover:text-[#f5df9a] transition-colors">
                    {casino.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-cinzel opacity-90">{casino.englishName}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {casino.description}
                </p>

                {/* Quick Spec List */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-[#070a12]/80 border border-slate-800/80 text-xs">
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">위치 및 거리</span>
                    <span className="text-slate-200 font-medium line-clamp-1">{casino.distanceFromAirport}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">테이블 & 슬롯</span>
                    <span className="text-[#f5df9a] font-medium">{casino.tableCount} / {casino.slotCount}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">미니멈 베팅</span>
                    <span className="text-slate-200 font-medium">{casino.minimumBet}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">영업 시간</span>
                    <span className="text-slate-200 font-medium">{casino.operatingHours}</span>
                  </div>
                </div>

                {/* Verification Box */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-400 pt-1 border-t border-slate-800">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      공식 운영사: {casino.operator}
                    </span>
                    <span className="text-slate-500 text-[11px]">검증일: {casino.lastVerifiedDate}</span>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => setSelectedCasino(casino)}
                  className="w-full py-3 rounded bg-slate-900 border border-[#d4af37]/40 text-[#f5df9a] hover:bg-[#d4af37] hover:text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>입장 규정 및 상세 가이드 확인</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Checklist Banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#0b1120] to-[#101a30] border border-[#d4af37]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-cinzel text-lg font-bold text-[#f5df9a] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                다낭 카지노 방문 전 공통 4대 필수 수칙
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                ① 실물 여권 원본 필수 (사진 절대 불가) · ② 2013년 이후 발행 깨끗한 100달러 신권 준비 · 
                ③ 칩 외부 반출 절대 금지(세관 적발 시 몰수) · ④ 사진/동영상 촬영 일체 금지
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded bg-black/60 border border-slate-700 text-xs text-slate-300">
                베트남 법령 Decree 03/2017/ND-CP 준수
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedCasino && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] text-xs font-semibold border border-[#d4af37]/30">
                  {selectedCasino.badge}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-2">
                  {selectedCasino.name}
                </h3>
                <p className="text-xs text-slate-400 font-cinzel">{selectedCasino.englishName}</p>
              </div>
              <button 
                onClick={() => setSelectedCasino(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Tabs / Sections */}
            <div className="space-y-6 text-sm">
              
              {/* Location & License */}
              <div className="space-y-2 p-4 rounded-lg bg-[#070a12] border border-slate-800">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">위치 및 공식 주소:</strong>
                    <p className="text-slate-300 text-xs mt-0.5">{selectedCasino.location}</p>
                    <p className="text-[#f5df9a] text-xs mt-0.5">({selectedCasino.distanceFromAirport})</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-slate-800/80">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">공식 운영사 & 인가 정보:</strong>
                    <p className="text-slate-300 text-xs mt-0.5">{selectedCasino.licenseInfo}</p>
                    <p className="text-slate-400 text-xs">운영 주체: {selectedCasino.operator}</p>
                  </div>
                </div>
              </div>

              {/* Passport & Dress Code Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#e6ca65] font-semibold text-xs uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    여권 및 신분증 규정
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedCasino.passportRequirements}
                  </p>
                  <div className="pt-2 text-[11px] text-amber-300/90 font-medium">
                    ※ 미성년자(만 {selectedCasino.ageLimit}세 미만) 입장 불가
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#e6ca65] font-semibold text-xs uppercase">
                    <Shirt className="w-4 h-4" />
                    공식 드레스코드
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedCasino.dressCode}
                  </p>
                  <div className="pt-2 text-[11px] text-slate-400">
                    ※ 모자/선글라스는 게임 진행 중 착용 불가
                  </div>
                </div>
              </div>

              {/* Games & Betting Limits */}
              <div className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#e6ca65] font-semibold text-xs flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    운영 게임 종류 ({selectedCasino.gameTypes.length}종)
                  </span>
                  <span className="text-xs text-slate-400">
                    테이블: {selectedCasino.tableCount} · 슬롯: {selectedCasino.slotCount}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCasino.gameTypes.map((game, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-slate-200"
                    >
                      {game}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block">미니멈 베팅:</span>
                    <span className="text-slate-200 font-medium">{selectedCasino.minimumBet}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">맥시멈 베팅:</span>
                    <span className="text-slate-200 font-medium">{selectedCasino.maximumBet}</span>
                  </div>
                </div>
              </div>

              {/* Pre-visit checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  방문 전 체크리스트
                </h4>
                <div className="space-y-1.5">
                  {selectedCasino.preVisitChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-[#d4af37] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Rules & Dispute Procedure */}
              <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  공식 이용규정 및 분쟁 처리 절차
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {selectedCasino.officialRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-amber-500/20 text-xs text-slate-300">
                  <strong className="text-amber-200">분쟁 처리 프로토콜: </strong>
                  {selectedCasino.disputeProcedure}
                </div>
              </div>

              {/* Official Source & Verification Date */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs text-slate-500">
                <span>출처: {selectedCasino.officialSource}</span>
                <span className="text-[#e6ca65]">최종 검증일: {selectedCasino.lastVerifiedDate}</span>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedCasino(null)}
                className="px-6 py-2.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
