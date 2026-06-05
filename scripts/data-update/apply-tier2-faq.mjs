// Tier2記事に QuickAnswer + FAQSection を決定論的に挿入する。
// 入力: /tmp/tier2_faq.json (ワークフロー生成の [{slug, quickAnswerQuestion, quickAnswerAnswer, faqs:[{q,a}]}])
// 各ファイルで:
//   1. import に QuickAnswer, FAQSection を追加(未importなら)
//   2. 最初の <SectionHeading の直前に <QuickAnswer .../> を挿入
//   3. <ArticleFooter currentSlug= の直前に <FAQSection .../> を挿入
// 冪等: 既に QuickAnswer/FAQSection があるファイルはスキップ。
import fs from "fs";

const APPLY = process.argv.includes("--apply");
const data = JSON.parse(fs.readFileSync("/tmp/tier2_faq.json", "utf8"));
const items = Array.isArray(data) ? data : data.items;

const base = "src/app/guide";
let done = 0, skipped = [], failed = [];

for (const it of items) {
  const { slug, quickAnswerQuestion, quickAnswerAnswer, faqs } = it;
  const file = `${base}/${slug}/page.tsx`;
  if (!fs.existsSync(file)) { failed.push(`${slug}: file not found`); continue; }
  let src = fs.readFileSync(file, "utf8");

  if (src.includes("FAQSection") || src.includes("QuickAnswer")) { skipped.push(`${slug}: already has QA/FAQ`); continue; }

  const importAnchor = '} from "@/components/guide/ArticleComponents";';
  const headingAnchor = "<SectionHeading";
  const footerMatch = src.match(/<ArticleFooter\s+currentSlug=/);
  if (!src.includes(importAnchor) || !src.includes(headingAnchor) || !footerMatch) {
    failed.push(`${slug}: anchor missing (import:${src.includes(importAnchor)} heading:${src.includes(headingAnchor)} footer:${!!footerMatch})`);
    continue;
  }

  // 1. imports
  src = src.replace(importAnchor, `  QuickAnswer,\n  FAQSection,\n${importAnchor}`);

  // 2. QuickAnswer before first <SectionHeading
  const qa = `        <QuickAnswer\n          question={${JSON.stringify(quickAnswerQuestion)}}\n          answer={${JSON.stringify(quickAnswerAnswer)}}\n        />\n\n        `;
  const hIdx = src.indexOf(headingAnchor);
  // 直前の行頭インデントを保つため、headingの開始位置に挿入
  src = src.slice(0, hIdx) + qa + src.slice(hIdx);

  // 3. FAQSection before <ArticleFooter
  const faqItems = faqs.map((f) => `            { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} },`).join("\n");
  const faqBlock = `<FAQSection\n          slug=${JSON.stringify(slug)}\n          items={[\n${faqItems}\n          ]}\n        />\n\n        `;
  const fIdx = src.search(/<ArticleFooter\s+currentSlug=/);
  src = src.slice(0, fIdx) + faqBlock + src.slice(fIdx);

  if (APPLY) fs.writeFileSync(file, src, "utf8");
  done++;
}

console.log(`${APPLY ? "APPLIED" : "DRY"}: inserted ${done} / skipped ${skipped.length} / failed ${failed.length}`);
if (skipped.length) console.log("SKIPPED:\n  " + skipped.join("\n  "));
if (failed.length) console.log("FAILED:\n  " + failed.join("\n  "));
