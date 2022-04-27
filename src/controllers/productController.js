const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const product = await Product.findAll();
    res.send(product);
};

module.exports = {
    getProducts
}
