# たべなび アフィリエイト収益化セットアップ手順書

> **目的**: 既存のSEO記事をアフィリエイト収益化し、月¥10,000〜¥100,000の継続収益を作る
> **作業時間**: 初回セットアップ 約1〜2時間（うちユーザー作業 約30分）
> **コスト**: ¥0（全プラットフォーム無料）

---

## 0. 何が実装済みか

| 項目 | 状態 | 場所 |
|---|---|---|
| 商品DBファイル | ✅実装済み | `src/data/affiliateProducts.ts` |
| アフィリ用Reactコンポーネント | ✅実装済み | `src/components/guide/AffiliateComponents.tsx` |
| 広告開示ページ | ✅実装済み | `src/app/disclosure/page.tsx` (`/disclosure`で公開) |
| 主要5記事への統合 | ✅実装済み | protein-cost-ranking, conveni-protein, muscle-eating-out, low-carb-eating-out, mcdonalds-diet |
| GA4イベント計測 | ✅実装済み | `affiliate_click` イベントが自動送信 |
| ステマ規制対応(PR表記) | ✅実装済み | 全カードにPRバッジ自動付与 |
| **アフィリリンク自体** | ⚠️ 直リンクは未設定だが**検索URLフォールバック稼働中** | ENV設定で全18商品が即commission化 (本ガイド §0) |

**新仕様 (2026-04-25 アップデート)**:
未設定商品は **Amazon/楽天 検索URLにフォールバック** して全カードが表示されます。
ボタンは「Amazonで探す」「楽天で探す」と出て、商品名で検索するページに遷移します。
→ **直リンク未設定でもユーザー体験は壊れない**。
→ ENV変数を設定すれば、検索URLにアフィリタグが付与されて commission 計上が始まる。

---

## STEP 0: 5分でアフィリ全18商品を稼働化 (ENV設定だけ・最優先)

**今すぐやるべきこと**: アカウント審査の前後どちらでもOK。ENV設定するだけで全18商品の検索リンクがcommission計上対象になる。

### Amazon
1. Amazonアソシエイト (https://affiliate.amazon.co.jp/) に登録 → トラッキングID取得 (例: `tabenavi-22`)
2. プロジェクトルートの `.env.local` (なければ作成) に追加:
   ```bash
   NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=tabenavi-22
   ```
3. Vercel ダッシュボードで同じ環境変数を Production にも追加 → Redeploy

### 楽天
1. 楽天アフィリエイト (https://affiliate.rakuten.co.jp/) に登録 → アフィリIDを取得 (例: `19xxxxxx.xxxxxxxx.19xxxxxx.xxxxxxxx`)
2. `.env.local` に追加:
   ```bash
   NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID=19xxxxxx.xxxxxxxx.19xxxxxx.xxxxxxxx
   ```
3. Vercel に同じ env を追加 → Redeploy

### 確認方法
記事ページ (例: `/guide/protein-cost-ranking`) を開いて「Amazonで探す」をクリック → 開いた先のURLに `tag=tabenavi-22` が含まれていればOK。

> **これだけで全18商品が稼働化されます**。STEP 1-4 (もしも・直リンク差し替え) は CVR を上げる**追加施策**であり、必須ではない。

---

## STEP 1: もしもアフィリエイトに登録 (15分・任意)

> もしもは個別商品の直リンク (検索より高 CVR) を生成できる。STEP 0 の検索URLでも commission 発生するが、頻出商品は直リンクに昇格させると平均 CVR が +30〜80% になる。

**なぜ「もしも」か?**
- 1回の登録でAmazon・楽天・Yahoo!の3社のアフィリリンクを生成可能
- W報酬制度で通常より約10%多く報酬がもらえる
- 国内の個人運営サイトに最も寛容（審査が緩め）
- 初心者でも振込が¥1,000から可能

### 手順

1. https://af.moshimo.com/ にアクセス
2. 「無料会員登録」をクリック
3. メールアドレス・パスワードを入力
4. メール内リンクで認証
5. プロフィール入力で**サイトURLに `https://www.tabenavi.jp` を登録**
6. サイト紹介文に以下のような説明を記入:
   ```
   外食専門の栄養管理Webアプリ「たべなび」を運営しています。
   主要チェーン店・コンビニのカロリー・PFCを記録できるサービスで、
   ガイド記事を50本以上公開中。月間PVは現状◯◯PV(運営◯ヶ月)。
   ダイエット・筋トレ層が中心読者。
   ```
7. 振込先口座を登録（楽天銀行・ゆうちょ等）

### サイト審査

- 通常 1〜3営業日で審査結果がメール通知
- 審査落ちの場合: 記事数を増やす、独自ドメイン化、お問い合わせページの設置などが対策

### 審査通過後にやること

サイト登録後、以下の3提携プログラムに**全て申請**してください:

| 提携先 | 種類 | 報酬目安 |
|---|---|---|
| **Amazon.co.jp** (もしも経由) | 物販 | 0.5〜10% |
| **楽天市場** (もしも経由) | 物販 | 1〜4% |
| **マイプロテイン** | 物販 | 8〜10% |
| **MORE THAN PROTEIN (ULTORA)** (あれば) | 物販 | 5〜10% |
| **チョコザップ** | サービス | ¥1,000〜 |

→ 「プロモーション検索」で各社名を検索 → 「提携申請」ボタン

---

## STEP 2: Amazonアソシエイト直接登録 (任意・10分)

もしも経由のAmazon報酬は0.5〜3%が中心ですが、Amazonアソシエイト直接登録の方が高単価カテゴリで有利になることがあります。両方持つのが理想。

### 手順
1. https://affiliate.amazon.co.jp/ にアクセス
2. 既存のAmazonアカウントでログイン
3. アカウント情報入力（個人/事業者選択）
4. **重要**: ストア情報で `https://www.tabenavi.jp` を登録
5. 紹介方法説明: たべなびの記事中で関連商品を紹介する旨を記載
6. 銀行口座 or Amazonギフト券受取を選択

### Amazonアソシエイトの厳しい審査ルール

- 登録後 **180日以内に3件以上の売上** を出す必要あり
- 達成できないとアカウント停止 → 再申請が必要
- たべなびには十分な審査通過実績があるはず

→ もしAmazon審査が通らない場合は**もしも経由のAmazon**を使う

---

## STEP 3: 楽天アフィリエイト直接登録 (5分・推奨)

楽天は審査がほぼなく即日利用可能です。楽天市場経由の購入は楽天ポイント還元目当ての層が買うので、コンバージョンが高い傾向があります。

### 手順
1. https://affiliate.rakuten.co.jp/ にアクセス
2. 楽天会員IDでログイン
3. 利用規約に同意 → 即日利用開始可能
4. アフィリIDが自動発行される

---

## STEP 4: アフィリリンクを差し替え (作業時間: 30〜60分)

`src/data/affiliateProducts.ts` を開きます。

### 各商品ごとに以下を実行

例: `myprotein-impact` (MYPROTEIN ホエイプロテイン)

1. **もしもアフィリエイトの管理画面にログイン**
2. **「商品リンクを作る」**を開く
3. **検索窓にAmazon商品ページのURL or 商品名「マイプロテイン Impact ホエイ」を入力**
4. 該当商品を選択 → リンクを生成
5. 表示された **HTML** から `href="..."` のURLをコピー
6. `src/data/affiliateProducts.ts` の該当商品の `amazonUrl` の値（`YOUR_AFFILIATE_LINK_HERE`部分）と置き換え

```typescript
// 修正前
{
  id: "myprotein-impact",
  ...
  amazonUrl: "YOUR_AFFILIATE_LINK_HERE",
  rakutenUrl: "YOUR_AFFILIATE_LINK_HERE",
},

// 修正後 (例)
{
  id: "myprotein-impact",
  ...
  amazonUrl: "https://af.moshimo.com/af/c/click?a_id=XXXXXXX&p_id=YYY&pl_id=ZZZ&pc_id=WWW&url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB07XXXXXX",
  rakutenUrl: "https://hb.afl.rakuten.co.jp/hgc/g00000000.XXXXXXXX/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F...",
},
```

### 商品リスト (全13商品 — 全て差し替え必須)

- [ ] `ultora-whey` — ULTORA ホエイプロテイン
- [ ] `myprotein-impact` — MYPROTEIN Impactホエイ
- [ ] `savas-shape` — ザバス シェイプ＆ビューティ
- [ ] `inbar-protein` — in バー プロテイン
- [ ] `onebar-protein` — 1本満足バー プロテイン
- [ ] `base-food-bread` — BASE BREAD
- [ ] `low-carb-noodle` — 紀文 糖質0g麺
- [ ] `tanita-scale` — タニタ デジタルスケール
- [ ] `myprotein-bcaa` — MYPROTEIN BCAA
- [ ] `dhc-multivitamin` — DHC マルチビタミン
- [ ] `salada-chicken-pack` — サラダチキン まとめ買い
- [ ] `tuna-can` — いなば ツナ缶

> **コツ**: 1商品あたり Amazon URL + 楽天URL の2つを生成 → 最低でも片方が埋まっていればボタン1つ出る。両方あれば「Amazon/楽天」両方表示。

---

## STEP 5: 商品画像の用意 (任意・30分)

現状商品画像はプレースホルダー(`/affiliate/xxx.jpg`)を参照しており、画像が見つからない場合は自動的にショッピングバッグアイコンが表示されます（壊れたUIにはなりません）。

画像を用意する場合:

1. 各商品のAmazon商品ページから商品画像をダウンロード（権利的にOK・もしも・Amazonの規約で許可）
2. 240x240px程度に圧縮（[Squoosh](https://squoosh.app/)等で）
3. `~/tabenavi/public/affiliate/` ディレクトリに配置
4. ファイル名は `affiliateProducts.ts` の `imageUrl` と一致させる
   - 例: `imageUrl: "/affiliate/myprotein.jpg"` → `public/affiliate/myprotein.jpg`

**もしくは**: Amazon商品のCDN URLを直接指定（要規約確認）:
```typescript
imageUrl: "https://m.media-amazon.com/images/I/XXXXXXXX.jpg"
```

---

## STEP 6: ローカルでテスト (5分)

```bash
cd ~/tabenavi
npm run dev
```

→ http://localhost:3000/guide/protein-cost-ranking を開く

確認ポイント:
- [ ] 記事冒頭に「※本記事には広告が含まれます…」が表示されている
- [ ] プロテインパウダー商品カードが表示されている
- [ ] 「Amazonで見る」「楽天で見る」ボタンがクリックできる(差し替え後)
- [ ] クリックすると新タブでAmazon/楽天の商品ページが開く
- [ ] URLにあなたのアフィリIDが含まれている

dev画面右下に `Affiliate: X/13 configured` という小さい黒いラベルが表示されます（本番では非表示）。

---

## STEP 7: 本番デプロイ

```bash
cd ~/tabenavi
git add .
git commit -m "アフィリエイト収益化レイヤーを追加 (5記事)"
git push
```

→ Vercelが自動デプロイ（数分で反映）

---

## STEP 8: GA4でクリック計測を確認

1. GA4 (https://analytics.google.com/) にログイン
2. たべなびのプロパティを選択
3. レポート → リアルタイム → イベント
4. アフィリリンクを自分でクリック → `affiliate_click` イベントが表示されるはず
5. パラメータに `product_id`, `network`, `page_path` が含まれる

### 重要KPI (毎週確認)

| 指標 | 目標 (1ヶ月後) | 取得方法 |
|---|---|---|
| 記事PV合計 | 2,000+/月 | GA4 ページレポート |
| affiliate_click | 100+/月 (CTR 5%) | GA4 イベントレポート |
| 購入数 | 3+/月 (CVR 3%) | もしも管理画面 |
| 売上 | ¥3,000+/月 | もしも + Amazon |

---

## STEP 9: 売上が立ち始めたら…

### 商品DBの拡張
- 売れ筋を分析 → 同カテゴリで類似商品を追加
- 季節商品（夏: 冷却タオル、冬: ホットドリンク）を追加

### 記事拡張
- 残り45記事へのアフィリ統合（1記事あたり10分程度）
- 各チェーン店記事（yoshinoya-diet, sukiya-diet等）には「家でも食べたい人向けの牛丼の素」等を提案

### 上位レイヤー
- プレミアム会員機能（月¥480 → Stripe）の本格実装
- 公式LINEアカウント開設 → セール情報通知

---

## トラブルシューティング

### Q. 商品カードが表示されない
- `affiliateProducts.ts` の商品idと記事の `productId` プロパティが一致しているか確認

### Q. ボタンが「Amazonで探す」「楽天で探す」になっている
- → 直リンク未設定で検索URLにフォールバック中。これは正常。
- → 完全 commission化したい場合は STEP 0 の ENV変数 (`NEXT_PUBLIC_AMAZON_AFFILIATE_TAG`, `NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID`) を設定。
- → 該当商品のCVRをさらに上げたい場合は、もしも経由で商品個別の直リンクを取得して `affiliateProducts.ts` の該当 `amazonUrl` / `rakutenUrl` を上書き。

### Q. Amazonアソシエイト審査に落ちた
- → もしも経由のAmazonリンクで運用してください（同等の機能）

### Q. もしもアフィリエイト審査に落ちた
- 記事の質を上げる（既にtabenaviは充実しているので通るはず）
- お問い合わせページ・プライバシーポリシー・運営者情報を充実させる
- 再申請まで2週間程度待つ

---

## 法令遵守チェックリスト

- [x] ステマ規制対応 (PR表記) — 自動付与済み
- [x] 広告開示ページ — `/disclosure` に設置済み
- [x] rel="sponsored nofollow" 属性 — コンポーネントに設定済み
- [ ] 薬機法に抵触する表現がないか — 「痩せる」「治る」等の断定表現は避ける
- [ ] 景表法の優良誤認・有利誤認に該当する表現がないか — 過度な効果訴求NG

---

## 想定収益シミュレーション

### 楽観シナリオ (PV増加が順調)
- 月3,000PV、CTR 5%、CVR 3%、平均報酬¥200
- → 月3,000 × 5% × 3% = 4.5件 = **月¥900**

### 現実シナリオ (1〜2ヶ月後)
- 月10,000PV、CTR 4%、CVR 2.5%、平均報酬¥300
- → 月10,000 × 4% × 2.5% = 10件 = **月¥3,000**

### 目標シナリオ (3〜6ヶ月後)
- 月50,000PV、CTR 4%、CVR 3%、平均報酬¥500
- → 月50,000 × 4% × 3% = 60件 = **月¥30,000**

### 大成功シナリオ (6〜12ヶ月後)
- 月200,000PV、CTR 5%、CVR 3%、平均報酬¥600
- → 月200,000 × 5% × 3% = 300件 = **月¥180,000**

> **正直な見方**: 1日¥10,000(月¥30万)に到達するにはPV月50万が目安。SEOで半年〜1年の継続が必要。30日達成は現実的でない、が**月¥3,000程度の初収益**は到達可能性が高い。

---

最終更新: 2026-04-18
