import React from "react";
import Navbar from "../componentes/Navbar";

// import { useContext, useState } from "react";
// import { DataContext } from "../context/DataContext";
// import { CoinContext } from "../context/CoinContext";

export function Wallet() {
  // const { myData } = useContext(DataContext);
  // const { coins, setCoins } = useContext(CoinContext);
  // const [user, setUser] = useState([]);
  // const [balance, setBalance] = useState("1000");
  // const [usercoins, setUserCoins] = useState([]);
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   async function UserCoinsData() {
  //     const data = await axios.get(`http://localhost:5050/user/1`);
  //     setUserCoins(data.data.data);
  //     setUser(data.data.data[0].list.price_change_percentage_24h);
  //     setBalance(data.data.data[0].balance);
  //     setList(data.data.data[0].list);
  //   }
  //   UserCoinsData();
  // }, []);

  // async function handleSubmit() {
  //   const send = await axios.put(`http://localhost:5050/user/1`, {
  //     list: 1,
  //     balance: 1000,
  //   });
  // }
  // console.log(myData?.list);
  // const map = () =>
  //   usercoins.map((Element) => {
  //     return (
  //       <>
  //         <div className="my-10 flex flex-wrap items-center justify-between rounded-lg bg-prueba p-2">
  //           <div className=" flex w-[50%] items-center   gap-6 text-2xl max-lg:gap-4 ">
  //             <img className=" ml-5 w-6 " src={Element.list.image}></img>
  //             <p className="max-lg:text-xl">{Element.list.name}</p>
  //           </div>
  //           <p className=" text-center text-2xl font-bold max-sm:mr-5">
  //             ${Element.list.current_price}
  //           </p>
  //           <p
  //             className={` p-5 text-center text-xl font-bold max-sm:hidden ${
  //               Element.list.price_change_percentage_24h > 0
  //                 ? "text-[#00A68C]"
  //                 : "text-[#D9475A]"
  //             }`}
  //           >
  //             {Element.list.price_change_percentage_24h}
  //           </p>
  //           <a
  //             href="/MyWallet"
  //             className="  w-[20%] rounded-md bg-[#D9475A] text-center uppercase  max-lg:w-[100%]"
  //           >
  //             <button
  //               className="w-full p-2 max-sm:my-5"
  //               onClick={() => {
  //                 list != "" ? handleSubmit() : alert("insufficient balance");
  //               }}
  //             >
  //               vender
  //             </button>
  //           </a>
  //         </div>
  //       </>
  //     );
  //   });
  // const noMap = () => (
  //   <div className="flex h-[50vh] w-full items-center justify-center uppercase">
  //     <p className="p-3  text-xl lg:text-4xl">He has not bought any crypto</p>
  //   </div>
  // );
  return (
    <>
      <Navbar />
      <section className="flex flex-col text-white">
        <div className="bg-prueba px-6 pt-36">
          <div className="flex flex-wrap justify-between max-lg:p-0">
            <h4 className="text-3xl max-sm:m-auto max-sm:text-lg">
              Total balance ( USD )
            </h4>
            {/* <h4
              className={` p-5 text-center  text-xl font-bold max-sm:m-auto max-sm:hidden ${
                user > 0 ? "text-[#00A68C]" : "text-[#D9475A]"
              }`}
            >
              {" "}
              {user}
            </h4> */}
          </div>
          <h2 className=" text-3xl font-bold opacity-60 max-sm:text-center">
            $1000
          </h2>
          <div className="m-6 flex justify-between max-md:flex-col"></div>
        </div>
        {/* <div>{list == 1 ? noMap() : map()}</div> */}
      </section>
    </>
  );
}
