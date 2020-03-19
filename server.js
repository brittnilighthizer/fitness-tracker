const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// const PORT = 3000;
var PORT = process.env.PORT || 3000;

var localDb= "mongodb://localhost/workout"


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://brittnilighthizer:Virathehusky4!@ds061278.mlab.com:61278/heroku_vkbwdxtk", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});