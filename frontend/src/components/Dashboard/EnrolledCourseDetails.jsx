import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Syllabus } from "../CourseDetails/Syllabus";
import { completedPercentage } from "../../utils/completedPercentage";
import { StudentContext } from "../../contexts/StudentContext";
import { unenrollCourse } from "../../functions/student/unenrollCourse";

export const EnrolledCourseDetails = ({ course }) => {
  const {
    state: { studentData },
    dispatch,
  } = useContext(StudentContext);
  const navigate = useNavigate();

  const percent = completedPercentage(course?.syllabus);

  const unenrollCourseBtnHandler = () =>
    unenrollCourse(dispatch, studentData, course, navigate);

  return (
    <div className="flex flex-col mx-5">
      <Link
        to={`/courses/${course.courseId}`}
        className="flex flex-col border-b mb-1"
      >
        <div className="flex gap-2">
          <img
            src={course?.thumbnail}
            alt={course?.title}
            className="rounded w-[80px] h-[80px] object-cover"
          />
          <h2 className="text-3xl font-bold py-1">{course?.title}</h2>
        </div>
        <button
          className="bg-orange-500 my-2 py-1 rounded text-xl font-bold text-white hover:bg-orange-600 transition-all"
          onClick={unenrollCourseBtnHandler}
        >
          UN-ENROLL
        </button>
      </Link>
      <div className="flex flex-col gap-1 border-b pb-3">
        <p className="font-bold text-2xl">{percent}% Completed</p>
        <div className="w-[100%] border rounded-full">
          <div
            className={`bg-green-500 h-[20px] rounded-full`}
            style={{ width: percent + "%" }}
          ></div>
        </div>
      </div>
      <Syllabus syllabus={course?.syllabus} enrolled />
    </div>
  );
};
