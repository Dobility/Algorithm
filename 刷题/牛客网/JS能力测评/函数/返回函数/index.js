function functionFunction(str) {
    return function() {
        return [str, ...arguments].join(', ');
    };
}

// function functionFunction(str) {
//     let ret = Array.from(arguments).join(', ');
//     let tmp = function(str) {
//         ret = [ret, Array.from(arguments).join(', ')].join(', ');
//         return tmp;
//     };
//     tmp.toString = function() {
//         return ret;
//     };
//     return tmp;
// }

console.log(functionFunction('Hello')('world'));
