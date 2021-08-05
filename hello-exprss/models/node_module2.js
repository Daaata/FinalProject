function take_nodes(){
 

    var mongoose = require('mongoose');
    const express = require('express');   
    const app = express();         
    const uri = "mongodb+srv://tyson147258:55688@testuse.4dc1h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
    });
    app.get('/data',function(req,res){
        if (err) throw err;
        var dbo = db.db("nodes");
        //var dbo = db.db("mydb");
        dbo.collection("node").find({}, { projection: { _id: 0, X: 1 , Y: 1} }).toArray(function(err, result) {
        //dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
        if (err) 
            throw err;
        else
            res.render('sample',{List:result});
        console.log(result);
        db.close();
    });
    });
    var db = mongoose.connection;

   


    db.on('error', function(){
        console.log('MongoDB Connection Error');
    });
    
}
console.log("yes");
module.exports = {
    take_nodes,
} 