import React, { useContext } from "react";

import { Course } from "../components/Course";
import { CourseContext } from "../contexts/CourseContext";

export const HomePage = () => {
  const {
    state: { courseData, loading, error },
  } = useContext(CourseContext);

  return (
    <>
      <div className="w-[1080px] max-[1200px]:w-[750px] max-[770px]:w-auto m-auto flex flex-col max-[820px]:items-center max-[820px]:w-full">
        <p className="text-4xl font-bold py-5 underline  max-[1200px]:pl-6">
          Courses
        </p>
        {loading && <p className="text-lg mt-5">Getting courses...</p>}
        {error && (
          <p className="text-lg mt-5 text-red-500 ml-6">
            Error Occured. <br></br> Try again later.
          </p>
        )}
        <div className="grid grid-cols-3 gap-8 max-[1200px]:grid-cols-2 max-[1200px]:justify-items-center max-[820px]:grid-cols-1">
          {courseData?.map((course) => {
            return <Course course={course} key={course._id} />;
          })}
        </div>
      </div>
    </>
  );
};
