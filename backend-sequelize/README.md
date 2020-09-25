## Generaet your express project

```javascript
express --no-view <Project-name>
```

## Create your DB with terminal
```javascript
mysql -u <your username> -p <your password>
create database <your db name>;
```


## Install dependency for your express project

```javascript
npm install
```

### install other dependency

```javascript
npm install body-parser cors sequelize mysql2 sequelize-cli
```
## Initialize your project sequelize

```javascript
sequelize init
```

## Generate Table Jobdesk
sequelize model:generate --name Jobdesk --attributes title:STRING,department:STRING,userId:INTEGER,companyId:INTEGER

## Generate Table User
```javascript
sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGER
```

## Generate Table Company
```javascript
sequelize model:generate --name Company --attributes name:STRING
```


## after generate model, you must migrate your database
```javascript
sequelize db:migrate
```

## Don't forget to config your file config.json

```javascript
"development": {
    "username": "root",
    "password": "your sql password",
    "database": "office",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "false"
  },
```