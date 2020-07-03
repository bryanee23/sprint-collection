-- /*  Execute this file from the command line by typing:
--  *    mysal source < schema.sql
--  *  to create the database and the tables.*/

DROP DATABASE IF EXISTS groceries;
CREATE DATABASE groceries;

USE groceries;

-- mysql does not like camelcase!
CREATE TABLE itemlist (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 item TEXT(100) NOT NULL,
 amount INT
);

-- source server/db/schema.sql