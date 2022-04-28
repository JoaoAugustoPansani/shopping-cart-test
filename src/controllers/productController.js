const Products = require('../models/Products');

const getProducts = async (req, res) => {
    const products = await Products.findAll();
    res.send(products);
};

module.exports = {
    getProducts
};
