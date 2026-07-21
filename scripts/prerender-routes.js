// 각 라우트에 index.html을 복사하되, 라우트별 정적 메타(title/description/canonical/OG)를 주입합니다.
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--299a64rxvbk71bjne.com';

const ROUTE_META = {
  "/services/micropayment": {
    "title": "소액결제 현금화 - 3분 즉시입금, 업계 최저 수수료 | 고릴라티켓",
    "description": "소액결제 현금화 전문 고릴라티켓. SKT·KT·LGU+ 소액결제 현금화 방법 안내, 지급률 70~80%, 미납·정책 99.9% 승인, 3분 즉시입금. 소액결제현금화 디시 커뮤니티 1위 추천 업체."
  },
  "/services/information-fee": {
    "title": "정보이용료 현금화 콘텐츠이용료 현금화 수수료 싼곳 | 고릴라티켓",
    "description": "정보이용료 현금화, 콘텐츠이용료 현금화 전문! 구글 정보이용료 미납 한도 100% 현금화 가능. SKT KT LGU+ 수수료 최저가, 3분 즉시 입금 고릴라티켓입니다."
  },
  "/services/credit-card": {
    "title": "신용카드 현금화 카드깡 아님 수수료 싼곳 88% 보장 | 고릴라티켓",
    "description": "신용카드 현금화, 카드깡 절대 아님! 합법적인 결제 한도 현금화 서비스. 수수료 싼곳, 지급률 88% 보장. 삼성/신한/현대 등 전 카드사 3분 즉시 입금 고릴라티켓."
  },
  "/services/gift-card": {
    "title": "상품권 현금화 문화상품권 해피머니 85% 보장 수수료 싼곳 | 고릴라티켓",
    "description": "상품권 현금화 업계 최고가 매입! 문화상품권, 해피머니, 신세계상품권, 도서문화상품권 현금화. 24시간 5분 즉시 입금, 수수료 싼곳 고릴라티켓입니다."
  },
  "/how-to-use": {
    "title": "이용 방법 - 소액결제현금화 4단계 안내 | 고릴라티켓",
    "description": "고릴라티켓 소액결제현금화 이용 방법. 상담 신청부터 3분 즉시입금까지 간단 4단계. 소액결제·정보이용료·신용카드·상품권 현금화 이용 가이드."
  },
  "/reviews": {
    "title": "고객 후기 | 고릴라티켓",
    "description": "고릴라티켓 실제 고객 후기 1,247건. 소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화 서비스 평균 평점 4.8점. 3분 입금, 24시간 상담 만족 후기를 확인하세요."
  },
  "/faq": {
    "title": "자주묻는질문 (FAQ) | 고릴라티켓",
    "description": "소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화에 대한 자주묻는질문. 미납 99.9% 승인, 3분 입금, 지급률, 이용방법, 안전성 등 고릴라티켓의 모든 궁금증을 해결해드립니다."
  },
  "/safety": {
    "title": "안전 거래 시스템 - 100% 안전보장 | 고릴라티켓",
    "description": "고릴라티켓 안전 거래 시스템. 정식 사업자 등록, 개인정보 보호, 100% 안전거래 보장으로 소액결제현금화를 안심하고 이용하세요."
  },
  "/blog": {
    "title": "정보 블로그 - 소액결제현금화 최신 정보 | 고릴라티켓",
    "description": "소액결제현금화, 정보이용료·신용카드·상품권 현금화 최신 정보와 한도·수수료·안전 이용 가이드를 고릴라티켓 블로그에서 확인하세요."
  },
  "/contact": {
    "title": "상담센터 - 24시간 1:1 문의 | 고릴라티켓",
    "description": "고릴라티켓 소액결제현금화 24시간 1:1 상담센터. 전화·채팅으로 언제든 문의하세요. 3분 즉시입금, 미납·정책 99.9% 승인 상담 안내."
  },
  "/privacy": {
    "title": "개인정보처리방침 | 고릴라티켓",
    "description": "고릴라티켓 개인정보처리방침. 고객님의 개인정보 수집·이용·보관·파기에 관한 안내입니다."
  },
  "/terms": {
    "title": "이용약관 | 고릴라티켓",
    "description": "고릴라티켓 소액결제현금화 서비스 이용약관 안내입니다."
  },
  "/blog/1": {
    "title": "소액결제로 컬쳐랜드·문화상품권 구매하는 방법 완벽 가이드 | 고릴라티켓",
    "description": "휴대폰 소액결제로 컬쳐랜드·문화상품권을 안전하게 구매하는 방법. 통신사(SKT·KT·LG U+)별 절차, 한도 확인·관리, 안전 이용 팁과 FAQ까지 한 번에 정리했습니다."
  },
  "/blog/2": {
    "title": "정보이용료로 게임 아이템·재화 구매하는 방법과 한도 관리 | 고릴라티켓",
    "description": "정보이용료로 게임 아이템·재화를 구매하는 방법. 소액결제와의 차이, 구글플레이·원스토어 결제 절차, 한도 확인·관리, 안전 이용 팁과 FAQ를 정리했습니다."
  },
  "/blog/3": {
    "title": "휴대폰 소액결제·정보이용료 한도 확인 및 관리 방법 총정리 | 고릴라티켓",
    "description": "휴대폰 소액결제·정보이용료 한도 확인 방법과 상향·하향·차단 설정, 결제 실패 시 점검 포인트를 통신사별로 총정리했습니다."
  },
  "/blog/4": {
    "title": "문화상품권 핀번호 등록·잔액 조회·유효기간 총정리 | 고릴라티켓",
    "description": "문화상품권 핀번호 등록 방법, 잔액 조회, 유효기간·환불 규정과 핀번호 안전 보관 5계명까지 정리한 상품권 관리 가이드입니다."
  },
  "/blog/5": {
    "title": "휴대폰 요금 청구서 읽는 법 — 소액결제·정보이용료 확인하기 | 고릴라티켓",
    "description": "휴대폰 청구서의 통신요금·소액결제·정보이용료 구분법, 결제 내역 확인 방법, 모르는 결제 이의신청과 요금 절약 팁을 정리했습니다."
  }
};

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

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
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with per-page static meta.');
