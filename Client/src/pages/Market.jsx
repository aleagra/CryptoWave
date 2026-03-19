import { useContext, useState } from "react";
import { TrendingUp, Search } from "lucide-react";

import { CoinContext } from "../context/CoinContext";

import { Navbar, Footer } from "../componentes";

import { usePagination } from "../hooks/usePagination";
import { useSearchCoins } from "../hooks/useSearchCoins";
import { MarketCoinRow } from "../componentes/Market/MarketCoinRow";
import { MarketCoinSkeleton } from "../componentes/Market/MarketCoinSkeleton";
import { Pagination } from "../componentes/Market/Pagination";

export default function Market() {
  const { coins } = useContext(CoinContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useSearchCoins(coins, searchQuery);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    goToPage,
    visiblePages,
  } = usePagination(filteredData?.length || 0, 10);

  const currentData = filteredData?.slice(startIndex, endIndex);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-1.5 text-xs font-medium text-[#22C55E]">
                <TrendingUp className="h-3.5 w-3.5" /> Mercado en Vivo
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                    Resumen del Mercado
                  </h1>
                  <p className="mt-2 text-sm text-[#7d8086] sm:text-base">
                    Precios de criptomonedas en tiempo real.
                  </p>
                </div>

                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />
                  <input
                    type="text"
                    placeholder="Buscar activos..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="hidden grid-cols-12 gap-4 border-b border-white/10 bg-[#060607] px-6 py-4 text-xs uppercase text-[#7d8086] lg:grid">
                <div className="col-span-4">Activo</div>
                <div className="col-span-2 text-right">Precio</div>
                <div className="col-span-2 text-center">Cambio</div>
                <div className="col-span-2 text-right">Volumen</div>
                <div className="col-span-2 text-right">Operar</div>
              </div>

              <div className="divide-y divide-white/10">
                {(!coins || coins.length === 0) && Array.from({ length: 10 }).map((_, i) => (
                  <MarketCoinSkeleton key={i} />
                ))}
                {currentData?.map((coin) => (
                  <MarketCoinRow key={coin.CoinInfo.Id} coin={coin} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                startIndex={startIndex}
                endIndex={endIndex}
                totalItems={filteredData?.length || 0}
                goToPage={goToPage}
                visiblePages={visiblePages}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
