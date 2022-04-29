const express = require('express');
const sequelize = require('../database/database');
const port = process.env.PORT || 5500;
const app = express();

sequelize.sync({ force: false })

app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));

app.use('/api/vouchers', require('./routes/voucherRoutes'));

app.use((req, res) => {
    res.status(404);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

module.exports = app;