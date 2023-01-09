import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Login() {
  const url = "http://localhost:5050/user/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post(url, {
        username: username,
        password: password,
      });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUser(user.data.user);
      setUsername("");
      setPassword("");

      console.log(user);
    } catch (exception) {
      console.log("Error al loguearse");
    }
  };
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user.data.user);
    }
  }, []);
  const hadndleLogout = () => {
    setUsername(null);
    window.localStorage.removeItem("loggedNoteappUser");
  };
  console.log(username);
  console.log(user);
  const loginForm = () => (
    <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center bg-navbar text-5xl  text-white transition-all duration-700 ease-in-out">
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
      <h1 className="absolute top-0 ml-5 mt-6  text-xl font-bold text-white">
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
              className="m-auto my-10 h-10 w-[19.5rem] rounded-lg bg-btn px-10 text-lg"
              type="submit"
            >
              LOG IN
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
      <h1 className="absolute top-0 ml-5 mt-6  text-xl font-bold text-white">
        Bienvenido <span>{user.username}</span>
      </h1>

      <div className="relative m-auto flex  w-max flex-col text-left">
        <label className=" text-sm font-bold" htmlFor="">
          Password
        </label>
        <p>{user.balance}</p>
      </div>

      <div className="flex flex-col justify-center text-center ">
        <a href="/Login">
          <button
            className="m-auto my-10 h-10 w-[19.5rem] rounded-lg bg-btn px-10 text-lg"
            onClick={hadndleLogout}
          >
            Cerrar sesion
          </button>
        </a>
      </div>
    </div>
  );
  return (
    <>
      <>
        <div>{user === null ? loginForm() : logoutForm()}</div>
      </>
    </>
  );
}
