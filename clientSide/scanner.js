var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'TheCodeSpace_inventory',
    port: '8889'
});


prompt.start();
connection.connect();

function stuff() {
    prompt.get(['userCode', 'productCode'], function(err, result) {
        var productCodeString = result.productCode.replace('P', '');
        var productCode = parseInt(productCodeString);
        var requestType = result.userCode.charAt(0);
        var q;
        if (requestType == 'I') {
            q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1, `Out`=`Out`-1 WHERE id=" + productCode.toString();
        } else if (requestType == 'U') {
            q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`-1, `Out`=`Out`+1 WHERE id=" + productCode.toString();
        }
        console.log(productCode, result.userCode, requestType);
        connection.query(q, function(err, rows, fields) {
            console.log(err);
        });
    });
    connection.end();
    prompt.stop();
}
stuff();
