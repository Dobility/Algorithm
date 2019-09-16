function multiply(a, b) {
    let aStr = `${a}`, bStr = `${b}`;
    let aLen = aStr.indexOf('.') >= 0 ? aStr.length - 1 - aStr.indexOf('.') : 0;
    let bLen = bStr.indexOf('.') >= 0 ? bStr.length - 1 - bStr.indexOf('.') : 0;
    aStr = aStr.replace('.', '');
    bStr = bStr.replace('.', '');
    let c = +aStr * +bStr;
    return c / Math.pow(10, aLen + bLen);
}

// multiply(3, 0.0001)
