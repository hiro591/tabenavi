"use client";

import { useRef, useEffect, useCallback } from "react";

interface ScrollPickerProps {
  items: (string | number)[];
  value: string | number;
  onChange: (value: string | number) => void;
  suffix?: string;
  itemHeight?: number;
}

export default function ScrollPicker({
  items,
  value,
  onChange,
  suffix = "",
  itemHeight = 44,
}: ScrollPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const visibleCount = 5;
  const containerHeight = itemHeight * visibleCount;

  const scrollToIndex = useCallback(
    (index: number, smooth = true) => {
      if (!containerRef.current) return;
      containerRef.current.scrollTo({
        top: index * itemHeight,
        behavior: smooth ? "smooth" : "instant",
      });
    },
    [itemHeight]
  );

  // Initial scroll to selected value
  useEffect(() => {
    const idx = items.indexOf(value);
    if (idx >= 0) {
      setTimeout(() => scrollToIndex(idx, false), 50);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    if (isScrolling.current) return;

    clearTimeout((containerRef.current as unknown as Record<string, ReturnType<typeof setTimeout>>).__scrollTimeout);
    (containerRef.current as unknown as Record<string, ReturnType<typeof setTimeout>>).__scrollTimeout = setTimeout(() => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const index = Math.round(scrollTop / itemHeight);
      const clampedIndex = Math.max(0, Math.min(index, items.length - 1));

      isScrolling.current = true;
      scrollToIndex(clampedIndex);
      setTimeout(() => {
        isScrolling.current = false;
      }, 150);

      if (items[clampedIndex] !== undefined && items[clampedIndex] !== value) {
        onChange(items[clampedIndex]);
      }
    }, 80);
  }, [items, value, onChange, itemHeight, scrollToIndex]);

  return (
    <div className="relative" style={{ height: containerHeight }}>
      {/* Selection indicator lines */}
      <div
        className="absolute left-0 right-0 border-y border-gray-200 pointer-events-none z-10"
        style={{
          top: itemHeight * 2,
          height: itemHeight,
        }}
      />

      {/* Fade overlays */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

      {/* Scrollable area */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto scrollbar-hide"
        style={{
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Top padding */}
        <div style={{ height: itemHeight * 2 }} />

        {items.map((item, i) => {
          const isSelected = item === value;
          return (
            <div
              key={`${item}-${i}`}
              className={`flex items-center justify-center transition-all ${
                isSelected ? "text-gray-900 font-bold text-[20px]" : "text-gray-300 text-[16px]"
              }`}
              style={{
                height: itemHeight,
                scrollSnapAlign: "center",
              }}
              onClick={() => {
                onChange(item);
                scrollToIndex(i);
              }}
            >
              {item}{suffix}
            </div>
          );
        })}

        {/* Bottom padding */}
        <div style={{ height: itemHeight * 2 }} />
      </div>
    </div>
  );
}
