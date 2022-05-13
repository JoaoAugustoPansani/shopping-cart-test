const request = require("../support/request");
const Cart = require("../../src/models/Cart/Cart");

describe("CartController", () => {
  afterEach(async () => {
    await Cart.destroy({ where: {} });
  });

  describe("POST /api/cart", () => {
    describe("when user_session_id token is not null", () => {
      it("should generate cart after receiving a user_session_id token", async () => {
        const userSessionId = JSON.stringify({ user_session_id: "jfka3io*_4" });
        const response = await request.post("/api/cart").send(userSessionId);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("User cart available!");
        expect(response.body.data[0]).toEqual({
          subtotal_in_cents: 0,
          total_in_cents: 0,
          user_session_id: "jfka3io*_4",
        });
      });
    });

    describe("when user_session_id token is null", () => {
      it("should return an error", async () => {
        const userSessionId = JSON.stringify({ user_session_id: null });
        const response = await request.post("/api/cart").send(userSessionId);

        expect(response.status).toBe(400);
        expect(response.body.message).toEqual(
          "The session id token can't be null."
        );
      });
    });
  });
});
