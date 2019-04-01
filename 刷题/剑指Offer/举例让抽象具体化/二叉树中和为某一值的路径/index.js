/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
require('../../../../utils/MathUtils')
require('../../../../utils/ObjectUtils')
function FindPath(root, expectNumber) {
    let result = [];
    findPath(root, expectNumber, 0, [], result);
    return result;
}

function findPath(root, expectNumber, sum, path, result) {
    if (root) {
        path.push(root.val)
        sum += root.val
        if (sum <= expectNumber) {
            if (!root.left && !root.right) {
                // 到达叶子结点
                if (Math.sum(path) == expectNumber) {
                    result.push(path.clone())
                }
            }
            if (root.left) {
                findPath(root.left, expectNumber, sum, path, result)
            }
            if (root.right) {
                findPath(root.right, expectNumber, sum, path, result)
            }
        }
        sum -= path.pop()
    }
}

let root = require('../../../../data/BinaryTree').root
console.log(FindPath(root, 30))
