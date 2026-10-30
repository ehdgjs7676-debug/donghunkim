import React, { useState } from 'react';
import { MASSAGE_SPA_LIST } from '../data/nightlife';
import { MassageSpaItem } from '../types';
import { 
  Flower2, 
  Clock, 
  DollarSign, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  CheckCircle, 
  HelpCircle
} from 'lucide-react';

export const MassageSpaView: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('all');

  const types = ['all', '스포츠 마사지', '아로마 마사지', '발 마사지', '5성급 호텔 스파'];

  const filtered = MASSAGE_SPA_LIST.filter(
    item => activeType === 'all' || item.type === activeType
  );

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <Flower2 className="w-3.5 h-3.5" />
                <span>피로 회복 & 웰니스 테라피</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                다낭 <span className="text-gold-gradient">마사지 & 스파 가이드</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                장시간 게임 및 비행 후 피로를 해소하는 스포츠 딥티슈, 아로마 핫스톤, 
                발 마사지, 5성급 호텔 시그니처 스파의 실제 코스와 정찰제 팁 문화를 안내합니다.
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    activeType === t
                      ? 'bg-[#d4af37] text-black font-semibold'
                      : 'bg-[#0b1120] text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {t === 'all' ? '전체 보기' : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Spa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/50 overflow-hidden flex flex-col group transition-all duration-300 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-black/30 to-transparent" />
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#d4af37] text-black text-xs font-bold font-cinzel">
                    {item.type}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-slate-200 text-xs">
                    {item.district}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#f5df9a] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300">{item.atmosphere}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Target need highlight */}
                <div className="p-3 rounded-lg bg-[#070a12] border-l-2 border-[#d4af37] text-xs text-slate-300">
                  <strong className="text-[#f5df9a] block text-[11px]">추천 대상 및 효과:</strong>
                  {item.targetNeed}
                </div>

                {/* Price and Duration */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">코스별 가격대:</span>
                    <span className="text-white font-semibold">{item.priceRange}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                    <span className="text-slate-400">제공 코스:</span>
                    <span className="text-slate-300">{item.durationOptions.join(' · ')}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[11px]">
                    <span className="text-emerald-400 font-medium">팁(Tip) 안내:</span>
                    <span className="text-slate-300">{item.tipPolicy}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1 pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 text-[11px] block">주요 서비스 특징:</span>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Tip & Etiquette Guide Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#0b1120] border border-slate-800 space-y-3 text-xs sm:text-sm">
          <h4 className="font-cinzel text-base font-bold text-[#f5df9a] flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            다낭 마사지 이용 시 올바른 매너 & 팁 에티켓
          </h4>
          <p className="text-slate-300 leading-relaxed text-xs">
            다낭의 정규 마사지 샵은 대체로 메뉴판에 팁 포함 여부(Tip Included)를 명시하고 있습니다. 
            팁 불포함 샵의 경우 60분 기준 50,000~100,000 VND(약 2,700~5,400원), 90분 기준 100,000~150,000 VND 수준이 일반적인 표준 매너 팁입니다. 
            터무니없이 고액의 팁을 강요하는 곳은 불법 퇴폐 변종 업소일 확률이 높으므로 즉시 거절하십시오.
          </p>
        </div>

      </div>
    </section>
  );
};
