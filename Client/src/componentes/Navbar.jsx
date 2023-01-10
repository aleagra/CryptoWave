import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export function Navbar() {
  const [search, setSearch] = useState(false);
  let [open, setOpen] = useState(false);
  const [buscar, setBuscar] = useState("");
  console.log(buscar);

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     window.location.href = "/Search/" + buscar;
  //   }
  // }

  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full shadow-md ">
        <div className="flex items-center  bg-navbar  py-10 text-white  lg:py-8 ">
          <div className="flex  w-full items-center justify-between text-sm font-bold max-lg:absolute max-lg:justify-start lg:px-10">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className=" h-7 w-7 cursor-pointer  max-lg:ml-[0.7rem] lg:hidden"
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
                className="w-40 text-center text-lg hover:text-[#78D9E4] "
              >
                MY WALLET
              </Link>
              <ul
                className={` W absolute  left-0 z-[-1] flex h-screen w-full justify-center overflow-hidden bg-navbar pb-12 text-center text-white transition-all duration-500 ease-in max-lg:flex-col lg:static lg:right-0 lg:z-auto lg:flex lg:h-auto lg:w-auto lg:items-center lg:pl-0 lg:pb-0 ${
                  open ? "top-10 " : "top-[-70000px] "
                }`}
              >
               
                <Link
                  to="/MyWallet"
                  onClick={() => setOpen(!open)}
                  className="my-12 text-3xl hover:text-[#78D9E4] lg:my-0 lg:ml-8 lg:text-xl"
                >
                  Wallet
                </Link>
                <Link
                  to="/Exchange"
                  onClick={() => setOpen(!open)}
                  className="my-12 text-3xl hover:text-[#78D9E4] lg:my-0 lg:ml-8 lg:text-xl"
                >
                  Exchange
                </Link>
                <Link
                  to="/Market"
                  onClick={() => setOpen(!open)}
                  className="my-12 text-3xl hover:text-[#78D9E4] lg:my-0 lg:ml-8 lg:text-xl"
                >
                  Market
                </Link>
              </ul>
            </div>
            <div className="right-0 mr-[0.7rem] flex items-center justify-end gap-4  max-lg:w-full  ">
              <ul
                className={`z-[-1]   flex w-full items-center  overflow-hidden bg-navbar text-center text-white transition-all  duration-100 ease-in max-lg:absolute max-lg:p-6  lg:static lg:right-6 lg:z-auto lg:flex lg:w-auto ${
                  search ? "top-12 left-0" : "top-[-7000px]"
                }`}
              >
                <input
                  // onKeyDown={handleKeyDown}
                  onChange={(e) => setBuscar(e.target.value)}
                  value={buscar}
                  type="Search"
                  placeholder="Search"
                  className=" rounded-lg border-none bg-white p-2 text-black outline-none max-lg:w-full"
                />
                <a
                  className="lg:hidden"
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <Link to="/Login">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
