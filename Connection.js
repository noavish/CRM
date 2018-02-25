
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : '1234',
  database : 'crm'
});

connection.connect();

module.exports = connection;
