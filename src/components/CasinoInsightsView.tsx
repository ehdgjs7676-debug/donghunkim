import React, { useState } from 'react';
import { CasinoInsightArticle } from '../types';
import { 
  BookOpen, 
  Search, 
  ShieldAlert, 
  Clock, 
  ChevronRight, 
  X, 
  Sparkles, 
  FileText, 
  Scale, 
  AlertCircle
} from 'lucide-react';

interface CasinoInsightsViewProps {
  insights: CasinoInsightArticle[];
}

export const CasinoInsightsView: React.FC<CasinoInsightsViewProps> = ({ insights }) => {
  const [selectedArticle, setSelectedArticle] = useState<CasinoInsightArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    '바카라 & 룰',
    '롤링 & 턴오버',
    '칩 교환 & 정산',
    '고액 당첨 & 세무',
    '자금세탁방지 (AML)',
    'VIP 살롱 구조',
    '출입금지 & 분쟁'
  ];

  const filteredArticles = insights.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesQuery = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#e6ca65] mb-2">
                <Scale className="w-3.5 h-3.5" />
                <span>경험자를 위한 전문 게이밍 분석</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                카지노 <span className="text-gold-gradient">인사이트 & 법률 분석</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                도박을 수익 수단으로 미화하지 않습니다. 하우스 에지의 수학적 진실, 롤링 칩의 메커니즘, 
                외환 세무 및 자금세탁방지(AML) 규정을 객관적인 시각에서 심층 전달합니다.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="키워드 검색 (예: 롤링, 슈퍼6, 세금)"
                className="w-full bg-[#0b1120] border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-5 pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-black font-semibold shadow'
                    : 'bg-[#0b1120] text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat === 'all' ? '전체 보기' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Insight Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/60 p-6 flex flex-col justify-between group transition-all duration-300 shadow-lg cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-[#d4af37]/15 text-[#e6ca65] border border-[#d4af37]/30 font-medium">
                    {article.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f5df9a] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">{article.publishedDate}</span>
                <span className="text-[#e6ca65] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  전문 분석 읽기
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#0b1120] rounded-xl border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">해당 검색어와 일치하는 인사이트가 없습니다.</p>
            <p className="text-slate-500 text-xs mt-1">다른 검색어를 입력하시거나 카테고리 필터를 초기화해 보세요.</p>
          </div>
        )}

        {/* Responsible Gaming Quote Box */}
        <div className="mt-12 p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm text-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">경험자를 위한 도박 수칙:</strong>
              <p className="mt-1 text-slate-400 text-xs leading-relaxed">
                바카라와 카지노의 모든 게임은 수학적으로 하우스 에지(카지노 우위)가 내장되어 있어 장기적으로 플레이어에게 마이너스 기댓값을 갖습니다. 
                이를 생활비 마련이나 재테크 수단으로 오인하지 마시고, 정해진 여가 예산 범위 내에서만 엄격히 통제하십시오.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-[11px] text-slate-500 block">도박문제 한국 상담</span>
            <span className="text-[#f5df9a] font-bold font-cinzel text-base">국번없이 1336</span>
          </div>
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] text-xs font-semibold border border-[#d4af37]/30">
                    {selectedArticle.category}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {selectedArticle.readTime} · {selectedArticle.publishedDate}
                  </span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">작성: {selectedArticle.author}</p>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Summary Highlight Box */}
            <div className="p-4 rounded-lg bg-[#070a12] border-l-4 border-[#d4af37] text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-[#f5df9a] block mb-1">인사이트 요약:</strong>
              {selectedArticle.summary}
            </div>

            {/* Article Paragraphs */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaway */}
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
              <strong className="text-emerald-300 block mb-1">핵심 결론 (Key Takeaway):</strong>
              {selectedArticle.keyTakeaway}
            </div>

            {/* Legal Notice */}
            <div className="p-3.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{selectedArticle.legalNotice}</span>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded bg-[#d4af37] text-black hover:brightness-110 text-xs font-bold"
              >
                확인 및 닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
