import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { CoinContext } from "../context/CoinContext";
import { DataContext } from "../context/DataContext";
import Navbar from "./Navbar";
import Wrapper from "../wrapper/Wrapper";
import { AccentIcon } from "../utilities/icons";
function Exchange() {
  const { myData, amount } = useContext(DataContext);
  const { coins } = useContext(CoinContext);
  const [coinSelect, setCoinSelect] = useState([]);
  const [cantBought, setCantBought] = useState();
  const currentList = Array.isArray(myData?.list) ? myData?.list : [];
  const updatedList = [...currentList, coinSelect];

  async function handleSubmit() {
    const send = await axios.put(`http://localhost:5050/user/${myData?.id}`, {
      list: updatedList,
      balance: myData?.balance - amount,
    });
  }

  const handleSelectChange = (selectedOption) => {
    const selectedCoin = {
      id: selectedOption.value.id,
      symbol: selectedOption.value.symbol,
      image: selectedOption.value.image,
      price: selectedOption.value.current_price,
    };

    let newSelectedCoins = [];

    const isCoinSelected = coinSelect.some(
      (coin) => coin.id === selectedCoin.id
    );

    if (isCoinSelected) {
      newSelectedCoins = coinSelect.filter(
        (coin) => coin.id !== selectedCoin.id
      );
      setCoinSelect(newSelectedCoins);
    } else {
      newSelectedCoins = [...coinSelect, selectedCoin];
      setCoinSelect(newSelectedCoins);
    }

    const selectedCoinData = [];
    newSelectedCoins.forEach((coin) => {
      selectedCoinData.push({
        id: coin.id,
        symbol: coin.symbol,
        image: coin.image,
        price: coin.current_price,
      });
    });
  };
  useEffect(() => {
    setCantBought((amount / coinSelect.current_price).toFixed(4));
  }, [amount, coinSelect]);

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
  function error() {
    Swal.fire({
      icon: "error",
      title: "insufficient balance",
      text: "Try again with a lower balance",
    });
  }
  return (
    <>
      <div className="grid grid-cols-[300px,1fr,300px] grid-rows-[100px,1fr] gap-12 ">
        <Navbar />
        <div className="col-start-1 row-start-2 h-fit w-full rounded-lg bg-[#121418] py-6 max-2xl:h-[450px] max-2xl:py-6">
          <div className="flex h-full w-full flex-col justify-center px-5 text-center text-white">
            <div className="rounded-lg bg-[#0d0d0d] p-8">
              <p className="text-xl  text-white">Current value</p>
              <h1 className="my-2 whitespace-nowrap text-4xl font-bold text-white">
                $ 30,000,20
              </h1>
              <h1 className="mx-auto w-fit whitespace-nowrap rounded-full bg-[#47449f] p-1 text-sm font-bold">
                +3,23% | + $234
              </h1>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="mt-5 flex justify-between">
                <p className="pl-2 text-left text-lg">Assets</p>
                <p className="pr-2 text-right text-lg">See more</p>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-[#0d0d0d] p-3">
                <div className="flex flex-col text-left">
                  <p className="text-lg">Bitcoin</p>
                  <p className="text-sm text-white/50">BTC</p>
                </div>
                <div className="flex flex-col text-right">
                  <p className="text-lg font-semibold">$10.052</p>
                  <p className="text-sm text-white/50">+4.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#0d0d0d] p-3">
                <div className="flex flex-col text-left">
                  <p className="text-lg">Bitcoin</p>
                  <p className="text-sm text-white/50">BTC</p>
                </div>
                <div className="flex flex-col text-right">
                  <p className="text-lg font-semibold">$10.052</p>
                  <p className="text-sm text-white/50">+4.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#0d0d0d] p-3">
                <div className="flex flex-col text-left">
                  <p className="text-lg">Bitcoin</p>
                  <p className="text-sm text-white/50">BTC</p>
                </div>
                <div className="flex flex-col text-right">
                  <p className="text-lg font-semibold">$10.052</p>
                  <p className="text-sm text-white/50">+4.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#0d0d0d] p-3">
                <div className="flex flex-col text-left">
                  <p className="text-lg">Bitcoin</p>
                  <p className="text-sm text-white/50">BTC</p>
                </div>
                <div className="flex flex-col text-right">
                  <p className="text-lg font-semibold">$10.052</p>
                  <p className="text-sm text-white/50">+4.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-start-2 h-fit w-full rounded-lg bg-[#121418] py-6 max-2xl:h-[450px] max-2xl:py-6">
          <div className="m-auto w-[100%] text-left text-sm text-white">
            <div className="grid grid-cols-5 pl-6 text-lg font-semibold text-[#7D7D7D]">
              <div className="text-center max-sm:hidden">Type</div>
              <div className="text-center max-md:pl-4">Coin</div>
              <div className="text-center">Amount</div>
              <div className="text-center max-lg:hidden">Total Value</div>
              <div className="text-center max-lg:hidden">Status</div>
            </div>

            <div className="my-5 border-opacity-30">
              {coins?.slice(0, 7).map((Element) => {
                const numericValue = parseFloat(
                  Element.DISPLAY?.USD.CHANGE24HOUR.substring(1)
                );
                return (
                  <div
                    className="grid grid-cols-5 place-items-center rounded-md py-5 pl-6 hover:bg-white/10"
                    key={Element.CoinInfo.Id}
                  >
                    <div className=" flex items-center gap-2 text-lg max-lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-7 w-7 rounded-full bg-yellow-400 stroke-black p-[5px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        />
                      </svg>

                      <span>Exchange</span>
                    </div>
                    <div className="flex w-full justify-center  gap-2">
                      <img
                        className="h-6 w-6"
                        src={
                          "https://www.cryptocompare.com" +
                          Element.CoinInfo.ImageUrl
                        }
                        alt={Element.CoinInfo.FullName}
                      />
                      <p className="text-xl">
                        {<p className="text-xl">{Element.CoinInfo.Internal}</p>}
                      </p>
                    </div>

                    <div className="text-center text-xl font-bold">
                      0,002342
                    </div>

                    <div className="flex items-center justify-center  max-lg:hidden">
                      <p>$423,40</p>
                    </div>
                    <div className="flex items-center justify-center gap-2  max-lg:hidden">
                      <p className="rounded-lg bg-yellow-400/20 p-2 text-yellow-400 ">
                        In progress
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <section className="col-start-3 row-start-2 flex h-fit justify-center  rounded-lg bg-[#121418] text-white max-2xl:h-[450px] max-2xl:py-6">
          <div className="flex w-full flex-col gap-y-6 p-10">
            <h1 className="text-center text-xl">Traiding spot</h1>
            <div className="relative">
              <Select
                name="coin"
                id="selectCoin"
                options={coins?.map((coin) => ({
                  label: coin.CoinInfo.FullName,
                  value: coin.DISPLAY?.USD.PRICE,
                }))}
                onChange={handleSelectChange}
              />
              <div className="absolute top-2 right-12 flex">
                <AccentIcon />
              </div>
            </div>

            <div className="relative">
              <input
                className="w-full rounded-md bg-[#1b1f24] py-3 pr-16 outline-none"
                type="text"
                dir="rtl"
                maxLength="7"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <span className="absolute left-3 top-4 text-xs">AMOUNT</span>
              <span className="absolute right-4 top-4 text-xs">USDT</span>
            </div>

            <div className="relative">
              <p
                dir="rtl"
                className={` rounded-md border-opacity-50 bg-[#1b1f24] py-3 pr-16 text-sm ${
                  myData?.balance < amount
                    ? "text-[#D9475A] "
                    : "text-[#00A68C]"
                } `}
              >
                <span>{amount}</span>
              </p>

              <span className="absolute left-3 top-4 text-xs">TOTAL</span>
              <span className="absolute right-4 top-4 text-xs uppercase">
                {coinSelect.symbol}
              </span>
            </div>
            <div className="relative">
              <p>{Element.current_price}</p>
            </div>
            <div className=" flex justify-center">
              <button
                className="w-full rounded-md bg-[#46429d] py-3 font-bold uppercase"
                onClick={() => {
                  parseInt(myData?.balance) >= amount
                    ? handleSubmit() + alerta()
                    : error();
                }}
              >
                Buy
              </button>
            </div>
            <p className="text-center">
              Total balance: <span className="">1259 USD</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
export default Wrapper(Exchange);
