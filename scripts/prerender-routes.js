// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--299a64rxvbk71bjne.com';

const ROUTE_META = {
  "/services/gift-card": {
    "title": "상품권 매입 — 발행사·잔액 확인 후 절차 안내 | 고릴라티켓",
    "description": "남아 있는 모바일 상품권과 기프트카드를 발행사·잔액·유효기간 기준으로 확인하고, 매입 가능 여부와 절차를 안내합니다. 조건은 상담에서 확인한 뒤 진행합니다.",
    "crumbs": [["고릴라티켓", "/"], ["상품권 매입", "/services/gift-card/"]]
  },
  "/services/micropayment": {
    "title": "휴대폰 소액결제 상품권 구매 — 한도·결제 조건 안내 | 고릴라티켓",
    "description": "휴대폰 소액결제로 모바일 상품권을 구매하는 절차를 안내합니다. 통신사 한도와 본인 인증, 상품권 종류, 다음 달 청구 시점을 확인한 뒤 진행합니다.",
    "crumbs": [["고릴라티켓", "/"], ["휴대폰 소액결제", "/services/micropayment/"]]
  },
  "/services/credit-card": {
    "title": "신용카드 상품권 구매 — 할부 총액·결제 조건 안내 | 고릴라티켓",
    "description": "신용카드로 상품권을 구매할 때 확인할 카드사 정책, 할부 개월, 수수료를 포함한 총액을 정리해 안내합니다. 결제 전에 조건을 확인한 뒤 진행합니다.",
    "crumbs": [["고릴라티켓", "/"], ["신용카드 상품권 구매", "/services/credit-card/"]]
  },
  "/services/information-fee": {
    "title": "정보이용료 게임재화 구매 — 스토어·환불 기준 안내 | 고릴라티켓",
    "description": "정보이용료로 게임 재화와 디지털 아이템을 구매하는 절차를 안내합니다. 스토어 종류와 계정, 재화 구성, 환불 기준을 확인한 뒤 진행합니다.",
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
    "description": "상품권 매입과 휴대폰·카드 상품권 구매, 정보이용료 게임재화, 상담 연결과 개인정보 처리까지. 고릴라티켓 이용에 대해 자주 묻는 질문을 정리했습니다.",
    "crumbs": [["고릴라티켓", "/"], ["자주 묻는 질문", "/faq/"]]
  },
  "/safety": {
    "title": "안전 안내 — 확인 기준과 주의사항 | 고릴라티켓",
    "description": "고릴라티켓이 상담에서 지키는 기준과 이용자가 확인해야 할 주의사항을 정리했습니다. 먼저 보내달라는 요구, 개인 메신저 유도, 과도한 정보 요구에 주의하세요.",
    "crumbs": [["고릴라티켓", "/"], ["안전 안내", "/safety/"]]
  },
  "/blog": {
    "title": "이야기 — 상품권과 결제 절차 정리 | 고릴라티켓",
    "description": "상품권 매입 전 확인 사항, 휴대폰 결제 한도, 카드 할부, 정보이용료 게임 재화까지. 상담 전에 읽어두면 좋은 내용을 정리했습니다.",
    "crumbs": [["고릴라티켓", "/"], ["이야기", "/blog/"]]
  },
  "/contact": {
    "title": "상담 — 채널톡 1:1 문의 | 고릴라티켓",
    "description": "고릴라티켓 상담 안내. 상담 버튼을 누르면 성함과 연락처를 한 번 확인한 뒤 채널톡 1:1 상담으로 연결됩니다. 전화 상담도 가능합니다.",
    "crumbs": [["고릴라티켓", "/"], ["상담", "/contact/"]]
  },
  "/privacy": {
    "title": "개인정보처리방침 | 고릴라티켓",
    "description": "고릴라티켓 개인정보처리방침. 상담 과정에서 확인하는 정보의 항목과 처리 목적, 보유 기간, 쿠키와 광고 도구, 이용자의 권리를 안내합니다.",
    "crumbs": [["고릴라티켓", "/"], ["개인정보처리방침", "/privacy/"]]
  },
  "/terms": {
    "title": "이용약관 | 고릴라티켓",
    "description": "고릴라티켓 이용약관. 상담 서비스의 성격과 이용 조건, 이용자의 의무, 서비스 제한, 책임의 범위를 안내합니다.",
    "crumbs": [["고릴라티켓", "/"], ["이용약관", "/terms/"]]
  }
};

// blogPosts.ts에 있는 모든 글의 프리렌더 라우트를 자동으로 채웁니다.
// (글을 추가할 때 ROUTE_META를 손으로 늘리지 않아도 마지막 글까지 404가 나지 않습니다.)
const BLOG_BRAND = '고릴라티켓';
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
      "title": postTitle + ' | ' + BLOG_BRAND,
      "description": descMatch ? descMatch[1].slice(0, 150) : '',
      "crumbs": [
        [BLOG_BRAND, '/'],
        ['이야기', '/blog/'],
        [postTitle, route + '/']
      ]
    };
    added++;
  }
  if (added > 0) console.log('Added ' + added + ' blog routes from blogPosts.ts');
}

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = SITE + route + '/';
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, '$1' + desc + '$2');
  const bc = '<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>';
  out = out.replace('</head>', bc + '</head>');
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta + breadcrumbs.');
