#!/bin/bash
set -e

PROJECT_ROOT="/Users/nishiokahiroki/tabenavi"
OUT_DIR="$PROJECT_ROOT/marketing/app-store-screenshots"
APP_PATH="$PROJECT_ROOT/ios/App/build/Build/Products/Debug-iphonesimulator/App.app"
CONFIG_FILE="$PROJECT_ROOT/capacitor.config.ts"

PAGES=(
  "03-calorie-db|/guide/calorie-database|12"
  "07-protein-ranking|/guide/protein-cost-ranking|12"
  "08-matsuya-guide|/guide/matsuya-diet|12"
  "09-mcdonalds-guide|/guide/mcdonalds-diet|12"
  "10-eating-out-diet|/guide/eating-out-diet|12"
)

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
  /bin/sleep 2
  /usr/bin/xcrun simctl launch booted jp.tabenavi.app > /dev/null
  /bin/sleep "$wait_s"
  /usr/bin/xcrun simctl io booted screenshot "$OUT_DIR/${name}.png"
  echo "   ✅ Saved $OUT_DIR/${name}.png"
done

cd "$PROJECT_ROOT"
/usr/bin/sed -i.bak 's|url: ".*",|url: "https://www.tabenavi.jp",|' "$CONFIG_FILE"
npx cap sync ios > /dev/null 2>&1
/bin/rm -f "$CONFIG_FILE.bak"
echo "✅ Original config restored"
ls -la "$OUT_DIR"
