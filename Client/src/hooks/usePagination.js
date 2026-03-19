import { useState, useEffect } from "react";

export function usePagination(totalItems, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const startVisible = Math.max(1, currentPage - 2);
  const endVisible = Math.min(totalPages, startVisible + 4);
  const visiblePages = Array.from(
    { length: endVisible - startVisible + 1 },
    (_, i) => startVisible + i,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    goToPage,
    visiblePages,
  };
}
