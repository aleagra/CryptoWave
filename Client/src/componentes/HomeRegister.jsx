import React from "react";
import Lottie from "lottie-react";
import buy from "../assets/buy.json";
import Wrapper from "../wrapper/Wrapper";

function HomeRegister() {
  return (
    <section className="  flex h-full min-h-screen flex-col justify-center ">
      <div className="mx-auto flex flex-row-reverse justify-center  max-xl:w-[100%] max-xl:flex-col md:pt-0 ">
        <div className=" z-[1] w-[100%] outline-none xl:w-[75%] 2xl:w-[90%]">
          <Lottie
            animationData={buy}
            className="m-auto max-xl:w-full max-sm:w-full md:w-[85%]"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-10  max-xl:m-auto lg:w-[50%]">
          <p className="text-[5rem] font-bold leading-[5rem] text-[#fcfdfe]">
            Invest in the world's most popular assets
          </p>
          <p className="text-[1.5rem] font-bold text-white/50">
            From established industries to booming new age up-and-comers — pick
            from over a dozen of different routes to a smart investment.
          </p>
          <a href="/Login" className=" max-xl:m-auto md:w-[60%]">
            <button className=" w-full rounded-lg bg-[#4444a0] py-4 px-2 text-xl text-white">
              Start earning
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(HomeRegister);
