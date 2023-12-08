import React, { useState } from "react";

import doneIcon from "../../assets/topic/doneIcon.png";
import undoneIcon from "../../assets/topic/undoneIcon.png";
import { VideoModal } from "../VideoModal";

export const Topics = ({ topic, enrolled }) => {
  const [showModal, setShowModal] = useState(false);

  const showVideo = () => setShowModal(true);

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
          />
          <li className="list-none hover:cursor-pointer" onClick={showVideo}>
            {topic?.name}
          </li>
        </div>
      )}
    </div>
  );
};
