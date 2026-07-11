// 意図最適化(2026-07-02)のターゲットクエリを施策前後で比較する一時スクリプト。
import fs from "fs";
import crypto from "crypto";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const KEY_FILE = get("GSC_SA_KEY_FILE") || "./gsc-key.json";
const SITE = get("GSC_SITE") || "https://www.tabenavi.jp/";
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
  if (!json.access_token) throw new Error("token fail");
  return json.access_token;
}

const token = await getAccessToken();

async function queryWindow(startDate, endDate) {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ startDate, endDate, dimensions: ["query"], rowLimit: 5000 }),
    }
  );
  return (await res.json()).rows ?? [];
}

// 施策前(6/11-7/1) vs 施策後(7/2-7/9)
const before = await queryWindow("2026-06-11", "2026-07-01");
const after = await queryWindow("2026-07-02", "2026-07-09");

const TARGETS = [
  "サイゼリヤ 栄養成分", "サイゼリヤ 栄養成分 一覧", "サイゼリヤ 成分表",
  "松屋 タンパク質 ランキング", "大戸屋 栄養成分", "くら寿司 栄養成分",
  "王将 タンパク質 ランキング", "サイゼリヤ タンパク質 ランキング",
];

const find = (rows, q) => rows.find((r) => r.keys[0] === q);
console.log("=== ターゲットクエリ: 施策前(6/11-7/1) → 施策後(7/2-7/9) ===");
for (const q of TARGETS) {
  const b = find(before, q);
  const a = find(after, q);
  const fb = b ? `pos${b.position.toFixed(1)} ${b.impressions}imp CTR${(b.ctr * 100).toFixed(1)}%` : "(表示なし)";
  const fa = a ? `pos${a.position.toFixed(1)} ${a.impressions}imp CTR${(a.ctr * 100).toFixed(1)}%` : "(表示なし)";
  const delta = b && a ? ` Δpos ${(b.position - a.position) >= 0 ? "+" : ""}${(b.position - a.position).toFixed(1)}` : "";
  console.log(`  ${q}\n    前: ${fb}\n    後: ${fa}${delta}`);
}
