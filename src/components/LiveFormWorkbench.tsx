"use client";

import { 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  FileCheck, 
  FileText, 
  Layers, 
  Package, 
  PenTool, 
  Plus, 
  RefreshCw, 
  Send, 
  Shield, 
  Sparkles, 
  Trash2, 
  UserCheck, 
  Users,
  X
} from "lucide-react";
import { useState } from "react";

// Mock Customer Data Preset
const MOCK_CUSTOMERS = [
  { name: "이아라 대표", phone: "010-1234-5678", email: "arah@taemun.co.kr", address: "서울시 강남구 테헤란로 123 태문타워 5층" },
  { name: "정미현 대표", phone: "010-5460-9005", email: "mihyun@taemun.co.kr", address: "경기도 성남시 분당구 판교역로 456" },
  { name: "김태문 회장", phone: "010-8672-6463", email: "contact@taemun.co.kr", address: "서울시 서초구 서초대로 789" },
];

// Mock Item Recipe Presets
const MOCK_RECIPES = [
  {
    title: "방수 · 누수 설비 표준 공사 패키지",
    items: [
      { name: "옥상 우레탄 3륜 우레탄 방수 공사", spec: "150 ㎡", qty: 150, price: 35000 },
      { name: "균열 보수 및 초고압 세척 작업", spec: "1 식", qty: 1, price: 750000 },
      { name: "하자 보수 3년 이행 보증", spec: "1 건", qty: 1, price: 0 },
    ]
  },
  {
    title: "맞춤형 웹 · 앱 시스템 구축 패키지",
    items: [
      { name: "Next.js 16 반응형 풀스택 랜딩페이지", spec: "1 건", qty: 1, price: 3500000 },
      { name: "모바일 캔버스 전자서명 엔진 연동", spec: "1 모듈", qty: 1, price: 1500000 },
      { name: "쏠라피 카카오 알림톡 실시간 연동", spec: "1 시스템", qty: 1, price: 500000 },
    ]
  },
  {
    title: "상가 인테리어 리모델링 패키지",
    items: [
      { name: "경량 철골 철거 및 바닥 타일 시공", spec: "85 ㎡", qty: 85, price: 45000 },
      { name: "LED 간조명 및 전기 배선 증설", spec: "1 식", qty: 1, price: 1200000 },
    ]
  }
];

export default function LiveFormWorkbench() {
  const [activeTab, setActiveTab] = useState<"form" | "customer" | "recipe" | "settings">("form");
  const [selectedForm, setSelectedForm] = useState("견적서");

  // Customer State
  const [custIdx, setCustIdx] = useState(0);
  const currentCust = MOCK_CUSTOMERS[custIdx];

  // Recipe State
  const [recipeIdx, setRecipeIdx] = useState(0);
  const [items, setItems] = useState(MOCK_RECIPES[0].items);

  // Modal State
  const [showAlimtalkModal, setShowAlimtalkModal] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  // Helper calculation
  const supplyTotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const vatTotal = Math.round(supplyTotal * 0.1);
  const grandTotal = supplyTotal + vatTotal;

  // Cycle customer preset
  const handleCycleCustomer = () => {
    const nextIdx = (custIdx + 1) % MOCK_CUSTOMERS.length;
    setCustIdx(nextIdx);
  };

  // Cycle item recipe preset
  const handleCycleRecipe = () => {
    const nextIdx = (recipeIdx + 1) % MOCK_RECIPES.length;
    setRecipeIdx(nextIdx);
    setItems(MOCK_RECIPES[nextIdx].items);
  };

  // Update item qty or price
  const updateItem = (index: number, field: "qty" | "price", val: number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: Math.max(0, val) };
    setItems(newItems);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-8 bg-white/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-2xl shadow-indigo-900/10 overflow-hidden text-slate-800 [word-break:keep-all]">
      
      {/* Top Banner Guide */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white px-6 py-3.5 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/30 border border-indigo-400/40 font-bold text-[11px]">
            라이브 체험 대시보드
          </span>
          <span className="font-semibold text-indigo-100">
            버튼을 눌러 고객·품목 레시피 데이터를 실시간으로 변경해 보세요!
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCycleCustomer}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <Users className="w-3.5 h-3.5 text-indigo-300" />
            <span>고객 불러오기 ({currentCust.name})</span>
          </button>
          <button
            onClick={handleCycleRecipe}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <Package className="w-3.5 h-3.5 text-purple-300" />
            <span>품목 레시피 변경</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Sidebar Dashboard Navigation */}
        <div className="lg:col-span-3 bg-slate-50/90 border-r border-slate-200/70 p-5 space-y-6">
          <div>
            <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-2">
              DASHBOARD MENU
            </div>
            <div className="space-y-1.5 text-xs font-bold">
              <button
                onClick={() => setActiveTab("form")}
                className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-all ${
                  activeTab === "form"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 hover:bg-slate-200/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" />
                  <span>23종 표준 서식 작성</span>
                </div>
                <span className="text-[10px] opacity-80">23종</span>
              </button>

              <button
                onClick={() => setActiveTab("customer")}
                className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-all ${
                  activeTab === "customer"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 hover:bg-slate-200/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4" />
                  <span>고객 / 주소록 관리</span>
                </div>
                <span className="text-[10px] opacity-80">3명 선택</span>
              </button>

              <button
                onClick={() => setActiveTab("recipe")}
                className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-all ${
                  activeTab === "recipe"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 hover:bg-slate-200/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4" />
                  <span>품목 레시피 관리</span>
                </div>
                <span className="text-[10px] opacity-80">3종 패키지</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-all ${
                  activeTab === "settings"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 hover:bg-slate-200/60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4" />
                  <span>업체 정보 & 직인 도장</span>
                </div>
                <span className="text-[10px] opacity-80">인증완료</span>
              </button>
            </div>
          </div>

          {/* Form List Quick Selector */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              POPULAR FORM TEMPLATES
            </div>
            <div className="space-y-1 text-xs">
              {[
                "견적서",
                "공사계약서",
                "하자보수 이행 확약서",
                "누수공사 확인서",
                "거래명세서",
                "자재 승인 요청서"
              ].map((formName) => (
                <button
                  key={formName}
                  onClick={() => setSelectedForm(formName)}
                  className={`w-full px-3 py-2 rounded-lg text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedForm === formName
                      ? "bg-indigo-50 text-indigo-700 font-bold border border-indigo-200"
                      : "text-slate-500 hover:bg-slate-200/50"
                  }`}
                >
                  <span>{formName}</span>
                  {selectedForm === formName && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Widget */}
          <div className="p-4 rounded-2xl bg-indigo-900 text-white text-xs space-y-2">
            <div className="flex items-center justify-between text-indigo-300 font-bold text-[11px]">
              <span>T-DOCS 스마트 연동</span>
              <span>100% 자동</span>
            </div>
            <p className="text-[11px] text-indigo-100 leading-snug">
              견적서 작성 ➔ 카카오 알림톡 3초 서명 ➔ PDF 파일 자동 적재까지 한 방에 해결!
            </p>
          </div>
        </div>

        {/* Main Canvas Workbench (Form Preview) */}
        <div className="lg:col-span-9 p-6 lg:p-8 bg-slate-100/60 flex flex-col justify-between">
          
          {/* Form Paper Document View */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Header / Company Stamp */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>발행처: 태문 DEV STUDIO</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900">
                  {selectedForm}
                </h2>
                <p className="text-xs text-slate-500">
                  문서번호: TD-2026-0806-001 | 발행일자: 2026년 08월 06일
                </p>
              </div>

              {/* Company Seal Box */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-right space-y-1 shrink-0">
                <div className="text-[11px] font-bold text-slate-500">공급자 (작성자)</div>
                <div className="text-sm font-black text-slate-800 flex items-center justify-end gap-1.5">
                  <span>태문 DEV STUDIO</span>
                  <span className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 text-[10px] font-bold flex items-center justify-center select-none">
                    (인)
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">대표전화: 1588-2622</div>
              </div>
            </div>

            {/* Customer Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-indigo-600 font-bold pb-1 border-b border-slate-200">
                  <span>수신인 (고객 정보)</span>
                  <button
                    onClick={handleCycleCustomer}
                    className="text-[10px] text-indigo-600 underline hover:text-indigo-800"
                  >
                    [고객 바꾸기]
                  </button>
                </div>
                <div className="font-extrabold text-sm text-slate-900">{currentCust.name} 님</div>
                <div className="text-slate-600">연락처: {currentCust.phone}</div>
                <div className="text-slate-600">이메일: {currentCust.email}</div>
                <div className="text-slate-500 text-[11px]">주소: {currentCust.address}</div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 flex flex-col justify-between">
                <div>
                  <div className="text-indigo-700 font-bold text-xs mb-1">합계 청구 금액 (VAT 포함)</div>
                  <div className="text-2xl font-black text-indigo-900">
                    ₩ {grandTotal.toLocaleString()} 원
                  </div>
                </div>
                <div className="text-[11px] text-indigo-600 font-semibold pt-2 border-t border-indigo-200/60 flex items-center justify-between">
                  <span>공급가액: ₩{supplyTotal.toLocaleString()}</span>
                  <span>부가세: ₩{vatTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <div>
              <div className="flex items-center justify-between mb-2 text-xs font-bold">
                <span className="text-slate-700">품목 내역 ({MOCK_RECIPES[recipeIdx].title})</span>
                <button
                  onClick={handleCycleRecipe}
                  className="text-xs text-purple-600 font-bold hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>레시피 변경하기</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">품목명 / 상세</th>
                      <th className="p-3 text-center">규격</th>
                      <th className="p-3 text-right">수량</th>
                      <th className="p-3 text-right">단가</th>
                      <th className="p-3 text-right">공급가액</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {items.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-semibold text-slate-800">{item.name}</td>
                        <td className="p-3 text-center text-slate-500">{item.spec}</td>
                        <td className="p-3 text-right">
                          <input
                            type="number"
                            value={item.qty}
                            onChange={(e) => updateItem(idx, "qty", parseInt(e.target.value) || 0)}
                            className="w-16 px-1.5 py-0.5 border border-slate-300 rounded text-right font-bold text-xs"
                          />
                        </td>
                        <td className="p-3 text-right">
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) => updateItem(idx, "price", parseInt(e.target.value) || 0)}
                            className="w-24 px-1.5 py-0.5 border border-slate-300 rounded text-right font-bold text-xs"
                          />
                        </td>
                        <td className="p-3 text-right font-bold text-indigo-600">
                          ₩ {(item.qty * item.price).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interactive Signature Area */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 flex items-center justify-center shrink-0 font-bold">
                  ✍️
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">카카오톡 전자서명 상태</div>
                  <div className="text-[11px] text-slate-500">
                    {isSigned ? "고객 서명이 완료되었습니다! (2026-08-06 14:00)" : "서명 대기 중입니다. 알림톡을 발송해 보세요."}
                  </div>
                </div>
              </div>

              {isSigned ? (
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>전자서명 완결됨</span>
                </div>
              ) : (
                <button
                  onClick={() => setShowAlimtalkModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>카카오톡 3초 서명 발송 체험</span>
                </button>
              )}
            </div>

          </div>

          {/* Workbench Bottom Action Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80 text-xs">
            <div className="text-slate-500 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>실시간 스냅샷 및 PDF 변환 모듈 활성화됨</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => alert("T-DOCS 실시간 PDF 변환 엔진 동작 완료!")}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>PDF 다운로드 스냅샷</span>
              </button>

              <button
                onClick={() => setShowAlimtalkModal(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold shadow-lg shadow-indigo-600/20 hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>카카오톡 서명 보낸 후 확인</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Simulated KakaoTalk Alimtalk Modal */}
      {showAlimtalkModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-amber-400 text-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setShowAlimtalkModal(false)}
              className="absolute top-4 right-4 text-slate-800 hover:text-black font-bold"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-black border-b border-amber-500/40 pb-3">
              <div className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-[10px] flex items-center justify-center">
                TALK
              </div>
              <span>카카오 알림톡 도착 알림 (3초 서명)</span>
            </div>

            <div className="bg-white rounded-2xl p-4 space-y-3 text-xs shadow-md text-slate-800">
              <div className="font-bold text-indigo-700">[태문 DEV STUDIO] 전자서식 안내</div>
              <p className="leading-relaxed text-slate-600">
                안녕하세요, <strong>{currentCust.name}</strong>님.<br />
                요청하신 <strong>[{selectedForm}]</strong> 서명이 도착했습니다.<br />
                아래 버튼을 눌러 모바일 터치 서명을 완료해 주세요.
              </p>
              <div className="p-2.5 rounded-xl bg-slate-100 font-bold text-slate-900 text-[11px] flex justify-between">
                <span>청구금액</span>
                <span className="text-indigo-600">₩ {grandTotal.toLocaleString()} 원</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSigned(true);
                setShowAlimtalkModal(false);
              }}
              className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              <PenTool className="w-4 h-4 text-amber-400" />
              <span>3초 모바일 터치 서명 완료하기</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
