const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructors: { type: Array, required: true },
    thumbnail: { type: String, required: true },
    duration: { type: String, required: true },
    requirements: { type: Array, required: true },
    syllabus: { type: Array, required: true },
    enrolledStudents: { type: Array, required: true },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
