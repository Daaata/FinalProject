var express = require('express');
var app = express();
var fs = require("fs");
const mongo = require('mongodb').MongoClient;
var database = require('./models/node_module');
//let connect = take_nodes.take_nodes();


app.get('/', function (req, res) {
   let database_nodes = database.take_nodes();
   fs.readFile( __dirname + "/" + database_nodes, 'utf8', function (err, data) {
       console.log( database_nodes );
       res.end( database_nodes );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("http://localhost:8081")

})


