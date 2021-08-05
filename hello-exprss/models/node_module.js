function take_nodes(){
const mongo = require('mongodb').MongoClient;
const uri = "mongodb+srv://tyson147258:55688@testuse.4dc1h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongo.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
  var dbo = db.db("nodes");
    dbo.collection("node"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;        
        
        db.close();
        //console.log(result);
        return result;
    }
    );
});
}
module.exports = {
  take_nodes,
} 