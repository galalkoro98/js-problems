
const oldestTesting = require('./oldest');

describe('finding the names of oldest persons', () => {
    it('should log Sam name', () => {
        expect(oldestTesting.oldest({Max: 9, Josh: 13, Sam: 48,Anne: 33})).toEqual(['Sam']);
    })

    it('should log Emma name', () => {
        expect(oldestTesting.oldest({Emma: 71, Jack: 45, Amy: 15, Ben: 29})).toEqual(['Emma']);
    })
})