import React from 'react';
import { LOUNGE_BAR_LIST } from '../data/nightlife';
import { 
  Wine, 
  MapPin, 
  Clock, 
  Eye, 
  Sparkles, 
  GlassWater, 
  DollarSign, 
  Shirt, 
  MessageCircle
} from 'lucide-react';

interface LoungeBarViewProps {
  onOpenCustomerCenter: () => void;
}

export const LoungeBarView: React.FC<LoungeBarViewProps> = ({ onOpenCustomerCenter }) => {
  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <Wine className="w-3.5 h-3.5" />
                <span>스카이라운지 & 프라이빗 바</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                다낭 <span className="text-gold-gradient">라운지 & 루프탑 바</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                다낭의 수려한 한강 야경을 조망하는 초고층 스카이 36, 감성적인 브릴리언트 탑 바, 
                그리고 최고급 쿠바 시가와 빈티지 싱글몰트를 취급하는 프라이빗 위스키 살롱을 소개합니다.
              </p>
            </div>

            <button
              onClick={onOpenCustomerCenter}
              className="px-5 py-2.5 rounded bg-gradient-to-r from-[#d4af37] to-[#b59228] text-black font-semibold text-xs sm:text-sm hover:brightness-110 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>VIP 테이블 예약 지원</span>
            </button>
          </div>
        </div>

        {/* Lounge Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {LOUNGE_BAR_LIST.map((bar) => (
            <div
              key={bar.id}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/50 overflow-hidden flex flex-col group transition-all duration-300 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={bar.image}
                  alt={bar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-black/30 to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#d4af37] text-black text-xs font-bold font-cinzel">
                  {bar.type}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#f5df9a] transition-colors leading-snug">
                    {bar.name}
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <Eye className="w-3 h-3 text-[#d4af37]" />
                    {bar.viewType}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {bar.description}
                </p>

                {/* Specs */}
                <div className="p-3 rounded-lg bg-[#070a12] border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="text-slate-300">{bar.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400">영업시간:</span>
                    <span className="text-slate-200">{bar.operatingHours}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400">드레스코드:</span>
                    <span className="text-amber-300/90 font-medium">{bar.dressCode}</span>
                  </div>
                </div>

                {/* Signature Drink */}
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-[#f5df9a] font-semibold text-[11px] block mb-1">
                    추천 시그니처 주류
                  </span>
                  <p className="text-slate-300">{bar.signatureDrink}</p>
                  <p className="text-slate-400 text-[11px] mt-1">가격대: {bar.priceRange}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
