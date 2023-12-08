const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const studentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrolledCourses: { type: Array, required: true },
  },
  { timestamps: true }
);

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

studentSchema.methods.checkPassword = async function (userPassword) {
  return await bcryptjs.compare(userPassword, this.password);
};

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
