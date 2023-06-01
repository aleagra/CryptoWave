import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
function CoinList() {
  const { coins } = useContext(CoinContext);
  return (
    <div className="xl:px-20">
      <h1 className="m-4 text-center text-5xl font-bold text-white max-sm:text-5xl">
        Buy crypto at true cost
      </h1>
      <p className="m-8 text-center text-xl text-white opacity-80">
        Whenever we can, we provide real-time data for free.
      </p>
      <div className="m-auto flex items-center lg:p-12">
        <div className="m-auto w-[100%] text-left text-sm text-white lg:w-[93%]">
          <div className="grid grid-cols-4 text-lg text-[#7D7D7D]">
            <div className="max-md:pl-4">Coin</div>
            <div className="text-center">Last price</div>
            <div className="text-center max-sm:hidden">24h change</div>
            <div className="text-center max-lg:hidden">Trade</div>
          </div>

          <div className="border-opacity-30">
            {coins?.slice(0, 5).map((Element) => {
              return (
                <div
                  className="grid grid-cols-4 items-center py-5"
                  key={Element.id}
                >
                  <div className="flex w-full gap-2">
                    <img
                      className="w-6"
                      src={Element.image}
                      alt={Element.name}
                    />
                    <p className="text-2xl">{Element.name}</p>
                    <p className="text-lg uppercase text-[#7D7D7D] max-md:hidden">
                      {Element.symbol}
                    </p>
                  </div>

                  <div className="text-center text-2xl font-bold">
                    ${Element.current_price}
                  </div>

                  <div className="text-center max-sm:hidden">
                    <p
                      className={`text-center text-xl font-bold ${
                        Element.price_change_percentage_24h > 0
                          ? "text-[#00A68C]"
                          : "text-[#D9475A]"
                      }`}
                    >
                      ${Element.price_change_percentage_24h}
                    </p>
                  </div>

                  <div className="flex items-center justify-center  max-lg:hidden">
                    <Link to="/Exchange">
                      <button className="w-[100%] rounded-md bg-[#00A68C] p-2 px-10 uppercase">
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinList;
