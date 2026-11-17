import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { services } from "../data/services";

const cases = [
  {
    tag: "상품권 매입",
    title: "선물받은 문화상품권 5만 원권, 사용 계획이 없어진 경우",
    situation: "두 장을 받았지만 쓸 곳이 정해지지 않아 보관만 하고 있었습니다.",
    checked: "발행사와 잔액, 유효기간, 이미 등록된 상품권인지 확인했습니다.",
    guided: "잔액이 그대로라면 매입이 가능하다고 안내하고, 조건을 먼저 정리해 드렸습니다.",
  },
  {
    tag: "휴대폰 소액결제",
    title: "이번 달 결제 한도가 얼마나 남았는지 궁금한 경우",
    situation: "상품권을 사고 싶은데 한도가 남아 있는지 몰라 결제를 미루고 있었습니다.",
    checked: "통신사와 요금제, 이번 달 사용 금액을 확인했습니다.",
    guided: "통신사 앱에서 남은 한도를 확인하는 방법과, 결제 시 다음 달 청구 시점을 함께 안내했습니다.",
  },
  {
    tag: "신용카드 구매",
    title: "할부로 결제하면 총 얼마가 되는지 알고 싶은 경우",
    situation: "매달 나가는 금액은 알겠는데 전체 금액이 얼마인지 계산이 어려웠습니다.",
    checked: "카드사, 할부 개월, 카드 결제일과 청구일을 확인했습니다.",
    guided: "수수료를 포함한 총액을 계산해 보여드리고, 결제 전에 다시 확인하도록 안내했습니다.",
  },
  {
    tag: "정보이용료 게임재화",
    title: "확률형 아이템을 사기 전에 구성을 확인하려는 경우",
    situation: "원하는 아이템이 나올 확률과 구성이 궁금했습니다.",
    checked: "게임과 스토어, 판매 단위와 확률 표시를 확인했습니다.",
    guided: "구성과 확률, 환불 기준을 먼저 설명하고 결과는 보장되지 않는다는 점을 안내했습니다.",
  },
];

const questions = [
  "상품권 잔액이 얼마인지 모르겠어요",
  "일부만 사용한 상품권도 확인되나요",
  "휴대폰 결제가 자꾸 실패해요",
  "카드 할부 개월을 줄일 수 있나요",
  "게임 재화 환불이 가능한가요",
  "상담 기록을 다시 보고 싶어요",
];

const Reviews: React.FC = () => (
  <>
    <SEO
      title="상담 사례 — 자주 오가는 상황과 안내 방향"
      description="상품권 매입, 휴대폰 소액결제, 신용카드 구매, 정보이용료 게임재화 상담에서 자주 오가는 상황과 확인 항목, 안내 방향을 정리했습니다."
      keywords="상담 사례,상품권 매입 사례,휴대폰 결제 상담,카드 할부 상담"
    />
    <PageHero
      eyebrow="Consultation cases"
      crumbs={[{ label: "상담 사례" }]}
      title={
        <>
          상담에서 자주 오가는
          <br />
          상황을 정리했습니다.
        </>
      }
      lead="상담 내용을 그대로 옮기지 않고, 반복해서 나오는 상황과 확인 항목, 안내 방향만 추려 정리했습니다. 개인별 조건은 상담에서 확인합니다."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.title} className="rounded-xl border border-line bg-frost p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-azure/25 bg-azure/5 px-2.5 py-1 text-[10.5px] font-semibold text-azure">
                  {c.tag}
                </span>
                <span aria-hidden="true" className="num text-[10.5px] font-semibold text-ink-muted">
                  Case
                </span>
              </div>
              <h2 className="mt-5 text-[1.12rem] font-semibold leading-snug text-ink">{c.title}</h2>
              <dl className="mt-5 space-y-3 text-[13px] leading-[1.85]">
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">상황</dt>
                  <dd className="mt-1 text-ink-soft">{c.situation}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">확인한 것</dt>
                  <dd className="mt-1 text-ink-soft">{c.checked}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">안내한 방향</dt>
                  <dd className="mt-1 text-ink-soft">{c.guided}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[12px] leading-relaxed text-ink-muted">
          ※ 위 사례는 상담에서 반복되는 상황을 재구성한 예시입니다. 실제 금액·조건은 상품권 상태와
          통신사·카드사 정책에 따라 달라집니다.
        </p>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Common questions"
            title={<>이런 질문으로 시작합니다.</>}
            lead="짧게 물어보셔도 됩니다. 확인에 필요한 내용은 이어서 안내드립니다."
          />
          <div className="mt-8">
            <ConsultButton label="채널톡 1:1 상담" size="lg" />
          </div>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {questions.map((q, i) => (
            <li key={q} className="flex items-baseline gap-3 bg-white px-5 py-4">
              <span className="num text-[10px] font-bold text-azure">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[13px] leading-relaxed text-ink-soft">{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-20">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {services.map((s) => (
            <Link key={s.slug} to={s.slug} className="text-[13px] font-semibold text-azure hover:text-azure-deep">
              {s.nav} 안내 →
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <ArrowLink to="/safety">안전 안내 보기</ArrowLink>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Your case"
      title={
        <>
          사례에 없는 상황이라도
          <br className="hidden sm:block" /> 그대로 알려주세요.
        </>
      }
      body="상품권 종류나 결제 방법만 알려주셔도 확인할 수 있습니다."
    />
  </>
);

export default Reviews;
