var mysql = require('mysql');
var prompt = require('prompt');
var readlineSync = require('readline-sync');
var ip = 'localhost'
var usr = 'root'
var psw = 'root'
var prt = '8889'

var connection = mysql.createConnection({
    host: ip,
    user: usr,
    password: psw,
    database: 'TheCodeSpace_inventory',
    port: prt
});

connection.connect();

function stuff() {
        var productCodeIn = readlineSync.question('Product code: ');
        var productCodeString = productCodeIn.replace('P', '');
        var productCode = parseInt(productCodeString);
        var userCode = readlineSync.question('User code: ');
        var userCodeParsed = userCode.substring(1);
        var requestType = userCode.charAt(0);
        var q;
        var adminMode = false;
        var done = false;
        if (requestType == 'I') {
            q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1, `Out`=`Out`-1 WHERE id=" + productCode.toString();
        } else if (requestType == 'U') {
            q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`-1, `Out`=`Out`+1 WHERE id=" + productCode.toString();
        }
        else {
          //
          //ADMIN MODe
          if (userCode == 'ADM1N') {
            console.log('\n==[ ADMIN MODE ACTIVATED ]==');
            adminMode = true;
            var userCode = readlineSync.question('User code: ');
            var requestType = userCode.charAt(0);
            if (requestType == 'I') {
                q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1 WHERE id=" + productCode.toString();
            } else if (requestType == 'U') {
                q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+1 WHERE id=" + productCode.toString();
            }
            else {
              console.log('error');
              connection.end();
            }
          }
        }
        console.log(productCode, userCode, requestType);
        connection.query(q, function(err, rows, fields) {
            if (!err) {
              console.log('done');
              done = true;
            }
            again = readlineSync.question('again? [y/n]');
            if (again == 'y') {
              stuff();
            }
            else if (again == 'n') {
              connection.end();
            }
            else {
              console.log('error');
            }
        });
        connection.query("INSERT INTO TheCodeSpace_inventory_history (User, Product, Action, Admin) VALUES (" + userCodeParsed + ", " + productCode + ", " + requestType + ", " + adminMode + ")", err, rows, fields){});

    }
stuff();
