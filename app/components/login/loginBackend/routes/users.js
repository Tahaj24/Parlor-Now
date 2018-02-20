var express = require('express');
var router = express.Router();
var mysql = require('mysql');  

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'parlornow'
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    var customerName = req.body.customerName;
    var customerPassword = req.body.customerPassword;

    connection.query(
      //alert("in db"),
      "SELECT * FROM customer WHERE customerName = ? AND customerPassword =?",
      [customerName, customerPassword], function (err, row, field) {

        if(err){
          console.log(err);
          res.send({'success': false, 'message': 'Could not connect to database'});
        }

        if(row.length > 0){
          res.send({'success': true, 'user': row[0].username});
        }

        else{
          res.send({'success': false, 'message': 'user not found'});
        }

      });
});

module.exports = router;
