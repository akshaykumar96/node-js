var http = require("http");

http.createServer(function (request, response) {
    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
      });
      response.on('error', (err) => {
        console.error(err);
      });
      if (request.method === 'GET' && request.url === '/echo') {
            response.write("hello World from Node.JS HTTP Server");  
          response.end();
      } else {
        response.statusCode = 404;
        response.end();
      }
}).listen(8888);
console.log("Server started listening at http://localhost:8888");