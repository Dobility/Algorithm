# 题目描述
  输入一棵二叉树，判断该二叉树是否是平衡二叉树。

# 思路
平衡二叉树的定义：
- 要么空树
- 要么它的左子树和右子树的深度差不超过1，并且它的左右子树也是平衡二叉树

把上面两句话变成 if-else 就可以了，伪代码如下：
```
isBalance(root)
    if (root null) 
        return true
    else
        return |depth(left) - depth(right)| <= 1 and isBalance(left) and isBalance(right)
```
