import React, { useContext } from "react";

import { StudentContext } from "../contexts/StudentContext";
import { logout } from "../functions/authentication/logout";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const {
    state: { studentData },
    dispatch,
  } = useContext(StudentContext);
  const navigate = useNavigate();

  const logoutBtnHandler = () => logout(dispatch, navigate);

  return (
    <div>
      <p>{studentData?.name}</p>
      <p>{studentData?.email}</p>

      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={logoutBtnHandler}
      >
        Logout
      </button>
    </div>
  );
};
