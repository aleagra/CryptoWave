import { useMemo } from "react";

export function useSearchCoins(coins, searchQuery) {
  const filteredData = useMemo(() => {
    if (!coins) return [];
    if (!searchQuery) return coins;
    const query = searchQuery.toLowerCase();
    return coins.filter(
      (coin) =>
        coin.CoinInfo.FullName.toLowerCase().includes(query) ||
        coin.CoinInfo.Name.toLowerCase().includes(query)
    );
  }, [coins, searchQuery]);

  return filteredData;
}
