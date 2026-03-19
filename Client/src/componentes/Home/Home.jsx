import { Link } from "react-router-dom";

import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-150 w-150 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22C55E]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a]/60 bg-[#161616]/50 px-3 py-1.5 text-xs font-medium text-[#7d8086] lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              Plataforma en vivo
            </div>

            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
              Únete al mejor
              <span className="bg-linear-to-r block from-[#22C55E] to-[#4ade80] bg-clip-text text-transparent">
                exchange de criptomonedas
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#7d8086] sm:text-base lg:mx-0 lg:text-lg">
              Compra y vende más de 100 criptomonedas usando transferencias
              bancarias o tu tarjeta de crédito/débito. Comisiones bajas y datos
              en tiempo real.
            </p>

            <div className="mt-7 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/register"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#22C55E] px-6 py-3 font-medium text-black transition hover:bg-[#16a34a] sm:w-auto"
              >
                Comenzar ahora
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/market"
                className="w-full rounded-lg border border-[#2a2a2a] px-6 py-3 text-center font-medium text-white transition hover:bg-[#161616] sm:w-auto"
              >
                Ver mercados
              </Link>
            </div>

            <div className="mt-10 grid w-full grid-cols-3 justify-center gap-4 text-center sm:flex sm:flex-wrap sm:items-center sm:gap-8 sm:text-center lg:justify-start lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  $2.4B+
                </div>
                <div className="text-xs text-[#7d8086] sm:text-sm">
                  Volumen diario
                </div>
              </div>

              <div className="hidden h-10 w-px bg-[#2a2a2a]/60 sm:block" />

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  150+
                </div>
                <div className="text-xs text-[#7d8086] sm:text-sm">
                  Criptomonedas
                </div>
              </div>

              <div className="hidden h-10 w-px bg-[#2a2a2a]/60 sm:block" />

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  10M+
                </div>
                <div className="text-xs text-[#7d8086] sm:text-sm">
                  Usuarios
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-lg">
            <div className="relative aspect-square">
              <div className="absolute inset-4 rounded-2xl border border-[#2a2a2a]/60 bg-[#040405] p-4 backdrop-blur-sm sm:inset-6 sm:p-5 lg:inset-8 lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#7d8086] sm:text-sm">
                      Balance total
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                      $12,459.32
                    </div>
                  </div>

                  <div className="rounded-full bg-[#22C55E]/10 px-2 py-1 text-xs font-medium text-[#22C55E]">
                    +12.4%
                  </div>
                </div>

                <div className="mt-5 space-y-2 sm:space-y-3">
                  {[
                    {
                      name: "Bitcoin",
                      symbol: "BTC",
                      value: "$8,234.21",
                      change: "+5.2%",
                    },
                    {
                      name: "Ethereum",
                      symbol: "ETH",
                      value: "$3,122.45",
                      change: "+2.8%",
                    },
                    {
                      name: "Solana",
                      symbol: "SOL",
                      value: "$1,102.66",
                      change: "-1.2%",
                    },
                  ].map((coin) => (
                    <div
                      key={coin.symbol}
                      className="flex items-center justify-between rounded-lg bg-[#161616]/50 p-2 sm:p-3"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E]/10 text-xs font-bold text-[#22C55E] sm:h-8 sm:w-8">
                          {coin.symbol.slice(0, 2)}
                        </div>

                        <div>
                          <div className="text-xs font-medium text-white sm:text-sm">
                            {coin.name}
                          </div>
                          <div className="text-[10px] text-[#7d8086] sm:text-xs">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-medium text-white sm:text-sm">
                          {coin.value}
                        </div>

                        <div
                          className={`text-[10px] sm:text-xs ${
                            coin.change.startsWith("+")
                              ? "text-[#22C55E]"
                              : "text-red-500"
                          }`}
                        >
                          {coin.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-2 top-10 rounded-xl border border-[#2a2a2a]/60 bg-[#111111] p-2 shadow-lg sm:-right-4 sm:top-12 sm:p-3">
                <Shield className="h-4 w-4 text-[#22C55E] sm:h-5 sm:w-5" />
              </div>

              <div className="absolute -left-2 bottom-20 rounded-xl border border-[#2a2a2a]/60 bg-[#111111] p-2 shadow-lg sm:-left-4 sm:bottom-24 sm:p-3">
                <Zap className="h-4 w-4 text-[#22C55E] sm:h-5 sm:w-5" />
              </div>

              <div className="absolute bottom-2 right-10 rounded-xl border border-[#2a2a2a]/60 bg-[#111111] p-2 shadow-lg sm:bottom-4 sm:right-12 sm:p-3">
                <Globe className="h-4 w-4 text-[#22C55E] sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

