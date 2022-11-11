const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const routes = require('./routes/user.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;