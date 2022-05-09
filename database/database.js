const { Sequelize } = require("sequelize");
const DATABASE = require('../config/db');

const sequelize = new Sequelize(DATABASE.name, DATABASE.username, DATABASE.password,
  DATABASE.config);

module.exports = sequelize;
