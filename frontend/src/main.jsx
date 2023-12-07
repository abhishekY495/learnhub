import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StudentContextProvider } from "./contexts/StudentContext.jsx";
import { CourseContextProvider } from "./contexts/CourseContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CourseContextProvider>
        <StudentContextProvider>
          <App />
        </StudentContextProvider>
      </CourseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
