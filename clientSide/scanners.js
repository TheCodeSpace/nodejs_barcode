var mysql = require('mysql');
var prompt = require('prompt');
var readlineSync = require('readline-sync');
var quantity = 1;
var adminMode = false;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'TheCodeSpace_inventory',
    port: '3306'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

function userCodeFunc() {
    var userCode = readlineSync.question('User code: ');
    var requestType = userCode.charAt(0);

    if (requestType == 'I') {
        mainIFunc();
    } else if (requestType == 'U') {
        mainUFunc();
    } else {
        console.log('error');
        process.exit(1);
    }


    if (userCode == 'ADM1N') {
        console.log('\n==[ ADMIN MODE ACTIVATED ]==');
        adminMode = true;
        var userCode = readlineSync.question('User code: ');
        var requestType = userCode.charAt(0);

        if (requestType == 'I') {
            mainIFunc();
        } else if (requestType == 'U') {
            mainUFunc();
        } else {
            console.log('error');
            process.exit(1);
        }
    }
    connection.query(q, function(err, rows, fields) {
        if (err) {
            console.log(err);
        }
    });
}


function mainIFunc() {
    var productCodeIn = readlineSync.question('Product code: ');
    var productCodeString = productCodeIn.replace('P', '');
    var productCode = parseInt(productCodeString);
    var q;
    var done = false;
    var quantity = '1';


    q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`+" + quantity + ", `Out`=`Out`-" + quantity + " WHERE id=" + productCode.toString();

    var date = new Date();
    var userCodeParsed = userCode.substring(1);
    connection.query("INSERT INTO `TheCodeSpace_inventory_history` (`User`, `Product`, `Quantity`, `Action`, `Admin`, `Date`) VALUES (" + userCodeParsed + ", " + productCode + ", " + quantity + ", '" + requestType + "', " + adminMode + ", '" + date + "')", function(err, rows, fields) {
        if (err) {
            console.log(err);
        }
    });
    mainIFunc();
}

function mainUFunc() {
    var productCodeIn = readlineSync.question('Product code: ');
    var productCodeString = productCodeIn.replace('P', '');
    var productCode = parseInt(productCodeString);
    var q;
    var done = false;
    var quantity = '1';


    q = "UPDATE `TheCodeSpace_inventory_overview` SET `In`=`In`-" + quantity + ", `Out`=`Out`+" + quantity + " WHERE id=" + productCode.toString();

    var date = new Date();
    var userCodeParsed = userCode.substring(1);
    connection.query("INSERT INTO `TheCodeSpace_inventory_history` (`User`, `Product`, `Quantity`, `Action`, `Admin`, `Date`) VALUES (" + userCodeParsed + ", " + productCode + ", " + quantity + ", '" + requestType + "', " + adminMode + ", '" + date + "')", function(err, rows, fields) {
        if (err) {
            console.log(err);
        }
    });

    mainUFunc();
}
