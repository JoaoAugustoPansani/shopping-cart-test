const express = require('express');
const route = express.Router();
const Voucher = require('../models/Vouchers');

//VOUCHER API ENDPOINTS
//Endpoint to list all vouchers
route.get('/', async (req, res) => {
    const vouchers = await Voucher.findAll();
    res.send(vouchers);
});

//Endpoint to list specific product
route.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    const voucher = await Voucher.findOne({ where: { id: requestedId } });
    res.send(voucher);
});

//Endpoint do create new product 
route.post('/', async (req, res) => {
    await Voucher.create(req.body);
    res.send('Voucher created!')
});

//Endpoint do update a product 
// route.put('/:id', async (req, res) => {
//     const requestedId = req.params.id;
//     const voucher = await Voucher.findOne({where : {id: requestedId}});
// product.amount = req.body.amount;
// await product.save();
// res.send('Available units updated!')
// });

module.exports = route;