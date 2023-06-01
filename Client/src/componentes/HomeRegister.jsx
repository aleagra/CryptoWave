import React from "react";
import Lottie from "lottie-react";
import buy from "../assets/buy.json";

function HomeRegister() {
  return (
    <section className="  flex h-full min-h-screen flex-col justify-center  p-8 max-sm:p-2">
      <div className="mx-auto flex flex-row-reverse justify-center  max-xl:w-[100%] max-xl:flex-col md:pt-0 ">
        <div className=" z-[1] w-[100%] p-5 outline-none xl:w-[75%] 2xl:w-[90%]">
          <Lottie
            animationData={buy}
            className="m-auto max-sm:w-full md:w-[85%]  lg:w-[55%] xl:w-full"
          />
        </div>
        <div className="  flex flex-col justify-center  px-5 max-xl:m-auto  lg:w-[60%]">
          <p className="text-base text-[#78D9E4] max-sm:text-center">
            300+ assets available
          </p>
          <p className="text-7xl font-bold text-white max-xl:text-center max-md:text-center max-md:text-[3rem]">
            Invest in the world's most popular assets
          </p>
          <p className=" dark:text-text my-12 text-[1rem] font-bold text-white opacity-80 max-xl:my-8 max-lg:text-center   max-md:text-xl xl:text-[1.5rem] xl:text-4xl 2xl:text-2xl">
            From established industries to booming new age up-and-comers — pick
            from over a dozen of different routes to a smart investment.
          </p>
          <a href="/Login" className=" max-xl:m-auto md:w-[60%]">
            <button className="rounded-lg border-2 border-[#78D9E4] p-4 text-white  max-sm:p-[0.5rem] max-sm:text-sm sm:w-full  xl:m-0 ">
              START EARNING
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeRegister;
