var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', function (req, res) {
	res.send("We are learning nodeJS!");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function () {
	console.log('Express Server startted on port: ' + port);
});