"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Flame, Scale, Dumbbell, CheckCircle } from "lucide-react";

type Goal = "diet" | "maintain" | "bulk" | null;

interface Chain {
  id: string;
  name: string;
  emoji: string;
}

const GOAL_CALORIES: Record<Exclude<Goal, null>, number> = {
  diet: 1500,
  maintain: 2000,
  bulk: 2500,
};

const PRESET_CALORIES = [1500, 1800, 2000, 2200, 2500];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<Goal>(null);
  const [calories, setCalories] = useState(2000);
  const [chains, setChains] = useState<Chain[]>([]);
  const [selectedChains, setSelectedChains] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("chain_restaurants")
      .select("id, name, emoji")
      .order("name")
      .then(({ data }) => {
        if (data) setChains(data);
      });
  }, []);

  const selectGoal = (g: Exclude<Goal, null>) => {
    setGoal(g);
    setCalories(GOAL_CALORIES[g]);
  };

  const toggleChain = (id: string) => {
    setSelectedChains((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleComplete = async () => {
    setSaving(true);
    setSaveError(false);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { error } = await supabase
          .from("profiles")
          .update({ target_calories: calories })
          .eq("id", user.id);
        if (error) throw error;
      }
      if (selectedChains.length > 0) {
        localStorage.setItem("favoriteChains", JSON.stringify(selectedChains));
      }
      router.push("/dashboard");
    } catch {
      setSaving(false);
      setSaveError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress indicator */}
      <div className="flex justify-center gap-2 pt-8 pb-4">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all duration-300 ${
              s === step ? "w-8 bg-orange-500" : s < step ? "w-8 bg-orange-300" : "w-8 bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full px-6 pb-8">
        {/* Step 1: Welcome */}
        {step === 1 && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Flame className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">たべなびへようこそ！</h1>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              外食専門の食事管理アプリです。
              <br />
              まず簡単な設定をしましょう。
            </p>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl text-lg active:scale-[0.98] transition-transform"
            >
              はじめる →
            </button>
          </div>
        )}

        {/* Step 2: Goal Setting */}
        {step === 2 && (
          <div className="pt-4">
            <button
              onClick={() => setStep(1)}
              className="text-gray-400 text-sm mb-4"
            >
              ← 戻る
            </button>
            <h1 className="text-2xl font-bold mb-6">目標を教えてください</h1>

            <div className="space-y-3 mb-8">
              {([
                { key: "diet" as const, Icon: Flame, title: "ダイエット", desc: "体重を減らしたい" },
                { key: "maintain" as const, Icon: Scale, title: "現状維持", desc: "今の体型をキープしたい" },
                { key: "bulk" as const, Icon: Dumbbell, title: "筋肉増量", desc: "筋肉をつけたい" },
              ]).map((g) => (
                <button
                  key={g.key}
                  onClick={() => selectGoal(g.key)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    goal === g.key
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <g.Icon className={`w-6 h-6 ${goal === g.key ? "text-orange-500" : "text-gray-500"}`} />
                    <div>
                      <div className="font-bold text-lg">{g.title}</div>
                      <div className="text-gray-500 text-sm">{g.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1日の目標カロリー
              </label>
              <div className="flex items-center justify-center gap-2 mb-4">
                <input
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(Number(e.target.value))}
                  className="text-center text-3xl font-bold w-40 border-b-2 border-orange-500 outline-none py-2"
                />
                <span className="text-xl text-gray-500">kcal</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {PRESET_CALORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCalories(c)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      calories === c
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl text-lg active:scale-[0.98] transition-transform"
            >
              次へ →
            </button>
          </div>
        )}

        {/* Step 3: Favorite Chains */}
        {step === 3 && (
          <div className="pt-4">
            <button
              onClick={() => setStep(2)}
              className="text-gray-400 text-sm mb-4"
            >
              ← 戻る
            </button>
            <h1 className="text-2xl font-bold mb-2">よく行くお店を選んでください</h1>
            <p className="text-gray-500 text-sm mb-6">
              おすすめに優先表示されます（複数選択可）
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {chains.map((chain) => {
                const selected = selectedChains.includes(chain.id);
                return (
                  <button
                    key={chain.id}
                    onClick={() => toggleChain(chain.id)}
                    className={`relative p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      selected
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {selected && (
                      <div className="absolute top-1 right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="text-2xl">{chain.emoji}</span>
                    <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                      {chain.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep(4)}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl text-lg mb-3 active:scale-[0.98] transition-transform"
            >
              次へ →
            </button>
            <button
              onClick={() => setStep(4)}
              className="w-full text-gray-400 text-sm py-2"
            >
              スキップ
            </button>
          </div>
        )}

        {/* Step 4: Complete */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-6">設定完了！</h1>

            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">目標カロリー</span>
                <span className="font-bold">{calories} kcal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">お気に入りのお店</span>
                <span className="font-bold">
                  {selectedChains.length > 0
                    ? `${selectedChains.length}件`
                    : "未選択"}
                </span>
              </div>
            </div>

            {saveError && (
              <div className="w-full bg-red-50 border border-red-200 rounded-xl p-4 mb-4 text-center">
                <p className="text-sm text-red-700 mb-3">保存に失敗しました。もう一度お試しください。</p>
                <button
                  onClick={handleComplete}
                  disabled={saving}
                  className="px-6 py-2 bg-red-500 text-white text-sm font-medium rounded-xl active:scale-[0.98] transition-transform disabled:opacity-50"
                >
                  {saving ? "保存中..." : "再試行"}
                </button>
              </div>
            )}

            <button
              onClick={handleComplete}
              disabled={saving}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl text-lg active:scale-[0.98] transition-transform disabled:opacity-50"
            >
              {saving ? "保存中..." : "たべなびをはじめる →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
