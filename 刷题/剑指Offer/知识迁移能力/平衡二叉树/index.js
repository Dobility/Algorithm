/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
    if (!pRoot) {
        return true
    } else {
        let b = Math.abs(TreeDepth(pRoot.left) - TreeDepth(pRoot.right)) <= 1
        return b && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
    }
}

// 计算树的深度
let maxDepth
function TreeDepth(pRoot) {
    maxDepth = 0
    CLR(pRoot, 0)
    return maxDepth
}
function CLR(root, depth) {
    if (root) {
        depth++
        if (!root.left && !root.right) {
            // 叶子结点，记录最大深度
            maxDepth = Math.max(maxDepth, depth)
        }
        CLR(root.left, depth)
        CLR(root.right, depth)
    }
}

// let {root} = require('../../../../data/BinaryTree')
let root = {
    val: 5,
    left: {
        val: 2,
        left: {
            val: 1, left: null, right: null
        },
        right: {
            val: 4, left: null, right: null
        }
    },
    right: null
}
console.log(IsBalanced_Solution(root))
