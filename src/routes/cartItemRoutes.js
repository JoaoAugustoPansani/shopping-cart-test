const express = require("express");
const route = express.Router();
const { addToCart } = require("../controllers/cartItemController");

route.post("/", addToCart);

module.exports = route;
