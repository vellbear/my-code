let http = require('http');
let fs = require('fs');
let js = require('./main.js');
let json = require('./data.json');

function onRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('File does not exist');
        } else {
            response.write(data);
        }
        response.end();
    });
}

console.log(JSON.stringify(json));

http.createServer(onRequest).listen(8000);