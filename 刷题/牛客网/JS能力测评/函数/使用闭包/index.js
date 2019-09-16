function makeClosures(arr, fn) {
    return arr.map(i => {
        return () => fn(i)
    })
}

// let result = makeClosures([1, 2, 3], function(x) {
//     return x * x
// })
//
// console.log(result[1]());
