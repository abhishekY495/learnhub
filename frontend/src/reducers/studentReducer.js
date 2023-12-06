const localStudentData = JSON.parse(localStorage.getItem("studentData"));

export const initialState = {
  studentData: localStudentData || null,
  loading: false,
  error: false,
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
    default:
      return state;
  }
};
