import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ProtectedRoute } from "./utils/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CourseDetailsPage } from "./pages/CourseDetailsPage";
import { CourseContext } from "./contexts/CourseContext";
import { StudentContext } from "./contexts/StudentContext";
import { EnrolledCourseDetailsPage } from "./pages/EnrolledCourseDetailsPage";

export const App = () => {
  const { dispatch } = useContext(CourseContext);
  const {
    state: { studentData },
  } = useContext(StudentContext);

  const getCourses = async () => {
    dispatch({ type: "COURSE_DATA_LOADING" });
    try {
      const response = await fetch("/api/courses");
      const data = await response.json();
      dispatch({ type: "COURSE_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "COURSE_DATA_ERROR" });
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="mb-36">
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={!studentData ? <LoginPage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={
            !studentData ? <RegisterPage /> : <Navigate to="/dashboard" />
          }
        />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route
          path="/enrolled-course/:id"
          element={
            <ProtectedRoute>
              <EnrolledCourseDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
