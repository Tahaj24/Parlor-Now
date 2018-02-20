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
router.post('/', function(req, res, next) {
  var customerName = req.body.customerName;
  var customerEmail = req.body.customerEmail;
  var customerPassword = req.body.customerPassword;
  var customerNumber = req.body.customerNumber;



  connection.query(
    
    "INSERT INTO customer ( customerName, customerEmail, customerPassword, customerNumber) VALUES (?, ?, ?, ?)",
    [  customerName, customerEmail, customerPassword, customerNumber], function (err, row, field) {

      if(err){
        console.log(err);
        res.send({'success': false, 'message': 'Could not connect to database'});
      }

      if(row.length > 0){
        res.send({'success': true, 'message': 'Booking is sent'});
      }

      else{
        res.send({'success': false, 'message': 'WELCOME TO PARLORNOW'});
      }

    });
});

module.exports = router;