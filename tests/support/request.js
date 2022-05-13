const supertest = require("supertest");
const { app, listener } = require("../../src/server.js");
const request = supertest(app);
const sequelize = require("../../database/database");

afterAll(() => listener.close());
afterAll(() => sequelize.close());

module.exports = request;
