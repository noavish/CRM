var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var customers = require('./routes/customers');
var companies = require('./routes/companies');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/api/customers', customers);
app.use('/api/companies', companies);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : '1234',
  database : 'crm'
});

connection.connect();

module.exports = app;
