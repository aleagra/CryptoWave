import React from "react";
import Lottie from "lottie-react";
import wallet from "../assets/intento.json";
import buy from "../assets/buy2.json";
import axios from "axios";
import { Market } from "./Market";
import { useState, useEffect } from "react";
export function Homepage() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const coins = await axios.get(url);
      setCoins(coins.data);
    }
    productosDB();
  }, []);
  return (
    <>
      <section className="  flex h-full min-h-screen flex-col justify-center  p-8  max-sm:p-2">
        <div className="mx-auto flex w-[100%] flex-row-reverse  justify-center max-xl:flex-col md:pt-0 ">
          <div className=" z-[1] m-auto outline-none">
            <Lottie
              animationData={wallet}
              className="m-auto max-sm:w-full  sm:w-full"
            />
          </div>
          <div className=" flex flex-col justify-center  px-5 max-lg:w-[90%]  max-md:m-auto lg:mb-12 xl:m-0 2xl:w-[45%]">
            <p className="mt-12 text-sm font-bold text-[#78D9E4] max-md:text-center">
              SIGN UP TODAY
            </p>
            <div className="flex flex-col gap-y-5 text-[3rem] font-bold uppercase text-white max-xl:text-2xl max-md:text-center">
              <span className="text">The words</span>
              <span className="text"> Fastest growing</span>
              <span className="text">Crypto web app</span>
            </div>
            <p className=" dark:text-text my-12 text-[1rem] opacity-70 font-bold  text-white max-xl:my-8 max-lg:text-center max-md:text-xl xl:text-[2.5rem] xl:text-2xl 2xl:text-2xl">
              buy and sell 100+ cryptocoins using bank transfers or your
              credit/debit card.
            </p>
            <div className="flex flex-row gap-14 max-md:justify-evenly max-sm:gap-0 max-md:gap-4">
              <a href="/Login" className="md:w-[60%]">
              <button className="dark:border-text text-bold rounded-lg border-2 border-white bg-[#78D9E4] p-4 font-bold text-white max-sm:p-[0.5rem] max-sm:text-sm sm:w-full md:m-auto  xl:m-0 ">
                Get Started
              </button>
              </a>
              <a href="/Market" className="md:w-[60%] ">
              <button className="dark:border-text rounded-lg border-2 border-white bg-[#AC85F0] p-4  text-white max-sm:p-[0.5rem] max-sm:text-sm sm:w-full md:m-auto xl:m-0 ">
                More information
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="xl:px-20">
        <h1 className="m-4 text-center text-7xl font-bold text-white">
          Buy crypto at true cost
        </h1>
        <p className="m-8 text-center text-3xl text-white opacity-80">
          Whenever we can, we provide real-time data for free.
        </p>
        <div className="m-auto flex items-center lg:p-12">
          <table className="m-auto w-[100%]  text-left text-sm text-white lg:w-[93%]">
            <thead>
              <tr className=" text-lg text-[#7D7D7D]">
                <th className="max-md:pl-4"> Coin</th>
                <th className="p-5 text-center">Last price</th>
                <th className="p-5 text-center max-sm:hidden">24h change</th>
                <th className="p-5 text-center max-lg:hidden">Trade</th>
              </tr>
            </thead>
            <tbody className="">
              {coins.map((Element) => {
                return (
                  <>
                    <tr className="border-opacity-30 ">
                      <th className="max-lg:pl-4">
                        <div className=" flex w-full items-center  gap-3 text-2xl max-lg:gap-4 ">
                          <img className=" w-6  " src={Element.image}></img>
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

                      <td className="flex items-center  justify-center p-5 max-lg:hidden">
                        <a href="/Exchange" className="w-[80%] ">
                        <button className="w-full p-2  rounded-md bg-[#00A68C]  uppercase">
                          Buy
                        </button>
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <section className="  flex h-full min-h-screen flex-col justify-center  p-8 max-sm:p-2">
        <div className="mx-auto flex flex-row-reverse justify-center  max-xl:w-[100%] max-xl:flex-col md:pt-0 ">
          <div className=" z-[1] w-[100%] p-5 outline-none xl:w-[75%] 2xl:w-[90%]">
            <Lottie
              animationData={buy}
              className="m-auto max-sm:w-full md:w-[85%]  lg:w-[55%] xl:w-full"
            />
          </div>
          <div className="  flex flex-col justify-center  px-5 max-xl:m-auto  lg:w-[60%]">
            <p className="text-base text-[#78D9E4]">300+ assets available</p>
            <p className="text-7xl font-bold text-white max-xl:text-center max-md:text-center max-md:text-[3rem]">
              Invest in the world's most popular assets
            </p>
            <p className=" dark:text-text my-12 text-[1rem] font-bold text-white opacity-80 max-xl:my-8 max-lg:text-center   max-md:text-xl xl:text-[1.5rem] xl:text-4xl 2xl:text-2xl">
              From established industries to booming new age up-and-comers —
              pick from over a dozen of different routes to a smart investment.
            </p>
            <a href="/Login">
            <button className="rounded-lg border-2 border-[#78D9E4] p-4 text-white  max-sm:p-[0.5rem] max-sm:text-sm sm:w-full md:m-auto md:w-[60%] xl:m-0 ">
              START EARNING
            </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
