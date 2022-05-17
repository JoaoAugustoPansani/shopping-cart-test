const { addToCartService } = require("../services/cartItemService");

const addToCart = async (req, res) => {
  const userSessionId = req.body.user_session_id;
  const productId = req.body.product_id;
  const result = await addToCartService(userSessionId, productId);

  if (result.success) {
    res.send({
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(400);
    res.send({
      message: result.message,
    });
  }
};

module.exports = {
  addToCart,
};
