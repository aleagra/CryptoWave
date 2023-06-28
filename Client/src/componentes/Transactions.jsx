import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

function Transactions() {
  const { coins } = useContext(CoinContext);

  const transactions = [
    {
      name: "BTC",
      img: "https://www.cryptocompare.com/media/37746251/btc.png",
      amount: "0.31",
      value: "$9.418,724",
      status: "Complete",
      style: "bg-green-400/20 text-green-400",
    },
    {
      name: "ETH",
      img: "https://www.cryptocompare.com/media/37746238/eth.png",
      amount: "2.75",
      value: "$5.118,75",
      status: "Complete",
      style: "bg-green-400/20 text-green-400",
    },
    {
      name: "USDT",
      img: "https://www.cryptocompare.com/media/37746338/usdt.png",
      amount: "540",
      value: "$540",
      status: "In progress",
      style: "bg-yellow-400/20 text-yellow-400",
    },
    {
      name: "BCH",
      img: "https://www.cryptocompare.com/media/37746245/bch.png",
      amount: "0,8674",
      value: "$200",
      status: "Failed",
      style: "bg-red-400/20 text-red-400",
    },
    {
      name: "USDC",
      img: "https://www.cryptocompare.com/media/34835941/usdc.png",
      amount: "400",
      value: "$400",
      status: "Complete",
      style: "bg-green-400/20 text-green-400",
    },
    {
      name: "XRP",
      img: "https://www.cryptocompare.com/media/38553096/xrp.png",
      amount: "634.5",
      value: "$300",
      status: "In progress",
      style: "bg-yellow-400/20 text-yellow-400",
    },
    {
      name: "TUSD",
      img: "https://www.cryptocompare.com/media/38554125/tusd.png",
      amount: "395",
      value: "$395",
      status: "Failded",
      style: "bg-red-400/20 text-red-400",
    },
  ];

  return (
    <div className="max-2xl: m-auto w-[100%] text-left text-sm text-white ">
      <div className="grid grid-cols-5 pl-6 text-lg font-semibold text-secondary max-md:grid-cols-4 max-md:pl-0">
        <div className="text-center">Type</div>
        <div className="text-center max-md:pl-4">Coin</div>
        <div className="text-center">Amount</div>
        <div className="text-center max-md:hidden">Total Value</div>
        <div className="text-center">Status</div>
      </div>

      <div className="my-5 border-opacity-30 max-md:my-2">
        {transactions.map((element) => {
          return (
            <div
              className="grid grid-cols-5 place-items-center rounded-md py-5 pl-6 hover:bg-white/10 max-md:grid-cols-4 max-md:pl-0"
              key={element.name}
            >
              <div className=" flex items-center gap-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7 rounded-full bg-yellow-400 stroke-black p-[5px] max-md:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>

                <span className="text-lg max-md:text-sm">Exchange</span>
              </div>
              <div className="flex w-full items-center justify-center gap-2">
                <img className="h-6 w-6" src={element.img} alt={element.name} />

                <span className="text-lg max-md:text-sm">{element.name}</span>
              </div>

              <div className="text-center text-lg font-bold max-md:text-sm">
                <p> {element.amount}</p>
              </div>

              <div className="flex items-center justify-center text-lg max-md:hidden">
                <p>{element.value}</p>
              </div>
              <div className="flex items-center justify-center gap-2 max-md:text-xs">
                <p className={`${element.style} rounded-lg p-2`}>
                  {element.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transactions;
