import React from "react";
const Wrapper = (Component, style) =>
  function HOC() {
    return (
      <>
        <section
          className={`max-md :min-h-screen flex max-h-screen   flex-col px-[10rem]  max-2xl:px-[5rem] max-md:px-0 ${style} `}
        >
          <Component />
        </section>
      </>
    );
  };

export default Wrapper;
