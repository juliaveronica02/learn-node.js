// 1.
const http = require('http')
// 2.
const server = http.createServer((req, res)=>{
    // 4.
    const url = req.url
    if (url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title>Assignment1 </title> </head>")
        res.write("<body><p>Welcome to my page!</p></body>")
        res.write("</html>")
        return res.end();
    } if (url === "/users") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title>Assignment1 </title> </head>")
        res.write("<body><ul><li>User 1 </li><li>User 2</li></ul></body>")
        res.write("</html>")
        return res.end();
    }
    // Send a HTML respinse with some "Page not found text".
})
// 3.
server.listen(8080);

// run: node app.js.