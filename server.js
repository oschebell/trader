var express = require("express");
var bodyParser= require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
  console.log("Listening on :3000");
})

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post('/notes', function(req, res){
  console.log(req.body);
  console.log("Is this thing on?");
})
