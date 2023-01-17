import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

export function Exchange() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [coinSelect, setCoinSelect] = useState([{}]);
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState([]);
  const [amount, setAmount] = useState("");
  const [cantBought, setCantBought] = useState();
  const [balance, setBalance] = useState("");
  const [list, setList] = useState("");
  const [usd, setNewbalance] = useState("1000");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setBalance(user.data.user.balance);
      setUser(user);
      localStorage.setItem("test", user.data.user.balance);
    }
  }, []);
  

  async function handleSubmit() {
    console.log(coinSelect);
    const send = await axios.put(`http://localhost:5050/user/1`, {
      list: coinSelect,
      balance: usd - amount,
    });
    const newbalance = await axios.get(`http://localhost:5050/user/1`);
    setNewbalance(newbalance.data.data[0].balance);
    setList(newbalance.data.data[0].list);
    window.localStorage.removeItem("test");
    localStorage.setItem("test", newbalance.data.data[0].balance);
  }

  useEffect(() => {
    async function Coins() {
      const coins = await axios.get(url);
      setCoins(coins.data);
    }
    Coins();
  }, []);

  const handleSelectChange = (event) => {
    setCoinSelect(event.value);
  };

  useEffect(() => {
    setCantBought((amount / coinSelect.current_price).toFixed(4));
  }, [amount, coinSelect]);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  function alerta() {
    Toast.fire({
      icon: 'success',
      title: 'The purchase was successful'
    })
    
  }
function error(){
  Swal.fire({
    icon: 'error',
    title: 'insufficient balance',
    text: 'Try again with a lower balance',
    
  })  }
  return (
    <>
      <section className="m-auto justify-center rounded-lg  bg-[#1E2026] text-white max-xl:w-[80%] max-md:w-[100%] max-md:p-0 max-sm:p-0  xl:w-[60%]">
        <div className=" max-md:p-1">
          <div className="m-auto flex h-[99vh] w-full flex-col justify-center gap-y-10 p-5 ">
            <h1 className="text-center text-2xl uppercase">Traiding spot</h1>
            <div className="relative">
              <label
                for="countries"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <Select
                className="bg-[#2A2D35]"
                name="coin"
                id="selectCoin"
                options={coins.map((coin) => ({
                  label: coin.name,
                  value: coin,
                }))}
                onChange={handleSelectChange}
              />
              <div className="absolute top-4 right-12 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                className=" mt-1 w-full  rounded-lg border-2 border-white border-opacity-50 bg-[#2A2D35] p-1.5 pr-16  outline-none "
                type="text"
                dir="rtl"
                maxlength="7"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <span className="text-dm absolute left-3 top-3">AMOUNT</span>
              <span className="text-dm absolute right-4 top-3">USDT</span>
            </div>

            <div className="relative">
              <p
                dir="rtl"
                className={` rounded-lg border-2 border-white   border-opacity-50 bg-[#2A2D35] p-2 pr-16 text-sm ${
                  balance < amount ? "text-[#D9475A] " : "text-[#00A68C]"
                } `}
              >
                <span>{cantBought}</span>
              </p>

              <span className="text-dm absolute left-3 top-2 ">TOTAL</span>
              <span className="text-dm absolute right-4 top-2 uppercase">
                {coinSelect.symbol}
              </span>
            </div>
            <div className="relative">
              <p>{Element.current_price}</p>
            </div>
            <div className=" flex justify-center">
              <button
                className="w-2/4  rounded-full border-2 border-white  border-opacity-50 bg-[#00A68C] p-3 font-bold  uppercase "
                onClick={() => {
                  parseInt(usd) >= amount
                    ? handleSubmit() + alerta()
                    : error()
                }}
              >
                Buy
              </button>
            </div>
            <p className="pr-2 text-right uppercase ">
              Total balance: <span>{usd}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
