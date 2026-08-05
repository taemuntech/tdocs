import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Contact, 
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
    <div className="relative min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Ambient Lighting */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 blur-[130px] pointer-events-none rounded-full"></div>
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-purple-600/15 blur-[150px] pointer-events-none rounded-full"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-500/25">
              T
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              티독스 <span className="text-indigo-400 text-xs font-bold tracking-widest ml-1 uppercase">T-DOCS</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">3단계 올인원</a>
            <a href="#templates" className="hover:text-white transition-colors">23종 업종서식</a>
            <a href="#pricing" className="hover:text-white transition-colors">요금제</a>
            <a href="#contact" className="hover:text-white transition-colors">고객센터</a>
          </nav>

          <a href="#pricing" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>무료로 시작하기</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>스마트폰 10초 완성 모바일 스마트 전자서식 & 카톡 서명</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          엑셀도, 종이도 필요 없습니다.<br />
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            스마트폰에서 3초 만에 견적·서명 완료
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-normal leading-relaxed">
          <strong className="text-gray-200">주소록 ➔ 품목 선택 ➔ 23종 서식 완성 ➔ 카카오톡 서명 발송.</strong><br className="hidden md:block" />
          현장 기사, 인테리어, 자영업, 프리랜서를 위한 초간편 모바일 올인원 SaaS 솔루션.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
            <span>지금 바로 서식 작성해보기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900/80 text-gray-200 hover:text-white font-bold text-base hover:bg-gray-800 transition-all border border-white/10 flex items-center justify-center gap-2">
            <Smartphone className="w-5 h-5 text-indigo-400" />
            <span>3단계 동작 과정 보기</span>
          </a>
        </div>
      </section>

      {/* Metric Counters */}
      <section className="py-10 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-1">23 종</div>
            <div className="text-xs md:text-sm text-gray-400 font-medium">업종별 표준 서식 제공</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-purple-400 mb-1">3 초</div>
            <div className="text-xs md:text-sm text-gray-400 font-medium">카카오 알림톡 전자서명</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-1">100%</div>
            <div className="text-xs md:text-sm text-gray-400 font-medium">PDF/PNG 자동 변환 스냅샷</div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">월 0원~</div>
            <div className="text-xs md:text-sm text-gray-400 font-medium">무료 체험 요금제 시작</div>
          </div>
        </div>
      </section>

      {/* 3-Step Canva Style Flow */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">3-STEP WORKFLOW</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">티독스의 3단계 올인원 시스템</h2>
          <p className="text-gray-400 text-sm md:text-base mt-4">어려운 법률 용어도, 엑셀 서식도 고민할 필요 없습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all relative">
            <div className="absolute top-6 right-6 text-3xl font-black text-indigo-500/30">01</div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">스마트 주소록 관리</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              고객 성함, 연락처, 주소, 비고를 한곳에서 관리하고 터치 한 번으로 계약 상대로 지정합니다.
            </p>
            <div className="p-4 rounded-xl bg-gray-950 border border-white/5 text-xs text-gray-300 space-y-1 font-mono">
              <div className="text-indigo-300 font-bold">✓ 홍길동 고객님 (010-1234-5678)</div>
              <div className="text-gray-500">서울시 강남구 테헤란로 123</div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all relative">
            <div className="absolute top-6 right-6 text-3xl font-black text-purple-500/30">02</div>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">품목 & 단가 레시피</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              자주 쓰는 시공/작업 항목 및 단가를 미리 저장하여 터치 한 번으로 견적 합계를 자동 계산합니다.
            </p>
            <div className="p-4 rounded-xl bg-gray-950 border border-white/5 text-xs text-gray-300 space-y-1 font-mono">
              <div className="flex justify-between">
                <span>방수 시공 (방 1개)</span>
                <span className="text-purple-300 font-bold">500,000원</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>수전 교체 작업</span>
                <span>150,000원</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 transition-all relative">
            <div className="absolute top-6 right-6 text-3xl font-black text-pink-500/30">03</div>
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">23종 서식 & 카톡 서명</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              자동 완성된 견적서/계약서를 카카오톡 알림톡으로 전송하여 고객이 손가락 서명하면 완료!
            </p>
            <div className="p-4 rounded-xl bg-gray-950 border border-white/5 text-xs text-gray-300 space-y-1 font-mono">
              <div className="text-pink-300 font-bold">✓ 카카오톡 알림톡 서명 완료</div>
              <div className="text-gray-500">PDF 원본 및 타임스탬프 자동 보관</div>
            </div>
          </div>
        </div>
      </section>

      {/* 23 Templates Overview */}
      <section id="templates" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-gray-900/60 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest">TEMPLATES LIBRARY</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              모든 업종을 아우르는<br />
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                23종 전문 표준 서식
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              견적서, 시공계약서, 작업확인서, 하자보증서, 프리랜서 용역계약서, 개인정보동의서 등 현장에서 꼭 필요한 서식들이 준비되어 있습니다.
            </p>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs font-medium text-left">
              {[
                "표준 시공 견적서",
                "수리/교체 작업계약서",
                "누수/방수 공사확인서",
                "하자보증이행각서",
                "프리랜서 용역계약서",
                "개인정보 수집동의서",
                "자재 납품확인서",
                "현장 유지보수계약서",
                "인테리어 표준계약서",
                "설비 안전점검표",
                "수강/교육 신청서",
                "렌탈 이용약관동의서",
              ].map((name, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-gray-950/80 border border-white/5 flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">SIMPLE PRICING</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">합리적인 요금제</h2>
          <p className="text-gray-400 text-sm md:text-base mt-4">부담 없이 무료로 시작하시고, 필요할 때 전용 기능을 확장해 보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-sm font-bold text-gray-400">무료 체험 (Free)</div>
              <div className="text-4xl font-extrabold text-white">0 원 <span className="text-xs text-gray-500 font-normal">/ 월</span></div>
              <p className="text-xs text-gray-400">티독스를 가볍게 체험해보고 싶으신 소상공인</p>
              <div className="pt-4 space-y-2 text-xs text-gray-300 border-t border-white/5">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 월 5건 무료 서식 발송</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 23종 서식 템플릿 사용</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 스마트 주소록 (최대 30명)</div>
              </div>
            </div>
            <a href="#contact" className="mt-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center transition-all border border-white/10 block">
              무료 시작하기
            </a>
          </div>

          {/* Plan 2 (Popular) */}
          <div className="bg-gradient-to-b from-indigo-950/80 to-gray-900/80 backdrop-blur-md p-8 rounded-3xl border-2 border-indigo-500 flex flex-col justify-between relative shadow-2xl shadow-indigo-500/20">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold tracking-widest uppercase">
              MOST POPULAR
            </div>
            <div className="space-y-4">
              <div className="text-sm font-bold text-indigo-300">스타터 (Starter)</div>
              <div className="text-4xl font-extrabold text-white">9,900 원 <span className="text-xs text-gray-400 font-normal">/ 월</span></div>
              <p className="text-xs text-gray-300">정기적으로 견적서/계약서를 발송하는 1인 사업자</p>
              <div className="pt-4 space-y-2 text-xs text-gray-200 border-t border-white/10">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 월 30건 전자서명 발송</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 직인/도장 이미지 등록</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 무제한 스마트 주소록 & 품목</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> PDF 원본 파일 다운로드</div>
              </div>
            </div>
            <a href="#contact" className="mt-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm text-center transition-all shadow-lg shadow-indigo-500/25 hover:opacity-90 block">
              14일 무료 체험 시작
            </a>
          </div>

          {/* Plan 3 */}
          <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-sm font-bold text-purple-400">비즈니스 (Business)</div>
              <div className="text-4xl font-extrabold text-white">19,900 원 <span className="text-xs text-gray-500 font-normal">/ 월</span></div>
              <p className="text-xs text-gray-400">발송 건수가 많고 브랜드 알림톡이 필요한 법인/업체</p>
              <div className="pt-4 space-y-2 text-xs text-gray-300 border-t border-white/5">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> 무제한 전자서명 발송</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> 내 상호명 카카오 알림톡 발송</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> 전담 우선 고객 지원</div>
              </div>
            </div>
            <a href="#contact" className="mt-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center transition-all border border-white/10 block">
              비즈니스 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-gray-400">티독스 (T-DOCS)</span> • 대표전화: 1588-2622 • 이메일: contact@taemun.co.kr
          </div>
          <div>
            © 2026 T-DOCS. All rights reserved. (Domain: tdocs.kr)
          </div>
        </div>
      </footer>
    </div>
  );
}
