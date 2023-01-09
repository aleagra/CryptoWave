import "./App.css";
import { Market } from "./componentes/Market";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wallet } from "./componentes/Wallet";
import { Exchange } from "./componentes/Exchange";
import { Register } from "./componentes/register";
import { Login } from "./componentes/Login";
import { Homepage } from "./componentes/Homepage";
import Search from "./componentes/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Navbar />, <Homepage />]} />
          <Route path="/Market" element={[<Navbar />, <Market />]} />
          <Route path="/MyWallet" element={[<Navbar />, <Wallet />]} />
          <Route path="/Exchange" element={[<Navbar />, <Exchange />]} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search/:buscar" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
