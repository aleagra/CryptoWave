import React from "react";
import { CoinList, Home, HomeRegister } from "../componentes";
import Navbar from "../componentes/Navbar";
export function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <CoinList />
      <HomeRegister />
    </>
  );
}
