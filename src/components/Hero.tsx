"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

const floatingDots = [
  { top: "10%", left: "5%", delay: 0, size: 12, color: "bg-orange-300" },
  { top: "20%", right: "8%", delay: 0.5, size: 16, color: "bg-amber-300" },
  { bottom: "30%", left: "8%", delay: 1, size: 10, color: "bg-orange-200" },
  { bottom: "15%", right: "12%", delay: 1.5, size: 14, color: "bg-amber-200" },
  { top: "50%", left: "2%", delay: 0.8, size: 10, color: "bg-orange-300" },
  { top: "35%", right: "3%", delay: 1.2, size: 12, color: "bg-amber-300" },
  { bottom: "40%", right: "5%", delay: 0.3, size: 8, color: "bg-orange-200" },
  { top: "70%", left: "12%", delay: 1.8, size: 10, color: "bg-amber-200" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const popInVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full opacity-10 blur-3xl"></div>
        {/* Gradient overlay for vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-amber-100/20"></div>
      </div>

      {/* Floating decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} rounded-full`}
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              width: item.size,
              height: item.size,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.2, 0.2, 0],
              y: [0, -20, -40, -60],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={popInVariants}
              className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              外食専門の食事管理サービス
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              外食をもっと
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                賢く
              </span>
              、楽しく。
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              外食を楽しみながら、健康も手に入れる。
              <br />
              行きつけのチェーン店メニューを
              <strong className="text-gray-800">3タップ・10秒</strong>で記録。
              カロリーや栄養バランスを自動で管理できます。
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="/signup"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5"
              >
                無料で始める →
              </a>
              <a
                href="#how-it-works"
                className="bg-white hover:bg-orange-50 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all border border-gray-200 hover:border-orange-200"
              >
                使い方を見る
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-500">対応チェーン</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3タップ</div>
                <div className="text-sm text-gray-500">で記録完了</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">無料</div>
                <div className="text-sm text-gray-500">から始められる</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: App mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 sm:w-72 bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-800 overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-800 h-7 flex items-center justify-center">
                  <div className="w-20 h-3 bg-gray-700 rounded-full"></div>
                </div>

                {/* App screen */}
                <div className="bg-orange-50 p-4">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-gray-500">今日のカロリー</div>
                      <div className="text-2xl font-bold text-gray-900">
                        842{" "}
                        <span className="text-sm font-normal text-gray-400">
                          / 1,800 kcal
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <Utensils className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="bg-orange-100 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-orange-500 h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "47%" }}
                      transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>

                  {/* PFC */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-white rounded-xl p-2 text-center">
                      <div className="text-xs text-gray-500">P</div>
                      <div className="text-sm font-bold text-blue-500">42g</div>
                    </div>
                    <div className="bg-white rounded-xl p-2 text-center">
                      <div className="text-xs text-gray-500">F</div>
                      <div className="text-sm font-bold text-yellow-500">
                        28g
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-2 text-center">
                      <div className="text-xs text-gray-500">C</div>
                      <div className="text-sm font-bold text-green-500">
                        95g
                      </div>
                    </div>
                  </div>

                  {/* Meal log */}
                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      今日の記録
                    </div>
                    <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                        <Utensils className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">
                          牛丼（並）
                        </div>
                        <div className="text-xs text-gray-400">
                          吉野家 · ランチ
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-orange-500">
                        636kcal
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                        <Utensils className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">
                          ラテ（S）
                        </div>
                        <div className="text-xs text-gray-400">
                          スタバ · 午前
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-orange-500">
                        206kcal
                      </div>
                    </div>
                  </div>

                  {/* Record button */}
                  <button className="w-full bg-orange-500 text-white rounded-2xl py-3 font-semibold text-sm">
                    + 食事を記録する
                  </button>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-2xl px-3 py-2 text-xs font-bold shadow-lg"
                variants={popInVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
              >
                3タップで完了
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-3 py-2 shadow-lg border border-orange-100"
                variants={popInVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
              >
                <div className="text-xs text-gray-500">今週のバランス</div>
                <div className="text-sm font-bold text-green-600">
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
