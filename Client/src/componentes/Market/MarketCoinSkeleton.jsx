export function MarketCoinSkeleton() {
  return (
    <div className="animate-pulse px-4 py-4 sm:px-6">
      {/* DESKTOP */}
      <div className="hidden grid-cols-12 items-center gap-4 lg:grid">
        <div className="col-span-4 flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-white/5" />
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-white/5" />
            <div className="h-3 w-12 rounded bg-white/5" />
          </div>
        </div>

        <div className="col-span-2 flex justify-end">
          <div className="h-4 w-16 rounded bg-white/5" />
        </div>

        <div className="col-span-2 flex justify-end">
          <div className="h-5 w-16 rounded-md bg-white/5" />
        </div>

        <div className="col-span-2 flex justify-end">
          <div className="h-4 w-16 rounded bg-white/5" />
        </div>

        <div className="col-span-2 flex justify-end">
          <div className="h-9 w-20 rounded-md bg-white/5" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="space-y-3 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/5" />
            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-white/5" />
              <div className="h-2 w-10 rounded bg-white/5" />
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <div className="h-3 w-16 rounded bg-white/5" />
            <div className="h-2 w-10 rounded bg-white/5" />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-2">
          <div className="h-2 w-16 rounded bg-white/5" />
          <div className="h-7 w-16 rounded-md bg-white/5" />
        </div>
      </div>
    </div>
  );
}
