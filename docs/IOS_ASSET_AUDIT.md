# iOS 提出物アセット監査結果

> 2026-04-25 監査
> 対象: ios/App/App/ 内の全アセット + Info.plist
> 結論: **全項目クリア — Apple Developer承認後すぐに submit 可能**

---

## 1. アイコン

| 項目 | 状態 | 備考 |
|---|---|---|
| AppIcon-512@2x.png (1024×1024) | ✅ | 統一ブランドカラーのfork+knifeデザイン |
| 透過なし (RGB) | ✅ | Apple必須 (PNG-32 RGBA はリジェクト要因) |
| 角丸なし (Squareで提出) | ✅ | iOSが自動で squircle 化する |
| 全サイズ生成 | ✅ | Xcode 14+ は 1024×1024 から自動生成 (個別出力不要) |

**生成スクリプト**: `scripts/generate-app-icon.mjs`

---

## 2. スプラッシュスクリーン (Launch Screen)

| 項目 | Before | After |
|---|---|---|
| 画像 | ❌ Capacitorデフォルト「X」ロゴ | ✅ たべなびブランド (icon + 「たべなび」+ tagline) |
| サイズ | 2732×2732 (1x/2x/3x 同一) | ✅ 同左 |
| 背景色 | white | ✅ #F9FAFB (起動後画面と同色 = ハンドオフ無瞬断) |
| LaunchScreen.storyboard | ✅ 未変更 (Splash imageView 参照) | — |

**生成スクリプト**: `scripts/generate-splash.mjs`
**配置先**: `ios/App/App/Assets.xcassets/Splash.imageset/`
**シミュレータ起動確認**: 完了 (iPhone 17 Pro Max で 2026-04-25 確認)

---

## 3. Info.plist 完全性チェック

| カテゴリ | キー | 状態 |
|---|---|---|
| **基本情報** | CFBundleDisplayName = `たべなび` | ✅ |
|  | CFBundleDevelopmentRegion = `ja` | ✅ |
|  | CFBundleLocalizations = `[ja, en]` | ✅ |
| **審査要件** | ITSAppUsesNonExemptEncryption = `false` | ✅ 輸出規制宣言 |
|  | LSApplicationCategoryType = `healthcare-fitness` | ✅ |
|  | LSRequiresIPhoneOS = `true` | ✅ |
| **権限** | NSCameraUsageDescription | ✅ 食事写真撮影 |
|  | NSPhotoLibraryUsageDescription | ✅ ライブラリ選択 |
|  | NSPhotoLibraryAddUsageDescription | ✅ ライブラリ保存 |
|  | NSLocationWhenInUseUsageDescription | ✅ 近隣店舗マップ |
|  | NSUserNotificationsUsageDescription | ✅ 食事リマインダー |
| **バックグラウンド** | UIBackgroundModes = `[remote-notification]` | ✅ Push受信用 |
| **画面** | UILaunchStoryboardName = `LaunchScreen` | ✅ |
|  | UISupportedInterfaceOrientations = Portrait | ✅ Phase 1 縦のみ |
|  | UIStatusBarStyle = `DarkContent` | ✅ 明るい背景に黒文字 |

→ **Apple審査チェックリストに対する欠落ゼロ**

---

## 4. Capacitor プラグイン同期状態

`npx cap sync ios` 実行確認 (2026-04-25):
```
✔ update ios in 22.07ms
[info] Found 7 Capacitor plugins for ios:
       @capacitor/app@8.1.0
       @capacitor/camera@8.1.0
       @capacitor/local-notifications@8.0.2
       @capacitor/preferences@8.0.1
       @capacitor/push-notifications@8.0.3
       @capacitor/splash-screen@8.0.1
       @capacitor/status-bar@8.0.2
```
すべて Capacitor 8 系で統一、互換性問題なし。

---

## 5. ビルド検証

iPhone 17 Pro Max シミュレータで Debug ビルド成功:
```
xcodebuild -project App.xcodeproj -scheme App -configuration Debug \
  -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' \
  -derivedDataPath build build
→ ** BUILD SUCCEEDED **
```

起動確認: スプラッシュ表示 → ログイン画面に遷移 → 全UIが正常レンダリング

---

## 6. App Store Connect 提出時のアセット最終リスト

| 提出物 | 場所 | サイズ |
|---|---|---|
| App Icon | `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` | 1024×1024 |
| Screenshot 6.9" × 8 | `marketing/app-store-screenshots/final/appstore-01〜08.png` | 1320×2868 |
| Privacy Policy URL | https://www.tabenavi.jp/privacy | — |
| Terms URL | https://www.tabenavi.jp/terms | — |
| Support URL | https://www.tabenavi.jp/contact | — |
| Marketing URL | https://www.tabenavi.jp | — |
| App Privacy 回答 | `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §4 | — |
| Demo Account | `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §5 | — |
| Reviewer Notes | `docs/APP_STORE_SUBMISSION_CHECKLIST.md` §6 | — |

→ 提出ブロッカーは **Apple Developer Program 承認待ちのみ**。承認後の作業は手順書通りに進めれば 30-60 分で submit 完了。

---

## 7. リジェクトリスク評価

| ガイドライン | リスク | 緩和策 |
|---|---|---|
| 4.2 Minimum Functionality | 低 | Push/Camera/LocalNotif の3ネイティブ機能実装 + Reviewer Notes で明示 |
| 5.1.1(v) Account Deletion | 低 | プロフィール画面に削除フロー実装、API 完成 |
| 2.5.6 Web Content | 中 → 低 | Capacitor wrapper だが、ネイティブ機能を統合済 = "merely a website" 認定回避 |
| 4.0 Design (Splash logo) | 高 → **解消** | 旧 Capacitor デフォルト→たべなびブランド差替 (本日対応) |
| 5.1.5 Location Use | 低 | NSLocationWhenInUseUsageDescription に「許可しなくても店舗検索可」と明記 |
