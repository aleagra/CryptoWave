import React from "react";

function Balance() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-5 text-center text-white">
      <div className="rounded-lg bg-background px-8 pb-8 max-2xl:pb-2">
        <p className="text-xl  text-secondary">Current value</p>
        <h1 className="my-2 whitespace-nowrap text-4xl font-bold text-white">
          $ 30,000,20
        </h1>
        <h1 className="mx-auto w-fit whitespace-nowrap rounded-full bg-main p-1 text-sm font-bold">
          +3,23% | + $234
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

        <div className="flex items-center justify-between rounded-lg border border-white/20 p-3">
          <div className="flex flex-col text-left">
            <p className="text-lg">Bitcoin</p>
            <p className="text-sm text-secondary">BTC</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-lg font-semibold">$10.052</p>
            <p className="text-sm text-secondary">+4.5%</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/20 p-3">
          <div className="flex flex-col text-left">
            <p className="text-lg">Bitcoin</p>
            <p className="text-sm text-secondary">BTC</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-lg font-semibold">$10.052</p>
            <p className="text-sm text-secondary">+4.5%</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/20 p-3">
          <div className="flex flex-col text-left">
            <p className="text-lg">Bitcoin</p>
            <p className="text-sm text-secondary">BTC</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-lg font-semibold">$10.052</p>
            <p className="text-sm text-secondary">+4.5%</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/20 p-3 max-2xl:hidden">
          <div className="flex flex-col text-left">
            <p className="text-lg">Bitcoin</p>
            <p className="text-sm text-secondary">BTC</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-lg font-semibold">$10.052</p>
            <p className="text-sm text-secondary">+4.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
