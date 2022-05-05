const request = require("../support/request");
const Cart = require("../../src/models/Cart/Cart");
const jest = require("jest");

describe("CartController", () => {
  afterEach(async () => {
    await Cart.destroy({ where: {} });
  });
  beforeAll(() => require("../../database/database").sync({ force: false }));

  describe("POST /api/cart", () => {
    describe("when user_session_id token is not null", () => {
      it("should generate cart after receiving a user_session_id token", async () => {
        const userSessionId = JSON.stringify({ user_session_id: "jfka3io*_4" });
        const response = await request.post("/api/cart").send(userSessionId);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("User cart available!");
        expect(response.body.data[0]).toEqual({
          subtotal: 0,
          total: 0,
          items: [],
          id: "jfka3io*_4",
        });
      });
    });

    describe("when user_session_id token is null", () => {
      it("should return an error", async () => {
        const userSessionId = JSON.stringify({ user_session_id: null });
        const response = await request.post("/api/cart").send(userSessionId);

        expect(response.status).toBe(400);
      });
    });
  });
});
