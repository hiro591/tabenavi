// Bulk update all guide articles for SEO improvement.
// - Task B: dateModified → dynamic (new Date().toISOString().split("T")[0])
// - Task C: title → add 【2026年最新版】 prefix where missing
// Idempotent: safe to re-run.
import fs from "fs";
import path from "path";

const GUIDE_DIR = "src/app/guide";
const dirs = fs.readdirSync(GUIDE_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name !== "[slug]")
  .map((d) => d.name);

const DYN_DATE = `new Date().toISOString().split("T")[0]`;
const TITLE_PREFIX = "【2026年最新版】";

const stats = { processed: 0, dateUpdated: 0, dateAlready: 0, titleUpdated: 0, titleAlready: 0, skipped: [] };

for (const slug of dirs) {
  const file = path.join(GUIDE_DIR, slug, "page.tsx");
  if (!fs.existsSync(file)) { stats.skipped.push(slug); continue; }
  let src = fs.readFileSync(file, "utf8");
  let changed = false;

  // ── Task B: dateModified ─────────────────────────────────────────
  const dynRegex = /dateModified:\s*new Date\(\)\.toISOString\(\)\.split\("T"\)\[0\]/;
  const hardRegex = /dateModified:\s*"\d{4}-\d{2}-\d{2}"/;
  if (dynRegex.test(src)) {
    stats.dateAlready++;
  } else if (hardRegex.test(src)) {
    src = src.replace(hardRegex, `dateModified: ${DYN_DATE}`);
    stats.dateUpdated++;
    changed = true;
  }

  // ── Task C: title prefix ────────────────────────────────────────
  // Find the metadata.title field. Two patterns:
  //   title: "...."   (single line)
  //   title:\n    "...."  (two lines)
  // Match either, capture the string content, check for existing year markers.
  const yearMarkerRegex = /【20\d{2}|【最新|【完全版/;
  const metaBlockMatch = src.match(/export const metadata[\s\S]*?title:\s*("(?:[^"\\]|\\.)*"|\n\s*"(?:[^"\\]|\\.)*")/);
  if (metaBlockMatch) {
    const titleLiteral = metaBlockMatch[1].trim().replace(/^"|"$/g, "");
    if (yearMarkerRegex.test(titleLiteral)) {
      stats.titleAlready++;
    } else {
      // Add prefix; for safety, replace the EXACT literal in the file
      const oldQuoted = `"${titleLiteral}"`;
      const newQuoted = `"${TITLE_PREFIX}${titleLiteral}"`;
      // Replace only first occurrence (the metadata one)
      const idx = src.indexOf(oldQuoted);
      if (idx >= 0) {
        src = src.slice(0, idx) + newQuoted + src.slice(idx + oldQuoted.length);
        stats.titleUpdated++;
        changed = true;
      }
    }
  }

  if (changed) fs.writeFileSync(file, src, "utf8");
  stats.processed++;
}

console.log(JSON.stringify(stats, null, 2));
