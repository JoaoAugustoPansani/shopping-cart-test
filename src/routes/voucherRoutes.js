const express = require('express');
const route = express.Router();
const { getVouchers } = require('../controllers/voucherController');

//VOUCHER API ENDPOINTS
//Endpoint to list all vouchers
route.get('/', getVouchers);

module.exports = route;