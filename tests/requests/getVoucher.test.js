const request = require('../support/request');
const Voucher = require('../../src/models/Voucher');

describe('VoucherController', () => {
    describe('GET /api/vouchers', () => {
        describe('when vouchers are populated', () => {
            it('should get the vouchers list', async () => {
                await Voucher.create({
                    code: "#30OFF",
                    type: "percentual",
                    amount: 10,
                    min_value: 100
                });
                const response = await request.get('/api/vouchers');

                expect(response.status).toBe(200);
                expect(response.body).toEqual([{
                    id: expect.any(Number),
                    code: "#30OFF",
                    type: "percentual",
                    amount: 10,
                    min_value: 100
                }]);
            });
        });

        describe('when there are no vouchers', () => {
            it('should return an empty array', async () => {
                await Voucher.findAll();
                const response = await request.get('/api/vouchers');

                expect(response.status).toBe(200);
                expect(response.body).toEqual([]);
            });
        });
    });
});

afterEach(async () => {
    await Voucher.destroy({ where: {} });
});