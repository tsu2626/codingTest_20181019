var express = require('express');
var router = express.Router();

let https = require('https');
// Bitcoin のレートを json で取得することができるAPI
const BTC = "https://coincheck.com/api/rate/btc_jpy";

https.get(BTC, function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('data', function (chunk) {
        // body の値を json としてパースしている
        res = JSON.parse(body);
      });
});

const ETH = "https://coincheck.com/api/rate/eth_jpy";

https.get(ETH, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
      body += chunk;
  });
  res.on('data', function (chunk) {
      // body の値を json としてパースしている
      res = JSON.parse(body);
    });
});

const XRP = "https://coincheck.com/api/rate/xrp_jpy";

https.get(XRP, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
      body += chunk;
  });
  res.on('data', function (chunk) {
      // body の値を json としてパースしている
      res = JSON.parse(body);
  });
});
router.get('/', (req, res, next) => {
  res.render('top', {
    title: 'TOP',
    rate: `${res.rate}`
  });
});

module.exports = router;