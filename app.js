'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var topRouter = require('./routes/top');
var request = require('request');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/top', topRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// let https = require('https');
// // Bitcoin のレートを json で取得することができるAPI
// const BTC = "https://coincheck.com/api/rate/btc_jpy";

// https.get(BTC, function (res) {
//     var body = '';
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//         body += chunk;
//     });
//     res.on('data', function (chunk) {
//         // body の値を json としてパースしている
//         res = JSON.parse(body);
//         console.log(`現在のレートは${res.rate}円/BTC`);

//     })
//   }).on('error', function (e) {
//     console.log(e.message);
// });

// const ETH = "https://coincheck.com/api/rate/eth_jpy";

// https.get(ETH, function (res) {
//   var body = '';
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//       body += chunk;
//   });
//   res.on('data', function (chunk) {
//       // body の値を json としてパースしている
//       res = JSON.parse(body);
//       console.log(`現在のレートは${res.rate}円/ETH`);

//   })
// }).on('error', function (e) {
//   console.log(e.message);
// });

// const XRP = "https://coincheck.com/api/rate/xrp_jpy";

// https.get(XRP, function (res) {
//   var body = '';
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//       body += chunk;
//   });
//   res.on('data', function (chunk) {
//       // body の値を json としてパースしている
//       res = JSON.parse(body);
//       console.log(`現在のレートは${res.rate}円/XRP`);

//   })
// }).on('error', function (e) {
//   console.log(e.message);
// });

module.exports = app;
