const Cart = require("../models/Cart/Cart");

const generateCartForUser = async (req, res) => {
  const userSessionId = req.body.user_session_id;
  const generatedCart = await Cart.findOrCreate({
    where: {
      user_session_id: userSessionId,
    },
    defaults: {
      subtotal: 0,
      total: 0,
    },
  });

  res.send({
    message: "User cart available!",
    data: generatedCart,
  });

  return generatedCart;
};

module.exports = {
  generateCartForUser,
};
