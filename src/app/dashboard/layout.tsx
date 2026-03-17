"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-lg mx-auto">{children}</div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-lg mx-auto flex items-center justify-around h-16">
          <NavItem
            href="/dashboard"
            icon="🏠"
            label="ホーム"
            active={pathname === "/dashboard"}
          />
          <NavItem
            href="/history"
            icon="📅"
            label="履歴"
            active={pathname === "/history"}
          />
          <Link
            href="/record"
            className="flex flex-col items-center -mt-6"
          >
            <div className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white text-2xl active:scale-95 transition-transform">
              ＋
            </div>
            <span className="text-[10px] text-orange-500 font-medium mt-0.5">
              記録
            </span>
          </Link>
          <NavItem
            href="/cheatday"
            icon="🎉"
            label="チートデイ"
            active={pathname === "/cheatday"}
          />
          <div className="w-12" />
        </div>
      </nav>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-0.5 ${
        active ? "text-orange-500" : "text-gray-400"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
