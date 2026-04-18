# Stripe Premium 実装ブループリント

> 作成: 2026-04-18 (90日プラン Pillar 1)
> 設計者: Claude (feature-dev:code-architect)

## 既存コードの状態 (調査結果)

### Pricing.tsx の現在の構成
- `/src/components/Pricing.tsx`
- 月払い/年払いトグル: `isAnnual` ステート (`useState`)
- 月払い: ¥480、年払い: ¥332/月 (¥3,984/年) を表示済み
- プレミアムボタン: `<a href="/signup">` のただのリンク (決済未接続)
- 「1ヶ月無料で試す」ラベルが既にある → Stripe trial 30日で対応可能

### profiles テーブルの現在フィールド
```
id, target_calories, target_protein, target_fat, target_carbs,
display_name, created_at
```
サブスクリプション関連フィールドは**ゼロ**。完全追加が必要。

### 既存 API Routes パターン
- `export async function POST(request: Request)` 形式
- `NextResponse.json()` でレスポンス
- `process.env.*` で環境変数アクセス
- `SUPABASE_SERVICE_ROLE_KEY` は `.env.example` に記載済み

## 必要な変更ファイル一覧

### 新規作成
- `src/app/api/stripe/checkout/route.ts` — Checkout Session 作成
- `src/app/api/stripe/webhook/route.ts` — Webhook イベント処理
- `src/app/api/stripe/portal/route.ts` — Customer Portal セッション作成
- `src/lib/stripe.ts` — Stripe Node SDK シングルトン
- `src/app/legal/scta/page.tsx` — 特定商取引法ページ
- `supabase/migrations/002_add_subscription_fields.sql` — DB マイグレーション

### 変更
- `src/components/Pricing.tsx` — ボタンを Checkout 起動に置き換え
- `src/types/database.ts` — `Profile` 型に6フィールド追加
- `src/app/profile/page.tsx` — サブスクリプション状態 + Portal ボタン追加
- `.env.example` — Stripe 環境変数を追記
- フッター — 特商法リンク追加

## 実装フェーズ

### Phase 1: DB Schema Migration

```sql
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS is_premium        BOOLEAN     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT        UNIQUE,
  ADD COLUMN IF NOT EXISTS subscription_id    TEXT        UNIQUE,
  ADD COLUMN IF NOT EXISTS subscription_status TEXT,
  ADD COLUMN IF NOT EXISTS plan_type          TEXT,
  ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ;
```

### Phase 2: Stripe ライブラリと API Routes

**`src/lib/stripe.ts`**
```typescript
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});
```

**Checkout Route 処理フロー**
1. `supabase.auth.getUser()` → 未認証なら 401
2. `profiles` から `stripe_customer_id` を取得
3. なければ `stripe.customers.create()` して保存
4. `stripe.checkout.sessions.create()` でセッション生成
   - mode: "subscription"
   - subscription_data.trial_period_days: 30
   - success_url: `${origin}/dashboard?upgraded=1`
   - allow_promotion_codes: true

**Webhook 処理 (重要: `request.text()` でraw bodyを取得)**

| イベント | 処理内容 |
|---|---|
| `customer.subscription.created` | status, plan_type 更新、`is_premium = true` |
| `customer.subscription.updated` | 同上 |
| `customer.subscription.deleted` | `is_premium = false`, status = 'canceled' |
| `invoice.payment_failed` | status = 'past_due' (is_premium は維持) |

### Phase 3: Pricing.tsx の書き換え

ボタン状態分岐:
- ローディング中 → スピナー
- isPremium → 「プランを管理」ボタン (Portal API)
- isPremium=false かつ ログイン済 → 「1ヶ月無料で試す」(Checkout API)
- 未ログイン → `/login?redirect=/#pricing`

### Phase 4: ユーザー側 UI
- `/profile` にプレミアム会員バッジ + 次回更新日 + 契約管理ボタン
- `/dashboard?upgraded=1` で「ありがとう」トースト

### Phase 5: 特商法ページ
- `/legal/scta` に必要記載事項
- フッターにリンク追加

## ユーザー手動セットアップ手順

### 1. npm パッケージ
```bash
npm install stripe @stripe/stripe-js
```

### 2. Stripe ダッシュボード操作 (15分)
- アカウント作成 (https://stripe.com/jp)
- 商品カタログ → 「たべなび プレミアムプラン」
  - 価格1: ¥480/月 → Price ID取得
  - 価格2: ¥3,984/年 → Price ID取得
- Customer Portal 有効化 (解約・プラン変更ON)
- Webhook 登録 (本番URL): `https://tabenavi.jp/api/stripe/webhook`
  - イベント: subscription.created, .updated, .deleted, invoice.payment_failed

### 3. 環境変数 (`.env.local`)
```
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_PRICE_ID_MONTHLY=price_xxxxx
STRIPE_PRICE_ID_ANNUAL=price_yyyyy
```

### 4. Supabase マイグレーション
```bash
# SupabaseダッシュボードのSQL Editor で 002_add_subscription_fields.sql を実行
```

### 5. ローカルテスト
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
# 別ターミナル
npm run dev
# テストカード: 4242 4242 4242 4242
```

## 想定工数
- 私(Claude) 実装: 3-5時間
- ユーザー手作業 (Stripe + env): 20-30分
- ローカルテスト: 30分

## 重要な注意点

1. **Webhook ボディパース**: `request.text()` 必須。`request.json()` だと署名検証失敗
2. **年払い**: MVPは月払いのみ先行、UIの年払いトグルは「近日公開」が安全
3. **トライアル**: `trial_period_days: 30` 設定、コピーは「トライアル期間中は請求なし」に修正
4. **RLS**: Webhook は service_role キーでバイパス。NEXT_PUBLIC_プレフィックス絶対NG
5. **is_premium フラグ**: past_due も is_premium=true 維持 (Stripe デフォルトと一致)
6. **特商法**: 個人開発者は「請求があった場合に開示」可
