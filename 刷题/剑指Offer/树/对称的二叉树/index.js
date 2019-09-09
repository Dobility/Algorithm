/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    if (!pRoot) {
        return true
    }
    let qRoot = JSON.parse(JSON.stringify(pRoot))
    Mirror(qRoot)
    return CLR(pRoot, qRoot)
}

function Mirror(pRoot) {
    if (pRoot) {
        [pRoot.left, pRoot.right] = [pRoot.right, pRoot.left]
        Mirror(pRoot.left)
        Mirror(pRoot.right)
    }
}

function CLR(pRoot, qRoot) {
    if (pRoot && qRoot) {
        if (pRoot.val !== qRoot.val) {
            return false
        }
        return CLR(pRoot.left, qRoot.left) && CLR(pRoot.right, qRoot.right)
    } else if (!pRoot && !qRoot) {
        return true
    } else {
        return false
    }
}

let {TreeNode} = require('../../../../data/BinaryTree')
let root = new TreeNode(8)
root.left = new TreeNode(6)
root.right = new TreeNode(6)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(7)
root.right.left = new TreeNode(7)
console.log(isSymmetrical(root))
