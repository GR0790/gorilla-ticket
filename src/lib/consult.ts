/**
 * 채널톡 1:1 상담 연결 + 고객 식별 + Google Ads 전환 기록.
 *
 * 상담 버튼을 누르면 이름·휴대폰 번호를 최초 1회만 받아 저장하고,
 * 그 값으로 채널톡 memberId / profile 을 만들어 부트합니다.
 * (기존 사이트와 동일한 키·포맷: grpay_name / grpay_phone,
 *  memberId = 숫자만인 휴대폰 번호, profile = { name, mobileNumber })
 */
export const CHANNEL_PLUGIN_KEY = "b065b9cc-1f27-4780-a688-7d3e28d21b67";

/* Google Ads 전환 — 상담 정보 입력 후 '상담 시작하기' 클릭 시 발동 */
const GOOGLE_ADS_SEND_TO = "AW-18305764899/-6hZCI6o8cwcEKOc75hE";

const NAME_KEY = "grpay_name";
const PHONE_KEY = "grpay_phone";

export interface Customer {
  name: string;
  phone: string; // 숫자만 (예: 01012345678)
}

type Listener = (open: boolean) => void;
let listener: Listener | null = null;

export function getSavedCustomer(): Customer | null {
  if (typeof window === "undefined") return null;
  try {
    const name = window.localStorage.getItem(NAME_KEY);
    const phone = window.localStorage.getItem(PHONE_KEY);
    if (name && phone) return { name, phone };
  } catch {
    /* 저장소 접근이 막힌 환경에서는 매번 입력받습니다. */
  }
  return null;
}

export function saveCustomer(customer: Customer) {
  try {
    window.localStorage.setItem(NAME_KEY, customer.name);
    window.localStorage.setItem(PHONE_KEY, customer.phone);
  } catch {
    /* 저장 실패는 상담 연결 자체를 막지 않습니다. */
  }
}

export function onlyDigits(value: string) {
  return value.replace(/[^0-9]/g, "");
}

/** 010-0000-0000 형태로 자동 하이픈 */
export function formatPhone(value: string) {
  const raw = onlyDigits(value).slice(0, 11);
  if (raw.length < 4) return raw;
  if (raw.length < 8) return `${raw.slice(0, 3)}-${raw.slice(3)}`;
  if (raw.length < 11) return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7)}`;
  return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
}

export function isValidPhone(value: string) {
  return /^010-\d{4}-\d{4}$/.test(value);
}

declare global {
  interface Window {
    bootChannelAndShow?: (name: string, phone: string) => void;
    gtag?: (...args: unknown[]) => void;
    ChannelIO?: {
      (command: string, payload?: unknown, callback?: (error: unknown, user: unknown) => void): void;
      q?: unknown[];
    };
  }
}

/** 상담 폼 제출 = 전환. 전환 스크립트가 없거나 차단되어도 상담 연결은 계속됩니다. */
export function trackConsultConversion() {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: GOOGLE_ADS_SEND_TO });
    }
  } catch {
    /* 전환 기록 실패는 상담 연결을 막지 않습니다. */
  }
}

/** 이름·번호로 채널톡을 부트하고 메신저를 엽니다. */
export function bootChannelAndShow(customer: Customer) {
  if (typeof window === "undefined") return;
  const phone = onlyDigits(customer.phone);
  if (typeof window.bootChannelAndShow === "function") {
    window.bootChannelAndShow(customer.name, phone);
    return;
  }
  const ChannelIO = window.ChannelIO;
  if (!ChannelIO) return;
  try {
    ChannelIO("shutdown");
  } catch {
    /* 아직 부트되지 않은 경우 무시 */
  }
  ChannelIO(
    "boot",
    {
      pluginKey: CHANNEL_PLUGIN_KEY,
      hideChannelButtonOnBoot: true,
      memberId: phone,
      profile: { name: customer.name, mobileNumber: phone },
    },
    () => {
      ChannelIO("showMessenger");
    },
  );
}

export function subscribeConsultModal(fn: Listener) {
  listener = fn;
  return () => {
    if (listener === fn) listener = null;
  };
}

/**
 * 상담 버튼의 단일 진입점.
 * 저장된 고객 정보가 있으면 바로 연결, 없으면 이름·연락처 모달을 엽니다.
 */
export function openConsult() {
  if (typeof window === "undefined") return;
  const saved = getSavedCustomer();
  if (saved) {
    bootChannelAndShow(saved);
    return;
  }
  if (listener) {
    listener(true);
    return;
  }
  // 모달이 아직 마운트되지 않은 예외 상황: 저장된 정보 없이 메신저만 엽니다.
  if (typeof window.ChannelIO === "function") {
    window.ChannelIO("boot", { pluginKey: CHANNEL_PLUGIN_KEY, hideChannelButtonOnBoot: true }, () => {
      window.ChannelIO?.("showMessenger");
    });
  }
}

/** 모달에서 제출했을 때 — 전환 기록 후 채널톡 연결 */
export function submitCustomer(input: { name: string; phone: string }) {
  const customer: Customer = { name: input.name.trim(), phone: onlyDigits(input.phone) };
  saveCustomer(customer);
  trackConsultConversion();
  listener?.(false);
  bootChannelAndShow(customer);
}
