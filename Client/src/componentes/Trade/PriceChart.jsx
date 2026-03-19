import { BarChart3 } from "lucide-react";

export function PriceChart({ chartData, loadingChart, isPositive, price }) {
  const data =
    chartData && chartData.length > 0 && price
      ? [...chartData, Number(price)]
      : chartData || [];

  const rawMax = data.length ? Math.max(...data) : 1;
  const rawMin = data.length ? Math.min(...data) : 0;
  const range = rawMax - rawMin;

  const max = rawMax === rawMin ? rawMax * 1.05 : rawMax + range * 0.05;
  const min = rawMax === rawMin ? rawMin * 0.95 : rawMin - range * 0.05;

  function generateChartPath(data) {
    if (!data || !data.length) return "";
    const width = 100;
    const height = 40;
    const scaleX = data.length > 1 ? width / (data.length - 1) : 1;
    const scaleY = max !== min ? height / (max - min) : 1;

    let path = "";
    data.forEach((val, i) => {
      const x = i * scaleX;
      const y = height - (val - min) * scaleY;
      path += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    });
    return path;
  }

  const chartPath = generateChartPath(data);

  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-[#060607] p-4 sm:p-6 lg:col-span-2">
      <div className="mb-4 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-zinc-500" />
        <h2 className="text-lg font-semibold text-white">Price Chart</h2>
      </div>

      <div className="relative flex h-60 w-full items-center justify-center sm:h-72 md:h-80">
        {loadingChart ? (
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-600 border-t-white" />
            <span className="text-xs text-zinc-500 sm:text-sm">
              Cargando gráfico...
            </span>
          </div>
        ) : data.length > 0 ? (
          <>
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-zinc-800/50" />
              ))}
            </div>
            
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-1 text-right sm:py-2">
              {[1, 0.75, 0.5, 0.25, 0].map((factor, i) => {
                const value = min + (max - min) * factor;
                let formatted;
                if (value >= 100) {
                  formatted = Math.round(value).toLocaleString();
                } else {
                  formatted = value.toFixed(4);
                  formatted = parseFloat(formatted).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                  });
                }
                return (
                  <span
                    key={i}
                    className={`text-[10px] sm:text-xs text-zinc-600`}
                  >
                    ${formatted}
                  </span>
                );
              })}
            </div>
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full pr-16"
            >
              <defs>
                <linearGradient
                  id="chartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={isPositive ? "#10B981" : "#EF4444"}
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor={isPositive ? "#10B981" : "#EF4444"}
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d={`${chartPath} L 100 40 L 0 40 Z`}
                fill="url(#chartGradient)"
              />
              <path
                d={chartPath}
                fill="none"
                stroke={isPositive ? "#10B981" : "#EF4444"}
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </>
        ) : (
          <span className="text-xs text-zinc-500 sm:text-sm">No hay datos</span>
        )}
      </div>
      {!loadingChart && data.length > 0 && (
        <div className="mt-2 flex justify-between pr-10 text-[10px] sm:mt-4 sm:text-xs">
          {["00:00", "06:00", "12:00", "18:00", "Now"].map((time, i) => (
            <span key={i} className="text-zinc-600">
              {time}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
