const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const CartItem = require("./CartItem");

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    itemsId: {
      type: DataTypes.STRING,
      allowNull: true
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

Cart.hasMany(CartItem, {
  as: 'cart_items',
  foreignKey: 'itemId',
  constraints: false
});
CartItem.belongsTo(Cart)

module.exports = Cart;
