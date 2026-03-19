import { NavLink } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function MarketCoinRow({ coin }) {
  const change = parseFloat(coin.DISPLAY?.USD.CHANGE24HOUR?.replace("$", "")) || 0;
  const positive = change >= 0;

  return (
    <div className="group px-4 py-4 hover:bg-white/5 sm:px-6">
      <div className="hidden grid-cols-12 items-center gap-4 lg:grid">
        <div className="col-span-4 flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-full"
            src={"https://www.cryptocompare.com" + coin.CoinInfo.ImageUrl}
            alt={coin.CoinInfo.FullName}
          />
          <div>
            <p className="font-medium text-white">{coin.CoinInfo.FullName}</p>
            <p className="text-sm text-[#7d8086]">{coin.CoinInfo.Name}</p>
          </div>
        </div>

        <div className="col-span-2 text-right font-mono text-white">
          {coin.DISPLAY?.USD.PRICE}
        </div>

        <div className="col-span-2 flex justify-center">
          <span
            className={`flex items-center gap-1 rounded-md px-2 py-1 text-sm ${
              positive
                ? "bg-[#22C55E]/20 text-[#22C55E]"
                : "bg-red-400/10 text-red-400"
            }`}
          >
            {positive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {coin.DISPLAY?.USD.CHANGEPCT24HOUR}%
          </span>
        </div>

        <div className="col-span-2 text-right font-mono text-[#7d8086]">
          {coin.DISPLAY?.USD.VOLUME24HOURTO}
        </div>

        <div className="col-span-2 text-right">
          <NavLink to={`/trade/${coin.CoinInfo.Name}`}>
            <button className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm hover:bg-[#16a34a]">
              Operar
            </button>
          </NavLink>
        </div>
      </div>
      <div className="space-y-3 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-9 w-9 rounded-full"
              src={"https://www.cryptocompare.com" + coin.CoinInfo.ImageUrl}
              alt={coin.CoinInfo.FullName}
            />
            <div>
              <p className="text-sm text-white">{coin.CoinInfo.FullName}</p>
              <p className="text-xs text-[#7d8086]">{coin.CoinInfo.Name}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-mono text-sm text-white">
              {coin.DISPLAY?.USD.PRICE}
            </p>
            <span
              className={`flex items-center justify-end gap-1 text-xs ${
                positive ? "text-[#22C55E]" : "text-red-400"
              }`}
            >
              {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {coin.DISPLAY?.USD.CHANGEPCT24HOUR}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2">
          <span className="text-xs text-[#7d8086]">
            Vol: {coin.DISPLAY?.USD.VOLUME24HOURTO}
          </span>
          <NavLink to={`/trade/${coin.CoinInfo.Name}`}>
            <button className="cursor-pointer rounded-md bg-[#22C55E] px-3 py-1.5 text-xs font-medium text-black">
              Operar
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
