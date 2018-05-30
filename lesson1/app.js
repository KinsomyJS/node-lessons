var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/kinsomy', function (req, res) {
  res.send("Hello Kisnomy!")
});

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
