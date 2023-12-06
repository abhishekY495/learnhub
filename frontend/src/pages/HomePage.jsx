import React, { useEffect, useState } from "react";
import { CoursesList } from "../components/CoursesList";

export const HomePage = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("/api/courses");
    const data = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <CoursesList courses={courses} />
    </div>
  );
};
