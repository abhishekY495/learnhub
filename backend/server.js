const express = require("express");
const dotenv = require("dotenv");

const courses = require("./data/courses");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.use("/api/student", studentRoutes);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
