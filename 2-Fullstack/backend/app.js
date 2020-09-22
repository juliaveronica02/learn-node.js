var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter = require("./routes/book")

var app = express();

app.use(cors());
// has block by cors.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use("/public/images", express.static("public/images"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', bookRouter);

module.exports = app;