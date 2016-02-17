'use strict';
//dependencies
const express = require('express');
const router = express.Router();
const request = require('request');

const url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=';

//route
router.get('/api', (req, res) => {

    res.render('index', {
    });
});

router.post('/api', (req, res) => {

  const symbol = req.body.symbolInput;
  console.log('symbol>>', symbol);

  const currentUrl = url + symbol;

  request.post(currentUrl , (err, response, body) => {
    if (err) throw err;

    const quoteData = JSON.parse(body);

    res.render('quotes', {
      quote: quoteData
    });
  });
});

module.exports = router;
