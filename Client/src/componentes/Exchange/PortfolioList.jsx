import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { portfolio } from "../../utilities/icons/data";

export function PortfolioList() {
  const { coins } = useContext(CoinContext);

  const totalBalance = portfolio.reduce((total, asset) => {
    const coin = coins?.find((c) => c.CoinInfo.Internal === asset.coin);
    const price = parseFloat(coin?.DISPLAY?.USD?.PRICE?.replace(/[$,]/g, "") || 0);
    return total + asset.amount * price;
  }, 0);

  return (
    <div className="flex h-full flex-col rounded-xl border border-[#2a2a2a]/60 bg-[#040405] py-8 px-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-[#7d8086]">Balance total</div>
          <div className="mt-1 text-3xl font-bold text-white">
            ${totalBalance.toLocaleString()}
          </div>
        </div>
        <div className="rounded-full bg-[#22C55E]/10 px-2.5 py-1 text-xs font-medium text-[#22C55E]">
          +12.4%
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {portfolio.map((asset) => {
          const coin = coins?.find((c) => c.CoinInfo.Internal === asset.coin);
          const price = parseFloat(coin?.DISPLAY?.USD?.PRICE?.replace(/[$,]/g, "") || 0);
          
          const value = asset.amount * price;
          const cost = asset.amount * asset.avgBuyPrice;
          const profit = value - cost;
          const positive = profit >= 0;

          const icon = coin && "https://www.cryptocompare.com" + coin.CoinInfo.ImageUrl;

          return (
            <div
              key={asset.coin}
              className="mb-4 flex items-center justify-between rounded-lg bg-[#161616]/50 p-3"
            >
              <div className="flex items-center gap-3">
                {icon ? (
                  <img className="h-8 w-8" src={icon} alt={asset.coin} />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10 text-xs font-bold text-[#22C55E]">
                    {asset.coin.slice(0, 2)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-white">
                    {coin?.CoinInfo.FullName || asset.coin}
                  </div>
                  <div className="text-xs text-[#7d8086]">
                    {asset.amount} {asset.coin}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-white">
                  ${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div className={`text-xs ${positive ? "text-[#22C55E]" : "text-red-500"}`}>
                  {positive ? "+" : ""}
                  ${profit.toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
