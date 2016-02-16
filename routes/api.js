'use strict';
//dependencies
const express = require('express');
const router = express.Router();
const request = require('request');

//route
router.get('/api', (req, res) => {
  const url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=AAPL';
  request.get(url, (err, response, body) => {
    if (err) throw err;
    res.header('Access-Control-Allow-Origin', '*');

    const quoteData = JSON.parse(body);

    res.render('quotes', {
      date: new Date(),
      quote: quoteData
    });
  });
});

module.exports = router;
