// // 递归写法
// function jumpFloorII(number)
// {
//     if (number == 0) {
//      return 1;
//     } else {
//      var sum = 0;
//      for (var i = 1; i <= number; i++) {
//          sum += jumpFloorII(number - i);
//      }
//      return sum;
//     }
// }

// 迭代写法
function jumpFloorII(number)
{
    var ways = [1];
    for (var i = 1; i <= number; i++) {
        ways.push(0);
        for (var j = 0; j < i; j++) {
            ways[i] += ways[j];
        }
    }
    return ways[number];
}
