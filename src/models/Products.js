const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
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
    });

// Products.bulkCreate([
//     { id: 1, name: "Banana", price: 10, available_units: 10 },
//     { id: 2, name: "Apple", price: 20, available_units: 15 },
//     { id: 3, name: "Orange", price: 30, available_units: 8 },
//     { id: 4, name: "Mango", price: 15, available_units: 20 },
// ])
//     .then(() => console.log('Table populated on setup!'));

module.exports = Products;