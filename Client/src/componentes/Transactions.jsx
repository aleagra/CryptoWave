import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

function Transactions() {
  const { coins } = useContext(CoinContext);
  return (
    <div className="max-2xl: m-auto w-[100%] text-left text-sm text-white">
      <div className="grid grid-cols-5 pl-6 text-lg font-semibold text-secondary max-md:grid-cols-4 max-md:pl-0">
        <div className="text-center">Type</div>
        <div className="text-center max-md:pl-4">Coin</div>
        <div className="text-center">Amount</div>
        <div className="text-center max-md:hidden">Total Value</div>
        <div className="text-center">Status</div>
      </div>

      <div className="my-5 border-opacity-30 max-md:my-2">
        {coins?.slice(0, 7).map((Element) => {
          return (
            <div
              className="grid grid-cols-5 place-items-center rounded-md py-5 pl-6 hover:bg-white/10 max-md:grid-cols-4 max-md:pl-0"
              key={Element.CoinInfo.Id}
            >
              <div className=" flex items-center gap-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7 rounded-full bg-yellow-400 stroke-black p-[5px] max-md:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>

                <span className="text-lg max-md:text-sm">Exchange</span>
              </div>
              <div className="flex w-full items-center justify-center gap-2">
                <img
                  className="h-6 w-6"
                  src={
                    "https://www.cryptocompare.com" + Element.CoinInfo.ImageUrl
                  }
                  alt={Element.CoinInfo.FullName}
                />

                <span className="text-lg max-md:text-sm">
                  {Element.CoinInfo.Internal}
                </span>
              </div>

              <div className="text-center text-lg font-bold max-md:text-sm">
                <p> 0,002342</p>
              </div>

              <div className="flex items-center justify-center text-lg max-md:hidden">
                <p>$423,40</p>
              </div>
              <div className="flex items-center justify-center gap-2 max-md:text-xs">
                <p className="rounded-lg bg-yellow-400/20 p-2 text-yellow-400  ">
                  In progress
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transactions;
