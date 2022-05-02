'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("carts", {
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("carts")
  }
};
