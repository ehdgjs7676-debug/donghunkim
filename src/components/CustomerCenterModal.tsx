import React, { useState } from 'react';
import { 
  MessageCircle, 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Send, 
  Copy, 
  Check
} from 'lucide-react';

interface CustomerCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerCenterModal: React.FC<CustomerCenterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('차량 및 의전 서비스');
  const [senderName, setSenderName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyKakao = () => {
    navigator.clipboard.writeText('danangvvip');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // simulated success
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0b1120] border border-[#d4af37]/60 rounded-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded bg-[#d4af37]/20 text-[#e6ca65] text-xs font-semibold">
              OFFICIAL CONCIERGE DESK
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
              고객센터 & 여행 편의 문의
            </h3>
            <p className="text-xs text-slate-400">
              안전하고 합법적인 다낭 체류를 위한 전담 컨시어지 채널입니다.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Kakao Highlight Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#d4af37]/20 to-amber-500/15 border border-[#d4af37]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#fee500] text-black flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              <MessageCircle className="w-6 h-6 fill-black text-black" />
            </div>
            <div>
              <span className="text-xs text-slate-300 block">카카오톡 공식 실시간 상담 ID</span>
              <div className="font-cinzel text-xl sm:text-2xl font-black text-white tracking-wider flex items-center gap-2">
                danangvvip
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyKakao}
            className="px-4 py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs hover:brightness-110 active:scale-95 flex items-center gap-1.5 shadow transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-900" />
                <span>복사 완료!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-black" />
                <span>ID 복사하기</span>
              </>
            )}
          </button>
        </div>

        {/* Operating Hours & Scope Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5">
            <span className="text-[#f5df9a] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              상담 응대 가능 시간
            </span>
            <p className="text-slate-300">
              <strong>매일 10:00 ~ 24:00 (한국 시간 기준)</strong>
            </p>
            <p className="text-slate-500 text-[11px]">
              심야 긴급 상황(공항 지연, 차량 미도착 등)은 배차된 기사 비상 채널로 24시간 대응됩니다.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070a12] border border-slate-800 space-y-1.5">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              제공 서비스 범위
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              공항 CIP 패스트트랙, 전용 리무진 의전, 5성급 리조트 스위트룸 예약 대행, 
              정식 인가 가라오케 VIP룸 사전 배정, 파인다이닝 예약.
            </p>
          </div>
        </div>

        {/* Strict Legal Refusal Policy Banner */}
        <div className="p-4 rounded-lg bg-rose-950/30 border border-rose-500/40 text-xs text-rose-200 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            상담 거절 및 차단 대상 (엄격한 법적 컴플라이언스)
          </div>
          <p className="text-[11px] text-rose-200/90 leading-relaxed">
            카지노 고객 모집(정킷 모객), 베팅액 연동 무료 서비스, 칩 불법 대여 및 환전(환치기), 
            불법 성매매 또는 유료 성적 동행 연결 문의는 <strong>즉시 상담 거부 및 영구 차단</strong> 처리됩니다.
          </p>
        </div>

        {/* Inquiry Form or Success Message */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">문의 유형 선택</label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-[#070a12] border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#d4af37]"
              >
                <option value="차량 및 의전 서비스">공항 VIP 픽업 & 전용 리무진 의전 문의</option>
                <option value="5성급 호텔 및 스위트룸">호이아나 / 푸라마 스위트룸 예약 대행</option>
                <option value="합법 가라오케 & 파인다이닝">합법 비즈니스 KTV 및 파인다이닝 예약</option>
                <option value="일반 여행 편의">기타 여행 일정 및 컨시어지 편의 상담</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-400">성함 / 닉네임</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full bg-[#070a12] border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-400">카카오톡 ID 또는 연락처</label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="회신받을 카톡 아이디"
                  className="w-full bg-[#070a12] border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">문의 세부 내용 (여행 일정, 인원 등)</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="예: 3인 일정으로 호이아나 리조트 픽업 및 리무진 배차 견적을 문의합니다."
                className="w-full bg-[#070a12] border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b59228] text-black font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 shadow"
            >
              <Send className="w-4 h-4" />
              <span>문의 접수하기</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-bold text-base text-white">문의가 정상 접수되었습니다</h4>
            <p className="text-xs text-slate-300">
              기재해 주신 연락처로 전담 매니저가 업무 시간(10:00~24:00) 내 신속히 안내해 드리겠습니다.
            </p>
            <p className="text-xs text-[#f5df9a]">
              빠른 답변을 원하시면 카카오톡 <strong>danangvvip</strong>로 직접 메시지를 남겨주세요.
            </p>
          </div>
        )}

        {/* Business and Privacy Statement */}
        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>사업자 정보: DANANG VVIP Media & Concierge Service (Da Nang Licensed)</span>
          </div>
          <p>
            개인정보처리방침: 고객이 제공한 상담 정보는 상담 완료 및 일정 종료 후 즉시 암호화 파기되며, 
            제3자 제공이나 광고성 마케팅 용도로 절대 활용되지 않습니다.
          </p>
        </div>

      </div>
    </div>
  );
};
