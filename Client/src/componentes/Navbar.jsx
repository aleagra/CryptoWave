import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/cryptoLogo.png";
function Navbar() {
  const [search, setSearch] = useState(false);
  let [open, setOpen] = useState(false);
  const [buscar, setBuscar] = useState("");

  const links = [
    {
      title: "Exchange",
      ref: "/Exchange",
    },
    {
      title: "Market",
      ref: "/Market",
    },
  ];

  return (
    <>
      {/* <nav className="fixed w-full">
        <div className="flex items-center justify-center bg-navbar text-white max-lg:py-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className=" absolute left-5  h-7 w-7 cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
            <Link
              to="/"
              className="flex w-full justify-center text-center text-lg hover:text-[#78D9E4]"
            >
              <img src="cryptoLogo.png" alt="" className="w-36" />
            </Link>
            <div
              className={`z-[-1] flex h-full w-full justify-center overflow-hidden bg-navbar pb-12 text-center font-semibold uppercase text-white opacity-90 transition-all duration-500 ease-in max-lg:flex-col lg:static lg:right-0 lg:z-auto lg:flex lg:h-auto lg:w-auto lg:items-center lg:pl-0 lg:pb-0 ${
                open ? "top-10 " : "top-[-700px] "
              }`}
            >
              {links.map((item, index) => (
                <Link
                  to={item.ref}
                  onClick={() => setOpen(!open)}
                  className="my-12 text-3xl hover:text-[#78D9E4] lg:my-0 lg:ml-8 lg:text-[16px]"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav> */}

      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="flex items-center  bg-[#0d0d0d] text-white  lg:py-4">
          <div className="flex  w-full items-center justify-between px-[10rem] text-sm max-2xl:px-[5rem] max-lg:absolute max-lg:justify-start">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className=" absolute left-0 h-7 w-7 cursor-pointer  max-lg:ml-[0.7rem] lg:hidden"
                onClick={() => setOpen(!open)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    open
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
              <NavLink
                to="/"
                className="w-40 text-center  text-lg hover:text-[#47449f] "
              >
                <img src={logo} alt="" />
              </NavLink>
              <ul
                className={`absolute left-0 z-[-1] flex h-screen w-full justify-center gap-12 overflow-hidden pb-12 text-center font-semibold text-white opacity-90 transition-all duration-500 ease-in max-lg:flex-col lg:static lg:right-0 lg:z-auto lg:flex lg:h-auto lg:w-auto lg:items-center lg:pl-0 lg:pb-0 ${
                  open ? "top-10 " : "top-[-700px] "
                }`}
              >
                <NavLink
                  to="/Exchange"
                  onClick={() => setOpen(!open)}
                  className="my-12 ml-12 text-3xl hover:text-[#47449f] lg:my-0  lg:text-[16px]"
                >
                  Exchange
                </NavLink>
                <NavLink
                  to="/Market"
                  onClick={() => setOpen(!open)}
                  className="my-12 text-3xl hover:text-[#47449f] lg:my-0  lg:text-[16px]"
                >
                  Market
                </NavLink>
              </ul>
            </div>
            <div className="right-0 flex items-center justify-end gap-8  max-lg:w-full">
              <ul
                className={`overflow-hiddentext-center z-[-1] flex w-full  items-center text-white transition-all  duration-100  max-lg:absolute  lg:static
                 lg:z-auto lg:flex lg:w-auto ${
                   search ? "top-12 left-0" : "top-[-7000px]"
                 }`}
              >
                <input
                  onChange={(e) => setBuscar(e.target.value)}
                  value={buscar}
                  type="Search"
                  placeholder="Search"
                  maxLength="20"
                  className=" rounded-xl bg-[#23232c] p-2 px-4 text-white outline-none max-lg:w-full"
                />
                <a
                  className="absolute top-8 right-14 lg:hidden"
                  href={buscar === "" ? "/Market" : "/Search/" + buscar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className=" h-6 w-6 bg-transparent text-icons opacity-50 "
                  >
                    <path
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
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
                  className=" h-6 w-6 bg-transparent text-icons "
                >
                  <path
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </a>

              <svg
                onClick={() => setSearch(!search)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className=" h-6 w-6 bg-transparent text-icons lg:hidden"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className=" h-6 w-7 text-icons"
                >
                  <path
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
