const Cart = require("../models/Cart/Cart");

const generateCartForUser = async (req, res) => {
  const userSessionId = req.body.user_session_id;
  const generatedCart = await Cart.findOrCreate({
    where: {
      id: userSessionId,
    },
    defaults: {
      subtotal: 0,
      total: 0,
      items: [],
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
