const Cart = require("../models/Cart/Cart");

const generateCartForUser = async (req, res) => {
  const userSessionId = req.body.user_session_id;

  if (userSessionId === null) {
    res.status(400);
    res.send({
      message: "The session id token can't be null."
    });
  } else {
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
  }
};

module.exports = {
  generateCartForUser,
};
