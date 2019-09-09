# 题目描述

如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
否则如果字符 Unicode 编码 > 255 则长度为 2

# 示例1

## 输入

```
'hello world, 牛客', false
```

## 输出

```
17
```

# 思路
> JavaScript 与字符集 [http://www.ruanyifeng.com/blog/2014/12/unicode.html](http://www.ruanyifeng.com/blog/2014/12/unicode.html)

基本平面字符（比如ASCII字符）长度为1，而非基本平面的字符（比如中文韩文）长度为2，需要遍历字符的时候判断它的 charcode
