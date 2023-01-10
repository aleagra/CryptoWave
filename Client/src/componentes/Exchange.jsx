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
  const [balance, setBalance] = useState("");
  const [list, setList] = useState("");
  const [usd, setNewbalance] = useState("1000");
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setBalance(user.data.user.balance)
      setUser(user);
      localStorage.setItem('test', user.data.user.balance );  
    }  
  }, []);

  async function handleSubmit() {
    console.log(coinSelect)
    const send = await axios.put(`http://localhost:5050/user/1` ,  {
      list:coinSelect,
      balance:usd - amount,      
    });
    const newbalance = await axios.get(`http://localhost:5050/user/1`
    )
    setNewbalance(newbalance.data.data[0].balance)
    setList(newbalance.data.data[0].list)
    window.localStorage.removeItem('test');
    localStorage.setItem('test', newbalance.data.data[0].balance);
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
  }
  
  useEffect(() => {
    setCantBought((amount / coinSelect.current_price).toFixed(4));
  }, [amount, coinSelect]);
  
  return (
    <>
      <section className="max-md:p-0 max-sm:p-0 bg-[#1E2026]  justify-center m-auto xl:w-[60%] rounded-lg text-white max-xl:w-[80%]  max-md:w-[100%]">
        <div className=" max-md:p-1"> 
          <div className="w-full justify-center p-5 flex flex-col h-[99vh] m-auto gap-y-10 ">
          <h1 className="uppercase text-2xl text-center">Traiding spot</h1>
            <div className="relative">
              <label
                for="countries"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              </label>
              <Select 
                className="bg-[#2A2D35]"
                name="coin"
                id="selectCoin"
                
                options={coins.map((coin) => ({
                  label: coin.name,
                  value: coin ,
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
              className=" mt-1 w-full  rounded-lg border-2 border-opacity-50 border-white bg-[#2A2D35] p-1.5 pr-16  outline-none "
              type="text"  
              dir="rtl"
              maxlength="7"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
           
            />
            <span className="absolute left-3 top-3 text-dm">AMOUNT</span>
            <span className="absolute right-4 top-3 text-dm">USDT</span>
            </div>
         
          <div className="relative">
           <p dir="rtl" className={ ` pr-16 text-sm p-2   bg-[#2A2D35] border-2 border-white border-opacity-50 rounded-lg ${ balance < amount ? "text-[#D9475A] " : "text-[#00A68C]"} `}>
               <span>{cantBought }</span></p>
          
            <span className="absolute left-3 top-2 text-dm ">TOTAL</span>
            <span className="absolute right-4 top-2 text-dm uppercase">{coinSelect.symbol}</span>
            </div>
            <div className="relative">
              <p>{Element.current_price}</p>
            
            </div>
          <div className=" flex justify-center">
            <button
              className="w-2/4  rounded-full border-2 bg-[#00A68C]  border-white border-opacity-50 font-bold uppercase  p-3"
              onClick={()=> {parseInt(usd) >= amount ? handleSubmit() :alert("insufficient balance") }}
            >
              Buy
            </button>
          </div>
            <p className="uppercase pr-2 text-right " > 
              Total balance: <span>{usd}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
