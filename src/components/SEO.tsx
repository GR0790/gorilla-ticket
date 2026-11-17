import type React from "react";
import { Helmet } from "react-helmet-async";
import { site } from "../data/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  faqItems?: FAQItem[];
  noindex?: boolean;
}

/**
 * 페이지별 메타 태그.
 * 구조화 데이터에는 확인된 정보(이름·연락처·안내 범위)만 넣습니다.
 * 반응 수·평점처럼 근거가 필요한 값은 넣지 않습니다.
 */
const SEO: React.FC<SEOProps> = ({ title, description, keywords, faqItems, noindex = false }) => {
  const defaultKeywords =
    "고릴라티켓,상품권 매입,휴대폰 소액결제 상품권,신용카드 상품권 구매,정보이용료 게임재화,채널톡 상담";
  const finalKeywords = keywords ? `${keywords},${defaultKeywords}` : defaultKeywords;
  const canonicalUrl = `${site.url}${typeof window !== "undefined" ? window.location.pathname : "/"}`;
  const fullTitle = `${title} | ${site.name}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    logo: `${site.url}/gorilla-mascot.webp`,
    image: `${site.url}/gorilla-mascot.webp`,
    description:
      "상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매 절차를 확인해 채널톡 1:1 상담으로 안내하는 사이트입니다.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer support",
      availableLanguage: "ko",
      hoursAvailable: "Mo-Su 00:00-24:00",
    },
  };

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={finalKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:image" content={`${site.url}/gorilla-mascot.webp`} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:alt" content={`${site.name} 마스코트`} />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site.url}/gorilla-mascot.webp`} />
        <meta name="twitter:image:alt" content={fullTitle} />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </>
  );
};

export default SEO;
