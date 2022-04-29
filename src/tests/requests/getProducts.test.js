const supertest = require("supertest");
const Product = require("../../models/Product.js");
const app = require('../../server.js');
const request = supertest(app);

//RESOURCES
describe('ProductsController', () => {
    //METHODS
    describe('GET /api/products', () => {
        describe('when there are products', () => {
            it('should read the products list from api', async () => {
                //SETUP
                await Product.create({
                    id: 56,
                    name: "Banana",
                    price: 10,
                    available_units: 10
                });

                //EXERCISE
                const response = await request.get('/api/products');

                //VERIFY
                expect(response.status).toBe(200);
                expect(response.body).toEqual([{
                    id: 56,
                    name: "Banana",
                    price: 10,
                    available_units: 10
                }]);
            });
        });
        describe('when there are no products', () => {
            it('should read the products list and return an empty array', async () => {
                //METHOD
                await Product.findAll();

                //EXERCISE 
                const response = await request.get('/api/products');

                //VERIFY
                expect(response.status).toBe(200);
                expect(response.body).toEqual([]);
            });
        });
    });
});

afterEach(async () => {
    const product = await Product.findByPk(56);
    if (product) {
        product.destroy();
    }
});

module.exports = { request };