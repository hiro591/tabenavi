// 新規記事(2026-06-24〜07-02公開の20本)のGSCパフォーマンスをページ別に照会する一時スクリプト。
// gsc-report.mjs と同じサービスアカウントJWT方式(依存ゼロ)。
import fs from "fs";
import crypto from "crypto";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const KEY_FILE = get("GSC_SA_KEY_FILE") || "./gsc-key.json";
const SITE = get("GSC_SITE") || "https://www.tabenavi.jp/";
const DAYS = parseInt(process.argv[2] || "18", 10);
const sa = JSON.parse(fs.readFileSync(KEY_FILE, "utf8"));

function b64url(buf) {
  return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now, exp: now + 3600,
  }));
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const jwt = `${header}.${claim}.${b64url(signer.sign(sa.private_key))}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error("token fail: " + JSON.stringify(json));
  return json.access_token;
}

const NEW_SLUGS = [
  // batch1 (6/24)
  "ohsho-diet", "yayoiken-diet", "ichibanya-diet", "bikkuri-donkey-diet",
  // batch2 (6/24)
  "mos-diet", "doutor-diet", "tenya-diet", "cocos-diet",
  // batch3 (6/24)
  "joyfull-diet", "matsunoya-diet", "zetteria-diet", "burgerking-diet",
  "teishoku-comparison", "cafe-comparison",
  // batch4 (6/24)
  "curry-comparison", "hamburg-comparison", "breakfast-comparison",
  // batch5 (7/2)
  "kaitenzushi-comparison", "fried-chicken-comparison", "donburi-comparison",
];

const token = await getAccessToken();
const end = new Date();
end.setDate(end.getDate() - 2); // GSCの反映ラグ
const start = new Date(end);
start.setDate(start.getDate() - DAYS);
const fmt = (d) => d.toISOString().slice(0, 10);

const res = await fetch(
  `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
  {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      startDate: fmt(start), endDate: fmt(end),
      dimensions: ["page"], rowLimit: 5000,
    }),
  }
);
const data = await res.json();
const rows = data.rows ?? [];

console.log(`=== 新規記事20本のGSC実績 (${fmt(start)} 〜 ${fmt(end)}) ===`);
let indexed = 0;
for (const slug of NEW_SLUGS) {
  const row = rows.find((r) => r.keys[0] === `https://www.tabenavi.jp/guide/${slug}`);
  if (row) {
    indexed++;
    console.log(
      `  ✓ ${slug.padEnd(26)} ${String(row.clicks).padStart(4)}clk ${String(row.impressions).padStart(6)}imp pos${row.position.toFixed(1)} CTR${(row.ctr * 100).toFixed(1)}%`
    );
  } else {
    console.log(`  … ${slug.padEnd(26)} (まだ表示なし)`);
  }
}
console.log(`\n  表示あり: ${indexed}/${NEW_SLUGS.length}本`);
