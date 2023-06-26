import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext";
import { Exchange, Homepage, Login, Market, Register, Search } from "./pages";

function App() {
  return (
    <>
      <CoinContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Exchange" element={<Exchange />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Search/:buscar" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </CoinContextProvider>
    </>
  );
}

export default App;
