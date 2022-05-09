const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('shopping-cart', 'root', 'pansani123',{
  dialect: "mysql",
  host: "localhost",
  port: 3306
});

module.exports = sequelize;
