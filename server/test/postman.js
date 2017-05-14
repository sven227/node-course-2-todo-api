var http = require("http");

var options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "3000",
  "path": "/todos",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "9cabe64b-8ba2-9a61-8dca-104a32867883"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});


req.write(JSON.stringify({ text: 'this is from node - postman snippet' }));
req.end();