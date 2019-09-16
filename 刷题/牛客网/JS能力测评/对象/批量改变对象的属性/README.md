## 题目描述

给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。

示例1

## 输入

[复制](javascript:void(0);)

```
var C = function(name) {this.name = name; return this;}; 
var obj1 = new C('Rebecca'); 
alterObjects(C, 'What\'s up'); obj1.greeting;
```

## 输出

[复制](javascript:void(0);)

```
What's up
```