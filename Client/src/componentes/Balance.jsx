import React from "react";

function Balance() {
  const balance = [
    {
      coin: "Bitcoin",
      symbol: "BTC",
      total: "$10.052",
      profit: "+6.3%",
    },
    {
      coin: "Ethereum",
      symbol: "ETH",
      total: "$5.250",
      profit: "+2.5%",
    },
    {
      coin: "Solana",
      symbol: "SOL",
      total: "$2.523",
      profit: "-1.5%",
    },
    {
      coin: "Cardano",
      symbol: "ADA",
      total: "$15.645",
      profit: "+20.34%",
      hidden: "max-2xl:hidden",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col justify-center px-5 text-center text-white">
      <div className="rounded-lg bg-background px-8 pb-8 max-2xl:pb-2">
        <p className="text-xl  text-secondary">Current value</p>
        <h1 className="my-2 whitespace-nowrap text-4xl font-bold text-white">
          $ 30,000,20
        </h1>
        <h1 className="mx-auto w-fit whitespace-nowrap rounded-full bg-main p-1 px-2 text-sm font-bold">
          +27.4 % | + $653.43
        </h1>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="mt-5 flex justify-between">
          <p className="pl-2 text-left text-lg">Assets</p>
          <a
            href="/Login"
            className="cursor-pointer pr-2 text-right text-lg text-main"
          >
            See all
          </a>
        </div>
        {balance.map((item) => (
          <div
            className={` flex items-center justify-between rounded-lg border border-white/20 p-3 ${item.hidden} `}
            key={item}
          >
            <div className="flex flex-col text-left">
              <p className="text-lg">{item.coin}</p>
              <p className="text-sm text-secondary">{item.symbol}</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-lg font-semibold">{item.total}</p>
              <p className="text-sm text-secondary">{item.profit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Balance;
