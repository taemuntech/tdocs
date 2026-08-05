import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "티독스 (T-DOCS) | 스마트 모바일 전자서식 & 초간편 전자서명 SaaS",
  description: "스마트폰으로 10초 만에 끝내는 견적서·계약서·시공확인서 23종 서식. 카카오톡 3초 전자서명 올인원 솔루션.",
  keywords: ["티독스", "TDOCS", "전자서식", "모바일견적서", "전자서명", "카톡서명", "하자보증서", "프리랜서계약서"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased bg-[#030712] text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
