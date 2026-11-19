import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, SectionHead } from "../components/ui";
import { ServiceIcon } from "../components/icons";
import { blogPosts } from "../data/blogPosts";
import { compareRows, services } from "../data/services";
import { site } from "../data/site";
import { openConsult } from "../lib/consult";

const metrics = [
  { value: "4", unit: "가지", label: "이용 안내", note: "매입 · 결제 · 게임재화" },
  { value: "24", unit: "시간", label: "상담 접수", note: "채널톡 · 전화" },
  { value: "4", unit: "단계", label: "확인 절차", note: "확인 → 안내 → 진행" },
  { value: "0", unit: "원", label: "상담 비용", note: "결정 전까지 무료" },
];

const flow = [
  {
    no: "01",
    title: "상담 정보 입력",
    body: "성함과 휴대폰 번호를 한 번만 남기면 채널톡 1:1 상담창이 열립니다. 다음 상담부터는 같은 번호로 이어집니다.",
  },
  {
    no: "02",
    title: "상황 확인",
    body: "상품권 종류나 결제 방법, 금액과 시점을 확인합니다. 정확한 이름을 몰라도 사진이나 링크로 알려주시면 됩니다.",
  },
  {
    no: "03",
    title: "조건 안내",
    body: "가능 여부와 절차, 필요한 조건을 정리해 안내합니다. 확인되지 않은 내용은 확정된 것처럼 말하지 않습니다.",
  },
  {
    no: "04",
    title: "동의 후 진행",
    body: "안내한 조건을 확인하고 동의하신 경우에만 다음 단계로 진행합니다. 결제가 필요하면 금액을 다시 확인합니다.",
  },
];

const principles = [
  {
    title: "확인되지 않은 것은 약속하지 않습니다",
    body: "가능한지, 얼마인지, 어떤 절차가 필요한지. 확인한 내용만 안내하고 추측으로 조건을 만들지 않습니다.",
  },
  {
    title: "필요한 정보만 확인합니다",
    body: "상담에 필요한 최소한의 정보만 확인합니다. 주민등록번호나 비밀번호, 카드 비밀번호는 요구하지 않습니다.",
  },
  {
    title: "기록이 남는 채널만 씁니다",
    body: "안내한 조건과 진행 상황은 채널톡에 기록으로 남깁니다. 기록이 남지 않는 개인 메신저로만 하자는 요청은 받지 않습니다.",
  },
];

const scenes = [
  {
    title: "집에 남은 상품권이 있을 때",
    body: "발행사와 잔액, 유효기간을 확인하는 것부터 시작합니다. 사용 계획이 없다면 매입 가능 여부를 안내합니다.",
  },
  {
    title: "휴대폰 결제 한도가 궁금할 때",
    body: "통신사 앱에서 확인하는 방법과 이번 달 남은 한도를 함께 짚어드립니다.",
  },
  {
    title: "카드 할부로 결제하려 할 때",
    body: "할부 개월과 수수료를 넣은 총액을 먼저 계산해 안내합니다. 매달 나가는 금액만 보지 않도록 도와드립니다.",
  },
  {
    title: "게임 재화를 사려 할 때",
    body: "스토어와 계정, 환불 기준을 함께 확인한 뒤 진행합니다. 확률형 상품은 구성부터 설명드립니다.",
  },
];

const homeFaq = [
  {
    q: "상담만 받아도 되나요?",
    a: "네. 확인과 조건 안내까지는 무료입니다. 진행 여부는 안내를 들은 뒤 결정하셔도 됩니다.",
  },
  {
    q: "상담 전에 무엇을 준비해야 하나요?",
    a: "성함과 휴대폰 번호만 있으면 상담창이 열립니다. 이후에는 상품권 종류나 결제 방법, 금액을 알려주시면 됩니다.",
  },
  {
    q: "상품권이 없어도 상담할 수 있나요?",
    a: "가능합니다. 휴대폰·카드 결제나 게임 재화 구매처럼 상품권을 새로 구매하는 방법도 함께 안내합니다.",
  },
  {
    q: "금액은 왜 사이트에 없나요?",
    a: "상품권 상태나 카드사 정책에 따라 조건이 달라지기 때문입니다. 확인한 뒤 조건을 안내하고, 동의를 받고 진행합니다.",
  },
];

const HeroConsultPass: React.FC = () => {
  const [pulsing, setPulsing] = React.useState(false);
  const pulseTimer = React.useRef<number | null>(null);

  React.useEffect(
    () => () => {
      if (pulseTimer.current) window.clearTimeout(pulseTimer.current);
    },
    [],
  );

  /** 클릭·엔터·스페이스: 반동 효과를 재생하며 상담(채널톡) 연결 */
  const handleConsult = () => {
    setPulsing(false);
    window.requestAnimationFrame(() => {
      setPulsing(true);
      if (pulseTimer.current) window.clearTimeout(pulseTimer.current);
      pulseTimer.current = window.setTimeout(() => setPulsing(false), 720);
    });
    openConsult();
  };

  return (
    <div className="mx-auto w-full max-w-[440px] animate-fade lg:max-w-none">
      <button
        type="button"
        aria-label={`${site.name} 채널톡 1:1 상담 연결`}
        onClick={handleConsult}
        className={`group relative block w-full cursor-pointer select-none border-0 bg-transparent p-0 text-left transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:scale-[1.02] active:scale-[0.995] ${
          pulsing ? "animate-pass-bounce" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute -inset-4 rounded-[26px] border border-line/80 bg-gradient-to-b from-white/70 to-transparent transition-colors duration-300 group-hover:border-azure/35"
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-3 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            pulsing ? "animate-pass-glow" : ""
          }`}
          style={{ boxShadow: "0 0 0 1px rgba(56,189,248,0.35), 0 34px 80px -34px rgba(37,99,235,0.55)" }}
        />

        <div className="relative overflow-hidden rounded-2xl border border-night-soft/40 bg-night shadow-[0_50px_90px_-50px_rgba(11,18,32,0.8)] transition-shadow duration-300 group-hover:shadow-[0_54px_96px_-46px_rgba(37,99,235,0.5)]">
          <span aria-hidden="true" className="grid-bg-dark absolute inset-0 opacity-60" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full opacity-70"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(11,18,32,0) 70%)" }}
          />

          <div className="relative flex items-start justify-between px-6 pt-6">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-sky-light">Gorilla Ticket</p>
              <p className="mt-2 text-[13px] font-semibold text-white">1:1 상담 연결</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/70">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              24시간 접수
            </span>
          </div>

          <div className="relative mt-5 px-6">
            <img
              src="/gorilla-mascot-cut.webp"
              alt={`${site.name} 마스코트`}
              width={1000}
              height={1000}
              className="mx-auto h-[236px] w-auto rounded-b-none object-contain object-top drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] sm:h-[270px]"
              loading="eager"
            />
          </div>

          <div className="relative border-t border-white/10 bg-night-deep/60 px-6 py-5">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/40">
              <span>Consult pass</span>
              <span className="tabular-nums">No. 010-2138-0790</span>
            </div>
            <div className="my-3 border-t border-dashed border-white/15" />
            <ul className="space-y-2.5 text-[11.5px] text-white/70">
              {services.map((s) => (
                <li key={s.slug} className="flex items-center gap-3">
                  <span className="num text-[10px] font-semibold text-sky-light">{s.no}</span>
                  <span className="h-px w-3 bg-white/15" aria-hidden="true" />
                  {s.nav}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative -mt-6 ml-auto w-[86%] max-w-[300px] rounded-xl border border-line bg-white p-4 shadow-[0_26px_50px_-34px_rgba(11,18,32,0.55)] transition-colors duration-300 group-hover:border-azure/40">
          <div className="flex items-center justify-between">
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-azure">Step 01</span>
            <span className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-ink-muted">무료</span>
          </div>
          <p className="mt-2.5 text-[13.5px] font-semibold leading-snug text-ink">
            성함과 연락처를 남기면
            <br />
            바로 상담창으로 연결됩니다.
          </p>
          <p className="mt-2 text-[11px] text-ink-muted">최초 1회만 입력 · 다음부터는 자동 연결</p>
        </div>

        <span className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-medium tracking-[0.01em] text-ink-muted transition-colors duration-300 group-hover:text-azure">
          눌러서 상담 연결
          <span aria-hidden="true" className="text-[12px] transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </button>
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-white">
    <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(56,189,248,0.20) 0%, rgba(255,255,255,0) 66%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(255,255,255,0) 70%)" }}
    />

    <div className="wrap relative grid items-center gap-14 pb-14 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="animate-rise">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 px-3.5 py-1.5">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-azure" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Voucher · Mobile · Card · Digital
          </p>
        </div>

        <h1 className="display-hero mt-7 break-keep text-ink">
          남는 휴대폰 한도 · 소액결제,
          <br />
          <span className="bg-gradient-to-r from-azure to-sky-deep bg-clip-text text-transparent">
            1:1 상담으로 바로 안내합니다.
          </span>
        </h1>

        <p className="lead mt-7 max-w-xl">
          휴대폰 소액결제·정보이용료·상품권 매입까지, 본인 명의 한도 안에서 가능한 조건을
          빠르고 깔끔하게 확인해 드립니다.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => openConsult()}
            className="group relative flex h-[58px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-azure via-azure to-sky-deep px-7 text-[15.5px] font-bold text-white shadow-[0_20px_44px_-18px_rgba(37,99,235,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 55%)",
              }}
            />
            <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-.9 0-1.8-.1-2.6-.4L5 20.5l1.1-3.3C4.8 15.9 3.5 13.9 3.5 11.6c0-4.2 3.8-7.6 8.5-7.6s8.5 3.4 8.5 7.6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="8.8" cy="11.6" r="0.95" fill="currentColor" />
              <circle cx="12" cy="11.6" r="0.95" fill="currentColor" />
              <circle cx="15.2" cy="11.6" r="0.95" fill="currentColor" />
            </svg>
            <span className="relative">채널톡 1:1 상담 시작</span>
            <span aria-hidden="true" className="relative text-[17px] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>
          <Link
            to="/how-to-use"
            className="inline-flex h-[58px] items-center justify-center gap-2 rounded-xl border border-steel bg-white/70 px-7 text-[14.5px] font-semibold text-ink transition-colors hover:border-azure hover:text-azure"
          >
            진행 절차 보기
            <span aria-hidden="true" className="text-[15px]">
              →
            </span>
          </Link>
        </div>

        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-ink-muted">
          <span>상담 무료</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-steel" />
          <span>{site.hours}</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-steel" />
          <span>전화 {site.phone}</span>
        </p>
      </div>

      {/* 상담 패스 카드 — 카드 전체를 누르면 채널톡 1:1 상담으로 연결 */}
      <HeroConsultPass />
    </div>

    <div className="wrap relative">
      <dl className="grid grid-cols-2 gap-y-8 border-t border-line py-8 md:grid-cols-4 md:py-9">
        {metrics.map((v) => (
          <div key={v.label} className="border-l border-line px-4 first:border-l-0 first:pl-0 md:px-6">
            <dt className="flex items-baseline gap-1 text-ink">
              <span className="text-[1.75rem] font-bold leading-none tracking-[-0.03em] md:text-[2rem]">{v.value}</span>
              <span className="text-[12px] font-semibold text-azure">{v.unit}</span>
            </dt>
            <dd className="mt-2.5 text-[12.5px] font-medium text-ink">{v.label}</dd>
            <dd className="mt-0.5 text-[11px] text-ink-muted">{v.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="border-b border-line bg-frost">
    <div className="wrap py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="What we guide"
          title={
            <>
              네 가지 안내,
              <br className="hidden md:block" /> 상황에 맞게 고르시면 됩니다.
            </>
          }
          lead="상품권 매입과 휴대폰·카드 결제, 정보이용료 게임재화. 각 방법마다 준비물과 확인 항목이 다릅니다."
        />
        <div className="hidden shrink-0 md:block">
          <ArrowLink to="/how-to-use">진행 절차 자세히 보기</ArrowLink>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={s.slug}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-azure/50 hover:shadow-[0_30px_60px_-46px_rgba(11,18,32,0.75)] md:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-azure to-sky transition-transform duration-300 group-hover:scale-x-100"
            />
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-azure/[0.08] text-azure ring-1 ring-azure/10 transition-colors group-hover:bg-azure group-hover:text-white group-hover:ring-azure">
                <ServiceIcon name={s.icon} className="h-[22px] w-[22px]" />
              </span>
              <span className="num text-[11px] font-semibold text-ink-muted">{s.no}</span>
            </div>
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-azure">{s.cardKicker}</p>
            <h3 className="display-sub mt-2.5 text-ink">{s.title}</h3>
            <p className="mt-3 flex-1 text-[13.5px] leading-[1.85] text-ink-soft">{s.cardBody}</p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-frost px-2.5 py-1 text-[10.5px] font-medium text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold text-azure">
              안내 보기
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const CompareSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap py-20 md:py-28">
      <SectionHead
        eyebrow="Before you start"
        title={
          <>
            무엇을 준비하면 되는지
            <br className="hidden md:block" /> 먼저 보세요.
          </>
        }
        lead="상담에서 가장 먼저 확인하는 항목입니다. 표에 없는 내용은 채널톡에서 바로 물어보셔도 됩니다."
      />

      <div className="mt-12 overflow-hidden rounded-xl border border-line">
        <div className="hidden grid-cols-[0.6fr_0.9fr_1fr_1.1fr] bg-night px-6 py-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/60 md:grid">
          <span>구분</span>
          <span>먼저 보는 기준</span>
          <span>준비하실 것</span>
          <span>진행 방식</span>
        </div>
        <div className="divide-y divide-line">
          {compareRows.map((r) => (
            <div
              key={r.no}
              className="grid gap-2 px-6 py-5 transition-colors hover:bg-frost md:grid-cols-[0.6fr_0.9fr_1fr_1.1fr] md:items-center md:gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="num text-[10px] font-bold text-azure">{r.no}</span>
                <Link to={r.slug} className="text-[13.5px] font-semibold text-ink hover:text-azure">
                  {r.title}
                </Link>
              </div>
              <p className="text-[12.5px] leading-relaxed text-ink-soft">{r.check}</p>
              <p className="text-[12.5px] leading-relaxed text-ink-soft">{r.need}</p>
              <p className="text-[12.5px] leading-relaxed text-ink-muted">{r.way}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-[12px] text-ink-muted">
        금액과 수수료는 상품권 상태와 카드사 정책에 따라 달라지므로 사이트에 적어두지 않습니다.
      </p>
    </div>
  </section>
);

const FlowSection: React.FC = () => (
  <section className="border-b border-line bg-frost">
    <div className="wrap py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              확인은 네 단계,
              <br className="hidden md:block" /> 순서를 건너뛰지 않습니다.
            </>
          }
          lead="각 단계는 앞 단계의 확인이 끝난 뒤에 이어집니다. 급하게 넘어가면 나중에 다시 확인해야 합니다."
        />
        <div className="hidden shrink-0 md:block">
          <ArrowLink to="/how-to-use">단계별로 보기</ArrowLink>
        </div>
      </div>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {flow.map((s) => (
          <li key={s.no} className="relative rounded-xl border border-line bg-white p-6 md:p-7">
            <div className="flex items-center justify-between">
              <span className="num text-[1.4rem] font-bold leading-none tracking-[-0.02em] text-azure/25">{s.no}</span>
              <span aria-hidden="true" className="h-px flex-1 mx-4 bg-line" />
            </div>
            <h3 className="mt-6 text-[1.05rem] font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.85] text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const PrinciplesSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-night">
    <div aria-hidden="true" className="grid-bg-dark pointer-events-none absolute inset-0 opacity-60" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-40"
      style={{ background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(11,18,32,0) 70%)" }}
    />
    <div className="wrap relative py-20 md:py-28">
      <SectionHead
        eyebrow="Our standard"
        light
        title={
          <>
            안내하는 방식도
            <br className="hidden md:block" /> 기준을 정해두었습니다.
          </>
        }
        lead="고릴라티켓이 상담에서 지키는 세 가지입니다."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
        {principles.map((p, i) => (
          <div key={p.title} className="bg-night px-7 py-8 md:px-8">
            <span className="num text-[11px] font-semibold text-sky-light">0{i + 1}</span>
            <h3 className="mt-5 text-[1.08rem] font-semibold leading-snug text-white">{p.title}</h3>
            <p className="mt-3 text-[13px] leading-[1.9] text-white/55">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ScenesSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <SectionHead
        eyebrow="For these moments"
        title={
          <>
            이런 상황에서
            <br /> 상담을 시작합니다.
          </>
        }
        lead="방법이 정해져 있지 않아도 괜찮습니다. 지금 가진 것과 상황을 알려주시면 확인할 항목부터 골라 드립니다."
      />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {scenes.map((s) => (
          <div key={s.title} className="border-t border-line pt-5">
            <h3 className="text-[1.02rem] font-semibold leading-snug text-ink">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JournalSection: React.FC = () => {
  const latest = [...blogPosts].sort((a, b) => (a.fields.date < b.fields.date ? 1 : -1)).slice(0, 3);
  return (
    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Journal" title={<>읽어두면 도움이 되는 이야기</>} />
          <ArrowLink to="/blog">이야기 전체 보기</ArrowLink>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.fields.id} to={`/blog/${p.fields.id}`} className="group block">
              <div className="flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                <span className="text-azure">{p.fields.category}</span>
                <span className="h-px w-5 bg-steel" />
                <span>{p.fields.readTime}</span>
              </div>
              <h3 className="mt-4 text-[1.1rem] font-semibold leading-[1.5] text-ink transition-colors group-hover:text-azure">
                {p.fields.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-[13px] leading-[1.85] text-ink-soft">{p.fields.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQTeaserSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SectionHead eyebrow="FAQ" title={<>자주 묻는 질문</>} lead="상담 전에 미리 확인하면 더 빠릅니다." />
        <div className="mt-8">
          <ArrowLink to="/faq">FAQ 전체 보기</ArrowLink>
        </div>
      </div>
      <Accordion items={homeFaq.map((f) => ({ q: f.q, a: f.a }))} />
    </div>
  </section>
);

const Home: React.FC = () => (
  <>
    <SEO
      title="상품권 매입 전 확인 순서 · 결제 한도 점검"
      description="남은 상품권은 발행사·잔액·유효기간부터, 결제로 살 때는 통신사 한도와 할부 총액부터 확인합니다. 무엇을 어떤 순서로 보면 되는지 정리해 두었고, 확인이 끝나면 채널톡 1:1 상담에서 조건을 안내합니다."
      ogDescription="확인할 항목을 순서대로 정리했습니다. 발행사·잔액·유효기간, 통신사 한도, 할부 총액. 다 확인한 뒤에 진행합니다."
      keywords="상품권 매입 전 확인,상품권 잔액 확인,휴대폰 결제 한도,카드 할부 총액,상품권 유효기간"
      faqItems={homeFaq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <HeroSection />
    <ServicesSection />
    <CompareSection />
    <FlowSection />
    <PrinciplesSection />
    <ScenesSection />
    <JournalSection />
    <FAQTeaserSection />
    <CTABand
      eyebrow="Consultation"
      title={
        <>
          확인이 끝나면,
          <br className="hidden sm:block" /> 진행 여부는 천천히 결정하세요.
        </>
      }
      body="발행사와 잔액, 결제 수단만 알려주시면 확인할 항목을 정리해 드립니다. 결정은 안내를 다 들으신 뒤에 하셔도 됩니다."
    />
  </>
);

export default Home;
