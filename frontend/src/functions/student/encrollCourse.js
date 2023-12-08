import toast from "react-hot-toast";

export const enrollCourse = async (dispatch, studentData, course) => {
  dispatch({ type: "STUDENT_ENROLL_COURSE_LOADING" });
  const toastId = toast.loading("Registering", {
    position: "top-center",
  });
  if (!studentData) {
    toast("Log in to Enroll");
  } else {
    try {
      const response = await fetch("/api/student/enroll", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: studentData._id, course }),
      });
      const data = await response.json();
      dispatch({ type: "STUDENT_ENROLL_COURSE", payload: data });
      toast.success("Enrolled", {
        id: toastId,
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", {
        id: toastId,
        position: "top-center",
      });
      dispatch({ type: "STUDENT_ENROLL_COURSE_ERROR" });
    }
  }
};
