import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  iconColor?: string;
  iconBg?: string;
  children?: ReactNode;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  cta,
  iconColor = "text-sky-500",
  iconBg = "bg-sky-50",
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div
        className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-4`}
      >
        <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-bold text-gray-800 mb-1.5">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-5">
          {description}
        </p>
      )}
      {cta && (
        <Link
          href={cta.href}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-sm font-bold hover:from-sky-500 hover:to-cyan-600 active:scale-[0.97] transition-all shadow-md shadow-sky-200"
        >
          {cta.label}
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
      {children}
    </div>
  );
}
