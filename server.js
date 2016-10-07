var express = require("express");
var app = express();

app.listen(3000, function(){
  console.log("Listening on :3000");
})

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})
