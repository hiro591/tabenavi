"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { ChainRestaurant, MenuItem } from "@/types/database";

type MealType = "breakfast" | "lunch" | "dinner" | "snack";

const MEAL_TYPES: { value: MealType; label: string }[] = [
  { value: "breakfast", label: "朝食" },
  { value: "lunch", label: "昼食" },
  { value: "dinner", label: "夕食" },
  { value: "snack", label: "間食" },
];

export default function RecordPage() {
  const router = useRouter();
  const supabase = createClient();

  // Step management
  const [step, setStep] = useState(1);
  const [isManualMode, setIsManualMode] = useState(false);

  // Step 1: Chain selection
  const [chains, setChains] = useState<ChainRestaurant[]>([]);
  const [chainSearch, setChainSearch] = useState("");
  const [selectedChain, setSelectedChain] = useState<ChainRestaurant | null>(null);

  // Step 2: Menu selection
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [menuSearch, setMenuSearch] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [menusLoading, setMenusLoading] = useState(false);

  // Step 3: Confirm & Record
  const [mealType, setMealType] = useState<MealType>("lunch");
  const [calorieAdjustment, setCalorieAdjustment] = useState(0);

  // Manual input
  const [customName, setCustomName] = useState("");
  const [customCalories, setCustomCalories] = useState(0);
  const [customProtein, setCustomProtein] = useState(0);
  const [customFat, setCustomFat] = useState(0);
  const [customCarbs, setCustomCarbs] = useState(0);

  // UI state
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(false);
  const [chainsLoading, setChainsLoading] = useState(true);

  // Fetch chains on mount
  useEffect(() => {
    async function fetchChains() {
      const { data } = await supabase
        .from("chain_restaurants")
        .select("*")
        .order("name");
      if (data) setChains(data);
      setChainsLoading(false);
    }
    fetchChains();
  }, []);

  // Fetch menus when chain is selected
  useEffect(() => {
    if (!selectedChain) return;
    async function fetchMenus() {
      setMenusLoading(true);
      const { data } = await supabase
        .from("menu_items")
        .select("*")
        .eq("chain_restaurant_id", selectedChain!.id)
        .order("name");
      if (data) setMenus(data);
      setMenusLoading(false);
    }
    fetchMenus();
  }, [selectedChain]);

  // Filtered chains
  const filteredChains = useMemo(() => {
    if (!chainSearch) return chains;
    return chains.filter((c) =>
      c.name.toLowerCase().includes(chainSearch.toLowerCase())
    );
  }, [chains, chainSearch]);

  // Filtered menus
  const filteredMenus = useMemo(() => {
    if (!menuSearch) return menus;
    return menus.filter((m) =>
      m.name.toLowerCase().includes(menuSearch.toLowerCase())
    );
  }, [menus, menuSearch]);

  // Final calories
  const finalCalories = isManualMode
    ? customCalories
    : (selectedMenu?.calories ?? 0) + calorieAdjustment;

  // Handle save
  async function handleSave() {
    setSaving(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    await supabase.from("food_logs").insert({
      user_id: user.id,
      menu_item_id: selectedMenu?.id ?? null,
      custom_name: isManualMode ? customName : null,
      calories: finalCalories,
      protein: isManualMode ? customProtein : (selectedMenu?.protein ?? 0),
      fat: isManualMode ? customFat : (selectedMenu?.fat ?? 0),
      carbs: isManualMode ? customCarbs : (selectedMenu?.carbs ?? 0),
      meal_type: mealType,
      logged_at: new Date().toISOString(),
    });

    setSaving(false);
    setToast(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  }

  // Go to manual mode
  function goManual() {
    setIsManualMode(true);
    setSelectedChain(null);
    setSelectedMenu(null);
    setStep(3);
  }

  // Step indicator
  function StepIndicator() {
    return (
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                s <= step
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-0.5 transition-colors ${
                  s < step ? "bg-orange-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => {
              if (step === 1 || (step === 3 && isManualMode)) {
                router.back();
              } else if (step === 2) {
                setStep(1);
                setSelectedChain(null);
                setMenus([]);
                setMenuSearch("");
              } else if (step === 3) {
                setStep(2);
                setSelectedMenu(null);
                setCalorieAdjustment(0);
              }
            }}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-800">食事を記録</h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-6">
        <StepIndicator />

        {/* Step 1: Chain Selection */}
        <div
          className={`transition-all duration-300 ${
            step === 1
              ? "opacity-100 translate-x-0"
              : "opacity-0 absolute -translate-x-full pointer-events-none"
          }`}
        >
          {step === 1 && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="お店を検索..."
                  value={chainSearch}
                  onChange={(e) => setChainSearch(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-800"
                />
              </div>

              {chainsLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {filteredChains.map((chain) => (
                    <button
                      key={chain.id}
                      onClick={() => {
                        setSelectedChain(chain);
                        setStep(2);
                      }}
                      className="bg-white rounded-xl p-4 border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all text-center active:scale-95"
                    >
                      <span className="text-2xl block mb-1">
                        {chain.emoji || "🍽️"}
                      </span>
                      <span className="text-xs font-medium text-gray-700 line-clamp-2">
                        {chain.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={goManual}
                className="w-full py-3 rounded-xl border-2 border-dashed border-orange-300 text-orange-500 font-medium hover:bg-orange-50 transition-colors"
              >
                手動入力
              </button>
            </>
          )}
        </div>

        {/* Step 2: Menu Selection */}
        <div
          className={`transition-all duration-300 ${
            step === 2
              ? "opacity-100 translate-x-0"
              : "opacity-0 absolute translate-x-full pointer-events-none"
          }`}
        >
          {step === 2 && (
            <>
              <div className="flex items-center gap-2 mb-4 bg-orange-50 rounded-xl px-4 py-2">
                <span className="text-xl">
                  {selectedChain?.emoji || "🍽️"}
                </span>
                <span className="font-medium text-gray-800">
                  {selectedChain?.name}
                </span>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="メニューを検索..."
                  value={menuSearch}
                  onChange={(e) => setMenuSearch(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-800"
                />
              </div>

              {menusLoading ? (
                <div className="flex justify-center py-12">
                  <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredMenus.map((menu) => (
                    <button
                      key={menu.id}
                      onClick={() => {
                        setSelectedMenu(menu);
                        setStep(3);
                      }}
                      className="w-full bg-white rounded-xl p-4 border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all text-left active:scale-[0.98]"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-gray-800">
                          {menu.name}
                        </span>
                        <span className="text-orange-500 font-bold text-sm whitespace-nowrap ml-2">
                          {menu.calories} kcal
                        </span>
                      </div>
                      <div className="flex gap-3 mt-2 text-xs text-gray-500">
                        <span>P: {menu.protein}g</span>
                        <span>F: {menu.fat}g</span>
                        <span>C: {menu.carbs}g</span>
                      </div>
                    </button>
                  ))}
                  {filteredMenus.length === 0 && !menusLoading && (
                    <p className="text-center text-gray-400 py-8">
                      メニューが見つかりませんでした
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Step 3: Confirm & Record */}
        <div
          className={`transition-all duration-300 ${
            step === 3
              ? "opacity-100 translate-x-0"
              : "opacity-0 absolute translate-x-full pointer-events-none"
          }`}
        >
          {step === 3 && (
            <>
              {isManualMode ? (
                /* Manual Input Form */
                <div className="bg-white rounded-xl p-5 border border-gray-100 mb-4 space-y-4">
                  <h2 className="font-bold text-gray-800">手動入力</h2>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">
                      メニュー名
                    </label>
                    <input
                      type="text"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="例: チキンカレー"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">
                      カロリー (kcal)
                    </label>
                    <input
                      type="number"
                      value={customCalories || ""}
                      onChange={(e) =>
                        setCustomCalories(Number(e.target.value))
                      }
                      placeholder="0"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">
                        P (g)
                      </label>
                      <input
                        type="number"
                        value={customProtein || ""}
                        onChange={(e) =>
                          setCustomProtein(Number(e.target.value))
                        }
                        placeholder="0"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">
                        F (g)
                      </label>
                      <input
                        type="number"
                        value={customFat || ""}
                        onChange={(e) =>
                          setCustomFat(Number(e.target.value))
                        }
                        placeholder="0"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">
                        C (g)
                      </label>
                      <input
                        type="number"
                        value={customCarbs || ""}
                        onChange={(e) =>
                          setCustomCarbs(Number(e.target.value))
                        }
                        placeholder="0"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Selected Menu Confirmation */
                <div className="bg-white rounded-xl p-5 border border-gray-100 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">
                      {selectedChain?.emoji || "🍽️"}
                    </span>
                    <span className="text-sm text-gray-500">
                      {selectedChain?.name}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-800 text-lg mb-3">
                    {selectedMenu?.name}
                  </h2>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-orange-50 rounded-lg p-2">
                      <p className="text-xs text-gray-500">カロリー</p>
                      <p className="font-bold text-orange-500">
                        {finalCalories}
                      </p>
                      <p className="text-xs text-gray-400">kcal</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-xs text-gray-500">タンパク質</p>
                      <p className="font-bold text-blue-500">
                        {selectedMenu?.protein ?? 0}
                      </p>
                      <p className="text-xs text-gray-400">g</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-2">
                      <p className="text-xs text-gray-500">脂質</p>
                      <p className="font-bold text-yellow-500">
                        {selectedMenu?.fat ?? 0}
                      </p>
                      <p className="text-xs text-gray-400">g</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2">
                      <p className="text-xs text-gray-500">炭水化物</p>
                      <p className="font-bold text-green-500">
                        {selectedMenu?.carbs ?? 0}
                      </p>
                      <p className="text-xs text-gray-400">g</p>
                    </div>
                  </div>

                  {/* Calorie adjustment slider */}
                  <div className="mt-4">
                    <label className="text-sm text-gray-500 block mb-2">
                      カロリー調整（大盛り・トッピング等）
                    </label>
                    <input
                      type="range"
                      min={-200}
                      max={500}
                      step={10}
                      value={calorieAdjustment}
                      onChange={(e) =>
                        setCalorieAdjustment(Number(e.target.value))
                      }
                      className="w-full accent-orange-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>-200</span>
                      <span
                        className={`font-medium ${
                          calorieAdjustment > 0
                            ? "text-red-500"
                            : calorieAdjustment < 0
                            ? "text-blue-500"
                            : "text-gray-500"
                        }`}
                      >
                        {calorieAdjustment > 0
                          ? `+${calorieAdjustment}`
                          : calorieAdjustment}{" "}
                        kcal
                      </span>
                      <span>+500</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Meal type selection */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4">
                <p className="text-sm text-gray-500 mb-3">食事タイプ</p>
                <div className="grid grid-cols-4 gap-2">
                  {MEAL_TYPES.map((mt) => (
                    <button
                      key={mt.value}
                      onClick={() => setMealType(mt.value)}
                      className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                        mealType === mt.value
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {mt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save button */}
              <button
                onClick={handleSave}
                disabled={
                  saving ||
                  (isManualMode && (!customName || customCalories <= 0))
                }
                className="w-full py-3.5 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    記録中...
                  </span>
                ) : (
                  "記録する"
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in-up">
            記録しました!
          </div>
        </div>
      )}
    </div>
  );
}
