## 题目描述

将数组 arr 中的元素作为调用函数 fn 的参数

示例1

## 输入

[复制](javascript:void(0);)

```js
function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']
```

## 输出

[复制](javascript:void(0);)

```
Hello, Ellie!
```