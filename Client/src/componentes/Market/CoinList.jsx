import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { MarketCoinSkeleton } from "./MarketCoinSkeleton";

function MarketTable() {
  const { coins } = useContext(CoinContext);

  return (
    <section id="market" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1f2227]/60 bg-[#14161a]/50 px-3 py-1.5 text-xs font-medium text-[#7d8086]">
            <TrendingUp className="h-3.5 w-3.5" />
            Datos en tiempo real
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#f8f8f8] sm:text-4xl lg:text-5xl">
            Compra{" "}
            <span className="bg-linear-to-r from-[#22C55E] to-[#16a34a] bg-clip-text text-transparent">
              cripto
            </span>{" "}
            al mejor precio
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-[#7d8086] sm:text-base lg:text-lg">
            Proporcionamos datos en tiempo real siempre que es posible.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#1f2227]/60 bg-[#040405] backdrop-blur-sm">
          <div className="hidden border-b border-[#1f2227]/40 bg-[#060607] px-6 py-4 lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="col-span-4 text-xs uppercase tracking-wider text-[#7d8086]">
              Moneda
            </div>
            <div className="col-span-2 text-right text-xs uppercase tracking-wider text-[#7d8086]">
              Precio
            </div>
            <div className="col-span-2 text-right text-xs uppercase tracking-wider text-[#7d8086]">
              24h Cambio
            </div>
            <div className="col-span-2 text-right text-xs uppercase tracking-wider text-[#7d8086]">
              Volumen
            </div>
            <div className="col-span-2 text-right text-xs uppercase tracking-wider text-[#7d8086]">
              Acción
            </div>
          </div>

          <div className="divide-y divide-[#1f2227]/40">
            {(!coins || coins.length === 0) &&
              Array.from({ length: 6 }).map((_, i) => (
                <MarketCoinSkeleton key={i} />
              ))}

            {coins?.slice(0, 6).map((Element) => {
              const price = Element.DISPLAY?.USD.PRICE;
              const change = Element.DISPLAY?.USD.CHANGE24HOUR;
              const rawVolume = Element.DISPLAY?.USD.VOLUME24HOUR;

              const volume = rawVolume?.replace(/[^\d.,KMB]/gi, "");
              const numericValue = parseFloat(change?.substring(1));

              return (
                <NavLink
                  key={Element.CoinInfo.Id}
                  to={`/trade/${Element.CoinInfo.Name}`}
                  className="group block"
                >
                  <div
                    className="
                      flex items-center justify-between gap-3 px-4 py-4
                      transition-colors hover:bg-[#0f0f11]
                      sm:px-6
                      lg:grid lg:grid-cols-12 lg:gap-4
                    "
                  >
                    <div className="flex items-center gap-3 lg:col-span-4">
                      <img
                        className="h-8 w-8"
                        src={
                          "https://www.cryptocompare.com" +
                          Element.CoinInfo.ImageUrl
                        }
                        alt={Element.CoinInfo.FullName}
                      />

                      <div>
                        <div className="text-sm text-[#f8f8f8] lg:text-base">
                          {Element.CoinInfo.FullName}
                        </div>
                        <div className="text-xs text-[#7d8086]">
                          {Element.CoinInfo.Internal}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end lg:hidden">
                      <span className="font-['Geist_Mono'] text-sm text-[#f8f8f8]">
                        {price}
                      </span>

                      <span
                        className={`flex items-center gap-1 text-xs ${
                          numericValue > 0 ? "text-[#22C55E]" : "text-[#D9475A]"
                        }`}
                      >
                        {numericValue > 0 ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {change}
                      </span>
                    </div>

                    <div className="col-span-2 hidden text-right lg:block">
                      <span className="font-['Geist_Mono'] text-[#f8f8f8]">
                        {price}
                      </span>
                    </div>

                    <div className="col-span-2 hidden text-right lg:block">
                      <span
                        className={`inline-flex items-center gap-1 font-['Geist_Mono'] ${
                          numericValue > 0 ? "text-[#22C55E]" : "text-[#D9475A]"
                        }`}
                      >
                        {numericValue > 0 ? (
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowDownRight className="h-3.5 w-3.5" />
                        )}
                        {change}
                      </span>
                    </div>

                    <div className="col-span-2 hidden text-right lg:block">
                      <span className="font-['Geist_Mono'] text-[#7d8086]">
                        {volume}
                      </span>
                    </div>

                    <div className="hidden lg:col-span-2 lg:block lg:text-right">
                      <button className="cursor-pointer rounded-md bg-[#22C55E] px-4 py-2 text-sm font-medium text-white text-black hover:opacity-90">
                        Comprar
                      </button>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <NavLink to="/market">
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#1f2227] px-4 py-2 text-sm text-[#f8f8f8] hover:bg-[#14161a]">
              Ver todos los mercados
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default MarketTable;

