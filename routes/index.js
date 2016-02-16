'use strict';

const express = require('express');
const router = express.Router();

const home = require('./home');
const api = require('./api');

router.use(home);
router.use(api);

module.exports = router;
