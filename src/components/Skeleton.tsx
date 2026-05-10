type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-md bg-[length:200%_100%] ${className}`}
      style={{ animationDuration: "1.5s" }}
    />
  );
}

export function SkeletonCard({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-4 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <Skeleton className="w-10 h-10 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-2.5 w-1/3" />
        </div>
      </div>
      <Skeleton className="h-2.5 w-full mb-2" />
      <Skeleton className="h-2.5 w-4/5" />
    </div>
  );
}

export function SkeletonRow({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3.5 bg-white border-b border-gray-50 ${className}`}
    >
      <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-2.5 w-1/3" />
      </div>
      <Skeleton className="h-3 w-12" />
    </div>
  );
}
