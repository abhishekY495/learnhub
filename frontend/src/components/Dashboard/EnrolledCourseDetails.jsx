import React from "react";
import { Link } from "react-router-dom";

import { Syllabus } from "../CourseDetails/Syllabus";
import { completedPercentage } from "../../utils/completedPercentage";

export const EnrolledCourseDetails = ({ course }) => {
  const percent = completedPercentage(course?.syllabus);

  return (
    <div className="flex flex-col mx-5">
      <Link
        to={`/courses/${course.courseId}`}
        className="flex gap-2 border-b pb-2 mb-1"
      >
        <img
          src={course?.thumbnail}
          alt={course?.title}
          className="rounded w-[80px] h-[80px] object-cover"
        />
        <h2 className="text-3xl font-bold py-1">{course?.title}</h2>
      </Link>
      <div className="flex gap-1 items-center">
        <div className="w-[100%] border rounded-full">
          <div
            className={`bg-green-500 p-2 rounded-full`}
            style={{ width: percent + "%" }}
          ></div>
        </div>
        <p className="font-bold text-lg">{percent}%</p>
      </div>
      <Syllabus syllabus={course?.syllabus} enrolled />
    </div>
  );
};
