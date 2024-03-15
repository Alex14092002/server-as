const Brand = require('../models/Brand');


exports.getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      res.json(brands);
    } catch (error) {
      console.error('Error fetching all brands:', error);
      res.status(500).send(error.message);
    }
  };