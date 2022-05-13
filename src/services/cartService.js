const Cart = require("../models/Cart/Cart");

const generateCartService = async (userSessionId) => {
  if (!userSessionId) {
    return {
      message: "The session id token can't be null.",
      success: false,
    };
  } else {
    const generatedCart = await Cart.findOrCreate({
      where: {
        user_session_id: userSessionId,
      },
      defaults: {
        subtotal_in_cents: 0,
        total_in_cents: 0,
      },
    });

    return {
      message: "User cart available!",
      success: true,
      data: generatedCart,
    };
  }
};

module.exports = {
  generateCartService,
};
