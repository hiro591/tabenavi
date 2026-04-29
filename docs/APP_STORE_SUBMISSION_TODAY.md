# App Store Submission — TODAY 実行プレイブック

> 作成: 2026-04-28
> Apple Developer Program 承認直後の即日 submit 用
> **目標: 今日 18:00 までに "Waiting for Review" 状態に**

---

## 全体タイムライン (所要 60-90分)

| Phase | 所要 | 場所 | 完了条件 |
|---|---|---|---|
| **Phase 1**: Xcode Signing 設定 | 5分 | Xcode | Team 選択完了、Capabilities 緑色チェック |
| **Phase 2**: Archive 作成 | 10-20分 | Xcode | Organizer に Archive 表示 |
| **Phase 3**: App Store Connect Upload | 5-15分 | Xcode → ASC | "Processing" → "Ready to Submit" |
| **Phase 4**: ASC アプリ登録 | 5分 | ASC Web | App ページが作られる |
| **Phase 5**: メタデータ入力 | 20-30分 | ASC Web | 全フィールド入力完了 |
| **Phase 6**: スクショ + Build 紐付け | 5-10分 | ASC Web | 全 8 枚 + Build 1.0 (1) 紐付け |
| **Phase 7**: Submit for Review | 1分 | ASC Web | "Waiting for Review" 表示 |

---

## Phase 1: Xcode Signing 設定 (5分)

### 1-1. Xcode 起動

```bash
npx cap open ios
```

### 1-2. プロジェクト設定パネルを開く

1. 左ナビ最上部の **App (青いプロジェクトアイコン)** をクリック
2. 中央の TARGETS 欄から **App** を選択
3. 上部タブから **Signing & Capabilities** をクリック

### 1-3. Team 選択

- **Signing** セクション → **Team** ドロップダウンをクリック
- 承認された Apple Developer アカウント (個人名) を選択
- 自動で以下が生成される:
  - `App.entitlements` ファイル
  - Provisioning Profile (背景で Apple サーバーから取得)
- 「Status」が緑のチェックマークになることを確認

### 1-4. Bundle Identifier 確認

- **Bundle Identifier** が `jp.tabenavi.app` になっていることを確認
- 違う場合は手動で修正

### 1-5. Capabilities 確認

以下が **Signing & Capabilities** 画面下部に表示されているか:

- [ ] **Push Notifications**
- [ ] **Background Modes** → ☑ Remote notifications

無い場合: 上部 **+ Capability** ボタン → 検索して追加

### 1-6. Build/Run でシミュレータ動作確認 (任意 2分)

- 上部デバイス選択 → **iPhone 17 Pro** など
- ▶ Run ボタン
- アプリ起動 → スプラッシュ → ログイン画面まで進めばOK
- ⏹ Stop で停止

---

## Phase 2: Archive 作成 (10-20分)

### 2-1. デバイス選択を Archive 用に切替

Xcode 上部のデバイス選択 (▶ Run の左側) → **Any iOS Device (arm64)** を選択

> ⚠️ シミュレータが選択されていると Archive メニューが灰色になる

### 2-2. Archive 実行

メニューバー → **Product** → **Archive**

ビルドが始まる (5-15分)。進捗は Xcode 右上のステータスバーで確認。

### 2-3. Archive 完了 → Organizer

- ビルド成功で自動的に **Organizer** ウィンドウが開く
- 左側に「App」プロジェクト、右側に Archive 一覧
- 最新の Archive (今日の日付・1.0(1)) を選択

### トラブル対応

| エラー | 対応 |
|---|---|
| `No account for team "..."` | Phase 1-3 の Team 選択をやり直す |
| `Failed to register bundle identifier` | Apple Developer Portal で `jp.tabenavi.app` が他のチームに登録済みの可能性。Team 確認 |
| `Provisioning profile doesn't include aps-environment` | Capabilities → Push Notifications を一度削除→再追加 |
| `Code signing is required` | Signing → "Automatically manage signing" を ON |
| `Asset validation failed` | アイコン透過チェック → `AppIcon-512@2x.png` 確認 (透過なし) |

---

## Phase 3: App Store Connect Upload (5-15分)

### 3-1. Distribute App

Organizer 画面で:

1. 右上 **Distribute App** ボタン
2. **App Store Connect** を選択 → Next
3. **Upload** を選択 → Next
4. すべてデフォルトのまま Next を連打:
   - Distribution options: Strip Swift symbols ON, Upload bitcode (推奨), Manage Version and Build Number (Xcode に任せる)
   - Re-sign: Automatically manage signing
5. **Upload** ボタン
6. アップロード進捗バー (1-5分)
7. 完了 → "Upload Successful" → Done

### 3-2. App Store Connect で Build 処理待ち

App Store Connect 側で 5-15 分の "Processing" 待機:
- https://appstoreconnect.apple.com/ → My Apps → (まだアプリ無いので) TestFlight → Builds に表示
- Status が "Processing" → "Ready to Submit" に変わるまで待つ
- メールで「The build [...] is now available」通知が来る

> この待機中に Phase 4-5 を並行で進めると効率的

---

## Phase 4: App Store Connect 新規アプリ作成 (5分)

### 4-1. アプリ作成画面へ

1. https://appstoreconnect.apple.com/ → My Apps
2. 左上 **+** → **New App**

### 4-2. 基本情報入力

| フィールド | 入力値 |
|---|---|
| Platforms | ☑ iOS |
| Name | `たべなび 外食ダイエット&カロリー記録` |
| Primary Language | Japanese |
| Bundle ID | `jp.tabenavi.app` (ドロップダウンに既に表示) |
| SKU | `TABENAVI-001` |
| User Access | Full Access |

→ **Create** ボタン

---

## Phase 5: メタデータ入力 (20-30分)

App ページが開いたら、左ナビから順番に埋める。

### 5-1. App Information

左ナビ → **App Information**

| フィールド | 入力値 |
|---|---|
| Subtitle | `コンビニ・チェーン店のPFC管理` |
| Privacy Policy URL | `https://www.tabenavi.jp/privacy` |
| Category Primary | Health & Fitness |
| Category Secondary | Food & Drink |
| Content Rights | "Does your app contain, display, or access third-party content?" → **No** |
| Age Rating | **Edit** → 全項目「None」、「Medical/Treatment Information」のみ「Infrequent/Mild」 → Done |

→ **Save** (右上)

### 5-2. Pricing and Availability

左ナビ → **Pricing and Availability**

| フィールド | 入力値 |
|---|---|
| Price | Free |
| Availability | Japan のみ (Phase 1) |
| App Store Distribution | Available |

→ **Save**

### 5-3. App Privacy

左ナビ → **App Privacy**

1. **Data Collection** → "Yes, we collect data..." を選択
2. 以下のデータタイプを追加 (各 + Add Data Type):

| Data Type | Used for | Linked to User | Tracking |
|---|---|---|---|
| Email Address | App Functionality, Account Management | Yes | No |
| Name | App Functionality | Yes | No |
| Health & Fitness | App Functionality, Analytics | Yes | No |
| Photos | App Functionality | No (端末内) | No |
| Coarse Location | App Functionality | No (端末内) | No |
| Push Token | App Functionality | Yes | No |

3. → **Publish** (上部)

### 5-4. Version 1.0 (左ナビ → "1.0 Prepare for Submission")

#### Promotional Text (170字)
```
外食しかしない社畜が、外食だけで13kg痩せるために作った栄養管理アプリ。コンビニ・松屋・サイゼ・マック等20チェーン500メニューのPFCを3タップで記録。今日の食事、迷わず選べる。
```

#### Description (4,000字)
→ `docs/APP_STORE_SUBMISSION.md` §5 をそのままコピペ

#### Keywords (100字)
```
外食,ダイエット,カロリー計算,栄養管理,PFC,糖質,コンビニ,松屋,サイゼ,牛丼,体重,記録,筋トレ,健康
```

#### Support URL
```
https://www.tabenavi.jp/contact
```

#### Marketing URL (任意)
```
https://www.tabenavi.jp
```

#### Version
`1.0`

#### Copyright
```
2026 たべなび
```

#### Routing App Coverage File
→ skip (位置情報ベースナビゲーションアプリではないので不要)

---

## Phase 6: Screenshots + Build 紐付け (5-10分)

### 6-1. Screenshots アップロード

Version ページ内 **iPhone 6.9" Display** セクション:

1. **Drag and Drop** エリアに以下 8 枚を順番にドロップ:
   - `marketing/app-store-screenshots/final/appstore-01.png`
   - 〜
   - `marketing/app-store-screenshots/final/appstore-08.png`
2. アップロード完了確認 (各サムネイル表示)

> 6.5" / 5.5" は Apple 側で 6.9" から自動スケール表示されるため不要

### 6-2. Build 紐付け

Version ページ **Build** セクション:

1. **+** ボタン (Add Build) → Phase 3 でアップロードされた Build (1.0 (1)) を選択
2. **Done**

> Build が表示されない場合: Phase 3 の Processing がまだ完了していない。5-15 分待ってリロード

---

## Phase 7: App Review Information + Submit (5分)

### 7-1. App Review Information

Version ページ **App Review Information** セクション:

#### Sign-in Information
☑ Sign-in required

| Email | Password |
|---|---|
| `bets.sputter_0b@icloud.com` | `Vitqig-hegbaj-povhi6` |

#### Notes
→ `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §6 の Reviewer Notes をそのまま貼り付け

#### Contact Information
| First Name | Last Name | Phone | Email |
|---|---|---|---|
| (実名) | (実名) | (連絡可能な番号) | `tabenavi.app@gmail.com` |

### 7-2. Version Release

**Version Release** セクション:

- ☑ Manually release this version (審査通過後、自分のタイミングで公開)
- ☑ Phased Release for Automatic Updates: ON 推奨

### 7-3. 最終 Submit

1. 右上 **Save** で全保存
2. 右上 **Add for Review** ボタン
3. Export Compliance ダイアログ:
   - "Does your app use encryption?" → **Yes** (HTTPS は暗号化通信に該当)
   - "Does your app qualify for any of the exemptions...?" → **Yes** (HTTPS only は exempt)
   - → Save
4. **Submit to App Review** ボタン

→ Status が **Waiting for Review** になれば完了 ✅

---

## 提出完了後

### 監視
- App Store Connect → My Apps → たべなび → App Store タブで status 確認
- Email 通知:
  - "We're reviewing your app" (審査開始、24-48h 以内)
  - "Your app status has changed to In Review" (審査中)
  - "Your app status has changed to Pending Developer Release" (承認 = 公開待ち) 🎉
  - "Your app has been rejected" (リジェクト → Resolution Center で対応)

### 待機時間
- 通常 24-48 時間 (新規アプリは 3-7 日かかる場合あり)

### リジェクトされた場合
→ `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §8 「リジェクト時の即対応プレイブック」参照

### 承認されたら
1. App Store Connect で **Release This Version** ボタンクリック
2. Phased Release が始まる (Day 1: 1% → 7日で 100%)
3. `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §9 の D+0 タスク実行:
   - LP の iOS バナーリンク差し替え (`/signup` → App Store URL)
   - X (ヒロアカウント + Vibe Shipped 両方) で告知
   - note 記事に App Store リンク追記

---

## クイックリファレンス: コピペ用テキスト集約

### 即コピペ可能な submission 文字列

**App Name (30字)**:
```
たべなび 外食ダイエット&カロリー記録
```

**Subtitle (30字)**:
```
コンビニ・チェーン店のPFC管理
```

**Promotional Text (170字)**:
```
外食しかしない社畜が、外食だけで13kg痩せるために作った栄養管理アプリ。コンビニ・松屋・サイゼ・マック等20チェーン500メニューのPFCを3タップで記録。今日の食事、迷わず選べる。
```

**Keywords (100字)**:
```
外食,ダイエット,カロリー計算,栄養管理,PFC,糖質,コンビニ,松屋,サイゼ,牛丼,体重,記録,筋トレ,健康
```

**Support URL**: `https://www.tabenavi.jp/contact`
**Marketing URL**: `https://www.tabenavi.jp`
**Privacy Policy URL**: `https://www.tabenavi.jp/privacy`

**Demo Account**:
- Email: `bets.sputter_0b@icloud.com`
- Password: `Vitqig-hegbaj-povhi6`

**Description (1,650字)** + **Reviewer Notes** → `docs/APP_STORE_SUBMISSION.md` §5 と `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §6
