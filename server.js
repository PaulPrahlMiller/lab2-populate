const express = require("express");
const connection = require("./config/db");
const Course = require("./models/Course");
const Registration = require("./models/Registration");
const Student = require("./models/Student");

const app = express();

connection();

app.use(express.json());

app.post("/api/student", async (req, res) => {
  const { name } = req.body;
  const student = new Student({
    name,
  });
  const savedUser = await student.save();
  res.send(savedUser);
});

app.post("/api/course", async (req, res) => {
  const course = new Course({
    name: "Fullstack",
  });
  const savedCourse = await course.save();
  res.send(savedCourse);
});

app.post("/api/register", async (req, res) => {
  const { student_id, course_id } = req.body;

  const registration = new Registration({
    student: student_id,
    course: course_id,
  });
  const savedReg = await registration.save();
  res.send(savedReg);
});

// app.get("/api/register", async (req, res) => {
//   await Registration.find().then((result) => res.send(result));
// });

app.get("/api/register", async (req, res) => {
  Registration.find()
    .populate("student")
    .populate("course")
    .exec((err, result) => {
      res.send(result);
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running");
});
