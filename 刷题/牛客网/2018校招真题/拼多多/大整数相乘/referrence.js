const rl = require('../../../../../utils/ReadlineUtils')
rl.on('line', line => {
    let [aStr, bStr] = line.split(' ');
    let result = [], a = 0, b = 0;
    for (let i = 0; i < aStr.length + bStr.length; i++) {
        result[i] = 0;
    }
    for (let i = aStr.length - 1; i >= 0; i--) {
        a = parseInt(aStr[i]);
        for (let j = bStr.length - 1; j >= 0; j--) {
            b = parseInt(bStr[j]);
            result[i + j] += Math.floor((result[i + j + 1] + a * b) / 10);
            result[i + j + 1] = (result[i + j + 1] + a * b) % 10;
        }
    }
    a = 0
    while (result[a] == '0') {
        result[a++] = ''
    }
    console.log(result.join('') || 0);
})
