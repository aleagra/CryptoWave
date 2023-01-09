import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import { Navbar } from "./Navbar";
export default function Search() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [search, setSearch] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const coins = await axios.get(url);
      setCoins(coins.data);
    }
    productosDB();
  }, []);
  let { buscar } = useParams();
  console.log(buscar);

  return (
    <>
      <Navbar />
      <div className="m-auto flex items-center max-lg:pt-[5rem] lg:pt-[8rem]">
        <table className="m-auto w-[100%]  text-left text-sm text-white lg:w-[93%]">
          <thead>
            <tr className=" text-lg text-[#7D7D7D]">
              <th className="max-md:pl-4"> Coin</th>
              <th className="p-5 text-center">Last price</th>
              <th className="p-5 text-center max-sm:hidden">24h change</th>
              <th className="p-5 text-center max-lg:hidden">Volume</th>
              <th className="p-5 text-center max-lg:hidden">Trade</th>
            </tr>
          </thead>
          <tbody className="">
            {coins.map((Element, index) => {
              if (
                Element.name.trim().toLowerCase().includes(buscar.toLowerCase())
              ) {
                return (
                  <tr className="border-opacity-30">
                    <th className="max-lg:pl-4 ">
                      <div className="  flex w-full items-center gap-3 text-2xl max-lg:gap-4 ">
                        <img className=" w-6 " src={Element.image}></img>
                        <p className="max-lg:text-xl">{Element.name}</p>
                        <p className="text-lg uppercase text-[#7D7D7D] max-md:hidden">
                          {Element.symbol}
                        </p>
                      </div>
                    </th>
                    <td>
                      <p className=" text-center text-2xl font-bold">
                        ${Element.current_price}
                      </p>
                    </td>
                    <td className="max-sm:hidden">
                      <p
                        className={` p-5 text-center text-xl font-bold  ${
                          Element.price_change_percentage_24h > 0
                            ? "text-[#00A68C]"
                            : "text-[#D9475A]"
                        }`}
                      >
                        ${Element.price_change_percentage_24h}
                      </p>
                    </td>
                    <td className="text-center text-xl max-lg:hidden">
                      {Element.total_volume}
                    </td>

                    <td className="flex items-center  justify-center p-5 max-lg:hidden">
                      <Link to="/Exchange" className="">
                        <button className=" w-[100%] rounded-md bg-[#00A68C] p-2 px-10 uppercase">
                          Buy
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
