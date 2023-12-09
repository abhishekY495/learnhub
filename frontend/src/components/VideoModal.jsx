import React from "react";

export const VideoModal = ({ showModal, setShowModal, videoUrl }) => {
  return (
    showModal && (
      <div
        className="w-screen h-screen fixed bg-black/30 top-0 left-0 backdrop-blur-sm"
        onClick={() => setShowModal(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[60%] m-auto mt-[100px]"
        >
          <video controls src={videoUrl} className="rounded-md" />
        </div>
      </div>
    )
  );
};
