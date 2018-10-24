var express = require('express');
var router = express.Router();

let https = require('https');

const XRP = "https://coincheck.com/api/rate/xrp_jpy";

var state = {};

https.get(XRP, (res) => {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', (chunk) => {
      state = JSON.parse(body);
      console.log(`現在のレートは${state.rate}円/XRP`);
    })
  }).on('error', (e) => {
    console.log(e.message);
});

router.get('/', (req, res, next) => {
  res.render('top', {
    title: 'TOP',
    rate: `現在のレートは${state.rate}円/XRP`
  });
});

module.exports = router;