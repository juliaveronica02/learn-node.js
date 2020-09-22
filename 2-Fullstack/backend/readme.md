CREATE TABLE book( id int(11) NOT NULL AUTO_INCREMENT, bookTitle varchar(255) NOT NULL, years varchar(128) NOT NULL, description varchar(60000), image varchar(255) NOT NULL, status enum('yes', 'no'), createdAt datetime NOT NULL, updatedAt datetime NOT NULL, PRIMARY KEY (id) );