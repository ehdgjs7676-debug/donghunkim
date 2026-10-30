import React, { useState } from 'react';
import { VipFacility } from '../types';
import { 
  Sparkles, 
  Crown, 
  Hotel, 
  Utensils, 
  Car, 
  Flower2, 
  ShieldCheck, 
  CheckCircle, 
  X, 
  ChevronRight
} from 'lucide-react';

interface VipFacilitiesViewProps {
  facilities: VipFacility[];
  onOpenCustomerCenter: () => void;
}

export const VipFacilitiesView: React.FC<VipFacilitiesViewProps> = ({ facilities, onOpenCustomerCenter }) => {
  const [selectedFacility, setSelectedFacility] = useState<VipFacility | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = ['all', 'VIP 라운지', '프라이빗 객실 & 스위트', '고급 레스토랑', '차량 & 의전', '호텔 스파 & 웰니스'];

  const filtered = facilities.filter(f => activeTab === 'all' || f.category === activeTab);

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <Crown className="w-3.5 h-3.5" />
                <span>복합리조트 최고급 편의시설</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                VIP <span className="text-gold-gradient">시설 & 인프라</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                다낭 및 호이안 5성급 복합리조트의 VIP 전용 클럽 라운지, 프레지덴셜 스위트, 
                미슐랭 파인다이닝, 공항 CIP 패스트트랙 및 전용 의전 차량 인프라를 소개합니다.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    activeTab === cat
                      ? 'bg-[#d4af37] text-black font-semibold'
                      : 'bg-[#0b1120] text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? '전체 시설' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/50 overflow-hidden flex flex-col group transition-all duration-300 shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f5df9a] text-[11px] font-semibold">
                  {item.category}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] text-[#e6ca65] font-cinzel block">{item.resortName}</span>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f5df9a] transition-colors leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>

                {/* Key feature pills */}
                <div className="space-y-1.5">
                  {item.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] truncate max-w-[170px]">
                    {item.verifiedSource}
                  </span>
                  <button
                    onClick={() => setSelectedFacility(item)}
                    className="text-[#e6ca65] font-semibold hover:underline flex items-center gap-0.5"
                  >
                    상세보기
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Concierge Banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#0b1120] via-[#101a30] to-[#0b1120] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#e6ca65] font-bold">
              DANANG VVIP CONCIERGE DESK
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              리조트 스위트룸 및 VIP 의전 차량 예약 연계
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              정식 라이선스를 보유한 운송 사업자 및 5성급 리조트 공식 B2B 채널을 통해 
              투명한 정찰제 가격으로 VIP 공항 패스트트랙과 프라이빗 차량을 안전하게 연계해 드립니다.
            </p>
          </div>
          <button
            onClick={onOpenCustomerCenter}
            className="px-6 py-3 rounded bg-gradient-to-r from-[#d4af37] to-[#b59228] text-black font-bold text-xs sm:text-sm whitespace-nowrap hover:brightness-110 active:scale-95 shadow-lg shadow-[#d4af37]/20"
          >
            VIP 컨시어지 문의 (danangvvip)
          </button>
        </div>

      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] text-xs font-semibold">
                  {selectedFacility.category}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                  {selectedFacility.name}
                </h3>
                <p className="text-xs text-slate-400">{selectedFacility.resortName}</p>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-56 object-cover rounded-lg"
              />

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedFacility.description}
              </p>

              <div className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-[#f5df9a] block">시설 주요 혜택 및 사양</span>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {selectedFacility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">이용 자격</span>
                  <span className="text-slate-200 font-medium">{selectedFacility.accessRequirement}</span>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">드레스코드</span>
                  <span className="text-slate-200 font-medium">{selectedFacility.dressCode}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
                확인 출처: {selectedFacility.verifiedSource}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedFacility(null)}
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
