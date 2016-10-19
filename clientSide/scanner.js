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
    var adminMode = false;
    var done = false;
    var quantity = readlineSync.question('Quantity: ');

    if (requestType == 'I') {
        q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+" + quantity + ", `Out`=`Out`-" + quantity + " WHERE id=" + productCode.toString();
    } else if (requestType == 'U') {
        q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`-" + quantity + ", `Out`=`Out`+" + quantity + " WHERE id=" + productCode.toString();
    } else {
        //
        //ADMIN MODE
        if (userCode == 'ADM1N') {
            console.log('\n==[ ADMIN MODE ACTIVATED ]==');
            adminMode = true;
            var userCode = readlineSync.question('User code: ');
            var requestType = userCode.charAt(0);
            if (requestType == 'Q') {
                quantity = readlineSync.question('Quantity: ');
            } else if (requestType == 'I') {
                q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+" + quantity + " WHERE id=" + productCode.toString();
            } else if (requestType == 'U') {
                q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+" + quantity + " WHERE id=" + productCode.toString();
            } else {
                console.log('error');
                connection.end();
            }
        }
    }
    var date = new Date();
    console.log(date);
    console.log(productCode, userCode, quantity);
    var userCodeParsed = userCode.substring(1);
    connection.query("INSERT INTO `TheCodeSpace_inventory_history` (`User`, `Product`, `Quantity`, `Action`, `Admin`, `Date`) VALUES (" + userCodeParsed + ", " + productCode + ", " + quantity + ", '" + requestType + "', " + adminMode + ", '" + date + "');", function(err, rows, fields) {
        if (err) {
            console.log(err);
        }
    });
    //console.log("INSERT INTO `TheCodeSpace_inventory_history` (`User`, `Product`, `Quantity`, `Action`, `Admin`, `Date`) VALUES (" + userCodeParsed + ", " + productCode + ", " + quantity + ", '" + requestType + "', " + adminMode + ", '" + date + "')");

    connection.query(q, function(err, rows, fields) {
        if (!err) {
            console.log('done');
            done = true;
        }
        again = readlineSync.question('again? [y/n]');
        if (again == 'y') {
            stuff();
        } else if (again == 'n') {
            connection.end();
        } else {
            console.log('error');
        }
    });

}
stuff();
