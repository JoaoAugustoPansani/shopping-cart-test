const express = require('express');
const sequelize = require('./database/database');
const port = 5500;
const app = express();

sequelize.sync({force: false});

app.use(express.json());

//PRODUCT API ENDPOINTS
app.use('/api/products', require('./routes/productRoutes'));

//VOUCHER API ENDPOINTS
app.use('/api/vouchers', require('./routes/voucherRoutes'));

//Default response for any other request 
app.use((req, res) => {
    res.status(404);
});

//Server port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

module.exports = app;