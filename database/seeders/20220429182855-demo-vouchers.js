'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vouchers', [
      {
        code: "#30OFF",
        type: "percentual",
        amount: 30,
        min_value: 100
      },
      {
        code: "#100DOLLARS",
        type: "fixed",
        amount: 100,
        min_value: 400
      },
      {
        code: "#SHIPIT",
        type: "free shipping",
        amount: 300.5,
        min_value: 300.5
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vouchers', null, {});
  }
};
