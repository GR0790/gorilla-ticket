import { useState } from "react";
import type React from "react";
import SEO from "../components/SEO";
import { Accordion, CTABand, ConsultButton, PageHero } from "../components/ui";

type Group = { key: string; label: string; summary: string; items: { q: string; a: React.ReactNode }[] };

const groups: Group[] = [
  {
    key: "general",
    label: "이용 일반",
    summary: "상담을 열기 전에 가장 많이 확인하는 것들.",
    items: [
      {
        q: "고릴라티켓은 무슨 일을 하나요?",
        a: "상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매의 절차를 확인해 안내합니다. 상품을 나열하기보다 상황에 맞는 방법과 조건을 정리해 드립니다.",
      },
      {
        q: "상담에 비용이 드나요?",
        a: "확인과 조건 안내까지는 비용이 들지 않습니다. 실제 진행을 결정할 때 금액과 조건을 다시 확인하고, 동의를 받은 뒤 진행합니다.",
      },
      {
        q: "상담은 어떻게 시작하나요?",
        a: "사이트의 상담 버튼을 누르면 성함과 휴대폰 번호를 한 번 확인하고 채널톡 1:1 상담창이 열립니다. 입력한 번호로 고객이 식별되어 다음 상담부터는 다시 입력하지 않아도 됩니다.",
      },
      {
        q: "언제 상담할 수 있나요?",
        a: "채널톡 상담은 24시간 접수됩니다. 담당자가 확인하는 순서대로 답변드리며, 확인이 필요한 사항은 시간이 조금 걸릴 수 있습니다.",
      },
      {
        q: "전화로도 상담할 수 있나요?",
        a: "가능합니다. 다만 조건과 진행 상황은 기록이 남는 채널톡을 기본으로 사용합니다. 통화로 확인한 내용도 대화에 정리해 남겨드립니다.",
      },
      {
        q: "진행하지 않는 거래도 있나요?",
        a: "불법적인 목적의 거래, 타인 명의 결제, 출처가 확인되지 않는 상품권, 재판매를 목적으로 한 대량 구매는 진행하지 않습니다. 이 경우에는 이유를 설명드리고 상담을 마칩니다.",
      },
    ],
  },
  {
    key: "giftcard",
    label: "상품권 매입",
    summary: "남아 있는 상품권을 확인하고 정리하는 일.",
    items: [
      {
        q: "어떤 상품권을 확인할 수 있나요?",
        a: "모바일 상품권, 기프트카드, 문화·도서 상품권을 확인합니다. 발행사와 잔액, 유효기간을 알려주시면 가능 여부를 안내드립니다.",
      },
      {
        q: "잔액을 모르면 어떻게 하나요?",
        a: "상품권 종류와 발행사를 알려주시면 잔액 확인 방법을 안내드립니다. 확인된 잔액을 기준으로 가능 여부와 조건을 정리합니다.",
      },
      {
        q: "유효기간이 지난 상품권도 상담되나요?",
        a: "상담은 가능하지만 발행사 정책에 따라 처리가 제한됩니다. 가능 여부를 먼저 확인해 알려드리고, 어려우면 이유를 설명드립니다.",
      },
      {
        q: "매입 금액은 어떻게 정해지나요?",
        a: "상품권 종류와 잔액, 유효기간, 발행사 정책에 따라 달라집니다. 사이트에서 금액을 약속하지 않고, 확인 후 조건을 안내한 뒤 동의를 받고 진행합니다.",
      },
      {
        q: "상품권을 먼저 보내야 하나요?",
        a: "아니요. 종류와 잔액 확인, 조건 안내가 먼저입니다. 진행이 확정된 뒤에 필요한 순서를 안내드리며, 그 전에 상품권을 요구하지 않습니다.",
      },
    ],
  },
  {
    key: "micropayment",
    label: "휴대폰 소액결제",
    summary: "휴대폰 결제로 상품권을 구매할 때.",
    items: [
      {
        q: "휴대폰 결제로 어떤 상품권을 살 수 있나요?",
        a: "모바일 상품권과 디지털 이용권을 중심으로 안내드립니다. 발행사와 상품 종류에 따라 결제 가능 여부가 다르므로, 원하는 상품을 알려주시면 확인해 드립니다.",
      },
      {
        q: "남은 한도는 어디서 확인하나요?",
        a: "통신사 앱이나 고객센터에서 이번 달 사용 금액과 남은 한도를 확인할 수 있습니다. 확인이 어려우면 상담에서 방법을 안내드립니다.",
      },
      {
        q: "결제 금액은 언제 청구되나요?",
        a: "다음 달 통신요금에 합산됩니다. 청구 시점과 납부 기한은 통신사 기준을 따르므로, 상담할 때 함께 확인해 드립니다.",
      },
      {
        q: "결제를 취소할 수 있나요?",
        a: "상품권이 발행된 뒤에는 취소와 환불이 제한되는 경우가 많습니다. 결제 전에 취소 가능 여부와 기간을 확인해 안내드립니다.",
      },
      {
        q: "가족 명의 휴대폰으로도 결제할 수 있나요?",
        a: "휴대폰 결제는 명의자 본인 인증이 필요합니다. 타인 명의 휴대폰을 이용한 결제는 진행하지 않습니다.",
      },
    ],
  },
  {
    key: "credit-card",
    label: "신용카드 구매",
    summary: "카드 결제와 할부로 구매할 때.",
    items: [
      {
        q: "모든 카드로 결제할 수 있나요?",
        a: "카드사와 상품권 발행사에 따라 결제 가능 여부가 다릅니다. 사용하시는 카드를 알려주시면 확인 가능한 범위를 안내드립니다.",
      },
      {
        q: "할부는 최대 몇 개월까지 가능한가요?",
        a: "할부 개월은 카드사 정책과 결제 금액에 따라 달라집니다. 상담에서 확인한 뒤 가능한 개월 수와 수수료를 함께 안내드립니다.",
      },
      {
        q: "할부 수수료는 누가 부담하나요?",
        a: "결제하는 분이 부담합니다. 개월 수에 따라 총액이 달라지므로, 결제 전에 수수료를 포함한 금액을 계산해 안내드립니다.",
      },
      {
        q: "구매한 상품권 일부만 취소할 수 있나요?",
        a: "여러 장을 구매한 경우 부분 취소가 제한될 수 있습니다. 결제 전에 취소 조건을 확인해 안내드립니다.",
      },
      {
        q: "법인카드로도 결제할 수 있나요?",
        a: "법인카드는 카드사와 회사 정책에 따라 승인 여부가 달라집니다. 사용 목적과 카드 종류를 알려주시면 확인해 안내드립니다.",
      },
    ],
  },
  {
    key: "information-fee",
    label: "정보이용료 · 게임재화",
    summary: "게임 재화와 디지털 아이템을 구매할 때.",
    items: [
      {
        q: "정보이용료 결제는 어떻게 이루어지나요?",
        a: "통신사 한도 안에서 스토어 결제로 진행됩니다. 명의자 본인 인증이 필요하고, 금액은 다음 달 요금에 합산됩니다.",
      },
      {
        q: "모든 게임의 재화를 구매할 수 있나요?",
        a: "게임과 스토어에 따라 결제 가능 여부가 다릅니다. 게임 이름과 구매하려는 재화를 알려주시면 확인 가능한 범위를 안내드립니다.",
      },
      {
        q: "구매한 재화를 환불할 수 있나요?",
        a: "게임 재화는 계정에 귀속되어 사용 후에는 환불이 제한됩니다. 사용 전이라도 스토어와 게임사 정책에 따라 처리되므로 결제 전에 기준을 확인해 안내드립니다.",
      },
      {
        q: "확률형 아이템도 구매할 수 있나요?",
        a: "판매 방식과 확률, 판매 기간을 확인한 뒤 안내드립니다. 결과를 보장하지 않으므로 구성과 확률을 먼저 확인하시길 권합니다.",
      },
      {
        q: "미성년자도 이용할 수 있나요?",
        a: "미성년자 명의 계정은 보호자 동의 없이 결제가 제한됩니다. 명의자 확인이 되지 않으면 진행하지 않습니다.",
      },
    ],
  },
  {
    key: "privacy",
    label: "상담 · 개인정보",
    summary: "어떤 정보를 어디까지 알려야 하는지.",
    items: [
      {
        q: "상담할 때 어떤 정보를 알려줘야 하나요?",
        a: "상담 연결 시 성함과 휴대폰 번호를 확인합니다. 이후에는 상품권 종류나 결제 방법, 금액 정도면 충분합니다.",
      },
      {
        q: "왜 이름과 번호를 먼저 받나요?",
        a: "상담 기록을 같은 고객으로 이어서 확인하기 위해서입니다. 입력한 번호로 고객이 식별되어 이전 상담 내용을 이어서 안내할 수 있습니다.",
      },
      {
        q: "주민등록번호나 비밀번호도 필요한가요?",
        a: "아니요. 해당 정보는 요구하지 않습니다. 필요한 정보 이상을 요청받았다면 채널톡 대화 내용과 함께 알려주시면 확인하겠습니다.",
      },
      {
        q: "저장된 정보를 지우고 싶으면 어떻게 하나요?",
        a: "채널톡 대화에서 요청하시거나 전화로 알려주시면 본인 확인 후 처리합니다. 브라우저에 저장된 정보는 직접 삭제하실 수도 있습니다.",
      },
      {
        q: "상담 내용은 얼마나 보관되나요?",
        a: "상담은 채널톡으로 진행되며, 조건과 진행 상황 확인을 위해 대화 내용이 보관됩니다. 보관 기간과 삭제 요청 방법은 개인정보처리방침에 정리해 두었습니다.",
      },
    ],
  },
];

const allFaq = groups.flatMap((g) => g.items);

const FAQ: React.FC = () => {
  const [active, setActive] = useState(groups[0].key);
  const current = groups.find((g) => g.key === active) ?? groups[0];

  return (
    <>
      <SEO
        title="자주 묻는 질문"
        description="상품권 매입과 휴대폰·카드 상품권 구매, 정보이용료 게임재화, 상담 연결과 개인정보 처리까지. 고릴라티켓 이용에 대해 자주 묻는 질문을 정리했습니다."
        keywords="고릴라티켓 FAQ,상품권 매입 조건,휴대폰 소액결제 한도,카드 할부,정보이용료,개인정보"
        faqItems={allFaq.map((f) => ({ question: f.q, answer: typeof f.a === "string" ? f.a : "" }))}
      />
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: "자주 묻는 질문" }]}
        title={
          <>
            궁금한 것은
            <br />
            여기서 먼저 확인하세요.
          </>
        }
        lead="상담에서 가장 많이 나오는 질문을 주제별로 모았습니다. 원하는 답이 없으면 채널톡으로 바로 물어보세요."
      />

      <section className="border-b border-line bg-white">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ 주제">
            {groups.map((g) => (
              <button
                key={g.key}
                type="button"
                role="tab"
                aria-selected={active === g.key}
                onClick={() => setActive(g.key)}
                className={`rounded-lg border px-4 py-2 text-[12.5px] font-medium transition-colors ${
                  active === g.key
                    ? "border-azure bg-azure text-white"
                    : "border-line bg-frost text-ink-soft hover:border-azure/50 hover:text-azure"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">{current.label}</p>
              <p className="mt-4 text-[1.2rem] font-bold leading-[1.6] tracking-[-0.02em] text-ink">
                {current.summary}
              </p>
              <p className="mt-4 text-[13px] leading-[1.9] text-ink-soft">
                {current.items.length}개의 질문이 정리되어 있습니다. 답을 찾지 못하셨다면 채널톡으로
                알려주세요.
              </p>
              <div className="mt-6">
                <ConsultButton label="직접 문의하기" variant="outline" />
              </div>
            </div>
            <Accordion key={current.key} items={current.items} defaultOpen={0} />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-frost">
        <div className="wrap py-16 md:py-20">
          <div className="flex flex-col gap-6 rounded-xl border border-line bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="eyebrow">Not found</p>
              <p className="mt-3 text-[1.2rem] font-bold tracking-[-0.02em] text-ink">찾는 답이 없으셨나요?</p>
              <p className="mt-2 text-[13px] text-ink-soft">
                상황을 그대로 적어주시면 확인해서 안내드립니다. 상담은 무료입니다.
              </p>
            </div>
            <ConsultButton size="lg" />
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Ask anything"
        title={
          <>
            정리되지 않은 질문도
            <br className="hidden sm:block" /> 그대로 보내주세요.
          </>
        }
      />
    </>
  );
};

export default FAQ;
