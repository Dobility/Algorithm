# 题目描述
  输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
  
# 思路
使用一个二进制变量，类似0010，其中唯一的 1 可以从左到右移动，用这个“游标”去计算某个整数二进制中的 1 的个数

这里需要介绍一下‘&’位计算方法：

> 两个数值的个位分别相与，同时为1才得1

举例子：
- 31 & 2 == 2，因为 11111 & 00010 = 00010，即 2
- 3 & 4 == 0，因为 011 & 100 = 000，即 0
