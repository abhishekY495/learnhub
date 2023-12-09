import toast from "react-hot-toast";

export const toggleMarkAsDone = async (
  dispatch,
  studentData,
  course,
  week,
  topic
) => {
  try {
    const response = await fetch("/api/student/toggleMarkAsDoneTopic", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: studentData._id,
        course_: course,
        week,
        topic_: topic,
      }),
    });
    const data = await response.json();
    dispatch({
      type: "STUDENT_SYLLABUS_TOPIC_MARK_AS_DONE_TOGGLE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
