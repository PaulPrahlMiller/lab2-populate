const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/populate";

function connectDB() {
  try {
    mongoose.connect(URL, () => console.log("DB connected"));
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
