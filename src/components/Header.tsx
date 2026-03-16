"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/98 border-gray-200 shadow-md"
          : "bg-white/90 border-orange-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">た</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              たべなび
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="relative text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              機能
            </a>
            <a href="#how-it-works" className="relative text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              使い方
            </a>
            <a href="#pricing" className="relative text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              料金
            </a>
            <a href="#chains" className="relative text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
              対応チェーン
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
              ログイン
            </a>
            <a
              href="#signup"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
            >
              無料で始める
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-orange-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>機能</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>使い方</a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>料金</a>
              <a href="#chains" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>対応チェーン</a>
              <a href="#signup" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold text-center">無料で始める</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
