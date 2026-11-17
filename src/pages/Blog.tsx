import { useMemo, useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { CTABand, PageHero } from "../components/ui";
import { blogPosts } from "../data/blogPosts";

const posts = [...blogPosts].sort((a, b) => (a.fields.date < b.fields.date ? 1 : -1));

const Blog: React.FC = () => {
  const categories = useMemo(
    () => ["전체", ...Array.from(new Set(posts.map((p) => p.fields.category)))],
    [],
  );
  const [active, setActive] = useState("전체");

  const featured = posts[0];
  const rest = posts.slice(1);
  const filtered = active === "전체" ? rest : rest.filter((p) => p.fields.category === active);

  return (
    <>
      <SEO
        title="이야기 — 상품권과 결제 절차 정리"
        description="상품권을 정리하기 전에 읽어둘 것, 결제 한도를 확인하는 방법, 할부 총액 계산, 게임 재화 환불 기준. 상담 전에 짚어두면 짧아지는 이야기를 모았습니다."
        keywords="상품권 매입,휴대폰 소액결제 한도,카드 할부,정보이용료,게임 재화"
      />
      <PageHero
        eyebrow="Journal"
        crumbs={[{ label: "이야기" }]}
        title={
          <>
            결제와 상품권,
            <br />
            헷갈리는 부분만 모았습니다.
          </>
        }
        lead="상담 전에 읽어두면 확인이 빨라지는 내용을 정리했습니다. 실제 조건은 상담에서 다시 확인합니다."
      />

      {featured && (
        <section className="border-b border-line bg-frost">
          <div className="wrap py-16 md:py-20">
            <Link
              to={`/blog/${featured.fields.id}`}
              className="group grid overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-azure/45 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="border-line p-8 md:p-12 lg:border-r">
                <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">
                  <span className="rounded-full border border-azure/40 px-3 py-1 text-azure">Featured</span>
                  <span>{featured.fields.category}</span>
                </div>
                <h2 className="mt-7 font-display text-[1.7rem] leading-[1.45] text-ink transition-colors group-hover:text-azure md:text-[2.05rem]">
                  {featured.fields.title}
                </h2>
                <div className="mt-8 flex items-center gap-4 text-[12px] text-ink-muted">
                  <span>{featured.fields.date}</span>
                  <span className="h-3 w-px bg-line" />
                  <span>{featured.fields.readTime} 읽기</span>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-frost p-8 md:p-12">
                <p className="text-[14px] leading-[2] text-ink-soft">{featured.fields.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-azure">
                  글 읽기
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-line bg-white">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[12.5px] transition-colors ${
                  active === c
                    ? "border-azure bg-azure text-white"
                    : "border-line text-ink-soft hover:border-azure hover:text-azure"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {filtered.map((p) => (
              <Link key={p.fields.id} to={`/blog/${p.fields.id}`} className="group bg-frost p-7 transition-colors hover:bg-white md:p-8">
                <div className="flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  <span className="text-azure">{p.fields.category}</span>
                  <span className="h-px w-5 bg-steel" />
                  <span>{p.fields.readTime}</span>
                </div>
                <h3 className="mt-4 font-display text-[1.15rem] leading-[1.55] text-ink transition-colors group-hover:text-azure">
                  {p.fields.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.9] text-ink-soft">{p.fields.excerpt}</p>
                <p className="mt-5 text-[11px] text-ink-muted">{p.fields.date}</p>
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="bg-frost py-16 text-center text-[13px] text-ink-muted md:col-span-2">
                이 주제의 글은 아직 준비 중입니다.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Need an answer now?"
        title={
          <>
            글보다 빠른 답이 필요할 때,
            <br className="hidden sm:block" /> 채널톡으로 물어보세요.
          </>
        }
      />
    </>
  );
};

export default Blog;
