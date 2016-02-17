'use strict';

const express = require('express');
const router = express.Router();

const home = require('./home');
const quote = require('./quote');

router.use(home);
router.use(quote);

module.exports = router;
