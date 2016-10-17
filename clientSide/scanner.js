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

prompt.get(['userCode', 'productCode'], function (err, result) {
  if (err) { return onErr(err); }
  var productCodeString = result.productCode.replace('P', '');
  var productCode = parseInt(productCodeString);
  var requestType = result.userCode.charAt(0);
  var q;
  while (1) {


  if(requestType == 'I'){
    q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1, `Out`=`Out`-1 WHERE id=" + productCode.toString();
  }
  else if (requestType == 'U') {
    q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`-1, `Out`=`Out`+1 WHERE id=" + productCode.toString();
  }
  else {
    if (result.userCode == 'ADM1N') {
      console.log('===[ ADMIN MODE ACTIVATED ]===');
      prompt.get(['userCode', 'productCode'], function (err, result) {
        if (err) { return onErr(err); }
        var productCodeString = result.productCode.replace('P', '');
        var productCode = parseInt(productCodeString);
        var requestType = result.userCode.charAt(0);
        var q;

        if(requestType == 'I'){
          q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1 WHERE id=" + productCode.toString();
        }
        else if (requestType == 'U') {
          q = "UPDATE `TheCodeSpace_inventory_overview` SET `Out`=`Out`+1 WHERE id=" + productCode.toString();
        }
        else {
          return 0;
        }
    });
  }
  console.log(productCode, result.userCode, requestType);
  connection.query(q, function(err, rows, fields) {
  });
});
}
