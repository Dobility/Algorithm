# 题目描述
```
nowcoder在家极度无聊，于是找了张纸开始统计素数的个数。
设函数f(n)返回从1-n之间素数的个数。
nowcoder 发现:
f(1)   = 0
f(10)  = 4
f(100) = 25
...
满足g(m) = 17 * m^2 / 3 - 22 * m / 3 + 5 / 3
其中m为n的位数。
他很激动，是不是自己发现了素数分布的规律了！
请你设计一个程序，求出f(n)，来验证nowcoder是不是正确的，也许还可以得诺贝尔奖呢。^_^
```

## 输入描述:

```
输入包括多组数据。
每组数据仅有一个整数n (1≤n≤10000000)。
```

## 输出描述:

```
对于每组数据输入，输出一行，为1->n(包括n)之间的素数的个数。
```

# 示例1

## 输入

```
1
10
65
100
0
```

## 输出

```
0
4
18
25
```

# 思路
求素数

<https://blog.csdn.net/afei__/article/details/80638460>