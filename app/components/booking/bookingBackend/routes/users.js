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
  var bookingDate = req.body.bookingDate;
  var parlorName = req.body.parlorName;
  var packageName = req.body.packageName;


/*
  connection.query(
    
    "INSERT INTO booking ( bookingDate, parlorName, packageName) VALUES (?, ?, ?)",
    [  bookingDate, parlorName, packageName], function (err, row, field) {

      if(err){
        console.log(err);
        res.send({'success': false, 'message': 'Could not connect to database'});
      }

      if(row.length> 0){
        res.send({'success': true, 'message': 'Booking is sent'});
      }

      else{
        res.send({'success': false, 'message': 'booking is sent'});
      }

    });
});
*/
var sql = "INSERT INTO booking ( bookingDate, parlorName, packageName) VALUES ?";
var  values=[bookingDate, parlorName, packageName];
connection.query(sql,values, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });
});
module.exports = router;