const supertest = require("supertest");
const { app, listener } = require("../../src/server.js");
const request = supertest(app);

afterAll(() => listener.close());

module.exports = request;