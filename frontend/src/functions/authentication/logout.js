import toast from "react-hot-toast";

export const logout = (dispatch, navigate) => {
  dispatch({ type: "STUDENT_LOGOUT" });
  toast.success("Logged Out");
  navigate("/");
};
