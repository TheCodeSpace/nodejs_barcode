var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'TheCodeSpace_inventory',
  port     : '8889'
});


prompt.start();
connection.connect();

prompt.get(['pCode', 'usrCode'], function (err, result) {
  if (err) { return onErr(err); }
  var pCodeString = result.pCode.replace('P', '');
  var pCode = parseInt(pCodeString);
  var requestType = result.usrCode.charAt(0);
  var q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1 WHERE id=" + pCode.toString();

  console.log(pCode, result.usrCode, requestType);
  connection.query(q, function(err, rows, fields) {
  });
});
