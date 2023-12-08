const express = require("express");
const router = express.Router();

const {
  registerStudent,
  loginStudent,
  enrollCourse,
  unenrollCourse,
} = require("../controllers/studentControllers");

router.route("/register").post(registerStudent);
router.route("/login").post(loginStudent);
router.route("/enroll").put(enrollCourse);
router.route("/unenroll").put(unenrollCourse);

module.exports = router;
