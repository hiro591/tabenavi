"use client";

import { useState } from "react";
import { ShoppingBag, ExternalLink, Tag } from "lucide-react";
import {
  AFFILIATE_PRODUCTS,
  getProductById,
  getProductsByCategory,
  getAmazonLink,
  getRakutenLink,
  isAffiliateConfigured,
  type AffiliateProduct,
  type ProductCategory,
} from "@/data/affiliateProducts";

// ─── Internal: GA4イベント送信 ───────────────────────────────────
type Network = "amazon" | "rakuten";
type LinkType = "direct" | "search";

function trackAffiliateClick(
  productId: string,
  network: Network,
  linkType: LinkType,
) {
  if (typeof window === "undefined") return;
  const win = window as unknown as {
    gtag?: (cmd: string, name: string, params: Record<string, unknown>) => void;
  };
  if (typeof win.gtag === "function") {
    win.gtag("event", "affiliate_click", {
      product_id: productId,
      network,
      link_type: linkType,
      page_path: window.location.pathname,
    });
  }
}

// ─── Internal: PR表記バッジ (景表法/ステマ規制対応・必須) ────────────
function PRBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
      PR
    </span>
  );
}

// ─── 1. AffiliateDisclosure: 記事冒頭に置く広告表記 ─────────────────
export function AffiliateDisclosure() {
  return (
    <p className="text-xs text-gray-500 my-4 px-4 py-2 bg-gray-50 border border-gray-200 rounded">
      ※本記事には広告(アフィリエイトリンク)が含まれます。商品リンク経由で購入された場合、たべなびに紹介料が支払われることがあります。
    </p>
  );
}

// ─── 2. AffiliateProductCard: メイン商品カード ──────────────────────
export function AffiliateProductCard({ productId }: { productId: string }) {
  const product = getProductById(productId);
  if (!product) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="my-6 p-4 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          [Dev] AffiliateProductCard: product id &quot;{productId}&quot; not found
        </div>
      );
    }
    return null;
  }

  return <AffiliateProductCardInternal product={product} />;
}

function AffiliateProductCardInternal({
  product,
}: {
  product: AffiliateProduct;
}) {
  const amazon = getAmazonLink(product);
  const rakuten = getRakutenLink(product);

  return (
    <div className="my-8 bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-sky-50 to-cyan-50 px-5 py-2.5 flex items-center justify-between border-b border-sky-100">
        <span className="flex items-center gap-2 text-xs font-bold text-sky-700">
          <ShoppingBag className="w-3.5 h-3.5" />
          おすすめアイテム
        </span>
        <PRBadge />
      </div>

      <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5 items-start">
        <ProductThumbnail product={product} size={140} />

        <div className="min-w-0">
          {product.highlight && (
            <span className="inline-flex items-center gap-1 bg-sky-100 text-sky-700 text-[11px] font-bold px-2 py-1 rounded-full mb-2">
              <Tag className="w-3 h-3" />
              {product.highlight}
            </span>
          )}
          <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1.5 leading-snug">
            {product.name}
          </h4>
          {product.priceHint && (
            <p className="text-xs text-gray-500 mb-2">{product.priceHint}</p>
          )}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <AffiliateButton
              href={amazon.url}
              productId={product.id}
              network="amazon"
              linkType={amazon.isDirect ? "direct" : "search"}
              label={amazon.isDirect ? "Amazonで見る" : "Amazonで探す"}
            />
            <AffiliateButton
              href={rakuten.url}
              productId={product.id}
              network="rakuten"
              linkType={rakuten.isDirect ? "direct" : "search"}
              label={rakuten.isDirect ? "楽天で見る" : "楽天で探す"}
              variant="rakuten"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductThumbnail({
  product,
  size = 140,
}: {
  product: AffiliateProduct;
  size?: number;
}) {
  const [imgError, setImgError] = useState(false);
  const initial = product.name.charAt(0);
  const sizeClass = size === 140 ? "w-full sm:w-[140px]" : "w-16 h-16";

  if (imgError) {
    return (
      <div
        className={`${sizeClass} aspect-square bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-50 rounded-lg overflow-hidden border border-sky-100 flex-shrink-0 flex items-center justify-center`}
      >
        <span className="text-3xl font-bold text-sky-400/70 select-none">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0 flex items-center justify-center`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.imageUrl}
        alt={product.name}
        loading="lazy"
        onError={() => setImgError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ─── 3. AffiliateButton ───────────────────────────────────────────
function AffiliateButton({
  href,
  productId,
  network,
  linkType,
  label,
  variant = "amazon",
}: {
  href: string;
  productId: string;
  network: Network;
  linkType: LinkType;
  label: string;
  variant?: "amazon" | "rakuten";
}) {
  const colorClass =
    variant === "rakuten"
      ? "bg-red-500 hover:bg-red-600 text-white"
      : "bg-amber-500 hover:bg-amber-600 text-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackAffiliateClick(productId, network, linkType)}
      className={`${colorClass} inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg transition-colors`}
    >
      {label}
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  );
}

// ─── 4. AffiliateProductGrid: 複数商品を横並び ───────────────────
export function AffiliateProductGrid({
  productIds,
  title = "おすすめアイテム",
}: {
  productIds: string[];
  title?: string;
}) {
  const products = productIds
    .map((id) => getProductById(id))
    .filter((p): p is AffiliateProduct => Boolean(p));

  if (products.length === 0) return null;

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-900">
          <ShoppingBag className="w-5 h-5 text-sky-500" />
          {title}
        </h3>
        <PRBadge />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((p) => (
          <AffiliateMiniCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function AffiliateMiniCard({ product }: { product: AffiliateProduct }) {
  // Amazon を主導線、なければ楽天。Amazon検索フォールバックは Amazon の方が CVR 高い
  const amazon = getAmazonLink(product);
  const primaryUrl = amazon.url;
  const primaryNetwork: Network = "amazon";
  const primaryLinkType: LinkType = amazon.isDirect ? "direct" : "search";

  return (
    <a
      href={primaryUrl}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackAffiliateClick(product.id, primaryNetwork, primaryLinkType)}
      className="block bg-white rounded-lg border border-gray-200 hover:border-sky-300 hover:shadow-md transition-all p-4"
    >
      <div className="flex gap-3">
        <ProductThumbnail product={product} size={64} />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-1">
            {product.name}
          </p>
          {product.highlight && (
            <p className="text-[11px] text-sky-600 font-medium">{product.highlight}</p>
          )}
          {product.priceHint && (
            <p className="text-[11px] text-gray-500 mt-0.5">{product.priceHint}</p>
          )}
        </div>
      </div>
    </a>
  );
}

// ─── 5. AffiliateInlineLink: 文中インラインリンク ────────────────
export function AffiliateInlineLink({
  productId,
  children,
  network = "amazon",
}: {
  productId: string;
  children: React.ReactNode;
  network?: Network;
}) {
  const product = getProductById(productId);
  if (!product) return <>{children}</>;
  const link = network === "amazon" ? getAmazonLink(product) : getRakutenLink(product);
  const linkType: LinkType = link.isDirect ? "direct" : "search";

  return (
    <a
      href={link.url}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackAffiliateClick(productId, network, linkType)}
      className="text-sky-600 underline decoration-sky-300 hover:text-sky-700 font-medium"
    >
      {children}
      <span className="text-[10px] text-gray-400 ml-1">[PR]</span>
    </a>
  );
}

// ─── 6. AffiliateCategoryGrid: カテゴリ全件表示 ──────────────────
export function AffiliateCategoryGrid({
  category,
  title,
  limit = 4,
}: {
  category: ProductCategory;
  title: string;
  limit?: number;
}) {
  const products = getProductsByCategory(category, limit);
  if (products.length === 0) return null;

  return (
    <AffiliateProductGrid
      productIds={products.map((p) => p.id)}
      title={title}
    />
  );
}

// dev用: 全商品の設定状況をビジュアル確認
export function AffiliateAuditPanel() {
  if (process.env.NODE_ENV !== "development") return null;
  const configured = AFFILIATE_PRODUCTS.filter(isAffiliateConfigured).length;
  const total = AFFILIATE_PRODUCTS.length;
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white text-xs px-3 py-2 rounded shadow-lg z-50">
      Affiliate: {configured}/{total} configured
    </div>
  );
}
