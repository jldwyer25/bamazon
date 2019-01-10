DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DOOM","Video Games", 59.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Child Support Simulator 2019","Video Games", 109.99, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tomato","Grocery", 3.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cool Shades","Apparel", 15.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dumb Hat","Apparel", 9.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scotland","Yard", 20.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken Wire","Yard", 6.75, 700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Haterade","Grocery", 4.20, 311);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Human Heart","Pharmacy", 1099.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lightning Bolt","Pharmacy", 0.99, 1500);

SELECT * FROM bamazonDB.products;


