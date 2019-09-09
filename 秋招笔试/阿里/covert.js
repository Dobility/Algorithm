function convert1(n) {
    let base7 = ['f', 'c', 'e', '2', '0', '1', '7'];
    let nums = n.toString(7).split('');
    let con = nums.map(n => base7[n]).join('');
    return con;
}

function convert(n) {
    let base7 = ['f', 'c', 'e', '2', '0', '1', '7'];
    let ret = [];
    while (n > 0) {
        ret.push(n % 7);
        n = ~~(n / 7);
    }
    return ret.reverse().map(n => base7[n]).join('');
}

console.log(convert(7));
// 'cf'

console.log(convert(2017));
// '17cc'
