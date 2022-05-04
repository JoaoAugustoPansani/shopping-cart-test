const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

const Cart = sequelize.define(
  "carts",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal_in_cents: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shipping_in_cents: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_in_cents: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Cart.associate = (models) => {
  Cart.hasMany(models.cart_items, {
    foreignKey: "id",
  });
};

module.exports = Cart;
