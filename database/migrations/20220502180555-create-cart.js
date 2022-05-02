'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("carts", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
      },
      itemsId: {
        type: Sequelize.STRING,
        allowNull: true
      },
      voucher_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      subtotal: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("carts");
  }
};
