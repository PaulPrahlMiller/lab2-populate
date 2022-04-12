const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  registration_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
