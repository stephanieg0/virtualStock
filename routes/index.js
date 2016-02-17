'use strict';

const express = require('express');
const router = express.Router();

const home = require('./home');
const quote = require('./quote');
const portfolio = require('./portfolio');

router.use(home);
router.use(quote);
router.use(portfolio);

module.exports = router;
