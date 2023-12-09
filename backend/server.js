const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDB();

// ---------
const directory = path.resolve();
if (process.env.NODE_ENV === "PROD") {
  app.use(express.static(path.join(directory, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(directory, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello world");
  });
}
// ---------

app.use("/api/student", studentRoutes);
app.use("/api/courses", courseRoutes);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
