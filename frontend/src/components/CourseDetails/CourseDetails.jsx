import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StudentContext } from "../../contexts/StudentContext";
import { Instructors } from "./Instructors";
import { Requirements } from "./Requirements";
import { Syllabus } from "./Syllabus";

export const CourseDetails = ({ course }) => {
  const {
    state: { studentData },
  } = useContext(StudentContext);

  const isEnrolled = studentData?.enrolledCourses?.some(
    (enrolledCourse) => enrolledCourse?.courseId === course?._id
  );

  return (
    <div className="flex flex-col mx-5">
      <img src={course?.thumbnail} alt={course?.title} className="rounded" />
      <h2 className="text-3xl font-bold py-1">{course?.title}</h2>
      <p className="pb-1">{course?.description}</p>
      <div className="border p-2 rounded pl-3 capitalize">
        <Instructors instructors={course?.instructors} />
        <p>
          <span className="font-bold">Duration</span> - {course?.duration}
        </p>
        <p>
          <span className="font-bold">Enrolled Students</span>:{" "}
          {course?.enrolledStudents?.length}
        </p>
      </div>
      {isEnrolled ? (
        <Link
          to="/dashboard"
          className="bg-orange-500 text-center my-2 py-1 rounded text-xl font-bold text-white hover:bg-orange-600 transition-all"
        >
          Go To Dashboard
        </Link>
      ) : (
        <button className="bg-green-500 my-2 py-1 rounded text-xl font-bold text-white hover:bg-green-600 transition-all">
          ENROLL
        </button>
      )}
      <Requirements requirements={course?.requirements} />
      <hr className="my-1" />
      <Syllabus syllabus={course?.syllabus} />
    </div>
  );
};
