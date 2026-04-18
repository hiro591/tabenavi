#!/usr/bin/env node
/**
 * URL置換ロジックの単独テスト (CIでも回せるように)
 * 実行: node scripts/test-affiliate-update.mjs
 */

import { readFile } from "node:fs/promises";

const FILE_PATH = new URL("../src/data/affiliateProducts.ts", import.meta.url);

function replaceUrlInBlock(block, key, newValue) {
  const regex = new RegExp(`(${key}:\\s*)(?:PLACEHOLDER|"[^"]*")`, "g");
  return block.replace(regex, (_, p1) => {
    if (newValue === "PLACEHOLDER") return `${p1}PLACEHOLDER`;
    const escaped = newValue.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `${p1}"${escaped}"`;
  });
}

function updateUrlInSource(source, productId, key, newValue) {
  const idRegex = new RegExp(`(\\{\\s*id:\\s*"${productId}",[\\s\\S]*?\\},)`);
  return source.replace(idRegex, (block) => replaceUrlInBlock(block, key, newValue));
}

const TESTS = [
  {
    name: "Amazon URLをセット (ultora-whey)",
    productId: "ultora-whey",
    key: "amazonUrl",
    value: "https://af.moshimo.com/af/c/click?a_id=TEST",
    expectInBlock: 'amazonUrl: "https://af.moshimo.com/af/c/click?a_id=TEST"',
  },
  {
    name: "楽天URLをセット (myprotein-impact)",
    productId: "myprotein-impact",
    key: "rakutenUrl",
    value: "https://hb.afl.rakuten.co.jp/hgc/g00000000.TEST/",
    expectInBlock: 'rakutenUrl: "https://hb.afl.rakuten.co.jp/hgc/g00000000.TEST/"',
  },
  {
    name: "URLをクリア (myprotein-bcaa)",
    productId: "myprotein-bcaa",
    key: "amazonUrl",
    value: "PLACEHOLDER",
    expectInBlock: "amazonUrl: PLACEHOLDER",
  },
  {
    name: "クォート文字を含むURLをエスケープ",
    productId: "tanita-scale",
    key: "amazonUrl",
    value: 'https://example.com/?a="test"',
    expectInBlock: 'amazonUrl: "https://example.com/?a=\\"test\\""',
  },
  {
    name: "存在しない商品IDは無視",
    productId: "nonexistent-product",
    key: "amazonUrl",
    value: "https://example.com/x",
    expectInBlock: null,
    expectUnchanged: true,
  },
];

async function run() {
  const original = await readFile(FILE_PATH, "utf8");
  let pass = 0;
  let fail = 0;

  for (const t of TESTS) {
    const result = updateUrlInSource(original, t.productId, t.key, t.value);
    const blockRegex = new RegExp(`\\{\\s*id:\\s*"${t.productId}",[\\s\\S]*?\\},`);
    const blockMatch = result.match(blockRegex);

    let ok;
    if (t.expectUnchanged) {
      ok = result === original;
    } else if (t.expectInBlock && blockMatch) {
      ok = blockMatch[0].includes(t.expectInBlock);
    } else {
      ok = false;
    }

    if (ok) {
      console.log(`✓ ${t.name}`);
      pass++;
    } else {
      console.log(`✗ ${t.name}`);
      if (blockMatch) {
        const idx = blockMatch[0].indexOf(t.key);
        if (idx >= 0) {
          console.log(`  実際: ${blockMatch[0].substring(idx, idx + 80)}...`);
        }
      }
      console.log(`  期待: ${t.expectInBlock}`);
      fail++;
    }
  }

  console.log(`\n結果: ${pass}件成功 / ${fail}件失敗`);
  if (fail > 0) {
    throw new Error(`${fail}件のテストが失敗しました`);
  }
}

run().catch((err) => {
  console.error("テスト失敗:", err.message);
});
