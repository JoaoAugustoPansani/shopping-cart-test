const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const Product = require('../Product');
const Cart = require('./Cart')

const CartItem = sequelize.define(
    "cart_items",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

CartItem.hasOne(Product, {
    as: 'products',
    foreignKey: 'id',
});

CartItem.belongsTo(Cart);

module.exports = CartItem;
