// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + 구조화 데이터 + noscript 안내문 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로, 페이지 제목과 요지를 읽을 수 있습니다.
//
// 주의: 이 스크립트는 <head>의 메타태그와 </head> 앞 구조화 데이터,
//       <!--seo-noscript-start--> ~ <!--seo-noscript-end--> 구간만 다룹니다.
//       디자인(클래스·CSS)·GTM/Google Ads(AW-)·채널톡 식별 로직은 건드리지 않습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--299a64rxvbk71bjne.com';
const BRAND = '고릴라티켓';

const ROUTE_META = {
  "/services/gift-card": {
    "title": "상품권 매입, 맡기기 전 확인 순서 | 고릴라티켓",
    "description": "상품권을 맡기기 전에 볼 것은 발행사, 잔액, 남은 기간, 명의입니다. 네 가지를 어떤 순서로 보면 되는지 정리했고, 확인이 끝나면 매입 가능 여부와 절차를 안내합니다.",
    "crumbs": [["고릴라티켓", "/"], ["상품권 매입", "/services/gift-card/"]]
  },
  "/services/micropayment": {
    "title": "휴대폰 소액결제로 상품권 살 때 확인 순서 | 고릴라티켓",
    "description": "휴대폰 결제로 상품권을 사기 전에 볼 것은 남은 한도, 본인 인증, 상품권 종류, 다음 달 청구 시점입니다. 확인 순서를 정리하고, 결제 전에 금액을 다시 확인합니다.",
    "crumbs": [["고릴라티켓", "/"], ["휴대폰 소액결제", "/services/micropayment/"]]
  },
  "/services/credit-card": {
    "title": "신용카드로 상품권 살 때 총액 계산 | 고릴라티켓",
    "description": "카드로 상품권을 사기 전에 볼 것은 승인 조건, 일시불인지 할부인지, 수수료를 더한 총액입니다. 월 납부액이 아니라 총액으로 판단하도록 계산을 도와드립니다.",
    "crumbs": [["고릴라티켓", "/"], ["신용카드 상품권 구매", "/services/credit-card/"]]
  },
  "/services/information-fee": {
    "title": "정보이용료 게임재화, 구매 전 확인 순서 | 고릴라티켓",
    "description": "정보이용료로 게임 재화와 아이템을 사기 전에 볼 것은 스토어 계정, 게임과 아이템, 남은 한도, 환불 기준입니다. 순서대로 확인하고 되돌리기 어려운 부분을 먼저 짚어 드립니다.",
    "crumbs": [["고릴라티켓", "/"], ["정보이용료 게임재화", "/services/information-fee/"]]
  },
  "/how-to-use": {
    "title": "진행 절차 — 상담 연결부터 확인까지 | 고릴라티켓",
    "description": "고릴라티켓 진행 절차를 단계별로 정리했습니다. 상담 연결, 보유 상품권·결제 수단 확인, 조건 안내, 동의 후 진행까지 한 번에 확인하세요.",
    "crumbs": [["고릴라티켓", "/"], ["진행 절차", "/how-to-use/"]]
  },
  "/reviews": {
    "title": "상담 사례 — 자주 오가는 상황과 안내 방향 | 고릴라티켓",
    "description": "상품권 매입, 휴대폰 소액결제, 신용카드 구매, 정보이용료 게임재화 상담에서 자주 오가는 상황과 확인 항목, 안내 방향을 정리했습니다.",
    "crumbs": [["고릴라티켓", "/"], ["상담 사례", "/reviews/"]]
  },
  "/faq": {
    "title": "자주 묻는 질문 | 고릴라티켓",
    "description": "상담 전에 자주 걸리는 지점을 질문으로 모았습니다. 준비물, 상품권 종류, 한도 확인, 진행 순서, 개인정보 처리까지 고릴라티켓 기준으로 답합니다.",
    "crumbs": [["고릴라티켓", "/"], ["자주 묻는 질문", "/faq/"]]
  },
  "/safety": {
    "title": "안전 안내 — 확인 기준과 주의사항 | 고릴라티켓",
    "description": "고릴라티켓이 상담에서 지키는 기준과 이용자가 확인해야 할 주의사항을 정리했습니다. 먼저 보내달라는 요구, 개인 메신저 유도, 과도한 정보 요구에 주의하세요.",
    "crumbs": [["고릴라티켓", "/"], ["안전 안내", "/safety/"]]
  },
  "/blog": {
    "title": "이야기 — 상품권과 결제 절차 정리 | 고릴라티켓",
    "description": "상품권을 정리하기 전에 읽어둘 것, 결제 한도를 확인하는 방법, 할부 총액 계산, 게임 재화 환불 기준. 상담 전에 짚어두면 짧아지는 이야기를 모았습니다.",
    "crumbs": [["고릴라티켓", "/"], ["이야기", "/blog/"]]
  },
  "/contact": {
    "title": "상담 — 채널톡 1:1 문의 | 고릴라티켓",
    "description": "상담 전화는 바로 확인할 것이 있을 때 씁니다. 채팅에 남긴 확인 항목과 통화 내용이 한 기록으로 이어지도록 정리해 드립니다.",
    "crumbs": [["고릴라티켓", "/"], ["상담", "/contact/"]]
  },
  "/privacy": {
    "title": "개인정보처리방침 | 고릴라티켓",
    "description": "고릴라티켓이 상담에서 확인하는 정보의 항목, 보관 기간과 파기 방법, 쿠키와 광고 도구의 사용, 이용자가 요청할 수 있는 권리를 정리했습니다.",
    "crumbs": [["고릴라티켓", "/"], ["개인정보처리방침", "/privacy/"]]
  },
  "/terms": {
    "title": "이용약관 | 고릴라티켓",
    "description": "고릴라티켓 상담 서비스의 성격과 이용 조건, 이용자가 지켜야 할 의무, 서비스 제한과 책임의 범위를 정리한 약관입니다.",
    "crumbs": [["고릴라티켓", "/"], ["이용약관", "/terms/"]]
  }
};

// blogPosts.ts에 있는 모든 글의 프리렌더 라우트를 자동으로 채웁니다.
// (글을 추가할 때 ROUTE_META를 손으로 늘리지 않아도 마지막 글까지 404가 나지 않습니다.)
const postsFile = path.resolve(process.cwd(), 'src/data/blogPosts.ts');
if (fs.existsSync(postsFile)) {
  const postsSource = fs.readFileSync(postsFile, 'utf-8');
  let added = 0;
  for (const block of postsSource.split(/sys: \{ id: "post-/).slice(1)) {
    const idMatch = block.match(/id:\s*(\d+)/);
    if (!idMatch) continue;
    const id = Number(idMatch[1]);
    const route = '/blog/' + id;
    if (ROUTE_META[route]) continue;
    const titleMatch = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
    const descMatch = block.match(/summary:\s*"((?:[^"\\]|\\.)*)"/) || block.match(/excerpt:\s*"((?:[^"\\]|\\.)*)"/);
    const postTitle = titleMatch ? titleMatch[1] : '이야기';
    ROUTE_META[route] = {
      "title": postTitle + ' | ' + BRAND,
      "description": descMatch ? descMatch[1].slice(0, 150) : '',
      "crumbs": [
        [BRAND, '/'],
        ['이야기', '/blog/'],
        [postTitle, route + '/']
      ]
    };
    added++;
  }
  if (added > 0) console.log('Added ' + added + ' blog routes from blogPosts.ts');
}

// 사이트 안내 링크(noscript 블록 하단에 붙는 내부 링크). 크롤러가 JS 없이도 경로를 찾도록 돕습니다.
const NAV_LINKS = [
  ['상품권 매입 확인 순서', '/services/gift-card/'],
  ['휴대폰 결제 한도 확인', '/services/micropayment/'],
  ['카드 할부 총액 계산', '/services/credit-card/'],
  ['게임 재화 구매 확인', '/services/information-fee/'],
  ['진행 절차', '/how-to-use/'],
  ['안전 안내', '/safety/'],
  ['자주 묻는 질문', '/faq/'],
  ['상담', '/contact/'],
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 라우트 → 최종 URL. 루트는 "/" 하나만, 나머지는 항상 끝에 "/" (canonical·sitemap과 같은 형태)
function pageUrl(route) {
  return route === '/' || route === '' ? SITE + '/' : SITE + route + '/';
}

// <meta name|property="key" content="..."> 값을 태그 서식(줄바꿈·속성 순서)에 상관없이 교체
function setMetaContent(html, key, value) {
  return html.replace(/<meta\b[^>]*>/gi, (tag) => {
    const keyMatch = tag.match(/(?:name|property)\s*=\s*"([^"]*)"/i);
    if (!keyMatch || keyMatch[1] !== key) return tag;
    if (/\bcontent\s*=\s*"/i.test(tag)) {
      return tag.replace(/(\bcontent\s*=\s*")[^"]*(")/i, '$1' + value + '$2');
    }
    return tag.replace(/\s*\/?>$/, (end) => ' content="' + value + '"' + end);
  });
}

function setCanonical(html, url) {
  return html.replace(/<link\b[^>]*rel\s*=\s*"canonical"[^>]*>/gi, (tag) => {
    if (/\bhref\s*=\s*"/i.test(tag)) return tag.replace(/(\bhref\s*=\s*")[^"]*(")/i, '$1' + url + '$2');
    return tag.replace(/\s*\/?>$/, (end) => ' href="' + url + '"' + end);
  });
}

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

function serviceLd(name, description) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    serviceType: name,
    description: description,
    areaServed: { '@type': 'Country', name: 'KR' },
    provider: {
      '@type': 'Organization',
      name: BRAND,
      url: SITE + '/',
    },
  });
}

// FAQ 페이지의 질문/답변을 페이지 소스에서 그대로 읽어 FAQPage 구조화 데이터를 만듭니다.
// (답변이 JSX로 되어 있는 항목은 건너뛰고, 문자열로 된 항목만 넣습니다.)
function readFaqPairs(file) {
  if (!fs.existsSync(file)) return [];
  const source = fs.readFileSync(file, 'utf-8');
  const re = /q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*\n?\s*a:\s*"((?:[^"\\]|\\.)*)"/g;
  const pairs = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    const q = m[1].replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
    const a = m[2].replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
    if (q && a) pairs.push({ q, a });
  }
  return pairs;
}

const faqLd = () => {
  const pairs = readFaqPairs(path.resolve(process.cwd(), 'src/pages/FAQ.tsx'));
  if (pairs.length === 0) return null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.q,
      acceptedAnswer: { '@type': 'Answer', text: p.a },
    })),
  });
};

// JS를 실행하지 않는 환경에서 보이는 최소 안내문 (디자인 CSS를 쓰지 않고 인라인 스타일만 사용)
function noscriptBlock(route, heading, description) {
  const links = NAV_LINKS
    .filter(([, href]) => href !== pageUrl(route).replace(SITE, ''))
    .map(([label, href]) => `        <li><a href="${href}">${esc(label)}</a></li>`)
    .join('\n');
  return `<!--seo-noscript-start-->
    <noscript>
      <div style="max-width: 720px; margin: 56px auto; padding: 0 24px; font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; color: #0f172a; line-height: 1.75">
        <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 12px">${esc(heading)}</h1>
        <p style="margin: 0 0 18px; color: #475569">${esc(description)}</p>
        <p style="margin: 0 0 6px; font-size: 13px; font-weight: 600; color: #334155">확인 순서로 이동</p>
        <ul style="margin: 0; padding-left: 18px; font-size: 14px">
${links}
        </ul>
        <p style="margin: 18px 0 0; font-size: 13px; color: #64748b">${esc(BRAND)} · 확인 항목부터 안내 · 채널톡 1:1 상담 24시간 · 전화 010-2138-0790</p>
      </div>
    </noscript>
    <!--seo-noscript-end-->`;
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = pageUrl(route);
  const heading = m.crumbs[m.crumbs.length - 1][0];
  let out = html;

  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  out = setMetaContent(out, 'description', desc);
  out = setCanonical(out, url);
  out = setMetaContent(out, 'og:title', title);
  out = setMetaContent(out, 'og:description', desc);
  out = setMetaContent(out, 'og:url', url);
  out = setMetaContent(out, 'twitter:title', title);
  out = setMetaContent(out, 'twitter:description', desc);

  // 구조화 데이터: BreadcrumbList + (서비스 안내 페이지) Service + (FAQ 페이지) FAQPage
  const blocks = ['<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>'];
  if (route.startsWith('/services/')) {
    blocks.push('<script type="application/ld+json">' + serviceLd(heading, m.description) + '<\/script>');
  }
  if (route === '/faq') {
    const faq = faqLd();
    if (faq) blocks.push('<script type="application/ld+json">' + faq + '<\/script>');
  }
  out = out.replace('</head>', blocks.join('\n    ') + '</head>');

  // noscript 안내문: 홈페이지에 심어둔 구간을 라우트별 문구로 교체
  const block = noscriptBlock(route, heading, m.description);
  if (/<!--seo-noscript-start-->[\s\S]*?<!--seo-noscript-end-->/.test(out)) {
    out = out.replace(/<!--seo-noscript-start-->[\s\S]*?<!--seo-noscript-end-->/, block);
  } else {
    out = out.replace('<div id="root"></div>', '<div id="root"></div>\n    ' + block);
  }
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta, structured data and noscript body.');
