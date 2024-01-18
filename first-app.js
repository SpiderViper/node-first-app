    // Add the FileSystem Module from node.js
    const fs = require ('fs');

    //fs.writeFileSync('')
    console.log('Hello Node.JS');

    // This is a new Line to Test GitHub
       // Add the FileSystem Module from node.js
    //const fs = require ('fs');

    //fs.writeFileSync('')
    console.log('Hello Node.JS');

const http = require('http');
const port = process.env.PORT || 7777;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello, World! JSH Port: $port\n");
}).listen(port);

console.log(`App is running... (port: ${port})`);

