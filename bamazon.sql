CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (40) NULL,
department_name VARCHAR (40) NULL,
price DECIMAL (20,1) NULL,
stock_quantity INT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (oil, auto, 8, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (sparkplug, auto, 5, 77);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (shoes, clothing, 20, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (batman, comics, 10, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (pencil, supplies, 1, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (jumanji, movies, 5, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (swiming, music, 15, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (shirt, clothing, 20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (astroWorld, music, 8, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (pants, colthing, 5, 10)