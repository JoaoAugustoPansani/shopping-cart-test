const sequelize = require("../../database/database");

afterAll(() => sequelize.close());
