const supertest = require("supertest");
const app = require("../../src/server.js");
const request = supertest(app);

module.exports = request;
