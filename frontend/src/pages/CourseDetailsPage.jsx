import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { CourseContext } from "../contexts/CourseContext";
import { CourseDetails } from "../components/CourseDetails/CourseDetails";

export const CourseDetailsPage = () => {
  const { id } = useParams();
  const {
    state: { courseData },
  } = useContext(CourseContext);

  const course = courseData.find((course) => course._id === id);

  return (
    <div className="w-[800px] m-auto mt-5 max-[820px]:w-auto">
      <CourseDetails course={course} />
    </div>
  );
};
