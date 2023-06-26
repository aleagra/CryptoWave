import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/cryptoLogo.webp";
import { BarsIcon, ProfileIcon, SearchIcon } from "../utilities/icons";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [buscar, setBuscar] = useState("");
  let [open, setOpen] = useState(false);
  const links = [
    {
      title: "Exchange",
      ref: "/Exchange",
    },
    {
      title: "Market",
      ref: "/Market",
    },
    { title: "Profile", ref: "/Login", hidden: "lg:hidden" },
  ];

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="flex w-full items-center justify-between bg-background py-6 px-[10rem] text-sm max-2xl:px-[5rem] max-lg:absolute max-md:justify-center max-md:px-0">
        <div className="flex items-center">
          <BarsIcon toggleOpen={toggleOpen} open={open} />
          <NavLink
            to="/"
            className="w-40 text-center text-lg hover:text-main max-md:w-36"
          >
            <img src={logo} alt="" />
          </NavLink>
          <ul
            className={`absolute left-0 flex h-screen w-full justify-center overflow-hidden bg-background pb-12 text-center font-semibold text-white transition-all duration-200 max-lg:flex-col max-md:px-10 lg:static lg:right-0 lg:z-auto lg:flex lg:h-auto lg:w-auto lg:items-center lg:pl-0 lg:pb-0 ${
              open ? "top-16 " : "top-[-6000px] "
            }`}
          >
            {links.map((link) => (
              <NavLink
                key={link.ref}
                to={link.ref}
                activeclassname="active"
                onClick={toggleOpen}
                className={`my-12 text-3xl hover:text-main md:ml-12 lg:my-0 lg:text-[16px] ${link.hidden} `}
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="right-0 flex items-center justify-end gap-8 max-md:absolute max-md:mr-6 max-md:w-fit max-md:gap-0">
          <ul
            className={`z-[-1] flex w-full items-center overflow-hidden text-center text-white transition-all duration-100 max-lg:absolute lg:static lg:z-auto lg:flex lg:w-auto ${
              search ? "top-12 left-0" : "top-[-7000px]"
            }`}
          >
            <input
              onChange={(e) => setBuscar(e.target.value)}
              value={buscar}
              type="Search"
              placeholder="Search"
              maxLength="20"
              className="rounded-xl bg-input p-2 px-4 text-white outline-none max-lg:w-full"
            />
            <a
              className="absolute top-8 right-14 lg:hidden"
              href={buscar === "" ? "/Market" : "/Search/" + buscar}
            >
              <SearchIcon />
            </a>
          </ul>
          <a
            className="max-lg:hidden"
            href={buscar === "" ? "/Market" : "/Search/" + buscar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="text-icons h-6 w-6 bg-transparent"
            >
              <path
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="text-icons h-6 w-6 bg-transparent lg:hidden"
            onClick={toggleSearch}
          >
            <path
              strokeLinejoin="round"
              d={
                search
                  ? "M6 18L18 6M6 6l12 12"
                  : "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              }
            />
          </svg>

          <NavLink to="/Login">
            <ProfileIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
