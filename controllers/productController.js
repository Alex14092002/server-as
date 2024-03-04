const Product = require('../models/Product');
exports.getProducts = async (req, res) => {
  const categoryName = req.body.category; // Lấy tên danh mục từ body request
  const page = parseInt(req.params.page); // Lấy số trang từ URL
  const limit = 40; // Số lượng sản phẩm trên mỗi trang

  try {
    let totalProducts;
    let products;

    // Kiểm tra từ category5 đến category1
    for (let i = 5; i >= 1; i--) {
      totalProducts = await Product.countDocuments({ [`category${i}`]: categoryName });
      if (totalProducts > 0) {
        // Nếu có sản phẩm với category tại cấp độ hiện tại, lấy sản phẩm dựa trên category đó
        products = await Product.find({ [`category${i}`]: categoryName }).skip((page - 1) * limit).limit(limit);
        break; // Thoát vòng lặp khi đã tìm thấy sản phẩm
      }
    }

    const totalPages = Math.ceil(totalProducts / limit);

    res.json({
      currentPage: page,
      totalPages: totalPages,
      products: products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send(error.message);
  }
};




exports.countProducts = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    res.json({ totalProducts: totalProducts });
  } catch (error) {
    console.error('Error counting products:', error);
    res.status(500).send(error.message);
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching all products:', error);
    res.status(500).send(error.message);
  }
};