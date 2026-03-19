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
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=24`,
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
