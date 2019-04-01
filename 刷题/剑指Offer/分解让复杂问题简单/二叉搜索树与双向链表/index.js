/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
require('../../../../utils/ObjectUtils')
require('../../../../utils/ArrayUtils')
function Convert(pRootOfTree) {
    if (!pRootOfTree)
        return null
    let output = []
    CLR(pRootOfTree, output)
    // 最后两个节点的left, right需要单独修改
    if (output.length > 1) {
        let prev = output[output.length - 2]
        let next = output.top()
        prev.right = next
        next.left = prev
        next.right = null
    }
    return output[0]
}
function CLR(root, output) {
    if (root) {
        CLR(root.left, output)

        // 用 js 操作，这里必须 clone，否则会直接影响后序操作
        // 假如用 c 语言实现，这里就不用 clone 了
        output.push(root.clone())
        let prev = (output.length > 1) ? output[output.length - 2] : null
        let current = output.top()
        if (prev)
            prev.right = current
        current.left = prev

        CLR(root.right, output)
    }
}
let {searchTree} = require('../../../../data/BinaryTree')
let root = Convert(searchTree)
root = null
while (root) {
    let left = root.left ? root.left.val : null
    let right = root.right ? root.right.val : null
    console.log(left, root.val, right)
    root = root.right
}
