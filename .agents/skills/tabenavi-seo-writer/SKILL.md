---
name: tabenavi-seo-writer
description: たべなび（tabenavi.jp）のSEOガイド記事を新規作成・改稿するスキル。「記事を書いて」「〜の比較記事を追加」「ガイド記事」「/guide配下のページ」「SEOコンテンツ」「カロリー比較の記事」など、たべなびの記事・コンテンツSEOに関わる依頼で必ず使用する。記事の実装手順（共有コンポーネント・メタデータ・JSON-LD）、YMYL表現ルール、数値検算ルール、新規記事の登録チェックリストを含む。記事の見た目調整やリライトの依頼でも参照する。
---

# たべなび SEO記事ライター

## 目的と北極星

ガイド記事は成長の主軸「検索/需要捕捉」の中核。北極星は**GSCインデックス済みページ数**。1記事ごとに「どの検索クエリを取るか」を決めてから書く（例:「ハンバーガー カロリー 比較」）。薄いページの量産はクロールバジェットの浪費になるため、1本ずつ濃く作る。

## 最初にやること

新規記事は**必ず基準記事をひな形にする**: `src/app/guide/hamburger-comparison/page.tsx`（2026-06-11作成・現行パターンの完成形）。これを読んでから書き始める。

装飾は共有コンポーネントが全て持っているので、**自前のTailwindクラスで見出しやカードを組まない**。コンポーネントのprops詳細は `src/components/guide/ArticleComponents.tsx` を直接読む。

## 記事の構成（hamburger-comparison準拠・この順番）

1. **JSON-LD**（Article型: headline / datePublished / dateModified / author=Organization「たべなび」/ mainEntityOfPage）
2. **ArticleHero**（title / subtitle / imageUrl=Unsplash / breadcrumb）
3. **ArticleLayout**（tocItems, currentSlug）で本文全体を包む — デスクトップのサイドバーTOC・関連記事・CTAを自動で出す
4. **AuthorityBadge** ＋ 最終更新日 ＋ **AffiliateDisclosure**（アフィリエイトを含むため必須）
5. **QuickAnswer** — AI Overview/強調スニペット対策。検索意図への即答を質問＋太字入りで冒頭に置く
6. 導入文 — **Marker**で核心数値をハイライトし、「読むと何が分かるか」を2-3文で
7. **H2セクション×5-8**（SectionHeading に id を渡す。tocItems と一致させる）
   - データ系: NutritionTable / ComparisonTable / RankingCard
   - アドバイス系: TipBox / WarningBox / NumberedList / CheckList
   - セクション間に ArticleImage（Unsplash）を適度に挿入
8. **CTABanner**（記事中盤＋末尾の2箇所）
9. **FAQSection**（items, slug — FAQ構造化データも出る）
10. **ArticleSummary** → **AuthorBio** → **UpdateHistory** → **ArticleFooter**（currentSlug）

## メタデータ

- 静的記事は `export const metadata: Metadata`（generateMetadata は動的ページのみ）
- **title**: `ターゲットKW｜ベネフィット【2026年最新】 | たべなび` — 【○年最新】は**末尾**に置く（先頭に置く旧ルールは廃止。KWを先頭に出すため）
- **alternates.canonical** 必須: `https://www.tabenavi.jp/guide/<slug>`
- **description**: 120字前後・ターゲットKWを自然に含め・具体的数値とベネフィットを入れる（例:「最大62kcal差」）
- **keywords** 配列＋ **openGraph**（title / description / url / type: "article"）

## デザイン

- カラーテーマは**水色（sky/cyan）**。orange系の装飾は旧仕様 — 使わない（ユーザー確認済みの決定事項）
- ページ背景は `bg-[#fdfdfd]`
- 栄養データの色分けはコンポーネント側が持つ（P=blue, F=amber, C=green）— 手動で再現しない

## YMYL・データ正確性ルール（最重要）

健康・栄養はYMYL領域。2026-06に全記事の断定表現を監査で一掃した経緯があるため:

- **健康効果を断定しない**。「痩せます」→「カロリーコントロールがしやすくなります」「〜が期待できます」等の可能性表現にする
- **数値は全てSupabase DB（menu_items）の実値で検算してから書く**。AIの記憶やWeb検索由来の数値をそのまま使わない（過去にAI提案数値の誤りが多発し、「DB検算で採否判定」が運用ルールとして確定している）
- 評価・レビュー・体験談・実績の**捏造は絶対にしない**（捏造aggregateRating・架空の声を全削除した監査の経緯あり。構造化データにも入れない）
- 注意書き「※価格・栄養成分は店舗・時期により異なる場合があります」を入れる
- **なか卯はDBに存在しない** — 記事・内部リンク・sitemapに含めるとsoft-404になるので出さない

## データ取得

チェーンのslug・名前は `src/lib/chains.ts`（CHAINS=32・GOALS=8）が単一の真実。sitemap・/chains配下も全てここを参照している。

```tsx
// チェーン別（inner joinで絞る）
const { data } = await supabase
  .from("menu_items")
  .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants!inner(name)")
  .eq("chain_restaurants.name", "マクドナルド")
  .order("calories", { ascending: true })
  .returns<MenuItem[]>();

// コンビニ横断
const { data } = await supabase
  .from("menu_items")
  .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants(name)")
  .eq("source_type", "convenience_store")
  .order("protein", { ascending: false })
  .returns<MenuItem[]>();
```

`.not("calories", "is", null)` でnull除外、調味料等のノイズは `カロリー下限50` で弾く（/chains/[slug]で実績ある対処）。

## 新規記事の登録チェックリスト（漏れると孤児ページになる）

1. `src/app/guide/<slug>/page.tsx` を作成
2. `src/lib/articles.ts` の RELATED_ARTICLES に追加（カテゴリを選ぶ — /guide一覧と関連記事レコメンドの出所）
3. `src/app/sitemap.ts` の guideSlugs に追加
4. 内部リンク: 関連する `/chains/[slug]` ハブと、テーマが近い既存記事の本文から最低1本ずつリンクを張る（孤立ページはインデックスされにくい）
5. `npm run build` で確認（Vercelはgit pushで自動デプロイ）

## 競合に勝つポイント

1. 静的カロリー表サイト → たべなびは**DB実値＋実用アドバイス**で差別化
2. 自社商品誘導メディア → たべなびは**チェーン横断の中立データ**
3. 一般論のジムブログ → たべなびは**具体的なPFC数値付き**
4. AI Overview時代への対応: QuickAnswer＋FAQSectionで「即答＋根拠」構造にする
5. CTAは自然に（アプリへの導線は「続きはアプリで」ではなく「全メニューを調べられる」という価値提示で）

## Unsplash写真URL（検証済み）

```
ハンバーガー: https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop
牛丼/丼: https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=400&fit=crop
サラダ: https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop
コーヒー: https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop
うどん: https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&h=400&fit=crop
寿司: https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop
定食: https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop
中華: https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop
筋トレ: https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&h=400&fit=crop
パスタ: https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&h=400&fit=crop
チキン: https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=400&fit=crop
```
