
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('converts 1 Dollar to Yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(109.50);
});

test('converts 1 Euro to Dollar', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.2);
});

test('converts 100 Yen to Pounds', () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.73);
});
