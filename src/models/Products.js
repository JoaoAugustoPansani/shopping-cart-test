const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Products = sequelize.define('products', {
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
},
{
    timestamps: false
})

module.exports = Products;