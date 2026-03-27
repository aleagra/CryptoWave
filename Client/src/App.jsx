import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext";
import { Exchange, Homepage, Login, Market, Register, Search } from "./pages";
import Trade from "./pages/Trade";
import ScrollToTop from "./componentes/ScrollToTop";

function App() {
  return (
    <>
      <CoinContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/market" element={<Market />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search/:buscar" element={<Search />} />
            <Route path="/trade/:symbol" element={<Trade />} />
          </Routes>
        </BrowserRouter>
      </CoinContextProvider>
    </>
  );
}

export default App;
