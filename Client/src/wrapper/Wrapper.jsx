import React from "react";
const Wrapper = (Component, style) =>
  function HOC() {
    return (
      <>
        <section
          className={`flex min-h-screen flex-col  px-[10rem] max-2xl:px-[5rem] ${style} `}
        >
          <Component />
        </section>
      </>
    );
  };

export default Wrapper;
