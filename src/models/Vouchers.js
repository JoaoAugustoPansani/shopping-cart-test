const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Voucher = sequelize.define('vouchers', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    min_value: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
},
{
    timestamps: false
})

module.exports = Voucher;