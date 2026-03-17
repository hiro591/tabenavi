"use client";

import { motion } from "framer-motion";
import { Utensils, ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Gradient orbs */}
          <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100 to-amber-50 rounded-full opacity-60 blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-amber-50 to-orange-50 rounded-full opacity-50 blur-3xl" />
          {/* Top-right accent line */}
          <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-orange-200 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={fadeUpVariants}>
                <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border border-orange-100">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  外食専門の栄養管理アプリ
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUpVariants}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight"
              >
                外食しながら、
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  カラダづくり
                </span>
                。
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUpVariants}
                className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0"
              >
                チェーン店・コンビニのメニューを選ぶだけ。
                <br className="hidden sm:block" />
                カロリー・PFCを自動で記録・管理できます。
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a
                  href="/signup"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-px"
                >
                  無料で始める
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 border border-gray-200"
                >
                  使い方を見る
                </a>
              </motion.div>

              {/* Social proof */}
              <motion.div
                variants={fadeUpVariants}
                className="mt-10 flex items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-gray-400"
              >
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-900">20+</span>
                  チェーン対応
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-900">500+</span>
                  メニュー
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-900">3</span>
                  タップで記録
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Phone mockup */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-amber-100 rounded-[3rem] blur-2xl opacity-40 scale-90" />

                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[300px] bg-gray-950 rounded-[3rem] p-3 shadow-2xl shadow-gray-900/20">
                  {/* Screen */}
                  <div className="bg-white rounded-[2.25rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 pt-3 pb-1">
                      <span className="text-[10px] font-semibold text-gray-900">
                        9:41
                      </span>
                      <div className="w-[72px] h-[24px] bg-gray-950 rounded-full mx-auto" />
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2.5 border border-gray-900 rounded-sm relative">
                          <div className="absolute inset-[1px] right-[2px] bg-gray-900 rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-5 pb-6 pt-3">
                      {/* App header */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-[10px] text-gray-400 font-medium">
                            今日のカロリー
                          </div>
                          <div className="text-xl font-bold text-gray-900 tracking-tight">
                            842
                            <span className="text-xs font-normal text-gray-400 ml-1">
                              / 1,800 kcal
                            </span>
                          </div>
                        </div>
                        <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                          <Utensils className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="bg-gray-100 rounded-full h-2 mb-5">
                        <motion.div
                          className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "47%" }}
                          transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        />
                      </div>

                      {/* PFC macros */}
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                          <div className="text-[10px] text-gray-400 font-medium">
                            たんぱく質
                          </div>
                          <div className="text-sm font-bold text-blue-600 mt-0.5">
                            42g
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                          <div className="text-[10px] text-gray-400 font-medium">
                            脂質
                          </div>
                          <div className="text-sm font-bold text-amber-500 mt-0.5">
                            28g
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                          <div className="text-[10px] text-gray-400 font-medium">
                            炭水化物
                          </div>
                          <div className="text-sm font-bold text-emerald-500 mt-0.5">
                            95g
                          </div>
                        </div>
                      </div>

                      {/* Meal log */}
                      <div className="mb-4">
                        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          今日の記録
                        </div>
                        <div className="space-y-2">
                          <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                              <Utensils className="w-3.5 h-3.5 text-orange-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-gray-900">
                                牛丼（並）
                              </div>
                              <div className="text-[10px] text-gray-400">
                                吉野家 · ランチ
                              </div>
                            </div>
                            <div className="text-xs font-bold text-orange-500">
                              636kcal
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                              <Utensils className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-gray-900">
                                ラテ（S）
                              </div>
                              <div className="text-[10px] text-gray-400">
                                スタバ · 午前
                              </div>
                            </div>
                            <div className="text-xs font-bold text-orange-500">
                              206kcal
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Record button */}
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl py-3 font-semibold text-xs text-center">
                        + 食事を記録する
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge: top-right */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-right-6 bg-white rounded-2xl px-3 py-2 shadow-lg shadow-gray-900/8 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-gray-900">
                      3タップで完了
                    </span>
                  </div>
                </motion.div>

                {/* Floating badge: bottom-left */}
                <motion.div
                  className="absolute -bottom-3 -left-3 sm:-left-6 bg-white rounded-2xl px-3 py-2 shadow-lg shadow-gray-900/8 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="text-[10px] text-gray-400 font-medium">
                    今週のバランス
                  </div>
                  <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    良好です
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
