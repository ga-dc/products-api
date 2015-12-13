var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Product = require("./models/product");

app.use(bodyParser.urlencoded());

app.get("/products", function(req, res){
  Product.find({}, function(err, doc){
    res.json(doc);
  });
});

app.get("/products/:id", function(req, res){
  Product.findById(req.params.id, function(err, doc){
    res.json(doc);
  });
});

app.delete("/products/:id", function(req, res){
  Product.findByIdAndRemove(req.params.id, function(err, doc){
    res.json({success: true});
  });
});

app.post("/products", function(req, res){
  Product.create(req.body, function(err, doc){
    res.json(doc);
  });
});

app.listen(3000);