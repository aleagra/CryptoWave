import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import Wrapper from "../wrapper/Wrapper";
function CoinList() {
  const { coins } = useContext(CoinContext);
  return (
    <div className="m-auto w-full">
      <h1 className="my-4 text-center text-[4rem] font-bold text-white max-2xl:text-[3.5rem] max-md:px-4 max-md:text-[2.5rem] max-md:leading-[3rem]">
        Buy <span className="text-main">crypto</span> at true cost
      </h1>
      <p className="mb-16 text-center text-[1.5rem] font-bold text-secondary max-2xl:mb-10 max-2xl:text-[1.2rem] max-md:px-10 max-md:text-center max-md:text-lg">
        Whenever we can, we provide real-time data for free.
      </p>
      <div className="m-auto flex items-center max-md:m-0">
        <div className="m-auto w-[100%] text-left text-sm text-white max-md:px-2">
          <div className="grid grid-cols-4 pl-6 text-lg text-secondary max-2xl:text-base max-md:pl-2">
            <div className="max-md:pl-4">Coin</div>
            <div className="text-center">Last price</div>
            <div className="text-center ">24h change</div>
            <div className="text-center ">Trade</div>
          </div>

          <div className="my-2 border-opacity-30 ">
            <div className="my-5 border-opacity-30">
              {coins?.slice(5, 10).map((Element) => {
                const numericValue = parseFloat(
                  Element.DISPLAY?.USD.CHANGE24HOUR.substring(1)
                );
                return (
                  <div
                    className="grid grid-cols-4 place-items-center rounded-md py-5 pl-6 hover:bg-white/20 max-lg:grid-cols-4 max-lg:rounded-none max-lg:py-4 max-lg:pl-4"
                    key={Element.CoinInfo.Id}
                  >
                    <div className="flex w-full items-center gap-2 max-lg:gap-1">
                      <img
                        className="h-6 w-6"
                        src={
                          "https://www.cryptocompare.com" +
                          Element.CoinInfo.ImageUrl
                        }
                        alt={Element.CoinInfo.FullName}
                      />

                      <span className="text-xl max-lg:text-sm">
                        {Element.CoinInfo.FullName}
                      </span>

                      <span className="text-lg uppercase text-secondary max-lg:hidden ">
                        {Element.CoinInfo.Internal}
                      </span>
                    </div>

                    <div className="text-center text-xl font-bold max-lg:text-sm">
                      {Element.DISPLAY?.USD.PRICE}
                    </div>

                    <div className="text-center ">
                      <span
                        className={`text-center text-lg font-bold max-sm:text-xs ${
                          numericValue > 0 ? "text-[#00A68C]" : "text-[#D9475A]"
                        }`}
                      >
                        {Element.DISPLAY?.USD.CHANGE24HOUR}
                      </span>
                    </div>

                    <div className="flex items-center justify-center">
                      <NavLink to="/Exchange">
                        <button className="w-[8rem] rounded-md bg-main p-2 uppercase max-2xl:text-sm max-lg:w-[4rem]">
                          Buy
                        </button>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper(CoinList);
