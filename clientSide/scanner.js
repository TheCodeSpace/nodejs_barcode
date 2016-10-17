var mysql = require('mysql');
var prompt = require('prompt');
var readlineSync = require('readline-sync');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'TheCodeSpace_inventory',
    port: '8889'
});

connection.connect();

function stuff() {
        var productCodeIn = readlineSync.question('Product code: ');
        var productCodeString = productCodeIn.replace('P', '');
        var productCode = parseInt(productCodeString);
        var userCode = readlineSync.question('User code: ');
        var requestType = userCode.charAt(0);
        var q;
        if (requestType == 'I') {
            q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1, `Out`=`Out`-1 WHERE id=" + productCode.toString();
        } else if (requestType == 'U') {
            q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`-1, `Out`=`Out`+1 WHERE id=" + productCode.toString();
        }
        console.log(productCode, userCode, requestType);
        connection.query(q, function(err, rows, fields) {
            console.log('done');
        });
        var again = readlineSync.question('again? [y/n]');
        if (again == 'y') {
          stuff();
        }
        else if (again == 'n') {
          connection.end();
        }
        else {
          console.log('error');
        }
    }
stuff();
