import toast from "react-hot-toast";

export const unenrollCourse = async (
  dispatch,
  studentData,
  course,
  navigate
) => {
  dispatch({ type: "STUDENT_UNENROLL_COURSE_LOADING" });
  const toastId = toast.loading("Registering", {
    position: "top-center",
  });
  try {
    const response = await fetch("/api/student/unenroll", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: studentData._id, course }),
    });
    const data = await response.json();
    dispatch({ type: "STUDENT_UNENROLL_COURSE", payload: data });
    toast.success("Un-Enrolled", {
      id: toastId,
      position: "top-center",
    });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong", {
      id: toastId,
      position: "top-center",
    });
    dispatch({ type: "STUDENT_UNENROLL_COURSE_ERROR" });
  }
};
