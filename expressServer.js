var express = require('express');
var app = express();

var options = {
  index: "index.html"
};
console.log('dirname', __dirname);

app.use('/', express.static(__dirname, options));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('my app is listening at http://%s:%s', host, port);
});