import React from 'react';
import { NavigationTab } from '../types';
import { Home, Compass, BookOpen, Moon, MessageCircle } from 'lucide-react';

interface MobileNavProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCustomerCenter: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenCustomerCenter
}) => {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070a12]/95 backdrop-blur-lg border-t border-[#d4af37]/20 pb-safe">
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto">
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            currentTab === 'home' ? 'text-[#e6ca65]' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">홈</span>
        </button>

        <button
          onClick={() => {
            onSelectTab('casino-guide');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            currentTab === 'casino-guide' ? 'text-[#e6ca65]' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">카지노 가이드</span>
        </button>

        <button
          onClick={() => {
            onSelectTab('casino-insights');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            currentTab === 'casino-insights' ? 'text-[#e6ca65]' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-medium">인사이트</span>
        </button>

        <button
          onClick={() => {
            onSelectTab('nightlife-guide');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            currentTab === 'nightlife-guide' || currentTab === 'karaoke' || currentTab === 'massage-spa'
              ? 'text-[#e6ca65]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Moon className="w-5 h-5" />
          <span className="text-[10px] font-medium">밤문화</span>
        </button>

        <button
          onClick={onOpenCustomerCenter}
          className="flex flex-col items-center justify-center gap-1 text-[#e6ca65] hover:text-[#f5df9a]"
        >
          <div className="w-7 h-7 rounded-full bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/40">
            <MessageCircle className="w-4 h-4 text-[#e6ca65]" />
          </div>
          <span className="text-[10px] font-semibold text-[#e6ca65]">상담</span>
        </button>
      </div>
    </div>
  );
};
