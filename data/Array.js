require('../utils/ArrayUtils')
let arr = [1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9]
let orderedArr = arr.concat([])
let messedArr = arr.shuffle()
let simpleArr = arr.distinct()
module.exports = {
    orderedArr, messedArr, simpleArr
}
