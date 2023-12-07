const express = require("express");
const router = express.Router();

const {
  registerStudent,
  loginStudent,
} = require("../controllers/studentControllers");

router.route("/register").post(registerStudent);
router.route("/login").post(loginStudent);

module.exports = router;
