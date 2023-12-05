const express = require("express");
const courses = require("./data/courses");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((course) => course.courseId === req.params.id);
  res.send(course);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
