import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const faqData = [
  {
    question: "소액결제 현금화란 무엇인가요?",
    answer: "소액결제 현금화는 휴대폰 소액결제 한도를 이용해 현금을 마련하는 서비스입니다. SKT, KT, LGU+ 통신사 가입자라면 누구나 이용 가능하며, 다음 달 휴대폰 요금에 합산 청구됩니다."
  },
  {
    question: "소액결제 현금화 방법은 어떻게 되나요?",
    answer: "①상담 신청 → ②소액결제 한도 확인 → ③간단한 본인인증 → ④3분 이내 즉시입금 순으로 진행됩니다. 고릴라티켓은 평균 2분 47초 만에 입금 완료됩니다."
  },
  {
    question: "소액결제 현금화 수수료(지급률)는 얼마인가요?",
    answer: "고릴라티켓 소액결제 현금화 지급률은 70~80%입니다. 예를 들어 소액결제 한도 10만원을 현금화하면 7만~8만원을 받으실 수 있습니다. 업계 최저 수수료를 보장합니다."
  },
  {
    question: "모든 통신사(SKT, KT, LGU+)에서 소액결제 현금화가 가능한가요?",
    answer: "네, SKT(SK텔레콤), KT(케이티), LGU+(LG유플러스) 모든 통신사에서 소액결제 현금화가 가능합니다. 알뜰폰(MVNO) 이용자도 일부 가능하니 상담을 통해 확인해 주세요."
  },
  {
    question: "미납이나 정책 제한이 있어도 소액결제 현금화가 되나요?",
    answer: "고릴라티켓은 미납·정책 제한 상황에서도 99.9% 승인을 보장합니다. 타업체에서 거절당하신 분들도 꼭 상담해보세요."
  },
  {
    question: "소액결제 한도는 어떻게 확인하나요?",
    answer: "소액결제 한도는 ①통신사 앱(T월드, KT닷컴, U+앱) ②*#요금조회 ③통신사 고객센터(SKT 114, KT 100, LGU+ 101)를 통해 확인 가능합니다. 고릴라티켓 상담 시 한도 확인도 함께 도와드립니다."
  },
  {
    question: "소액결제 현금화는 안전한가요? 합법인가요?",
    answer: "정식 등록 업체를 통한 소액결제 현금화는 합법 서비스입니다. 고릴라티켓은 정식 사업자 등록 업체로 모든 거래는 안전하게 처리되며, 개인정보는 철저히 보호됩니다."
  },
  {
    question: "소액결제 현금화 후 신용점수에 영향이 있나요?",
    answer: "휴대폰 소액결제는 일반적으로 신용점수에 영향을 주지 않습니다. 단, 소액결제 요금을 연체하면 신용점수에 불이익이 생길 수 있으므로 납부 기한을 지켜주세요."
  }
];

const MicropaymentService: React.FC = () => {
  return (
    <>
      <SEO 
        title="소액결제 현금화 - 3분 즉시입금, 업계 최저 수수료"
        description="소액결제 현금화 전문 고릴라티켓. SKT·KT·LGU+ 소액결제 현금화 방법 안내, 지급률 70~80%, 미납·정책 99.9% 승인, 3분 즉시입금. 소액결제현금화 디시 커뮤니티 1위 추천 업체."
        keywords="소액결제 현금화,소액결제현금화,소액결제 현금화 방법,소액결제현금화 디시,소액결제 현금화 후기,소액결제 현금화 수수료,소액결제 현금화 업체,소액결제 현금화 추천,소액결제 한도,소액결제 한도 확인,SKT 소액결제 현금화,KT 소액결제 현금화,LGU 소액결제 현금화,휴대폰 소액결제 현금화,핸드폰 소액결제 현금화,미납 소액결제 현금화,소액결제 즉시입금,소액결제 현금화 안전"
        faqItems={faqData}
        pageType="service"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🔥 소액결제현금화 디시·커뮤니티 1위 추천 업체
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              소액결제 현금화<br />
              <span className="text-sky-600">3분 즉시입금 · 업계 최저 수수료</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              SKT · KT · LGU+ 모든 통신사 소액결제 현금화 가능!<br />
              미납·정책 99.9% 승인, 지급률 70~80%, 24시간 365일 상담
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-semibold">✅ 소액결제 현금화 방법 간단</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">⚡ 평균 2분 47초 입금</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">🛡️ 100% 안전 거래</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">💰 지급률 70~80%</span>
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); (window as any).startConsult(); }}
              className="inline-flex items-center bg-sky-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-sky-700 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              💬 소액결제 현금화 즉시 상담
            </a>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">

          {/* 소액결제 현금화란 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              소액결제 현금화란 무엇인가요?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>소액결제 현금화</strong>란 SKT, KT, LGU+ 통신사에서 제공하는 <strong>휴대폰 소액결제 한도</strong>를 활용해 필요한 현금을 즉시 마련하는 서비스입니다. 복잡한 서류나 심사 없이 <strong>휴대폰 하나만으로 3분 안에 현금화</strong>가 가능합니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    디시인사이드, 네이버 카페, 각종 커뮤니티에서 <strong>소액결제현금화 업체 추천</strong>으로 고릴라티켓이 꾸준히 언급되는 이유는 업계 최고 수준의 <strong>지급률(70~80%)</strong>과 빠른 입금 속도 때문입니다.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 rounded-full mr-3 flex-shrink-0" />모든 통신사 지원: SKT, KT, LGU+ 상관없이 이용 가능</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 rounded-full mr-3 flex-shrink-0" />평균 2분 47초 입금완료 — 업계 최고 속도</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 rounded-full mr-3 flex-shrink-0" />미납·정책 제한 고객도 99.9% 승인</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 rounded-full mr-3 flex-shrink-0" />정식 사업자 등록 — 100% 안전 거래</li>
                  </ul>
                </div>
                <div className="bg-sky-50 rounded-xl p-6">
                  <h3 className="font-bold text-sky-800 mb-4 text-lg">📱 소액결제 현금화 방법 3단계</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div>
                        <p className="text-sky-800 font-medium">상담 신청 & 소액결제 한도 확인</p>
                        <p className="text-sky-700 text-sm">24시간 채팅 상담으로 즉시 한도 확인</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div>
                        <p className="text-sky-800 font-medium">간단한 본인 인증 진행</p>
                        <p className="text-sky-700 text-sm">복잡한 서류 없이 본인 확인만</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div>
                        <p className="text-sky-800 font-medium">3분 이내 즉시 입금 완료</p>
                        <p className="text-sky-700 text-sm">지정 계좌로 즉시 현금 입금</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 통신사별 소액결제 한도 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              통신사별 소액결제 한도 & 현금화 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">📡 SKT 소액결제 현금화</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 기본 한도: 월 30만원~100만원</li>
                  <li>• T월드 앱에서 한도 확인 가능</li>
                  <li>• 미납 고객도 상담 후 이용 가능</li>
                  <li>• 고객센터: 114</li>
                </ul>
                <div className="mt-4 bg-blue-50 rounded-lg p-3 text-center text-blue-800 font-semibold text-sm">
                  SKT 소액결제 현금화 지급률 70~80%
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4 text-center">📡 KT 소액결제 현금화</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 기본 한도: 월 30만원~100만원</li>
                  <li>• KT닷컴·My KT 앱 한도 확인</li>
                  <li>• 정책 제한 시에도 99.9% 승인</li>
                  <li>• 고객센터: 100</li>
                </ul>
                <div className="mt-4 bg-red-50 rounded-lg p-3 text-center text-red-800 font-semibold text-sm">
                  KT 소액결제 현금화 지급률 70~80%
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-4 text-center">📡 LGU+ 소액결제 현금화</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 기본 한도: 월 30만원~100만원</li>
                  <li>• U+앱에서 소액결제 한도 확인</li>
                  <li>• 미납·연체 고객도 상담 환영</li>
                  <li>• 고객센터: 101</li>
                </ul>
                <div className="mt-4 bg-pink-50 rounded-lg p-3 text-center text-pink-800 font-semibold text-sm">
                  LGU+ 소액결제 현금화 지급률 70~80%
                </div>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
              <p className="text-yellow-800 text-sm">💡 <strong>소액결제 한도 확인 방법:</strong> 통신사 앱 → 요금/결제 → 소액결제 항목에서 잔여 한도 확인 가능 | 상담 시 고릴라티켓이 한도 확인을 도와드립니다.</p>
            </div>
          </section>

          {/* 소액결제 현금화 수수료 비교 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              소액결제 현금화 수수료 & 지급률 안내
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <p className="text-gray-600 text-center mb-8">고릴라티켓은 업계 최저 수수료로 투명하게 운영합니다. 소액결제 현금화 수수료는 20~30%이며, 지급률은 70~80%입니다.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sky-600 text-white">
                      <th className="p-3 text-left rounded-tl-lg">소액결제 금액</th>
                      <th className="p-3 text-center">수수료 (20%)</th>
                      <th className="p-3 text-center">수수료 (25%)</th>
                      <th className="p-3 text-center text-yellow-300 rounded-tr-lg">수수료 (30%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { amount: "10만원", fee20: "8만원", fee25: "7.5만원", fee30: "7만원" },
                      { amount: "20만원", fee20: "16만원", fee25: "15만원", fee30: "14만원" },
                      { amount: "30만원", fee20: "24만원", fee25: "22.5만원", fee30: "21만원" },
                      { amount: "50만원", fee20: "40만원", fee25: "37.5만원", fee30: "35만원" },
                      { amount: "100만원", fee20: "80만원", fee25: "75만원", fee30: "70만원" },
                    ].map((row, i) => (
                      <tr key={row.amount} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 font-semibold text-gray-900">{row.amount}</td>
                        <td className="p-3 text-center text-sky-700 font-medium">{row.fee20}</td>
                        <td className="p-3 text-center text-blue-700 font-medium">{row.fee25}</td>
                        <td className="p-3 text-center text-purple-700 font-medium">{row.fee30}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">※ 실제 지급률은 소액결제 한도, 통신사, 미납 여부에 따라 달라질 수 있습니다. 정확한 견적은 상담을 통해 안내해드립니다.</p>
            </div>
          </section>

          {/* 고릴라티켓 핵심 장점 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              고릴라티켓 소액결제 현금화 핵심 장점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⚡", title: "3분 즉시입금", desc: "소액결제 현금화 신청부터 입금까지 평균 2분 47초! 긴급 비상금도 신속하게 해결합니다." },
                { icon: "💰", title: "지급률 70~80%", desc: "소액결제 현금화 수수료 20~30%, 업계 최저 수준의 투명한 지급률을 보장합니다." },
                { icon: "🔥", title: "미납 99.9% 승인", desc: "미납·정책 제한으로 거절당하셨나요? 고릴라티켓은 99.9% 승인을 자부합니다." },
                { icon: "🛡️", title: "24시간 안전 상담", desc: "정식 사업자 등록 업체. 소액결제 현금화 안전 거래를 24시간 365일 보장합니다." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 소액결제현금화 디시 & 후기 섹션 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              소액결제 현금화 후기 — 실제 이용자 리뷰
            </h2>
            <p className="text-center text-gray-600 mb-8">디시인사이드, 네이버 카페, 각종 커뮤니티에서 검증된 고릴라티켓 소액결제 현금화 후기입니다.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "김*수 (SKT, 30만원)",
                  tag: "소액결제 현금화 후기",
                  review: "소액결제현금화 디시 보고 고릴라티켓 찾았는데 진짜 3분도 안됐어요. 수수료도 다른 데보다 저렴하고 상담도 친절해서 너무 좋았습니다. 강추!",
                  stars: 5
                },
                {
                  name: "이*진 (KT, 50만원)",
                  tag: "소액결제 현금화 후기",
                  review: "미납 있어서 다른 업체에서 거절당했는데 고릴라티켓은 바로 됐어요. 소액결제 한도 확인부터 입금까지 정말 빠르고 안전하게 처리해줬습니다.",
                  stars: 5
                },
                {
                  name: "박*호 (LGU+, 20만원)",
                  tag: "소액결제 현금화 방법 안내",
                  review: "소액결제 현금화 방법을 몰라서 걱정했는데 상담사 분이 처음부터 끝까지 친절하게 안내해줬어요. 즉시입금 진짜 맞더라고요. 다음에 또 이용할게요.",
                  stars: 5
                },
              ].map((review) => (
                <div key={review.name} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {"⭐".repeat(review.stars)}
                    </div>
                    <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">{review.tag}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.review}"</p>
                  <p className="text-gray-500 text-xs font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/reviews" className="text-sky-600 font-semibold hover:text-sky-700">
                소액결제 현금화 후기 더 보기 →
              </Link>
            </div>
          </section>

          {/* FAQ 섹션 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              소액결제 현금화 자주 묻는 질문 (FAQ)
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                {faqData.map((item, index) => (
                  <div key={index} className={index < faqData.length - 1 ? "border-b border-gray-200 pb-5" : ""}>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                      Q. {item.question}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center bg-sky-50 p-4 rounded-lg">
                <p className="text-sky-800">
                  더 많은 질문은{" "}
                  <Link to="/faq" className="font-semibold hover:underline">자주 묻는 질문 전체 보기</Link>를 확인해주세요.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-sky-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                지금 바로 소액결제 현금화 상담받아보세요!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                급한 비상금이 필요할 때, 고릴라티켓 소액결제 현금화로 3분 안에 해결하세요.<br />
                24시간 365일 상담 가능, 미납·정책 99.9% 승인 보장.
              </p>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); (window as any).startConsult(); }}
                className="inline-block bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                💬 소액결제 현금화 즉시 상담 시작
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MicropaymentService;
