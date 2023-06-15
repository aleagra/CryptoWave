import React from "react";
import Lottie from "lottie-react";
import wallet from "../assets/wallet.json";
import Wrapper from "../wrapper/Wrapper";
function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-full flex-row-reverse justify-center max-xl:flex-col ">
        <div>
          <Lottie animationData={wallet} className="w-[100%]" />
        </div>
        <div className="flex w-[50%] flex-col justify-center gap-y-10 max-2xl:gap-3">
          <div className="flex flex-col text-[4rem] font-bold leading-[5rem] text-[#fcfdfe]">
            <p>
              Join the{" "}
              <span className="text-[#45419d]">best cryptocurrency </span>
              exchange
            </p>
          </div>
          <p className="text-[1.5rem] font-bold text-white/50">
            buy and sell 100+ cryptocoins using bank transfers or your
            credit/debit card. Lorem ipsum dolor sit amet consectetur,
          </p>
          <a href="/Login" className="w-[20rem]">
            <button className=" w-full rounded-lg bg-[#45419d] py-4 px-2 text-xl text-white">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(Home);
