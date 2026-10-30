import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { 
  ShieldCheck, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Settings, 
  HelpCircle, 
  Compass, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCustomerCenter: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenCustomerCenter,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; badge?: string; isCasino?: boolean }[] = [
    { id: 'casino-guide', label: '1. 카지노 가이드', badge: '필독', isCasino: true },
    { id: 'casino-insights', label: '2. 카지노 인사이트', badge: '경험자용', isCasino: true },
    { id: 'vip-facilities', label: '3. VIP 시설' },
    { id: 'services', label: '4. 서비스 & 혜택' },
    { id: 'karaoke', label: '5. 가라오케' },
    { id: 'massage-spa', label: '6. 마사지 & 스파' },
    { id: 'nightlife-guide', label: '7. 다낭 밤문화' },
    { id: 'lounge-bar', label: '라운지 & 바' },
    { id: 'casino-news', label: '8. 카지노 뉴스', badge: '실시간' },
    { id: 'faq', label: '9. FAQ' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070a12]/95 backdrop-blur-md border-b border-[#d4af37]/20 transition-all">
      {/* Top micro-bar for legal & concierge notice */}
      <div className="bg-[#0b1120] text-xs py-1 px-4 border-b border-slate-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#e6ca65] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              성인 전용 독립 정보 플랫폼 (19+)
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[11px]">
              카지노 공식 운영사 아님 · 합법 규정 및 실제 판례 기반 인사이더 정보
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400">
              여행 편의 상담 카톡: <strong className="text-[#f5df9a]">danangvvip</strong>
            </span>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenAdmin}
              className="text-slate-400 hover:text-[#d4af37] flex items-center gap-1 transition-colors"
              title="관리자 CMS 콘솔"
            >
              <Settings className="w-3 h-3" />
              <span>관리자 CMS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#d4af37] via-[#b59228] to-[#60490f] p-0.5 flex items-center justify-center shadow-lg shadow-[#d4af37]/10 group-hover:shadow-[#d4af37]/30 transition-all">
              <div className="w-full h-full bg-[#070a12] flex items-center justify-center">
                <span className="font-cinzel text-lg font-black text-gold-gradient tracking-wider">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-slate-100 group-hover:text-[#e6ca65] transition-colors">
                  DANANG <span className="text-gold-gradient">VVIP</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#d4af37]/15 text-[#e6ca65] border border-[#d4af37]/30 font-semibold hidden sm:inline-block">
                  INSIDER
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-tight">
                다낭 카지노 & 프리미엄 나이트라이프
              </span>
            </div>
          </div>

          {/* Desktop Nav Links - Casino menu is placed first! */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 py-2 text-xs lg:text-[13px] font-medium rounded transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#f5df9a] bg-[#d4af37]/15 border border-[#d4af37]/40 shadow-sm'
                      : item.isCasino
                      ? 'text-slate-200 hover:text-[#e6ca65] hover:bg-slate-800/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.badge && (
                      <span className={`text-[9px] px-1 py-0.2 rounded font-semibold ${
                        item.badge === '필독' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCustomerCenter}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded bg-gradient-to-r from-[#d4af37] to-[#b59228] text-black font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-95 shadow-md shadow-[#d4af37]/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span className="font-medium">카톡 상담</span>
              <span className="hidden md:inline text-[11px] font-bold opacity-80">(danangvvip)</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#d4af37]/40"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070a12]/98 border-b border-[#d4af37]/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>19+ 성인 전용 정보 플랫폼:</strong> 카지노 입장 규정 및 프리미엄 나이트라이프 가이드입니다.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full px-3 py-2.5 text-left text-sm rounded ${
                  currentTab === item.id
                    ? 'bg-[#d4af37]/15 text-[#f5df9a] border border-[#d4af37]/40 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] border border-[#d4af37]/30">
                      {item.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <button
              onClick={() => {
                onOpenCustomerCenter();
                setMobileMenuOpen(false);
              }}
              className="text-[#e6ca65] font-semibold flex items-center gap-1.5 py-1"
            >
              <MessageCircle className="w-4 h-4" />
              카카오톡 문의 (danangvvip)
            </button>
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="text-slate-400 hover:text-white flex items-center gap-1 py-1"
            >
              <Settings className="w-3.5 h-3.5" />
              관리자 콘솔
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
