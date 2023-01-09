import React from "react";
import { useEffect, useState } from "react";

export function Wallet() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);
  return (
    <>
      <section className="mt-40 max-h-screen w-[50%] px-4 text-white  max-md:w-[100%]">
        <div className="rounded-lg bg-prueba  p-4 max-md:m-auto max-md:p-2">
          <div className="flex justify-between p-5">
            <h4>Balance</h4>
            <h4 className="text-verde"> + 2.5%</h4>
          </div>
          <h2 className="px-5 text-3xl">
            {" "}
            $ <span></span>
          </h2>
          <div className="m-6 flex justify-between max-md:flex-col">
            <h2>$ 10.000 IN WALLET</h2>
            <h2 className="text-verde">$ 2.000 IN COINS</h2>
          </div>
        </div>
      </section>
    </>
  );
}
