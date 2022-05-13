require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5500;
const app = express();

app.use(express.json());

app.use("/api/products", require("./routes/productRoutes"));

app.use("/api/vouchers", require("./routes/voucherRoutes"));

app.use("/api/cart", require("./routes/cartRoutes"));

app.use((req, res) => {
  res.status(404);
});

const listener = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { app, listener };
