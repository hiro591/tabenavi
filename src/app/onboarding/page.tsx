"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Target, Utensils, User, Ruler, Weight, ChevronRight, ChevronLeft, SkipForward } from "lucide-react";
import { LogoIcon } from "@/components/Logo";

const TOTAL_STEPS = 7;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);

  // Answers (all optional)
  const [goal, setGoal] = useState<string | null>(null);
  const [eatingOutFreq, setEatingOutFreq] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [birthYear, setBirthYear] = useState("");
  const [height, setHeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");

  const GOAL_CALORIES: Record<string, number> = {
    lose: 1500,
    maintain: 2000,
    gain: 2500,
  };

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  const skip = () => next();

  const handleComplete = async () => {
    setSaving(true);
    setSaveError(false);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const calories = goal ? GOAL_CALORIES[goal] ?? 2000 : 2000;
        const { error } = await supabase
          .from("profiles")
          .update({ target_calories: calories })
          .eq("id", user.id);
        if (error) throw error;
      }

      // Save additional data to localStorage (DB migration later)
      const onboardingData = {
        goal,
        eatingOutFreq,
        gender,
        birthYear: birthYear || null,
        height: height || null,
        currentWeight: currentWeight || null,
        targetWeight: targetWeight || null,
        completedAt: new Date().toISOString(),
      };
      localStorage.setItem("onboarding", JSON.stringify(onboardingData));

      router.push("/dashboard");
    } catch {
      setSaving(false);
      setSaveError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress bar */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                i < step ? "bg-sky-400" : "bg-gray-100"
              }`}
            />
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-2">{step} / {TOTAL_STEPS}</p>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full px-6 pb-8 flex flex-col">

        {/* ─── Step 1: Welcome ─── */}
        {step === 1 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <LogoIcon size={56} />
            </div>
            <h1 className="text-[26px] font-bold text-gray-900 mb-3">たべなびへようこそ</h1>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
              いくつかの質問に答えるだけで、
              <br />
              あなたに最適な設定ができます。
            </p>
            <button
              onClick={next}
              className="w-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 flex items-center justify-center gap-2"
            >
              はじめる
              <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-[12px] text-gray-400 mt-4">すべての質問はスキップ可能です</p>
          </div>
        )}

        {/* ─── Step 2: Goal ─── */}
        {step === 2 && (
          <StepLayout title="あなたの目標は？" onBack={prev} onSkip={skip}>
            <div className="space-y-3">
              {[
                { key: "lose", emoji: "🔥", title: "減量", desc: "体重を落としたい" },
                { key: "maintain", emoji: "⚖️", title: "維持", desc: "今の体型をキープしたい" },
                { key: "gain", emoji: "💪", title: "増量", desc: "筋肉をつけたい" },
              ].map((g) => (
                <button
                  key={g.key}
                  onClick={() => { setGoal(g.key); next(); }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] ${
                    goal === g.key ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{g.emoji}</span>
                    <div>
                      <p className="font-bold text-gray-900">{g.title}</p>
                      <p className="text-sm text-gray-400">{g.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {/* ─── Step 3: Eating out frequency ─── */}
        {step === 3 && (
          <StepLayout title="外食は週に何日しますか？" onBack={prev} onSkip={skip}>
            <div className="space-y-3">
              {[
                { key: "1-2", label: "1〜2日", desc: "たまに外食する" },
                { key: "3-4", label: "3〜4日", desc: "半分くらい外食" },
                { key: "5+", label: "5日以上", desc: "ほぼ毎日外食" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => { setEatingOutFreq(f.key); next(); }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] ${
                    eatingOutFreq === f.key ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white hover:bg-gray-50"
                  }`}
                >
                  <p className="font-bold text-gray-900">{f.label}</p>
                  <p className="text-sm text-gray-400">{f.desc}</p>
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {/* ─── Step 4: Gender ─── */}
        {step === 4 && (
          <StepLayout title="性別を教えてください" onBack={prev} onSkip={skip}>
            <div className="space-y-3">
              {[
                { key: "male", label: "男性" },
                { key: "female", label: "女性" },
                { key: "other", label: "その他 / 回答しない" },
              ].map((g) => (
                <button
                  key={g.key}
                  onClick={() => { setGender(g.key); next(); }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] ${
                    gender === g.key ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white hover:bg-gray-50"
                  }`}
                >
                  <p className="font-bold text-gray-900">{g.label}</p>
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {/* ─── Step 5: Birth year + Height ─── */}
        {step === 5 && (
          <StepLayout title="生まれ年と身長" onBack={prev} onSkip={skip}>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">生まれ年</label>
                <input
                  type="number"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  placeholder="例: 1998"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-lg tabular-nums"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">身長 (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="例: 172"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-lg tabular-nums"
                />
              </div>
            </div>
            <button
              onClick={next}
              className="w-full mt-8 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 flex items-center justify-center gap-2"
            >
              次へ
              <ChevronRight className="w-4 h-4" />
            </button>
          </StepLayout>
        )}

        {/* ─── Step 6: Weight ─── */}
        {step === 6 && (
          <StepLayout title="体重を教えてください" onBack={prev} onSkip={skip}>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">現在の体重 (kg)</label>
                <input
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  placeholder="例: 72"
                  step="0.1"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-lg tabular-nums"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">目標体重 (kg)</label>
                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  placeholder="例: 65"
                  step="0.1"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-lg tabular-nums"
                />
              </div>
            </div>
            <button
              onClick={next}
              className="w-full mt-8 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 flex items-center justify-center gap-2"
            >
              次へ
              <ChevronRight className="w-4 h-4" />
            </button>
          </StepLayout>
        )}

        {/* ─── Step 7: Complete ─── */}
        {step === 7 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-100">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-[24px] font-bold text-gray-900 mb-2">準備完了！</h1>
            <p className="text-gray-500 text-sm mb-8">いつでもプロフィールから変更できます</p>

            <div className="bg-gray-50 rounded-xl p-5 w-full mb-8 text-left space-y-3 text-sm">
              <SummaryRow label="目標" value={goal === "lose" ? "減量" : goal === "gain" ? "増量" : goal === "maintain" ? "維持" : "未設定"} />
              <SummaryRow label="外食頻度" value={eatingOutFreq === "1-2" ? "週1〜2日" : eatingOutFreq === "3-4" ? "週3〜4日" : eatingOutFreq === "5+" ? "週5日以上" : "未設定"} />
              <SummaryRow label="性別" value={gender === "male" ? "男性" : gender === "female" ? "女性" : gender === "other" ? "その他" : "未設定"} />
              {height && <SummaryRow label="身長" value={`${height} cm`} />}
              {currentWeight && <SummaryRow label="体重" value={`${currentWeight} kg`} />}
              {targetWeight && <SummaryRow label="目標体重" value={`${targetWeight} kg`} />}
            </div>

            {saveError && (
              <div className="w-full bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-red-600 mb-2">保存に失敗しました。</p>
                <button
                  onClick={handleComplete}
                  disabled={saving}
                  className="text-sm text-red-600 font-bold underline"
                >
                  再試行
                </button>
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
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Step Layout ─────────────────────────────────────────────────────────────

function StepLayout({
  title,
  onBack,
  onSkip,
  children,
}: {
  title: string;
  onBack: () => void;
  onSkip: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col pt-4">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={onSkip} className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1">
          スキップ
          <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>
      <h1 className="text-[22px] font-bold text-gray-900 mb-6">{title}</h1>
      <div className="flex-1">{children}</div>
    </div>
  );
}

// ─── Summary Row ─────────────────────────────────────────────────────────────

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="font-semibold text-gray-700">{value}</span>
    </div>
  );
}
