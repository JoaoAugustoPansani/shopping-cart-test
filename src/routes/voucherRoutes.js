const express = require("express");
const route = express.Router();
const { getVouchers } = require("../controllers/voucherController");

route.get("/", getVouchers);

module.exports = route;
