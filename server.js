'use strict';
//dependencies
const express = require('express');
const route = express();

const PORT = process.env.PORT || 3000;

//setting jade files
route.set('view engine', 'jade');

route.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});
