const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Product extends Model {};

Product.init({
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    available_units: {
        type: DataTypes.NUMBER
    }
}, {
    sequelize,
    modelName: 'products_available',
    timestamps: false
});

module.exports = Product;