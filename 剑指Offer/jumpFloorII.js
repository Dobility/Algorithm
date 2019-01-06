/**
 * 递归和循环
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */

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
