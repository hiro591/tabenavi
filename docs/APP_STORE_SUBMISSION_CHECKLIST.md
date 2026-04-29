# App Store Connect 提出 マスターチェックリスト

> Apple Developer 承認後、このチェックリストを上から順に消化すれば提出完了する設計。
> 全資材は本リポジトリ内に揃っており、外部依存ゼロ。
> 最終更新: 2026-04-25

---

## 🔴 ブロッカー (待機中)

- [ ] **Apple Developer Program 登録承認** — メール待ち（Task #38）
  - 完了後の最初の作業: App Store Connect で `jp.tabenavi.app` を新規アプリ登録

---

## 1. 提出物パッケージ概要

| 項目 | 状態 | 場所 |
|---|---|---|
| App ID / Bundle ID | ✅ 設定済 | `jp.tabenavi.app` (capacitor.config.ts) |
| アプリ名・サブタイトル・説明文 | ✅ 確定 | `docs/APP_STORE_SUBMISSION.md` §2-§7 |
| プロモーションテキスト | ✅ 2案準備 | `docs/APP_STORE_SUBMISSION.md` §4 |
| キーワード (100字) | ✅ 確定 | `docs/APP_STORE_SUBMISSION.md` §6 |
| サポートURL | ✅ | https://www.tabenavi.jp/contact |
| マーケティングURL | ✅ | https://www.tabenavi.jp |
| プライバシーポリシーURL | ✅ | https://www.tabenavi.jp/privacy |
| 利用規約URL | ✅ | https://www.tabenavi.jp/terms |
| App アイコン 1024×1024 | ✅ 生成済 | `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` |
| スクリーンショット 6.9" × 8枚 | ✅ 認証版で再合成済 | `marketing/app-store-screenshots/final/appstore-01〜08.png` |
| プライバシー栄養ラベル回答 | ✅ 設計済 | 本ファイル §5 |
| アカウント削除機能 | ✅ 実装済 | `/profile` → アカウント削除セクション |
| 審査用デモアカウント | ✅ | 本ファイル §6 |
| 審査用メモ (Reviewer Notes) | ✅ | 本ファイル §7 |
| 輸出規制宣言 | ✅ | Info.plist `ITSAppUsesNonExemptEncryption=false` |

---

## 2. App Store Connect 入力フィールド早見表

提出フォームを上から順に埋めるための、**コピペ可能な確定文字列**集。

### 基本情報
- **アプリ名**: `たべなび 外食ダイエット&カロリー記録` (21字)
- **サブタイトル**: `コンビニ・チェーン店のPFC管理` (16字)
- **プライマリカテゴリ**: ヘルスケア/フィットネス
- **セカンダリカテゴリ**: フード&ドリンク
- **コンテンツレーティング**: 4+
- **価格**: 無料
- **配信地域**: 日本のみ (Phase 1)

### 説明文・キーワード
すべて `docs/APP_STORE_SUBMISSION.md` §2-§7 にフォーマット済。下記から抜粋:

**プロモーションテキスト (170字以内)**:
```
外食しかしない社畜が、外食だけで13kg痩せるために作った栄養管理アプリ。コンビニ・松屋・サイゼ・マック等20チェーン500メニューのPFCを3タップで記録。今日の食事、迷わず選べる。
```

**キーワード (100字以内)**:
詳細は `APP_STORE_SUBMISSION.md` §6 参照。

---

## 3. 画像アセット最終一覧

### App Icon
| ファイル | サイズ | 用途 |
|---|---|---|
| `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` | 1024×1024 | App Store Connect "App Icon" フィールド |

### Screenshots — iPhone 6.9" Display (App Store Connect 必須サイズ)
全 8 枚、1320×2868 px、PNG、認証済み実画面ベース。

| # | ファイル | 訴求 |
|---|---|---|
| 01 | appstore-01.png | ダッシュボード — 外食しながら数字で管理 |
| 02 | appstore-02.png | 検索 — 26チェーン729メニュー |
| 03 | appstore-03.png | 記録 — チェーン店完全網羅 |
| 04 | appstore-04.png | 組み合わせ提案 — 残りカロリーから自動 |
| 05 | appstore-05.png | チートデイ — 計画的に楽しむ |
| 06 | appstore-06.png | おすすめ — 近くの高タンパク店 |
| 07 | appstore-07.png | 履歴 — 365日のPFC振り返り |
| 08 | appstore-08.png | みんなの外食 — コミュニティ |

> Apple は 6.9" の8枚さえあれば 6.5" / 5.5" は自動スケール表示するが、
> ストア掲載品質を最大化するなら 6.5" (1284×2778) も別途生成推奨。
> 現時点では 6.9" 8枚で提出可能。

---

## 4. プライバシー栄養ラベル (App Privacy) 回答

App Store Connect の「App Privacy」セクションで以下を回答する。

### 収集するデータ

| データ種類 | 用途 | リンク有無 | 追跡 |
|---|---|---|---|
| **メールアドレス** | アプリ機能/アカウント管理 | リンクあり | しない |
| **ユーザー名 (任意の表示名)** | アプリ機能 | リンクあり | しない |
| **健康/フィットネス情報** (体重、食事記録) | アプリ機能/分析 | リンクあり | しない |
| **位置情報 (おおよそ)** | アプリ機能 | リンクなし (端末内処理) | しない |
| **写真** (Camera/Library から選択) | アプリ機能 | リンクなし (端末内処理) | しない |
| **プッシュトークン** | アプリ機能 (リマインダー) | リンクあり | しない |

### サードパーティ
- **Supabase** (DB / Auth) — データ処理者
- **Vercel** (ホスティング) — データ処理者

### Tracking 宣言
- **App Tracking Transparency**: 該当なし (広告ID/SDK 未使用)

---

## 5. デモアカウント (審査チーム用)

### 提出フィールド: "Sign-in Information"

| 項目 | 値 |
|---|---|
| Email | `bets.sputter_0b@icloud.com` |
| Password | `Vitqig-hegbaj-povhi6` |

> ⚠️ 提出後、審査完了まで本アカウントの削除/パスワード変更を行わないこと。
> アカウント削除機能の動作確認後、別の審査用アカウントを残すことを推奨。

---

## 6. 審査用メモ (App Review Information → Notes)

下記をそのまま貼り付け。Apple 審査チームへのコンテキスト共有。

```
たべなび は、日本国内の外食チェーン店 (コンビニ含む) の栄養成分データを
3タップで検索・記録できるカロリー/PFC管理アプリです。

【主要機能】
1. 26チェーン729メニューの栄養成分データベース検索
2. 日次の食事記録 (タンパク質・脂質・炭水化物の自動集計)
3. 体重・チートデイの記録
4. プッシュ通知による食事リマインダー (8:00 / 21:00)
5. カメラ/フォトライブラリ連携による食事写真の保存
6. 位置情報による近隣チェーン店の検索
7. アカウント削除機能 (プロフィール画面 → アカウント削除)

【Guideline 4.2 (Minimum Functionality) について】
本アプリは Web ラッパーではなく、以下のネイティブ機能を実装しています:
- Push Notifications (毎日定時の食事記録リマインダー)
- Camera / Photo Library (食事写真の撮影・保存)
- Local Notifications (バックグラウンド時の通知)
これらは Web 版では提供できない iOS ネイティブ価値です。

【Guideline 5.1.1(v) アカウント削除】
ログイン後、プロフィール画面の最下部に「アカウントを削除」セクションがあり、
パスワード再認証 + 確認チェックを経て、すべてのユーザーデータを完全削除します。
削除対象: profiles, food_logs, weight_logs, favorites, cheat_days,
saved_combos, post_likes, post_comments, public_posts, share_events,
そして auth.users レコード本体。

【テスト用デモアカウント】
Email: bets.sputter_0b@icloud.com
Password: Vitqig-hegbaj-povhi6

ご質問があれば support@tabenavi.jp までお願いします。
```

---

## 7. ビルド & アーカイブ手順 (承認後)

詳細は `docs/IOS_BUILD_GUIDE.md` 参照。要約:

```bash
cd /Users/nishiokahiroki/tabenavi
npx cap sync ios

cd ios/App
xcodebuild -project App.xcodeproj -scheme App -configuration Release \
  -archivePath build/App.xcarchive archive

# Xcode Organizer から App Store Connect にアップロード
open build/App.xcarchive
```

承認直後にやること:
1. App Store Connect で新規アプリ作成 (`jp.tabenavi.app`)
2. 上記 archive をアップロード
3. ビルド処理完了 (5-15分) を待機
4. 本ファイル §2-§6 の入力フィールドをすべて埋める
5. スクショ8枚 + アイコンをアップロード
6. "Submit for Review" をクリック
7. 審査結果メールを待機 (通常 24-48 時間)

---

## 8. リジェクト時の即対応プレイブック

| 想定リジェクト理由 | 対応 |
|---|---|
| **4.2 Minimum Functionality** | 既に Push/Camera/Local Notif 実装済。Reviewer Notes でアピール。再提出時は機能のスクリーンキャストを Resolution Center に添付 |
| **5.1.1(v) アカウント削除** | プロフィール → アカウント削除 のフローを screenshot 付きで Resolution Center に投稿 |
| **3.1.1 アプリ内課金** | 該当なし (現状無料) |
| **2.5 デザイン** | スプラッシュスクリーン・iOS UI ガイドライン準拠 (Capacitor デフォルト) |
| **メタデータ却下** | プロモテキストは Apple 承認なしで変更可能なので、別案 (`APP_STORE_SUBMISSION.md` §4 第2弾) で再提出 |

---

## 9. 公開後 D+0 タスク

- [ ] LP (`src/app/page.tsx`) の iOS バナーリンクを `/signup` から App Store URL (`https://apps.apple.com/jp/app/...`) に差し替え
- [ ] X で公開告知 (テンプレ: `revenue-projects/post-launch-x-posts-week1.md` 参照)
- [ ] note 記事 (Brain) のプロフィール欄にも App Store リンク追記
- [ ] Google Search Console に新ページ ( app store landing ) のクロール依頼

---

## 10. 関連ドキュメント

- `docs/APP_STORE_SUBMISSION.md` — 入力テキスト全文 (アプリ名/説明文/キーワード/プロモテキスト)
- `docs/IOS_BUILD_GUIDE.md` — ビルド・サイン・アーカイブ手順
- `marketing/app-store-screenshots/final/` — スクショ8枚
- `ios/App/App/Assets.xcassets/AppIcon.appiconset/` — アイコン
- `src/app/privacy/page.tsx` — プライバシーポリシー本文
- `src/app/api/account/delete/route.ts` — アカウント削除 API
