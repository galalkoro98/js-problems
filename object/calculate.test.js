//const { default: test } = require('node:test')
const calculateEarnings = require('./calculate-grocery')

test('total amount of end of day', () => {
    expect(calculateEarnings[40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], 'Wednesday').toEqual()
})