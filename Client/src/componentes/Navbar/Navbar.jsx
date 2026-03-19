import { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BarsIcon, CloseIcon, ProfileIcon, SearchIcon } from "../../utilities/icons";
import { CoinContext } from "../../context/CoinContext";
import { useSearchCoins } from "../../hooks/useSearchCoins";
import { SearchDropdown } from "./SearchDropdown";

function Navbar() {
  const { coins } = useContext(CoinContext);
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buscar, setBuscar] = useState("");

  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  
  const allResultados = useSearchCoins(coins, buscar);
  const resultados = buscar.length > 0 ? allResultados.slice(0, 3) : [];

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(buscar === "" ? "/Market" : `/Search/${buscar}`);
      setBuscar("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideDesktop = searchRef.current && searchRef.current.contains(event.target);
      const isInsideMobile = mobileSearchRef.current && mobileSearchRef.current.contains(event.target);
      
      if (!isInsideDesktop && !isInsideMobile) {
        setBuscar("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f2227]/70 bg-[#020204]/80 py-2 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#22C55E]/50 bg-[#22C55E]/10">
            <span className="text-sm font-bold text-[#22C55E]">$</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#f8f8f8]">
            CryptoWave
          </span>
        </NavLink>
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/exchange"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#7d8086] hover:bg-[#14161a] hover:text-white"
          >
            Exchange
          </NavLink>
          <NavLink
            to="/market"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#7d8086] hover:bg-[#14161a] hover:text-white"
          >
            Market
          </NavLink>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <div
            className="relative max-w-xs flex-1 md:max-w-sm lg:max-w-md"
            ref={searchRef}
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7d8086]">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Buscar criptomonedas..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              onKeyDown={handleKeyPress}
              className="h-9 w-full rounded-md bg-[#14161a]/60 pl-9 pr-3 text-sm text-white outline-none placeholder:text-[#7d8086] focus:bg-[#14161a]"
            />
            <SearchDropdown query={buscar} totalResultados={allResultados.length} resultados={resultados} onSelect={() => setBuscar("")} />
          </div>

          <NavLink
            to="/login"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#7d8086] transition-all duration-200 hover:bg-[#14161a] hover:text-white"
          >
            <ProfileIcon />
          </NavLink>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-[#7d8086] md:hidden"
        >
          {mobileMenuOpen ? <CloseIcon /> : <BarsIcon />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-[#1f2227] bg-[#020204] px-4 pb-4 pt-2 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/exchange"
              className="rounded-md px-3 py-2 text-sm text-[#7d8086] hover:bg-[#14161a] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Exchange
            </NavLink>
            <NavLink
              to="/market"
              className="rounded-md px-3 py-2 text-sm text-[#7d8086] hover:bg-[#14161a] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Market
            </NavLink>
            <NavLink
              to="/login"
              className="rounded-md px-3 py-2 text-sm text-[#7d8086] hover:bg-[#14161a] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </NavLink>
            <div className="mt-2 flex items-center gap-2">
              <div className="relative flex-1" ref={mobileSearchRef}>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7d8086]">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={buscar}
                  onChange={(e) => setBuscar(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full rounded-md bg-[#14161a]/60 py-2 pl-9 pr-3 text-sm text-white outline-none placeholder:text-[#7d8086] focus:bg-[#14161a]"
                />
                <SearchDropdown 
                  query={buscar}
                  totalResultados={allResultados.length}
                  resultados={resultados} 
                  onSelect={() => {
                    setBuscar("");
                    setMobileMenuOpen(false);
                  }} 
                />
              </div>

              <NavLink
                to="/login"
                className="flex h-9 w-9 items-center justify-center rounded-md text-[#7d8086] transition-all duration-200 hover:bg-[#14161a] hover:text-white"
              >
                <ProfileIcon />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

