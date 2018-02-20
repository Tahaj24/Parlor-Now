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
  var bookingTime = req.body.bookingTime;
  var parlorName = req.body.parlorName;
  var packageName = req.body.packageName;



  connection.query(
    
    "INSERT INTO booking ( bookingDate, bookingTime, parlorName, packageName) VALUES (?, ?, ?, ?)",
    [  bookingDate, bookingTime, parlorName, packageName], function (err, row, field) {

      if(err){
        console.log(err);
        res.send({'success': false, 'message': 'Could not connect to database'});
      }

      if(row.length > 0){
        res.send({'success': true, 'message': 'Booking is sent'});
      }

      else{
        res.send({'success': false, 'message': 'booking is sent'});
      }

    });
});

module.exports = router;