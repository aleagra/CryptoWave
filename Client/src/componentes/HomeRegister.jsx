import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../assets/buy.json";
import Wrapper from "../wrapper/Wrapper";

function HomeRegister() {
  const animationContainer2 = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer2.current,
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
    <section className="flex h-full min-h-screen flex-col justify-center">
      <div className="mx-auto flex flex-row-reverse  justify-center max-xl:w-[100%] max-lg:flex-col md:pt-0">
        <div
          className="mx-auto w-[50%] max-lg:my-10 max-md:w-[80%] xl:w-[70%]"
          ref={animationContainer2}
        ></div>
        <div className="flex flex-col justify-center gap-y-10 max-xl:m-auto  max-md:gap-y-6 lg:w-[50%]">
          <p className="text-[5rem] font-bold leading-[5rem] text-white max-2xl:text-[3.5rem] max-2xl:leading-[4rem] max-lg:text-center max-md:px-4 max-md:text-[2.5rem] max-md:leading-[3rem]">
            Invest in the world's most popular assets
          </p>
          <p className="text-[1.5rem] font-bold text-secondary max-2xl:text-[1.2rem] max-lg:text-center max-md:px-10 max-md:text-lg xl:pr-20">
            From established industries to booming new age up-and-comers — pick
            from over a dozen of different routes to a smart investment.
          </p>
          <a
            href="/Login"
            className="w-[20rem] max-2xl:w-[15rem] max-2xl:py-3 max-lg:mx-auto max-md:w-[10rem]"
          >
            <button className="w-full rounded-lg bg-main py-4 px-2 text-xl text-white">
              Start earning
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(HomeRegister);
