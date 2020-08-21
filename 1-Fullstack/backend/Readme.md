## Models.
* sequelize model:generate --name admin --attributes username:STRING(30),email:STRING(50),fullname:STRING(75),password:STRING
* sequelize model:generate --name user --attributes username:STRING,email:STRING,phone:BIGINT,password:STRING,address:STRING
* sequelize model:generate --name feedback --attributes name:STRING,email:STRING,phone:BIGINT,comments:TEXT
* sequelize model:generate --name logging --attributes idUser:INTEGER,username:STRING,role:ENUM,token:STRING <br>
NOTE: Before sequelize db:migrate must add migrations role enum.
* sequelize db:migrate.

## Mysql: 
* create database 1fullstack; (create database name).
* show databases; (show all databases).
* use 1fullstack; (use database_name).
* desc users; (show tables).
* select * from users; (show users data when register).
* desc loggings; (show login tables).
* select * from loggings;

## Re-create database.
* drop database 1 fullstack; (on mysql).
* sequelize db:migrate.
## Run.
* nodemon start.
* test API using postman.