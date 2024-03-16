const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: String,
	price: String,
	description: String,
	image: String,
	category1: String,
	category2: String,
	category3: String,
	category4: String,
	category5: String,
});

productSchema.index({ category1: 1 });
productSchema.index({ category2: 1 });
productSchema.index({ category3: 1 });
productSchema.index({ category4: 1 });
productSchema.index({ category5: 1 });

module.exports = mongoose.model("products", productSchema);
