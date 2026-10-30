import React, { useState } from 'react';
import { NIGHTLIFE_GUIDE_TOPICS } from '../data/nightlife';
import { NightlifeGuideTopic } from '../types';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Scale, 
  BookOpen, 
  FileWarning, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Eye
} from 'lucide-react';

export const NightlifeGuideView: React.FC = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(NIGHTLIFE_GUIDE_TOPICS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  return (
    <section className="py-12 bg-[#070a12] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800/80 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span>안전 수칙 & 베트남 형법 법률 가이드</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                다낭 <span className="text-gold-gradient">밤문화 가이드 & 주의사항</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                현지 밤문화 은어의 객관적 실체와 불법 영업 식별법, 바가지 및 금융 사기 예방 7계명, 
                그리고 엄중한 베트남 사법 당국의 법규를 안내하여 성인 여행객의 안전을 지킵니다.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-500/30 text-xs text-rose-200 max-w-sm">
              <strong className="block text-rose-400 font-semibold mb-0.5">절대 금기 사항:</strong>
              성매매 및 마약류(해피벌룬 포함)는 현지 공안의 강력한 구속 수사 및 추방 대상입니다.
            </div>
          </div>
        </div>

        {/* Accordion / Topic Cards List */}
        <div className="space-y-6">
          {NIGHTLIFE_GUIDE_TOPICS.map((topic) => {
            const isExpanded = expandedTopic === topic.id;

            return (
              <div
                key={topic.id}
                className="bg-[#0b1120] rounded-xl border border-slate-800 hover:border-[#d4af37]/40 transition-all overflow-hidden shadow-lg"
              >
                {/* Topic Header Bar */}
                <div
                  onClick={() => toggleExpand(topic.id)}
                  className="p-6 cursor-pointer flex items-start sm:items-center justify-between gap-4 select-none group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#d4af37]/15 text-[#e6ca65] border border-[#d4af37]/30 text-xs font-medium">
                        {topic.category}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-[#f5df9a] transition-colors mt-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>

                  <button className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white shrink-0 mt-2 sm:mt-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Expanded Detailed Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5">
                    
                    {/* Points grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {topic.detailedPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5"
                        >
                          <h4 className="text-sm font-bold text-[#f5df9a] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                            {point.subtitle}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Warning Tip Box */}
                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300 block mb-0.5">인사이더 안전 조언:</strong>
                        <span>{topic.warningTip}</span>
                      </div>
                    </div>

                    {/* Legal Clause Reference */}
                    <div className="p-3.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                      <Scale className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-300">법률적 근거 및 처벌 조항: </strong>
                        <span>{topic.legalClause}</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Emergency Contacts Banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#0b1120] to-[#101a30] border border-[#d4af37]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                <FileWarning className="w-5 h-5 text-amber-400" />
                현지 긴급 연락망 및 영사 조력 안내
              </h4>
              <p className="text-xs text-slate-300">
                주다낭 대한민국 총영사관 긴급전화: +84-90-588-4444 · 베트남 현지 경찰 긴급 번호: 113
              </p>
            </div>
            <div className="text-xs text-slate-400">
              불법 업소의 부당한 감금 또는 협박 시 지체 없이 총영사관과 현지 당국에 신고하십시오.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
