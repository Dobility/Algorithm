// function curryIt(fn) {
//     return function(a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             }
//         }
//     }
// }
//
// var fn = function (a, b, c) {
//     console.log(a + b + c);
// }
//
// curryIt(fn)(1)(2)(3)

function curryIt(fn) {
    let args = [];
    let length = fn.length;
    let result = function (arg) {
        args.push(arg);
        length--;
        if (length <= 0) {
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
    return result;
}
