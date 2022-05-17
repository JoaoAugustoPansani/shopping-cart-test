const { addToCartService } = require("../../src/services/cartItemService");
const Cart = require("../../src/models/Cart/Cart");
const Product = require("../../src/models/Product");
const CartItem = require("../../src/models/Cart/CartItem");

describe("CartItemService", () => {
    afterEach(async () => {
        await Cart.destroy({ where: {} });
        await Product.destroy({ where: {} });
        await CartItem.destroy({ where: {} });
    });

    describe("when tokens are valid and cart item doesn't exists", () => {
        it("should return success true, success message and generate cart item", async () => {
            const cart = await Cart.create({
                user_session_id: "fcjkdkw3",
                subtotal_in_cents: 0,
                total_in_cents: 0
            });
            const product = await Product.create({
                name: "Banana",
                price_in_cents: 10,
                available_units: 20
            });
            const result = await addToCartService(cart.user_session_id, product.id);

            console.log(result)

            expect(result.success).toBe(true);
            expect(result.message).toEqual("Item successfully added to the cart!");
            expect(result.data.dataValues).toEqual({
                id: expect.any(Number),
                cart_id: cart.id,
                product_id: product.id,
                quantity: 1,
                amount_in_cents: 10
            });
        });
    });

    describe("when tokens are valid and cart item exists", () => {
        it("should return success true, success message and update cart item", async () => {
            const cart = await Cart.create({
                user_session_id: "fcjkdkw3",
                subtotal_in_cents: 0,
                total_in_cents: 0
            });
            const product = await Product.create({
                name: "Mango",
                price_in_cents: 15,
                available_units: 30
            });
            await CartItem.create({
                cart_id: cart.id,
                product_id: product.id,
                quantity: 3,
                amount_in_cents: 45
            });
            const result = await addToCartService(cart.user_session_id, product.id);

            expect(result.success).toBe(true);
            expect(result.message).toEqual("Item already in cart. Quantity updated!");
            expect(result.data.dataValues).toEqual({
                id: expect.any(Number),
                cart_id: cart.id,
                product_id: product.id,
                quantity: 4,
                amount_in_cents: 60
            });
        });
    });

    describe("when tokens are not valid", () => {
        it("should return success false and an error message", async () => {
            const userSessionId = "afjdopfj";
            const productId = 40;
            const result = await addToCartService(userSessionId, productId);

            expect(result.success).toBe(false);
            expect(result.message).toEqual("The session id and product id must have values.");
        })
    })
});