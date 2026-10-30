import React from 'react';
import { NavigationTab } from '../types';
import { 
  ShieldCheck, 
  MessageCircle, 
  Settings, 
  FileCode, 
  Scale, 
  HeartHandshake, 
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCustomerCenter: () => void;
  onOpenAdmin: () => void;
  onOpenSitemap: () => void;
  onOpenLegal: (tab: 'terms' | 'privacy' | 'responsible') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenCustomerCenter,
  onOpenAdmin,
  onOpenSitemap,
  onOpenLegal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-[#d4af37]/20 text-slate-400 text-xs pt-12 pb-24 xl:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Disclaimer & Adult Badge Bar */}
        <div className="p-4 rounded-xl bg-[#0b1120] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-950 border border-rose-500/50 flex items-center justify-center shrink-0">
              <span className="font-cinzel text-sm font-black text-rose-300">19+</span>
            </div>
            <div>
              <strong className="text-white text-xs block">성인 전용 콘텐츠 및 책임 있는 도박 안내</strong>
              <p className="text-[11px] text-slate-400">
                본 사이트는 만 19세 이상 성인을 위한 정보 제공 플랫폼입니다. 도박문제 상담 전화: 국번없이 1336 (한국)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenLegal('responsible')}
              className="text-[#e6ca65] hover:underline text-[11px] font-semibold"
            >
              도박중독 예방 수칙 & 자가진단 &rarr;
            </button>
          </div>
        </div>

        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xl font-bold text-white tracking-wider">
                DANANG <span className="text-gold-gradient">VVIP</span>
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              경험자를 위한 다낭 카지노 정보와 프리미엄 나이트라이프 인사이더. 
              객관적인 규정, 칩 정산, VIP 시설 및 합법 편의 서비스를 지향합니다.
            </p>
            <div className="pt-1 text-slate-300 font-medium text-xs flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#e6ca65]" />
              <span>카카오톡 ID: <strong>danangvvip</strong></span>
            </div>
          </div>

          {/* Casino Links */}
          <div className="space-y-2">
            <h4 className="font-cinzel text-xs font-bold text-slate-200 uppercase tracking-wider">
              카지노 가이드
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onSelectTab('casino-guide')} className="hover:text-[#f5df9a] transition-colors">
                  호이아나 카지노 입장 규정
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('casino-guide')} className="hover:text-[#f5df9a] transition-colors">
                  크라운 인터내셔널 클럽
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('casino-guide')} className="hover:text-[#f5df9a] transition-colors">
                  푸라마 클럽 99 전자게임
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('casino-insights')} className="hover:text-[#f5df9a] transition-colors">
                  바카라 슈퍼6 하우스 에지
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('casino-insights')} className="hover:text-[#f5df9a] transition-colors">
                  롤링 칩과 에이전시 진실
                </button>
              </li>
            </ul>
          </div>

          {/* Nightlife & Services Links */}
          <div className="space-y-2">
            <h4 className="font-cinzel text-xs font-bold text-slate-200 uppercase tracking-wider">
              나이트라이프 & 서비스
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-[#f5df9a] transition-colors">
                  3단계 투명 여행 패키지
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('karaoke')} className="hover:text-[#f5df9a] transition-colors">
                  합법 비즈니스 KTV 가이드
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('massage-spa')} className="hover:text-[#f5df9a] transition-colors">
                  스포츠·아로마 마사지 & 팁
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('nightlife-guide')} className="hover:text-[#f5df9a] transition-colors">
                  바가지 사기 예방 7계명
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lounge-bar')} className="hover:text-[#f5df9a] transition-colors">
                  루프탑 바 & 위스키 시가 살롱
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div className="space-y-2">
            <h4 className="font-cinzel text-xs font-bold text-slate-200 uppercase tracking-wider">
              법적 보호 및 도구
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">
                  이용약관 및 면책조항
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">
                  개인정보처리방침
                </button>
              </li>
              <li>
                <button onClick={onOpenSitemap} className="hover:text-[#e6ca65] flex items-center gap-1 transition-colors">
                  <FileCode className="w-3 h-3" />
                  SEO Sitemap & Robots.txt
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-[#e6ca65] flex items-center gap-1 transition-colors">
                  <Settings className="w-3 h-3" />
                  관리자 콘솔 (Admin CMS)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            <strong>[독립 정보 플랫폼 고지]</strong> DANANG VVIP는 베트남 다낭 및 호이안 지역 카지노 운영사의 공식 홈페이지가 아니며, 
            성인 이용자를 위한 객관적인 정보 제공 및 프리미엄 합법 여행 편의 지원만을 목적으로 합니다. 
            본 사이트는 카지노 게임 결과나 수익을 보장하지 않으며, 무허가 롤링 에이전시 모객, 베팅 대리, 불법 환치기, 성매매 알선을 일체 수행하지 않습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2">
            <div>
              &copy; 2026 DANANG VVIP. All rights reserved. Editorial & Media Services.
            </div>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1 text-xs"
            >
              <span>맨 위로 이동</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
