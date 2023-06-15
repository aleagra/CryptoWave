import React from "react";
const Wrapper = (Component, style) =>
  function HOC() {
    return (
      <>
        <section className={`flex max-h-screen flex-col  px-[10rem] ${style} `}>
          <Component />
        </section>
      </>
    );
  };

export default Wrapper;
