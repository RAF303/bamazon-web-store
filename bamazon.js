var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "21batmaN",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    readProducts()
});

function askPrompt() {
    inquirer.prompt([{
            type: "input",
            name: "ID",
            message: "Whats the item ID",
        },
        {
            type: "input",
            name: "howMany",
            message: "How many would you like",
        }


    ]).then(function (anwser) {
        console.log("----------", anwser)
        purchase(anwser)
    })
}

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        askPrompt()
    });
}

function purchase(userInput) {
    connection.query("SELECT * FROM products where id=" + userInput.ID, function (err, res) {
        if (err) throw err;
        console.log("-------purchase--------", res);
        if (res[0].stock_quantity >= userInput.howMany) {
            var newTotal = res[0].stock_quantity - parseInt(userInput.howMany);
            var command = "update products set stock_quantity =" + newTotal + " where id =" + userInput.ID;
            var newPrice = res[0].price * parseInt(userInput.howMany);
            var priceCom = "You spent =" + newPrice
            connection.query(command, priceCom, function (err, res) {
                console.log(res, "**************")
                setTimeout(function () {
                    readProducts()
                }, 8000)
            })
            console.log("-----", command, priceCom)
        } else {
            console.log("not enough in stock")
            setTimeout(function () {
                readProducts()
            }, 8000)
        }
    });
}