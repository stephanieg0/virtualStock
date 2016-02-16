'use strict';

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/api', (req, res) => {
  const url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=AAPL';

  request.get(url, (err, response, body) => {
    if (err) throw err;
    console.log('request is working');
    res.header('Access-Control-Allow-Origin', '*');
    res.send(JSON.parse(body));
  });
});

module.exports = router;
