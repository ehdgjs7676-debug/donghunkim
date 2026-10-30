/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavigationTab, CasinoItem, ServicePackage, NewsArticle, VerifiedPromotion } from './types';
import { INITIAL_CASINOS } from './data/casinos';
import { INITIAL_INSIGHTS } from './data/insights';
import { INITIAL_VIP_FACILITIES } from './data/vipFacilities';
import { INITIAL_SERVICES } from './data/services';
import { INITIAL_NEWS } from './data/news';
import { INITIAL_PROMOTIONS } from './data/faq';

import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { CasinoGuideView } from './components/CasinoGuideView';
import { CasinoInsightsView } from './components/CasinoInsightsView';
import { VipFacilitiesView } from './components/VipFacilitiesView';
import { ServicesView } from './components/ServicesView';
import { KaraokeView } from './components/KaraokeView';
import { MassageSpaView } from './components/MassageSpaView';
import { NightlifeGuideView } from './components/NightlifeGuideView';
import { LoungeBarView } from './components/LoungeBarView';
import { CasinoNewsView } from './components/CasinoNewsView';
import { FaqView } from './components/FaqView';
import { CustomerCenterModal } from './components/CustomerCenterModal';
import { AdminCMS } from './components/AdminCMS';
import { SitemapModal } from './components/SitemapModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { Footer } from './components/Footer';

import { MessageCircle, ShieldCheck, ChevronRight, Compass, BookOpen, Crown, Newspaper } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');

  // Persisted state via LocalStorage
  const [casinos, setCasinos] = useState<CasinoItem[]>(() => {
    const saved = localStorage.getItem('danangvvip_casinos');
    return saved ? JSON.parse(saved) : INITIAL_CASINOS;
  });

  const [services, setServices] = useState<ServicePackage[]>(() => {
    const saved = localStorage.getItem('danangvvip_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [news, setNews] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('danangvvip_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [promotions, setPromotions] = useState<VerifiedPromotion[]>(() => {
    const saved = localStorage.getItem('danangvvip_promotions');
    return saved ? JSON.parse(saved) : INITIAL_PROMOTIONS;
  });

  // Modal states
  const [isCustomerCenterOpen, setIsCustomerCenterOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'terms' | 'privacy' | 'responsible' | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('danangvvip_casinos', JSON.stringify(casinos));
  }, [casinos]);

  useEffect(() => {
    localStorage.setItem('danangvvip_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('danangvvip_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('danangvvip_promotions', JSON.stringify(promotions));
  }, [promotions]);

  const handleResetToDefault = () => {
    if (window.confirm('모든 데이터를 초기 기본값으로 복원하시겠습니까?')) {
      setCasinos(INITIAL_CASINOS);
      setServices(INITIAL_SERVICES);
      setNews(INITIAL_NEWS);
      setPromotions(INITIAL_PROMOTIONS);
      localStorage.removeItem('danangvvip_casinos');
      localStorage.removeItem('danangvvip_services');
      localStorage.removeItem('danangvvip_news');
      localStorage.removeItem('danangvvip_promotions');
    }
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-sans">
      
      {/* Main Luxury Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div>
            {/* Cinematic Hero */}
            <Hero
              onSelectTab={setCurrentTab}
              onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)}
            />

            {/* Quick Casino Guide Section Preview */}
            <div className="py-12 bg-[#070a12] border-b border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs uppercase font-cinzel font-bold text-[#e6ca65]">
                      VERIFIED CASINO SELECTION
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                      다낭 합법 카지노 가이드 (최신 규정)
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentTab('casino-guide');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-semibold text-[#f5df9a] hover:underline flex items-center gap-1"
                  >
                    <span>카지노 4개소 전체 상세 가이드 보기</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {casinos.slice(0, 2).map((c) => (
                    <div
                      key={c.id}
                      onClick={() => {
                        setCurrentTab('casino-guide');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-5 rounded-xl bg-[#0b1120] border border-slate-800 hover:border-[#d4af37]/60 transition-all cursor-pointer flex flex-col sm:flex-row gap-4 group"
                    >
                      <img
                        src={c.heroImage}
                        alt={c.name}
                        className="w-full sm:w-44 h-36 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1 flex flex-col justify-between space-y-2">
                        <div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] border border-[#d4af37]/30 font-semibold">
                            {c.badge}
                          </span>
                          <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f5df9a] transition-colors mt-1">
                            {c.name}
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                            {c.description}
                          </p>
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-800/80">
                          <span>외국인 전용 (만 {c.ageLimit}세+)</span>
                          <span className="text-[#e6ca65]">여권 필수</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Casino Insights Feature Preview */}
            <div className="py-12 bg-[#090e1a] border-b border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs uppercase font-cinzel font-bold text-[#e6ca65]">
                      DEEP-DIVE GAMING INSIGHTS
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                      경험자를 위한 카지노 인사이트
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentTab('casino-insights');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-semibold text-[#f5df9a] hover:underline flex items-center gap-1"
                  >
                    <span>인사이트 9편 전체 보기</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {INITIAL_INSIGHTS.slice(0, 3).map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        setCurrentTab('casino-insights');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-5 rounded-xl bg-[#0b1120] border border-slate-800 hover:border-[#d4af37]/60 transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#e6ca65]">
                          {art.category}
                        </span>
                        <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#f5df9a] transition-colors leading-snug">
                          {art.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {art.summary}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-[#e6ca65] font-semibold flex items-center justify-between">
                        <span>{art.readTime}</span>
                        <span>자세히 보기 &rarr;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3-Tier Services Preview */}
            <div className="py-12 bg-[#070a12] border-b border-slate-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                  <span className="text-xs uppercase font-cinzel font-bold text-[#e6ca65]">
                    TRANSPARENT 3-TIER PACKAGES
                  </span>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                    다낭 VVIP 여행 편의 서비스 (정찰제)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    카지노 롤링 연계 없는 100% 실비 기반의 투명한 의전 및 예약 대행 서비스입니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services.map((svc) => (
                    <div
                      key={svc.id}
                      onClick={() => {
                        setCurrentTab('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-6 rounded-xl bg-[#0b1120] border border-slate-800 hover:border-[#d4af37]/50 transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <span className="text-xs font-semibold text-[#e6ca65]">{svc.badge}</span>
                        <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#f5df9a]">
                          {svc.tierName.split(' ')[0]}
                        </h3>
                        <div className="text-lg font-bold text-gold-gradient font-cinzel">
                          {svc.priceGuide}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {svc.targetAudience}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-800 text-xs text-[#f5df9a] font-semibold flex items-center justify-between">
                        <span>세부 포함 내역 확인</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Latest News Preview */}
            <div className="py-12 bg-[#090e1a]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs uppercase font-cinzel font-bold text-[#e6ca65]">
                      CASINO NEWS & COURT RULINGS
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                      최신 카지노 뉴스 & 실제 판례
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentTab('casino-news');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-semibold text-[#f5df9a] hover:underline flex items-center gap-1"
                  >
                    <span>뉴스 전체 보기</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {news.slice(0, 2).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setCurrentTab('casino-news');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-5 rounded-xl bg-[#0b1120] border border-slate-800 hover:border-[#d4af37]/60 transition-all cursor-pointer flex gap-4 group"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-28 h-24 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-[#e6ca65]">{item.category}</span>
                          <h3 className="font-bold text-sm text-white group-hover:text-[#f5df9a] transition-colors line-clamp-2 mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          {item.publishDate} · {item.source}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Dedicated Views */}
        {currentTab === 'casino-guide' && <CasinoGuideView casinos={casinos} />}
        {currentTab === 'casino-insights' && <CasinoInsightsView insights={INITIAL_INSIGHTS} />}
        {currentTab === 'vip-facilities' && (
          <VipFacilitiesView
            facilities={INITIAL_VIP_FACILITIES}
            onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)}
          />
        )}
        {currentTab === 'services' && (
          <ServicesView
            services={services}
            promotions={promotions}
            onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)}
          />
        )}
        {currentTab === 'karaoke' && (
          <KaraokeView onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)} />
        )}
        {currentTab === 'massage-spa' && <MassageSpaView />}
        {currentTab === 'nightlife-guide' && <NightlifeGuideView />}
        {currentTab === 'lounge-bar' && (
          <LoungeBarView onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)} />
        )}
        {currentTab === 'casino-news' && <CasinoNewsView newsArticles={news} />}
        {currentTab === 'faq' && (
          <FaqView onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)} />
        )}
      </main>

      {/* Floating KakaoTalk Quick Action Button (Desktop & Mobile) */}
      <div className="fixed bottom-20 xl:bottom-8 right-5 z-40">
        <button
          onClick={() => setIsCustomerCenterOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#fee500] text-black font-bold text-xs sm:text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all border border-amber-300"
          title="카카오톡 상담 ID: danangvvip"
        >
          <MessageCircle className="w-5 h-5 fill-black text-black" />
          <span className="hidden sm:inline">카톡 실시간 상담</span>
          <span className="sm:hidden">상담</span>
        </button>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)}
      />

      {/* Footer */}
      <Footer
        onSelectTab={setCurrentTab}
        onOpenCustomerCenter={() => setIsCustomerCenterOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenSitemap={() => setIsSitemapOpen(true)}
        onOpenLegal={(tab) => setLegalModalTab(tab)}
      />

      {/* Modals */}
      <CustomerCenterModal
        isOpen={isCustomerCenterOpen}
        onClose={() => setIsCustomerCenterOpen(false)}
      />

      <AdminCMS
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        casinos={casinos}
        setCasinos={setCasinos}
        services={services}
        setServices={setServices}
        news={news}
        setNews={setNews}
        promotions={promotions}
        setPromotions={setPromotions}
        onResetToDefault={handleResetToDefault}
      />

      <SitemapModal
        isOpen={isSitemapOpen}
        onClose={() => setIsSitemapOpen(false)}
      />

      <LegalNoticeModal
        isOpen={legalModalTab !== null}
        defaultTab={legalModalTab || 'terms'}
        onClose={() => setLegalModalTab(null)}
      />

    </div>
  );
}
