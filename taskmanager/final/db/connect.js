const mongoose = require("mongoose");

// mongodb atlas connection string contain username and password and database name

// url is a parameter
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected successfully");
    })
    .catch((err) => {
      console.error("Error:", err);
    });
};

module.exports = connectDB;
//mongoose.connect() method returns a promise
