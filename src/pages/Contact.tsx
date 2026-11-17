import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ConsultButton, PageHero, SectionHead, ChatGlyph } from "../components/ui";
import { site } from "../data/site";

const ready = [
  "상품권 종류 또는 게임·아이템 (사진이나 링크도 괜찮습니다)",
  "금액 또는 장수",
  "결제 방법 (휴대폰 · 카드 · 매입)",
  "진행하고 싶은 시점",
];

const channels = [
  {
    title: "채널톡 1:1 상담",
    tag: "기본",
    body: "사이트의 상담 버튼으로 열립니다. 성함과 연락처를 한 번 남기면 같은 번호로 계속 이어집니다.",
    detail: "24시간 접수",
  },
  {
    title: "전화 상담",
    tag: "급할 때",
    body: "바로 확인해야 할 내용이 있을 때 이용합니다. 통화로 확인한 조건도 채널톡 대화에 정리해 남겨드립니다.",
    detail: site.phone,
  },
  {
    title: "여러 건 한 번에",
    tag: "묶음",
    body: "상품권 종류가 여러 개거나 결제 방법을 함께 검토할 때, 한 번에 정리해 순서대로 안내드립니다.",
    detail: "채널톡으로 접수",
  },
];

const Contact: React.FC = () => (
  <>
    <SEO
      title="상담 — 채널톡 1:1 문의"
      description="고릴라티켓 상담 안내. 상담 버튼을 누르면 성함과 연락처를 한 번 확인한 뒤 채널톡 1:1 상담으로 연결됩니다. 전화 상담도 가능합니다."
      keywords="고릴라티켓 상담,채널톡 상담,상품권 문의,1:1 상담"
    />
    <PageHero
      eyebrow="Contact"
      crumbs={[{ label: "상담" }]}
      title={
        <>
          상담은 채널톡에서
          <br />
          바로 시작됩니다.
        </>
      }
      lead="대화가 편하시면 채널톡을, 바로 확인할 내용이 있으면 전화를 이용해 주세요. 어느 쪽이든 상담은 무료입니다."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-2xl border border-night-soft/40 bg-night p-8 text-white md:p-12">
            <div aria-hidden="true" className="grid-bg-dark absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full opacity-60"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, rgba(11,18,32,0) 70%)" }}
            />
            <div className="relative">
              <p className="eyebrow text-sky-light">Channel talk</p>
              <h2 className="display-sub mt-5 text-white">
                1:1 대화로
                <br />
                가장 정확하게 안내합니다.
              </h2>
              <p className="mt-5 max-w-md text-[13.5px] leading-[1.95] text-white/60">
                문의 내용과 안내한 조건이 대화에 남습니다. 진행 상황을 다시 확인하고 싶을 때 같은 창에서
                이어서 물어보세요.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ConsultButton variant="light" size="lg" label="채널톡 상담 시작" />
                <a href={site.phoneHref} className="btn-ghost-light min-h-[56px] px-7 text-[14.5px]">
                  전화 {site.phone}
                </a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[12px] text-white/45">
                <span className="inline-flex items-center gap-2">
                  <ChatGlyph className="h-3.5 w-3.5" />
                  {site.hoursNote}
                </span>
                <span>{site.hours}</span>
                <span>상담 무료</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-frost p-8 md:p-10">
            <p className="eyebrow">Prepare</p>
            <h2 className="mt-4 text-[1.2rem] font-bold leading-snug tracking-[-0.02em] text-ink">
              이 네 가지만 있으면
              <br /> 바로 확인할 수 있습니다.
            </h2>
            <ul className="mt-7 space-y-3">
              {ready.map((r, i) => (
                <li key={r} className="flex items-baseline gap-3 border-b border-line pb-3 text-[13px] leading-relaxed text-ink-soft">
                  <span className="num text-[10px] font-bold text-azure">0{i + 1}</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-ink-muted">
              정확한 정보가 없어도 상담은 가능합니다. 확인 가능한 부분부터 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Channels" title={<>상황에 맞는 방법으로</>} lead="세 가지 방법 모두 같은 상담 기록으로 이어집니다." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="flex flex-col bg-white p-7 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[1.05rem] font-semibold text-ink">{c.title}</h3>
                <span className="rounded-md border border-azure/30 bg-azure/5 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-azure">
                  {c.tag}
                </span>
              </div>
              <p className="mt-4 flex-1 text-[13px] leading-[1.9] text-ink-soft">{c.body}</p>
              <p className="mt-6 text-[12px] text-ink-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] leading-relaxed text-ink-soft">
          결제·정산 조건은 통신사·카드사·발행사의 약관을 따릅니다.{" "}
          <Link to="/terms" className="link-quiet">
            이용약관
          </Link>
          {" · "}
          <Link to="/privacy" className="link-quiet">
            개인정보처리방침
          </Link>
        </p>
        <ArrowLink to="/how-to-use">진행 절차 보기</ArrowLink>
      </div>
    </section>

    <CTABand
      eyebrow="Consultation"
      title={
        <>
          망설여지는 부분이 있다면
          <br className="hidden sm:block" /> 먼저 물어보세요.
        </>
      }
      body="상담만으로도 충분합니다. 진행 여부는 조건을 확인한 뒤 결정하셔도 됩니다."
    />
  </>
);

export default Contact;
