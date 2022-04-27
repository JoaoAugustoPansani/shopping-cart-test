const supertest = require("supertest");
const Vouchers = require("../../models/Vouchers.js");
const app = require('../../server.js');
const request = supertest(app);

//Testing the getVoucher endpoint
it("gets the vouchers list endpoint", async () => {
    const response = await request.get('/api/vouchers');
    const voucher = await Vouchers.findAll();
    expect(response.status).toBe(200);
    expect(response.body).toEqual(voucher);
});