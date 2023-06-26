import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, Padlock, UserIcon } from "../utilities/icons";
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center  text-5xl  text-white transition-all duration-700 ease-in-out">
      <Link to="/">
        <ArrowIcon />
      </Link>
      <h1 className="absolute top-0 ml-5 mt-12 text-xl font-bold text-white">
        To continue, sign in
      </h1>
      <div className="flex h-[90%] items-center">
        <form className="w-screen  justify-center">
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
            <UserIcon classname="absolute bottom-0 top-11 left-3 h-5 w-5" />
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
              className="m-auto my-10 h-10 w-[19.5rem] rounded-lg bg-main px-10 text-lg"
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
}
