import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalItems,
  goToPage,
  visiblePages,
}) {
  return (
    <div className="border-t border-white/10 bg-[#060607] px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-xs text-[#7d8086] sm:text-left sm:text-sm">
          {startIndex + 1} - {Math.min(endIndex, totalItems || 0)} de {totalItems}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border sm:h-9 sm:w-9 ${
              currentPage === 1
                ? "cursor-not-allowed border-white/20 text-white/20"
                : "border-white/10"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`h-8 w-8 rounded-lg text-sm sm:h-9 sm:w-9 ${
                currentPage === page ? "bg-[#22C55E]" : "border border-white/10"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border sm:h-9 sm:w-9 ${
              currentPage === totalPages
                ? "cursor-not-allowed border-white/20 text-white/20"
                : "border-white/10"
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
