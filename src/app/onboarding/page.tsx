"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronRight, ChevronLeft, SkipForward, CheckCircle } from "lucide-react";
import { LogoIcon } from "@/components/Logo";

const TOTAL_STEPS = 12;

interface Chain {
  id: string;
  name: string;
  emoji: string;
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const [goal, setGoal] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [eatingOutFreq, setEatingOutFreq] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [birthYear, setBirthYear] = useState<string | null>(null);
  const [heightRange, setHeightRange] = useState<string | null>(null);
  const [weightRange, setWeightRange] = useState<string | null>(null);
  const [targetWeightRange, setTargetWeightRange] = useState<string | null>(null);
  const [hardGainer, setHardGainer] = useState<string | null>(null);
  const [activityLevel, setActivityLevel] = useState<string | null>(null);
  const [favoriteChains, setFavoriteChains] = useState<string[]>([]);
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);

  const [chains, setChains] = useState<Chain[]>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase.from("chain_restaurants").select("id, name, emoji").order("name").then(({ data }) => {
      if (data) setChains(data);
    });
  }, []);

  const GOAL_CALORIES: Record<string, number> = { lose: 1500, maintain: 2000, gain: 2500 };

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const toggleFavoriteChain = (id: string) => {
    setFavoriteChains((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  };

  const toggleFavoriteFood = (food: string) => {
    setFavoriteFoods((prev) => prev.includes(food) ? prev.filter((f) => f !== food) : [...prev, food]);
  };

  const handleComplete = async () => {
    setSaving(true);
    setSaveError(false);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const calories = goal ? GOAL_CALORIES[goal] ?? 2000 : 2000;
        const { error } = await supabase.from("profiles").update({ target_calories: calories }).eq("id", user.id);
        if (error) throw error;
      }
      localStorage.setItem("onboarding", JSON.stringify({
        goal, timeline, eatingOutFreq, gender, birthYear, heightRange,
        weightRange, targetWeightRange, hardGainer, activityLevel,
        favoriteChains, favoriteFoods, completedAt: new Date().toISOString(),
      }));
      router.push("/dashboard");
    } catch {
      setSaving(false);
      setSaveError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex gap-1">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className={`h-1 rounded-full flex-1 transition-all duration-300 ${i < step ? "bg-sky-400" : "bg-gray-100"}`} />
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-2">{step} / {TOTAL_STEPS}</p>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full px-6 pb-8 flex flex-col">

        {/* 1: Welcome */}
        {step === 1 && (
          <Center>
            <LogoIcon size={56} />
            <h1 className="text-[24px] font-bold text-gray-900 mt-6 mb-3">たべなびへようこそ</h1>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10">いくつかの質問に答えるだけで、<br />あなたに最適な設定ができます。</p>
            <PrimaryButton onClick={next}>はじめる</PrimaryButton>
            <p className="text-[12px] text-gray-400 mt-4">すべてスキップ可能です</p>
          </Center>
        )}

        {/* 2: Goal */}
        {step === 2 && (
          <Q title="あなたの目標は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "lose", emoji: "🔥", label: "減量", desc: "体重を落としたい" },
                { key: "maintain", emoji: "⚖️", label: "維持", desc: "今の体型をキープ" },
                { key: "gain", emoji: "💪", label: "増量", desc: "筋肉をつけたい" },
              ]}
              selected={goal}
              onSelect={(k) => { setGoal(k); next(); }}
            />
          </Q>
        )}

        {/* 3: Timeline */}
        {step === 3 && (
          <Q title="どのくらいの期間で達成したい？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "1m", label: "1ヶ月以内" },
                { key: "3m", label: "3ヶ月くらい" },
                { key: "6m", label: "半年くらい" },
                { key: "1y", label: "1年かけてゆっくり" },
                { key: "none", label: "特に期限はない" },
              ]}
              selected={timeline}
              onSelect={(k) => { setTimeline(k); next(); }}
            />
          </Q>
        )}

        {/* 4: Eating out freq */}
        {step === 4 && (
          <Q title="外食は週に何日しますか？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "1-2", label: "1〜2日", desc: "たまに外食" },
                { key: "3-4", label: "3〜4日", desc: "半分くらい外食" },
                { key: "5+", label: "5日以上", desc: "ほぼ毎日外食" },
              ]}
              selected={eatingOutFreq}
              onSelect={(k) => { setEatingOutFreq(k); next(); }}
            />
          </Q>
        )}

        {/* 5: Gender */}
        {step === 5 && (
          <Q title="性別は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "male", label: "男性" },
                { key: "female", label: "女性" },
                { key: "other", label: "その他 / 回答しない" },
              ]}
              selected={gender}
              onSelect={(k) => { setGender(k); next(); }}
            />
          </Q>
        )}

        {/* 6: Birth year */}
        {step === 6 && (
          <Q title="生まれ年は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "~1979", label: "1979年以前" },
                { key: "1980s", label: "1980〜1989年" },
                { key: "1990s", label: "1990〜1999年" },
                { key: "2000s", label: "2000〜2009年" },
                { key: "2010s~", label: "2010年以降" },
              ]}
              selected={birthYear}
              onSelect={(k) => { setBirthYear(k); next(); }}
            />
          </Q>
        )}

        {/* 7: Height */}
        {step === 7 && (
          <Q title="身長は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "~159", label: "159cm以下" },
                { key: "160-169", label: "160〜169cm" },
                { key: "170-179", label: "170〜179cm" },
                { key: "180+", label: "180cm以上" },
              ]}
              selected={heightRange}
              onSelect={(k) => { setHeightRange(k); next(); }}
            />
          </Q>
        )}

        {/* 8: Weight */}
        {step === 8 && (
          <Q title="現在の体重は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "~49", label: "49kg以下" },
                { key: "50-59", label: "50〜59kg" },
                { key: "60-69", label: "60〜69kg" },
                { key: "70-79", label: "70〜79kg" },
                { key: "80-89", label: "80〜89kg" },
                { key: "90+", label: "90kg以上" },
              ]}
              selected={weightRange}
              onSelect={(k) => { setWeightRange(k); next(); }}
            />
          </Q>
        )}

        {/* 9: Target weight */}
        {step === 9 && (
          <Q title="目標体重は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "~49", label: "49kg以下" },
                { key: "50-59", label: "50〜59kg" },
                { key: "60-69", label: "60〜69kg" },
                { key: "70-79", label: "70〜79kg" },
                { key: "80+", label: "80kg以上" },
                { key: "same", label: "今のままでいい" },
              ]}
              selected={targetWeightRange}
              onSelect={(k) => { setTargetWeightRange(k); next(); }}
            />
          </Q>
        )}

        {/* 10: Hard gainer + Activity */}
        {step === 10 && (
          <Q title="普段の活動量は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "sedentary", label: "ほぼ座りっぱなし", desc: "デスクワーク中心" },
                { key: "light", label: "軽い運動あり", desc: "週1〜2回の軽い運動" },
                { key: "moderate", label: "適度に運動", desc: "週3〜4回の運動" },
                { key: "active", label: "かなり活動的", desc: "週5回以上の運動やジム" },
              ]}
              selected={activityLevel}
              onSelect={(k) => { setActivityLevel(k); next(); }}
            />
          </Q>
        )}

        {/* 11: Favorite chains */}
        {step === 11 && (
          <Q title="よく行くチェーン店は？" subtitle="複数選択OK" onBack={prev} onSkip={next}>
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {chains.map((chain) => {
                const selected = favoriteChains.includes(chain.id);
                return (
                  <button
                    key={chain.id}
                    onClick={() => toggleFavoriteChain(chain.id)}
                    className={`relative p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 transition-all active:scale-[0.97] ${
                      selected ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white"
                    }`}
                  >
                    {selected && (
                      <div className="absolute top-1 right-1 w-4 h-4 bg-sky-400 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                    <span className="text-xl">{chain.emoji}</span>
                    <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">{chain.name}</span>
                  </button>
                );
              })}
            </div>
            <PrimaryButton onClick={next}>次へ</PrimaryButton>
          </Q>
        )}

        {/* 12: Favorite foods */}
        {step === 12 && (
          <Q title="好きな食べ物は？" subtitle="複数選択OK" onBack={prev} onSkip={handleComplete}>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "🍔 ハンバーガー", "🍜 ラーメン", "🍛 カレー", "🍣 寿司",
                "🥩 ステーキ", "🍗 チキン", "🥗 サラダ", "🍝 パスタ",
                "🍱 定食", "🍚 丼もの", "🥪 サンドイッチ", "🌮 中華",
                "🍕 ピザ", "🍰 スイーツ", "☕ コーヒー", "🥤 ドリンク",
              ].map((food) => {
                const selected = favoriteFoods.includes(food);
                return (
                  <button
                    key={food}
                    onClick={() => toggleFavoriteFood(food)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all active:scale-[0.97] ${
                      selected ? "bg-sky-400 text-white" : "bg-gray-50 text-gray-600 border border-gray-100"
                    }`}
                  >
                    {food}
                  </button>
                );
              })}
            </div>

            {saveError && (
              <div className="w-full bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                <p className="text-sm text-red-600">保存に失敗しました。もう一度お試しください。</p>
              </div>
            )}

            <button
              onClick={handleComplete}
              disabled={saving}
              className="w-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {saving ? "保存中..." : "たべなびをはじめる"}
              {!saving && <ChevronRight className="w-4 h-4" />}
            </button>
          </Q>
        )}
      </div>
    </div>
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

function Center({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 flex flex-col items-center justify-center text-center">{children}</div>;
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 flex items-center justify-center gap-2"
    >
      {children}
      <ChevronRight className="w-4 h-4" />
    </button>
  );
}

function Q({
  title,
  subtitle,
  onBack,
  onSkip,
  children,
}: {
  title: string;
  subtitle?: string;
  onBack: () => void;
  onSkip: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col pt-2">
      <div className="flex items-center justify-between mb-5">
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={onSkip} className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1">
          スキップ <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>
      <h1 className="text-[22px] font-bold text-gray-900 mb-1">{title}</h1>
      {subtitle && <p className="text-sm text-gray-400 mb-5">{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Choices({
  options,
  selected,
  onSelect,
}: {
  options: { key: string; emoji?: string; label: string; desc?: string }[];
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => onSelect(o.key)}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] ${
            selected === o.key ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3">
            {o.emoji && <span className="text-xl">{o.emoji}</span>}
            <div>
              <p className="font-bold text-gray-900">{o.label}</p>
              {o.desc && <p className="text-sm text-gray-400">{o.desc}</p>}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
