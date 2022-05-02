const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.send(products);
};

module.exports = {
  getProducts,
};
