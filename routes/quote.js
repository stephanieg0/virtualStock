'use strict';
//dependencies
const express = require('express');
const router = express.Router();

const quoteCtrl = require('../controllers/getquote.js');

//getting route to load the jade file and the controller.
router.get('/quote', quoteCtrl.index);

router.post('/quote', quoteCtrl.getquote);


module.exports = router;
