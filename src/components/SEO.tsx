import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  faqItems?: FAQItem[];
  pageType?: 'home' | 'service' | 'blog' | 'general';
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, faqItems, pageType = 'general' }) => {
  const defaultKeywords = "소액결제현금화,소액결제 현금화,소액결제 현금화 방법,소액결제현금화 디시,소액결제 현금화 후기,소액결제 현금화 수수료,소액결제 현금화 업체,소액결제 현금화 추천,소액결제 현금화 사이트,소액결제 방법,소액결제 한도,소액결제 한도 확인,휴대폰 소액결제 현금화,핸드폰 소액결제 현금화,SKT 소액결제 현금화,KT 소액결제 현금화,LGU 소액결제 현금화,미납 소액결제 현금화,소액결제 즉시입금,소액결제 현금화 안전,고릴라티켓,정보이용료현금화,신용카드현금화,상품권현금화";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const siteUrl = "https://xn--299a64rxvbk71bjne.com";
  const canonicalUrl = `${siteUrl}${window.location.pathname}`;
  const fullTitle = `${title} | 고릴라티켓`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "고릴라티켓",
    "url": siteUrl,
    "logo": `${siteUrl}/gorilla-mascot.webp`,
    "image": `${siteUrl}/gorilla-mascot.webp`,
    "description": "소액결제현금화 업계 1위. SKT·KT·LGU+ 모든 통신사 소액결제 현금화, 3분 즉시입금, 미납 99.9% 승인, 24시간 상담.",
    "telephone": "+82-10-2138-0790",
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "수수료 20~30%",
    "areaServed": "KR",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-10-2138-0790",
      "contactType": "customer service",
      "availableLanguage": "Korean",
      "hoursAvailable": "Mo-Su 00:00-24:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5"
    }
  };

  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="고릴라티켓" />
      <meta property="og:image" content={`${siteUrl}/gorilla-mascot.webp`} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/gorilla-mascot.webp`} />
      <meta name="twitter:image:alt" content={fullTitle} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
