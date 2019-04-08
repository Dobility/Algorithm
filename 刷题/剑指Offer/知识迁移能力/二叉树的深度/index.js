/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let maxDepth
function TreeDepth(pRoot) {
    maxDepth = 0
    CLR(pRoot, 0)
    console.log(maxDepth)
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

let {root, TreeNode} = require('../../../../data/BinaryTree')
// let root = new TreeNode(1)
TreeDepth(root)
