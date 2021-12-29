

// Importing http core package/module provided by nodejs
var http = require('http');
var fs = require('fs');
// npm package
var uc = require('upper-case');
// Creating a server
http.createServer(function (req, res) {
    
// Write response as Html(text)
res.writeHead(200, {'Content-Type': 'text/html'});
// Writing static text
res.end(uc.upperCase('hello world'));

// Server listening on port number 8080
}).listen(8080);
