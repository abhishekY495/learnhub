import React from "react";

export const Requirements = ({ requirements }) => {
  return (
    <div className="py-2">
      <p className="font-bold text-2xl">Requirements</p>
      <ul className="list-disc ml-5">
        {requirements?.map((requirement) => {
          return <li key={requirement}>{requirement}</li>;
        })}
      </ul>
    </div>
  );
};
