import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { PageHero } from "../components/ui";
import { site } from "../data/site";

type Article = { id: string; title: string; body?: string[]; list?: string[] };

const articles: Article[] = [
  {
    id: "purpose",
    title: "제1조 (목적)",
    body: [
      `이 약관은 ${site.name}(이하 "사이트")이 제공하는 상품권·디지털 이용권 관련 상담과 안내 서비스의 이용 조건, 이용자와 사이트의 권리와 의무를 정하는 것을 목적으로 합니다.`,
    ],
  },
  {
    id: "definitions",
    title: "제2조 (용어의 정의)",
    list: [
      '"사이트"란 고릴라티켓이 운영하는 웹사이트를 말합니다.',
      '"상담"이란 채널톡 또는 전화로 문의를 접수하고 조건을 확인해 안내하는 과정을 말합니다.',
      '"이용자"란 사이트를 방문하거나 상담을 요청한 사람을 말합니다.',
      '"판매처"란 상품권·디지털 이용권을 발행·판매하거나 결제를 처리하는 주체를 말합니다.',
    ],
  },
  {
    id: "nature",
    title: "제3조 (서비스의 성격)",
    body: [
      "사이트는 상품권 매입과 모바일 상품권 구매, 결제 절차에 관한 정보를 안내하고 상담을 통해 조건을 확인하는 서비스를 제공합니다.",
      "실제 결제와 정산에 관한 계약은 이용자와 해당 판매처 사이에 성립하며, 계약 조건은 판매처와 통신사·카드사의 약관과 정책을 따릅니다. 사이트는 판매처가 공지한 조건을 기준으로 안내하며, 확인되지 않은 내용을 확정된 것으로 안내하지 않습니다.",
    ],
  },
  {
    id: "consultation",
    title: "제4조 (상담의 이용)",
    list: [
      "상담은 무료이며 채널톡으로 24시간 접수됩니다.",
      "답변은 접수된 순서대로, 확인이 어려운 건은 조금 늦게 드립니다.",
      "확인과 안내는 무료이고, 실제로 진행할 때 금액과 조건을 다시 짚은 뒤 동의를 받습니다.",
      "상담 내용은 진행 상황을 확인하기 위해 채널톡에 남겨둡니다.",
    ],
  },
  {
    id: "obligations",
    title: "제5조 (이용자의 의무)",
    list: [
      "상담과 진행에 필요한 정보는 사실대로 알려주셔야 합니다.",
      "타인 명의 결제, 출처가 확인되지 않는 상품권, 재판매를 목적으로 한 대량 구매 등 부당한 목적으로 서비스를 이용할 수 없습니다.",
      "상대방을 속이거나 사이트 운영을 방해하는 행위를 할 수 없습니다.",
      "판매처 약관과 관계 법령을 지켜야 합니다.",
    ],
  },
  {
    id: "restriction",
    title: "제6조 (서비스의 제한 및 중단)",
    body: ["아래에 해당하면 상담을 받아주지 않거나 진행을 멈출 수 있습니다."],
    list: [
      "불법적인 목적이 확인되거나 그럴 만한 정황이 있는 경우",
      "사실과 다른 정보를 주거나 남의 정보를 허락 없이 쓴 경우",
      "판매처 정책상 진행이 안 되는 경우",
      "재해나 시스템 장애처럼 사이트가 어쩔 수 없는 일이 생긴 경우",
    ],
  },
  {
    id: "liability",
    title: "제7조 (책임의 범위)",
    body: [
      "사이트는 상담에서 확인한 정보와 판매처가 공지한 조건을 기준으로 안내합니다. 다음 사항에 대해서는 책임을 지지 않습니다.",
    ],
    list: [
      "판매처와 통신사·카드사의 정책 변경으로 발생한 손해",
      "이용자가 제공한 정보의 오류로 발생한 문제",
      "실시간으로 변동되는 조건의 변경",
      "사이트가 통제할 수 없는 사유로 서비스가 멈춘 경우",
    ],
  },
  {
    id: "ip",
    title: "제8조 (지식재산권)",
    body: [
      "사이트가 작성한 글, 이미지, 디자인의 저작권은 사이트에 있습니다. 사전 동의 없이 복제, 배포, 수정해 사용할 수 없습니다. 상품권과 게임의 명칭·이미지는 해당 권리자에게 권리가 있습니다.",
    ],
  },
  {
    id: "changes",
    title: "제9조 (약관의 변경)",
    body: [
      "이 약관이 바뀌면 사이트에 변경 내용과 시행일을 미리 안내합니다. 변경된 약관에 동의하지 않으시면 상담 이용을 중단하실 수 있습니다.",
    ],
  },
  {
    id: "law",
    title: "제10조 (준거법 및 분쟁 해결)",
    body: [
      "이 약관은 대한민국 법령에 따라 해석됩니다. 상담 과정에서 분쟁이 생기면 상호 협의로 해결하고, 협의가 어려우면 관계 법령이 정한 절차를 따릅니다.",
    ],
  },
  {
    id: "contact",
    title: "제11조 (문의)",
    body: [`약관에 관한 문의는 ${site.phone} 또는 사이트의 채널톡 1:1 상담으로 접수해 주세요.`],
  },
];

const Terms: React.FC = () => (
  <>
    <SEO
      title="이용약관"
      description="고릴라티켓 이용약관. 상담 서비스의 성격과 이용 조건, 이용자의 의무, 서비스 제한, 책임의 범위를 안내합니다."
    />
    <PageHero
      eyebrow="Terms of service"
      crumbs={[{ label: "이용약관" }]}
      title={<>이용약관</>}
      lead="상담 서비스의 성격과 이용 조건을 정리했습니다. 결제와 정산 조건은 판매처와 통신사·카드사 약관을 따릅니다."
    />

    <section className="bg-frost">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[220px_1fr] lg:gap-20">
        <nav aria-label="목차" className="hidden lg:block">
          <div className="sticky top-28 space-y-2.5 border-l border-line pl-6">
            {articles.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="block text-[12.5px] leading-relaxed text-ink-muted transition-colors hover:text-azure"
              >
                {a.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-prose2">
          <p className="rounded-lg border border-line bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink-muted">
            시행일 2026년 1월 1일 · 이 약관은 사이트가 실제로 제공하는 상담·안내 서비스를 기준으로 작성되었습니다.
          </p>

          <div className="mt-10 space-y-12">
            {articles.map((a) => (
              <div key={a.id} id={a.id} className="scroll-mt-28">
                <h2 className="text-[1.12rem] font-semibold tracking-[-0.01em] text-ink">{a.title}</h2>
                {a.body?.map((p) => (
                  <p key={p} className="mt-3 text-[13.5px] leading-[1.95] text-ink-soft">
                    {p}
                  </p>
                ))}
                {a.list && (
                  <ul className="mt-4 space-y-2">
                    {a.list.map((li) => (
                      <li key={li} className="flex items-start gap-2.5 text-[13.5px] leading-[1.9] text-ink-soft">
                        <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-azure" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 text-[12.5px] text-ink-muted">
            <Link to="/privacy" className="link-quiet">
              개인정보처리방침
            </Link>
            도 함께 확인해 주세요.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Terms;
