var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

const client = new MongoClient(url, {useUnifiedTopology: true});

MongoClient.connect("mongodb://localhost:27017/YourDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
},function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  });


  