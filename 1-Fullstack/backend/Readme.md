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

## node.js structure.
```
app.js    node_modules/ public/   views/
bin/    package.json  routes/
```
app.js
 - Sets the path to the dir where the view files are located:
   ```
   app.set('views', path.join(__dirname, 'views'));
   ```
 - Sets the path to the dir with static assets:
   ```
   app.use(express.static(path.join(__dirname, 'public')));
   ```
 - Sets the root route for the app:
   ```
   app.use('/', routes);
   ```
node_modules: This is the dir where all our npm packages will reside. <br>
public: Directory for all static assets like images, JavaScript, CSS, fonts, etc ... <br>
views: Where all your layout and view Jade files will live. <br>
bin: There is a single file here, www and this is what activate the Node server. <br>
package.json: Project description, scripts manager and the app manifest and allows us to run npm start or nodemon start. Notice the following object:
```
"scripts": {
  "start": "node ./bin/www"
},
```
routes: This is the directory where we will build out the RESTful routes for our app.

## Heroku.
* make heroku account.
* install heroku toolbelt.
* linux: wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh.
* login to heroku account: $ heroku login - email - password - press Yes if not find an existing public key - uploading ssh public key - finish.

## remove git.
rm -rf .git.