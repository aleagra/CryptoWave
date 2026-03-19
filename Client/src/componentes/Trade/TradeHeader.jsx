import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function TradeHeader({ coin, symbol, price, isPositive }) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex items-center gap-4">
        <img
          className="h-12 w-12 rounded-full sm:h-14 sm:w-14"
          src={
            coin?.CoinInfo?.ImageUrl
              ? "https://www.cryptocompare.com" + coin.CoinInfo.ImageUrl
              : ""
          }
          alt={coin?.CoinInfo?.FullName}
        />

        <div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h1 className="text-xl font-semibold text-white sm:text-2xl">
              {coin?.CoinInfo?.FullName || symbol}
            </h1>

            <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-[#7d8086] sm:text-sm">
              {symbol}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-2xl font-semibold text-white sm:text-3xl">
              {coin?.DISPLAY?.USD?.PRICE || "–"}
            </span>

            <span
              className={`flex items-center gap-1 text-sm ${
                isPositive ? "text-[#22C55E]" : "text-red-400"
              }`}
            >
              {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {coin?.DISPLAY?.USD?.CHANGEPCT24HOUR || "0"}%
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-0 sm:grid-cols-4">
        <div>
          <p className="text-xs uppercase text-zinc-500">Volumen 24h</p>
          <p className="mt-1 font-mono text-sm text-white">
            {coin?.DISPLAY?.USD?.VOLUME24HOURTO || "–"}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-zinc-500">Market Cap</p>
          <p className="mt-1 font-mono text-sm text-white">
            {coin?.DISPLAY?.USD?.MKTCAP || "–"}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-zinc-500">Cambio 24h</p>
          <p
            className={`mt-1 font-mono text-sm ${
              isPositive ? "text-[#22C55E]" : "text-red-400"
            }`}
          >
            {coin?.DISPLAY?.USD?.CHANGEPCT24HOUR || "0"}%
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-zinc-500">Precio</p>
          <p className="mt-1 font-mono text-sm text-white">
            {coin?.DISPLAY?.USD?.PRICE || "–"}
          </p>
        </div>
      </div>
    </div>
  );
}
