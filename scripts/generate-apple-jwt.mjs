// Apple Sign In JWT Generator for Supabase Auth
// Usage: node scripts/generate-apple-jwt.mjs
// Output: JWT to paste into Supabase → Auth → Providers → Apple → Secret Key

import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import os from "os";

const TEAM_ID = "R6QR6GBLZB";
const KEY_ID = "878H7F76UQ";
const SERVICE_ID = "jp.tabenavi.app.signin";
const P8_FILE = path.join(os.homedir(), "Documents/Apple Keys/AuthKey_878H7F76UQ.p8");

const privateKey = fs.readFileSync(P8_FILE, "utf8");

const now = Math.floor(Date.now() / 1000);
const sixMonths = 60 * 60 * 24 * 180;

const token = jwt.sign(
  {
    iss: TEAM_ID,
    iat: now,
    exp: now + sixMonths,
    aud: "https://appleid.apple.com",
    sub: SERVICE_ID,
  },
  privateKey,
  {
    algorithm: "ES256",
    keyid: KEY_ID,
  }
);

const expiryDate = new Date((now + sixMonths) * 1000);

console.log("\n=== Apple JWT for Supabase ===\n");
console.log(token);
console.log("\n=== Metadata ===");
console.log("Service ID (Client IDs field):", SERVICE_ID);
console.log("Expires:", expiryDate.toISOString().split("T")[0]);
console.log("(Re-generate this JWT before expiry to avoid auth failures)\n");
