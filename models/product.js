var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/products");
var Product = mongoose.model("Product",{
  title: String,
  price: Number,
  category: String
})
module.exports = Product;
