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
  console.log(req.query)
  if (req.query.name) {
    connection.query('SELECT * from customers inner join companies on companies.company_name = customers.company_name where customers.first_name like ?', '%' + req.query.name + '%', function(err, rows, fields) {
      if (!err)
        res.send(rows);
      else
        res.send('Error while performing Query.');
    });
  } else {
    connection.query('SELECT * from customers inner join companies on companies.company_name = customers.company_name', function(err, rows, fields) {
      if (!err)
        res.send(rows);
      else
        res.send('Error while performing Query.');
    });
  }
});

router.get('/customerView/:customer_id', function (req, res, next) {
  connection.query('SELECT * from customers inner join companies on companies.company_name = customers.company_name where customer_id = ?', req.params.customer_id, function(err, customer, fields) {
    if (!err)
      connection.query('select * from comments where comments.customer_id = ?', req.params.customer_id, function(err, comments, fields) {
        if (!err) {
          // const newCustomer = new Customer(customer.customer_id,customer.firstName,customer.lastName,customer.company_name,customer.email,customer.phone,comments)
          res.send({customer:customer, comments:comments});
          // console.log({customer:customer, comments:comments})
        }
        else
          res.send('Error while performing Query.');
      });
    else
      res.send('Error while performing Query.');
  });
});

router.post('/', function (req, res, next) {
  connection.query('insert into customers set ?',req.body, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.delete('/:customer_id', function (req, res, next) {
  connection.query('delete from customers where customer_id = ?', req.params.customer_id, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

router.post('/customerView/:customer_id/addComment', function (req, res, next) {
  console.log(req.body);
  connection.query('insert into comments set ?',req.body, function(err, rows, fields) {
    if (!err)
      res.send(rows);
    else
      res.send('Error while performing Query.');
  });
});

module.exports = router;
