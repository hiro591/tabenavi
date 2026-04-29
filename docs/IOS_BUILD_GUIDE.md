# iOS ビルド・App Store 提出ガイド

> たべなび iOS アプリを Capacitor で App Store に提出する完全手順書
> 最終更新: 2026-04-25

---

## 0. 前提条件 (チェックリスト)

- [ ] Apple Developer Program 登録完了 (¥15,800/年)
- [ ] macOS が最新 (Sonoma 以降推奨)
- [ ] Xcode 最新版がインストール済み (Mac App Store, ~15GB)
- [ ] Xcode Command Line Tools の参照を Xcode 本体に切替済み
- [ ] CocoaPods インストール済み
- [ ] tabenavi.jp が本番デプロイされている (server.url で参照する)

---

## 1. Xcode セットアップ (Apple Developer 審査と並行で実施)

### 1-1. Xcode インストール

Mac App Store で「Xcode」検索 → インストール (15GB, 30分-2時間)。

### 1-2. Command Line Tools の切替

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
xcodebuild -version  # Xcode 16.x が表示されればOK
```

### 1-3. CocoaPods インストール

```bash
sudo gem install cocoapods
pod --version  # 1.15.x 以降が表示されればOK
```

Apple Silicon (M1/M2/M3) で失敗する場合:
```bash
sudo arch -x86_64 gem install ffi
sudo gem install cocoapods
```

---

## 2. iOS プロジェクト雛形の生成 (1回だけ)

```bash
cd /Users/nishiokahiroki/tabenavi
npx cap add ios
```

これが成功すると `ios/App/` ディレクトリが作成され、Xcode プロジェクトが生成されます。

内部で `pod install` が走るので、CocoaPods が無いと失敗します。

---

## 3. Capacitor 設定の同期

ネイティブブリッジコードや capacitor.config.ts を変更したら必ず実行:

```bash
npx cap sync ios
```

---

## 4. Xcode で開いて初期設定

```bash
npx cap open ios
```

Xcode が起動したら以下を設定:

### 4-1. Signing & Capabilities (左ナビ → App → Signing & Capabilities)

- **Team**: 自分の Apple Developer アカウントを選択
- **Bundle Identifier**: `jp.tabenavi.app` (capacitor.config.ts と一致確認)
- **Automatically manage signing**: ON (推奨)

### 4-2. Capabilities 追加 (+ Capability ボタン)

必須で追加するもの:
- **Push Notifications** (Push通知のため)
- **Background Modes** → Remote notifications にチェック

### 4-3. Info.plist 編集

左ナビ → App → Info.plist を開き、以下のキーを追加 (右クリック → Add Row):

| Key | Type | Value |
|---|---|---|
| `NSCameraUsageDescription` | String | 食事の写真を撮影して記録するために使用します |
| `NSPhotoLibraryUsageDescription` | String | 保存された食事写真を選択するために使用します |
| `NSPhotoLibraryAddUsageDescription` | String | 撮影した食事写真を保存するために使用します |
| `NSAppTransportSecurity` → `NSAllowsArbitraryLoads` | Boolean | NO (HTTPS のみ許可) |
| `CFBundleDisplayName` | String | たべなび |
| `LSApplicationQueriesSchemes` | Array | (空でOK、必要に応じて追加) |

注意: ユーザー説明文 (Usage Description) が無いと審査で必ずリジェクトされます。

### 4-4. App アイコン設定

1. `ios/App/App/Assets.xcassets/AppIcon.appiconset/` を Finder で開く
2. 1024×1024 の PNG を `AppIcon-512@2x.png` として配置
3. 必要に応じて他サイズも配置 (Xcode 14+ は 1024 だけで自動生成可)

推奨ツール: https://www.appicon.co/ で 1024×1024 から全サイズ自動生成

### 4-5. Launch Screen 設定

`ios/App/App/Base.lproj/LaunchScreen.storyboard` を編集、または:

```xml
<!-- 背景色を tabenavi の F9FAFB に -->
```

シンプルにロゴ + 背景色だけにするのが推奨。

---

## 5. シミュレータでの動作確認

### 5-1. ビルド & 実行

Xcode 上部のデバイス選択で「iPhone 16 Pro」など選択 → ▶ Run。

### 5-2. 確認項目

- [ ] アプリが起動して tabenavi.jp の画面が表示される
- [ ] Splash Screen が 1.5 秒表示後フェードアウト
- [ ] Status Bar が見やすい (背景色 #F9FAFB に dark スタイル)
- [ ] 下部 Bottom Nav がノッチ (Home Indicator) に被らない
- [ ] /notifications ページで Push Toggle が動作 (シミュレータは Push 通知非対応、Local Notifications のみ確認可)
- [ ] /record ページで Camera が動作 (シミュレータは Camera 非対応、実機テスト必須)
- [ ] 戻るジェスチャーで履歴が戻る
- [ ] Cookie/セッションが Web 版と共有されている (ログイン状態維持)

---

## 6. 実機テスト

シミュレータでは Push 通知と Camera が動作しないため、必ず実機テストが必要。

### 6-1. 実機接続

USB ケーブルで iPhone を Mac に接続 → Xcode のデバイス選択で実機を選択 → ▶ Run

初回のみ iPhone 側で「設定 → 一般 → VPN とデバイス管理」から開発者証明書を信頼する操作が必要。

### 6-2. 実機での確認項目 (シミュレータと追加で)

- [ ] Push 通知許可ダイアログが表示される
- [ ] Camera 許可ダイアログが表示される
- [ ] Camera で写真撮影 → 食事記録画面に渡る
- [ ] Local Notifications が朝/夜の指定時刻に届く

---

## 7. Push 通知用 APNs 証明書設定 (App Store 提出後でもOK)

### 7-1. APNs Key 作成

1. https://developer.apple.com/account → Certificates, Identifiers & Profiles
2. Keys → + ボタン → Apple Push Notifications service (APNs) を選択
3. Key 名「tabenavi APNs Key」で作成 → .p8 ファイルをダウンロード (1回しか落とせない、安全に保管)
4. Key ID と Team ID をメモ

### 7-2. Push 配信サーバー (将来)

最初は Local Notifications だけで十分 (デバイス内完結、サーバー不要)。
本格的に Push を送る段階で:
- Firebase Cloud Messaging (無料)
- Supabase Edge Functions + APNs HTTP/2 直接呼び出し
- OneSignal (UI 付き、無料枠あり)

---

## 8. App Store Connect への提出

### 8-1. App Store Connect でアプリ作成

1. https://appstoreconnect.apple.com/ → My Apps → + → New App
2. プラットフォーム: iOS
3. 名前: たべなび - 外食ダイエット&カロリー記録
4. プライマリ言語: 日本語
5. Bundle ID: `jp.tabenavi.app` を選択
6. SKU: `TABENAVI-001`
7. ユーザーアクセス: フルアクセス

### 8-2. Archive 作成 (Xcode)

1. Xcode 上部のデバイス選択を「Any iOS Device (arm64)」に
2. メニュー Product → Archive
3. 完了したら Organizer 画面が開く
4. 「Distribute App」→ App Store Connect → Upload

### 8-3. メタデータ入力 (App Store Connect)

App Store 提出物 (説明文・キーワード・スクショ等) は別ファイル参照:
`docs/APP_STORE_SUBMISSION.md`

### 8-4. 審査提出

- スクリーンショット 6.7" (1290×2796) 必須、最低3枚、推奨5-10枚
- アプリプレビュー動画 (任意、推奨)
- レビュー用ログイン情報 (Demo Account) 必須:
  - メール: `apple-review@tabenavi.jp` (要事前作成)
  - パスワード: 強固なものを設定
  - メモ欄に「サンプルデータ入りのアカウントです」と記載

「Submit for Review」ボタンを押す。

---

## 9. 審査通過のためのリジェクト回避策

### 9-1. Guideline 4.2 (Minimum Functionality) 対策

リジェクト理由No.1。「ただの WebView ラッパー」と判定されると即リジェクト。

たべなびは以下で回避:
- ✅ Push 通知 (ネイティブ機能)
- ✅ Camera 撮影 (ハードウェアアクセス)
- ✅ Local Notifications (ネイティブ機能)
- ✅ App として有用な機能 (栄養管理、500メニューデータベース)

### 9-2. Guideline 5.1.1 (Privacy) 対策

- ✅ プライバシーポリシーページ (/privacy) 公開
- ✅ Info.plist の Usage Description 全て記入
- 🔲 アカウント削除機能 (App Store 必須要件)
  - tabenavi 側で「アカウント削除」ボタンを実装する必要あり
  - 実装場所: /profile ページに追加
  - Supabase の auth.users から DELETE する API route が必要

### 9-3. Guideline 3.1.1 (In-App Purchase) 対策

- 当面は無課金アプリとして提出 (Stripe Web 課金も含めない)
- 将来 Premium を追加する際は必ず Apple IAP 経由

### 9-4. Guideline 2.5.6 (WebKit) 対策

- ✅ WKWebView を使用 (Capacitor デフォルト)
- 外部ブラウザに飛ばすリンクは Capacitor Browser Plugin で開く

---

## 10. リジェクトされた場合の対応

App Store Connect の Resolution Center にメッセージが届く。

1. リジェクト理由を読む (英語・Apple 側の言い分は具体的)
2. 修正内容を Reply で説明 (英語推奨)
3. 必要なら修正版を Upload → 再 Submit

平均審査期間: 24-48時間 (たまに数日かかる)
リジェクト → 修正 → 再提出ループは初回 2-3 回が普通

---

## 11. 公開後

### 11-1. 段階リリース

App Store Connect でリリース時に「Phased Release」を ON 推奨:
- Day 1: 1%
- Day 2: 2%
- Day 3: 5%
- Day 4: 10%
- Day 5: 20%
- Day 6: 50%
- Day 7: 100%

不具合があった場合に被害最小化できる。

### 11-2. レビューモニタリング

App Store Connect → App Analytics → Ratings & Reviews を毎日確認。
ネガレビュー には 24h 以内に返信。

---

## 12. アップデート公開フロー (2回目以降)

### 12-1. JS 側のみ変更の場合

tabenavi.jp に Vercel/Cloud Run でデプロイするだけで、アプリ側も即反映 (server.url 方式の最大メリット)。

App Store の再提出不要。

### 12-2. ネイティブ機能変更の場合

- capacitor.config.ts や iOS プロジェクト変更時は再ビルド必要
- Xcode で Version 番号 (CFBundleShortVersionString) と Build 番号 (CFBundleVersion) を上げる
- Archive → Upload → 審査再提出

---

## 13. 参考リンク

- Capacitor iOS Docs: https://capacitorjs.com/docs/ios
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- App Store Connect Help: https://developer.apple.com/help/app-store-connect/
