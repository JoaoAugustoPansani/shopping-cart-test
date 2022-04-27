const supertest = require("supertest");
const app = require('../../server');
const products = require('../../models/Product');
const request = supertest(app);

//Testing the getUser endpoint
it("gets the products list endpoint", async done => {
    const response = await request.get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toBe(products);

    done();
});