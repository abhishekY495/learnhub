import React from "react";
import { Link } from "react-router-dom";

export const Course = ({ course }) => {
  return (
    <Link
      to={`/courses/${course._id}`}
      className="bg-neutral-200 flex flex-col p-2 gap-2 rounded-lg w-[320px] max-[820px]:w-[420px] max-[485px]:w-auto max-[485px]:mx-5 hover:bg-neutral-300 transition-all"
    >
      <img
        src={course?.thumbnail}
        alt={course?.title}
        className="object-cover rounded-lg"
      />
      <p className="font-bold text-lg pl-1 pr-2 leading-6">{course?.title}</p>
    </Link>
  );
};
