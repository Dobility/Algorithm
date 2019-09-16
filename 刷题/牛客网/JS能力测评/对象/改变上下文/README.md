## 题目描述

将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值

示例1

## 输入

[复制](javascript:void(0);)

```
alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
```

## 输出

[复制](javascript:void(0);)

```
Yo, Rebecca!
```