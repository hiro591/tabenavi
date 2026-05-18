// Deep dive into duplicates and invalid cells
import fs from "fs";
import { parse } from "csv-parse/sync";

const csv = fs.readFileSync("/tmp/tabenavi_sheet.csv", "utf8");
const rows = parse(csv, { columns: true, skip_empty_lines: true, trim: true });

// 1. Investigate duplicates - are they truly duplicate (same nutrition)?
const byKey = {};
for (const r of rows) {
  const key = `${r["チェーン"]}|${r["商品名"]}`;
  if (!byKey[key]) byKey[key] = [];
  byKey[key].push(r);
}

const dupes = Object.entries(byKey).filter(([_, arr]) => arr.length > 1);
console.log(`\n=== DUPLICATE ANALYSIS ===`);
console.log(`Total duplicate keys: ${dupes.length}`);

let identicalDupes = 0;
let differentDupes = 0;
const examples = [];
for (const [key, arr] of dupes) {
  // Compare nutrition values
  const sigs = arr.map((r) =>
    `${r["カロリー(kcal)"]}/${r["タンパク質(g)"]}/${r["脂質(g)"]}/${r["炭水化物(g)"]}`
  );
  const allSame = sigs.every((s) => s === sigs[0]);
  if (allSame) identicalDupes++;
  else {
    differentDupes++;
    if (examples.length < 15) {
      examples.push({ key, sigs, categories: arr.map((r) => r["カテゴリ"]) });
    }
  }
}
console.log(`  Identical-nutrition dupes (safe to dedupe): ${identicalDupes}`);
console.log(`  Different-nutrition dupes (need review): ${differentDupes}`);
console.log(`\nExamples of different-nutrition dupes:`);
for (const e of examples) {
  console.log(`\n  ${e.key}`);
  e.sigs.forEach((s, i) => console.log(`    [${e.categories[i]}] cal/p/f/c = ${s}`));
}

// 2. Investigate invalid cells - which items have empty PFC?
console.log(`\n\n=== INVALID NUMERIC ANALYSIS ===`);
const invalidPattern = {};
let totalRowsWithEmpty = 0;
for (const r of rows) {
  const cal = r["カロリー(kcal)"];
  const p = r["タンパク質(g)"];
  const f = r["脂質(g)"];
  const c = r["炭水化物(g)"];
  const empty = [];
  if (cal === "" || cal == null) empty.push("cal");
  if (p === "" || p == null) empty.push("p");
  if (f === "" || f == null) empty.push("f");
  if (c === "" || c == null) empty.push("c");
  if (empty.length === 0) continue;
  totalRowsWithEmpty++;
  const pat = empty.join("+");
  invalidPattern[pat] = (invalidPattern[pat] || 0) + 1;
}
console.log(`Rows with at least one empty PFC field: ${totalRowsWithEmpty}`);
console.log(`Empty patterns:`);
for (const [pat, n] of Object.entries(invalidPattern).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${pat}: ${n} rows`);
}

// 3. Show rows where calories is present but PFC missing
console.log(`\n=== Rows with calories but missing PFC (sample) ===`);
let shown = 0;
for (const r of rows) {
  const cal = r["カロリー(kcal)"];
  const p = r["タンパク質(g)"], f = r["脂質(g)"], c = r["炭水化物(g)"];
  if (cal && cal !== "" && (p === "" || f === "" || c === "")) {
    if (shown < 12) {
      console.log(`  ${r["チェーン"]} | ${r["商品名"]} | cal=${cal} p=${p||"_"} f=${f||"_"} c=${c||"_"}`);
      shown++;
    }
  }
}

// 4. Show rows where ALL of cal/p/f/c is empty
console.log(`\n=== Rows with ALL nutrition empty (sample) ===`);
shown = 0;
for (const r of rows) {
  if (r["カロリー(kcal)"] === "" && r["タンパク質(g)"] === "" && r["脂質(g)"] === "" && r["炭水化物(g)"] === "") {
    if (shown < 15) {
      console.log(`  ${r["チェーン"]} | [${r["カテゴリ"]}] ${r["商品名"]} | 備考: ${r["備考"] || "(empty)"}`);
      shown++;
    }
  }
}

// 5. Per-chain invalid counts
console.log(`\n=== Per-chain rows with empty data ===`);
const perChain = {};
for (const r of rows) {
  const chain = r["チェーン"];
  if (!perChain[chain]) perChain[chain] = { total: 0, anyEmpty: 0, allEmpty: 0 };
  perChain[chain].total++;
  const empty = ["カロリー(kcal)", "タンパク質(g)", "脂質(g)", "炭水化物(g)"]
    .filter((k) => r[k] === "" || r[k] == null);
  if (empty.length > 0) perChain[chain].anyEmpty++;
  if (empty.length === 4) perChain[chain].allEmpty++;
}
console.log(`Chain | Total | AnyEmpty | AllEmpty`);
for (const [c, s] of Object.entries(perChain)) {
  console.log(`${c} | ${s.total} | ${s.anyEmpty} | ${s.allEmpty}`);
}
