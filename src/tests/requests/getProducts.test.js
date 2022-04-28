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
            await Products.create({
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
});

afterAll(async () => {
    await Products.destroy({ where: { id: 56 } });
});

module.exports = { request };