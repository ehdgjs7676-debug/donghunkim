import React, { useState } from 'react';
import { X, ShieldAlert, Scale, FileText, CheckCircle2 } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'terms' | 'privacy' | 'responsible';
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'terms'
}) => {
  const [tab, setTab] = useState<'terms' | 'privacy' | 'responsible'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 text-slate-100">
        
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              법적 고지 및 책임 있는 이용 규정
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              DANANG VVIP 독립 정보 플랫폼의 공식 이용약관 및 개인정보처리방침
            </p>
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
            onClick={() => setTab('terms')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold ${
              tab === 'terms' ? 'bg-[#d4af37] text-black font-bold' : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            플랫폼 이용약관
          </button>
          <button
            onClick={() => setTab('responsible')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold ${
              tab === 'responsible' ? 'bg-[#d4af37] text-black font-bold' : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            책임 있는 도박 (Responsible Gaming)
          </button>
          <button
            onClick={() => setTab('privacy')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold ${
              tab === 'privacy' ? 'bg-[#d4af37] text-black font-bold' : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            개인정보처리방침
          </button>
        </div>

        {/* Content Area */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {tab === 'terms' && (
            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">제1조 (목적 및 법적 지위)</h4>
              <p>
                본 플랫폼(DANANG VVIP)은 베트남 다낭 및 호이안 지역의 합법 카지노 규정, 게임 룰, 칩 정산 절차, 복합리조트 VIP 시설에 관한 정보를 성인 이용자에게 제공하는 독립적인 정보 미디어입니다. 
                본 플랫폼은 카지노의 공식 운영사가 아니며 카지노 지분이나 게임 운영 권한을 소유하지 않습니다.
              </p>

              <h4 className="font-bold text-white text-base">제2조 (수익 보장 부인 및 도박 위험 고지)</h4>
              <p>
                본 사이트에서 제공하는 바카라, 룰렛, 블랙잭 등의 규칙 및 하우스 에지 분석은 오직 수학적 통계에 근거한 학술적·정보적 목적의 콘텐츠입니다. 
                플랫폼은 어떠한 게임의 승리나 재정적 수익을 보장하지 않으며, 이용자의 카지노 내 베팅 결과 및 자금 손실에 대해 법적 책임을 부담하지 않습니다.
              </p>

              <h4 className="font-bold text-white text-base">제3조 (불법 행위 금지 및 알선 배제)</h4>
              <p>
                플랫폼은 베트남 법령 및 대한민국 형법을 준수하여, 무허가 롤링 에이전시 모객, 불법 외환 환치기, 성매매 및 유료 성적 동행 알선 행위를 엄격히 금지합니다.
              </p>
            </div>
          )}

          {tab === 'responsible' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200">
                <strong className="block text-amber-300 font-semibold mb-1">도박중독 예방 가이드라인</strong>
                도박은 통제된 예산 내에서 즐기는 레저 활동이어야 합니다. 생활비나 차입금을 사용한 베팅은 절대 금물입니다.
              </div>

              <h4 className="font-bold text-white text-base">자가 진단 체크리스트</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>카지노에서 잃은 돈을 만회하기 위해 더 큰 금액을 베팅한 적이 있다.</li>
                <li>도박 자금을 마련하기 위해 거짓말을 하거나 돈을 빌린 적이 있다.</li>
                <li>도박 때문에 일상생활이나 가족과의 약속을 소홀히 한 적이 있다.</li>
              </ul>

              <h4 className="font-bold text-white text-base">도박문제 전문 상담 기관</h4>
              <p>
                한국도박문제예방치유원: <strong>국번없이 1336</strong> (24시간 무료 전화 상담)
              </p>
            </div>
          )}

          {tab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">수집하는 개인정보 항목 및 파기</h4>
              <p>
                고객센터 문의 시 수집되는 성함(닉네임), 카카오톡 ID는 여행 편의 상담 목적으로만 활용되며, 
                상담 완료 또는 여행 종료 후 14일 이내에 영구 파기됩니다.
              </p>
              <h4 className="font-bold text-white text-base">제3자 제공 금지</h4>
              <p>
                수집된 고객 정보는 마케팅 목적이나 카지노 등 제3자에게 일체 제공되지 않습니다.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-[#d4af37] text-black font-bold text-xs hover:brightness-110"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
