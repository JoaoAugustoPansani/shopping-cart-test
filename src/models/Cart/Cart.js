const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const CartItem = require("./CartItem");

const Cart = sequelize.define(
  "cart",
  {
    cartId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    itemsId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "cart_item",
        key: "id",
      },
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

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

module.exports = Cart;
