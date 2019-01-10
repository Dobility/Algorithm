/**
 * 举例让抽象具体化
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */


function FindPath(root, expectNumber) {
    let result = [];
    findPath(root, expectNumber, [], result);
    let paths = [];
    result.forEach(path => {
        paths.push(eval(path));
    });
    return paths;
}

function findPath(root, expectNumber, path, result) {
    if (root) {
        path.push(root.val);
        if (!root.left && !root.right) {
            let sum = 0;
            path.forEach(i => {
                sum += i;
            });
            if (sum == expectNumber) {
                result.push(JSON.stringify(path));
            }
        }
        if (root.left) {
            findPath(root.left, expectNumber, path, result);
        }
        if (root.right) {
            findPath(root.right, expectNumber, path, result);
        }
        path.pop();
    }
}


let root = require('../data/BinaryTree').root;
console.log(FindPath(root, 50));
