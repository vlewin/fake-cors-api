const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Auth-Token, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/unauthorized', function(req, res) {
  console.log('request', req)
  res.status(401);
  res.send('None shall pass')
});

app.post('/post', function(req, res) {
  console.log('POST')
  const body = req.body.Body
  console.log(body)

  res.sendFile(path.join(__dirname + '/success.html'))
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});