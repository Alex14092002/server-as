const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  image : String,
  category1: String,
  category2: String,
  category3: String,
  category4: String,
  category5: String,

});

module.exports = mongoose.model('products', productSchema);
