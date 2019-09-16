function valueAtBit(num, bit) {
    let bits = num.toString(2).split('');
    return bits[bits.length - bit];
}
