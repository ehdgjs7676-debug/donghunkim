import React, { useState } from 'react';
import { X, Search, FileCode, CheckCircle, Copy, Check } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots' | 'schema'>('sitemap');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://danangvvip.com/</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/casino-guide</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/casino-insights</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/vip-facilities</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/services</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/nightlife-guide</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/casino-news</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danangvvip.com/faq</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/private/

# Sitemaps
Sitemap: https://danangvvip.com/sitemap.xml`;

  const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DANANG VVIP",
  "alternateName": "다낭 VVIP 카지노 & 나이트라이프 인사이더",
  "url": "https://danangvvip.com",
  "inLanguage": "ko-KR",
  "description": "경험자를 위한 베트남 다낭 카지노 입장 규정, 칩 정산 절차, 복합리조트 VIP 시설 및 합법 나이트라이프 가이드",
  "publisher": {
    "@type": "Organization",
    "name": "DANANG VVIP Editorial"
  }
}`;

  const currentContent = activeTab === 'sitemap' ? sitemapXml : activeTab === 'robots' ? robotsTxt : schemaJson;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-2xl w-full p-6 space-y-5 shadow-2xl relative my-8 text-slate-100">
        
        <div className="flex items-start justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] text-xs font-semibold">
                SEO & STRUCTURED DATA
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
              검색엔진 최적화 (SEO) 데이터 뷰어
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3 py-1.5 rounded text-xs font-semibold ${
              activeTab === 'sitemap' ? 'bg-[#d4af37] text-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-3 py-1.5 rounded text-xs font-semibold ${
              activeTab === 'robots' ? 'bg-[#d4af37] text-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            robots.txt
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded text-xs font-semibold ${
              activeTab === 'schema' ? 'bg-[#d4af37] text-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            JSON-LD 구조화 데이터
          </button>
        </div>

        {/* Code Preview */}
        <div className="relative">
          <pre className="p-4 rounded-lg bg-[#070a12] border border-slate-800 text-xs text-amber-200/90 font-mono overflow-x-auto max-h-72">
            {currentContent}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 flex items-center gap-1 shadow"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '복사됨' : '코드 복사'}</span>
          </button>
        </div>

        <div className="text-xs text-slate-400">
          * 네이버, 구글 검색엔진에 적합한 표준 규격이며 가짜 키워드나 숨김 태그를 배제한 클린 화이트햇 SEO를 준수합니다.
        </div>

        <div className="flex justify-end pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
