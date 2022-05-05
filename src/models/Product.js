const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_in_cents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available_units: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Product.associate = (models) => {
  Product.belongsTo(models.cart_items);
};

module.exports = Product;
