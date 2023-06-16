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

    console.log(selectedCoinData);
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
      <div className="grid grid-cols-[300px,1fr,300px] grid-rows-[100px,1fr] gap-12 bg-[#121418]">
        <Navbar />
        <div className="col-start-1 row-start-2 h-[700px] w-full rounded-lg bg-[#121418] py-20 max-2xl:h-[450px] max-2xl:py-6"></div>
        <div className="col-start-2 row-start-2 h-[700px] w-full rounded-lg bg-[#121418] py-20 max-2xl:h-[450px] max-2xl:py-6"></div>
        <section className="col-start-3 row-start-2 flex h-[700px] justify-center rounded-lg  py-20 text-white max-2xl:h-[450px] max-2xl:py-6">
          <div className=" m-auto flex w-full  flex-col gap-y-6 p-5">
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
                className="w-full rounded-md bg-[#00A68C] py-3 font-bold uppercase"
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
