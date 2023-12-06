import { createContext, useReducer } from "react";

import { initialState, studentReducer } from "../reducers/studentReducer";

export const StudentContext = createContext();
export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
