const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

const CartItem = sequelize.define(
  "cart_items",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount_in_cents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

CartItem.associate = (models) => {
  CartItem.hasOne(models.products, {
    foreignKey: "id",
  });

  CartItem.belongsTo(models.carts);
};

module.exports = CartItem;
