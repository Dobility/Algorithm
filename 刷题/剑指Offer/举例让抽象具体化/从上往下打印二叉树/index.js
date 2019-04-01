/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    let queue = [];
    let arr = [];
    if (root != null) {
        queue.push(root);
    }
    while (queue.length > 0) {
        let node = queue.shift();
        arr.push(node.val);
        if (node.left != null)
            queue.push(node.left);
        if (node.right != null)
            queue.push(node.right);
    }
    return arr;
}

let root = require('../../../../data/BinaryTree').root
console.log(PrintFromTopToBottom(root))
