var express = require('express');
var router = express.Router();
var mysql = require('mysql');  

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'parlornow'
});
//alert("in db"),
/* GET users listing. */
connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... nn");
  } else {
      console.log("Error connecting database ... nn");
  }
  });


router.post('/', function(req, res, next) {
  console.log("error here");
  var appData = {
    error: 1,
    data: ''
  };

 
  var customerName = req.body.customerName;
   var customerEmail = req.body.customerEmail;
   var customerPassword = req.body.customerPassword;
  var customerNumber = req.body.customerNumber;
  console.log(customerName);
  /*database.connection.getConnection(function(err, connection) {
    if (err) {
    appData['error'] = 1;
    appData['data'] = 'Internal Server Error';
    res.status(500).json(appData);
    } 
    else
    {
    connection.query("INSERT INTO customer ( customerName, customerEmail, customerPassword, customerNumber) VALUES (?, ?, ?, ?)",
    [  customerName, customerEmail, customerPassword, customerNumber], function(err, rows, fields) {
    if (!err) {
    appData.error = 0;
    appData['data'] = 'User registered successfully!';
    res.status(201).json(appData);
    } else {
    appData['data'] = 'Error Occured!';
    res.status(400).json(appData);
    }
    
    });
    connection.release();
 }
 });
});
  
  
module.exports = router; */
 


var sql = "INSERT INTO customer ( customerName, customerEmail, customerPassword, customerNumber) VALUES ('faraz','faraz@gmail.com',123456,6789543)";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });
});

module.exports = router;