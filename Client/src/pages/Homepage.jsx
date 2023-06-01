import React from "react";
import { CoinList, Home, HomeRegister, Navbar } from "../componentes";
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
