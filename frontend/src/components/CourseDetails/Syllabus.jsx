import React, { useState } from "react";
import { Topics } from "./Topics";

export const Syllabus = ({ syllabus, enrolled }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const toggleWeek = (week) => {
    if (selectedWeek === week) {
      setSelectedWeek(null);
    } else {
      setSelectedWeek(week);
    }
  };

  return (
    <div className="py-2">
      <p className="font-bold text-2xl">Syllabus</p>
      <div className="mt-1">
        {syllabus?.map((syllabus_) => {
          return (
            <div key={syllabus_?.week} className="border p-2">
              <p
                onClick={() => toggleWeek(syllabus_?.week)}
                className="underline pl-2 hover:cursor-pointer"
              >
                Week {syllabus_?.week}
              </p>
              {/*  */}
              <div>
                {syllabus_?.topics?.map((topic) => {
                  return (
                    syllabus_.week === selectedWeek && (
                      <Topics
                        key={topic?.name}
                        topic={topic}
                        enrolled={enrolled}
                      />
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
