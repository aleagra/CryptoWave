import { useState, useEffect } from "react";

export function useCoinChart(symbol) {
  const [chartData, setChartData] = useState([]);
  const [loadingChart, setLoadingChart] = useState(true);

  useEffect(() => {
    async function loadChart() {
      if (!symbol) return;
      setLoadingChart(true);
      try {
        const res = await fetch(
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=24&api_key=dcfdfec656ebe0c95f2f72a0aaa4e2d321e2f7e714606f80f98ad1b8a65d79d4`,
        );
        const data = await res.json();
        const prices = data.Data.Data.map((p) => p.close);
        setChartData(prices);
      } catch (err) {
        console.error("Error al cargar chart:", err);
      } finally {
        setLoadingChart(false);
      }
    }
    loadChart();
  }, [symbol]);

  return { chartData, loadingChart };
}
