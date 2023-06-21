import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import Wrapper from "../wrapper/Wrapper";
function CoinList() {
  const { coins } = useContext(CoinContext);
  return (
    <div className="m-auto w-full">
      <h1 className="my-4 text-center text-[4rem] font-bold text-white max-2xl:text-[3.5rem] max-sm:text-5xl">
        Buy <span className="text-[#45419d]">crypto</span> at true cost
      </h1>
      <p className="mb-16 text-center text-[1.5rem] font-bold text-white/50 max-2xl:mb-10 max-2xl:text-[1.2rem]">
        Whenever we can, we provide real-time data for free.
      </p>
      <div className="m-auto flex items-center">
        <div className="m-auto w-[100%] text-left text-sm text-white">
          <div className="grid grid-cols-4 pl-6 text-lg text-[#7D7D7D] max-2xl:text-base">
            <div className="max-md:pl-4">Coin</div>
            <div className="text-center">Last price</div>
            <div className="text-center max-sm:hidden">24h change</div>
            <div className="text-center max-lg:hidden">Trade</div>
          </div>

          <div className="my-2 border-opacity-30 ">
            {coins?.slice(0, 5).map((Element) => {
              const numericValue = parseFloat(
                Element.DISPLAY.USD.CHANGE24HOUR.substring(1)
              );
              return (
                <div
                  className="grid grid-cols-4 place-items-center rounded-md py-4 pl-6 hover:bg-white/10 max-2xl:py-4"
                  key={Element.CoinInfo.Id}
                >
                  <div className="flex w-full gap-2">
                    <img
                      className="w-6"
                      src={
                        "https://www.cryptocompare.com" +
                        Element.CoinInfo.ImageUrl
                      }
                      alt={Element.CoinInfo.FullName}
                    />
                    <p className="text-xl max-2xl:text-lg">
                      {Element.CoinInfo.FullName}
                    </p>
                    <p className="text-lg uppercase text-[#7D7D7D] max-2xl:text-base max-md:hidden">
                      {Element.CoinInfo.Internal}
                    </p>
                  </div>

                  <div className="text-center text-xl font-bold max-2xl:text-lg">
                    {Element.DISPLAY.USD.PRICE}
                  </div>

                  <div className="text-center max-sm:hidden">
                    <p
                      className={`text-center text-lg font-bold max-2xl:text-base ${
                        numericValue > 0 ? "text-[#00A68C]" : "text-[#D9475A]"
                      }`}
                    >
                      {Element.DISPLAY.USD.CHANGE24HOUR}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <Link to="/Exchange">
                      <button className="w-[100%] rounded-md bg-[#46429d] p-2 px-10 uppercase max-2xl:text-sm">
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

export default Wrapper(CoinList);
