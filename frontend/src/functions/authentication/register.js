import toast from "react-hot-toast";

import { validEmail } from "../../utils/validEmail";

export const register = async (name, email, password, dispatch, navigate) => {
  if (name.trim().length === 0) {
    toast.error("Name cannot be empty");
  } else if (email.trim().length === 0) {
    toast.error("Email cannot be empty");
  } else if (!validEmail(email)) {
    toast.error("Invalid Email");
  } else if (password.trim().length === 0) {
    toast.error("Password cannot be empty");
  } else {
    const toastId = toast.loading("Registering", {
      position: "top-center",
    });
    dispatch({ type: "STUDENT_DATA_LOADING" });
    try {
      const response = await fetch("/api/student/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.message === "Email Already Exists") {
        toast.error(data.message, {
          id: toastId,
          position: "top-center",
        });
      } else {
        dispatch({ type: "STUDENT_DATA", payload: data });
        toast.success("Registered successfully", {
          id: toastId,
          position: "top-center",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong \n Try again later", {
        id: toastId,
        position: "top-center",
      });
      dispatch({ type: "STUDENT_DATA_ERROR" });
    }
  }
};
