const localStudentData = JSON.parse(localStorage.getItem("studentData"));

export const initialState = {
  studentData: localStudentData || null,
  loading: false,
  error: false,
  enrollLoading: false,
  enrollError: false,
  unenrollLoading: false,
  unenrollError: false,
};

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "STUDENT_DATA_LOADING": {
      return { ...state, loading: true };
    }
    case "STUDENT_DATA_ERROR": {
      return { ...state, loading: false, error: true };
    }
    case "STUDENT_DATA": {
      const studentData = action.payload;
      localStorage.setItem("studentData", JSON.stringify(studentData));
      return {
        ...state,
        loading: false,
        studentData: studentData,
      };
    }
    case "STUDENT_LOGOUT": {
      localStorage.clear();
      return { ...state, studentData: null };
    }
    case "STUDENT_ENROLL_COURSE_LOADING": {
      return {
        ...state,
        enrollLoading: true,
      };
    }
    case "STUDENT_ENROLL_COURSE_ERROR": {
      return {
        ...state,
        enrollLoading: false,
        enrollError: true,
      };
    }
    case "STUDENT_ENROLL_COURSE": {
      localStorage.setItem("studentData", JSON.stringify(action.payload));
      return {
        ...state,
        studentData: action.payload,
      };
    }
    case "STUDENT_ENROLL_COURSE_LOADING": {
      return {
        ...state,
        unenrollLoading: true,
      };
    }
    case "STUDENT_ENROLL_COURSE_ERROR": {
      return {
        ...state,
        unenrollLoading: false,
        unenrollError: true,
      };
    }
    case "STUDENT_UNENROLL_COURSE": {
      localStorage.setItem("studentData", JSON.stringify(action.payload));
      return {
        ...state,
        studentData: action.payload,
      };
    }
    default:
      return state;
  }
};
