import React from "react";

export const Topics = ({ topic }) => {
  return (
    <ul className="list-disc pl-8">
      <li>{topic?.name}</li>
    </ul>
  );
};
