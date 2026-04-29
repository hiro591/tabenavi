# App Store Rejection #1 対応プレイブック

> 作成: 2026-04-29
> Submission ID: 4ad556d3-c2fd-4037-a73d-7df6fdb77247 への対応
> 全 5 issues の修正 + Apple reply + Build #3 再申請

---

## 修正済みコード変更 (今日完了分)

### Issue 4: UGC /timeline 無効化 ✅

| ファイル | 変更内容 |
|---|---|
| `src/app/timeline/page.tsx` | `redirect("/dashboard")` のみ (UGC UI 全削除) |
| `src/app/timeline/post/page.tsx` | `redirect("/dashboard")` のみ |
| `src/components/AppBottomNav.tsx` | "みんな" タブを "お気に入り" に置き換え |
| `src/app/dashboard/page.tsx` | "みんなの外食に投稿" Link 削除 |
| `src/app/record/page.tsx` | "みんなの外食に投稿" Link 削除 |

### Issue 5: 引用ページ追加 ✅

| ファイル | 変更内容 |
|---|---|
| `src/app/sources/page.tsx` (新規) | 33 チェーンの公式サイト URL 一覧 + 利用上の注意 |
| `src/app/profile/page.tsx` | "アプリ情報" セクション追加 (出典/プライバシー/規約/問い合わせ) |

### Issue 2: Sign in with Apple ボタン追加 ✅ (コード)

| ファイル | 変更内容 |
|---|---|
| `src/app/login/page.tsx` | "Apple でログイン" ボタン追加 (Google ボタン上に配置) |
| `src/app/signup/page.tsx` | "Apple で始める" ボタン追加 |

→ コード側は完了。**Apple Developer Portal + Supabase 設定**が user 作業として残る (下記 §A 参照)。

---

## §A. Sign in with Apple セットアップ (user 作業 1-2時間)

### Step 1: Apple Developer Portal で Service ID 設定

1. https://developer.apple.com/account → **Identifiers**
2. **+** → **Services IDs** → Continue
3. 入力:
   - Description: `tabenavi Sign in with Apple`
   - Identifier: `jp.tabenavi.app.signin` (Bundle ID と異なる文字列)
4. Continue → Register
5. 作成した Service ID をクリック → **Configure**
6. **Sign in with Apple** にチェック
7. Primary App ID: `jp.tabenavi.app` を選択
8. Domains and Subdomains:
   ```
   tabenavi.jp
   www.tabenavi.jp
   uimwiumssspujirsgvyq.supabase.co
   ```
   (実際の Supabase プロジェクト URL に置き換え)
9. Return URLs:
   ```
   https://uimwiumssspujirsgvyq.supabase.co/auth/v1/callback
   ```
10. Save → Continue → Save

### Step 2: Apple Developer Portal で Key 作成

1. **Keys** → **+** → Continue
2. Key Name: `tabenavi Apple Sign In Key`
3. **Sign in with Apple** にチェック
4. Configure → Primary App ID: `jp.tabenavi.app` → Save
5. Continue → Register
6. **Key ID** をメモ (例: `A1B2C3D4E5`)
7. **.p8 ファイルをダウンロード** (1回しかダウンロードできないので大切に保管)
8. **Team ID** を確認 (既知: `R6QR6GBLZB`)

### Step 3: Supabase Dashboard で Apple Provider 設定

1. https://supabase.com/dashboard → tabenavi project
2. **Authentication** → **Providers**
3. **Apple** を見つけて Toggle ON
4. 入力:
   - **Service ID**: `jp.tabenavi.app.signin` (Step 1 で作成した ID)
   - **Team ID**: `R6QR6GBLZB`
   - **Key ID**: Step 2 でメモした Key ID
   - **Private Key**: ダウンロードした .p8 ファイルの中身 (テキストとして開いてコピペ、`-----BEGIN PRIVATE KEY-----` から `-----END PRIVATE KEY-----` まで全部)
5. **Save**

### Step 4: Xcode で Capability 追加

1. Xcode → App プロジェクト → Signing & Capabilities
2. **+ Capability** → **Sign in with Apple** を追加
3. Status が緑 ✓ になることを確認

### Step 5: 動作確認 (Web)

1. Browser で `https://www.tabenavi.jp/login` を開く
2. **Apple でログイン** ボタンをクリック
3. Apple ID 入力画面が表示されることを確認
4. ログイン成功 → /dashboard にリダイレクト確認

### Step 6: 動作確認 (iOS Simulator)

1. Xcode で Simulator 起動
2. アプリ内で /login にアクセス
3. Apple Login ボタン → 動作確認

---

## §B. Apple Review への Reply 文案 (5 issues 全文)

### Issue 1: Guideline 2.1(b) - Information Needed への reply

```
Thank you for the review. I'd like to clarify our business model:

1. Who are the users that will use the paid features in the app?
   → Currently, there are no paid features in the app. The app is 100% free at launch.

2. Where can users purchase the features that can be accessed in the app?
   → There are no purchase points within the app. All features are accessible without payment.

3. What specific types of previously purchased features can a user access in the app?
   → None. There is no paid content in this version (1.0).

4. What paid content, subscriptions, or features are unlocked within the app that do not use In-App Purchase?
   → None. All current features are 100% free, including: menu search across 26 chains, food logging, weight tracking, PFC calculation, favorites, cheat day calculator, reminder notifications, account management.

5. How do users obtain an account? Do users have to pay a fee to create an account?
   → Account creation is free via email/password, Google OAuth, or Apple Sign In. No fee is required.

Note: The app description mentions a future "Premium" plan as a roadmap item. This is not yet implemented in version 1.0. When implemented in a future update (v1.1 or later), it will use Apple In-App Purchase strictly following Guideline 3.1.1. We will submit a separate review when Premium is added.

We have removed the "Premium plan coming soon" paragraph from the app description in this resubmission to avoid further confusion.
```

→ **重要**: App Store Connect のメタデータの description から「今後の予定: Premium プラン」段落を削除すること (下記 §C 参照)。

### Issue 4.8: Sign in with Apple 追加への reply

```
Thank you for the feedback. We have added Sign in with Apple as an equivalent login option in this resubmission (Build 1.0(3)).

Implementation details:
- Sign in with Apple button is now available on both /login and /signup pages
- The button is positioned ABOVE the existing Google OAuth button to give Apple Sign In equal or higher prominence
- Authentication is handled through Supabase Auth's Apple provider integration
- Sign in with Apple meets all the criteria specified in Guideline 4.8:
  ✅ Limits data collection to user's name and email address
  ✅ Allows users to keep email private (Apple's "Hide My Email" feature)
  ✅ Does not collect interactions for advertising purposes

Test instructions for App Review:
1. Launch the app
2. On the login screen, tap "Apple でログイン" (Apple Sign In button)
3. Complete the Sign in with Apple flow
4. Verify successful login and redirect to dashboard
```

### Issue 5.1.1(v): アカウント削除への reply

```
Thank you for highlighting this. The app already implements account deletion functionality, but I will provide a clearer demonstration:

Implementation:
- Location: Profile page (/profile) → "アカウント削除" section at the bottom
- Flow: User taps "アカウントを削除" → password confirmation → final confirmation checkbox → "削除を実行" button → all user data is permanently deleted

Data deleted (server-side via /api/account/delete):
- profiles
- food_logs
- weight_logs
- favorites
- cheat_days
- saved_combos
- post_likes
- post_comments
- public_posts
- share_events
- auth.users record itself

A screen recording demonstrating the complete account deletion flow is attached below.

[添付: account-deletion-demo.mov]

Test demo account:
Email: bets.sputter_0b@icloud.com
Password: Vitqig-hegbaj-povhi6
```

→ Screen recording 撮影手順は §D 参照。

### Issue 1.2: UGC moderation への reply

```
Thank you for the feedback. We have decided to disable the user-generated content (timeline) feature for this initial release (v1.0). Future versions (v1.1+) will reintroduce timeline with full moderation including:
- EULA agreement before UGC access
- Content filtering
- Report mechanism for objectionable content
- User block functionality
- 24-hour response commitment to reports

Changes in this resubmission (Build 1.0(3)):
✅ /timeline route now redirects to /dashboard (no UGC UI accessible)
✅ /timeline/post route now redirects to /dashboard
✅ "みんな" tab removed from bottom navigation
✅ "みんなの外食に投稿" links removed from dashboard and record pages
✅ No UGC content is accessible to users in this version

Test instructions:
- The app no longer exposes any UGC features
- Reviewer can verify no timeline tab in bottom navigation
- Direct URL navigation to /timeline redirects to /dashboard
```

### Issue 1.4.1: 引用追加への reply

```
Thank you for the feedback. We have added a dedicated citations page to the app:

Implementation in this resubmission (Build 1.0(3)):
- New page: /sources accessible from Profile → "アプリ情報" → "栄養データの出典"
- Lists all 33 restaurant chains whose nutrition data is referenced in the app
- Each chain links to its official website where nutrition information is published
- Includes prominent disclaimers:
  ・ Data may differ from actual values due to regional/seasonal variations
  ・ Users should verify with official sources for accurate information
  ・ App information is not medical advice; users with conditions should consult their physician

Test instructions:
1. Sign in with the demo account
2. Navigate to Profile (マイページ)
3. Find "栄養データの出典" in the "アプリ情報" section
4. Verify the citation page displays all 33 chains with their official URLs
5. Verify the disclaimer about data accuracy is visible
```

---

## §C. メタデータ description 修正 (Apple Connect 上で)

App Store Connect → 1.0 Prepare for Submission → Description フィールド:

**削除する段落** (Premium plan 言及部分):

```
■ 今後の予定

近日中に Premium プラン (月額) を追加予定:
- 月別・年別の詳細レポート
- 体重・PFC の長期トレンド分析
- お気に入りメニュー無制限保存
- 広告非表示

無料版でも基本機能は永続無料です。
```

→ この段落を完全削除 (Issue 1 reply で言及済み)

---

## §D. アカウント削除 Video 撮影手順

### 用意するもの
- 物理 iPhone (Simulator NG、Apple は実機録画を要求)
- iPhone と Mac を USB 接続済み
- App Store Connect の demo account 認証情報
- Sign in 完了済み (or 新規 account 作成済み) の状態

### 撮影手順

1. **iPhone で screen recording 設定**
   - Settings → Control Center → Screen Recording を Add
   - Control Center を開いて録画ボタン (赤丸) で録画開始

2. **撮影シーケンス** (約 60-90秒)

```
0-5s:   ホーム画面 → たべなびアプリアイコンをタップ → 起動
5-10s:  /login 画面表示 → Demo account でログイン
        Email: bets.sputter_0b@icloud.com
        Password: Vitqig-hegbaj-povhi6
10-15s: ログイン成功 → /dashboard 表示
15-20s: 下部ナビ "マイページ" タブをタップ → /profile 表示
20-25s: ページを下にスクロール → "アカウント削除" セクションを見せる
25-30s: "アカウントを削除" ボタンをタップ
30-40s: 確認ダイアログ → password 再入力
40-50s: 確認チェックボックスにチェック
50-60s: "削除を実行" ボタンをタップ
60-70s: 削除処理進行
70-80s: 完了画面 → ランディングページに戻る
80-90s: 削除されたことを確認 (再ログイン試行 → "アカウントが見つかりません")
```

3. **録画停止 → Photos アプリで保存確認**

4. **AirDrop or USB で Mac に転送**

5. **ファイル名を `account-deletion-demo.mov` にリネーム**

6. **App Store Connect で Reply に添付**:
   - Resolution Center → Reply → Attachment → 動画選択

### 動画品質要件 (Apple guidelines)
- 解像度: iPhone のネイティブ (自動で OK)
- 長さ: 60-180秒推奨
- ファイル形式: .mov, .mp4 (Apple は両方受付)
- ファイルサイズ: 50MB 以下推奨

---

## §E. Build #3 再 archive + upload 手順

### Step 1: 設定変更

```bash
# ios/App/App.xcodeproj/project.pbxproj
# CURRENT_PROJECT_VERSION = 2 → 3 に更新
```

私が実行します (sed or Edit で 2箇所修正)。

### Step 2: Capacitor sync

```bash
cd /Users/nishiokahiroki/tabenavi
npx cap sync ios
```

### Step 3: Xcode で Archive

1. Xcode 起動 (or 既に開いていれば最新 file 反映を待つ)
2. デバイス選択: **Any iOS Device (arm64)**
3. Product → Archive
4. 完了 → Organizer 自動表示

### Step 4: Distribute App

Organizer で:
1. Archive 1.0(3) を選択
2. Distribute App → App Store Connect → Upload
3. Default options のまま Next 連打
4. Upload → 5-15分 processing 待ち

### Step 5: App Store Connect で Build 紐付け

1. App Store Connect → My Apps → たべなび
2. **1.0 Prepare for Submission** ページ
3. Build セクション → 既存 1.0(2) を × で削除 → + で **1.0(3)** を追加
4. Description から Premium 段落削除 (§C 参照)
5. Save

### Step 6: Resolution Center で Reply

1. App Store Connect → Resolution Center
2. 5 issues それぞれに対応する reply を投稿:
   - Issue 1 (2.1(b)): §B Issue 1 文案
   - Issue 2 (4.8): §B Issue 4.8 文案
   - Issue 3 (5.1.1v): §B Issue 5.1.1(v) 文案 + video 添付
   - Issue 4 (1.2): §B Issue 1.2 文案
   - Issue 5 (1.4.1): §B Issue 1.4.1 文案

### Step 7: Submit for Review

1. Save 確認
2. **Add for Review** → Export Compliance: Yes/Yes → **Submit to App Review**
3. Status が **Waiting for Review** になれば 🎉

---

## §F. 想定タイムライン

| Day | アクション | 備考 |
|---|---|---|
| 4/29 (今日) | コード変更 + Sign in Apple Portal/Supabase 設定 + Build #3 + Reply 送信 | 5-9 時間作業 |
| 4/30 - 5/1 | 再 review (24-48時間) | Apple は同じ reviewer に当たる確率高い |
| 5/1 - 5/2 | 承認 or 再リジェクト | 1 round で 80-90% の確率で通る (data) |
| 承認後 | Manual Release で公開タイミング選択 | Phased Release: Day 1 で 1% → 7日で 100% |

---

## §G. 完了チェックリスト

### Code 変更 (完了済み)
- [x] /timeline → redirect to /dashboard
- [x] /timeline/post → redirect to /dashboard
- [x] AppBottomNav から timeline 削除
- [x] dashboard / record から timeline link 削除
- [x] /sources 新規ページ作成
- [x] profile に アプリ情報 セクション追加
- [x] login / signup に Apple Sign In ボタン追加

### User 作業 (要対応)
- [ ] Apple Developer Portal: Service ID + Key 作成
- [ ] Supabase: Apple provider 設定
- [ ] Xcode: Sign in with Apple capability 追加
- [ ] App Store Connect: Description から Premium 段落削除
- [ ] iPhone: Account deletion 動画録画
- [ ] Build 番号 2 → 3 update
- [ ] Re-archive + re-upload
- [ ] App Store Connect: Build 紐付け 1.0(3)
- [ ] Resolution Center: 5 issues に reply 送信
- [ ] Add for Review → Submit
