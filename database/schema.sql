DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);