// Importing http core package/module provided by nodejs
var http = require('http');
var fs = require('fs');

// Creating a server
http.createServer(function (req, res) {
    fs.readFile('render.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });

// Server listening on port number 8080
}).listen(8080);
