"use client";

// 栄養成分テーブル(ソート/商品名検索/カテゴリ絞り込み)。
// サーバーコンポーネントから items を受け取り、初期状態(カロリー昇順・全件)でSSRされるため
// 全データが初期HTMLに入る=SEO非劣化。並べ替え/検索はクライアントでハイドレート後に動く。
import { useState, useMemo } from "react";
import Link from "next/link";

interface Item {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
  category: string | null;
  chain_restaurants?: { name: string } | null;
}

type SortKey = "name" | "calories" | "protein" | "fat" | "carbs" | "price";

export default function NutritionTableClient({
  items,
  isGeneralGuide,
  hasPriceData,
  hasProteinData,
  hasFatData,
  hasCarbsData,
}: {
  items: Item[];
  isGeneralGuide: boolean;
  hasPriceData: boolean;
  hasProteinData: boolean;
  hasFatData: boolean;
  hasCarbsData: boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("calories");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const categories = useMemo(() => {
    const s = new Set<string>();
    for (const it of items) if (it.category) s.add(it.category);
    return Array.from(s);
  }, [items]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    let r = items.filter((it) => {
      if (q && !it.name.toLowerCase().includes(q)) return false;
      if (category && it.category !== category) return false;
      return true;
    });
    const dir = sortDir === "asc" ? 1 : -1;
    r = [...r].sort((a, b) => {
      if (sortKey === "name") return a.name.localeCompare(b.name, "ja") * dir;
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av == null && bv == null) return 0;
      if (av == null) return 1; // 欠損は常に末尾
      if (bv == null) return -1;
      return (av - bv) * dir;
    });
    return r;
  }, [items, query, category, sortKey, sortDir]);

  const toggleSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };

  const arrow = (k: SortKey) => (sortKey === k ? (sortDir === "asc" ? " ▲" : " ▼") : "");

  const Th = ({ k, label, align = "right" }: { k: SortKey; label: string; align?: "left" | "right" }) => (
    <th className={`${align === "left" ? "text-left" : "text-right"} px-4 py-3 font-medium`}>
      <button
        type="button"
        onClick={() => toggleSort(k)}
        className={`inline-flex items-center hover:text-sky-600 transition-colors ${sortKey === k ? "text-sky-600 font-bold" : ""}`}
        aria-label={`${label}で並べ替え`}
      >
        {label}
        <span className="text-[10px]">{arrow(k)}</span>
      </button>
    </th>
  );

  return (
    <div>
      {/* 検索＋カテゴリ絞り込み */}
      <div className="mb-3 flex flex-col gap-3">
        <input
          type="search"
          inputMode="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="メニュー名で検索（例: チキン）"
          className="w-full sm:max-w-xs rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
        />
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                category === null ? "bg-sky-500 text-white border-sky-500" : "border-gray-200 text-gray-600 hover:border-sky-300"
              }`}
            >
              すべて
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  category === c ? "bg-sky-500 text-white border-sky-500" : "border-gray-200 text-gray-600 hover:border-sky-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 mb-2">{rows.length}件表示（見出しをタップで並べ替え）</p>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <Th k="name" label="メニュー" align="left" />
              {isGeneralGuide && <th className="text-left px-4 py-3 font-medium">チェーン</th>}
              {hasPriceData && <Th k="price" label="価格" />}
              <Th k="calories" label="カロリー" />
              {hasProteinData && <Th k="protein" label="タンパク質" />}
              {hasFatData && <Th k="fat" label="脂質" />}
              {hasCarbsData && <Th k="carbs" label="炭水化物" />}
            </tr>
          </thead>
          <tbody>
            {rows.map((item, i) => (
              <tr key={item.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="px-4 py-2.5 text-gray-900 font-medium max-w-[200px] truncate">
                  <Link href={`/items/${item.id}`} className="hover:text-sky-600 transition-colors">
                    {item.name}
                  </Link>
                </td>
                {isGeneralGuide && (
                  <td className="px-4 py-2.5 text-gray-500 text-xs">{item.chain_restaurants?.name ?? "-"}</td>
                )}
                {hasPriceData && (
                  <td className="text-right px-4 py-2.5 text-gray-700">{item.price != null ? `¥${item.price}` : "-"}</td>
                )}
                <td className="text-right px-4 py-2.5 text-gray-700">
                  {item.calories != null ? `${item.calories} kcal` : "-"}
                </td>
                {hasProteinData && (
                  <td className="text-right px-4 py-2.5 text-gray-700">
                    {item.protein != null ? `${item.protein.toFixed(1)} g` : "-"}
                  </td>
                )}
                {hasFatData && (
                  <td className="text-right px-4 py-2.5 text-gray-700">
                    {item.fat != null ? `${item.fat.toFixed(1)} g` : "-"}
                  </td>
                )}
                {hasCarbsData && (
                  <td className="text-right px-4 py-2.5 text-gray-700">
                    {item.carbs != null ? `${item.carbs.toFixed(1)} g` : "-"}
                  </td>
                )}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-400 text-sm">
                  該当するメニューがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
