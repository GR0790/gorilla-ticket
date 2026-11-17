import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { site } from "../data/site";

const prepare = [
  ["무엇을", "상품권 종류 또는 게임·아이템"],
  ["얼마나", "금액 또는 장수"],
  ["어떻게", "휴대폰 결제 · 카드 · 매입"],
  ["언제", "진행하고 싶은 시점"],
];

const steps = [
  {
    no: "01",
    title: "상담창 열기",
    body: "사이트의 상담 버튼을 누르면 성함과 휴대폰 번호를 한 번 확인한 뒤 채널톡 1:1 상담창이 열립니다.",
    points: ["최초 1회만 정보 입력", "입력 즉시 상담창 연결", "24시간 접수"],
  },
  {
    no: "02",
    title: "가지고 있는 것 확인",
    body: "상품권이 있다면 발행사와 잔액, 유효기간을 확인합니다. 새로 구매하려면 통신사나 카드 종류, 원하는 상품권을 확인합니다.",
    points: ["상품권 종류와 발행사", "결제 수단과 한도", "희망 금액과 시점"],
  },
  {
    no: "03",
    title: "가능 범위 안내",
    body: "확인한 내용을 기준으로 진행 가능 여부와 필요한 절차, 조건을 안내합니다. 확인되지 않은 부분은 확정하지 않고 다시 확인합니다.",
    points: ["가능 여부 먼저", "조건은 진행 전에", "어려우면 이유와 대안"],
  },
  {
    no: "04",
    title: "동의 후 진행",
    body: "안내한 조건을 확인하고 동의하신 경우에만 다음 단계로 진행합니다. 결제가 필요한 경우 금액과 방법을 다시 확인합니다.",
    points: ["조건 확인 후 진행", "결제 전 금액 재확인", "대화에 기록"],
  },
];

const precheck = [
  "상담은 이 사이트의 채널톡 버튼으로만 시작합니다.",
  "이름과 휴대폰 번호 외의 개인정보는 먼저 보내지 않습니다.",
  "상품권 핀번호는 조건을 확인하기 전까지 전달하지 않습니다.",
  "결제 전에 금액과 청구 시점을 다시 확인합니다.",
  "진행이 어렵다는 안내를 받으면 이유를 확인합니다.",
  "조건이 바뀌면 처음부터 다시 안내받습니다.",
  "상담 내용은 채널톡 대화에 남겨 둡니다.",
  "불법적인 목적의 거래는 요청하지 않습니다.",
];

const mistakes = [
  {
    title: "유효기간을 나중에 확인하는 경우",
    body: "상품권은 사용 기간이 지나면 처리 방식이 달라집니다. 상담 전에 유효기간과 사용 이력을 확인해 두면 진행이 빠릅니다.",
  },
  {
    title: "한도와 조건을 모르고 결제하는 경우",
    body: "휴대폰 결제 한도와 카드 승인 조건은 미리 확인할 수 있습니다. 가능한 범위를 먼저 아는 편이 안전합니다.",
  },
  {
    title: "검색으로 찾은 다른 경로를 이용하는 경우",
    body: "상담은 이 사이트의 채널톡 버튼으로만 시작합니다. 다른 경로로 받은 링크나 개인 연락처에는 정보를 남기지 마세요.",
  },
];

const HowToUse: React.FC = () => (
  <>
    <SEO
      title="진행 절차 — 상담 연결부터 확인까지"
      description="고릴라티켓 진행 절차를 단계별로 정리했습니다. 상담 연결, 보유 상품권·결제 수단 확인, 조건 안내, 동의 후 진행까지 한 번에 확인하세요."
      keywords="고릴라티켓 진행 절차,상품권 매입 절차,휴대폰 상품권 구매 절차,채널톡 상담"
    />
    <PageHero
      eyebrow="How to use"
      crumbs={[{ label: "진행 절차" }]}
      title={
        <>
          처음이라면,
          <br />이 순서만 보세요.
        </>
      }
      lead="상담 연결에서 끝나지 않고 조건 안내와 진행 확인까지 이어집니다. 각 단계에서 확인해야 할 내용을 정리했습니다."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-24">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-[1.2rem] font-bold tracking-[-0.02em] text-ink">상담 전에 정리해 두면 좋은 네 가지</h2>
          <p className="text-[12px] text-ink-muted">정확하지 않아도 괜찮습니다. 확인하면서 채워갑니다.</p>
        </div>
        <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {prepare.map(([k, v], i) => (
            <div key={k} className="bg-frost px-6 py-7">
              <span className="num text-[10.5px] font-bold text-azure">0{i + 1}</span>
              <p className="mt-3 text-[1.02rem] font-semibold text-ink">{k}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Steps" title={<>네 단계로 진행됩니다.</>} lead="각 단계는 앞 단계의 확인이 끝난 뒤에 이어집니다." />
        <div className="mt-14 space-y-px overflow-hidden rounded-xl border border-line bg-line">
          {steps.map((s) => (
            <div key={s.no} className="grid gap-6 bg-white p-7 md:grid-cols-[100px_1.1fr_0.9fr] md:p-10">
              <span className="num text-[1.5rem] font-bold leading-none text-azure/30">{s.no}</span>
              <div>
                <h3 className="text-[1.18rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 max-w-lg text-[13.5px] leading-[1.95] text-ink-soft">{s.body}</p>
              </div>
              <ul className="space-y-2 md:border-l md:border-line md:pl-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-azure" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHead eyebrow="Checklist" title={<>진행 전 확인할 것</>} />
          <ul className="mt-10 grid gap-3">
            {precheck.map((c, i) => (
              <li key={c} className="flex items-start gap-3 border-b border-line pb-3 text-[13px] leading-relaxed text-ink-soft">
                <span className="num mt-0.5 text-[10px] font-bold text-azure">{String(i + 1).padStart(2, "0")}</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead eyebrow="Common mistakes" title={<>자주 하는 실수</>} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {mistakes.map((m) => (
              <div key={m.title} className="py-6">
                <h3 className="text-[1rem] font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[12px] leading-relaxed text-ink-muted">
            <Link to="/safety" className="link-quiet">
              안전 안내
            </Link>
            에서 확인 기준을 더 자세히 볼 수 있습니다.
          </p>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost-deep">
      <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <p className="mt-4 text-[1.3rem] font-bold tracking-[-0.02em] text-ink">
            정리가 되었다면, 상담만 남았습니다.
          </p>
          <p className="mt-2 text-[13px] text-ink-muted">
            문의 {site.phone} · {site.hours}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ConsultButton label="채널톡 1:1 상담" size="lg" />
          <Link to="/faq" className="btn-outline min-h-[56px] px-7 text-[14.5px]">
            자주 묻는 질문
          </Link>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Still unsure?"
      title={
        <>
          어디서부터 확인해야 할지
          <br className="hidden sm:block" /> 모르겠다면 그대로 알려주세요.
        </>
      }
      body="상황을 그대로 적어주시면, 무엇을 먼저 확인해야 하는지부터 안내드립니다."
    />
    <div className="bg-white py-10">
      <div className="wrap">
        <ArrowLink to="/services/gift-card">이용 안내로 돌아가기</ArrowLink>
      </div>
    </div>
  </>
);

export default HowToUse;
