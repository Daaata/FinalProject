function create(nodes){
    console.log(nodes);
    var http = require('http');
    var url = require('url');
    var fs = require('fs');
    http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      //res.write(JSON.stringify(nodes));
      //res.json()
      return res.end();
    });
}).listen(8080);
   
  
  
console.log("http://localhost:8080/index3.html");
}
module.exports = {
  create,
} 