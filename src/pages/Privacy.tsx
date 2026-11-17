import type React from "react";
import SEO from "../components/SEO";
import { PageHero } from "../components/ui";
import { site } from "../data/site";

type Section = { id: string; title: string; body: string[]; list?: string[]; note?: string };

const sections: Section[] = [
  {
    id: "purpose",
    title: "제1조 (처리 목적)",
    body: [
      `${site.name}(이하 "사이트")는 아래 목적 범위에서만 개인정보를 처리합니다. 처리한 정보를 이 범위 밖의 용도로 이용하지 않습니다.`,
    ],
    list: [
      "채널톡 1:1 상담 접수와 답변",
      "상품권 매입·구매 절차에 필요한 조건 확인",
      "진행 상황 공유와 사후 문의 대응",
      "사이트 이용 통계와 서비스 개선",
    ],
  },
  {
    id: "items",
    title: "제2조 (처리하는 정보의 항목)",
    body: ["상담 과정에서 이용자가 직접 입력한 정보만 확인합니다. 항목은 다음과 같습니다."],
    list: [
      "필수: 상담에 사용하는 이름, 휴대폰 번호",
      "선택: 문의 과정에서 안내받은 상품권 종류·결제 수단 등 상담 내용",
      "진행 확정 시: 전달과 확인에 필요한 최소한의 정보",
      "자동 수집: 접속 기록, 브라우저 정보, 쿠키 (이용 통계 목적)",
    ],
    note: "주민등록번호, 계좌 비밀번호, 카드 비밀번호는 요구하지 않습니다. 이런 정보를 요청받았다면 즉시 알려주세요.",
  },
  {
    id: "cookie",
    title: "제3조 (쿠키와 광고 도구)",
    body: [
      "사이트는 이용 통계와 광고 효과 확인을 위해 쿠키를 사용합니다. Google Ads 전환 측정 도구가 함께 동작하며, 상담 신청 완료 시 전환 기록이 전송됩니다.",
      "쿠키 저장을 원하지 않으면 브라우저 설정에서 차단할 수 있습니다. 다만 일부 기능 이용이 제한될 수 있습니다.",
    ],
  },
  {
    id: "retention",
    title: "제4조 (보유 및 이용 기간)",
    body: ["상담이 끝난 뒤 상담 기록은 1년간 보관하고 파기합니다. 다음의 경우에는 해당 기간 동안 보관합니다."],
    list: [
      "진행이 완료된 거래: 정산과 분쟁 대응에 필요한 기간",
      "법령에서 보존을 요구하는 경우: 해당 법령이 정한 기간",
      "이용자가 삭제를 요청한 경우: 본인 확인 후 지체 없이 파기",
    ],
  },
  {
    id: "third-party",
    title: "제5조 (제3자 제공)",
    body: [
      "사이트는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 결제·정산 과정에서 판매처가 요구하는 정보가 있으면, 전달 전에 항목과 목적을 안내하고 동의를 받습니다.",
    ],
  },
  {
    id: "consignment",
    title: "제6조 (처리 위탁)",
    body: ["상담 채널 운영을 위해 아래 업무를 위탁하고 있습니다. 위탁 시 개인정보 보호 조항을 함께 정합니다."],
    list: ["채널톡(주식회사 채널코퍼레이션): 1:1 상담 채팅 운영과 대화 기록 보관"],
  },
  {
    id: "rights",
    title: "제7조 (이용자의 권리)",
    body: [
      "이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 채널톡 상담 또는 아래 문의처로 요청하시면 본인 확인 후 지체 없이 처리합니다.",
    ],
  },
  {
    id: "destruction",
    title: "제8조 (파기 절차와 방법)",
    body: [
      "보관 기간이 지나거나 처리 목적이 달성된 정보는 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방식으로 삭제하고, 종이 문서는 분쇄합니다.",
    ],
  },
  {
    id: "safety",
    title: "제9조 (안전성 확보 조치)",
    body: ["개인정보를 안전하게 관리하기 위해 다음 조치를 취하고 있습니다."],
    list: [
      "상담 채널 접근 권한을 담당자로 제한",
      "전송 구간 암호화(HTTPS) 사용",
      "필요한 정보만 확인하는 최소 수집 원칙 운영",
    ],
  },
  {
    id: "changes",
    title: "제10조 (방침의 변경)",
    body: [
      "이 방침이 바뀌면 사이트에 변경 내용과 시행일을 미리 안내합니다. 중요한 변경은 상담 채널을 통해서도 알려드립니다.",
    ],
  },
  {
    id: "contact",
    title: "제11조 (문의처)",
    body: ["개인정보 처리에 관한 문의는 아래로 연락해 주세요."],
    list: [`전화: ${site.phone}`, "채널톡: 사이트 우측 하단 1:1 상담 버튼"],
  },
];

const Privacy: React.FC = () => (
  <>
    <SEO
      title="개인정보처리방침"
      description="고릴라티켓 개인정보처리방침. 상담 과정에서 확인하는 정보의 항목과 처리 목적, 보유 기간, 쿠키와 광고 도구, 이용자의 권리를 안내합니다."
    />
    <PageHero
      eyebrow="Privacy policy"
      crumbs={[{ label: "개인정보처리방침" }]}
      title={<>개인정보처리방침</>}
      lead="상담에 필요한 정보만 확인하고, 목적이 끝나면 남기지 않는 것을 원칙으로 합니다."
    />

    <section className="bg-frost">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[220px_1fr] lg:gap-20">
        <nav aria-label="목차" className="hidden lg:block">
          <div className="sticky top-28 space-y-2.5 border-l border-line pl-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-[12.5px] leading-relaxed text-ink-muted transition-colors hover:text-azure"
              >
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-prose2">
          <p className="rounded-lg border border-line bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink-muted">
            시행일 2026년 1월 1일 · 이 방침은 사이트가 실제로 처리하는 정보를 기준으로 작성되었습니다.
          </p>

          <div className="mt-10 space-y-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-[1.12rem] font-semibold tracking-[-0.01em] text-ink">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-[13.5px] leading-[1.95] text-ink-soft">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((li) => (
                      <li key={li} className="flex items-start gap-2.5 text-[13.5px] leading-[1.9] text-ink-soft">
                        <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-azure" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && (
                  <p className="note text-[13px] leading-[1.9] text-ink-soft">{s.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
