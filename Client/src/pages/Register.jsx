import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, MailIcon, Padlock, UserIcon } from "../utilities/icons";

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <>
      <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center text-5xl  text-white transition-all duration-700 ease-in-out">
        <Link to="/">
          <ArrowIcon />
        </Link>
        <h1 className="absolute top-0 ml-5 mt-12 text-xl font-bold text-white">
          Create account
        </h1>
        <div className="flex h-[90%] items-center max-md:mt-10">
          <form className="w-screen  justify-center">
            <div className="relative m-auto flex w-max flex-col text-left">
              <label className="text-sm font-bold">Username</label>
              <input
                className="relative my-3 h-12 w-[19.5rem] rounded-lg border-2 border-borderInput bg-input px-10  text-sm outline-none"
                type="text"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <UserIcon classname="absolute bottom-0 top-11 left-3 h-5 w-5" />
            </div>
            <div className="relative m-auto flex  w-max justify-around gap-6 text-left">
              <div className=" flex flex-col">
                <label className=" text-sm font-bold">First name</label>
                <input
                  className=" relative my-3 h-12 w-[9rem] rounded-lg border-2 border-borderInput bg-input pl-10 pr-4  text-sm outline-none"
                  type="text"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <UserIcon classname="absolute bottom-0 top-11 left-[11.4rem] z-10 h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <label className=" text-sm font-bold">Last name</label>
                <input
                  className=" relative my-3 h-12 w-[9rem] rounded-lg border-2 border-borderInput bg-input pl-10 pr-4  text-sm outline-none"
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <UserIcon classname="absolute bottom-0 top-11 left-3 h-5 w-5" />
              </div>
            </div>
            <div className="relative m-auto flex  w-max flex-col text-left">
              <label className=" text-sm font-bold">Email Address</label>
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
              <label className=" text-sm font-bold">Password</label>
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
