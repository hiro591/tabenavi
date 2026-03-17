"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import InstallPrompt from "@/components/InstallPrompt";
import { Search, Calculator, MapPin, Heart, User } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <InstallPrompt />
      <div className="max-w-lg mx-auto">{children}</div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-lg mx-auto flex items-center justify-around h-16">
          <NavItem href="/search"   Icon={Search}     label="さがす"     active={pathname.startsWith("/search")} />
          <NavItem href="/combo"    Icon={Calculator} label="コンボ"     active={pathname.startsWith("/combo")} />
          <Link href="/map" className="flex flex-col items-center -mt-6">
            <div className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white active:scale-95 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
          </Link>
          <NavItem href="/favorites" Icon={Heart}  label="お気に入り" active={pathname.startsWith("/favorites")} />
          <NavItem href="/profile"   Icon={User}   label="マイページ" active={pathname.startsWith("/profile")} />
        </div>
      </nav>
    </div>
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
      className={`flex flex-col items-center gap-0.5 ${
        active ? "text-orange-500" : "text-gray-400"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
