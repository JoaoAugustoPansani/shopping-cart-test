const sequelize = require("../../database/database");

afterAll(() => sequelize.close());

module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.config.js']
}