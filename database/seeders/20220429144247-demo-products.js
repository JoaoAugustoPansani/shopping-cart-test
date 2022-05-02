"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        name: "Banana",
        price_in_cents: 10,
        available_units: 10,
      },
      {
        name: "Apple",
        price_in_cents: 20,
        available_units: 15,
      },
      {
        name: "Orange",
        price_in_cents: 30,
        available_units: 8,
      },
      {
        name: "Mango",
        price_in_cents: 15,
        available_units: 20,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  },
};
