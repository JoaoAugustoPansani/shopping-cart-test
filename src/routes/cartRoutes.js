const express = require("express");
const route = express.Router();
const { generateCartForUser } = require("../controllers/cartController");

route.post("/", generateCartForUser);

module.exports = route;
