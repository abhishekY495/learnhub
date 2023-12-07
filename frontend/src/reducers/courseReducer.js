export const initialState = {
  courseData: [],
  loading: false,
  error: false,
};

export const courseReducer = (state, action) => {
  switch (action.type) {
    case "COURSE_DATA_LOADING": {
      return { ...state, loading: true };
    }
    case "COURSE_DATA_ERROR": {
      return { ...state, loading: false, error: true };
    }
    case "COURSE_DATA": {
      const courseData = action.payload;
      return {
        ...state,
        loading: false,
        courseData: courseData,
      };
    }
    default:
      return state;
  }
};
