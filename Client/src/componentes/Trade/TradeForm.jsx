import { Info } from "lucide-react";

export function TradeForm({ symbol, price, amount, setAmount, activeTab, setActiveTab }) {
  const quantity = amount ? amount / price : 0;
  const fee = amount ? amount * 0.001 : 0;

  return (
    <div className="rounded-xl border border-white/10 bg-[#060607] p-4 sm:p-6">
      <h2 className="mb-4 text-lg font-medium text-white sm:mb-6">
        Operar {symbol}
      </h2>

      <div className="mb-4 flex rounded-lg bg-white/5 p-1 sm:mb-6">
        <button
          onClick={() => setActiveTab("buy")}
          className={`flex-1 cursor-pointer rounded-md py-2 text-sm ${
            activeTab === "buy"
              ? "bg-[#22C55E] text-white"
              : "text-[#7d8086] hover:text-white"
          }`}
        >
          Comprar
        </button>

        <button
          onClick={() => setActiveTab("sell")}
          className={`flex-1 cursor-pointer rounded-md py-2 text-sm ${
            activeTab === "sell"
              ? "bg-red-500 text-white"
              : "text-[#7d8086] hover:text-white"
          }`}
        >
          Vender
        </button>
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="text-sm text-[#7d8086]">Cantidad (USD)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white outline-none focus:border-[#22C55E]"
        />
      </div>

      <div className="mb-3 flex gap-2 sm:mb-4">
        {["100", "500", "1000"].map((val) => (
          <button
            key={val}
            onClick={() => setAmount(val)}
            className="flex-1 cursor-pointer rounded-md border border-white/10 py-1 text-xs text-[#7d8086] hover:border-white/20 hover:text-white"
          >
            ${val}
          </button>
        ))}
      </div>

      <div className="mb-4 space-y-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm sm:mb-6 sm:space-y-3 sm:p-4">
        <div className="flex justify-between">
          <span className="text-[#7d8086]">Precio</span>
          <span className="font-mono text-white">{price ? price.toString() : "–"}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#7d8086]">Recibirás</span>
          <span className="font-mono text-white">
            {quantity.toFixed(6)} {symbol}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-1 text-[#7d8086]">
            Comisión
            <Info size={14} />
          </span>
          <span className="font-mono text-white">{fee.toFixed(2)} USD</span>
        </div>
      </div>
      <button
        disabled={!amount || parseFloat(amount) <= 0}
        className={`w-full cursor-pointer rounded-lg py-3 text-sm font-medium transition disabled:opacity-50 ${
          activeTab === "buy"
            ? "bg-[#22C55E] hover:bg-[#1fb455]"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {activeTab === "buy" ? "Comprar" : "Vender"} {symbol}
      </button>

      <p className="mt-2 text-center text-xs text-zinc-500 sm:mt-3">
        Modo demo — las operaciones no son reales
      </p>
    </div>
  );
}
