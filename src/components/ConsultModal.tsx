import { useEffect, useRef, useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import { formatPhone, isValidPhone, submitCustomer, subscribeConsultModal } from "../lib/consult";
import { ChatGlyph } from "./ui";

/**
 * 상담 시작 전 1회 고객 정보(성함·휴대폰 번호)를 받는 모달.
 * 저장된 정보가 없을 때만 열리고, 제출하면 채널톡 memberId 로 식별됩니다.
 * (제출 시 Google Ads 전환 기록도 함께 발동합니다 — lib/consult.ts)
 */
const ConsultModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => subscribeConsultModal(setOpen), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => nameRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open]);

  const phoneOk = isValidPhone(phone);
  const valid = name.trim().length > 0 && phoneOk && agreed;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    submitCustomer({ name, phone });
    setOpen(false);
    // 다음 상담 때는 저장된 정보로 바로 연결되므로 폼은 초기화합니다.
    window.setTimeout(() => {
      setName("");
      setPhone("");
      setAgreed(false);
    }, 400);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-night/60 px-4 py-6 backdrop-blur-sm sm:items-center"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-modal-title"
        className="w-full max-w-[440px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_90px_-30px_rgba(6,10,18,0.7)]"
      >
        <div className="relative overflow-hidden bg-night px-6 pb-7 pt-6 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-60"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.55) 0%, rgba(11,18,32,0) 70%)" }}
          />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-sky-light">
                Channel talk · 1:1
              </p>
              <h2 id="consult-modal-title" className="mt-3 text-[1.4rem] font-bold leading-snug tracking-[-0.02em]">
                1:1 상담 연결
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                성함과 연락처를 남겨주시면
                <br />
                바로 상담창으로 연결됩니다.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              aria-label="닫기"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-6">
          <label htmlFor="consult-name" className="block text-[11.5px] font-semibold tracking-wide text-ink-soft">
            성함
          </label>
          <input
            id="consult-name"
            ref={nameRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="예: 홍길동"
            autoComplete="name"
            className="mt-2 h-12 w-full rounded-lg border border-line bg-frost px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-azure focus:bg-white"
          />

          <label
            htmlFor="consult-phone"
            className="mt-4 block text-[11.5px] font-semibold tracking-wide text-ink-soft"
          >
            휴대폰 번호
          </label>
          <input
            id="consult-phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="010-0000-0000"
            maxLength={13}
            autoComplete="tel"
            className="mt-2 h-12 w-full rounded-lg border border-line bg-frost px-4 text-[15px] tabular-nums text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-azure focus:bg-white"
          />

          <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-soft">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-[3px] h-4 w-4 shrink-0 accent-azure"
            />
            <span>
              개인정보 수집 및 이용에 동의합니다 (필수){" "}
              <Link to="/privacy" target="_blank" className="text-azure underline underline-offset-2">
                내용 보기
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={!valid}
            className={`mt-6 flex h-14 w-full items-center justify-center gap-2.5 rounded-xl text-[15.5px] font-semibold transition-all duration-300 ${
              valid
                ? "bg-gradient-to-r from-azure to-sky-deep text-white shadow-[0_16px_36px_-16px_rgba(37,99,235,0.9)] hover:brightness-110"
                : "cursor-not-allowed bg-frost-deep text-ink-muted"
            }`}
          >
            <ChatGlyph className="h-5 w-5" />
            상담 시작하기
          </button>

          <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-muted">
            입력하신 정보는 상담 응대와 고객 식별에만 사용되며,
            <br className="sm:hidden" /> 다음 상담부터는 다시 입력하지 않아도 됩니다.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ConsultModal;
