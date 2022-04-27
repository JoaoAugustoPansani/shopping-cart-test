const express = require('express');
const route = express.Router();
const { getProducts } = require('../controllers/productController');

//PRODUCT API ENDPOINTS
//Endpoint to list all products
route.get('/', getProducts);

module.exports = route;