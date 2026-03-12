import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarsIcon,
  CloseIcon,
  ProfileIcon,
  SearchIcon,
} from "../utilities/icons";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buscar, setBuscar] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.location.href = buscar === "" ? "/Market" : "/Search/" + buscar;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f2227]/40 bg-[#020204] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#22C55E]/50 bg-[#22C55E]/10">
            <span className="text-sm font-bold text-[#22C55E]">$</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#f8f8f8]">
            CryptoWave
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/Exchange"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
          >
            Exchange
          </NavLink>

          <NavLink
            to="/Market"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
          >
            Market
          </NavLink>

          <NavLink
            to="/Features"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
          >
            Features
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7d8086]">
              <SearchIcon />
            </span>

            <input
              type="text"
              placeholder="Buscar..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              onKeyDown={handleKeyPress}
              className="h-9 w-48 rounded-md bg-[#14161a]/50 pl-9 pr-3 text-sm text-[#f8f8f8] outline-none placeholder:text-[#7d8086] focus-visible:bg-[#14161a] lg:w-56"
            />
          </div>

          {/* User */}
          <NavLink
            to="/Login"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
          >
            <ProfileIcon />
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/Register"
            className="text-primary-[#f8f8f8] flex h-9 items-center rounded-md bg-[#22C55E] px-4 text-sm font-medium transition-colors hover:opacity-90"
          >
            Comenzar
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-[#7d8086] transition-colors hover:text-[#f8f8f8] md:hidden"
        >
          {mobileMenuOpen ? <CloseIcon /> : <BarsIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-border/40 border-t bg-[#060709] md:hidden">
          <div className="space-y-1 px-4 py-4">
            {/* Search */}
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7d8086]">
                <SearchIcon />
              </span>

              <input
                type="text"
                placeholder="Buscar..."
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                onKeyDown={handleKeyPress}
                className="h-10 w-full rounded-md bg-[#14161a]/50 pl-9 pr-3 text-sm text-[#f8f8f8] outline-none placeholder:text-[#7d8086]"
              />
            </div>

            <NavLink
              to="/Exchange"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Exchange
            </NavLink>

            <NavLink
              to="/Market"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Market
            </NavLink>

            <NavLink
              to="/Features"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </NavLink>

            <div className="flex gap-2 pt-4">
              <NavLink
                to="/Login"
                className="flex flex-1 items-center justify-center rounded-md border border-border px-4 py-2 text-sm text-[#7d8086] hover:bg-[#14161a]"
              >
                Iniciar sesión
              </NavLink>

              <NavLink
                to="/Register"
                className="flex flex-1 items-center justify-center rounded-md bg-[#22C55E] px-4 py-2 text-sm font-medium text-[#f8f8f8] hover:opacity-90"
              >
                Comenzar
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
