import "./App.css";
import { Market } from "./pages/Market";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wallet } from "./pages/Wallet";
import { Exchange } from "./componentes/Exchange";
import { Login } from "./componentes/Login";
import { Homepage } from "./pages/Homepage";
import Search from "./componentes/Search";
import DataContextProvider from "./context/DataContext";
import CoinContextProvider from "./context/CoinContext";
import { Register } from "./componentes";

function App() {
  return (
    <>
      <CoinContextProvider>
        <DataContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Market" element={<Market />} />
              <Route path="/MyWallet" element={<Wallet />} />
              <Route path="/Exchange" element={[<Navbar />, <Exchange />]} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Search/:buscar" element={<Search />} />
            </Routes>
          </BrowserRouter>
        </DataContextProvider>
      </CoinContextProvider>
    </>
  );
}

export default App;
