import React from "react";
import Lottie from "lottie-react";
import wallet from "../assets/wallet.json";
function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-full flex-row-reverse justify-center max-xl:flex-col">
        <div>
          <Lottie animationData={wallet} className="max-sm:w-full sm:w-full" />
        </div>
        <div className="flex flex-col justify-center px-12 max-lg:w-[90%]  max-md:m-auto lg:mb-12 xl:m-0 2xl:w-[45%]">
          <p className="text-sm font-bold text-[#78D9E4] max-md:text-center">
            SIGN UP TODAY
          </p>
          <div className="flex flex-col gap-y-5 text-[3rem] font-bold uppercase text-white max-xl:text-2xl max-md:text-center">
            <span className="text">The words</span>
            <span className="text whitespace-nowrap"> Fastest growing</span>
            <span className="text">Crypto web app</span>
          </div>
          <p className=" dark:text-text my-12 text-[1rem] font-bold text-white/30 max-xl:my-8 max-lg:text-center max-md:text-xl xl:text-[2.5rem] xl:text-2xl 2xl:text-2xl">
            buy and sell 100+ cryptocoins using bank transfers or your
            credit/debit card.
          </p>
          <div className="flex flex-row gap-14 max-md:justify-evenly max-md:gap-4 max-sm:gap-0">
            <a href="/Login" className="md:w-[60%]">
              <button className=" rounded-lg  bg-[#78D9E4] p-4  text-white max-sm:p-[0.5rem] max-sm:text-sm sm:w-full md:m-auto  xl:m-0 ">
                Get Started
              </button>
            </a>
            <a href="/Market" className="md:w-[60%] ">
              <button className=" rounded-lg  bg-[#AC85F0] p-4  text-white max-sm:p-[0.5rem] max-sm:text-sm sm:w-full md:m-auto xl:m-0 ">
                More information
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
