import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import Navbar from "./Navbar";
import Wrapper from "../wrapper/Wrapper";

function Search() {
  const { coins } = useContext(CoinContext);
  let { buscar } = useParams();

  return (
    <>
      <Navbar />
      <div className="m-auto flex w-full items-center bg-[#0d0d0d] max-lg:pt-[5rem] lg:pt-[8rem]">
        <div className="m-auto w-[100%] text-left text-sm text-white">
          <div className="grid grid-cols-5 pl-6 text-lg font-semibold text-[#7D7D7D]">
            <div className="max-md:pl-4">Coin</div>
            <div className="text-center">Last price</div>
            <div className="text-center max-sm:hidden">24h change</div>
            <div className="text-center max-lg:hidden">Volume</div>
            <div className="text-center max-lg:hidden">Trade</div>
          </div>
          {coins?.map((Element) => {
            const numericValue = parseFloat(
              Element.DISPLAY?.USD.CHANGE24HOUR.substring(1)
            );
            if (
              Element.CoinInfo.FullName.trim()
                .toLowerCase()
                .includes(buscar.toLowerCase())
            ) {
              return (
                <div
                  className="grid grid-cols-5 place-items-center rounded-md py-5 pl-6 hover:bg-white/10"
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
                    <p className="text-xl">{Element.CoinInfo.FullName}</p>
                    <p className="text-lg uppercase text-[#7D7D7D] max-md:hidden">
                      {Element.CoinInfo.Internal}
                    </p>
                  </div>

                  <div className="text-center text-xl font-bold">
                    {Element.DISPLAY?.USD.PRICE}
                  </div>

                  <div className="text-center max-sm:hidden">
                    <p
                      className={`text-center text-lg font-bold ${
                        numericValue > 0 ? "text-[#00A68C]" : "text-[#D9475A]"
                      }`}
                    >
                      {Element.DISPLAY?.USD.CHANGE24HOUR}
                    </p>
                  </div>

                  <div className="text-center text-lg max-lg:hidden">
                    {Element.DISPLAY?.USD.VOLUME24HOURTO}
                  </div>

                  <div className="flex items-center justify-center  max-lg:hidden">
                    <Link to="/Exchange">
                      <button className="w-[100%] rounded-md bg-[#46429d] p-2 px-10">
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
export default Wrapper(Search);
