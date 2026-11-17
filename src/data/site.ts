import { services } from "./services";

/**
 * 고릴라티켓(.com) 사이트 기본 정보.
 * 상담 채널은 기존과 동일한 채널톡 플러그인 키를 사용합니다.
 */
export const site = {
  name: "고릴라티켓",
  nameEn: "Gorilla Ticket",
  tagline: "상품권 구매 · 매입 확인 안내",
  phone: "010-2138-0790",
  phoneHref: "tel:01021380790",
  hours: "24시간 연중무휴",
  hoursNote: "채널톡 1:1 상담",
  url: "https://xn--299a64rxvbk71bjne.com",
  channelPluginKey: "b065b9cc-1f27-4780-a688-7d3e28d21b67",
  year: 2026,
};

export interface NavChild {
  label: string;
  to: string;
  desc: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

export const nav: NavItem[] = [
  {
    label: "이용 안내",
    to: "/services/gift-card",
    children: services.map((s) => ({
      label: s.nav,
      to: s.slug,
      desc: s.navDesc,
    })),
  },
  { label: "진행 절차", to: "/how-to-use" },
  { label: "안전 안내", to: "/safety" },
  { label: "이야기", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

export const footerLinks = [
  { label: "진행 절차", to: "/how-to-use" },
  { label: "안전 안내", to: "/safety" },
  { label: "상담 사례", to: "/reviews" },
  { label: "자주 묻는 질문", to: "/faq" },
  { label: "이야기", to: "/blog" },
  { label: "상담", to: "/contact" },
  { label: "개인정보처리방침", to: "/privacy" },
  { label: "이용약관", to: "/terms" },
];
