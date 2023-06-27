import React from "react";
import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import Wrapper from "../wrapper/Wrapper";
import { Balance, Navbar, Traiding, Transactions } from "../componentes";

function Exchange() {
  const { coins } = useContext(CoinContext);

  return (
    <>
      <div className="grid  grid-rows-[100px,1fr] gap-12 max-2xl:mb-20 max-2xl:grid-rows-[75px,1fr,605px] max-2xl:gap-8 max-md:grid-cols-1 max-md:gap-0 max-md:px-0">
        <Navbar />
        <div className="row-start-2 grid grid-cols-[300px,1fr,300px] gap-12 max-2xl:grid-cols-[1fr] max-2xl:gap-4 max-md:flex max-md:flex-col max-md:gap-y-8 max-md:pb-12">
          <div className="max-2xl:pb-10max-md:col-start-1 col-start-1 row-start-2 h-full w-full rounded-lg border border-white/20 py-6  max-md:rounded-none max-md:border-y">
            <Balance />
          </div>
          <div className="col-start-2 row-start-2 h-full w-full rounded-lg border border-white/20 pt-8 max-2xl:col-start-1 max-2xl:hidden max-2xl:py-6 max-md:col-start-1 max-md:rounded-none max-md:border-y max-md:pb-2">
            <Transactions />
          </div>
          <div className="col-start-3 row-start-2 flex h-fit justify-center rounded-lg border  border-white/20 text-white max-2xl:h-full max-2xl:items-center max-2xl:py-6 max-md:col-start-1  max-md:rounded-none max-md:border-y">
            <Traiding />
          </div>
        </div>
        <div className="row-start-3 h-full rounded-lg border border-white/20 py-6 max-md:pt-10 2xl:hidden">
          <Transactions />
        </div>
      </div>
    </>
  );
}
export default Wrapper(Exchange);
