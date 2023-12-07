import React, { useContext } from "react";

import { StudentContext } from "../contexts/StudentContext";
import { About } from "../components/Dashboard/About";
import { EnrolledCourse } from "../components/Dashboard/EnrolledCourse";

export const DashboardPage = () => {
  const {
    state: { studentData },
  } = useContext(StudentContext);

  const enrolledCourseCount = studentData?.enrolledCourses?.length;

  return (
    <div className="w-[740px] m-auto flex flex-col justify-items-center  mt-5 px-5 max-[800px]:w-full ">
      <About studentData={studentData} />
      <hr className="my-2" />
      <p className="text-3xl font-bold underline my-2 mb-4 max-[820px]:text-center">
        Enrolled Courses ({enrolledCourseCount})
      </p>
      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 max-[820px]:justify-items-center gap-8">
        {studentData?.enrolledCourses?.map((course) => {
          return (
            <EnrolledCourse enrolledCourse={course} key={course?.courseId} />
          );
        })}
      </div>
    </div>
  );
};
