const asyncHandler = require("express-async-handler");

const CourseModel = require("../models/courseModel");

const getCourses = asyncHandler(async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    res.status(200).json(courses);
  } catch {
    res.status(500).send({
      status: 500,
      message: "Something went wrong. Try again later",
    });
  }
});

const getCourse = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseModel.findById(id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Something went wrong. Try again later",
    });
  }
});

module.exports = { getCourses, getCourse };
