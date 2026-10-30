import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  ExternalLink, 
  ChevronRight, 
  X, 
  ShieldCheck, 
  FileText, 
  Filter
} from 'lucide-react';

interface CasinoNewsViewProps {
  newsArticles: NewsArticle[];
}

export const CasinoNewsView: React.FC<CasinoNewsViewProps> = ({ newsArticles }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', '현지 법원 판결', '재무부 정책 시행', '외환 & 환전 규정', '사건사고 예방', '업계 동향'];

  const filteredNews = newsArticles.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase());
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
                <Newspaper className="w-3.5 h-3.5" />
                <span>공식 발표 및 실시간 언론 보도</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                카지노 <span className="text-gold-gradient">뉴스 & 사건사고 판례</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                다낭 현지 법원의 실제 판결, 베트남 재무부의 외국인 카지노 정책 개정안, 
                외환 규정 및 공항 세관 단속 사례를 사실에 근거하여 가감 없이 보도합니다.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="뉴스 검색 (예: 판결, 칩 반출, 환전)"
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
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#d4af37] text-black font-semibold shadow'
                    : 'bg-[#0b1120] text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat === 'all' ? '전체 뉴스' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/60 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0b1120] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-slate-700 text-[#f5df9a] text-[10px] font-medium">
                  {article.category}
                </span>
              </div>

              <div className="p-5 sm:w-3/5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.publishDate}
                    </span>
                    <span>·</span>
                    <span className="text-[#e6ca65]">{article.source}</span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#f5df9a] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">
                    사건일: {article.incidentDate}
                  </span>
                  <span className="text-[#e6ca65] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    기사 전문 읽기
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-[#0b1120] rounded-xl border border-slate-800">
            <Newspaper className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">해당 검색어와 일치하는 뉴스가 없습니다.</p>
          </div>
        )}

      </div>

      {/* News Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] text-xs font-semibold">
                    {selectedArticle.category}
                  </span>
                  <span className="text-slate-500 text-xs">
                    발행일: {selectedArticle.publishDate} · 사건일: {selectedArticle.incidentDate}
                  </span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-2 leading-snug">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>출처: <strong>{selectedArticle.source}</strong></span>
                  {selectedArticle.sourceUrl && (
                    <a 
                      href={selectedArticle.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#e6ca65] hover:underline flex items-center gap-1"
                    >
                      <span>원문 출처 링크</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail */}
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img
                src={selectedArticle.thumbnail}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Summary */}
            <div className="p-4 rounded-lg bg-[#070a12] border-l-4 border-[#d4af37] text-xs sm:text-sm text-slate-300">
              <strong className="text-[#f5df9a] block mb-1">핵심 요약:</strong>
              {selectedArticle.summary}
            </div>

            {/* Body */}
            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4 font-normal">
              {selectedArticle.content}
            </div>

            {/* Verification Tag */}
            <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                본 기사는 실제 판결문, 공공 기관 발표 및 현지 공식 관보에 기반하여 검증되었습니다.
              </span>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedArticle(null)}
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
