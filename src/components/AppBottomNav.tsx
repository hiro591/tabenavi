"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Users, User, Plus } from "lucide-react";

// Pages where bottom nav should be hidden completely
const HIDDEN_PATHS = [
  "/login",
  "/signup",
  "/onboarding",
  "/admin",
  "/guide",
  "/privacy",
  "/terms",
  "/contact",
];

// Pages where bottom nav should be hidden (starts with)
const HIDDEN_PREFIXES = [
  "/items/",
  "/guide/",
];

export default function AppBottomNav() {
  const pathname = usePathname();

  // Don't show on landing page
  if (pathname === "/") return null;

  // Don't show on specific pages
  if (HIDDEN_PATHS.includes(pathname)) return null;
  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  const isActive = (path: string) => {
    if (path === "/dashboard") return pathname === "/dashboard" || pathname === "/history" || pathname === "/weight" || pathname === "/cheatday" || pathname === "/combo" || pathname === "/recommend";
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-2 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-lg mx-auto flex items-center justify-around h-14">
        <NavItem href="/dashboard" Icon={Home} label="ホーム" active={isActive("/dashboard")} />
        <NavItem href="/search" Icon={Search} label="さがす" active={isActive("/search")} />

        {/* Center FAB - Record */}
        <Link
          href="/record"
          className="flex items-center justify-center -mt-5"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full shadow-lg shadow-sky-200 flex items-center justify-center text-white active:scale-95 transition-transform">
            <Plus className="w-5 h-5" strokeWidth={2.5} />
          </div>
        </Link>

        <NavItem href="/timeline" Icon={Users} label="みんな" active={isActive("/timeline")} />
        <NavItem href="/profile" Icon={User} label="マイページ" active={isActive("/profile")} />
      </div>
    </nav>
  );
}

function NavItem({
  href,
  Icon,
  label,
  active,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-0.5 min-w-[48px] py-1 transition-colors ${
        active ? "text-sky-500" : "text-gray-400"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-[11px] font-medium">{label}</span>
    </Link>
  );
}
