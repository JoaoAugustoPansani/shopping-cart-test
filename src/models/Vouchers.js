const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Voucher extends Model {};

Voucher.init({
    code: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.NUMBER
    },
    min_value: {
        type: DataTypes.NUMBER
    }
}, {
    sequelize,
    modelName: 'vouchers_available',
    timestamps: false
});

module.exports = Voucher;