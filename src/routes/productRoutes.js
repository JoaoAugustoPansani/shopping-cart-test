const express = require('express');
const route = express.Router();
const { getProducts } = require('../controllers/productController');

route.get('/', getProducts);

module.exports = route;