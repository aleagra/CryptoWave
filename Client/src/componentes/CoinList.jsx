import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

function MarketTable() {
  const { coins } = useContext(CoinContext);

  return (
    <section id="market" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1f2227]/60 bg-[#14161a]/50 px-3 py-1.5 text-xs font-medium text-[#7d8086]">
            <TrendingUp className="h-3.5 w-3.5" />
            Datos en tiempo real
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#f8f8f8] sm:text-4xl lg:text-5xl">
            Compra{" "}
            <span className="bg-linear-to-r from-[#22C55E] to-[#16a34a] bg-clip-text text-transparent">
              cripto
            </span>{" "}
            al mejor precio
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[#7d8086] sm:text-lg">
            Proporcionamos datos en tiempo real siempre que es posible.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-[#1f2227]/60 bg-[#040405] backdrop-blur-sm">
          {/* Table Header */}
          <div className="hidden border-b border-[#1f2227]/40 bg-[#060607] px-6 py-4 sm:grid sm:grid-cols-12 sm:gap-4">
            <div className="col-span-4 text-xs font-medium uppercase tracking-wider text-[#7d8086]">
              Moneda
            </div>

            <div className="col-span-2 text-right text-xs font-medium uppercase tracking-wider text-[#7d8086]">
              Precio
            </div>

            <div className="col-span-2 text-right text-xs font-medium uppercase tracking-wider text-[#7d8086]">
              24h Cambio
            </div>

            <div className="col-span-2 text-right text-xs font-medium uppercase tracking-wider text-[#7d8086]">
              Volumen
            </div>

            <div className="col-span-2 text-right text-xs font-medium uppercase tracking-wider text-[#7d8086]">
              Acción
            </div>
          </div>

          {/* BODY */}
          <div className="divide-y divide-[#1f2227]/40">
            {/* LOADER */}
            {!coins &&
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="grid animate-pulse grid-cols-12 items-center gap-4 px-6 py-4"
                >
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full "></div>
                    <div className="h-4 w-24 rounded "></div>
                  </div>

                  <div className="col-span-2">
                    <div className="ml-auto h-4 w-16 rounded"></div>
                  </div>

                  <div className="col-span-2">
                    <div className="ml-auto h-4 w-14 rounded"></div>
                  </div>

                  <div className="col-span-2">
                    <div className="ml-auto h-4 w-14 rounded"></div>
                  </div>

                  <div className="col-span-2">
                    <div className="ml-auto h-8 w-20 rounded"></div>
                  </div>
                </div>
              ))}

            {/* DATA */}
            {coins?.slice(0, 6).map((Element) => {
              const price = Element.DISPLAY?.USD.PRICE;
              const change = Element.DISPLAY?.USD.CHANGE24HOUR;
              const rawVolume = Element.DISPLAY?.USD.VOLUME24HOUR;

              const volume = rawVolume?.replace(/[^\d.,KMB]/gi, "");
              const numericValue = parseFloat(change?.substring(1));

              return (
                <div
                  key={Element.CoinInfo.Id}
                  className="group flex flex-col gap-4 px-6 py-4 transition-colors hover:bg-[#060607] sm:grid sm:grid-cols-12 sm:items-center sm:gap-4"
                >
                  {/* Coin */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      className="h-8 w-8"
                      src={
                        "https://www.cryptocompare.com" +
                        Element.CoinInfo.ImageUrl
                      }
                      alt={Element.CoinInfo.FullName}
                    />

                    <div>
                      <div className="text-[#f8f8f8]">
                        {Element.CoinInfo.FullName}
                      </div>

                      <div className="text-sm text-[#7d8086]">
                        {Element.CoinInfo.Internal}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 hidden text-right sm:block">
                    <span className="font-['Geist_Mono'] text-[#f8f8f8]">
                      {price}
                    </span>
                  </div>

                  {/* Change */}
                  <div className="col-span-2 hidden text-right sm:block">
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

                  {/* Volume */}
                  <div className="col-span-2 hidden text-right sm:block">
                    <span className="font-['Geist_Mono'] text-[#7d8086]">
                      {volume}
                    </span>
                  </div>

                  {/* Button */}
                  <div className="col-span-2 sm:text-right">
                    <NavLink to="/Exchange">
                      <button className="w-full cursor-pointer rounded-md bg-[#22C55E] px-4 py-2 text-sm font-medium text-[#f8f8f8] hover:opacity-90 sm:w-auto">
                        Comprar
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <NavLink to="/Market">
            <button className="inline-flex items-center gap-2 rounded-md border border-[#1f2227] px-4 py-2 text-sm text-[#f8f8f8] hover:bg-[#14161a]">
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
