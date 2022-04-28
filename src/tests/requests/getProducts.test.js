const supertest = require("supertest");
const Products = require("../../models/Products.js");
const app = require('../../server.js');
const request = supertest(app);

//RESOURCES
describe('ProductsController', () => {
    //METHODS
    describe('GET /api/products', () => {
        it('should read the products list from api', async () => {
            //SETUP
            const products = await Products.findAll();

            try {
                //EXERCISE
                const response = await request.get('/api/products');

                //VERIFY
                expect(response.status).toBe(200);
                expect(response.body).toEqual(products);
            } catch(err) {
                console.log(`Error ${err}`)
            }
        });
    });
});

module.exports = { request };