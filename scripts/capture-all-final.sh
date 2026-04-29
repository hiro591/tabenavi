#!/bin/bash
set -e

PROJECT_ROOT="/Users/nishiokahiroki/tabenavi"
OUT_DIR="$PROJECT_ROOT/marketing/app-store-screenshots/raw"
APP_PATH="$PROJECT_ROOT/ios/App/build/Build/Products/Debug-iphonesimulator/App.app"
CONFIG_FILE="$PROJECT_ROOT/capacitor.config.ts"

mkdir -p "$OUT_DIR"

# Pages | path | wait
PAGES=(
  "01-landing|/|10"
  "02-guide-list|/guide|10"
  "03-calorie-db|/guide/calorie-database|12"
  "04-saizeriya|/guide/saizeriya-diet|12"
  "05-conveni-protein|/guide/conveni-protein|12"
  "06-eat-and-lose|/guide/eat-and-lose|12"
  "07-protein-ranking|/guide/protein-cost-ranking|12"
  "08-matsuya|/guide/matsuya-diet|12"
  "09-mcdonalds|/guide/mcdonalds-diet|12"
  "10-eating-out-diet|/guide/eating-out-diet|12"
  "11-login|/login|8"
)

# Ensure status bar override is active
/usr/bin/xcrun simctl status_bar booted override \
  --time "9:41" \
  --dataNetwork wifi \
  --wifiMode active --wifiBars 3 \
  --cellularMode active --cellularBars 4 \
  --batteryState charged --batteryLevel 100 2>/dev/null || true

for entry in "${PAGES[@]}"; do
  IFS='|' read -r name path wait_s <<< "$entry"
  echo "📸 ${name}: ${path}"
  full_url="https://www.tabenavi.jp${path}"

  cd "$PROJECT_ROOT"
  /usr/bin/sed -i.bak "s|url: \".*\",|url: \"${full_url}\",|" "$CONFIG_FILE"
  npx cap sync ios > /dev/null 2>&1

  cd "$PROJECT_ROOT/ios/App"
  /usr/bin/xcodebuild -project App.xcodeproj -scheme App -configuration Debug \
    -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' \
    -derivedDataPath build build 2>&1 | /usr/bin/tail -1

  /usr/bin/xcrun simctl uninstall booted jp.tabenavi.app 2>/dev/null || true
  /usr/bin/xcrun simctl install booted "$APP_PATH"
  /bin/sleep 1

  # Re-apply status bar override (sometimes resets after install)
  /usr/bin/xcrun simctl status_bar booted override \
    --time "9:41" --dataNetwork wifi \
    --wifiMode active --wifiBars 3 \
    --cellularMode active --cellularBars 4 \
    --batteryState charged --batteryLevel 100 2>/dev/null || true

  /usr/bin/xcrun simctl launch booted jp.tabenavi.app > /dev/null
  /bin/sleep "$wait_s"
  /usr/bin/xcrun simctl io booted screenshot "$OUT_DIR/${name}.png"
  echo "   ✅ Saved $OUT_DIR/${name}.png"
done

cd "$PROJECT_ROOT"
/usr/bin/sed -i.bak 's|url: ".*",|url: "https://www.tabenavi.jp",|' "$CONFIG_FILE"
npx cap sync ios > /dev/null 2>&1
/bin/rm -f "$CONFIG_FILE.bak"
echo "✅ All raw screenshots saved to $OUT_DIR"
ls -la "$OUT_DIR"
