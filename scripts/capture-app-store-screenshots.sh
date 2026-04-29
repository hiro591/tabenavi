#!/bin/bash
set -e

# App Store screenshot capture for iPhone 17 Pro Max (6.9 inch, 1320x2868)
# Usage: ./scripts/capture-app-store-screenshots.sh [optional: specific page only]

DEVICE="iPhone 17 Pro Max"
BUNDLE_ID="jp.tabenavi.app"
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$PROJECT_ROOT/marketing/app-store-screenshots"
APP_PATH="$PROJECT_ROOT/ios/App/build/Build/Products/Debug-iphonesimulator/App.app"
CONFIG_FILE="$PROJECT_ROOT/capacitor.config.ts"
ORIGINAL_CONFIG=$(cat "$CONFIG_FILE")

mkdir -p "$OUT_DIR"

# Pages to capture: filename | URL path | wait seconds | description
PAGES=(
  "01-landing|/|10|ランディングページ"
  "02-guide-list|/guide|10|ガイド記事一覧"
  "03-chain-list|/chains|12|チェーン店一覧"
  "04-saizeriya-guide|/guide/saizeriya-diet|12|サイゼ攻略ガイド"
  "05-conveni-guide|/guide/conveni-protein|12|コンビニ高タンパクガイド"
  "06-eat-and-lose|/guide/eat-and-lose|12|外食ダイエット理論"
  "07-search|/search|12|メニュー検索"
  "08-map|/map|15|店舗マップ"
)

restore_config() {
  echo "$ORIGINAL_CONFIG" > "$CONFIG_FILE"
  cd "$PROJECT_ROOT" && npx cap sync ios > /dev/null 2>&1
  echo "✅ Original capacitor.config.ts restored"
}

trap restore_config EXIT

# Boot device
echo "📱 Booting $DEVICE..."
xcrun simctl boot "$DEVICE" 2>/dev/null || true
open -a Simulator
sleep 5

for entry in "${PAGES[@]}"; do
  IFS='|' read -r name path wait_s desc <<< "$entry"

  # Skip if filter argument provided and doesn't match
  if [ -n "$1" ] && [ "$name" != "$1" ]; then
    continue
  fi

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📸 [${name}] ${desc}"
  echo "   URL: https://www.tabenavi.jp${path}"

  # Update server.url with full path
  full_url="https://www.tabenavi.jp${path}"
  sed -i.bak "s|url: \".*\",|url: \"${full_url}\",|" "$CONFIG_FILE"

  cd "$PROJECT_ROOT"
  echo "   🔧 Syncing..."
  npx cap sync ios > /dev/null 2>&1

  echo "   🔨 Building..."
  cd ios/App
  xcodebuild -project App.xcodeproj -scheme App -configuration Debug \
    -destination "platform=iOS Simulator,name=${DEVICE}" \
    -derivedDataPath build build 2>&1 | tail -1

  echo "   📲 Installing..."
  xcrun simctl uninstall booted "$BUNDLE_ID" 2>/dev/null || true
  xcrun simctl install booted "$APP_PATH"
  sleep 2

  echo "   🚀 Launching..."
  xcrun simctl launch booted "$BUNDLE_ID" > /dev/null
  echo "   ⏳ Waiting ${wait_s}s for content..."
  sleep "$wait_s"

  out_file="$OUT_DIR/${name}.png"
  xcrun simctl io booted screenshot "$out_file"
  echo "   ✅ Saved: $out_file"
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Capture complete. Files in: $OUT_DIR"
ls -la "$OUT_DIR"
