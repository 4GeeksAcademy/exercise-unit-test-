function fromDollarToYen(dollar) {
    // Assuming the conversion rate is 1 Dollar = 109.50 Yen
    return dollar * 109.50;
}

function fromEuroToDollar(euro) {
    // Assuming the conversion rate is 1 Euro = 1.2 Dollar
    return euro * 1.2;
}

function fromYenToPound(yen) {
    // Assuming the conversion rate is 1 Yen = 0.0073 Pound
    return yen * 0.0073;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
