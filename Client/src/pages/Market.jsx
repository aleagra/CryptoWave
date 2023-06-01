import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import { Navbar } from "../componentes";
export function Market() {
  const { coins } = useContext(CoinContext);
  let { buscar } = useParams();

  function formatNumber(number) {
    const symbols = ["", "k", "M", "B", "T"];

    const tier = (Math.log10(Math.abs(number)) / 3) | 0;

    if (tier === 0) return number;

    const suffix = symbols[tier];
    const scale = Math.pow(10, tier * 3);

    const scaledNumber = number / scale;

    return `${scaledNumber.toFixed(1)}${suffix}`;
  }
  return (
    <>
      <Navbar />
      <div className="m-auto flex items-center max-lg:pt-[5rem] lg:pt-[8rem]">
        <div className="m-auto w-[100%] text-left text-sm text-white lg:w-[93%]">
          <div className="grid grid-cols-5 text-lg text-[#7D7D7D]">
            <div className="max-md:pl-4">Coin</div>
            <div className="text-center">Last price</div>
            <div className="text-center max-sm:hidden">24h change</div>
            <div className="text-center max-lg:hidden">Volume</div>
            <div className="text-center max-lg:hidden">Trade</div>
          </div>

          <div className="border-opacity-30">
            {coins?.map((Element) => {
              return (
                <div
                  className="grid grid-cols-5 items-center py-5"
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

                  <div className="text-center text-xl max-lg:hidden">
                    {formatNumber(Element.total_volume)}
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
    </>
  );
}
