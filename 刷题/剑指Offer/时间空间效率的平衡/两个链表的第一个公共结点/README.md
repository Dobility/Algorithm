# 题目描述
  输入两个链表，找出它们的第一个公共结点。

# 思路
第一个公共结点？以第一条链表为参考。转成两层循环暴力搜索解决。

暴力法还可以优化，将一条链表存到 object 后，用 key 查找取代一层循环
