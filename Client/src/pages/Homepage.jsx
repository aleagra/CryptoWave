import {
  CoinList,
  Home,
  HomeRegister,
  Navbar,
  Contact,
  Footer,
} from "../componentes";
export function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <CoinList />
      <HomeRegister />
      <Contact />
      <Footer />
    </>
  );
}
