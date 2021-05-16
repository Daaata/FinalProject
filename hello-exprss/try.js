var express=require('express');
var app=express();
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";



//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")
 
app.get('/',function(req,res){
    MongoClient.connect("mongodb://localhost:27017/YourDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
},function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) 
        throw err;
    else
        res.render('sample',{List:result});
    console.log(result);
    db.close();
  });
  });
});
 
var server=app.listen(3000,function(){
    console.log('Server is running!');
});
console.log("http://localhost:3000");