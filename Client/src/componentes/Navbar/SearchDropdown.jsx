import { NavLink } from "react-router-dom";

export function SearchDropdown({ query, resultados, totalResultados, onSelect }) {
  if (!resultados || resultados.length === 0) return null;

  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-full origin-top animate-[dropdown_0.18s_ease] overflow-hidden rounded-xl border border-[#2a2a2a]/60 bg-[#060709]/95 shadow-2xl backdrop-blur-xl md:-right-0 md:w-[calc(100%+10rem)]">
      <div className="space-y-1 p-2">
        {resultados.map((coin) => {
          const change =
            parseFloat(coin.DISPLAY?.USD.CHANGE24HOUR?.replace("$", "")) || 0;
          const positive = change >= 0;
          return (
            <NavLink
              key={coin.CoinInfo.Id}
              to={`/trade/${coin.CoinInfo.Name}`}
              className="flex items-center justify-between gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-[#14161a] sm:px-5 sm:py-4"
              onClick={onSelect}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={"https://www.cryptocompare.com" + coin.CoinInfo.ImageUrl}
                  className="h-9 w-9 rounded-full sm:h-10 sm:w-10"
                  alt={coin.CoinInfo.FullName}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white sm:text-base">
                    {coin.CoinInfo.FullName}
                  </span>
                  <span className="text-xs text-[#7d8086]">
                    {coin.CoinInfo.Name}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-sm text-white">
                  ${coin.RAW?.USD.PRICE.toFixed(4)}
                </span>
                <span
                  className={`text-xs ${
                    positive ? "text-[#22C55E]" : "text-red-400"
                  }`}
                >
                  {positive ? "+" : ""}
                  {coin.DISPLAY?.USD.CHANGEPCT24HOUR}%
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>

      {totalResultados && totalResultados > 3 && (
        <div className="border-t border-[#2a2a2a]/60">
          <NavLink
            to={`/Search/${query}`}
            onClick={onSelect}
            className="block w-full px-4 py-3 text-center text-sm font-medium text-[#c0c1c4] transition-colors hover:bg-[#1a1c20] hover:text-white sm:py-4 sm:text-base"
          >
            Presiona Enter para ver todos ({totalResultados})
          </NavLink>
        </div>
      )}
    </div>
  );
}
