// Requiring basic modules
var http = require("http")
,	  ecsy = require("ecstatic");

// Creating the file server
http.createServer(
  ecsy({ root: __dirname + "/" })
).listen(8080);
