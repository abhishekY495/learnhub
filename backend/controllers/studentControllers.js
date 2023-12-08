const asyncHandler = require("express-async-handler");

const StudentModel = require("../models/studentModel");

const registerStudent = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // if empty
  if (!name || !email || !password) {
    res.status(400).send({
      status: 400,
      message: "Enter All Fields",
    });
    throw new Error("Enter All Fields");
  }

  // if student exists
  const studentExists = await StudentModel.findOne({ email });
  if (studentExists) {
    res.status(400).send({
      status: 400,
      message: "Email Already Exists",
    });
    throw new Error("Email Already Exists");
  }

  // new student registration
  const newStudent = await StudentModel.create({
    name,
    email,
    password,
  });
  if (newStudent) {
    res.status(201);
    res.json({
      _id: newStudent._id,
      name: newStudent.name,
      email: newStudent.email,
      enrolledCourses: newStudent.enrolledCourses,
    });
  } else {
    res.status(500).send({
      status: 500,
      message: "Something went wrong. Try again later",
    });
    throw new Error("Something went wrong. Try again later");
  }
});

const loginStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // if empty
  if (!email || !password) {
    res.status(400).send({
      status: 400,
      message: "Enter All Fields",
    });
    throw new Error("Email Does not Exist");
  }

  const student = await StudentModel.findOne({ email });
  if (!student) {
    res.status(400).send({
      status: 400,
      message: "Email Does not Exist",
    });
    throw new Error("Email Does not Exist");
  }

  if (student && (await student.checkPassword(password))) {
    res.status(200);
    res.json({
      _id: student._id,
      name: student.name,
      email: student.email,
      enrolledCourses: student.enrolledCourses,
    });
  } else {
    return res.status(401).json({
      status: 401,
      message: "Wrong Password",
    });
  }
});

const enrollCourse = asyncHandler(async (req, res) => {
  try {
    const { id, course } = req.body;
    const student = await StudentModel.findById(id);

    if (!student) {
      return res.status(400).json({ message: "Cannot find student" });
    }

    const courseEnrolledCheck = student.enrolledCourses.some(
      ({ courseId }) => courseId === course._id
    );

    if (courseEnrolledCheck) {
      return res.status(400).json({ message: "Already Enrolled" });
    }

    if (student && !courseEnrolledCheck) {
      student.enrolledCourses = [
        ...student.enrolledCourses,
        {
          courseId: course._id,
          title: course.title,
          description: course.description,
          thumbnail: course.thumbnail,
          syllabus: course.syllabus,
          isCompleted: false,
        },
      ];
      const updatedStudentData = await student.save();
      res.json({
        _id: updatedStudentData._id,
        name: updatedStudentData.name,
        email: updatedStudentData.email,
        enrolledCourses: updatedStudentData.enrolledCourses,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: "Something went wrong. Try again later",
    });
  }
});

const unenrollCourse = asyncHandler(async (req, res) => {
  try {
    const { id, course } = req.body;
    const student = await StudentModel.findById(id);

    if (!student) {
      return res.status(400).json({ message: "Cannot find student" });
    }

    const courseExistsCheck = student.enrolledCourses.some(
      ({ courseId }) => courseId === course.courseId
    );

    if (!courseExistsCheck) {
      return res.status(400).json({ message: "Course not found" });
    }

    if (student && courseExistsCheck) {
      student.enrolledCourses = student.enrolledCourses.filter(
        ({ courseId }) => courseId !== course.courseId
      );
      const updatedStudentData = await student.save();
      res.json({
        _id: updatedStudentData._id,
        name: updatedStudentData.name,
        email: updatedStudentData.email,
        enrolledCourses: updatedStudentData.enrolledCourses,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: "Something went wrong. Try again later",
    });
  }
});

module.exports = {
  registerStudent,
  loginStudent,
  enrollCourse,
  unenrollCourse,
};
