# 题目描述

为 Array 对象添加一个去除重复项的方法

# 示例1

## 输入

```
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
```

## 输出

```
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
```

# 思路
用对象的 key 来过滤会有坑，比如 false 和 'false' 都会被当成一样的键名。这时可以补上类型名字上去 `typeof`。
对于元素是对象类型的，则不去重，比如这里的两个 `{}`
