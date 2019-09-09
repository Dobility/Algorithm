function fizzBuzz(num) {
    if (typeof num !== 'number') {
        return false;
    }
    if (num % 3 && num % 5) {
        // 不能被3、5整除
        return num;
    }
    let ret = '';
    if (!(num % 3)) {
        ret += 'fizz';
    }
    if (!(num % 5)) {
        ret += 'buzz';
    }
    return ret;
}

// console.log(fizzBuzz('abc'));
// console.log(fizzBuzz(22));
// console.log(fizzBuzz(21));
// console.log(fizzBuzz(35));
// console.log(fizzBuzz(45));
