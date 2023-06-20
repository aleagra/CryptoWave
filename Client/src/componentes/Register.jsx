import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, MailIcon, Padlock, UserIcon } from "../utilities/icons";

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     var users = {
  //       user: user,
  //       firstname: firstname,
  //       lastname: lastname,
  //       email: email,
  //       password: password,
  //     };

  //     const resp = await axios.post(url, users, {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     window.location.href = "/Login";
  //     console.log(resp.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  return (
    <>
      <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center text-5xl  text-white transition-all duration-700 ease-in-out">
        <Link to="/">
          <ArrowIcon />
        </Link>
        <h1 className="absolute top-0 ml-5 mt-12 text-xl font-bold text-white">
          Create account
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
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <UserIcon />
            </div>
            <div className="relative m-auto flex  w-max justify-around gap-6 text-left">
              <div className=" flex flex-col">
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
                <UserIcon />
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
              <MailIcon />
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
