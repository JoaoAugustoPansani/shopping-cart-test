const supertest = require("supertest");
const Product = require("../../models/Product.js");
const app = require('../../server.js');
const request = supertest(app);

//Testing the getUser endpoint
it("gets the products list endpoint", async () => {
    const response = await request.get('/api/products');
    const product = await Product.findAll();
    expect(response.status).toBe(200);
    expect(response.body).toEqual(product);
});