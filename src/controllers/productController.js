const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.send(products);
};

const getSingleProduct = async (req, res) => {
    const requestedId = req.params.id;
    const product = await Product.findOne({ where: { id: requestedId } });
    res.send(product);
};

const createProduct = async (req, res) => {
    await Product.create(req.body);
    res.send('Product created!')
};

module.exports = {
    getProducts,
    getSingleProduct,
    createProduct
}
