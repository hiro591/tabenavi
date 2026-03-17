"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  Search, Save, Plus, ExternalLink, Trash2, Lock, Flag, CheckCircle,
  LayoutDashboard, Database, MessageSquare, ChevronDown, X,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Chain {
  id: string;
  name: string;
  emoji: string | null;
}

interface MenuItem {
  id: string;
  chain_restaurant_id: string;
  name: string;
  price: number | null;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  category: string | null;
  source_type: string | null;
}

interface Report {
  id: string;
  item_name: string;
  chain_name: string;
  fields: string;
  correct_values: string;
  source: string | null;
  created_at: string;
  menu_item_id: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const OFFICIAL_LINKS: Record<string, string> = {
  "マクドナルド": "https://www.mcdonalds.co.jp/quality/allergy_Nutrition/nutrient/",
  "吉野家": "https://www.yoshinoya.com/pdf/allergy/",
  "松屋": "https://www.matsuyafoods.co.jp/matsuya/menu/",
  "すき家": "https://www.sukiya.jp/menu/",
  "サイゼリヤ": "https://www.saizeriya.co.jp/menu/",
  "ガスト": "https://www.skylark.co.jp/gusto/menu/",
  "モスバーガー": "https://www.mos.jp/menu/",
  "ケンタッキー": "https://www.kfc.co.jp/menu/",
  "スターバックス": "https://www.starbucks.co.jp/menu/",
  "丸亀製麺": "https://jp.marugame.com/menu/",
  "大戸屋": "https://www.ootoya.com/menu/",
  "やよい軒": "https://www.yayoiken.com/menu/",
  "日高屋": "https://hidakaya.hiday.co.jp/menu/",
  "餃子の王将": "https://www.ohsho.co.jp/menu/",
  "くら寿司": "https://www.kurasushi.co.jp/menu/",
  "スシロー": "https://www.akindo-sushiro.co.jp/menu/",
  "バーミヤン": "https://www.skylark.co.jp/bamiyan/menu/",
  "デニーズ": "https://www.dennys.jp/menu/",
  "ドトール": "https://www.doutor.co.jp/dcs/menu/",
  "サブウェイ": "https://www.subway.co.jp/menu/",
  "なか卯": "https://www.nakau.co.jp/menu/",
};

const CATEGORIES = [
  "丼もの", "麺類", "洋食", "和食", "中華・アジア", "定食・セット",
  "揚げ物", "パン・サンドイッチ", "サラダ・ヘルシー", "おにぎり・軽食",
  "スイーツ", "ドリンク",
];

// ─── Editable cell ──────────────────────────────────────────────────────────

function EditableCell({
  value,
  onSave,
  type = "text",
}: {
  value: string | number | null;
  onSave: (v: string) => Promise<void>;
  type?: "text" | "number";
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(value ?? ""));
  const [saved, setSaved] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  useEffect(() => {
    setDraft(String(value ?? ""));
  }, [value]);

  const commit = async () => {
    setEditing(false);
    if (draft === String(value ?? "")) return;
    await onSave(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        type={type}
        className="w-full px-2 py-1 border-2 border-orange-400 rounded-lg text-sm bg-white outline-none"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") { setDraft(String(value ?? "")); setEditing(false); }
        }}
      />
    );
  }

  return (
    <span
      onClick={() => setEditing(true)}
      className={`cursor-pointer px-2 py-1 rounded-lg text-sm block min-h-[28px] flex items-center transition-all ${
        saved ? "bg-green-100 text-green-700" : "hover:bg-orange-50 hover:text-orange-700"
      }`}
    >
      {value ?? <span className="text-gray-300">-</span>}
      {saved && <Save className="inline w-3 h-3 ml-1 text-green-600" />}
    </span>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

type Tab = "overview" | "editor" | "reports";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleAuth = () => {
    if (password === "tabenavi2025") {
      setAuthenticated(true);
      setAuthError(false);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      setAuthError(true);
    }
  };

  const supabase = createClient();

  const [tab, setTab] = useState<Tab>("overview");
  const [chains, setChains] = useState<Chain[]>([]);
  const [selectedChainId, setSelectedChainId] = useState<string>("");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [itemSearch, setItemSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);
  const [reportsLoading, setReportsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "", price: "", calories: "", protein: "", fat: "", carbs: "", category: "",
  });
  const [adding, setAdding] = useState(false);

  // Fetch initial data
  useEffect(() => {
    (async () => {
      const [chainsRes, reportsRes, countRes] = await Promise.all([
        supabase.from("chain_restaurants").select("id, name, emoji").order("name"),
        supabase.from("data_reports").select("*").order("created_at", { ascending: false }).limit(50),
        supabase.from("menu_items").select("id", { count: "exact", head: true }),
      ]);
      if (chainsRes.data) setChains(chainsRes.data);
      if (reportsRes.data) setReports(reportsRes.data as Report[]);
      if (countRes.count != null) setTotalItems(countRes.count);
      setReportsLoading(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dismissReport = async (reportId: string) => {
    await supabase.from("data_reports").delete().eq("id", reportId);
    setReports((prev) => prev.filter((r) => r.id !== reportId));
  };

  const fetchItems = useCallback(
    async (chainId: string) => {
      if (!chainId) { setItems([]); return; }
      setLoading(true);
      const { data } = await supabase
        .from("menu_items")
        .select("id, chain_restaurant_id, name, price, calories, protein, fat, carbs, category, source_type")
        .eq("chain_restaurant_id", chainId)
        .order("category").order("name");
      setItems(data ?? []);
      setLoading(false);
    },
    [supabase],
  );

  useEffect(() => {
    if (selectedChainId) fetchItems(selectedChainId);
  }, [selectedChainId, fetchItems]);

  const updateField = async (itemId: string, field: string, value: string) => {
    const numericFields = ["price", "calories", "protein", "fat", "carbs"];
    const parsed = numericFields.includes(field) ? (value === "" ? null : Number(value)) : value || null;
    await supabase.from("menu_items").update({ [field]: parsed }).eq("id", itemId);
  };

  const deleteItem = async (itemId: string) => {
    if (!confirm("このメニューを削除しますか？")) return;
    await supabase.from("menu_items").delete().eq("id", itemId);
    setItems((prev) => prev.filter((i) => i.id !== itemId));
    setTotalItems((prev) => prev - 1);
  };

  const addItem = async () => {
    if (!newItem.name || !selectedChainId) return;
    setAdding(true);
    const { data } = await supabase
      .from("menu_items")
      .insert({
        chain_restaurant_id: selectedChainId,
        name: newItem.name,
        price: newItem.price ? Number(newItem.price) : null,
        calories: newItem.calories ? Number(newItem.calories) : null,
        protein: newItem.protein ? Number(newItem.protein) : null,
        fat: newItem.fat ? Number(newItem.fat) : null,
        carbs: newItem.carbs ? Number(newItem.carbs) : null,
        category: newItem.category || null,
        source_type: "chain_restaurant",
      })
      .select()
      .single();
    if (data) {
      setItems((prev) => [...prev, data]);
      setNewItem({ name: "", price: "", calories: "", protein: "", fat: "", carbs: "", category: "" });
      setTotalItems((prev) => prev + 1);
      setShowAddForm(false);
    }
    setAdding(false);
  };

  const selectedChain = chains.find((c) => c.id === selectedChainId);
  const officialLink = selectedChain ? OFFICIAL_LINKS[selectedChain.name] : null;
  const filteredItems = itemSearch
    ? items.filter((i) => i.name.toLowerCase().includes(itemSearch.toLowerCase()))
    : items;

  // ─── Login ─────────────────────────────────────────────────────────────────

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-lg font-bold text-gray-900">管理者ログイン</h1>
            <p className="text-sm text-gray-500 mt-1">メニューデータ管理ページ</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleAuth(); }}
            placeholder="パスワードを入力"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 mb-3"
          />
          {authError && <p className="text-red-500 text-xs mb-3">パスワードが正しくありません</p>}
          <button
            onClick={handleAuth}
            className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors"
          >
            ログイン
          </button>
        </div>
      </div>
    );
  }

  // ─── Main UI ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
              <Database className="w-3.5 h-3.5 text-white" />
            </div>
            たべなび Admin
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{chains.length} チェーン</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>{totalItems} メニュー</span>
            {reports.length > 0 && (
              <>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="text-red-500 font-bold">{reports.length} 報告</span>
              </>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 flex gap-1">
          {([
            { key: "overview" as Tab, label: "ダッシュボード", Icon: LayoutDashboard },
            { key: "editor" as Tab, label: "メニュー編集", Icon: Database },
            { key: "reports" as Tab, label: `報告 ${reports.length > 0 ? `(${reports.length})` : ""}`, Icon: MessageSquare },
          ]).map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                tab === t.key
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <t.Icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* ═══ Overview Tab ═══ */}
        {tab === "overview" && (
          <div className="space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-medium">チェーン数</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{chains.length}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-medium">メニュー総数</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{totalItems}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-medium">未対応の報告</p>
                <p className={`text-2xl font-bold mt-1 ${reports.length > 0 ? "text-red-500" : "text-gray-900"}`}>{reports.length}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400 font-medium">平均メニュー/店</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{chains.length > 0 ? Math.round(totalItems / chains.length) : 0}</p>
              </div>
            </div>

            {/* Chain list with item counts */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-sm font-bold text-gray-700">チェーン別メニュー数</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-100">
                {chains.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setSelectedChainId(c.id); setTab("editor"); }}
                    className="bg-white p-3 hover:bg-orange-50 transition-colors text-left group"
                  >
                    <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 truncate">{c.name}</p>
                    {OFFICIAL_LINKS[c.name] && (
                      <a
                        href={OFFICIAL_LINKS[c.name]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] text-blue-500 hover:underline flex items-center gap-0.5 mt-0.5"
                      >
                        <ExternalLink className="w-2.5 h-2.5" /> 公式サイト
                      </a>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Latest reports preview */}
            {reports.length > 0 && (
              <div className="bg-white rounded-xl border border-orange-200 shadow-sm">
                <div className="p-4 border-b border-orange-100 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Flag className="w-4 h-4 text-orange-500" />
                    最新の報告
                  </h2>
                  <button onClick={() => setTab("reports")} className="text-xs text-orange-500 font-medium hover:underline">
                    すべて見る
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {reports.slice(0, 3).map((r) => (
                    <div key={r.id} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{r.chain_name} - {r.item_name}</p>
                        <p className="text-xs text-gray-400">{r.fields} · {new Date(r.created_at).toLocaleDateString("ja-JP")}</p>
                      </div>
                      <button
                        onClick={() => dismissReport(r.id)}
                        className="text-xs text-green-600 bg-green-50 border border-green-200 px-2.5 py-1 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        対応済み
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ Editor Tab ═══ */}
        {tab === "editor" && (
          <div className="space-y-4">
            {/* Chain selector as buttons */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex flex-wrap gap-2">
                {chains.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedChainId(c.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedChainId === c.id
                        ? "bg-orange-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedChainId && (
              <>
                {/* Toolbar */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="メニュー内検索..."
                      value={itemSearch}
                      onChange={(e) => setItemSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    {itemSearch && (
                      <button onClick={() => setItemSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">{filteredItems.length} / {items.length} 件</span>
                  {officialLink && (
                    <a
                      href={officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-blue-600 bg-blue-50 border border-blue-200 px-3 py-2 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {selectedChain?.name}の公式サイト
                    </a>
                  )}
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="flex items-center gap-1.5 text-sm text-white bg-orange-500 px-3 py-2 rounded-xl hover:bg-orange-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    追加
                  </button>
                </div>

                {/* Add form (collapsible) */}
                {showAddForm && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-gray-700 mb-3">新規メニュー追加</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                      <input placeholder="名前 *" className="col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                        value={newItem.name} onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))} />
                      <input placeholder="価格" type="number" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                        value={newItem.price} onChange={(e) => setNewItem((p) => ({ ...p, price: e.target.value }))} />
                      <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                        value={newItem.category} onChange={(e) => setNewItem((p) => ({ ...p, category: e.target.value }))}>
                        <option value="">カテゴリ</option>
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <input placeholder="kcal" type="number" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white" value={newItem.calories} onChange={(e) => setNewItem((p) => ({ ...p, calories: e.target.value }))} />
                      <input placeholder="P (g)" type="number" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white" value={newItem.protein} onChange={(e) => setNewItem((p) => ({ ...p, protein: e.target.value }))} />
                      <input placeholder="F (g)" type="number" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white" value={newItem.fat} onChange={(e) => setNewItem((p) => ({ ...p, fat: e.target.value }))} />
                      <input placeholder="C (g)" type="number" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white" value={newItem.carbs} onChange={(e) => setNewItem((p) => ({ ...p, carbs: e.target.value }))} />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={addItem} disabled={!newItem.name || adding}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 disabled:opacity-50 flex items-center gap-1">
                        <Plus className="w-4 h-4" /> {adding ? "追加中..." : "追加"}
                      </button>
                      <button onClick={() => setShowAddForm(false)} className="text-gray-500 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                        キャンセル
                      </button>
                    </div>
                  </div>
                )}

                {/* Items table */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  {loading ? (
                    <div className="p-8 text-center text-gray-400">読み込み中...</div>
                  ) : filteredItems.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">
                      {itemSearch ? "検索結果がありません" : "メニューがありません"}
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50 border-b text-left text-gray-500 text-xs uppercase tracking-wider">
                            <th className="px-3 py-3 font-semibold">名前</th>
                            <th className="px-3 py-3 font-semibold w-20">価格</th>
                            <th className="px-3 py-3 font-semibold w-20">kcal</th>
                            <th className="px-3 py-3 font-semibold w-16">P</th>
                            <th className="px-3 py-3 font-semibold w-16">F</th>
                            <th className="px-3 py-3 font-semibold w-16">C</th>
                            <th className="px-3 py-3 font-semibold w-28">カテゴリ</th>
                            <th className="px-3 py-3 font-semibold w-10"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {filteredItems.map((item) => (
                            <tr key={item.id} className="hover:bg-orange-50/30 transition-colors">
                              <td className="px-3 py-1"><EditableCell value={item.name} onSave={(v) => updateField(item.id, "name", v)} /></td>
                              <td className="px-3 py-1"><EditableCell value={item.price} type="number" onSave={(v) => updateField(item.id, "price", v)} /></td>
                              <td className="px-3 py-1"><EditableCell value={item.calories} type="number" onSave={(v) => updateField(item.id, "calories", v)} /></td>
                              <td className="px-3 py-1"><EditableCell value={item.protein} type="number" onSave={(v) => updateField(item.id, "protein", v)} /></td>
                              <td className="px-3 py-1"><EditableCell value={item.fat} type="number" onSave={(v) => updateField(item.id, "fat", v)} /></td>
                              <td className="px-3 py-1"><EditableCell value={item.carbs} type="number" onSave={(v) => updateField(item.id, "carbs", v)} /></td>
                              <td className="px-3 py-1"><EditableCell value={item.category} onSave={(v) => updateField(item.id, "category", v)} /></td>
                              <td className="px-3 py-1">
                                <button onClick={() => deleteItem(item.id)} className="text-gray-300 hover:text-red-500 p-1 transition-colors" title="削除">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
            )}

            {!selectedChainId && (
              <div className="text-center py-16 text-gray-400">
                <Database className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">チェーンを選択してメニューを編集</p>
              </div>
            )}
          </div>
        )}

        {/* ═══ Reports Tab ═══ */}
        {tab === "reports" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Flag className="w-5 h-5 text-orange-500" />
                ユーザーからの報告
              </h2>
              {reports.length > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{reports.length} 件</span>
              )}
            </div>

            {reportsLoading ? (
              <div className="bg-white rounded-xl p-8 text-center text-gray-400 border">読み込み中...</div>
            ) : reports.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
                <p className="text-gray-500 font-medium">未対応の報告はありません</p>
              </div>
            ) : (
              <div className="space-y-3">
                {reports.map((r) => (
                  <div key={r.id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-base font-bold text-gray-900">{r.chain_name} - {r.item_name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{new Date(r.created_at).toLocaleString("ja-JP")}</p>
                      </div>
                      <button
                        onClick={() => dismissReport(r.id)}
                        className="flex items-center gap-1.5 text-sm text-green-600 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors shrink-0"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        対応済み
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {r.fields.split(",").map((f) => (
                        <span key={f} className="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium">{f}</span>
                      ))}
                    </div>
                    {r.correct_values && (
                      <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 border border-gray-100 mb-2">
                        <p className="text-[10px] text-gray-400 font-medium mb-1 uppercase tracking-wider">正しい値</p>
                        {r.correct_values}
                      </div>
                    )}
                    {r.source && (
                      <p className="text-xs text-gray-400">参照元: <span className="text-gray-600">{r.source}</span></p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
