# 题目描述
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

# 思路
遇到树的问题基本就是递归左右子树的操作了。
B是不是A的子结构，就是遍历的时候A某个结点和B的根节点的值一样，并且这个结点的左子树和右子树也满足前面的条件，那么B就是A的子结构了。
