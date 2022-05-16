const sequelize = require("../../database/database");

sequelize.close();

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.config.js"],
};
