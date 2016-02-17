'use strict';

//const request = require('request');

module.exports.index = (req, res) => {
  console.log('index module>>', req.body);
  res.render('portfolio', {
  });
};

//module.exports.portfolio = (req, res) => {
  //console.log('port module', req.body);
//};
