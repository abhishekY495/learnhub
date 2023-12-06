import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StudentContext } from "../contexts/StudentContext";
import { login } from "../functions/authentication/login";
import { guestCredentials } from "../utils/guestCredentials";
import showPasswordIcon from "../assets/password/showPasswordIcon.svg";
import hidePasswordIcon from "../assets/password/hidePasswordIcon.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useContext(StudentContext);
  const navigate = useNavigate();

  const loginBtnHandler = () => {
    login(email, password, dispatch, navigate);
  };

  const guestLoginBtnHandler = () => {
    setEmail(guestCredentials.email);
    setPassword(guestCredentials.password);
    login(
      guestCredentials.email,
      guestCredentials.password,
      dispatch,
      navigate
    );
  };

  return (
    <div className="flex flex-col gap-2 bg-neutral-200 text-black w-[400px] m-auto p-5 rounded mt-10">
      <label>
        <p>
          Email <sup className="text-red-500">*</sup>
        </p>
        <input
          type="text"
          className="border-neutral-300 pl-1 w-full rounded-md border-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label className="relative">
        <p>
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          className="border-neutral-300 pl-1 w-full rounded-md border-2 pr-8"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <img
          src={showPassword ? hidePasswordIcon : showPasswordIcon}
          onClick={() => setShowPassword(!showPassword)}
          className="w-[18px] absolute top-[29px] right-[10px] opacity-50 hover:cursor-pointer"
          alt="password icon"
        />
      </label>
      <div className="flex flex-col gap-2">
        <button
          className="bg-neutral-400 rounded p-1"
          onClick={loginBtnHandler}
        >
          Login
        </button>
        <button
          className="bg-orange-400 rounded p-1"
          onClick={guestLoginBtnHandler}
        >
          Guest Login
        </button>
      </div>
      <p className="mt-3">
        Dont have an Account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
};
