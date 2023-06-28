import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/wallet.json";
import Wrapper from "../wrapper/Wrapper";
function Home() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      animationData,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <section className="flex min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-full flex-row-reverse justify-center max-lg:flex-col max-md:row-auto max-md:m-0">
        <div
          className="mx-auto my-10 max-2xl:w-[80%] max-md:w-full max-md:pr-6"
          ref={animationContainer}
        ></div>
        <div className="flex w-[50%] flex-col justify-center gap-y-10 max-2xl:gap-3 max-lg:w-full max-lg:items-center max-lg:justify-center">
          <div className="flex flex-col text-[4rem] font-bold leading-[5rem] text-white max-2xl:text-[3.5rem] max-2xl:leading-[4rem] max-lg:text-center max-md:px-4 max-md:text-2xl max-md:text-[2.5rem] max-md:leading-[3rem]">
            <p>
              Join the <span className="text-main">best cryptocurrency </span>
              exchange
            </p>
          </div>
          <p className="text-[1.5rem] font-bold text-secondary max-2xl:pr-6 max-2xl:text-[1.2rem] max-lg:text-center max-md:px-10 max-md:text-lg">
            buy and sell 100+ cryptocoins using bank transfers or your
            credit/debit card.
          </p>
          <a
            href="/Login"
            className="w-[20rem] max-2xl:w-[15rem] max-2xl:py-3 max-md:w-[10rem]"
          >
            <button className="w-full rounded-lg bg-main py-4 px-2 text-xl text-white">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(Home);
