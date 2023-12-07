import React from "react";

export const Instructors = ({ instructors }) => {
  return (
    <p>
      <span className="font-bold">Created By</span>: {instructors?.join(", ")}
    </p>
  );
};
