import React, { useState } from 'react';
import { FAQ_LIST } from '../data/faq';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  MessageCircle, 
  CheckCircle2
} from 'lucide-react';

interface FaqViewProps {
  onOpenCustomerCenter: () => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onOpenCustomerCenter }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', '입장 & 신분증', '칩 & 환전 규정', '세관 & 고액 당첨', '서비스 & 여행'];

  const filteredFaqs = FAQ_LIST.filter(
    f => activeCategory === 'all' || f.category === activeCategory
  );

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>자주 묻는 질문 & 인사이더 답변</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
            FAQ <span className="text-gold-gradient">(자주 묻는 질문)</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            다낭 카지노 방문 및 프리미엄 나이트라이프 이용 시 경험자들이 가장 궁금해하는 핵심 질문과 
            법률적 주의사항을 명쾌하게 정리했습니다.
          </p>

          {/* Categories */}
          <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto pt-6 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#0b1120] text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat === 'all' ? '전체 보기' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 select-none group"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-[#e6ca65] uppercase">
                      [{faq.category}]
                    </span>
                    <h3 className="font-semibold text-base text-white group-hover:text-[#f5df9a] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 space-y-3">
                    <p>{faq.answer}</p>
                    
                    {faq.importantNote && (
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-amber-300">인사이더 팁: </strong>
                          {faq.importantNote}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
          <p className="text-slate-300 text-sm">
            더 자세한 현지 이동 편의나 5성급 리조트 예약 문의가 필요하신가요?
          </p>
          <button
            onClick={onOpenCustomerCenter}
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-gradient-to-r from-[#d4af37] to-[#b59228] text-black font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 shadow-lg shadow-[#d4af37]/20"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>카카오톡 고객센터 문의 (danangvvip)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
