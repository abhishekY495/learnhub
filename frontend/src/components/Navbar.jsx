import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between px-10 text-2xl py-3 items-center">
      <Link to="/" className="font-bold">
        Home
      </Link>
      <Link
        to="/dashboard"
        className="bg-red-500 px-8 py-1 rounded-full text-white hover:bg-red-500/90 transition-all"
      >
        Dashboard
      </Link>
    </nav>
  );
};
