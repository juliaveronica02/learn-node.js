# Express.js to Create REST API.

--------------------------------------------------------------------------------

## Application structure.
Express application structure:
1. import our dependency and module like controllers, utility, helper and model.
2. install another express object and the others.
3. connect to database.
4. confirgure express applications settings like engine template and extention file.
5. identify middleware like error handler, static files folder, cookies, parser and the others else.
6. identify routes and the request handle.
7. run the app from server and certain port.

--------------------------------------------------------------------------------

## Create basic REST API manually.

Recommend read express documentations: [Express](https://expressjs.com) as a preparation.

We will implement some routes/requests REST API seperti `GET`, `POST`, `PUT`, `DELETE`.

On project, will recently use method `res.send`/`res.json` for files transfer.

Di sini kita akan membuat API yang dapat menampilkan dan memanipulasi daftar benda yang kita miliki.

### Design the routes dan data model.

Sebelum membuat API-nya, disarankan untuk mendesain routes dan model datanya terlebih dahulu.

Misalnya routes-nya seperti:

| Route          | HTTP Verb | Description
|----------------|-----------|------------
| /api/items     | GET       | Get all the items
| /api/items/:id | GET       | Get a single item
| /api/items     | POST      | Save an item
| /api/items     | DELETE    | Remove all the items
| /api/items/:id | DELETE    | Remove an item
| /api/items/:id | PUT       | Update an item with new info

Kemudian data model-nya dalam JSON seperti:

```json
[
  {
    "id": 0,
    "name": "Money",
    "color": "various"
  },
  {
    "id": 1,
    "name": "Laptop",
    "color": "black"
  },
  {
    "id": 2,
    "name": "Mouse",
    "color": "white"
  },
  {
    "id": 3,
    "name": "Cable",
    "color": "gray"
  }
]
```

Untuk mempermudah pembelajaran, kita belum menggunakan database, melainkan variabel JSON biasa saja untuk menyimpan data.

Yang mana memang datanya akan reset lagi jika kita menjalankan ulang aplikasinya.

### Implement the designs.

Kita implementasikan berbagai route tadi dalam Express dengan perlahan:

```js
const express = require("express")
const app = express()

// Initiate new data store
const data = []

// Get root answer
app.get(`/`, (req, res) => {
  res.send(`got root`)
})

// Get root API answer
app.get(`/api`, (req, res) => {
  res.send(`got api`)
})

// Get all the items
app.get(`/api/items`, (req, res) => {
  res.send(`got all items`)
})

// Get a single item
app.get(`/api/items/:id`, (req, res) => {
  res.send(`got item with id: ${req.params.id}`)
})

// Save an item
app.post(`/api/items`, (req, res) => {
  res.send(`saved new item`)
})

// Remove all the items
app.delete(`/api/items`, (req, res) => {
  res.send(`deleted all items`)
})

// Remove an item
app.delete(`/api/items/:id`, (req, res) => {
  res.send(`deleted one item`)
})

// Update an item with new info
app.put(`/api/items/:id`, (req, res) => {
  res.send(`updated one item`)
})

// Run the app server
app.listen(3000, () => console.log(`Server is listening on localhost:3000`))
```

Jalankan terlebih dahulu untuk mengecek jika secara garis besar aplikasinya sudah dapat bisa jalan.

Untuk mempermudah pengembangan, kita bisa menggunakan [`node-dev`](https://github.com/fgnass/node-dev) untuk mendapatkan fitur hot-reload ketika aplikasi dijalankan, sehingga ketika ada perubahan dalam code, aplikasinya otomatis akan restart.

```sh
$ npm install -g node-dev
```

```sh
$ node-dev server.js
```

(Tekan `Control-C` nanti untuk mematikannya.)

Tes apakah semua route sudah berjalan baik:

```sh
$ curl localhost:3000
$ curl localhost:3000/api
$ curl localhost:3000/api/items
$ curl localhost:3000/api/items/0
$ curl -X POST localhost:3000/api/items
$ curl -X DELETE localhost:3000/api/items
$ curl -X DELETE localhost:3000/api/items/0
$ curl -X PUT localhost:3000/api/items/1
```

### Implement the data manipulation.

Setelah desain dasar sudah selesai, kita bisa mulai menggabungkan model data dengan logika sesungguhnya.

Masukkan data awal:

```js
// Initiate new data store
const data = [
  {
    id: 0,
    name: "Money",
    color: "various"
  },
  {
    id: 1,
    name: "Laptop",
    color: "black"
  },
  {
    id: 2,
    name: "Mouse",
    color: "white"
  },
  {
    id: 3,
    name: "Cable",
    color: "gray"
  }
]
```

Kemudian implementasikan dalam route yang ada:

```js
// Get all the items
app.get(`/api/items`, (req, res) => {
  res.send(data)
})
```

Tes apakah kita bisa mendapatkan data tersebut:

```sh
$ curl localhost:3000/api/items

[{"id":0,"name":"Money","color":"various"},{"id":1,"name":"Laptop","color":"black"},{"id":2,"name":"Mouse","color":"white"},{"id":3,"name":"Cable","color":"gray"}]%
```

Jika ingin lebih mudah membacanya, gunakan [HTTPie](https://httpie.org) atau [Postman](https://getpostman.com) selain `cURL`.

```sh
$ http localhost:3000/api/items

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 163
Content-Type: application/json; charset=utf-8
Date: Sun, 1 Jan 2017 00:00:00 GMT
ETag: W/"a3-/0/ayt2pgwtnblj+E+LmNDECzKE"
X-Powered-By: Express

[
    {
        "color": "various",
        "id": 0,
        "name": "Money"
    },
    {
        "color": "black",
        "id": 1,
        "name": "Laptop"
    },
    {
        "color": "white",
        "id": 2,
        "name": "Mouse"
    },
    {
        "color": "gray",
        "id": 3,
        "name": "Cable"
    }
]
```

Karena sumber data masih dalam bentuk JSON, kita bisa mengimplementasikan berbagai logika manipulasi data dengan JavaScript seperti biasa.

--------------------------------------------------------------------------------