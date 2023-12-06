const express = require("express");

const {
  registerStudent,
  loginStudent,
} = require("../controllers/studentControllers");

const router = express.Router();

router.route("/register").post(registerStudent);
router.route("/login").post(loginStudent);

module.exports = router;
