const supertest = require("supertest");
const Products = require("../../models/Products.js");
const app = require('../../server.js');
const request = supertest(app);

//Recurso
describe('ProductsController', () => {
    //Metodo
    describe('GET /api/products', () => {
        it('should read the products list from api', async () => {
            //SETUP
            const products = await Products.findAll()
            
            //EXERCISE
            const response = await request.get('/api/products');

            //VERIFY
            expect(response.status).toBe(200);
            expect(response.body).toEqual(products);
        });
    });
});

module.exports = { request };