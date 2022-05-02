const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const Cart = require("./Cart");

const CartItem = sequelize.define(
  "cart_item",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = CartItem;
