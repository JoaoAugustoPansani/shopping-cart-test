const Cart = require("../models/Cart/Cart");
const CartItem = require("../models/Cart/CartItem");
const Product = require("../models/Product");

const addToCartService = async (userSessionId, productId) => {
  const currentCart = await Cart.findOne({
    where: { user_session_id: userSessionId },
  });
  const currentProduct = await Product.findByPk(productId);

  if (!currentCart || !currentProduct) {
    return {
      message: "The session id and product id must have values.",
      success: false,
    };
  } else {
    const cartItemExists = await CartItem.findOne({
      where: {
        cart_id: currentCart.id,
        product_id: currentProduct.id,
      },
    });

    let quantity;
    if (currentCart && currentProduct && cartItemExists) {
      quantity = cartItemExists.quantity + 1;

      cartItemExists.quantity = quantity;
      cartItemExists.amount_in_cents = quantity * currentProduct.price_in_cents;
      await cartItemExists.save();

      return {
        message: "Item already in cart. Quantity updated!",
        data: cartItemExists,
        success: true,
      };
    }
    if (currentCart && currentProduct && !cartItemExists) {
      quantity = 1;

      const cartItem = await CartItem.create({
        cart_id: currentCart.id,
        product_id: productId,
        quantity: quantity,
        amount_in_cents: quantity * currentProduct.price_in_cents,
      });

      return {
        message: "Item successfully added to the cart!",
        data: cartItem,
        success: true,
      };
    }
  }
};

module.exports = {
  addToCartService,
};
