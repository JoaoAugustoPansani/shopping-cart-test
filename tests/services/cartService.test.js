const { generateCartService } = require("../../src/services/cartService");
const Cart = require("../../src/models/Cart/Cart");

describe("CartSevice", () => {
  afterEach(async () => {
    await Cart.destroy({ where: {} });
  });

  describe("receive user_session_id token", () => {
    describe("when token is not null", () => {
      it("should return success true, success message and generate cart", async () => {
        const userSessionId = "jfka3io*_4";
        const result = await generateCartService(userSessionId);

        expect(result.success).toBe(true);
        expect(result.message).toEqual("User cart available!");
        console.log(typeof result.data[0].id);
        expect(result.data[0]).toEqual({
          subtotal_in_cents: 0,
          total_in_cents: 0,
          id: expect.any(Number),
          user_session_id: userSessionId,
        });
      });
    });

    describe("when token is null", () => {
      it("should return success false and a error message", async () => {
        const userSessionId = null;
        const result = await generateCartService(userSessionId);

        expect(result.success).toBe(false);
        expect(result.message).toEqual("The session id token can't be null.");
      });
    });
  });
});
