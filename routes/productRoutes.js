const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/:page', productController.getProducts);
router.get('/count', productController.countProducts);
router.get('/all', productController.getAllProducts);



module.exports = router;
