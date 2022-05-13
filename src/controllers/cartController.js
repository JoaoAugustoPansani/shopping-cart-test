const { generateCartService } = require("../services/cartService");

const generateCartForUser = async (req, res) => {
  const userSessionId = req.body.user_session_id;
  const result = await generateCartService(userSessionId);

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
  generateCartForUser,
};
