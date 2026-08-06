import LiveFormWorkbench from "@/components/LiveFormWorkbench";
import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  FileCheck, 
  FileSpreadsheet, 
  FileText, 
  Layers, 
  Package, 
  PenTool, 
  Phone, 
  Send, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Users, 
  Zap 
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white [word-break:keep-all]">
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-purple-600/15 blur-[160px] pointer-events-none rounded-full"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-500/25">
              T
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              티독스 <span className="text-indigo-400 text-xs font-bold tracking-widest ml-1 uppercase">T-DOCS</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#workbench" className="hover:text-white transition-colors">라이브 대시보드</a>
            <a href="#templates" className="hover:text-white transition-colors">23종 업종서식</a>
            <a href="#pricing" className="hover:text-white transition-colors">요금제</a>
            <a 
              href="https://taemun.net" 
              target="_blank" 
              rel="noreferrer" 
              className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold hover:border-indigo-400 hover:text-white transition-all flex items-center gap-1"
            >
              <span>태문 DEV STUDIO ↗</span>
            </a>
          </nav>

          <a href="#workbench" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>라이브 서식 체험</span>
          </a>
        </div>
      </header>

      {/* Hero Title Section */}
      <section className="pt-32 lg:pt-40 pb-8 px-4 lg:px-6 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>접속 즉시 내 전자서식이 되는 T-DOCS 라이브 대시보드</span>
        </div>

        <h1 className="text-3xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          엑셀도 종이도 필요 없습니다.<br />
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            주소록 ➔ 품목 선택 ➔ 3초 서명 완성
          </span>
        </h1>

        <p className="text-slate-400 text-sm lg:text-lg max-w-3xl mx-auto mb-6 font-normal leading-relaxed">
          아래 실시간 대시보드에서 직접 고객을 바꾸고, 품목 레시피를 선택한 후<br className="hidden lg:block" />
          카카오톡 3초 모바일 서명을 마음껏 테스트해 보세요!
        </p>
      </section>

      {/* Interactive Live Form Workbench Engine (Centerpiece) */}
      <section id="workbench" className="px-4 lg:px-6 relative z-10">
        <LiveFormWorkbench />
      </section>

      {/* 23 Standard Form Templates Showcase */}
      <section id="templates" className="py-20 px-4 lg:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">23 STANDARD TEMPLATES</div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white">현장 실무 최적화 23종 표준 서식</h2>
          <p className="text-slate-400 text-sm lg:text-base mt-4">건설, 방수, 설비, 인테리어, IT외주, 유통까지 업종별 양식이 즉시 연동됩니다.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "견적서", desc: "자재비·노무비 수량 자동 계산" },
            { title: "공사계약서", desc: "착공일·준공일 및 서명 포함" },
            { title: "하자보수 이행확약서", desc: "무상 A/S 기간 보증 서식" },
            { title: "누수공사 확인서", desc: "보험 청구용 현장 확인서" },
            { title: "자재 승인 요청서", desc: "시공 자재 규격 승인 서식" },
            { title: "거래명세서", desc: "세금계산서 연동 거래표" },
            { title: "입고 검수서", desc: "검수 인원 및 사진 대지" },
            { title: "A/S 접수 확인서", desc: "고객 보상 및 AS 접수표" },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 transition-all space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 lg:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">TRANSPARENT PRICING</div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white">합리적인 투명한 요금제</h2>
          <p className="text-slate-400 text-sm lg:text-base mt-4">약정 없이 언제든 해지 가능하며, 첫 달은 100% 무료 체험을 지원합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">STARTER</div>
              <div className="text-3xl font-extrabold text-white">스타터 패키지</div>
              <div className="text-2xl font-black text-indigo-400">월 19,000원</div>
              <p className="text-xs text-slate-400">1인 프리랜서 및 소규모 현장 기사님을 위한 기본 플랜</p>
              <div className="space-y-2 text-xs text-slate-300 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">✓ 월 50건 전자서식 발행</div>
                <div className="flex items-center gap-2">✓ 카카오 알림톡 무료 발송</div>
                <div className="flex items-center gap-2">✓ PDF 스냅샷 다운로드</div>
              </div>
            </div>
            <a href="https://taemun.net/inquiry" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center transition-all">
              무료 시작하기
            </a>
          </div>

          {/* Pro Plan (Featured) */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/80 to-slate-900/80 border-2 border-indigo-500 shadow-xl shadow-indigo-500/20 flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white font-bold text-[10px] tracking-widest uppercase">
              MOST POPULAR
            </div>
            <div className="space-y-4">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">BUSINESS PRO</div>
              <div className="text-3xl font-extrabold text-white">비즈니스 프로</div>
              <div className="text-3xl font-black text-white">월 39,000원</div>
              <p className="text-xs text-indigo-200">전문 시공업체, 방수·설비·인테리어 직영팀 추천 플랜</p>
              <div className="space-y-2 text-xs text-slate-200 pt-4 border-t border-indigo-500/30">
                <div className="flex items-center gap-2 font-semibold">✓ 무제한 전자서식 발행</div>
                <div className="flex items-center gap-2 font-semibold">✓ 자사 도장 / 로고 커스텀</div>
                <div className="flex items-center gap-2 font-semibold">✓ 고객 주소록 & 품목 레시피 저장</div>
                <div className="flex items-center gap-2 font-semibold">✓ 카카오 알림톡 3초 자동 연동</div>
              </div>
            </div>
            <a href="https://taemun.net/inquiry" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-bold text-xs text-center shadow-lg shadow-indigo-500/30 transition-all">
              1개월 무료 체험 신청
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">ENTERPRISE</div>
              <div className="text-3xl font-extrabold text-white">맞춤 연동 개발</div>
              <div className="text-2xl font-black text-purple-400">별도 협의</div>
              <p className="text-xs text-slate-400">기존 자사 ERP/웹사이트에 T-DOCS 모듈 연동 구축</p>
              <div className="space-y-2 text-xs text-slate-300 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">✓ 전용 DB & 서버 독립 구축</div>
                <div className="flex items-center gap-2">✓ Custom API & 캔버스 커스텀</div>
                <div className="flex items-center gap-2">✓ 1:1 전담 개발자 배치</div>
              </div>
            </div>
            <a href="https://taemun.net/inquiry" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center transition-all">
              맞춤 연동 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 lg:px-6 border-t border-white/5 relative z-10 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-400">T-DOCS (티독스)</span> • 대표전화: 1588-2622 • 기술개발: TAEMUN DEV STUDIO
          </div>
          <div>
            © 2026 T-DOCS. All rights reserved. (Domain: tdocs.kr)
          </div>
        </div>
      </footer>

    </div>
  );
}
