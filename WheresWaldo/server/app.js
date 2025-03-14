var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = express.Router();
require("dotenv").config();
const mongoose = require("mongoose");
const Score = require("./models/score.js");

var indexRouter = require("./routes/index");

var app = express();
let allowedOrigins = ["http://localhost:5173", ""];
app.use(cors({ origin: allowedOrigins, credentials: true }));

const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

//Connects to mongodb
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_KEY;
console.log(mongoDB);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
