// Root file to makes up our node.js application.
// the node.js code will execute on a computer in the cloud on a server.

const http = require('http');

// Example 1.
// function rqListener(req, res){

// }

// http.createServer(rqListener);

// // Example 2.
// http.createServer(function(res,req){

// })

// Example 3 is recommend.
const server = http.createServer((req, res)=> {
    console.log("req", req);
})

server.listen(8080);