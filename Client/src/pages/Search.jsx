import { useContext, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Search as SearchIcon,
} from "lucide-react";

import { CoinContext } from "../context/CoinContext";

import { Navbar, Footer } from "../componentes";

export default function Search() {
  const { coins } = useContext(CoinContext);
  const { buscar } = useParams();

  const [mostrarResultados, setMostrarResultados] = useState(true);

  const monedasFiltradas = coins?.filter((coin) =>
    coin.CoinInfo.FullName.toLowerCase().includes(buscar.toLowerCase()),
  );

  useEffect(() => {
    setMostrarResultados(monedasFiltradas?.length > 0);
  }, [monedasFiltradas]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-10"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-1.5 text-xs font-medium text-[#22C55E]">
                    <SearchIcon className="text-main h-3.5 w-3.5" />
                    Buscar activos
                  </div>
                  <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                    Resultados de búsqueda
                  </h1>

                  <p className="mt-2 text-[#7d8086]">
                    Mostrando resultados para:{" "}
                    <span className="text-white">{buscar}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              {mostrarResultados && (
                <div className="hidden gap-4 border-b border-white/10 bg-[#060607] px-6 py-4 lg:grid lg:grid-cols-12">
                  <div className="col-span-4 text-xs uppercase text-[#7d8086]">
                    Activo
                  </div>

                  <div className="col-span-2 text-right text-xs uppercase text-[#7d8086]">
                    Precio
                  </div>

                  <div className="col-span-2 text-center text-xs uppercase text-[#7d8086]">
                    Cambio 24h
                  </div>

                  <div className="col-span-2 text-right text-xs uppercase text-[#7d8086]">
                    Volumen
                  </div>

                  <div className="col-span-2 text-right text-xs uppercase text-[#7d8086]">
                    Operar
                  </div>
                </div>
              )}
              <div className="divide-y divide-white/10">
                {monedasFiltradas?.length > 0 ? (
                  monedasFiltradas.map((coin) => {
                    const change =
                      parseFloat(
                        coin.DISPLAY?.USD.CHANGE24HOUR?.replace("$", ""),
                      ) || 0;

                    const positive = change >= 0;

                    return (
                      <div
                        key={coin.CoinInfo.Id}
                        className="group px-6 py-4 transition hover:bg-white/5"
                      >
                        <div className="hidden items-center gap-4 lg:grid lg:grid-cols-12">
                          <div className="col-span-4 flex items-center gap-4">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={
                                "https://www.cryptocompare.com" +
                                coin.CoinInfo.ImageUrl
                              }
                              alt={coin.CoinInfo.FullName}
                            />

                            <div>
                              <p className="font-medium text-white">
                                {coin.CoinInfo.FullName}
                              </p>

                              <p className="text-sm text-[#7d8086]">
                                {coin.CoinInfo.Name}
                              </p>
                            </div>
                          </div>

                          <div className="col-span-2 text-right">
                            <p className="font-mono text-white">
                              {coin.DISPLAY?.USD.PRICE}
                            </p>
                          </div>
                          <div className="col-span-2 flex justify-center">
                            <span
                              className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-sm ${
                                positive
                                  ? "bg-[#22C55E]/20 text-[#22C55E]"
                                  : "bg-red-400/10 text-red-400"
                              }`}
                            >
                              {positive ? (
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              ) : (
                                <ArrowDownRight className="h-3.5 w-3.5" />
                              )}
                              {coin.DISPLAY?.USD.CHANGEPCT24HOUR}%
                            </span>
                          </div>
                          <div className="col-span-2 text-right">
                            <p className="font-mono text-[#7d8086]">
                              {coin.DISPLAY?.USD.VOLUME24HOURTO}
                            </p>
                          </div>

                          <div className="col-span-2 text-right">
                            <NavLink to={`/trade/${coin.CoinInfo.Name}`}>
                              <button className="cursor-pointer rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#22C55E]/70 hover:text-white/70">
                                Operar
                              </button>
                            </NavLink>
                          </div>
                        </div>
                        <div className="lg:hidden">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                className="h-9 w-9 rounded-full"
                                src={
                                  "https://www.cryptocompare.com" +
                                  coin.CoinInfo.ImageUrl
                                }
                              />

                              <div>
                                <p className="text-sm text-white">
                                  {coin.CoinInfo.FullName}
                                </p>

                                <p className="text-xs text-[#7d8086]">
                                  {coin.CoinInfo.Name}
                                </p>
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="font-mono text-sm text-white">
                                {coin.DISPLAY?.USD.PRICE}
                              </p>

                              <span
                                className={`flex items-center gap-1 text-xs ${
                                  positive ? "text-[#22C55E]" : "text-red-400"
                                }`}
                              >
                                {positive ? (
                                  <ArrowUpRight className="h-3 w-3" />
                                ) : (
                                  <ArrowDownRight className="h-3 w-3" />
                                )}
                                {coin.DISPLAY?.USD.CHANGEPCT24HOUR}%
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between border-t border-white/10 pt-3">
                            <span className="text-xs text-[#7d8086]">
                              Vol: {coin.DISPLAY?.USD.VOLUME24HOURTO}
                            </span>

                            <NavLink to="/exchange">
                              <button className="cursor-pointer rounded-md bg-[#22C55E] px-3 py-1 text-xs">
                                Operar
                              </button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-center py-10 text-white">
                    <span className="text-lg">
                      No se encontraron resultados para "{buscar}"
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
