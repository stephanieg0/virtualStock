'use strict';
//dependencies
const request = require('request');

const url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=';

module.exports.index = (req, res) => {
  res.render('index', {
    });
};

module.exports.getquote = (req, res) => {

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
};
