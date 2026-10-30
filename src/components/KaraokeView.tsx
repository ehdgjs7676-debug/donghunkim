import React, { useState } from 'react';
import { KARAOKE_LIST } from '../data/nightlife';
import { NightlifeKaraoke } from '../types';
import { 
  Mic2, 
  Clock, 
  Wine, 
  ShieldCheck, 
  AlertCircle, 
  DollarSign, 
  Sparkles, 
  MessageCircle, 
  CheckCircle, 
  X, 
  Volume2
} from 'lucide-react';

interface KaraokeViewProps {
  onOpenCustomerCenter: () => void;
}

export const KaraokeView: React.FC<KaraokeViewProps> = ({ onOpenCustomerCenter }) => {
  const [selectedKaraoke, setSelectedKaraoke] = useState<NightlifeKaraoke | null>(null);

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <Mic2 className="w-3.5 h-3.5" />
                <span>정식 인가 프리미엄 가라오케 시설</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                다낭 <span className="text-gold-gradient">가라오케 & KTV 정보</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                소방 안전 인증 및 정식 엔터테인먼트 허가를 득한 대형 비즈니스 KTV의 
                실제 룸 시설, 주류 세트 가격, 정품 위스키 확인법 및 합법적 이용 수칙을 안내합니다.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 max-w-sm">
              <strong className="block text-amber-300 font-semibold mb-0.5">합법성 가이드:</strong>
              성매매 및 불법 성적 서비스를 일체 알선·홍보하지 않으며, 건전한 비즈니스 음주 가무 시설만을 안내합니다.
            </div>
          </div>
        </div>

        {/* Karaoke Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {KARAOKE_LIST.map((ktv) => (
            <div
              key={ktv.id}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/50 overflow-hidden flex flex-col group transition-all duration-300 shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={ktv.image}
                  alt={ktv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-black/40 to-transparent" />
                
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#d4af37] text-black text-xs font-bold font-cinzel">
                  {ktv.district}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-cinzel text-2xl font-bold text-white group-hover:text-[#f5df9a] transition-colors">
                    {ktv.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-cinzel opacity-90">{ktv.englishName}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ktv.facilityType} · {ktv.roomCapacity}
                </p>

                {/* Price Structure Box */}
                <div className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">시간당 룸 차지:</span>
                    <span className="text-white font-medium">{ktv.averagePriceHour}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1.5 border-t border-slate-800/80">
                    <span className="text-slate-400">주류 세트 기준:</span>
                    <span className="text-[#f5df9a] font-semibold">{ktv.liquorSetPrice}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1.5 border-t border-slate-800/80">
                    <span className="text-slate-400">영업 시간:</span>
                    <span className="text-slate-200">{ktv.operatingHours}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 text-xs text-slate-400">
                  <span className="text-[#e6ca65] font-semibold text-[11px] block">시설 주요 특징:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {ktv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle className="w-3 h-3 text-[#d4af37] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedKaraoke(ktv)}
                    className="flex-1 py-2.5 rounded bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-[#d4af37] text-xs font-semibold transition-all"
                  >
                    상세 주류 & 규정 보기
                  </button>
                  <button
                    onClick={onOpenCustomerCenter}
                    className="px-4 py-2.5 rounded bg-[#d4af37] text-black font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    예약 안내
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for detail */}
        {selectedKaraoke && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
            <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative my-8">
              <div className="flex items-start justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    {selectedKaraoke.name}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedKaraoke.district} 위치</p>
                </div>
                <button
                  onClick={() => setSelectedKaraoke(null)}
                  className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5">
                  <span className="text-[#f5df9a] font-semibold text-xs block flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-[#d4af37]" />
                    음향 및 영상 설비 사양
                  </span>
                  <p className="text-slate-300">{selectedKaraoke.audioEquipment}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5">
                  <span className="text-[#f5df9a] font-semibold text-xs block flex items-center gap-1.5">
                    <Wine className="w-4 h-4 text-[#d4af37]" />
                    취급 정품 주류 리스트
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedKaraoke.beverages.map((bev, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-slate-300">
                        {bev}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                  <strong className="text-amber-300 block mb-1">예약 및 준수 규정:</strong>
                  <p>{selectedKaraoke.reservationPolicy}</p>
                  <p className="mt-1 text-slate-400">{selectedKaraoke.complianceRules}</p>
                </div>
              </div>

              <div className="flex justify-end pt-3 border-t border-slate-800">
                <button
                  onClick={() => setSelectedKaraoke(null)}
                  className="px-6 py-2 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
