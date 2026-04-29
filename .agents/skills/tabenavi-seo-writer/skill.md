# たべなび SEO記事ライター

## 概要
たべなびの外食栄養ガイド記事を、Google検索で上位表示されるクオリティで作成するためのスキル。

## 記事作成ルール

### SEOタイトル
- 【2026年最新】を先頭に付ける
- ターゲットキーワードを含める
- 30-40文字以内
- 「｜」で区切ってサブタイトル追加

### メタディスクリプション
- 120文字以内
- ターゲットキーワードを自然に含める
- ユーザーのベネフィットを明記

### 記事構造
1. ヒーローセクション（グラデーション背景 + Unsplash食べ物写真）
2. 目次（アンカーリンク付き）
3. H2セクション×5-8本（各セクションにid属性、scroll-mt-20）
4. H2の装飾: 左ボーダー4px orange-400 + bg-orange-50/50 + px-4 py-3
5. セクション間にUnsplash写真を挿入
6. 栄養データは色分けカード（Cal=orange, P=blue, F=amber, C=green）
7. Tipボックス（実用的なアドバイス）
8. CTA バナー（記事中盤 + 末尾）
9. 関連記事リンク
10. まとめセクション

### デザイン基準
- max-w-3xl mx-auto
- 本文: text-base sm:text-lg, leading-7, text-gray-700
- H2: text-xl sm:text-2xl font-bold text-gray-900
- H3: text-lg font-bold text-gray-800
- セクション間隔: py-10 or mb-12
- カード: bg-white rounded-xl border border-gray-100 shadow-sm p-5
- 栄養ピル: inline-flex px-2.5 py-1 rounded-full text-xs font-bold
  - カロリー: bg-orange-100 text-orange-700
  - タンパク質: bg-blue-100 text-blue-700
  - 脂質: bg-amber-100 text-amber-700
  - 炭水化物: bg-green-100 text-green-700
  - 価格: bg-gray-100 text-gray-700

### Unsplash写真URL（検証済み）
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
ダイエット食: https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop
パスタ: https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&h=400&fit=crop
チキン: https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=400&fit=crop
```

### 技術仕様
- Next.js App Router サーバーコンポーネント
- Supabaseから栄養データを動的取得
- generateMetadata でSEOメタデータ
- JSON-LD構造化データ（Article型）
- 内部リンク: /guide/[chain], /signup
- 注意書き: ※価格・栄養成分は店舗により異なる場合があります

### 栄養データベースのクエリパターン
```tsx
// チェーン別
const { data } = await supabase
  .from("menu_items")
  .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants!inner(name)")
  .eq("chain_restaurants.name", "マクドナルド")
  .order("calories", { ascending: true });

// コンビニ全体
const { data } = await supabase
  .from("menu_items")
  .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants(name)")
  .eq("source_type", "convenience_store")
  .order("protein", { ascending: false });

// 低脂質メニュー
const { data } = await supabase
  .from("menu_items")
  .select("...")
  .lte("fat", 15)
  .gt("calories", 100)
  .order("fat", { ascending: true });
```

### 競合に勝つためのポイント
1. tokushita.net: 静的カロリー表のみ → たべなびは動的データ + 実用的アドバイス
2. ep.kinnikushokudo.jp: 自社商品誘導 → たべなびはチェーン横断の中立データ
3. ジムブログ: 一般的なアドバイス → たべなびは具体的なPFC数値付き
4. 全記事にたべなびアプリへの自然なCTA導線を設置
