const request = require("../support/request");
const Product = require("../../src/models/Product");

describe("ProductsController", () => {
  afterEach(async () => {
    await Product.destroy({ where: {} });
  });

  describe("GET /api/products", () => {
    describe("when there are products", () => {
      it("should read the products list from api", async () => {
        await Product.create({
          name: "Banana",
          price_in_cents: 10,
          available_units: 10,
        });
        const response = await request.get("/api/products");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([
          {
            id: expect.any(Number),
            name: "Banana",
            price_in_cents: 10,
            available_units: 10,
          },
        ]);
      });
    });

    describe("when there are no products", () => {
      it("should read the products list and return an empty array", async () => {
        await Product.findAll();
        const response = await request.get("/api/products");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
      });
    });
  });
});
