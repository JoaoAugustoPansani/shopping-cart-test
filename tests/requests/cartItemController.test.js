const request = require("../support/request");
const CartItem = require("../../src/models/Cart/CartItem");
const Cart = require("../../src/models/Cart/Cart");
const Product = require("../../src/models/Product");

describe("CartItemController", () => {
    afterEach(async () => {
        await Cart.destroy({ where: {} });
        await Product.destroy({ where: {} });
        await CartItem.destroy({ where: {} });
    });

    describe("POST /api/cart-item", () => {
        describe("when user_session_id and product_id tokens are valid and cart item doesn't exists", () => {
            it("should generate cart item after receiving tokens", async () => {
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
                const tokens = {
                    user_session_id: cart.user_session_id,
                    product_id: product.id
                };
                const response = await request.post('/api/cart-item').send(tokens);

                expect(response.status).toBe(200);
                expect(response.body.message).toEqual("Item successfully added to the cart!");
                expect(response.body.data[0]).toEqual({
                    id: expect.any(Number),
                    cart_id: cart.id,
                    product_id: product.id,
                    quantity: 1,
                    amount_in_cents: 10
                });
            });
        });
    });

    describe("when user_session_id and product_id tokens are valid and cart item exists", () => {
        it("should update cart item quantity after receiving tokens", async () => {
            const cart = await Cart.create({
                user_session_id: "rfu402s",
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
            const tokens = {
                user_session_id: cart.user_session_id,
                product_id: product.id
            };
            const response = await request.post('/api/cart-item').send(tokens);

            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Item already in cart. Quantity updated!");
            expect(response.body.data[0]).toEqual({
                id: expect.any(Number),
                cart_id: cart.id,
                product_id: product.id,
                quantity: 4,
                amount_in_cents: 60
            });
        });
    });

    describe("when user_session_id and product_id tokens are invalid", () => {
        it("should return status 400 and error message", async () => {
            const tokens = {
                user_session_id: null,
                product_id: null
            };
            const response = await request.post('/api/cart-item').send(tokens);

            expect(response.status).toBe(400);
            expect(response.message).toEqual("The session id and product id must have values.");
        });
    });
});