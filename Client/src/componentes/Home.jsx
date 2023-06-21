import React from "react";
import Lottie from "lottie-react";
import wallet from "../assets/wallet.json";
import Wrapper from "../wrapper/Wrapper";
function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-full flex-row-reverse justify-center max-lg:flex-col max-md:row-auto max-md:m-0">
        <div className="mx-auto my-10 max-2xl:w-[80%] max-md:w-full max-md:pr-6">
          <Lottie animationData={wallet} className="w-[100%]" />
        </div>
        <div className="flex w-[50%] flex-col justify-center gap-y-10 max-2xl:gap-3 max-lg:w-full max-lg:items-center max-lg:justify-center">
          <div className="flex flex-col text-[4rem] font-bold leading-[5rem] text-[#fcfdfe] max-2xl:text-[3.5rem] max-2xl:leading-[4rem] max-lg:text-center max-md:px-4 max-md:text-2xl max-md:text-[2.5rem] max-md:leading-[3rem]">
            <p>
              Join the{" "}
              <span className="text-[#45419d]">best cryptocurrency </span>
              exchange
            </p>
          </div>
          <p className="text-[1.5rem] font-bold text-white/50 max-2xl:pr-6 max-2xl:text-[1.2rem] max-lg:text-center max-md:px-10 max-md:text-lg">
            buy and sell 100+ cryptocoins using bank transfers or your
            credit/debit card. Lorem ipsum dolor sit amet consectetur,
          </p>
          <a
            href="/Login"
            className="w-[20rem] max-2xl:w-[15rem] max-2xl:py-3 max-md:w-[10rem]"
          >
            <button className="w-full rounded-lg bg-[#45419d] py-4 px-2 text-xl text-white">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(Home);
