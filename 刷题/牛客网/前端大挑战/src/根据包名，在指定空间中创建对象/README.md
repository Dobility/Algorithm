## 题目描述

根据包名，在指定空间中创建对象

## 输入描述:

```
namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
```

## 输出描述:

```
{a: {test: 1, b: {c: {d: {}}}}}
```

## 思路
假设存在某个 key，它的值不是纯对象也要被替换，比如这里的 b
