import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Navbar, Footer } from "../componentes";
import { CoinContext } from "../context/CoinContext";
import { useCoinChart } from "../hooks/useCoinChart";
import { PriceChart } from "../componentes/Trade/PriceChart";
import { TradeForm } from "../componentes/Trade/TradeForm";
import { TradeHeader } from "../componentes/Trade/TradeHeader";

import {
  Clock,
  ArrowLeft,
  ChevronDown,
  TrendingUp,
  ArrowLeftRight,
} from "lucide-react";

export default function Trade() {
  const { symbol } = useParams();
  const { coins } = useContext(CoinContext);
  const [amount, setAmount] = useState("");
  const [activeTab, setActiveTab] = useState("buy");

  const { chartData, loadingChart } = useCoinChart(symbol);

  const coin = coins?.find((c) => c.CoinInfo?.Name === symbol);

  const price =
    parseFloat(coin?.DISPLAY?.USD?.PRICE?.replace("$", "").replace(",", "")) ||
    0;
  const change =
    parseFloat(coin?.DISPLAY?.USD?.CHANGE24HOUR?.replace("$", "")) || 0;
  const isPositive = change >= 0;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-white/10"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-4 sm:p-6 xl:px-8">
            <Link
              to="/market"
              className="flex items-center gap-2 text-sm text-[#7d8086] hover:text-white"
            >
              <ArrowLeft size={14} />
              Volver al mercado
            </Link>

            <div className="flex h-fit items-center gap-2 text-sm text-[#7d8086] sm:mt-0">
              <Clock size={14} />
              Mercado en vivo
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#22C55E]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10"
        >
          <TradeHeader coin={coin} symbol={symbol} price={price} isPositive={isPositive} />

          <div className="grid gap-6 lg:grid-cols-3">
            <PriceChart
              chartData={chartData}
              loadingChart={loadingChart}
              isPositive={isPositive}
              price={price}
            />

            <TradeForm
              symbol={symbol}
              price={price}
              amount={amount}
              setAmount={setAmount}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#060607] p-4 sm:p-6 lg:col-span-2">
              <h3 className="mb-3 text-lg font-medium text-white sm:mb-4">
                Sobre {coin?.CoinInfo?.FullName}
              </h3>

              <p className="text-sm leading-relaxed text-[#7d8086]">
                {coin?.CoinInfo?.FullName} ({symbol}) es uno de los activos
                digitales más utilizados en el mercado de criptomonedas.
                Mantiene un alto volumen de trading y liquidez en múltiples
                exchanges a nivel global, lo que lo convierte en una opción
                popular tanto para inversores como para traders.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#7d8086]">
                  Criptomoneda
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#7d8086]">
                  Activo digital
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#7d8086]">
                  Blockchain
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#060607] p-4 sm:p-6">
              <h3 className="mb-3 text-lg font-medium text-white sm:mb-4">
                Acciones rápidas
              </h3>

              <div className="space-y-2 sm:space-y-3">
                <Link
                  to="/exchange"
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-3"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ArrowLeftRight size={18} className="text-[#7d8086]" />
                    <span className="text-sm text-white">Ir al exchange</span>
                  </div>
                  <ChevronDown size={16} className="-rotate-90 text-zinc-500" />
                </Link>

                <Link
                  to="/market"
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-3"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <TrendingUp size={18} className="text-[#7d8086]" />
                    <span className="text-sm text-white">Ver mercado</span>
                  </div>
                  <ChevronDown size={16} className="-rotate-90 text-zinc-500" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
