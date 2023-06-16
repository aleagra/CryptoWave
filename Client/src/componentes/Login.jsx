import React, { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { ArrowIcon, UserIcon } from "../utilities/icons";
import Padlock from "../utilities/icons/Padlock";
export function Login() {
  const { myData, setMyData } = useContext(DataContext);
  const url = "http://localhost:5050/user/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post(url, {
        username: username,
        password: password,
      });

      setMyData(user.data.user);
      setUser(user.data.user);
      setUsername("");
      setPassword("");
      console.log(myData);
    } catch (exception) {
      console.log("Error al loguearse");
    }
  };

  const hadndleLogout = () => {
    window.localStorage.removeItem("myData");
  };

  const loginForm = () => (
    <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center  text-5xl  text-white transition-all duration-700 ease-in-out">
      <Link to="/">
        <ArrowIcon />
      </Link>
      <h1 className="absolute top-0 ml-5 mt-12 text-xl font-bold text-white">
        To continue, sign in
      </h1>
      <div className="flex h-[90%] items-center">
        <form className="w-screen  justify-center" onSubmit={handleSubmit}>
          <div className="relative m-auto flex w-max flex-col text-left">
            <label className="text-sm font-bold" htmlFor="">
              Username
            </label>
            <input
              className="relative my-3 h-12 w-[19.5rem] rounded-lg border-2 border-borderInput bg-input px-10  text-sm outline-none"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <UserIcon />
          </div>

          <div className="relative m-auto flex  w-max flex-col text-left">
            <label className=" text-sm font-bold" htmlFor="">
              Password
            </label>
            <input
              className=" relative  my-3 h-12 w-[19.5rem] rounded-lg border-2 border-borderInput bg-input px-10  text-sm outline-none "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Padlock />
          </div>

          <div className="flex flex-col justify-center text-center ">
            <button
              className="m-auto my-10 h-10 w-[19.5rem] rounded-lg bg-[#4444a0] px-10 text-lg"
              type="submit"
            >
              Log in
            </button>
            <p className=" text-sm">
              You do not have an account?{" "}
              <Link to="/Register" className="underline">
                Register
              </Link>{" "}
              now
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  const logoutForm = () => (
    <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center text-5xl  text-white transition-all duration-700 ease-in-out">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="absolute top-1 left-0 z-10 ml-5  mt-6 h-6 w-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <div className="m-auto flex w-full flex-row items-center justify-center max-lg:flex-col ">
        <div className="  relative  flex flex-col gap-y-4 text-center text-3xl max-lg:gap-y-10 max-sm:w-full max-sm:text-2xl ">
          <label className="text-left text-sm font-bold" htmlFor="">
            Full name
          </label>
          <p className="relative  w-[19.5rem] rounded-lg border-2 border-borderInput bg-input p-4 px-10  text-sm outline-none max-sm:w-full max-sm:rounded-none">
            {myData.firstname + " " + myData.lastname}
          </p>
          <label className="text-left text-sm font-bold" htmlFor="">
            Email
          </label>
          <p className="relative  w-[19.5rem] rounded-lg border-2 border-borderInput bg-input p-4 px-10  text-sm outline-none max-sm:w-full max-sm:rounded-none">
            {myData.email}
          </p>
          <div className="flex flex-col justify-center text-center ">
            <a href="/Login">
              <button
                className="m-auto mt-12 w-[19.5rem] rounded-lg bg-red-600 p-4 px-10 text-lg max-md:w-full max-sm:rounded-none"
                onClick={hadndleLogout}
              >
                Log Out
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <>
        <div>{!myData ? loginForm() : logoutForm()}</div>
      </>
    </>
  );
}
