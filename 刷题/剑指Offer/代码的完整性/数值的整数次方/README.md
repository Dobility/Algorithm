# 题目描述
  给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
  
# 思路
## 边界条件
- exponent 可能是负数
- 0 不能有负数次方
## 思路1
直接用库函数，比如 js 的 Math.pow 计算
## 思路2
累乘，时间复杂度 O(n)
## 思路3
分治累乘，即看成偶数个（如果是奇数，去掉1个后再乘回来）一样的数，x^n=x^(n/2)*x^(n/2)，时间复杂度O(lgn)
