var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : '1234',
  database : 'crm'
});

/* GET home page. */
connection.connect();


router.get('/', function (req, res, next) {
  connection.query('SELECT company_id, companies.company_name, address, country, IfNull(customer_count.customer_amount, 0) as customer_amount  from companies left join (select company_name, count(*) customer_amount from customers group by company_name) as customer_count on customer_count.company_name = companies.company_name', function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
  // connection.end();
});

router.post('/', function (req, res, next) {
  connection.query('insert into companies set ?',req.body, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.get('/names', function (req, res, next) {
  connection.query('select company_name from companies', function(err, rows, fields) {
    console.log(rows)
    if (!err)
      res.send(rows);

    else
      res.send('Error while performing Query.');
  });
  // connection.end();
});

router.delete('/:company_id', function (req, res, next) {
  console.log(req.params.company_id)
  connection.query('delete from companies where company_id = ?', [req.params.company_id], function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

module.exports = router;
