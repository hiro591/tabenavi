#!/usr/bin/env node
/**
 * affiliateProducts.ts のアフィリリンクを対話的に更新するスクリプト
 *
 * 使い方:
 *   cd ~/tabenavi
 *   node scripts/update-affiliate-urls.mjs
 *
 * 各商品ごとに Amazon URL と 楽天URL を聞かれます。
 *   - Enter のみ → スキップ (前回値を維持)
 *   - "skip" + Enter → スキップ
 *   - "clear" + Enter → URLをプレースホルダーに戻す
 *   - URLを貼り付けて Enter → 該当商品の該当ネットワークを更新
 *   - "quit" → 中断して保存
 */

import { readFile, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";

const FILE_PATH = new URL("../src/data/affiliateProducts.ts", import.meta.url);

const COLOR = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  gray: "\x1b[90m",
};

function paint(text, c) {
  return `${COLOR[c] || ""}${text}${COLOR.reset}`;
}

async function loadProducts() {
  const source = await readFile(FILE_PATH, "utf8");
  const products = [];
  const productRegex = /\{\s*id:\s*"([^"]+)",[\s\S]*?\},/g;
  let match;
  while ((match = productRegex.exec(source)) !== null) {
    const block = match[0];
    const id = match[1];
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const amazonMatch = block.match(/amazonUrl:\s*(?:"([^"]*)"|PLACEHOLDER)/);
    const rakutenMatch = block.match(/rakutenUrl:\s*(?:"([^"]*)"|PLACEHOLDER)/);
    products.push({
      id,
      name: nameMatch ? nameMatch[1] : id,
      amazonUrl: amazonMatch ? (amazonMatch[1] ?? "PLACEHOLDER") : null,
      rakutenUrl: rakutenMatch ? (rakutenMatch[1] ?? "PLACEHOLDER") : null,
    });
  }
  return { source, products };
}

function replaceUrlInBlock(block, key, newValue) {
  const regex = new RegExp(`(${key}:\\s*)(?:PLACEHOLDER|"[^"]*")`, "g");
  return block.replace(regex, (_, p1) => {
    if (newValue === "PLACEHOLDER") {
      return `${p1}PLACEHOLDER`;
    }
    const escaped = newValue.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `${p1}"${escaped}"`;
  });
}

function updateUrlInSource(source, productId, key, newValue) {
  const idRegex = new RegExp(`(\\{\\s*id:\\s*"${productId}",[\\s\\S]*?\\},)`);
  return source.replace(idRegex, (block) => replaceUrlInBlock(block, key, newValue));
}

function statusOf(url) {
  if (!url || url === "PLACEHOLDER") return paint("未設定", "gray");
  return paint("設定済み", "green");
}

function isLikelyValidUrl(s) {
  return /^https?:\/\//i.test(s);
}

async function main() {
  console.log(paint("\n=== たべなび アフィリエイトURL 一括更新ツール ===\n", "bold"));

  const rl = createInterface({ input: globalThis.process.stdin, output: globalThis.process.stdout });

  let { source, products } = await loadProducts();

  if (products.length === 0) {
    console.log(paint("商品が見つかりませんでした。", "red"));
    rl.close();
    return;
  }

  console.log(`${products.length}個の商品を検出しました。\n`);
  console.log(paint("入力ガイド:", "yellow"));
  console.log("  - URLを貼り付けて Enter → 更新");
  console.log("  - 何も入力せず Enter → スキップ (現状維持)");
  console.log("  - " + paint("skip", "cyan") + " → スキップ");
  console.log("  - " + paint("clear", "cyan") + " → プレースホルダーに戻す");
  console.log("  - " + paint("quit", "cyan") + " → 中断して保存\n");

  let modifiedSource = source;
  let updateCount = 0;
  let aborted = false;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    console.log(
      `\n${paint(`[${i + 1}/${products.length}]`, "bold")} ${paint(p.id, "cyan")} ${paint(`— ${p.name}`, "gray")}`
    );
    console.log(`  Amazon: ${statusOf(p.amazonUrl)}`);
    console.log(`  楽天:    ${statusOf(p.rakutenUrl)}`);

    const amazonInput = (await rl.question(paint("  Amazon URL → ", "yellow"))).trim();
    if (amazonInput === "quit") {
      aborted = true;
      break;
    }
    if (amazonInput === "clear") {
      modifiedSource = updateUrlInSource(modifiedSource, p.id, "amazonUrl", "PLACEHOLDER");
      updateCount++;
      console.log(paint("  ✓ Amazon URL をクリア", "yellow"));
    } else if (amazonInput && amazonInput !== "skip") {
      if (!isLikelyValidUrl(amazonInput)) {
        console.log(paint("  ⚠ URLっぽくないのでスキップしました", "red"));
      } else {
        modifiedSource = updateUrlInSource(modifiedSource, p.id, "amazonUrl", amazonInput);
        updateCount++;
        console.log(paint("  ✓ Amazon URL を更新", "green"));
      }
    }

    const rakutenInput = (await rl.question(paint("  楽天 URL  → ", "yellow"))).trim();
    if (rakutenInput === "quit") {
      aborted = true;
      break;
    }
    if (rakutenInput === "clear") {
      modifiedSource = updateUrlInSource(modifiedSource, p.id, "rakutenUrl", "PLACEHOLDER");
      updateCount++;
      console.log(paint("  ✓ 楽天 URL をクリア", "yellow"));
    } else if (rakutenInput && rakutenInput !== "skip") {
      if (!isLikelyValidUrl(rakutenInput)) {
        console.log(paint("  ⚠ URLっぽくないのでスキップしました", "red"));
      } else {
        modifiedSource = updateUrlInSource(modifiedSource, p.id, "rakutenUrl", rakutenInput);
        updateCount++;
        console.log(paint("  ✓ 楽天 URL を更新", "green"));
      }
    }
  }

  rl.close();

  if (updateCount === 0) {
    console.log(paint("\n変更はありませんでした。\n", "yellow"));
    return;
  }

  await writeFile(FILE_PATH, modifiedSource, "utf8");
  console.log(
    paint(`\n✓ ${updateCount}件の更新を保存しました${aborted ? " (中断)" : ""}`, "green")
  );
  console.log(paint(`  → ${FILE_PATH.pathname}\n`, "gray"));

  const { products: refreshed } = await loadProducts();
  const configuredCount = refreshed.filter(
    (p) =>
      (p.amazonUrl && p.amazonUrl !== "PLACEHOLDER") ||
      (p.rakutenUrl && p.rakutenUrl !== "PLACEHOLDER")
  ).length;
  console.log(
    paint(`現在の設定状況: ${configuredCount}/${refreshed.length} 商品が有効\n`, "bold")
  );

  if (configuredCount === refreshed.length) {
    console.log(paint("🎉 全商品の設定が完了しました!\n", "green"));
    console.log("動作確認:  npm run dev → http://localhost:3000/guide/protein-cost-ranking\n");
  }
}

main().catch((err) => {
  console.error(paint("\nエラー:", "red"), err.message);
});
