import { createContext, useReducer } from "react";

import { courseReducer, initialState } from "../reducers/courseReducer";

export const CourseContext = createContext();
export const CourseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);

  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};
