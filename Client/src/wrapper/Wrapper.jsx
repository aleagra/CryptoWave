import React from "react";
const Wrapper = (Component, style) =>
  function HOC() {
    return (
      <>
        <section className={`flex flex-col ${style} `}>
          <Component />
        </section>
      </>
    );
  };

export default Wrapper;
