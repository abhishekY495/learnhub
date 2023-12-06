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
    });
  } else {
    return res.status(401).json({
      status: 401,
      message: "Wrong Password",
    });
  }
});

module.exports = { registerStudent, loginStudent };
