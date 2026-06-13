#!/usr/bin/env node
// 新規ガイド記事スキャフォールド — 3ファイルの登録を一括で行い、孤児ページ事故を防ぐ。
//
// 使い方（リポジトリ内ならどこから実行してもよい）:
//   node .agents/skills/tabenavi-seo-writer/scripts/new-article.mjs <slug> \
//     --title "記事タイトル（メタtitleではなく見出し用）" \
//     --description "メタディスクリプション（120字前後）" \
//     --category chain|method|training|tool|support|scene|cuisine|overview
//
// 生成・更新:
//   1. src/app/guide/<slug>/page.tsx  … hamburger-comparison 準拠のスケルトン（TODO付き・ビルド可能）
//   2. src/lib/articles.ts            … RELATED_ARTICLES に登録（/guide一覧・関連記事の出所）
//   3. src/app/sitemap.ts             … guideSlugs に登録

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const CATEGORIES = ["chain", "method", "training", "tool", "support", "scene", "cuisine", "overview"];

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// --- 引数パース ---
const argv = process.argv.slice(2);
const positional = argv.filter((a, i) => !a.startsWith("--") && (i === 0 || !argv[i - 1].startsWith("--")));
const slug = positional[0];
function opt(name) {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
}
const title = opt("--title");
const description = opt("--description");
const category = opt("--category");

if (!slug || !title || !description || !category) {
  fail(`引数不足。使い方:\n  node new-article.mjs <slug> --title "..." --description "..." --category <${CATEGORIES.join("|")}>`);
}
if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) fail(`slugは小文字英数とハイフンのみ: "${slug}"`);
if (!CATEGORIES.includes(category)) fail(`不正なcategory "${category}"。候補: ${CATEGORIES.join(", ")}`);
if (/nakau/.test(slug) || /なか卯/.test(title)) {
  fail("なか卯はDBに存在しないため記事化禁止（soft-404になる）。チェーン追加が先。");
}

// --- 対象ファイル ---
const pageDir = path.join(ROOT, "src/app/guide", slug);
const pagePath = path.join(pageDir, "page.tsx");
const articlesPath = path.join(ROOT, "src/lib/articles.ts");
const sitemapPath = path.join(ROOT, "src/app/sitemap.ts");

const articlesSrc = readFileSync(articlesPath, "utf8");
const sitemapSrc = readFileSync(sitemapPath, "utf8");

// --- 重複ガード ---
if (existsSync(pagePath)) fail(`既に存在: ${pagePath}`);
if (articlesSrc.includes(`slug: "${slug}"`)) fail(`articles.ts に登録済み: ${slug}`);
if (sitemapSrc.includes(`"${slug}"`)) fail(`sitemap.ts に登録済み: ${slug}`);

const today = new Date().toISOString().slice(0, 10);
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

// --- 1. page.tsx スケルトン ---
const page = `import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  NutritionTable,
  TipBox,
  Marker,
  CTABanner,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  // TODO: ターゲットKW先頭｜ベネフィット【YYYY年最新】 | たべなび
  title: "${esc(title)}【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/${slug}" },
  description: "${esc(description)}",
  keywords: [
    // TODO: ターゲットKW 4-6個
  ],
  openGraph: {
    title: "${esc(title)}",
    description: "${esc(description)}",
    url: "https://www.tabenavi.jp/guide/${slug}",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${esc(title)}",
  description: "${esc(description)}",
  datePublished: "${today}",
  dateModified: "${today}",
  author: { "@type": "Organization", name: "たべなび", url: "https://www.tabenavi.jp" },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/${slug}",
};

const tocItems = [
  // TODO: H2と完全一致させる（5-8本）
  { id: "section-1", label: "セクション1" },
  { id: "summary", label: "まとめ" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="${esc(title)}"
        subtitle="" // TODO: サブタイトル【2026年最新】
        imageUrl="" // TODO: SKILL.md の検証済みUnsplash URLから選ぶ
        breadcrumb="${esc(title)}"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="${slug}">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: ${today.replace(/-0?(\d+)-0?(\d+)$/, "年$1月$2日")}</p>
        <AffiliateDisclosure />

        {/* TODO: QuickAnswer — AI Overview/強調スニペット対策（質問＋太字入り即答）。
            数値は必ずSupabase menu_items で検算してから書く */}

        {/* TODO: 導入文 — <Marker>核心数値</Marker> をハイライト。断定表現禁止（YMYL） */}

        <TableOfContents items={tocItems} />

        <section className="mb-16">
          <SectionHeading id="section-1">セクション1</SectionHeading>
          <p className="mb-4">{/* TODO: 本文 */}</p>
          {/* TODO: NutritionTable / ComparisonTable / RankingCard。データはDB実値のみ */}
          <TipBox title="ポイント">
            <p>{/* TODO */}</p>
          </TipBox>
        </section>

        <CTABanner
          title="" // TODO: 「○○を栄養データで横断検索」系の価値提示
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* TODO: 残りのH2セクション（合計5-8本）＋セクション間に ArticleImage */}
        {/* TODO: 関連する /chains/[slug] と既存記事への内部リンク（孤児ページ防止） */}

        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              // TODO: 3-5点
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <FAQSection
          slug="${slug}"
          items={[
            // TODO: 5-6問 { q: "...", a: "..." }
          ]}
        />

        <CTABanner
          title="" // TODO: 末尾CTA
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "${today}", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="${slug}" />
      </ArticleLayout>
    </div>
  );
}
`;

// --- 2. articles.ts へ登録（RELATED_ARTICLES の閉じ括弧の直前に挿入） ---
const arrStart = articlesSrc.indexOf("export const RELATED_ARTICLES");
if (arrStart < 0) fail("articles.ts: RELATED_ARTICLES が見つからない（構造が変わった可能性。手動で登録を）");
const arrClose = articlesSrc.indexOf("\n];", arrStart);
if (arrClose < 0) fail("articles.ts: 配列の閉じ括弧が見つからない");
const entry = `  { slug: "${slug}", title: "${esc(title)}", description: "${esc(description)}", category: "${category}" },\n`;
const newArticles = articlesSrc.slice(0, arrClose + 1) + entry + articlesSrc.slice(arrClose + 1);

// --- 3. sitemap.ts へ登録（guideSlugs の閉じ括弧の直前に挿入） ---
const slugsStart = sitemapSrc.indexOf("const guideSlugs = [");
if (slugsStart < 0) fail("sitemap.ts: guideSlugs が見つからない（構造が変わった可能性。手動で登録を）");
const slugsCloseMatch = sitemapSrc.slice(slugsStart).match(/\n(\s*)\];/);
if (!slugsCloseMatch) fail("sitemap.ts: guideSlugs の閉じ括弧が見つからない");
const slugsClose = slugsStart + slugsCloseMatch.index + 1;
const newSitemap = sitemapSrc.slice(0, slugsClose) + `    "${slug}",\n` + sitemapSrc.slice(slugsClose);

// --- 書き込み（全検証を通ってから） ---
mkdirSync(pageDir, { recursive: true });
writeFileSync(pagePath, page);
writeFileSync(articlesPath, newArticles);
writeFileSync(sitemapPath, newSitemap);

console.log(`✓ 作成: src/app/guide/${slug}/page.tsx（スケルトン）`);
console.log(`✓ 登録: src/lib/articles.ts → RELATED_ARTICLES（category: ${category}）`);
console.log(`✓ 登録: src/app/sitemap.ts → guideSlugs`);
console.log(`
残りの作業:
  1. page.tsx の TODO を埋める（数値はSupabase menu_items で検算）
  2. 関連する /chains/[slug] ハブと既存記事から内部リンクを張る
  3. npm run build で確認`);
