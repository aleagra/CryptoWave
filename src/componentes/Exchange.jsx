import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";

export function Exchange() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [coinSelect, setCoinSelect] = useState([{}]);
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState([]);
  const [amount, setAmount] = useState("");
  const [cantBought, setCantBought] = useState();
  const [newBalance, setNewBalance] = useState(user.balance);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);

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

  async function handleSubmit() {
    setNewBalance(user.balance - amount);
    const send = await axios.put(`http://localhost:5050/user/${user.id}`, {
      list: coinSelect,
      balance: newBalance,
    });
  }
  useEffect(() => {
    setCantBought((amount / coinSelect.current_price).toFixed(4));
  }, [amount, coinSelect]);

  return (
    <>
      <section className="z-0  w-[50%] rounded-lg text-white  max-lg:w-[100%]">
        <div className="p-28 max-md:p-1">
          <div className="flex justify-between p-5">
            <h4 className="text-xl">Exchange</h4>
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
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </div>
          <div className="flex justify-between p-5">
            <h1 className="font-bold">
              1 <span className="font-light opacity-40">BTC</span>
            </h1>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            <h1 className="font-bold">
              <span className="font-light opacity-40">USD</span>
            </h1>
          </div>
          <div className="w-full justify-center p-5 ">
            <label className="opacity-40" htmlFor="">
              Get
            </label>
            <div className="relative">
              {/* <input
                className="mb-10 mt-1 w-full  rounded-full border-2 border-borderInput bg-input p-3 pl-6 pr-24 outline-none "
                type="text"
              /> */}
              <label
                for="countries"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <Select
                className="bg-navbar"
                name="coin"
                id="selectCoin"
                options={coins.map((coin) => ({
                  label: coin.name,
                  value: coin,
                }))}
                onChange={handleSelectChange}
              />
              <div className="absolute right-0 top-5 m-4 flex">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <label className="opacity-40" htmlFor="">
              Pay
            </label>
            <input
              className="mb-10 mt-1 w-full  rounded-lg border-2 border-borderInput bg-input p-2.5 pl-6 pr-24 outline-none "
              type="text"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <div className="relative">
              <p>{Element.current_price}</p>
              <div className="absolute top-0 right-0 m-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <p>
              total <span>{cantBought}</span>
            </p>
            <p>
              saldo disponible: <span>{user.balance}</span>
            </p>

            <button
              className="w-full rounded-full bg-btn p-3"
              onClick={handleSubmit}
            >
              Buy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
