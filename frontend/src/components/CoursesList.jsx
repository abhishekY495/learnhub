import React from "react";

export const CoursesList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.courseId}>
            <p>{course.title}</p>
          </div>
        );
      })}
    </div>
  );
};
