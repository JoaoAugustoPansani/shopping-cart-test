const express = require('express');
const route = express.Router();
const { getProducts, getSingleProduct, createProduct } = require('../controllers/productController');

//PRODUCT API ENDPOINTS
//Endpoint to list all products
route.get('/', getProducts);

//Endpoint to list specific product
route.get('/:id', getSingleProduct);

//Endpoint do create new product 
route.post('/', createProduct);

module.exports = route;