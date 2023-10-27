const express = require("express");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
const staffrouter = require("./router/router.js");

const url = "mongodb://localhost:27017/staff_db";

const app = express();
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology:true});
const conn = mongoose.connection;

//arrow funtion
conn.on("open", () => {
  console.log("connected...");
});

//json setup
app.use(bodyparser.json()); // Parse JSON-encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // Parse URL-encoded bodies

//router setup
app.use("/user", staffrouter);

// function
app.listen(5000, function () {
  console.log('Server started');
});

