const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Product = sequelize.define('available_products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    available_units: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
})

module.exports = Product;