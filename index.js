const http = require("http");
const host = "127.0.0.1";
const port = 3002;
// reques adalah data dari luar
// response adalah data keluar dari sistem

const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.end("hello world status 203");
});

server.listen(port, host, function () {
  console.log(`Server berjalan di http://${host}:${port}/`);
});
