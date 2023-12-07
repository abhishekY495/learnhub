import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import logoutIcon from "../assets/logout.png";
import { StudentContext } from "../contexts/StudentContext";
import { logout } from "../functions/authentication/logout";
import { Course } from "../components/Course";

export const DashboardPage = () => {
  const {
    state: { studentData },
    dispatch,
  } = useContext(StudentContext);
  const navigate = useNavigate();

  const enrolledCourseCount = studentData?.enrolledCourses?.length;

  const logoutBtnHandler = () => logout(dispatch, navigate);

  console.log(studentData);

  return (
    <div className="w-[740px] m-auto flex flex-col justify-items-center  mt-5 px-5 max-[800px]:w-full ">
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
      <hr className="my-2" />
      <p className="text-3xl font-bold underline my-2 mb-4 max-[820px]:text-center">
        My Courses ({enrolledCourseCount})
      </p>
      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 max-[820px]:justify-items-center gap-8">
        {studentData?.enrolledCourses?.map((course) => {
          return (
            <Course
              course={course}
              key={course.courseId}
              courseId={course.courseId}
            />
          );
        })}
      </div>
    </div>
  );
};
