import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { StudentContext } from "../contexts/StudentContext";
import { EnrolledCourseDetails } from "../components/Dashboard/EnrolledCourseDetails";

export const EnrolledCourseDetailsPage = () => {
  const { id } = useParams();
  const {
    state: { studentData },
  } = useContext(StudentContext);

  const course = studentData?.enrolledCourses?.find(
    (course) => course?.courseId === id
  );

  return (
    <div className="w-[800px] m-auto mt-5 max-[820px]:w-auto">
      <EnrolledCourseDetails course={course} />
    </div>
  );
};
