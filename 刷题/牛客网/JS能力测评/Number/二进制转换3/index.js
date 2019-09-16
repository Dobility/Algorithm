function convertToBinary(num) {
    let bits = num.toString(2);
    for (let i = bits.length; i < 8; i++) {
        bits = `0${bits}`;
    }
    // oj 不支持 padStart 方法
    // if (bits.length < 8) {
    //     bits = bits.padStart(8, '0');
    // }
    return bits;
}
