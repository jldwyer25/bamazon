var mysql = require("mysql");
var inquirer = require("inquirer");
 
// call once somewhere in the beginning of the app
//https://www.npmjs.com/package/console.table
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "jimmydwyer",
    password:"Sn00ganss!23",
    database: "bamazonDB"
});

var stock;
var newStock;

function start() {
// connect to the mysql server and sql database
connection.query(
    'SELECT * FROM products', function(err, results) {
    if (err) throw err;
            // Console log table from bamazonDB
            console.table(results);
            // Define choice array to add products
            var choiceArr = [];
            //create choices for each item
            for (var i = 0; i < results.length; i++){
                choiceArr.push(results[i].product_name)
            }
        //begin asking the questions for input
        inquirer.prompt([
            {
                type: 'list',
                message: 'Welcome to Bamazon, which item ID would you like to purchase?',
                name: 'item',
                choices: choiceArr
            },
            {
                type: 'input',
                message: 'How many would you like to buy?',
                name: 'buy'
            }
    ])
    .then(function(answer){
        //compare stock quanity with user choice
        stock = results[choiceArr.indexOf(answer.item)].stock_quantity;
        //new stock variable to represent subtraction once purchased
        newStock = stock - answer.buy;
        //update tables with new stock
        if (answer.buy <= stock){
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: newStock
                    },
                    {
                        product_name: answer.item
                    }
                ],
                function(err){
                    if(err) throw err;

                    var cost = results[choiceArr.indexOf(answer.item)].price
                    var totalCost = cost * answer.buy;
                    console.log('Thanks for your purchase!');
                    console.log("This is the cost: " + cost);
                    console.log("This was the answer: " + answer.buy);
                    console.log("Your total is: $" + totalCost);
                    //prompt the user if they're still shopping
                    shopping();
                }
            );
        } else if (answer.buy > stock){
            console.log("Insufficient Stock!");
            shopping();
        }
      });
    }
  ); 
};

start();

function shopping () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Still shopping?',
            name: 'stillshopping',
            choices: ['yes', 'no']
        }
    ]).then(function(answer){
        if (answer.stillshopping === 'yes'){
            start();
        } else {
            console.log("Thanks for your monies!");
            connection.end();
        }
    })
}




