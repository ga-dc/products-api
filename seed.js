var Product = require("./models/product");
Product.remove({}, function(){
  Product.create(
    {title: "Cards Against Humanity", price: 25.00, category: "Toys & Games"}, 
    {title: "Pie Face Game", price: 25.36, category: "Toys & Games"},
    {title: "Fire, 7\" Display, Wi-Fi, 8 GB - Includes Special Offers, Black", price: 44.99, category: "Electronics"},
    {title: "Amazon Echo", price: 179.99, category: "Electronics"},
    {title: "Fujifilm Instax Mini Instant Film, 10 Sheets x 5 packs ", price: 41.90, category: "Camera & Photo"},
    function(){
      process.exit()
    }
  )
})

