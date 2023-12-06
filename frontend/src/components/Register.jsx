import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StudentContext } from "../contexts/StudentContext";
import { register } from "../functions/authentication/register";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(StudentContext);
  const navigate = useNavigate();

  const registerBtnHandler = () => {
    register(name, email, password, dispatch, navigate);
  };

  return (
    <div className="flex flex-col gap-2 bg-neutral-200 text-black w-[400px] m-auto p-5 rounded mt-10">
      <label>
        <p>
          Name <sup className="text-red-500">*</sup>
        </p>
        <input
          type="text"
          className="border-neutral-300 pl-1 w-full rounded-md border-2"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <p>
          Email <sup className="text-red-500">*</sup>
        </p>
        <input
          type="text"
          className="border-neutral-300 pl-1 w-full rounded-md border-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <p>
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type="password"
          className="border-neutral-300 pl-1 w-full rounded-md border-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className="bg-neutral-400 rounded p-1"
        onClick={registerBtnHandler}
      >
        Register
      </button>
      <p className="mt-3">
        Have an Account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};
