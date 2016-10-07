var express = require("express");
var bodyParser= require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var db;

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://owens:musashi@ds053216.mlab.com:53216/trader-app', function(err, database){
  if(err) return console.log(err)
  db = database
  app.listen(3000, function(){
    console.log("Listening on :3000");
  })
})

app.get("/", function(req, res){
  db.collection('notes').find().toArray(function(err, result){
    if (err) return console.log(err)
    //renders ejs
    res.render("index.ejs", {notes:result})
  })
})



app.post('/notes', function(req, res){
  db.collection('notes').save(req.body, function(err, result){
    if (err) return console.log(err)

    console.log("Saved to database")
    res.redirect("/")
  })
})
