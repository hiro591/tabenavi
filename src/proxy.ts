import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // PUBLIC paths (no auth required):
  //   /items/[id]    - menu detail (for SEO + try-before-signup)
  //   /search        - search experience (let users explore before signup)
  //   /chains/...    - chain comparison pages
  //   /guide/...     - SEO articles
  // Auth required only for user-specific features (records, favorites, profile, etc.)
  const { pathname } = request.nextUrl;
  const protectedPaths = ["/dashboard", "/record", "/cheatday", "/history", "/recommend", "/profile", "/weight", "/onboarding", "/favorites", "/combo", "/map"];
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  // 公開ページではAuth往復を省略(全公開ページのTTFB改善)。
  // セッション更新は保護ページ訪問時とクライアント側autoRefreshで担保される。
  if (!isProtected && !isAuthPage) {
    return supabaseResponse;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && isProtected) {
    // 遷移元(クエリ含む)を next として引き回し、ログイン/登録後に元の文脈へ復帰させる
    const url = new URL("/login", request.url);
    url.searchParams.set("next", pathname + request.nextUrl.search);
    return NextResponse.redirect(url);
  }

  if (user && isAuthPage) {
    const next = request.nextUrl.searchParams.get("next");
    const dest = next && next.startsWith("/") && !next.startsWith("//") ? next : "/search";
    return NextResponse.redirect(new URL(dest, request.url));
  }

  return supabaseResponse;
}

export const config = {
  // 静的アセット(チェーンロゴ・アフィリ画像・アイコン類)はミドルウェアを通さない
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|chain-logos|affiliate|manifest.json|.*\\.(?:png|jpg|jpeg|svg|ico|webp)$).*)",
  ],
};
