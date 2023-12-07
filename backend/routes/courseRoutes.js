const express = require("express");
const router = express.Router();

const { getCourses, getCourse } = require("../controllers/courseControllers");

router.route("/").get(getCourses);
router.route("/:id").get(getCourse);
// router.route("/enroll").put();
// router.route("/unenroll").put();

module.exports = router;
