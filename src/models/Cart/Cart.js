const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    items: {
      type: [DataTypes.STRING],
      allowNull: false,
    },
    voucher_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Cart;
