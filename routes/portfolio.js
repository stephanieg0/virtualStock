'use strict';
//dependencies
const express = require('express');
const router = express.Router();

const buyCtrl = require('../controllers/buy.js');

//getting route to load the jade file and the controller.
router.get('/portfolio', buyCtrl.index);

router.post('/potrfolio', buyCtrl.portfolio);


module.exports = router;
