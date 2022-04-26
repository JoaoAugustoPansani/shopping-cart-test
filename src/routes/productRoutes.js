const express = require('express');
const route = express.Router();
const Product = require('../models/Product');

//PRODUCT API ENDPOINTS
//Endpoint to list all products
route.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.send(products);
});

//Endpoint to list specific product
route.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    const product = await Product.findOne({ where: { id: requestedId } });
    res.send(product);
});

//Endpoint do create new product 
route.post('/', async (req, res) => {
    await Product.create(req.body);
    res.send('Product created!')
});

//Endpoint do update a product 
// route.put('/:id', async (req, res) => {
//     const requestedId = req.params.id;
//     const product = await Product.findOne({where : {id: requestedId}});
// product.available_units = req.body.available_units;
// await product.save();
// res.send('Available units updated!')
// });

module.exports = route;