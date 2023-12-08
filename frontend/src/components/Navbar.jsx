import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StudentContext } from "../contexts/StudentContext";

export const Navbar = () => {
  const {
    state: { studentData },
  } = useContext(StudentContext);

  return (
    <nav className="bg-blue-400 flex text-2xl py-5 items-center justify-center gap-[800px] max-[1200px]:gap-[430px] max-[820px]:justify-between max-[820px]:px-10 max-[820px]:gap-1">
      <Link to="/" className="font-bold">
        Home
      </Link>
      <Link
        to="/dashboard"
        className={`${
          studentData
            ? "bg-green-600 hover:bg-green-600/90"
            : "bg-red-500 hover:bg-red-500/90"
        } px-8 py-1 rounded-full text-white transition-all`}
      >
        Dashboard
      </Link>
    </nav>
  );
};
