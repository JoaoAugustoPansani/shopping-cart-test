const Voucher = require("../models/Voucher");

const getVouchers = async (req, res) => {
  const vouchers = await Voucher.findAll();
  res.send(vouchers);
};

module.exports = {
  getVouchers,
};
