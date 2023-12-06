import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { StudentContext } from "../contexts/StudentContext";

export const ProtectedRoute = ({ children }) => {
  const {
    state: { studentData },
  } = useContext(StudentContext);

  return studentData ? children : <Navigate to="/login" />;
};
