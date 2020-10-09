# How to deploy your Express on server for production

## Setup your Instance on your cloud account, like google cloud, aws or other

## Install NGINX using this comment 
```javascript
    # sudo apt install nginx
```

## Config your proxy NGINX use proxy port for direct port 8000 to port 80

```javascript
# sudo nano /etc/nginx/sites_available/default
```
 paste code below

```javascript

location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
## install GIT on your cloud server

```javascript
# sudo npm install git
```

## clone your Express project
```javascript 
# git clone <github project>
# cd <your project directory>
# npm install
```

* if your project use mongodb, dont forget to install mongodb
* if your project use mysql, dont forget install mysql 

## install PM2 for production
```javascript
# npm install pm2 -g
```

## Run your Express projuct using PM2
```javascript
pm2 start bin/www
```
