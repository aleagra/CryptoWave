import Wrapper from "../wrapper/Wrapper";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

function Home() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="h-150 w-150 absolute left-1/2 top-0 
      -translate-x-1/2 -translate-y-1/2 
      rounded-full bg-[#22C55E]/10 blur-3xl"
        />

        <div
          className="h-100 w-100 absolute bottom-0 right-0 
      translate-x-1/2 translate-y-1/2 
      rounded-full bg-[#22C55E]/10 blur-3xl"
        />
      </div>

      <div className="mx-auto h-screen max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a]/60 bg-[#161616]/50 px-3 py-1.5 text-xs font-medium text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              Plataforma en vivo
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Únete al mejor{" "}
              <span className="bg-linear-to-r from-[#22C55E] to-[#4ade80] bg-clip-text text-transparent">
                exchange de criptomonedas
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Compra y vende más de 100 criptomonedas usando transferencias
              bancarias o tu tarjeta de crédito/débito. Comisiones bajas y datos
              en tiempo real.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="flex items-center gap-2 rounded-lg bg-[#22C55E] px-6 py-3 font-medium text-black transition hover:bg-[#16a34a]">
                Comenzar ahora
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="rounded-lg border border-[#2a2a2a] px-6 py-3 font-medium text-white transition hover:bg-[#161616]">
                Ver mercados
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#2a2a2a]/40 pt-8">
              <div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  $2.4B+
                </div>
                <div className="text-sm text-zinc-400">Volumen diario</div>
              </div>

              <div className="h-10 w-px bg-[#2a2a2a]/60" />

              <div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  150+
                </div>
                <div className="text-sm text-zinc-400">Criptomonedas</div>
              </div>

              <div className="h-10 w-px bg-[#2a2a2a]/60" />

              <div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  10M+
                </div>
                <div className="text-sm text-zinc-400">Usuarios</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-lg">
              {/* Main card */}
              <div className="absolute inset-8 rounded-2xl border border-[#2a2a2a]/60 bg-[#040405] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-zinc-400">Balance total</div>
                    <div className="mt-1 text-3xl font-bold text-white">
                      $12,459.32
                    </div>
                  </div>

                  <div className="rounded-full bg-[#22C55E]/10 px-2.5 py-1 text-xs font-medium text-[#22C55E]">
                    +12.4%
                  </div>
                </div>

                <div className="mt-6 space-y-3">
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
                      className="flex items-center justify-between rounded-lg bg-[#161616]/50 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10 text-xs font-bold text-[#22C55E]">
                          {coin.symbol.slice(0, 2)}
                        </div>

                        <div>
                          <div className="text-sm font-medium text-white">
                            {coin.name}
                          </div>
                          <div className="text-xs text-zinc-400">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-medium text-white">
                          {coin.value}
                        </div>

                        <div
                          className={`text-xs ${
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

              {/* Floating icons */}
              <div className="absolute -right-4 top-12 rounded-xl border border-[#2a2a2a]/60 bg-[#111111] p-3 shadow-lg">
                <Shield className="h-5 w-5 text-[#22C55E]" />
              </div>

              <div className="absolute -left-4 bottom-24 rounded-xl border border-[#2a2a2a]/60 bg-[#111111] p-3 shadow-lg">
                <Zap className="h-5 w-5 text-[#22C55E]" />
              </div>

              <div className="absolute bottom-4 right-12 rounded-xl border border-[#2a2a2a]/60 bg-[#111111] p-3 shadow-lg">
                <Globe className="h-5 w-5 text-[#22C55E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(Home);
