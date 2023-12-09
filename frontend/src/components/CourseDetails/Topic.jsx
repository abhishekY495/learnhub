import React, { useContext, useState } from "react";

import doneIcon from "../../assets/topic/doneIcon.png";
import undoneIcon from "../../assets/topic/undoneIcon.png";
import { VideoModal } from "../VideoModal";
import { StudentContext } from "../../contexts/StudentContext";
import { toggleMarkAsDone } from "../../functions/student/toggleMarkAsDone";

export const Topic = ({ topic, enrolled, course, week }) => {
  const {
    state: { studentData },
    dispatch,
  } = useContext(StudentContext);
  const [showModal, setShowModal] = useState(false);

  const showVideo = () => setShowModal(true);

  const markAsDoneHandler = () =>
    toggleMarkAsDone(dispatch, studentData, course, week, topic);

  return (
    <div>
      <VideoModal
        showModal={showModal}
        setShowModal={setShowModal}
        videoUrl={topic?.videoUrl}
      />
      {!enrolled ? (
        <ul className="list-disc pl-8">
          <li>{topic?.name}</li>
        </ul>
      ) : (
        <div className="flex items-center gap-1 pl-2">
          <img
            src={topic?.markAsDone ? doneIcon : undoneIcon}
            alt="icon"
            className="w-5 hover:cursor-pointer"
            onClick={markAsDoneHandler}
          />
          <li className="list-none hover:cursor-pointer" onClick={showVideo}>
            {topic?.name}
          </li>
        </div>
      )}
    </div>
  );
};
