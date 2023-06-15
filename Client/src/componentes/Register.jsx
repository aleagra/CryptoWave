import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Register() {
  const url = "http://localhost:5050/user/";
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var users = {
        user: user,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      };

      const resp = await axios.post(url, users, {
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = "/Login";
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center text-5xl  text-white transition-all duration-700 ease-in-out">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="absolute top-6 left-0 z-10 ml-10  mt-6 h-6 w-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="absolute top-0 ml-5 mt-12 text-xl font-bold text-white">
          Create account
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
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute bottom-0 top-11 left-3 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="relative m-auto flex  w-max justify-around gap-6 text-left">
              <div className="flex flex-col">
                <label className=" text-sm font-bold" htmlFor="">
                  First name
                </label>
                <input
                  className=" relative my-3 h-12 w-[9rem] rounded-lg border-2 border-borderInput bg-input pl-10 pr-4  text-sm outline-none"
                  type="text"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="absolute bottom-0 top-11 left-[11.4rem] z-10 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <label className=" text-sm font-bold" htmlFor="">
                  Last name
                </label>
                <input
                  className=" relative my-3 h-12 w-[9rem] rounded-lg border-2 border-borderInput bg-input pl-10 pr-4  text-sm outline-none"
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-0 top-11 left-3 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
            <div className="relative m-auto flex  w-max flex-col text-left">
              <label className=" text-sm font-bold" htmlFor="">
                Email Address
              </label>
              <input
                className=" relative  my-3 h-12 w-[19.5rem] rounded-lg border-2 border-borderInput bg-input px-10  text-sm outline-none "
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute bottom-0 top-11 left-3 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="absolute bottom-0 top-11 left-3 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>

            <div className="flex flex-col justify-center text-center ">
              <button
                className="m-auto my-10 h-10 w-[19.5rem] rounded-lg bg-[#4444a0] px-10 text-lg"
                type="submit"
              >
                Create acount
              </button>
              <p className=" text-sm">By continuing, you agree to the</p>
              <p className="text-sm font-bold">
                Temrs of Service & Privacy Policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
