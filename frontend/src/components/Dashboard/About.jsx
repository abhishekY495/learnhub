import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import logoutIcon from "../../assets/logout.png";
import { StudentContext } from "../../contexts/StudentContext";
import { logout } from "../../functions/authentication/logout";

export const About = ({ studentData }) => {
  const { dispatch } = useContext(StudentContext);
  const navigate = useNavigate();
  const logoutBtnHandler = () => logout(dispatch, navigate);

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg leading-6">
          <span className="font-bold">Name</span> - {studentData?.name}
        </p>
        <p className="text-lg leading-6">
          <span className="font-bold">Email</span> - {studentData?.email}
        </p>
      </div>
      <img
        src={logoutIcon}
        alt="logout"
        className="w-10 hover:cursor-pointer"
        title="logout"
        onClick={logoutBtnHandler}
      />
    </div>
  );
};
