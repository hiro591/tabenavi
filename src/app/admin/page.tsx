"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Search, Save, Plus, ExternalLink, Trash2, Lock } from "lucide-react";

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
}

// ─── Official nutrition links ────────────────────────────────────────────────

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
        className="w-full px-1 py-0.5 border border-blue-400 rounded text-sm bg-white outline-none"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") {
            setDraft(String(value ?? ""));
            setEditing(false);
          }
        }}
      />
    );
  }

  return (
    <span
      onClick={() => setEditing(true)}
      className={`cursor-pointer px-1 py-0.5 rounded text-sm block min-h-[24px] transition-colors ${
        saved ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
      }`}
    >
      {value ?? "-"}
      {saved && <Save className="inline w-3 h-3 ml-1 text-green-600" />}
    </span>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

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

  const [chains, setChains] = useState<Chain[]>([]);
  const [selectedChainId, setSelectedChainId] = useState<string>("");
  const [chainSearch, setChainSearch] = useState("");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);

  // New item form
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
    category: "",
  });
  const [adding, setAdding] = useState(false);

  // Fetch chains
  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("chain_restaurants")
        .select("id, name, emoji")
        .order("name");
      if (data) setChains(data);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch items when chain selected
  const fetchItems = useCallback(
    async (chainId: string) => {
      if (!chainId) {
        setItems([]);
        return;
      }
      setLoading(true);
      const { data } = await supabase
        .from("menu_items")
        .select("id, chain_restaurant_id, name, price, calories, protein, fat, carbs, category")
        .eq("chain_restaurant_id", chainId)
        .order("category")
        .order("name");
      setItems(data ?? []);
      setLoading(false);
    },
    [supabase],
  );

  useEffect(() => {
    fetchItems(selectedChainId);
  }, [selectedChainId, fetchItems]);

  // Update a single field
  const updateField = async (itemId: string, field: string, value: string) => {
    const numericFields = ["price", "calories", "protein", "fat", "carbs"];
    const parsed = numericFields.includes(field)
      ? value === "" ? null : Number(value)
      : value || null;

    await supabase.from("menu_items").update({ [field]: parsed }).eq("id", itemId);
  };

  // Delete item
  const deleteItem = async (itemId: string) => {
    if (!confirm("このメニューを削除しますか？")) return;
    await supabase.from("menu_items").delete().eq("id", itemId);
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  // Add new item
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
      })
      .select()
      .single();
    if (data) {
      setItems((prev) => [...prev, data]);
      setNewItem({ name: "", price: "", calories: "", protein: "", fat: "", carbs: "", category: "" });
    }
    setAdding(false);
  };

  const selectedChain = chains.find((c) => c.id === selectedChainId);
  const filteredChains = chainSearch
    ? chains.filter((c) => c.name.includes(chainSearch))
    : chains;

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
          {authError && (
            <p className="text-red-500 text-xs mb-3">パスワードが正しくありません</p>
          )}
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">メニューデータ管理</h1>

        {/* Chain selector */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">チェーン選択</label>
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="チェーン名で検索..."
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm"
              value={chainSearch}
              onChange={(e) => setChainSearch(e.target.value)}
            />
          </div>
          <select
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={selectedChainId}
            onChange={(e) => setSelectedChainId(e.target.value)}
          >
            <option value="">-- 選択してください --</option>
            {filteredChains.map((c) => (
              <option key={c.id} value={c.id}>
                {c.emoji ?? ""} {c.name}
              </option>
            ))}
          </select>
          {selectedChain && (
            <p className="mt-2 text-sm text-gray-500">
              {items.length} 件のメニュー
            </p>
          )}
        </div>

        {/* Items table */}
        {selectedChainId && (
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-6">
            {loading ? (
              <div className="p-8 text-center text-gray-400">読み込み中...</div>
            ) : items.length === 0 ? (
              <div className="p-8 text-center text-gray-400">メニューがありません</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b text-left text-gray-600">
                      <th className="px-3 py-2 font-medium">名前</th>
                      <th className="px-3 py-2 font-medium w-20">価格</th>
                      <th className="px-3 py-2 font-medium w-20">kcal</th>
                      <th className="px-3 py-2 font-medium w-16">P</th>
                      <th className="px-3 py-2 font-medium w-16">F</th>
                      <th className="px-3 py-2 font-medium w-16">C</th>
                      <th className="px-3 py-2 font-medium w-28">カテゴリ</th>
                      <th className="px-3 py-2 font-medium w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr
                        key={item.id}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      >
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.name}
                            onSave={(v) => updateField(item.id, "name", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.price}
                            type="number"
                            onSave={(v) => updateField(item.id, "price", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.calories}
                            type="number"
                            onSave={(v) => updateField(item.id, "calories", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.protein}
                            type="number"
                            onSave={(v) => updateField(item.id, "protein", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.fat}
                            type="number"
                            onSave={(v) => updateField(item.id, "fat", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.carbs}
                            type="number"
                            onSave={(v) => updateField(item.id, "carbs", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <EditableCell
                            value={item.category}
                            onSave={(v) => updateField(item.id, "category", v)}
                          />
                        </td>
                        <td className="px-3 py-1">
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="text-red-400 hover:text-red-600 p-1"
                            title="削除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Add new item */}
            {selectedChainId && (
              <div className="border-t p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-1">
                  <Plus className="w-4 h-4" />
                  新規メニュー追加
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  <input
                    placeholder="名前 *"
                    className="col-span-2 border rounded px-2 py-1.5 text-sm"
                    value={newItem.name}
                    onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))}
                  />
                  <input
                    placeholder="価格"
                    type="number"
                    className="border rounded px-2 py-1.5 text-sm"
                    value={newItem.price}
                    onChange={(e) => setNewItem((p) => ({ ...p, price: e.target.value }))}
                  />
                  <input
                    placeholder="カテゴリ"
                    className="border rounded px-2 py-1.5 text-sm"
                    value={newItem.category}
                    onChange={(e) => setNewItem((p) => ({ ...p, category: e.target.value }))}
                  />
                  <input
                    placeholder="kcal"
                    type="number"
                    className="border rounded px-2 py-1.5 text-sm"
                    value={newItem.calories}
                    onChange={(e) => setNewItem((p) => ({ ...p, calories: e.target.value }))}
                  />
                  <input
                    placeholder="P (g)"
                    type="number"
                    className="border rounded px-2 py-1.5 text-sm"
                    value={newItem.protein}
                    onChange={(e) => setNewItem((p) => ({ ...p, protein: e.target.value }))}
                  />
                  <input
                    placeholder="F (g)"
                    type="number"
                    className="border rounded px-2 py-1.5 text-sm"
                    value={newItem.fat}
                    onChange={(e) => setNewItem((p) => ({ ...p, fat: e.target.value }))}
                  />
                  <input
                    placeholder="C (g)"
                    type="number"
                    className="border rounded px-2 py-1.5 text-sm"
                    value={newItem.carbs}
                    onChange={(e) => setNewItem((p) => ({ ...p, carbs: e.target.value }))}
                  />
                </div>
                <button
                  onClick={addItem}
                  disabled={!newItem.name || adding}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  {adding ? "追加中..." : "追加"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Official links */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h2 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-1">
            <ExternalLink className="w-4 h-4" />
            公式栄養情報ページ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.entries(OFFICIAL_LINKS).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline truncate"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
