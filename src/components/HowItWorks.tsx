"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Store, Utensils, CheckCircle, MapPin } from "lucide-react";
import type { ComponentType } from "react";

const steps: { number: string; Icon: ComponentType<{ className?: string }>; title: string; description: string; detail: string }[] = [
  {
    number: "01",
    Icon: Store,
    title: "お店を選ぶ",
    description:
      "GPS位置情報から近くのチェーン店を自動提案。または店名を検索してすぐに見つけられます。",
    detail: "位置情報・店名検索・よく行く店のピン留め",
  },
  {
    number: "02",
    Icon: Utensils,
    title: "メニューをタップ",
    description:
      "人気メニューと前回注文したメニューが最上部に表示。選ぶだけで栄養情報が自動入力されます。",
    detail: "公式カロリー・PFC・塩分など自動表示",
  },
  {
    number: "03",
    Icon: CheckCircle,
    title: "記録完了！",
    description:
      "わずか3タップ・10秒で記録完了。今日の合計カロリーとPFCバランスが即座に更新されます。",
    detail: "日別・週別の栄養サマリーも自動生成",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: "easeOut" as const,
    },
  }),
};

const arrowVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.4, delay: 0.6, ease: "easeOut" as const },
  },
};

function StepDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const demoScreens = [
    {
      title: "近くの店舗を検索中...",
      content: (
        <div className="space-y-2">
          {["吉野家 渋谷店", "すき家 原宿店", "松屋 表参道店"].map(
            (name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-lg p-2.5 flex items-center gap-2 text-sm"
              >
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-gray-700">{name}</span>
                <span className="text-xs text-gray-400 ml-auto">
                  {(i + 1) * 50}m
                </span>
              </motion.div>
            )
          )}
        </div>
      ),
    },
    {
      title: "吉野家 - メニュー",
      content: (
        <div className="space-y-2">
          {[
            { name: "牛丼（並）", cal: "636kcal" },
            { name: "牛丼（大盛）", cal: "863kcal" },
            { name: "豚丼（並）", cal: "580kcal" },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-lg p-2.5 flex items-center gap-2 text-sm ${i === 0 ? "ring-2 ring-orange-400" : ""}`}
            >
              <Utensils className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="text-gray-700 flex-1">{item.name}</span>
              <span className="text-xs font-semibold text-orange-500">
                {item.cal}
              </span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: "記録完了！",
      content: (
        <div className="text-center py-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex justify-center mb-2"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>
          <div className="text-sm font-semibold text-gray-800 mb-1">
            牛丼（並）を記録しました
          </div>
          <div className="text-xs text-gray-500">636kcal · P:24g F:25g C:85g</div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-orange-100">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          記録フローを体験
        </h3>
        <p className="text-gray-600 text-sm">
          実際の記録フローをご覧ください（自動再生）
        </p>
      </div>

      {/* Step tabs */}
      <div className="flex justify-center gap-2 mb-6">
        {steps.map((step, i) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeStep === i
                ? "bg-orange-500 text-white shadow-md"
                : "bg-orange-50 text-orange-600 hover:bg-orange-100"
            }`}
          >
            STEP {step.number}
          </button>
        ))}
      </div>

      {/* Demo screen */}
      <div className="max-w-xs mx-auto bg-orange-50 rounded-2xl p-4 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs font-semibold text-orange-600 mb-3">
              {demoScreens[activeStep].title}
            </div>
            {demoScreens[activeStep].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeStep === i
                ? "w-6 bg-orange-500"
                : "w-1.5 bg-orange-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-orange-50 to-amber-50"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            使い方
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            3タップ・10秒で記録完了
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            「記録が面倒」だから続かない。たべなびは記録のハードルを極限まで下げました。
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-orange-200"></div>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Animated arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute top-8 -right-6 lg:-right-8 items-center z-10"
                    variants={arrowVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ originX: 0 }}
                  >
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-orange-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                )}

                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {/* Step number */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 mx-auto">
                      <step.Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-orange-500">
                      {index + 1}
                    </div>
                  </div>

                  <div className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded mb-2">
                    STEP {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs text-orange-600 bg-orange-50 rounded-lg px-3 py-2 inline-block">
                    {step.detail}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive demo */}
        <StepDemo />

        {/* Positive framing example */}
        <motion.div
          className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-orange-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              外食の楽しさを壊さない設計
            </h3>
            <p className="text-gray-600 text-sm">
              他のアプリとは違う、ポジティブなフィードバック
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
              <div className="text-xs font-bold text-red-400 mb-2">
                従来のアプリ
              </div>
              <div className="text-sm text-red-700 font-medium">
                「脂質が多すぎます」
              </div>
              <div className="text-xs text-red-500 mt-1">
                「目標カロリーをオーバーしています！」
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
              <div className="text-xs font-bold text-green-500 mb-2">
                たべなび
              </div>
              <div className="text-sm text-green-700 font-medium">
                「今日はタンパク質がしっかり摂れました！」
              </div>
              <div className="text-xs text-green-600 mt-1">
                「明日の夕食で野菜を少し足すと完璧です」
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
