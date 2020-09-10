DROP DATABASE chat;
CREATE DATABASE chat;


USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- -- CREATE TABLE rooms (
-- --   id INT NOT NULL AUTO_INCREMENT,
-- --   roomname VARCHAR(100),
-- --   PRIMARY KEY (id)
-- -- );

CREATE TABLE messages (
  id  INT NOT NULL  AUTO_INCREMENT,
  text VARCHAR(100) NOT NULL,
  userid INT NOT NULL,
  roomname VARCHAR(100),
  PRIMARY KEY (id)
  -- FOREIGN KEY (userId) REFERENCES users(id),
  -- FOREIGN KEY (roomId) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

