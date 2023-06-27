import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import Swal from "sweetalert2";
function Traiding() {
  const { coins } = useContext(CoinContext);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  function alerta() {
    Toast.fire({
      icon: "success",
      title: "The purchase was successful",
    });
  }

  return (
    <div className="flex w-full flex-col gap-y-6 p-7">
      <h1 className="text-center text-xl">Traiding spot</h1>
      <div className="relative">
        <select className="w-full rounded-md border border-white/20 bg-transparent py-3 text-center text-white">
          <option value="">
            <span className="text-sm">Seleccione una crypto</span>
          </option>
          {coins.map((option) => (
            <option
              className="bg-[#0d0d0d]"
              key={option.CoinInfo.Id}
              value={option.DISPLAY.USD.PRICE}
            >
              {option.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <input
          className="w-full rounded-md border border-white/20 bg-transparent py-3 pr-16 outline-none"
          type="text"
          dir="rtl"
          maxLength="7"
        />
        <span className="absolute left-3 top-4 text-xs">Amount</span>
        <span className="absolute right-4 top-4 text-xs">USDT</span>
      </div>

      <div className="relative">
        <span>{Element.current_price}</span>
      </div>

      <div className=" flex justify-center">
        <button
          className="w-full rounded-md bg-main py-3 font-bold uppercase"
          onClick={() => {
            alerta();
          }}
        >
          Buy
        </button>
      </div>
      <p className="text-center">
        Total balance: <span className="">6000 USD</span>
      </p>
    </div>
  );
}

export default Traiding;
