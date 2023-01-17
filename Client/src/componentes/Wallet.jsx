import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
export function Wallet() {
  const [user, setUser] = useState([]);
  const [balance, setBalance] = useState("1000");
  const [usercoins, setUserCoins] = useState([]);
  const [list, setList] = useState([]);
 
useEffect(() => {
  
    async function UserCoinsData() {
      const data = await axios.get(`http://localhost:5050/user/1`);
      setUserCoins(data.data.data);
      setUser(data.data.data[0].list.price_change_percentage_24h)
      setBalance(data.data.data[0].balance)
      setList(data.data.data[0].list)
      
    }
    UserCoinsData(); 
}, []);
console.log(list)
async function handleSubmit() {
  const send = await axios.put(`http://localhost:5050/user/1` ,  {
    list: 1,
    balance:1000,
  });}

  
  const map = () => (
    
     usercoins.map((Element) => {
            return (
              <>
        <div className="flex items-center justify-between p-2 my-10 bg-prueba rounded-lg flex-wrap">
                    <div className=" flex w-[50%] items-center   text-2xl max-lg:gap-4 gap-6 ">
                      <img className=" w-6 ml-5 " src={Element.list.image}></img>
                      <p className="max-lg:text-xl">{Element.list.name}</p>
                   </div>
                     <p className=" text-center text-2xl font-bold max-sm:mr-5">
                      ${Element.list.current_price}
                    </p>
                    <p
                      className={` p-5 text-center text-xl font-bold max-sm:hidden ${
                        Element.list.price_change_percentage_24h > 0
                          ? "text-[#00A68C]"
                          : "text-[#D9475A]"
                      }`}
                    >
                      {Element.list.price_change_percentage_24h}
                    </p>
              <a href="/MyWallet" className="  text-center max-lg:w-[100%] w-[20%] rounded-md bg-[#D9475A]  uppercase">
                    <button className="w-full max-sm:my-5 p-2" onClick={()=> {list != "" ? handleSubmit() :alert("insufficient balance") }} >
                     vender
                    </button>
                    </a>
                    </div> 
                  </>
            );
          }))
          const noMap = () => (
          <div className="flex items-center w-full h-[50vh] justify-center uppercase">
            <p className="p-3  lg:text-4xl text-xl">He has not bought any crypto</p></div>
          )
return (
  <>
      <section className="mt-40 max-h-screen w-full flex flex-col  px-4 text-white  max-md:w-[100%]">
        <div className="rounded-lg bg-prueba  p-4  max-md:p-2">
          <div className="flex justify-between p-5 flex-wrap max-lg:p-0">
            <h4 className="text-3xl opacity-60 max-lg:p-4 max-sm:text-lg max-sm:m-auto">Total balance ( USD )</h4>
            <h4  className={` p-5 text-center  text-xl font-bold max-sm:m-auto max-sm:hidden ${
                            user > 0
                              ? "text-[#00A68C]"
                              : "text-[#D9475A]"
                          }`}>  {user}</h4>
          </div>
          <h2 className="px-5 font-bold text-3xl max-sm:text-center">
            $ <span>{balance}</span>
          </h2>
          <div className="m-6 flex justify-between max-md:flex-col">
       
          </div>
        </div>
        <div>{ list == 1 ? noMap() : map() }</div>
       </section>
    </>
  );
}
