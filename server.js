'use strict';
//dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/');

const PORT = process.env.PORT || 3000;

//setting jade files
app.set('view engine', 'jade');
//parsing data to send to dom
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});
