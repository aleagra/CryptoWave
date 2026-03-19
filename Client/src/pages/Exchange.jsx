import { Clock } from "lucide-react";
import { Navbar, Footer, Transactions } from "../componentes";
import { PortfolioList } from "../componentes/Exchange/PortfolioList";

export default function ExchangePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="border-b border-[#2a2a2a]/60">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="sm:flex-row sm:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-1.5 text-xs font-medium text-[#22C55E]">
                  <Clock className="h-3 w-3" />
                  Actualizado ahora
                </div>
                <h1 className="text-4xl font-bold text-white">
                  Panel de control
                </h1>

                <p className="mt-2 text-sm text-[#7d8086]">
                  Visualiza el estado de tu portafolio, el valor actual de tus
                  activos y las transacciones recientes en tu cuenta.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 ">
            <div className="lg:col-span-4">
              <PortfolioList />
            </div>

            <div className="lg:col-span-8">
              <div className="flex h-full flex-col rounded-xl border border-[#2a2a2a]/60 bg-[#040405] p-4 px-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Transacciones recientes
                </h3>
  
                <div className="mt-4 flex-1 overflow-x-auto">
                  <Transactions />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
