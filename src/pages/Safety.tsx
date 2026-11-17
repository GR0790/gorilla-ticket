import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { site } from "../data/site";

const rules = [
  {
    no: "01",
    title: "먼저 보내달라고 하지 않습니다",
    body: "조건을 확인하기 전에 금액이나 상품권을 먼저 보내달라고 요구하지 않습니다. 확인한 뒤 절차를 안내드립니다.",
  },
  {
    no: "02",
    title: "필요한 정보만 확인합니다",
    body: "상담에 필요한 이름과 연락처, 진행에 필요한 최소한의 정보만 확인합니다. 주민등록번호와 비밀번호는 요구하지 않습니다.",
  },
  {
    no: "03",
    title: "기록이 남는 대화만 씁니다",
    body: "조건과 진행 상황은 채널톡 대화에 남깁니다. 개인 메신저로만 진행하자는 요청은 받지 않습니다.",
  },
  {
    no: "04",
    title: "불법 목적 거래는 하지 않습니다",
    body: "타인 명의 결제, 출처가 확인되지 않는 상품권, 재판매를 목적으로 한 대량 구매는 확인되는 즉시 진행하지 않습니다.",
  },
];

const signs = [
  {
    title: "먼저 돈을 보내라고 할 때",
    body: "조건 확인보다 입금을 먼저 요구한다면 정상적인 절차가 아닙니다. 대화를 멈추고 알려주세요.",
  },
  {
    title: "개인 메신저로 옮기자고 할 때",
    body: "기록이 남지 않는 채널로 옮기자는 요청은 받지 않습니다. 채널톡 대화에서 이어가세요.",
  },
  {
    title: "주민등록번호를 요구할 때",
    body: "상담과 진행에 주민등록번호는 필요하지 않습니다. 요구받았다면 화면을 남겨 알려주세요.",
  },
  {
    title: "확인 없이 금액을 확정할 때",
    body: "상품권 상태나 카드 조건을 보지 않고 금액을 확정하면 나중에 조건이 바뀌기 쉽습니다.",
  },
];

const guides = [
  { label: "진행 절차", to: "/how-to-use", desc: "상담부터 진행 확인까지 네 단계" },
  { label: "상담 사례", to: "/reviews", desc: "자주 오가는 상황과 안내 방향" },
  { label: "자주 묻는 질문", to: "/faq", desc: "주제별로 정리한 질문과 답" },
];

const Safety: React.FC = () => (
  <>
    <SEO
      title="안전 안내 — 확인 기준과 주의사항"
      description="고릴라티켓이 상담에서 지키는 기준과 이용자가 확인해야 할 주의사항을 정리했습니다. 먼저 보내달라는 요구, 개인 메신저 유도, 과도한 정보 요구에 주의하세요."
      keywords="안전 안내,상담 주의사항,개인정보 보호,상품권 거래 주의"
    />
    <PageHero
      eyebrow="Safety"
      crumbs={[{ label: "안전 안내" }]}
      title={
        <>
          확인하는 방식이
          <br />
          안전을 만듭니다.
        </>
      }
      lead="상담에서 지키는 기준과, 이용자가 직접 확인해야 할 신호를 정리했습니다. 조금이라도 이상하다고 느껴지면 대화를 멈추고 알려주세요."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          eyebrow="Our rules"
          title={<>상담에서 지키는 네 가지</>}
          lead="이 기준은 상황이 달라도 바뀌지 않습니다."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {rules.map((r) => (
            <div key={r.no} className="bg-frost p-7 md:p-9">
              <span className="num text-[1.3rem] font-bold leading-none text-azure/25">{r.no}</span>
              <h3 className="mt-5 text-[1.1rem] font-semibold text-ink">{r.title}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.9] text-ink-soft">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Warning signs"
            title={<>이런 신호가 있으면 멈추세요.</>}
            lead="상담 중 아래와 같은 요청을 받았다면 진행하지 않고 알려주세요."
          />
          <div className="mt-8">
            <ConsultButton label="채널톡으로 알리기" variant="outline" />
          </div>
        </div>
        <dl className="divide-y divide-line border-y border-line">
          {signs.map((s) => (
            <div key={s.title} className="grid gap-2 py-6 sm:grid-cols-[170px_1fr] sm:gap-6">
              <dt className="text-[1rem] font-semibold text-azure">{s.title}</dt>
              <dd className="text-[13.5px] leading-[1.9] text-ink-soft">{s.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Guides" title={<>더 확인해 보세요</>} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="group rounded-xl border border-line bg-frost p-7 transition-colors hover:border-azure/50 hover:bg-white"
            >
              <h3 className="text-[1.05rem] font-semibold text-ink group-hover:text-azure">{g.label}</h3>
              <p className="mt-2 text-[13px] leading-[1.85] text-ink-soft">{g.desc}</p>
              <span aria-hidden="true" className="mt-6 inline-block text-azure transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-ink-muted">
          <span>문의 {site.phone}</span>
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <span>{site.hours}</span>
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <ArrowLink to="/privacy">개인정보처리방침</ArrowLink>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Safety first"
      title={
        <>
          확인이 끝나기 전에는
          <br className="hidden sm:block" /> 아무것도 보내지 않으셔도 됩니다.
        </>
      }
      body="상품권 종류와 결제 방법만 알려주셔도 가능 여부를 확인해 안내드립니다."
    />
  </>
);

export default Safety;
