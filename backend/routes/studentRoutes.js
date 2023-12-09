const express = require("express");
const router = express.Router();

const {
  registerStudent,
  loginStudent,
  enrollCourse,
  unenrollCourse,
  toggleMarkAsDoneTopic,
} = require("../controllers/studentControllers");

router.route("/register").post(registerStudent);
router.route("/login").post(loginStudent);
router.route("/enroll").put(enrollCourse);
router.route("/unenroll").put(unenrollCourse);
router.route("/toggleMarkAsDoneTopic").put(toggleMarkAsDoneTopic);

module.exports = router;
