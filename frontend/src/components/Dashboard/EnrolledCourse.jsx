import React from "react";
import { Link } from "react-router-dom";

import { completedPercentage } from "../../utils/completedPercentage";

export const EnrolledCourse = ({ enrolledCourse }) => {
  return (
    <Link
      to={`/enrolled-course/${enrolledCourse?.courseId}`}
      className="w-[320px] bg-neutral-200 p-2 rounded hover:bg-neutral-300 transition-all relative"
    >
      <img
        src={enrolledCourse?.thumbnail}
        alt={enrolledCourse?.title}
        className="rounded pb-1"
      />
      <h2 className="text-lg font-bold leading-6">{enrolledCourse?.title}</h2>
      <p className="text-green-400 bg-black font-bold text-xl absolute top-2 right-2 p-1 pl-2 rounded-bl-lg">
        {completedPercentage(enrolledCourse?.syllabus)}%
      </p>
    </Link>
  );
};
